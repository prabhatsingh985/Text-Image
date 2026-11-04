import { canvasToBlob, decodeImage, filesFromClipboard, isImage, isPdf, prepareCanvas, sizeOf, type Decoded } from '../lib/input/images';
import { downloadBlob, downloadZip } from '../lib/export/download';
import { PDF_OVERHEAD, compressImage, compressPdf, jpegToPdf } from '../lib/compress/target-size';
import { isPasswordError, openPdf, renderPage } from '../lib/input/pdf';
import { baseName, fmt } from '../lib/text';
import { bindDropzone, bindFileInput } from '../lib/ui/dropzone';
import { toast } from '../lib/ui/toast';

// The image compressor and resize image pages: every file is shrunk to the chosen limit as soon as
// it is added, and again whenever an option changes. Only the resize pages have the pixel-size inputs.

interface Entry {
  id: number;
  file: File;
  el: HTMLLIElement;
  thumbUrl?: string;
  result?: { blob: Blob; name: string };
  /** Bumped on every run, so a slow older run cannot overwrite a newer result. */
  run: number;
}

/** Shown like Windows Explorer does (1 KB = 1024 bytes). */
const kb = (bytes: number) => `${bytes < 1024 * 1000 ? (bytes / 1024).toFixed(1) : Math.round(bytes / 1024)} KB`;

const MIN_KB = 5;
const MAX_KB = 10000;
const MIN_PX = 16;
const MAX_PX = 8000;
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export function initResizeKb(root: HTMLElement) {
  const t: Record<string, string> = JSON.parse(root.dataset.i18n || '{}');
  const $ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = root) => scope.querySelector<T>(sel)!;
  const dropzone = $('[data-dropzone]');
  const input = $<HTMLInputElement>('[data-input]');
  const camera = $<HTMLInputElement>('[data-camera]');
  const target = $<HTMLInputElement>('[data-target]');
  const format = $<HTMLSelectElement>('[data-format]');
  const widthIn = root.querySelector<HTMLInputElement>('[data-width]');
  const heightIn = root.querySelector<HTMLInputElement>('[data-height]');
  const dimPresets = [...root.querySelectorAll<HTMLButtonElement>('[data-dims]')];
  const workspace = $('[data-workspace]');
  const list = $<HTMLUListElement>('[data-list]');
  const summary = $('[data-summary]');
  const zipBtn = $<HTMLButtonElement>('[data-zip]');
  const presets = [...root.querySelectorAll<HTMLButtonElement>('[data-preset]')];

  let entries: Entry[] = [];
  let nextId = 1;
  let queue = Promise.resolve();

  if (matchMedia('(pointer: coarse)').matches) $('[data-camera-wrap]').classList.remove('hidden');

  bindDropzone(dropzone, input, add);
  bindFileInput(camera, add);
  document.addEventListener('paste', (e) => {
    const files = filesFromClipboard(e);
    if (files.length) add(files);
  });

  /** The limit in use: what was typed, within range. An empty or invalid box falls back to the page's own size. */
  const limitKb = () => {
    const typed = Number(target.value);
    return typed > 0 ? clamp(typed, MIN_KB, MAX_KB) : Number(target.defaultValue);
  };
  /** A typed pixel size, within range. Empty, zero, negative or invalid means no size was asked for. */
  const pixels = (el: HTMLInputElement | null) => {
    const typed = Math.round(Number(el?.value));
    return typed > 0 ? clamp(typed, MIN_PX, MAX_PX) : undefined;
  };

  const syncPresets = () => presets.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.preset === target.value)));
  presets.forEach((b) =>
    b.addEventListener('click', () => {
      target.value = b.dataset.preset!;
      syncPresets();
      rerunAll();
    }),
  );
  syncPresets();

  // The pixel-size chip that matches the typed width and height ("" is the original size).
  const syncDims = () => {
    const w = widthIn?.value ?? '';
    const h = heightIn?.value ?? '';
    const current = !w && !h ? '' : `${w}x${h}`;
    dimPresets.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.dims === current)));
  };
  dimPresets.forEach((b) =>
    b.addEventListener('click', () => {
      const [w = '', h = ''] = b.dataset.dims ? b.dataset.dims.split('x') : [];
      widthIn!.value = w;
      heightIn!.value = h;
      syncDims();
      rerunAll();
    }),
  );
  // Browsers can bring back typed values on reload.
  syncDims();

  let debounce: ReturnType<typeof setTimeout> | undefined;
  for (const el of [target, widthIn, heightIn]) {
    el?.addEventListener('input', () => {
      syncPresets();
      syncDims();
      clearTimeout(debounce);
      debounce = setTimeout(rerunAll, 600);
    });
  }
  // On leaving a box, show the value actually in use. Not while typing: on the way to "200", "2" is not a mistake.
  target.addEventListener('change', () => {
    target.value = String(limitKb());
    syncPresets();
  });
  for (const el of [widthIn, heightIn]) {
    el?.addEventListener('change', () => {
      el.value = pixels(el)?.toString() ?? '';
      syncDims();
    });
  }
  format.addEventListener('change', rerunAll);

  $('[data-clear]').addEventListener('click', () => {
    entries.forEach((en) => en.thumbUrl && URL.revokeObjectURL(en.thumbUrl));
    entries = [];
    render();
  });
  zipBtn.addEventListener('click', () => {
    const done = entries.filter((e) => e.result);
    if (done.length) downloadZip(done.map((e) => ({ name: e.result!.name, data: e.result!.blob })), `resized-${limitKb()}kb.zip`);
  });

  function add(files: File[]) {
    const ok = files.filter((f) => isImage(f) || isPdf(f));
    if (ok.length < files.length) toast(t.unsupported);
    for (const file of ok) {
      const entry: Entry = { id: nextId++, file, el: document.createElement('li'), run: 0 };
      entries.push(entry);
      buildItem(entry);
      process(entry);
    }
    render();
  }

  function rerunAll() {
    entries.forEach(process);
  }

  /** A limit "in KB" is read as 1000 bytes, the stricter of the two meanings, so every form accepts the file. */
  const maxBytes = () => Math.floor(limitKb() * 1000);

  function process(entry: Entry) {
    const run = ++entry.run;
    entry.result = undefined;
    setStatus(entry, t.compressing);
    queue = queue.then(async () => {
      if (run !== entry.run || !entries.includes(entry)) return;
      try {
        await compress(entry, run);
      } catch (err) {
        console.error(err);
        if (run === entry.run) {
          setStatus(entry, t.failed, true);
          if (isPasswordError(err)) $('[data-note]', entry.el).textContent = t.pdfPassword;
        }
      }
      render();
    });
  }

  async function compress(entry: Entry, run: number) {
    const limit = maxBytes();
    const limitLabel = limitKb();
    const { file } = entry;
    const stem = baseName(file.name);

    if (isPdf(file)) {
      const out = await compressPdf(file, limit, (n, total) => run === entry.run && setStatus(entry, fmt(t.pageOf, { n, total })));
      if (run !== entry.run) return;
      if (!entry.thumbUrl) entry.thumbUrl = await pdfThumb(file);
      entry.result = { blob: out.blob, name: `${stem}-${limitLabel}kb.pdf` };
      showResult(entry, {
        size: out.blob.size,
        detail: out.pages === 1 ? t.pageOne : fmt(t.pages, { n: out.pages }),
        fits: out.fits,
        note: out.blob === file ? t.alreadySmall : out.rasterized ? t.rasterized : '',
      });
      return;
    }

    const decoded = await decodeImage(file);
    if (!decoded) throw new Error('decode failed');
    try {
      if (!entry.thumbUrl) entry.thumbUrl = await imageThumb(decoded);
      const width = pixels(widthIn);
      const height = pixels(heightIn);
      const asPdf = format.value === 'pdf';
      // A JPEG already under the limit, with no size asked for, is handed back untouched.
      const untouched = !asPdf && !width && !height && file.size <= limit && /jpe?g$/i.test(file.type || file.name);
      const img = untouched ? null : await compressImage(decoded, { maxBytes: asPdf ? limit - PDF_OVERHEAD : limit, width, height });
      if (run !== entry.run) return;
      const blob = untouched ? file : asPdf ? await jpegToPdf(img!.blob, img!.width, img!.height) : img!.blob;
      const source = sizeOf(decoded);
      const dims = untouched ? `${source.width} × ${source.height} px` : `${img!.width} × ${img!.height} px`;
      entry.result = { blob, name: `${stem}-${limitLabel}kb.${asPdf ? 'pdf' : 'jpg'}` };
      // The size the visitor expects: with one side typed, the other follows the image's shape.
      const want = {
        w: width ?? (height ? Math.round((source.width * height) / source.height) : source.width),
        h: height ?? (width ? Math.round((source.height * width) / source.width) : source.height),
      };
      const resized = img && (img.width !== want.w || img.height !== want.h);
      showResult(entry, {
        size: blob.size,
        detail: dims,
        fits: blob.size <= limit && (img?.fits ?? true),
        note: untouched ? t.alreadySmall : resized ? fmt(t.dimsChanged, { w: want.w, h: want.h, kb: limitLabel }) : '',
      });
    } finally {
      if ('close' in decoded) decoded.close();
    }
  }

  /** A thumbnail is only a nicety: a problem making one must not stop the file itself. */
  async function imageThumb(decoded: Decoded): Promise<string | undefined> {
    try {
      return URL.createObjectURL(await canvasToBlob(prepareCanvas(decoded, { maxSide: 320, upscaleSmall: false }), 'image/jpeg', 0.8));
    } catch {
      return undefined;
    }
  }

  async function pdfThumb(file: File): Promise<string | undefined> {
    try {
      const { doc, close } = await openPdf(file);
      const page = await doc.getPage(1);
      const canvas = await renderPage(page, 160 / page.getViewport({ scale: 1 }).width);
      await close();
      return URL.createObjectURL(await canvasToBlob(canvas, 'image/jpeg', 0.8));
    } catch {
      return undefined;
    }
  }

  function buildItem(entry: Entry) {
    const li = entry.el;
    li.className = 'card flex flex-wrap items-center gap-x-4 gap-y-2 p-3 sm:flex-nowrap sm:p-4';
    li.innerHTML = `
      <div class="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-xl bg-surface-2 text-xs font-bold text-ink-soft" data-thumb></div>
      <div class="min-w-0 flex-1 basis-[calc(100%-5rem)] sm:basis-0">
        <p class="truncate font-semibold" data-name></p>
        <p class="mt-0.5 text-sm text-ink-muted" data-sizes></p>
        <p class="mt-0.5 text-xs text-ink-soft" data-note></p>
      </div>
      <div class="ms-auto flex shrink-0 items-center gap-1">
        <button type="button" class="btn-primary btn-sm" data-dl disabled></button>
        <button type="button" class="btn-ghost btn-sm px-2" data-del>✕</button>
      </div>`;
    $('[data-name]', li).textContent = entry.file.name;
    const dl = $<HTMLButtonElement>('[data-dl]', li);
    dl.textContent = t.download;
    dl.onclick = () => entry.result && downloadBlob(entry.result.blob, entry.result.name);
    const del = $<HTMLButtonElement>('[data-del]', li);
    del.setAttribute('aria-label', t.remove);
    del.onclick = () => {
      if (entry.thumbUrl) URL.revokeObjectURL(entry.thumbUrl);
      entries = entries.filter((e) => e !== entry);
      render();
    };
  }

  function setStatus(entry: Entry, text: string, error = false) {
    const sizes = $('[data-sizes]', entry.el);
    sizes.textContent = `${kb(entry.file.size)} · ${text}`;
    sizes.classList.toggle('text-red-600', error);
    $('[data-note]', entry.el).textContent = '';
    $<HTMLButtonElement>('[data-dl]', entry.el).disabled = true;
  }

  function showResult(entry: Entry, r: { size: number; detail: string; fits: boolean; note: string }) {
    const thumb = $('[data-thumb]', entry.el);
    if (entry.thumbUrl && !thumb.querySelector('img')) {
      const img = document.createElement('img');
      img.alt = '';
      img.className = 'max-h-full max-w-full object-contain';
      img.src = entry.thumbUrl;
      thumb.replaceChildren(img);
    } else if (!entry.thumbUrl) thumb.textContent = isPdf(entry.file) ? 'PDF' : '';
    const sizes = $('[data-sizes]', entry.el);
    sizes.classList.remove('text-red-600');
    sizes.innerHTML = '';
    const before = document.createElement('span');
    before.textContent = `${kb(entry.file.size)} → `;
    const after = document.createElement('strong');
    after.className = r.fits ? 'text-ink' : 'text-red-600';
    after.textContent = kb(r.size);
    const rest = document.createElement('span');
    rest.textContent = ` · ${r.detail}`;
    sizes.append(before, after, rest);
    $('[data-note]', entry.el).textContent = r.fits ? r.note : fmt(t.tooBig, { kb: limitKb() });
    $<HTMLButtonElement>('[data-dl]', entry.el).disabled = false;
  }

  function render() {
    workspace.hidden = entries.length === 0;
    summary.textContent = entries.length === 1 ? t.fileOne : fmt(t.files, { n: entries.length });
    zipBtn.hidden = entries.length < 2;
    zipBtn.disabled = !entries.some((e) => e.result);
    list.replaceChildren(...entries.map((e) => e.el));
  }
}

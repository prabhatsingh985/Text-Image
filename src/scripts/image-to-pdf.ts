import { canvasToBlob, decodeImage, filesFromClipboard, isImage, isPngData, prepareCanvas, sizeOf } from '../lib/input/images';
import { downloadBlob } from '../lib/export/download';
import { imagesToPdf, type Orientation, type PageSize } from '../lib/export/pdf';
import { fmt } from '../lib/text';
import { bindDropzone, bindFileInput } from '../lib/ui/dropzone';
import { revealResults } from '../lib/ui/reveal';
import { toast } from '../lib/ui/toast';

interface Entry {
  id: number;
  file: File;
  thumbUrl: string;
  el: HTMLLIElement;
}

/** While a batch is being read, the list is redrawn at most this often, so big batches show progress without flicker. */
const REDRAW_MS = 150;

export function initImageToPdf(root: HTMLElement) {
  const t: Record<string, string> = JSON.parse(root.dataset.i18n || '{}');
  const $ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = root) => scope.querySelector<T>(sel)!;
  const dropzone = $('[data-dropzone]');
  const input = $<HTMLInputElement>('[data-input]');
  const camera = $<HTMLInputElement>('[data-camera]');
  const workspace = $('[data-workspace]');
  const list = $<HTMLOListElement>('[data-list]');
  const summary = $('[data-summary]');
  const createBtn = $<HTMLButtonElement>('[data-create]');

  let entries: Entry[] = [];
  let nextId = 1;
  /** Files are read one batch at a time, so pages keep the order they were added in. */
  let reading = Promise.resolve();
  let batchesReading = 0;
  /** Bumped by Clear all, so files still being read do not come back after it. */
  let clearCount = 0;
  let creating = false;

  if (matchMedia('(pointer: coarse)').matches) $('[data-camera-wrap]').classList.remove('hidden');

  bindDropzone(dropzone, input, add);
  bindFileInput(camera, add);
  document.addEventListener('paste', (e) => {
    const files = filesFromClipboard(e).filter(isImage);
    if (files.length) add(files);
  });

  $('[data-clear]').addEventListener('click', () => {
    entries.forEach((en) => URL.revokeObjectURL(en.thumbUrl));
    entries = [];
    clearCount++;
    render();
  });
  createBtn.addEventListener('click', create);

  // A PDF cannot be made from a list that is still growing: the new pages would be left out without a word.
  function syncCreate() {
    createBtn.disabled = creating || batchesReading > 0;
  }

  function add(files: File[]) {
    const ok = files.filter(isImage);
    if (ok.length < files.length) toast(t.unsupported);
    if (!ok.length) return;
    batchesReading++;
    syncCreate();
    reading = reading.then(() => readFiles(ok)).finally(() => {
      batchesReading--;
      syncCreate();
    });
  }

  async function readFiles(files: File[]) {
    let drawn = performance.now();
    const clearsBefore = clearCount;
    let revealed = false;
    const show = () => {
      render();
      // Once per batch, when its first pages are on screen.
      if (!revealed && entries.length) revealResults(workspace);
      revealed = true;
    };
    for (const file of files) {
      if (clearCount !== clearsBefore) return;
      try {
        const decoded = await decodeImage(file);
        if (!decoded) {
          toast(`${t.failed}: ${file.name}`);
          continue;
        }
        // Small JPEG thumbnail for the list; the full image is re-read when the PDF is made.
        const thumb = prepareCanvas(decoded, { maxSide: 480 });
        if ('close' in decoded) decoded.close();
        const blob = await canvasToBlob(thumb, 'image/jpeg', 0.8);
        if (clearCount !== clearsBefore) return;
        entries.push({ id: nextId++, file, thumbUrl: URL.createObjectURL(blob), el: document.createElement('li') });
      } catch (err) {
        console.error(err);
        toast(`${t.failed}: ${file.name}`);
      }
      if (performance.now() - drawn > REDRAW_MS) {
        show();
        drawn = performance.now();
      }
    }
    show();
  }

  function move(from: number, to: number) {
    if (to < 0 || to >= entries.length) return;
    const [e] = entries.splice(from, 1);
    entries.splice(to, 0, e);
    render();
  }

  let dragFrom = -1;
  function render() {
    workspace.hidden = entries.length === 0;
    summary.textContent = entries.length === 1 ? t.fileOne : fmt(t.files, { n: entries.length });
    list.replaceChildren(
      ...entries.map((entry, i) => {
        const li = entry.el;
        li.className = 'group relative cursor-grab overflow-hidden rounded-2xl bg-surface-2 p-2 transition hover:-translate-y-0.5 active:cursor-grabbing';
        li.draggable = true;
        li.innerHTML = `
          <div class="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl bg-surface">
            <img alt="" draggable="false" class="max-h-full max-w-full object-contain" />
          </div>
          <div class="mt-2 flex items-center gap-1">
            <span class="me-auto grid h-6 min-w-6 place-items-center rounded-full bg-brand-300 px-1.5 text-xs font-bold text-[#202020]"></span>
            <button type="button" class="btn-ghost btn-sm px-2" data-up>↑</button>
            <button type="button" class="btn-ghost btn-sm px-2" data-down>↓</button>
            <button type="button" class="btn-ghost btn-sm px-2" data-del>✕</button>
          </div>`;
        li.querySelector('img')!.src = entry.thumbUrl;
        li.querySelector('span')!.textContent = String(i + 1);
        const up = li.querySelector<HTMLButtonElement>('[data-up]')!;
        const down = li.querySelector<HTMLButtonElement>('[data-down]')!;
        const del = li.querySelector<HTMLButtonElement>('[data-del]')!;
        up.setAttribute('aria-label', t.moveUp);
        down.setAttribute('aria-label', t.moveDown);
        del.setAttribute('aria-label', t.remove);
        up.disabled = i === 0;
        down.disabled = i === entries.length - 1;
        up.onclick = () => move(i, i - 1);
        down.onclick = () => move(i, i + 1);
        del.onclick = () => {
          URL.revokeObjectURL(entry.thumbUrl);
          entries.splice(i, 1);
          render();
        };
        li.ondragstart = (e) => {
          dragFrom = i;
          e.dataTransfer?.setData('text/plain', String(i));
          li.classList.add('opacity-50');
        };
        li.ondragend = () => li.classList.remove('opacity-50');
        li.ondragover = (e) => e.preventDefault();
        li.ondrop = (e) => {
          e.preventDefault();
          e.stopPropagation();
          // Files from the computer are new pages; only a card being dragged is a change of order.
          const files = [...(e.dataTransfer?.files ?? [])];
          if (files.length) add(files);
          else if (dragFrom >= 0) move(dragFrom, i);
          dragFrom = -1;
        };
        return li;
      }),
    );
  }

  async function create() {
    if (!entries.length || creating) return;
    const label = createBtn.textContent;
    creating = true;
    syncCreate();
    createBtn.textContent = t.creating;
    try {
      const smaller = $<HTMLInputElement>('[data-smaller]').checked;
      const images = [];
      for (const entry of [...entries]) {
        const decoded = await decodeImage(entry.file);
        if (!decoded) continue;
        const { width, height } = sizeOf(decoded);
        let bytes: Uint8Array;
        let type: 'jpeg' | 'png';
        // By the contents, not the name or type: a file can be called .png and hold a JPEG.
        if (!smaller && (await isPngData(entry.file))) {
          // PNGs go in untouched (lossless, and they carry no EXIF rotation).
          bytes = new Uint8Array(await entry.file.arrayBuffer());
          type = 'png';
        } else {
          // Everything else is redrawn so EXIF rotation from phone cameras is applied.
          const canvas = prepareCanvas(decoded, { maxSide: smaller ? 2000 : 6000, upscaleSmall: false });
          bytes = new Uint8Array(await (await canvasToBlob(canvas, 'image/jpeg', smaller ? 0.72 : 0.92)).arrayBuffer());
          canvas.width = canvas.height = 0;
          type = 'jpeg';
        }
        if ('close' in decoded) decoded.close();
        images.push({ bytes, type, width, height });
      }
      if (!images.length) throw new Error('No image could be read');
      const pdf = await imagesToPdf(images, {
        size: $<HTMLSelectElement>('[data-size]').value as PageSize,
        orientation: $<HTMLSelectElement>('[data-orientation]').value as Orientation,
        margin: Number($<HTMLSelectElement>('[data-margin]').value),
      });
      downloadBlob(new Blob([pdf as BlobPart], { type: 'application/pdf' }), 'images.pdf');
    } catch (err) {
      console.error(err);
      toast(t.failed);
    } finally {
      creating = false;
      syncCreate();
      createBtn.textContent = label;
    }
  }
}

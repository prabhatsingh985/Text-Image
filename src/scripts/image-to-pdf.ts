import { canvasToBlob, decodeImage, filesFromClipboard, isImage, prepareCanvas, sizeOf } from '../lib/input/images';
import { downloadBlob } from '../lib/export/download';
import { imagesToPdf, type Orientation, type PageSize } from '../lib/export/pdf';
import { fmt } from '../lib/text';
import { toast } from '../lib/ui/toast';

interface Entry {
  id: number;
  file: File;
  thumbUrl: string;
  el: HTMLLIElement;
}

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

  if (matchMedia('(pointer: coarse)').matches) $('[data-camera-wrap]').classList.remove('hidden');

  dropzone.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement).closest('label')) input.click();
  });
  dropzone.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === dropzone) {
      e.preventDefault();
      input.click();
    }
  });
  for (const el of [input, camera]) {
    el.addEventListener('change', () => {
      add([...(el.files ?? [])]);
      el.value = '';
    });
  }
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.dataset.over = '';
  });
  dropzone.addEventListener('dragleave', () => delete dropzone.dataset.over);
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    delete dropzone.dataset.over;
    add([...(e.dataTransfer?.files ?? [])]);
  });
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => e.preventDefault());
  document.addEventListener('paste', (e) => {
    const files = filesFromClipboard(e).filter(isImage);
    if (files.length) add(files);
  });

  $('[data-clear]').addEventListener('click', () => {
    entries.forEach((en) => URL.revokeObjectURL(en.thumbUrl));
    entries = [];
    render();
  });
  createBtn.addEventListener('click', create);

  async function add(files: File[]) {
    const ok = files.filter(isImage);
    if (ok.length < files.length) toast(t.unsupported);
    for (const file of ok) {
      const decoded = await decodeImage(file);
      if (!decoded) {
        toast(`${t.failed}: ${file.name}`);
        continue;
      }
      // Small JPEG thumbnail for the list; the full image is re-read when the PDF is made.
      const thumb = prepareCanvas(decoded, { maxSide: 480 });
      if ('close' in decoded) decoded.close();
      const thumbUrl = URL.createObjectURL(await canvasToBlob(thumb, 'image/jpeg', 0.8));
      entries.push({ id: nextId++, file, thumbUrl, el: document.createElement('li') });
    }
    render();
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
        li.className = 'card group relative overflow-hidden p-2';
        li.draggable = true;
        li.innerHTML = `
          <div class="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg bg-surface-2">
            <img alt="" class="max-h-full max-w-full object-contain" />
          </div>
          <div class="mt-2 flex items-center gap-1">
            <span class="me-auto rounded-md bg-surface-2 px-2 py-0.5 text-xs font-semibold"></span>
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
          if (dragFrom >= 0) move(dragFrom, i);
          dragFrom = -1;
        };
        return li;
      }),
    );
  }

  async function create() {
    if (!entries.length) return;
    const label = createBtn.textContent;
    createBtn.disabled = true;
    createBtn.textContent = t.creating;
    try {
      const smaller = $<HTMLInputElement>('[data-smaller]').checked;
      const images = [];
      for (const entry of entries) {
        const decoded = await decodeImage(entry.file);
        if (!decoded) continue;
        const { width, height } = sizeOf(decoded);
        let bytes: Uint8Array;
        let type: 'jpeg' | 'png';
        if (!smaller && entry.file.type === 'image/png') {
          // PNGs go in untouched (lossless, and they carry no EXIF rotation).
          bytes = new Uint8Array(await entry.file.arrayBuffer());
          type = 'png';
        } else {
          // Everything else is redrawn so EXIF rotation from phone cameras is applied.
          const canvas = prepareCanvas(decoded, { maxSide: smaller ? 2000 : 6000, upscaleSmall: false });
          bytes = new Uint8Array(await (await canvasToBlob(canvas, 'image/jpeg', smaller ? 0.72 : 0.92)).arrayBuffer());
          type = 'jpeg';
        }
        if ('close' in decoded) decoded.close();
        images.push({ bytes, type, width, height });
      }
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
      createBtn.disabled = false;
      createBtn.textContent = label;
    }
  }
}

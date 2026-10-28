import { extractDocument, extractSlides, isDocFile, isLegacyOffice, isSlideFile, type Slide } from '../lib/input/office';
import { baseName, countWords, fmt } from '../lib/text';
import { copyText, downloadText, downloadZip } from '../lib/export/download';
import { toast } from '../lib/ui/toast';

// Word to Text and PPT to Text. No OCR: the text is read straight out of the file.

type Strings = Record<string, string>;

interface Item {
  file: File;
  el: HTMLLIElement;
  /** Word: the document text. Slides: rebuilt from `slides` whenever an option changes. */
  text?: string;
  slides?: Slide[];
  generated: string;
}

export function initDocTool(root: HTMLElement) {
  const slidesMode = root.dataset.mode === 'slides';
  const t: Strings = JSON.parse(root.dataset.i18n || '{}');
  const $ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = root) => scope.querySelector<T>(sel)!;

  const dropzone = $('[data-dropzone]');
  const input = $<HTMLInputElement>('[data-input]');
  const toolbar = $('[data-toolbar]');
  const summary = $('[data-summary]');
  const list = $<HTMLOListElement>('[data-results]');
  const template = $<HTMLTemplateElement>('[data-item-template]');
  const items: Item[] = [];

  // ---------- input ----------
  dropzone.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement).closest('label')) input.click();
  });
  dropzone.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === dropzone) {
      e.preventDefault();
      input.click();
    }
  });
  input.addEventListener('change', () => {
    addFiles([...(input.files ?? [])]);
    input.value = '';
  });
  let dragDepth = 0;
  dropzone.addEventListener('dragenter', (e) => {
    e.preventDefault();
    dragDepth++;
    dropzone.dataset.over = '';
  });
  dropzone.addEventListener('dragleave', () => {
    if (--dragDepth <= 0) delete dropzone.dataset.over;
  });
  dropzone.addEventListener('dragover', (e) => e.preventDefault());
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dragDepth = 0;
    delete dropzone.dataset.over;
    addFiles([...(e.dataTransfer?.files ?? [])]);
  });
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => e.preventDefault());

  function addFiles(files: File[]) {
    if (files.some(isLegacyOffice)) toast(t.legacyFormat);
    const ok = files.filter(slidesMode ? isSlideFile : isDocFile);
    if (ok.length < files.filter((f) => !isLegacyOffice(f)).length) toast(t.unsupported);
    for (const file of ok) {
      const item: Item = { file, el: createEl(file), generated: '' };
      items.push(item);
      list.appendChild(item.el);
      process(item);
    }
    updateToolbar();
    items[items.length - ok.length]?.el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  async function process(item: Item) {
    $('[data-status]', item.el).textContent = t.readingFile;
    try {
      if (slidesMode) item.slides = await extractSlides(item.file);
      else item.text = await extractDocument(item.file);
      $('[data-status]', item.el).textContent = slidesMode ? fmt(t.slidesCount, { n: item.slides!.length }) : t.done;
      render(item);
    } catch (err) {
      console.error(err);
      $('[data-status]', item.el).textContent = t.failed;
      const note = $('[data-note]', item.el);
      note.hidden = false;
      note.textContent = t.unsupported;
    }
    updateToolbar();
  }

  // ---------- rendering ----------
  function createEl(file: File): HTMLLIElement {
    const el = template.content.firstElementChild!.cloneNode(true) as HTMLLIElement;
    $('[data-name]', el).textContent = file.name;
    $('[data-ext]', el).textContent = (file.name.split('.').pop() ?? '').toUpperCase().slice(0, 4);
    const ta = $<HTMLTextAreaElement>('[data-text]', el);
    ta.readOnly = true;
    ta.placeholder = '…';
    ta.addEventListener('input', () => updateCount(el));
    $('[data-remove]', el).addEventListener('click', () => {
      const i = items.findIndex((x) => x.el === el);
      if (i >= 0) items.splice(i, 1);
      el.remove();
      updateToolbar();
    });
    $('[data-copy]', el).addEventListener('click', () => copy(ta.value));
    $('[data-download]', el).addEventListener('click', () => downloadText(ta.value, `${baseName(file.name)}.txt`));
    return el;
  }

  function textFor(item: Item): string {
    let text = item.text ?? '';
    if (item.slides) {
      text = item.slides
        .map((s) => {
          // Speaker notes are included whenever the deck has them.
          const parts = [`— ${fmt(t.slideOf, { n: s.n })} —\n${s.text}`];
          if (s.notes) parts.push(`${t.notes}: ${s.notes}`);
          return parts.join('\n\n').trim();
        })
        .filter(Boolean)
        .join('\n\n');
    }
    text = text.replace(/[  ]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n');
    return text.trim();
  }

  function render(item: Item) {
    if (item.text === undefined && !item.slides) return;
    const ta = $<HTMLTextAreaElement>('[data-text]', item.el);
    const next = textFor(item);
    ta.value = next;
    item.generated = next;
    ta.readOnly = false;
    ta.placeholder = next ? '' : t.noText;
    updateCount(item.el);
  }

  function updateCount(el: HTMLElement) {
    const text = $<HTMLTextAreaElement>('[data-text]', el).value;
    $('[data-count]', el).textContent = text ? `${fmt(t.words, { n: countWords(text) })} · ${fmt(t.chars, { n: text.length })}` : '';
  }

  async function copy(text: string) {
    if (text && (await copyText(text))) toast(t.copied);
  }

  function currentText(item: Item) {
    return $<HTMLTextAreaElement>('[data-text]', item.el).value;
  }

  function updateToolbar() {
    toolbar.hidden = !items.length;
    summary.textContent = items.length === 1 ? t.fileOne : fmt(t.files, { n: items.length });
    toolbar.querySelectorAll('button').forEach((b) => b.remove());
    if (!items.length) return;
    const done = items.filter((i) => i.generated);
    const mk = (label: string, onClick: () => void, primary = false) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `${primary ? 'btn-primary' : 'btn-secondary'} btn-sm`;
      b.textContent = label;
      b.addEventListener('click', onClick);
      toolbar.appendChild(b);
    };
    if (done.length > 1) {
      mk(t.copyAll, () => copy(done.map(currentText).join('\n\n')));
      mk(t.downloadAllZip, () => downloadZip(done.map((i) => ({ name: `${baseName(i.file.name)}.txt`, data: currentText(i) })), 'text.zip'), true);
    }
    mk(t.clearAll, () => {
      items.splice(0).forEach((i) => i.el.remove());
      updateToolbar();
    });
  }
}

import { recognize, setLanguages, warmUp, isReady, type ProgressStage } from '../lib/ocr/engine';
import { defaultLangs, isRtl, recognizeAuto } from '../lib/ocr/languages';
import { allLines, allWords, type OcrResult } from '../lib/ocr/types';
import { decodeImage, filesFromClipboard, isImage, isPdf, prepareCanvas } from '../lib/input/images';
import { openPdf, pageText, pageWords, parseRange, renderPage } from '../lib/input/pdf';
import { buildText, countWords, fmt, baseName } from '../lib/text';
import { buildStructure, type DocBlock } from '../lib/layout/structure';
import { detectTable, looksLikeTable, type Grid } from '../lib/layout/tables';
import { copyText, downloadBlob, downloadText, downloadZip } from '../lib/export/download';
import { renderOverlay, flash, UNCERTAIN_BELOW } from '../lib/ui/overlay';
import { toast } from '../lib/ui/toast';

type Mode = 'text' | 'screenshot' | 'word' | 'excel' | 'pdf' | 'pdf-excel';
type Strings = Record<string, string>;

interface Item {
  id: number;
  file: File;
  el: HTMLLIElement;
  rotate: 0 | 90 | 180 | 270;
  result?: OcrResult;
  blocks?: DocBlock[];
  grid?: Grid;
  /** Text as first produced, to know whether the user edited the box. */
  generated: string;
  rtl: boolean;
  done: boolean;
  /** PDF: text per page. */
  pdfPages?: { page: number; text: string; ocr: boolean }[];
  /** PDF to Excel: one table per page. */
  pdfGrids?: { page: number; grid: Grid; ocr: boolean }[];
}

const PREVIEW_MAX = 1400;
/** Results below this confidence get a second read with image clean-up turned on. */
const ENHANCE_BELOW = 65;
const CONCURRENCY = 2;

export function initOcrTool(root: HTMLElement) {
  const mode = root.dataset.mode as Mode;
  // Screenshot to Text is Image to Text with a paste-first page; PDF to Excel is the table flow for PDFs.
  const textLike = mode === 'text' || mode === 'screenshot' || mode === 'pdf';
  const tableLike = mode === 'excel' || mode === 'pdf-excel';
  const t: Strings = JSON.parse(root.dataset.i18n || '{}');
  const $ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = root) => scope.querySelector<T>(sel)!;

  const dropzone = $('[data-dropzone]');
  const input = $<HTMLInputElement>('[data-input]');
  const camera = root.querySelector<HTMLInputElement>('[data-camera]');
  const toolbar = $('[data-toolbar]');
  const summary = $('[data-summary]');
  const list = $<HTMLOListElement>('[data-results]');
  const template = $<HTMLTemplateElement>('[data-item-template]');

  const items: Item[] = [];
  const queue: Item[] = [];
  let running = 0;
  let nextId = 1;

  // ---------- settings ----------
  // The text language is detected per image; this only picks what the engine preloads.
  const pageLang = root.dataset.defaultLang || 'eng';
  setLanguages(defaultLangs(pageLang).split('+'));
  // Phones get the camera button. Download the engine early only on desktops.
  if (camera && matchMedia('(pointer: coarse)').matches) camera.closest('label')?.classList.remove('hidden');
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  const idle = (cb: () => void) => ('requestIdleCallback' in window ? requestIdleCallback(cb, { timeout: 4000 }) : setTimeout(cb, 2500));
  if (!saveData && !matchMedia('(pointer: coarse)').matches) setTimeout(() => idle(() => warmUp()), 2500);
  dropzone.addEventListener('pointerenter', () => warmUp(), { once: true });
  dropzone.addEventListener('touchstart', () => warmUp(), { once: true, passive: true });

  // ---------- input ----------
  const openPicker = () => input.click();
  dropzone.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement).closest('label')) openPicker();
  });
  dropzone.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === dropzone) {
      e.preventDefault();
      openPicker();
    }
  });
  input.addEventListener('change', () => {
    addFiles([...(input.files ?? [])]);
    input.value = '';
  });
  camera?.addEventListener('change', () => {
    addFiles([...(camera.files ?? [])]);
    camera.value = '';
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
  // Files dropped outside the box should not make the browser navigate away.
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => e.preventDefault());

  document.addEventListener('paste', (e) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest('textarea, input, [contenteditable="true"]')) return;
    const files = filesFromClipboard(e);
    if (files.length) {
      e.preventDefault();
      addFiles(files);
    }
  });

  function accepts(file: File): boolean {
    if (mode === 'pdf' || mode === 'pdf-excel') return isPdf(file);
    if (mode === 'text') return isImage(file) || isPdf(file);
    return isImage(file);
  }

  function addFiles(files: File[]) {
    const ok = files.filter(accepts);
    if (ok.length < files.length) toast(t.unsupported);
    for (const file of ok) {
      const item: Item = { id: nextId++, file, el: createItemEl(file), rotate: 0, generated: '', rtl: false, done: false };
      items.push(item);
      list.appendChild(item.el);
      wireItem(item);
      enqueue(item);
    }
    updateToolbar();
    items[items.length - ok.length]?.el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // ---------- queue ----------
  function enqueue(item: Item) {
    item.done = false;
    setStatus(item, isReady() ? t.queued : t.loadingEngine, 0);
    queue.push(item);
    drain();
  }

  function drain() {
    while (running < CONCURRENCY && queue.length) {
      const item = queue.shift()!;
      if (!items.includes(item)) continue;
      running++;
      process(item)
        .catch((err) => {
          console.error(err);
          setStatus(item, t.failed, 0);
          item.el.dataset.state = 'error';
        })
        .finally(() => {
          running--;
          updateToolbar();
          drain();
        });
    }
  }

  async function process(item: Item) {
    if (isPdf(item.file)) return mode === 'pdf-excel' ? processPdfTables(item) : processPdf(item);

    setStatus(item, t.preparing, 0.02);
    const decoded = await decodeImage(item.file);
    let image: HTMLCanvasElement | File = item.file;
    if (decoded) {
      image = prepareCanvas(decoded, { rotate: item.rotate });
      showPreview(item, image);
    }

    const progress = (stage: ProgressStage, p: number) => onProgress(item, stage, p);
    let result = await recognizeAuto(image, pageLang, progress);
    if (image instanceof HTMLCanvasElement) {
      result.width = image.width;
      result.height = image.height;
      // Free the full-size canvas; the preview keeps a smaller copy.
      image.width = image.height = 0;
    }
    // Faded scans and dim photos: clean the image up and read it again, keeping the better result.
    if (decoded && result.confidence < ENHANCE_BELOW) {
      const enhanced = prepareCanvas(decoded, { rotate: item.rotate, enhance: true });
      const retry = await recognize(enhanced, progress, result.lang);
      if (retry.confidence > result.confidence) {
        retry.width = enhanced.width;
        retry.height = enhanced.height;
        result = retry;
      }
      enhanced.width = enhanced.height = 0;
    }
    if (decoded && 'close' in decoded) decoded.close();
    item.rtl = isRtl(result.lang);
    if (!items.includes(item)) return;
    item.result = result;
    item.blocks = mode === 'word' ? buildStructure(result) : undefined;
    // Word: a page that is laid out as a table goes into the document as a real table.
    item.grid = mode === 'excel' || mode === 'word' ? detectTable(result) : undefined;
    item.done = true;
    renderResult(item);
    setStatus(item, t.done, 1);
  }

  async function processPdf(item: Item) {
    setStatus(item, t.readingPdf, 0.02);
    item.el.querySelector('[data-preview-col]')?.setAttribute('hidden', '');
    item.el.querySelector('[data-body]')?.classList.remove('lg:grid-cols-2');
    const { doc, close } = await openPdf(item.file);
    const pages = parseRange('', doc.numPages);
    item.pdfPages = [];
    for (const [i, n] of pages.entries()) {
      if (!items.includes(item)) return;
      const status = fmt(t.pageOf, { n, total: doc.numPages });
      setStatus(item, status, i / pages.length);
      const page = await doc.getPage(n);
      let text = await pageText(page);
      let ocr = false;
      if (!text) {
        const canvas = await renderPage(page, 2);
        const result = await recognizeAuto(canvas, pageLang, (stage, p) =>
          setStatus(item, stage === 'recognizing' ? status : stageLabel(stage), (i + (stage === 'recognizing' ? p : 0)) / pages.length),
        );
        canvas.width = canvas.height = 0;
        text = buildText(result, textOptions());
        ocr = true;
      }
      page.cleanup();
      item.pdfPages.push({ page: n, text, ocr });
    }
    await close();
    item.done = true;
    renderPdfResult(item);
    setStatus(item, t.done, 1);
  }

  async function processPdfTables(item: Item) {
    setStatus(item, t.readingPdf, 0.02);
    item.el.querySelector('[data-preview-col]')?.setAttribute('hidden', '');
    item.el.querySelector('[data-body]')?.classList.remove('lg:grid-cols-2');
    const { doc, close } = await openPdf(item.file);
    const pages = parseRange('', doc.numPages);
    item.pdfGrids = [];
    for (const [i, n] of pages.entries()) {
      if (!items.includes(item)) return;
      const status = fmt(t.pageOf, { n, total: doc.numPages });
      setStatus(item, status, i / pages.length);
      const page = await doc.getPage(n);
      // Digital PDFs keep word positions in their text layer; scans go through OCR.
      let words = await pageWords(page);
      const ocr = !words;
      if (!words) {
        const canvas = await renderPage(page, 2);
        words = await recognizeAuto(canvas, pageLang, (stage, p) =>
          setStatus(item, stage === 'recognizing' ? status : stageLabel(stage), (i + (stage === 'recognizing' ? p : 0)) / pages.length),
        );
        canvas.width = canvas.height = 0;
      }
      page.cleanup();
      const grid = detectTable(words);
      if (grid.length) item.pdfGrids.push({ page: n, grid, ocr });
    }
    await close();
    item.done = true;
    renderPdfGrids(item);
    setStatus(item, t.done, 1);
  }

  // ---------- rendering ----------
  function createItemEl(file: File): HTMLLIElement {
    const el = template.content.firstElementChild!.cloneNode(true) as HTMLLIElement;
    $('[data-name]', el).textContent = file.name || 'image';
    const ta = $<HTMLTextAreaElement>('[data-text]', el);
    ta.readOnly = true;
    ta.placeholder = '…';
    ta.addEventListener('input', () => updateCount(el));
    if (tableLike) ta.hidden = true;
    return el;
  }

  function wireItem(item: Item) {
    const el = item.el;
    $('[data-remove]', el).addEventListener('click', () => {
      items.splice(items.indexOf(item), 1);
      el.remove();
      updateToolbar();
    });
    $('[data-rotate]', el).addEventListener('click', () => {
      item.rotate = ((item.rotate + 90) % 360) as Item['rotate'];
      enqueue(item);
    });
    $('[data-retry]', el).addEventListener('click', () => enqueue(item));
    buildItemActions(item);
  }

  function showPreview(item: Item, full: HTMLCanvasElement) {
    const host = $('[data-preview]', item.el);
    host.querySelector('canvas')?.remove();
    host.querySelector('svg[data-overlay]')?.remove();
    const scale = Math.min(1, PREVIEW_MAX / Math.max(full.width, full.height));
    const c = document.createElement('canvas');
    c.width = Math.round(full.width * scale);
    c.height = Math.round(full.height * scale);
    c.getContext('2d')!.drawImage(full, 0, 0, c.width, c.height);
    c.className = 'block h-auto w-full';
    host.prepend(c);
  }

  function textOptions() {
    return { keepLines: true, tidySpaces: true };
  }

  function textFor(item: Item): string {
    if (!item.result) return '';
    if (mode === 'word' && item.blocks) return blocksToText(item.blocks);
    return buildText(item.result, textOptions());
  }

  function renderResult(item: Item) {
    const el = item.el;
    const result = item.result!;
    const ta = $<HTMLTextAreaElement>('[data-text]', el);
    const text = textFor(item);
    item.generated = text;
    ta.value = text || '';
    ta.placeholder = text ? '' : t.noText;
    ta.readOnly = false;
    ta.dir = item.rtl ? 'rtl' : 'auto';
    updateCount(el);

    const host = $('[data-preview]', el);
    if (host.querySelector('canvas')) {
      renderOverlay(host, result, async (line, rect) => {
        if (await copyText(line.text.trim())) {
          flash(rect);
          toast(t.copied);
        }
      });
      $('[data-hint]', el).hidden = !allLines(result).length;
    }

    const uncertain = allWords(result).filter((w) => w.conf < UNCERTAIN_BELOW).length;
    const u = $('[data-uncertain]', el);
    u.hidden = !uncertain || !host.querySelector('canvas');
    u.textContent = fmt(t.uncertain, { n: uncertain });

    if (mode === 'excel') renderGrid(item);
  }

  function renderPdfResult(item: Item) {
    const pages = item.pdfPages ?? [];
    const multi = pages.length > 1;
    const text = pages.map((p) => (multi ? `— ${p.page} —\n\n${p.text}` : p.text)).join('\n\n');
    item.generated = text;
    const ta = $<HTMLTextAreaElement>('[data-text]', item.el);
    ta.value = text;
    ta.placeholder = text ? '' : t.noText;
    ta.readOnly = false;
    updateCount(item.el);
    const note = $('[data-note]', item.el);
    const usedOcr = pages.some((p) => p.ocr);
    note.hidden = !pages.length;
    note.textContent = usedOcr ? t.pdfOcr : t.pdfTextLayer;
  }

  function gridTable(grid: Grid, rtl: boolean): HTMLTableElement {
    const cols = Math.max(...grid.map((r) => r.length));
    const table = document.createElement('table');
    table.className = 'w-full border-collapse text-sm';
    if (rtl) table.dir = 'rtl';
    grid.forEach((row, r) => {
      const tr = table.insertRow();
      for (let c = 0; c < cols; c++) {
        const td = tr.insertCell();
        td.contentEditable = 'true';
        td.textContent = row[c] ?? '';
        td.className = `border-b border-e border-line px-3 py-1.5 align-top outline-none focus:bg-brand-50 dark:focus:bg-brand-900/30 ${r === 0 ? 'font-semibold bg-surface-2' : ''}`;
      }
    });
    return table;
  }

  function showEmpty(wrap: HTMLElement) {
    const p = document.createElement('p');
    p.className = 'p-4 text-sm text-ink-muted';
    p.textContent = t.noText;
    wrap.replaceChildren(p);
  }

  function renderGrid(item: Item) {
    const wrap = $('[data-table-wrap]', item.el);
    wrap.hidden = false;
    const grid = item.grid ?? [];
    if (!grid.length) return showEmpty(wrap);
    wrap.replaceChildren(gridTable(grid, item.rtl));
    const hint = $('[data-note]', item.el);
    hint.hidden = false;
    hint.textContent = t.tableHint;
  }

  function renderPdfGrids(item: Item) {
    const wrap = $('[data-table-wrap]', item.el);
    wrap.hidden = false;
    const pages = item.pdfGrids ?? [];
    if (!pages.length) return showEmpty(wrap);
    wrap.replaceChildren(
      ...pages.map(({ page, grid }) => {
        const box = document.createElement('div');
        box.dataset.page = String(page);
        const label = document.createElement('p');
        label.className = 'sticky top-0 border-b border-line bg-surface px-3 py-2 text-xs font-bold tracking-wide text-ink-muted';
        label.textContent = fmt(t.pageN, { n: page });
        box.append(label, gridTable(grid, item.rtl));
        return box;
      }),
    );
    const hint = $('[data-note]', item.el);
    hint.hidden = false;
    hint.textContent = `${t.pdfTablesHint}${pages.some((p) => p.ocr) ? ` ${t.pdfOcr}` : ''}`;
  }

  function tableRows(table: HTMLTableElement): Grid {
    return [...table.rows].map((row) => [...row.cells].map((c) => (c.textContent ?? '').trim()));
  }

  function currentGrid(item: Item): Grid {
    const tables = [...item.el.querySelectorAll<HTMLTableElement>('[data-table-wrap] table')];
    if (!tables.length) return item.grid ?? item.pdfGrids?.flatMap((p) => p.grid) ?? [];
    // PDF pages are stacked with an empty row between them.
    return tables.flatMap((tb, i) => (i ? [[], ...tableRows(tb)] : tableRows(tb)));
  }

  /** PDF to Excel: one sheet per page. */
  function sheetsFor(item: Item): { name: string; grid: Grid }[] {
    const name = baseName(item.file.name);
    const boxes = [...item.el.querySelectorAll<HTMLElement>('[data-table-wrap] [data-page]')];
    if (!boxes.length) return [{ name, grid: currentGrid(item) }];
    return boxes.map((b) => ({ name: `${name} p${b.dataset.page}`, grid: tableRows(b.querySelector('table')!) }));
  }

  function currentText(item: Item): string {
    return $<HTMLTextAreaElement>('[data-text]', item.el).value;
  }

  function updateCount(el: HTMLElement) {
    const text = $<HTMLTextAreaElement>('[data-text]', el).value;
    $('[data-count]', el).textContent = text ? `${fmt(t.words, { n: countWords(text) })} · ${fmt(t.chars, { n: text.length })}` : '';
  }

  function stageLabel(stage: ProgressStage): string {
    if (stage === 'engine') return t.loadingEngine;
    if (stage === 'language') return t.loadingLanguage;
    return stage === 'detecting' ? t.detectingLanguage : t.recognizing;
  }

  function onProgress(item: Item, stage: ProgressStage, p: number) {
    // Map stages onto one bar: downloads fill the first 30 %, reading the rest.
    const value = stage === 'recognizing' ? 0.3 + p * 0.7 : stage === 'engine' ? p * 0.1 : 0.1 + p * 0.2;
    setStatus(item, stageLabel(stage), value);
  }

  function setStatus(item: Item, label: string, progress: number) {
    $('[data-status]', item.el).textContent = label;
    const bar = $('[data-bar]', item.el);
    bar.style.width = `${Math.round(progress * 100)}%`;
    $('[data-progress]', item.el).style.visibility = progress >= 1 ? 'hidden' : 'visible';
    item.el.toggleAttribute('data-done', progress >= 1);
  }

  // ---------- actions ----------
  function button(label: string, onClick: () => void, primary = false): HTMLButtonElement {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `${primary ? 'btn-primary' : 'btn-secondary'} btn-sm`;
    b.textContent = label;
    b.addEventListener('click', onClick);
    return b;
  }

  async function copy(text: string) {
    if (text && (await copyText(text))) toast(t.copied);
  }

  function buildItemActions(item: Item) {
    const box = $('[data-actions]', item.el);
    const name = baseName(item.file.name);
    if (tableLike) {
      box.append(
        button(t.copy, () => copy(currentGrid(item).map((r) => r.join('\t')).join('\n'))),
        button(t.downloadCsv, async () => (await import('../lib/export/sheet')).downloadCsv(currentGrid(item), `${name}.csv`)),
        button(t.downloadXlsx, async () => (await import('../lib/export/sheet')).downloadXlsx(sheetsFor(item), `${name}.xlsx`), true),
      );
      return;
    }
    box.append(button(t.copy, () => copy(currentText(item))));
    if (mode === 'word') {
      box.append(button(t.downloadDocx, () => saveDocx([item], `${name}.docx`), true));
    } else {
      box.append(button(t.downloadTxt, () => downloadText(currentText(item), `${name}.txt`), true));
    }
  }

  async function saveDocx(list: Item[], filename: string) {
    const { buildDocx } = await import('../lib/export/docx');
    const pages = list.map((item) => {
      const edited = currentText(item) !== item.generated;
      const blocks = edited ? blocksFromText(currentText(item), item.blocks ?? []) : (item.blocks ?? []);
      const useTable = !edited && item.grid && looksLikeTable(item.grid);
      return { blocks, table: useTable ? item.grid : undefined, rtl: item.rtl };
    });
    downloadBlob(await buildDocx(pages), filename);
  }

  function updateToolbar() {
    const done = items.filter((i) => i.done);
    toolbar.hidden = items.length === 0;
    summary.textContent = items.length === 1 ? t.fileOne : fmt(t.files, { n: items.length });
    toolbar.querySelectorAll('button').forEach((b) => b.remove());
    if (!items.length) return;

    const buttons: HTMLButtonElement[] = [];
    if (done.length > 1 || (!tableLike && done.length === 1)) {
      if (textLike) {
        buttons.push(button(t.copyAll, () => copy(done.map(currentText).filter(Boolean).join('\n\n'))));
        if (done.length > 1)
          buttons.push(
            button(t.downloadAllZip, () =>
              downloadZip(done.map((i) => ({ name: `${baseName(i.file.name)}.txt`, data: currentText(i) })), 'text.zip'),
            true),
          );
      } else if (mode === 'word' && done.length > 1) {
        buttons.push(button(t.downloadAllDocx, () => saveDocx(done, 'document.docx'), true));
      }
    }
    if (tableLike && done.length > 1) {
      buttons.push(button(t.downloadAllXlsx, async () => (await import('../lib/export/sheet')).downloadXlsx(done.flatMap(sheetsFor), 'tables.xlsx'), true));
    }
    buttons.push(
      button(t.clearAll, () => {
        items.splice(0).forEach((i) => i.el.remove());
        queue.length = 0;
        updateToolbar();
      }),
    );
    buttons.forEach((b) => toolbar.appendChild(b));
  }
}

// ---------- Word helpers ----------

function blocksToText(blocks: DocBlock[]): string {
  return blocks.map((b) => (b.kind === 'bullet' ? `• ${b.text}` : b.text)).join('\n\n');
}

/** After the user edits the text box, rebuild blocks from it, keeping headings that are unchanged. */
function blocksFromText(text: string, original: DocBlock[]): DocBlock[] {
  const known = new Map(original.map((b) => [b.text, b]));
  return text
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .flatMap<DocBlock>((chunk) => {
      const lines = chunk.split('\n');
      if (lines.every((l) => /^[•·\-*]\s+/.test(l.trim()))) return lines.map((l) => ({ kind: 'bullet', text: l.trim().replace(/^[•·\-*]\s+/, '') }));
      const prev = known.get(chunk);
      if (prev) return [prev];
      return [{ kind: 'paragraph', text: lines.join(' '), center: false }];
    });
}

import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
import type { OcrResult, OcrWord } from '../ocr/types';

// PDF reading (PLAN.md §8.5). pdf.js is only downloaded when a PDF is actually opened.

let lib: Promise<typeof import('pdfjs-dist')> | null = null;

function pdfjs() {
  lib ??= (async () => {
    const [mod, worker] = await Promise.all([import('pdfjs-dist'), import('pdfjs-dist/build/pdf.worker.min.mjs?url')]);
    mod.GlobalWorkerOptions.workerSrc = worker.default;
    return mod;
  })();
  return lib;
}

/** Open a PDF. Call `close()` when finished to free the worker's memory. */
export async function openPdf(file: File): Promise<{ doc: PDFDocumentProxy; close: () => Promise<void> }> {
  const { getDocument } = await pdfjs();
  const task = getDocument({ data: new Uint8Array(await file.arrayBuffer()) });
  return { doc: await task.promise, close: () => task.destroy() };
}

/** The page's embedded text, or '' when the page is only an image (a scan). */
export async function pageText(page: PDFPageProxy): Promise<string> {
  const content = await page.getTextContent();
  let out = '';
  for (const item of content.items) {
    if (!('str' in item)) continue;
    out += item.str + (item.hasEOL ? '\n' : '');
  }
  const text = out.replace(/[ \t]+\n/g, '\n').trim();
  // A handful of characters usually means a scan with a stray header, not real text.
  return text.replace(/\s/g, '').length >= 20 ? text : '';
}

export async function renderPage(page: PDFPageProxy, scale = 2): Promise<HTMLCanvasElement> {
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  // The "print" intent renders without requestAnimationFrame. The default "display" intent waits
  // for animation frames, which browsers pause in background tabs, so long PDFs would stall there.
  await page.render({ canvas, viewport, intent: 'print', background: '#ffffff' }).promise;
  return canvas;
}

/** "1-3, 5" → [1, 2, 3, 5]. Empty or invalid input means every page. */
export function parseRange(input: string, total: number): number[] {
  const pages = new Set<number>();
  for (const part of input.split(',')) {
    const m = part.trim().match(/^(\d+)\s*(?:-\s*(\d+))?$/);
    if (!m) continue;
    const a = Number(m[1]);
    const b = m[2] ? Number(m[2]) : a;
    for (let p = Math.min(a, b); p <= Math.max(a, b); p++) if (p >= 1 && p <= total) pages.add(p);
  }
  return pages.size ? [...pages].sort((x, y) => x - y) : Array.from({ length: total }, (_, i) => i + 1);
}

/**
 * The page's embedded text as positioned words, shaped like an OCR result so the same table
 * detector works on digital PDFs. Returns null when the page is a scan with no text layer.
 */
export async function pageWords(page: PDFPageProxy): Promise<OcrResult | null> {
  const viewport = page.getViewport({ scale: 1 });
  const content = await page.getTextContent();
  const words: OcrWord[] = [];
  for (const item of content.items) {
    if (!('str' in item) || !item.str.trim()) continue;
    const [, , c, d, e, f] = item.transform as number[];
    const h = item.height || Math.hypot(c, d) || 10;
    const [x, yBase] = viewport.convertToViewportPoint(e, f);
    const y1 = yBase;
    const y0 = y1 - h;
    // A text run may hold a whole row ("Total   1,250"); split it into words, placing each
    // by its character offset so column gaps survive.
    const perChar = item.str.length ? item.width / item.str.length : 0;
    for (const m of item.str.matchAll(/\S+/g)) {
      const x0 = x + (m.index ?? 0) * perChar;
      words.push({ text: m[0], conf: 100, box: { x0, y0, x1: x0 + m[0].length * perChar, y1 } });
    }
  }
  if (words.map((w) => w.text).join('').length < 20) return null;
  return {
    width: viewport.width,
    height: viewport.height,
    rotateRadians: 0,
    confidence: 100,
    lang: '',
    paragraphs: [{ box: { x0: 0, y0: 0, x1: viewport.width, y1: viewport.height }, lines: [{ text: '', conf: 100, box: { x0: 0, y0: 0, x1: 0, y1: 0 }, words }] }],
  };
}

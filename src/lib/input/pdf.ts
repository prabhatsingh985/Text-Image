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
export async function openPdf(file: Blob): Promise<{ doc: PDFDocumentProxy; close: () => Promise<void> }> {
  const { getDocument, version } = await pdfjs();
  const assets = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${version}`;
  const task = getDocument({
    data: new Uint8Array(await file.arrayBuffer()),
    // Fetched by pdf.js only when a PDF needs them, from the same CDN as the OCR engine; the PDF itself stays here.
    // Without them, scans stored as JBIG2, fax or JPEG 2000 render as blank pages (many scanners write those),
    // and Chinese, Japanese and Korean text in fonts that are not embedded cannot be read.
    wasmUrl: `${assets}/wasm/`,
    cMapUrl: `${assets}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `${assets}/standard_fonts/`,
    iccUrl: `${assets}/iccs/`,
  });
  try {
    return { doc: await task.promise, close: () => task.destroy() };
  } catch (err) {
    await task.destroy();
    throw err;
  }
}

/** The PDF needs a password to open, which is a different problem from a damaged file. */
export function isPasswordError(err: unknown): boolean {
  return (err as Error | null)?.name === 'PasswordException';
}

/** Fewer letters than this may just be a stray header on top of a scan. */
const MIN_TEXT_CHARS = 20;

/** Whether the page draws anything besides text: an image, or shapes that could be letters turned into outlines. */
async function drawsMarks(page: PDFPageProxy): Promise<boolean> {
  const { OPS } = await pdfjs();
  const marks = new Set<number>(
    [
      OPS.paintImageXObject,
      OPS.paintImageXObjectRepeat,
      OPS.paintImageMaskXObject,
      OPS.paintImageMaskXObjectRepeat,
      OPS.paintImageMaskXObjectGroup,
      OPS.paintInlineImageXObject,
      OPS.paintInlineImageXObjectGroup,
      OPS.paintSolidColorImageMask,
      OPS.constructPath,
      OPS.fill,
      OPS.eoFill,
      OPS.stroke,
      OPS.fillStroke,
      OPS.eoFillStroke,
      OPS.shadingFill,
    ].filter((op) => op !== undefined),
  );
  const { fnArray } = await page.getOperatorList();
  return fnArray.some((fn) => marks.has(fn));
}

/** A page needs OCR when its text layer is (almost) empty and something else is drawn on it. */
async function isScan(page: PDFPageProxy, textChars: number): Promise<boolean> {
  return textChars < MIN_TEXT_CHARS && (await drawsMarks(page));
}

/** The page's embedded text. `scan` means the page has to go through OCR instead: it is only an image. */
export async function pageText(page: PDFPageProxy): Promise<{ text: string; scan: boolean }> {
  const content = await page.getTextContent();
  let out = '';
  for (const item of content.items) {
    if (!('str' in item)) continue;
    out += item.str + (item.hasEOL ? '\n' : '');
  }
  const text = out.replace(/[ \t]+\n/g, '\n').trim();
  return { text, scan: await isScan(page, text.replace(/\s/g, '').length) };
}

/** Pages larger than this are rendered smaller: browsers refuse huge canvases, and OCR needs nothing bigger. */
const MAX_RENDER_SIDE = 5000;

export async function renderPage(page: PDFPageProxy, scale = 2): Promise<HTMLCanvasElement> {
  const full = page.getViewport({ scale: 1 });
  const viewport = page.getViewport({ scale: Math.min(scale, MAX_RENDER_SIDE / Math.max(full.width, full.height)) });
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
 * detector works on digital PDFs. `scan` means the page has to go through OCR instead.
 */
export async function pageWords(page: PDFPageProxy): Promise<{ result: OcrResult; scan: boolean }> {
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
  return {
    scan: await isScan(page, words.map((w) => w.text).join('').length),
    result: {
      width: viewport.width,
      height: viewport.height,
      rotateRadians: 0,
      confidence: 100,
      lang: '',
      paragraphs: [{ box: { x0: 0, y0: 0, x1: viewport.width, y1: viewport.height }, lines: [{ text: '', conf: 100, box: { x0: 0, y0: 0, x1: 0, y1: 0 }, words }] }],
    },
  };
}

import { sizeOf, type Decoded } from '../input/images';
import { openPdf, renderPage } from '../input/pdf';

// Shrinking images and PDFs to a size limit, as exam and job forms ask for ("photo under 20 KB").
// Everything is re-encoded as JPEG: the search looks for the largest scale and highest quality
// whose output still fits, so the file lands just under the limit and looks as good as it can.

/** JPEG bytes per pixel at a decent quality; used to guess the starting size. */
const BYTES_PER_PIXEL = 0.15;
const TOP_QUALITY = 0.92;

/**
 * JPEG bytes of a canvas. The search encodes many times, and toBlob's callback is held back
 * to about once a second in a background tab, so this uses the synchronous toDataURL.
 */
function encodeJpeg(canvas: HTMLCanvasElement, quality: number): Uint8Array<ArrayBuffer> {
  const b64 = canvas.toDataURL('image/jpeg', quality).split(',')[1];
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

interface Attempt<T> {
  out: T;
  size: number;
  scale: number;
  quality: number;
}

/**
 * Finds the best (scale, quality) whose encoded size is at most `maxBytes`.
 * `scale` is relative to the full size and never goes above `maxScale`.
 * Returns the smallest attempt seen when nothing fits, so the caller can still offer it.
 */
async function fitToSize<T>(
  encode: (scale: number, quality: number) => Promise<{ out: T; size: number }>,
  maxBytes: number,
  { startScale, maxScale = 1, minQuality = 0.4 }: { startScale: number; maxScale?: number; minQuality?: number },
): Promise<{ best: Attempt<T>; fits: boolean }> {
  let scale = Math.min(startScale, maxScale);
  let fitting: Attempt<T> | null = null;
  let smallest: Attempt<T> | null = null;
  let shrunk = false;
  const tryAt = async (s: number, q: number) => {
    const a = { ...(await encode(s, q)), scale: s, quality: q };
    if (!smallest || a.size < smallest.size) smallest = a;
    return a;
  };

  for (let round = 0; round < 16; round++) {
    let found: Attempt<T> | null = null;
    const top = await tryAt(scale, TOP_QUALITY);
    if (top.size <= maxBytes) found = top;
    else {
      let lo = minQuality;
      let hi = TOP_QUALITY;
      const bottom = await tryAt(scale, lo);
      if (bottom.size <= maxBytes) {
        found = bottom;
        // The highest quality that still fits, to within a few percent.
        for (let i = 0; i < 5; i++) {
          const mid = (lo + hi) / 2;
          const a = await tryAt(scale, mid);
          if (a.size <= maxBytes) {
            found = a;
            lo = mid;
          } else hi = mid;
        }
      }
    }

    if (found) {
      fitting = found;
      // Lots of room left at top quality: try a larger image, unless a larger one already failed.
      if (!shrunk && found.quality === TOP_QUALITY && found.size < maxBytes * 0.8 && scale < maxScale) {
        scale = Math.min(maxScale, scale * Math.min(1.6, Math.sqrt((maxBytes * 0.93) / found.size)));
        continue;
      }
      return { best: fitting, fits: true };
    }
    if (fitting) return { best: fitting, fits: true };
    shrunk = true;
    scale *= 0.8;
    if (scale < 0.01) break;
  }
  return fitting ? { best: fitting, fits: true } : { best: smallest!, fits: false };
}

export interface ImageTargetOptions {
  maxBytes: number;
  /** Exact output width and/or height in pixels. With both, the image is centre-cropped to that shape. */
  width?: number;
  height?: number;
}

export interface CompressedImage {
  blob: Blob;
  width: number;
  height: number;
  fits: boolean;
}

/** Draws the image at w×h on white (transparent PNGs would turn black as JPEG), cropping to fill when the shape differs. */
function drawCover(img: Decoded, w: number, h: number): HTMLCanvasElement {
  const { width, height } = sizeOf(img);
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, w, h);
  ctx.imageSmoothingQuality = 'high';
  const s = Math.max(w / width, h / height);
  const dw = width * s;
  const dh = height * s;
  ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
  return canvas;
}

export async function compressImage(img: Decoded, opts: ImageTargetOptions): Promise<CompressedImage> {
  const { width: W, height: H } = sizeOf(img);
  let baseW = W;
  let baseH = H;
  if (opts.width && opts.height) [baseW, baseH] = [opts.width, opts.height];
  else if (opts.width) [baseW, baseH] = [opts.width, (H * opts.width) / W];
  else if (opts.height) [baseW, baseH] = [(W * opts.height) / H, opts.height];
  const locked = Boolean(opts.width || opts.height);

  let cached: { w: number; h: number; canvas: HTMLCanvasElement } | null = null;
  const encode = async (scale: number, quality: number) => {
    const w = Math.max(1, Math.round(baseW * scale));
    const h = Math.max(1, Math.round(baseH * scale));
    if (!cached || cached.w !== w || cached.h !== h) cached = { w, h, canvas: drawCover(img, w, h) };
    const blob = new Blob([encodeJpeg(cached.canvas, quality)], { type: 'image/jpeg' });
    return { out: { blob, width: w, height: h }, size: blob.size };
  };

  // Asked-for dimensions are kept as long as any quality fits; otherwise start from a size the limit can hold.
  const startScale = locked ? 1 : Math.sqrt(opts.maxBytes / BYTES_PER_PIXEL / (baseW * baseH));
  const { best, fits } = await fitToSize(encode, opts.maxBytes, { startScale, minQuality: locked ? 0.05 : 0.4 });
  return { ...best.out, fits };
}

/** A one-page PDF holding a JPEG, with the page the size of the image (96 px per inch). */
export async function jpegToPdf(jpeg: Blob, width: number, height: number): Promise<Blob> {
  const { PDFDocument } = await import('pdf-lib');
  const pdf = await PDFDocument.create();
  const img = await pdf.embedJpg(new Uint8Array(await jpeg.arrayBuffer()));
  const page = pdf.addPage([width * 0.75, height * 0.75]);
  page.drawImage(img, { x: 0, y: 0, width: width * 0.75, height: height * 0.75 });
  return new Blob([(await pdf.save({ useObjectStreams: true })) as BlobPart], { type: 'application/pdf' });
}

/** Room left for the PDF wrapper around the JPEG data. */
export const PDF_OVERHEAD = 1200;

export interface CompressedPdf {
  blob: Blob;
  pages: number;
  /** Pages were turned into images, so their text can no longer be selected. */
  rasterized: boolean;
  fits: boolean;
}

export async function compressPdf(file: File, maxBytes: number, onProgress?: (done: number, total: number) => void): Promise<CompressedPdf> {
  const { PDFDocument } = await import('pdf-lib');

  // A lossless re-save (compressed object streams) keeps the text; try it first.
  let pages = 0;
  try {
    const doc = await PDFDocument.load(new Uint8Array(await file.arrayBuffer()), { ignoreEncryption: true });
    pages = doc.getPageCount();
    if (file.size <= maxBytes) return { blob: file, pages, rasterized: false, fits: true };
    const saved = await doc.save({ useObjectStreams: true });
    if (saved.length <= maxBytes) return { blob: new Blob([saved as BlobPart], { type: 'application/pdf' }), pages, rasterized: false, fits: true };
  } catch {
    // pdf-lib cannot open some PDFs (for example encrypted ones); pdf.js below usually can.
  }

  const { doc, close } = await openPdf(file);
  try {
    pages = doc.numPages;
    const sizes: { w: number; h: number }[] = [];
    for (let n = 1; n <= pages; n++) {
      const vp = (await doc.getPage(n)).getViewport({ scale: 1 });
      sizes.push({ w: vp.width, h: vp.height });
    }
    // Render every page once, big enough for the share of the limit it gets, then scale down from that.
    const perPage = Math.max(500, (maxBytes - 600 - 500 * pages) / pages);
    const area = sizes.reduce((a, s) => a + s.w * s.h, 0) / pages;
    const renderScale = Math.min(3, Math.max(0.5, Math.sqrt((perPage / BYTES_PER_PIXEL) * 2 / area)));
    const rendered: HTMLCanvasElement[] = [];
    for (let n = 1; n <= pages; n++) {
      rendered.push(await renderPage(await doc.getPage(n), renderScale));
      onProgress?.(n, pages);
    }

    const build = async (scale: number, quality: number) => {
      const pdf = await PDFDocument.create();
      for (let i = 0; i < pages; i++) {
        const src = rendered[i];
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(src.width * scale));
        canvas.height = Math.max(1, Math.round(src.height * scale));
        const ctx = canvas.getContext('2d')!;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(src, 0, 0, canvas.width, canvas.height);
        const img = await pdf.embedJpg(encodeJpeg(canvas, quality));
        // Same page size in points as the original, whatever the image resolution.
        const page = pdf.addPage([sizes[i].w, sizes[i].h]);
        page.drawImage(img, { x: 0, y: 0, width: sizes[i].w, height: sizes[i].h });
      }
      const bytes = await pdf.save({ useObjectStreams: true });
      return { out: new Blob([bytes as BlobPart], { type: 'application/pdf' }), size: bytes.length };
    };
    const { best, fits } = await fitToSize(build, maxBytes, { startScale: Math.SQRT1_2, minQuality: 0.3 });
    return { blob: best.out, pages, rasterized: true, fits };
  } finally {
    await close();
  }
}

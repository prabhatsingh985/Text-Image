// Decoding and preparing images before OCR (PLAN.md §8.1).

export const IMAGE_ACCEPT = 'image/*,.heic,.heif,.tif,.tiff';

function isTiffHeader(b: Uint8Array): boolean {
  return (b[0] === 0x49 && b[1] === 0x49 && b[2] === 42 && b[3] === 0) || (b[0] === 0x4d && b[1] === 0x4d && b[2] === 0 && b[3] === 42);
}

const HEIC_BRANDS = ['heic', 'heix', 'hevc', 'heim', 'heis', 'mif1', 'msf1'];

export async function isHeic(file: Blob & { name?: string }): Promise<boolean> {
  if (/image\/hei[cf]/i.test(file.type) || /\.hei[cf]$/i.test(file.name ?? '')) return true;
  const head = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  const brand = String.fromCharCode(...head.slice(4, 12));
  return brand.startsWith('ftyp') && HEIC_BRANDS.includes(brand.slice(4));
}

export function isPdf(file: File): boolean {
  return file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
}

export function isImage(file: File): boolean {
  return file.type.startsWith('image/') || /\.(hei[cf]|tiff?|jpe?g|png|webp|gif|bmp)$/i.test(file.name);
}

async function heicToJpeg(file: Blob): Promise<Blob> {
  const heic2any = (await import('heic2any')).default;
  const out = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.92 });
  return Array.isArray(out) ? out[0] : out;
}

function loadViaImgElement(blob: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('decode failed'));
    };
    img.src = url;
  });
}

export type Decoded = ImageBitmap | HTMLImageElement;

async function headerOf(file: Blob, length: number): Promise<Uint8Array> {
  return new Uint8Array(await file.slice(0, length).arrayBuffer());
}

/** By the file's contents: a picture saved under the wrong extension is common. */
export async function isPngData(file: Blob): Promise<boolean> {
  const head = await headerOf(file, 8);
  return [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every((byte, i) => head[i] === byte);
}

/**
 * Decode any supported image. EXIF orientation is applied by the browser.
 * Returns null when it cannot be decoded here; the caller can then hand the raw file to Tesseract.
 */
export async function decodeImage(file: Blob & { name?: string }): Promise<Decoded | null> {
  let blob: Blob = file;
  try {
    return await createImageBitmap(blob, { imageOrientation: 'from-image' });
  } catch {
    // fall through
  }
  if (isTiffHeader(await headerOf(file, 4))) {
    try {
      return await (await import('./tiff')).decodeTiff(file);
    } catch (err) {
      console.warn('TIFF decoding failed', err);
      return null;
    }
  }
  if (await isHeic(file)) {
    try {
      blob = await heicToJpeg(file);
      return await createImageBitmap(blob, { imageOrientation: 'from-image' });
    } catch {
      return null;
    }
  }
  try {
    return await loadViaImgElement(blob);
  } catch {
    return null;
  }
}

export function sizeOf(img: Decoded): { width: number; height: number } {
  return 'naturalWidth' in img ? { width: img.naturalWidth, height: img.naturalHeight } : { width: img.width, height: img.height };
}

export interface PrepareOptions {
  /** Clockwise rotation in degrees. */
  rotate?: 0 | 90 | 180 | 270;
  enhance?: boolean;
  /** Longest side after resizing. Very large photos are scaled down to save memory. */
  maxSide?: number;
  /** Enlarge small images 2× (helps OCR read small text). Off for PDF pages. */
  upscaleSmall?: boolean;
}

/** Draw the image to a canvas: rotate, scale small images up and huge ones down, optionally enhance. */
export function prepareCanvas(img: Decoded, opts: PrepareOptions = {}): HTMLCanvasElement {
  const { rotate = 0, enhance = false, maxSide = 3000, upscaleSmall = true } = opts;
  const { width, height } = sizeOf(img);
  const longest = Math.max(width, height);
  // Small text is read far better when enlarged; screenshots are often small.
  let scale = upscaleSmall && longest < 1000 ? 2 : 1;
  if (longest * scale > maxSide) scale = maxSide / longest;

  // At least one pixel: a very long, thin image can round down to nothing, and an empty canvas cannot be saved.
  const w = Math.max(1, Math.round(width * scale));
  const h = Math.max(1, Math.round(height * scale));
  const sideways = rotate === 90 || rotate === 270;
  const canvas = document.createElement('canvas');
  canvas.width = sideways ? h : w;
  canvas.height = sideways ? w : h;
  const ctx = canvas.getContext('2d', { willReadFrequently: enhance })!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingQuality = 'high';
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((rotate * Math.PI) / 180);
  ctx.drawImage(img, -w / 2, -h / 2, w, h);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  if (enhance) enhanceCanvas(ctx, canvas.width, canvas.height);
  return canvas;
}

/** Grayscale plus contrast stretch between the 2nd and 98th brightness percentiles. */
function enhanceCanvas(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const data = ctx.getImageData(0, 0, w, h);
  const px = data.data;
  const hist = new Uint32Array(256);
  for (let i = 0; i < px.length; i += 4) {
    const g = (px[i] * 299 + px[i + 1] * 587 + px[i + 2] * 114) / 1000;
    px[i] = g;
    hist[g | 0]++;
  }
  const total = w * h;
  let lo = 0;
  let hi = 255;
  for (let acc = 0; lo < 255 && (acc += hist[lo]) < total * 0.02; lo++);
  for (let acc = 0; hi > 0 && (acc += hist[hi]) < total * 0.02; hi--);
  const range = Math.max(1, hi - lo);
  for (let i = 0; i < px.length; i += 4) {
    const v = Math.max(0, Math.min(255, ((px[i] - lo) * 255) / range));
    px[i] = px[i + 1] = px[i + 2] = v;
  }
  ctx.putImageData(data, 0, 0);
}

export function canvasToBlob(canvas: HTMLCanvasElement, type = 'image/jpeg', quality = 0.92): Promise<Blob> {
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('toBlob failed'))), type, quality),
  );
}

/** Image files from a paste event, e.g. a screenshot copied with PrtSc. */
export function filesFromClipboard(e: ClipboardEvent): File[] {
  const files: File[] = [];
  for (const item of e.clipboardData?.items ?? []) {
    if (item.kind === 'file') {
      const f = item.getAsFile();
      if (f && (f.type.startsWith('image/') || f.type === 'application/pdf')) {
        const ext = f.type.split('/')[1] || 'png';
        files.push(f.name && f.name !== 'image.png' ? f : new File([f], `pasted-${Date.now()}.${ext}`, { type: f.type }));
      }
    }
  }
  return files;
}

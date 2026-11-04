import { openPdf, renderPage } from './pdf';

// TIFF for browsers that cannot show it (all but Safari). Reads the first page of a file:
// uncompressed, PackBits, LZW, Deflate, JPEG and fax (CCITT) data, in black and white, grey, palette, RGB and CMYK.

const TAG = {
  width: 256,
  height: 257,
  bits: 258,
  compression: 259,
  photometric: 262,
  fillOrder: 266,
  stripOffsets: 273,
  samples: 277,
  rowsPerStrip: 278,
  stripCounts: 279,
  planar: 284,
  t4Options: 292,
  predictor: 317,
  colorMap: 320,
  tileWidth: 322,
  tileHeight: 323,
  tileOffsets: 324,
  tileCounts: 325,
  extraSamples: 338,
  jpegTables: 347,
} as const;

/** Larger images are left to the OCR engine, which reads them from the file without a canvas. */
const MAX_PIXELS = 120_000_000;
const TYPE_SIZE: Record<number, number> = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 6: 1, 7: 1, 8: 2, 9: 4, 10: 8, 11: 4, 12: 8 };

interface Ifd {
  get(tag: number): number[] | undefined;
  one(tag: number, fallback: number): number;
}

function readIfd(view: DataView): Ifd {
  const le = view.getUint8(0) === 0x49;
  const at = view.getUint32(4, le);
  const count = view.getUint16(at, le);
  const tags = new Map<number, number[]>();
  for (let i = 0; i < count; i++) {
    const entry = at + 2 + i * 12;
    const tag = view.getUint16(entry, le);
    const type = view.getUint16(entry + 2, le);
    const n = view.getUint32(entry + 4, le);
    const size = TYPE_SIZE[type];
    if (!size) continue;
    const start = size * n <= 4 ? entry + 8 : view.getUint32(entry + 8, le);
    if (start + size * n > view.byteLength) continue;
    const values: number[] = [];
    for (let v = 0; v < n; v++) {
      const p = start + v * size;
      if (size === 1) values.push(view.getUint8(p));
      else if (size === 2) values.push(view.getUint16(p, le));
      else if (size === 4 && type !== 11) values.push(view.getUint32(p, le));
      else values.push(0); // Rationals and floats are not needed here.
    }
    tags.set(tag, values);
  }
  return { get: (t) => tags.get(t), one: (t, fallback) => tags.get(t)?.[0] ?? fallback };
}

function unpackBits(src: Uint8Array, size: number): Uint8Array {
  const out = new Uint8Array(size);
  let o = 0;
  for (let i = 0; i < src.length && o < size; ) {
    const n = (src[i++] << 24) >> 24;
    if (n >= 0) {
      out.set(src.subarray(i, i + n + 1).subarray(0, size - o), o);
      o += n + 1;
      i += n + 1;
    } else if (n !== -128) {
      out.fill(src[i++], o, o - n + 1);
      o += -n + 1;
    }
  }
  return out;
}

/** TIFF's LZW: codes are stored most significant bit first, and the code size grows one code early. */
function lzw(src: Uint8Array, size: number): Uint8Array {
  const out = new Uint8Array(size);
  const CLEAR = 256;
  const END = 257;
  // A table entry is a slice of the output: where it starts and how long it is.
  const starts = new Int32Array(4097);
  const lengths = new Int32Array(4097);
  let next = 258;
  let width = 9;
  let prev = -1;
  let o = 0;
  let acc = 0;
  let bits = 0;
  let i = 0;
  while (o < size) {
    while (bits < width && i < src.length) {
      acc = ((acc << 8) | src[i++]) & 0xffffff;
      bits += 8;
    }
    if (bits < width) break;
    const code = (acc >> (bits - width)) & ((1 << width) - 1);
    bits -= width;
    if (code === END) break;
    if (code === CLEAR) {
      next = 258;
      width = 9;
      prev = -1;
      continue;
    }
    const start = o;
    if (code < 256) {
      out[o++] = code;
    } else if (code < next) {
      const s = starts[code];
      const end = Math.min(s + lengths[code], size - o + s);
      for (let k = s; k < end; k++) out[o++] = out[k];
    } else if (prev >= 0) {
      // The code being defined right now: the previous string plus its own first byte.
      const s = prev < 256 ? -1 : starts[prev];
      const len = prev < 256 ? 1 : lengths[prev];
      const first = o;
      if (s < 0) out[o++] = prev;
      else for (let k = 0; k < len && o < size; k++) out[o++] = out[s + k];
      if (o < size) out[o++] = out[first];
    } else break;
    if (prev >= 0 && next < 4096) {
      // New entry: the previous string plus the first byte of this one, which sit next to each other in the output.
      const prevLen = prev < 256 ? 1 : lengths[prev];
      starts[next] = start - prevLen;
      lengths[next] = prevLen + 1;
      next++;
      width = next >= 2047 ? 12 : next >= 1023 ? 11 : next >= 511 ? 10 : 9;
    }
    prev = code;
  }
  return out;
}

async function inflate(src: Uint8Array): Promise<Uint8Array> {
  const stream = new Blob([src as BlobPart]).stream().pipeThrough(new DecompressionStream('deflate'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

function undoPredictor(data: Uint8Array, width: number, rows: number, samples: number, bytesPerSample: number, littleEndian: boolean) {
  const rowBytes = width * samples * bytesPerSample;
  for (let r = 0; r < rows; r++) {
    const row = r * rowBytes;
    if (bytesPerSample === 1) {
      for (let x = samples; x < rowBytes; x++) data[row + x] = (data[row + x] + data[row + x - samples]) & 255;
    } else {
      const step = samples * 2;
      const [lo, hi] = littleEndian ? [0, 1] : [1, 0];
      for (let x = step; x < rowBytes; x += 2) {
        const value = (data[row + x + lo] | (data[row + x + hi] << 8)) + (data[row + x - step + lo] | (data[row + x - step + hi] << 8));
        data[row + x + lo] = value & 255;
        data[row + x + hi] = (value >> 8) & 255;
      }
    }
  }
}

interface Layout {
  width: number;
  height: number;
  segWidth: number;
  segHeight: number;
  offsets: number[];
  counts: number[];
}

function layoutOf(ifd: Ifd): Layout | null {
  const width = ifd.one(TAG.width, 0);
  const height = ifd.one(TAG.height, 0);
  if (!width || !height || width * height > MAX_PIXELS) return null;
  const tiled = ifd.get(TAG.tileOffsets);
  const offsets = tiled ?? ifd.get(TAG.stripOffsets);
  const counts = (tiled ? ifd.get(TAG.tileCounts) : ifd.get(TAG.stripCounts)) ?? [];
  if (!offsets?.length) return null;
  return {
    width,
    height,
    segWidth: tiled ? ifd.one(TAG.tileWidth, width) : width,
    segHeight: tiled ? ifd.one(TAG.tileHeight, height) : Math.min(ifd.one(TAG.rowsPerStrip, height), height),
    offsets,
    counts,
  };
}

/** Where segment i goes in the picture. */
function placeOf(l: Layout, i: number) {
  const perRow = Math.ceil(l.width / l.segWidth);
  return { x: (i % perRow) * l.segWidth, y: Math.floor(i / perRow) * l.segHeight };
}

/** JPEG data per strip or tile. The browser decodes each one; shared tables are put back in front of it. */
async function drawJpegSegments(buf: Uint8Array, ifd: Ifd, l: Layout, photometric: number): Promise<ImageBitmap> {
  const canvas = new OffscreenCanvas(l.width, l.height);
  const ctx = canvas.getContext('2d')!;
  const tables = ifd.get(TAG.jpegTables);
  const head = tables ? Uint8Array.from(tables.slice(0, -2)) : new Uint8Array(0); // up to, not including, its end marker
  // Without this marker a decoder assumes YCbCr, and an RGB image comes out in the wrong colours.
  const adobe = photometric === 2 ? Uint8Array.of(0xff, 0xee, 0, 14, 0x41, 0x64, 0x6f, 0x62, 0x65, 0, 100, 0, 0, 0, 0, 0) : new Uint8Array(0);
  for (let i = 0; i < l.offsets.length; i++) {
    const seg = buf.subarray(l.offsets[i], l.offsets[i] + (l.counts[i] ?? 0));
    const parts = tables ? [head, adobe, seg.subarray(2)] : [seg.subarray(0, 2), adobe, seg.subarray(2)];
    const bmp = await createImageBitmap(new Blob(parts as BlobPart[], { type: 'image/jpeg' }));
    const { x, y } = placeOf(l, i);
    ctx.drawImage(bmp, x, y);
    bmp.close();
  }
  return createImageBitmap(canvas);
}

/** Fax data. pdf.js has a decoder for it, so each strip goes into a throwaway PDF page and gets rendered. */
async function drawFaxSegments(buf: Uint8Array, ifd: Ifd, l: Layout, compression: number, photometric: number): Promise<ImageBitmap> {
  const { PDFDocument, pushGraphicsState, popGraphicsState, concatTransformationMatrix, drawObject } = await import('pdf-lib');
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([l.width, l.height]);
  const reversed = ifd.one(TAG.fillOrder, 1) === 2;
  const t4 = ifd.one(TAG.t4Options, 0);
  const K = compression === 4 ? -1 : t4 & 1 ? 1 : 0;
  for (let i = 0; i < l.offsets.length; i++) {
    const data = buf.slice(l.offsets[i], l.offsets[i] + (l.counts[i] ?? 0));
    if (reversed) for (let b = 0; b < data.length; b++) data[b] = BIT_REVERSE[data[b]];
    const rows = Math.min(l.segHeight, l.height - i * l.segHeight);
    const stream = pdf.context.stream(data, {
      Type: 'XObject',
      Subtype: 'Image',
      Width: l.width,
      Height: rows,
      BitsPerComponent: 1,
      ColorSpace: 'DeviceGray',
      Filter: 'CCITTFaxDecode',
      DecodeParms: { K, Columns: l.width, Rows: rows, EncodedByteAlign: compression === 2 || (t4 & 4) !== 0 },
      // Fax "black" is the printed colour, unless the file says its zeros are black.
      Decode: photometric === 1 ? [1, 0] : [0, 1],
    });
    const name = page.node.newXObject('Strip', pdf.context.register(stream));
    page.pushOperators(pushGraphicsState(), concatTransformationMatrix(l.width, 0, 0, rows, 0, l.height - i * l.segHeight - rows), drawObject(name), popGraphicsState());
  }
  const { doc, close } = await openPdf(new Blob([(await pdf.save()) as BlobPart], { type: 'application/pdf' }));
  try {
    return await createImageBitmap(await renderPage(await doc.getPage(1), 1));
  } finally {
    await close();
  }
}

const BIT_REVERSE = Uint8Array.from({ length: 256 }, (_, n) => {
  let r = 0;
  for (let b = 0; b < 8; b++) if (n & (1 << b)) r |= 1 << (7 - b);
  return r;
});

/** The first page of a TIFF file, or null when it uses something not handled here. */
export async function decodeTiff(file: Blob): Promise<ImageBitmap | null> {
  const buf = new Uint8Array(await file.arrayBuffer());
  if (buf.length < 8) return null;
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const le = buf[0] === 0x49;
  const ifd = readIfd(view);
  const layout = layoutOf(ifd);
  if (!layout) return null;
  const { width, height, segWidth, segHeight, offsets, counts } = layout;
  const compression = ifd.one(TAG.compression, 1);
  const photometric = ifd.one(TAG.photometric, 1);
  if (compression === 7) return drawJpegSegments(buf, ifd, layout, photometric);
  if (compression === 2 || compression === 3 || compression === 4) return drawFaxSegments(buf, ifd, layout, compression, photometric);

  const samples = ifd.one(TAG.samples, 1);
  const bits = ifd.get(TAG.bits)?.[0] ?? 1;
  const planar = ifd.one(TAG.planar, 1) === 2;
  if (![1, 2, 4, 8, 16].includes(bits) || (planar && bits !== 8) || ![0, 1, 2, 3, 5].includes(photometric)) return null;
  const colors = photometric === 2 ? 3 : photometric === 5 ? 4 : 1;
  const alpha = samples > colors && (ifd.get(TAG.extraSamples)?.[0] ?? 0) !== 0;
  const map = ifd.get(TAG.colorMap);
  if (photometric === 3 && !map) return null;
  const predictor = ifd.one(TAG.predictor, 1);
  if (predictor > 2) return null;

  const rgba = new Uint8ClampedArray(width * height * 4).fill(255);
  const channelCount = planar ? samples : 1;
  const segmentsPerPlane = offsets.length / channelCount;
  const pixelSamples = planar ? 1 : samples;
  const rowBytesOf = (w: number) => Math.ceil((w * pixelSamples * bits) / 8);

  for (let i = 0; i < offsets.length; i++) {
    const plane = planar ? Math.floor(i / segmentsPerPlane) : 0;
    const place = placeOf(layout, planar ? i % segmentsPerPlane : i);
    const rows = Math.min(segHeight, layout.segWidth === width ? height - place.y : segHeight);
    const expected = rowBytesOf(segWidth) * rows;
    const raw = buf.subarray(offsets[i], offsets[i] + (counts[i] ?? expected));
    let data: Uint8Array;
    if (compression === 1) data = raw;
    else if (compression === 32773) data = unpackBits(raw, expected);
    else if (compression === 5) data = lzw(raw, expected);
    else if (compression === 8 || compression === 32946) data = await inflate(raw);
    else return null;
    if (predictor === 2) {
      if (bits < 8) return null;
      if (data === raw) data = raw.slice();
      undoPredictor(data, segWidth, rows, pixelSamples, bits / 8, le);
    }
    const rowBytes = rowBytesOf(segWidth);
    const sampleAt = (row: number, s: number): number => {
      const at = row * rowBytes;
      if (bits === 8) return data[at + s] ?? 0;
      if (bits === 16) return le ? (data[at + s * 2 + 1] ?? 0) : (data[at + s * 2] ?? 0);
      const bit = s * bits;
      return ((data[at + (bit >> 3)] ?? 0) >> (8 - bits - (bit & 7))) & ((1 << bits) - 1);
    };
    const top = bits <= 8 ? (1 << bits) - 1 : 255;
    for (let y = 0; y < rows && place.y + y < height; y++) {
      for (let x = 0; x < segWidth && place.x + x < width; x++) {
        const o = ((place.y + y) * width + place.x + x) * 4;
        const s = x * pixelSamples;
        if (planar) {
          const v = sampleAt(y, x);
          if (photometric === 2 && plane < 3) rgba[o + plane] = v;
          else if (photometric === 5 && plane < 4) {
            if (plane < 3) rgba[o + plane] = 255 - v;
            else for (let c = 0; c < 3; c++) rgba[o + c] = (rgba[o + c] * (255 - v)) / 255;
          } else if (plane >= colors && alpha) rgba[o + 3] = v;
          else if (colors === 1 && plane === 0) rgba[o] = rgba[o + 1] = rgba[o + 2] = photometric === 0 ? 255 - v : v;
          continue;
        }
        if (photometric === 2) {
          rgba[o] = sampleAt(y, s);
          rgba[o + 1] = sampleAt(y, s + 1);
          rgba[o + 2] = sampleAt(y, s + 2);
        } else if (photometric === 5) {
          const k = 255 - sampleAt(y, s + 3);
          rgba[o] = ((255 - sampleAt(y, s)) * k) / 255;
          rgba[o + 1] = ((255 - sampleAt(y, s + 1)) * k) / 255;
          rgba[o + 2] = ((255 - sampleAt(y, s + 2)) * k) / 255;
        } else if (photometric === 3) {
          const v = sampleAt(y, s);
          const third = map!.length / 3;
          rgba[o] = map![v] >> 8;
          rgba[o + 1] = map![third + v] >> 8;
          rgba[o + 2] = map![2 * third + v] >> 8;
        } else {
          const v = (sampleAt(y, s) * 255) / top;
          rgba[o] = rgba[o + 1] = rgba[o + 2] = photometric === 0 ? 255 - v : v;
        }
        if (alpha) rgba[o + 3] = sampleAt(y, s + colors);
      }
    }
  }
  return createImageBitmap(new ImageData(rgba, width, height));
}

// Noto fonts for Text to PDF (PLAN.md §13, Phase 1b). The standard PDF fonts only cover
// Latin text (Windows-1252), so for anything else (Japanese, Korean, Chinese, Cyrillic, Greek,
// Devanagari, extended Latin) we fall back to Noto. Fontsource publishes each Noto family in
// small slices, one per Unicode range, the way Google Fonts serves them. The browser downloads
// only the slices that hold characters in the text, from jsDelivr like the OCR engine, and the
// PDF embeds only the glyphs it uses. Requests name font slices; the text never leaves the device.

import type { PDFDocument, PDFFont } from 'pdf-lib';
import type { FontChoice } from './pdf';

type Fontkit = typeof import('@pdf-lib/fontkit');
type Font = ReturnType<Fontkit['create']>;

const CDN = 'https://cdn.jsdelivr.net/npm/@fontsource';

interface Family {
  id: string;
  version: string;
}

const fam = (id: string, version: string): Family => ({ id, version });
const SANS = fam('noto-sans', '5.3.0');
const SERIF = fam('noto-serif', '5.3.0');
const CJK_SANS = {
  ja: fam('noto-sans-jp', '5.3.1'),
  ko: fam('noto-sans-kr', '5.3.1'),
  sc: fam('noto-sans-sc', '5.3.1'),
  tc: fam('noto-sans-tc', '5.3.1'),
};
const CJK_SERIF = {
  ja: fam('noto-serif-jp', '5.3.1'),
  ko: fam('noto-serif-kr', '5.3.1'),
  sc: fam('noto-serif-sc', '5.3.1'),
  tc: fam('noto-serif-tc', '5.3.1'),
};

/**
 * Families to try, in order. Han characters are shared by Chinese, Japanese and Korean but drawn
 * differently in each, so the language the text looks like goes first: kana means Japanese,
 * Hangul means Korean, otherwise Chinese.
 */
function chain(text: string, choice: FontChoice): Family[] {
  const order: (keyof typeof CJK_SANS)[] = /[\p{Script=Hiragana}\p{Script=Katakana}]/u.test(text)
    ? ['ja', 'sc', 'tc', 'ko']
    : /\p{Script=Hangul}/u.test(text)
      ? ['ko', 'sc', 'tc', 'ja']
      : ['sc', 'tc', 'ja', 'ko'];
  const sans = [SANS, ...order.map((k) => CJK_SANS[k])];
  // Serif first when asked for, then sans for scripts the serif families lack (such as Devanagari).
  return choice === 'serif' ? [SERIF, ...order.map((k) => CJK_SERIF[k]), ...sans] : sans;
}

// Devanagari (Hindi) needs complex shaping: fontkit's shaper for it fails in the browser build,
// and pdf-lib ignores the mark positions it would compute. Noto Sans has the glyphs, but we leave
// these characters unsupported rather than draw them wrongly.
const COMPLEX = /\p{Script=Devanagari}/u;

const base = (f: Family) => `${CDN}/${f.id}@${f.version}`;

async function fetchOk(url: string): Promise<Response> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
}

// Downloads are kept for the rest of the visit, so a second PDF needs no new requests.
const indexes = new Map<string, Promise<Map<number, string[]>>>();
const slices = new Map<string, Promise<{ bytes: Uint8Array; font: Font }>>();

/** Code point → names of the slices whose unicode-range includes it. */
function sliceIndex(f: Family): Promise<Map<number, string[]>> {
  const url = `${base(f)}/unicode.json`;
  let p = indexes.get(url);
  if (!p) {
    p = fetchOk(url)
      .then((r) => r.json() as Promise<Record<string, string>>)
      .then((json) => {
        const map = new Map<number, string[]>();
        for (const [name, ranges] of Object.entries(json)) {
          const slice = name.replace(/[[\]]/g, '');
          for (const range of ranges.split(',')) {
            const [a, b = a] = range.trim().replace(/^U\+/i, '').split('-');
            for (let cp = parseInt(a, 16), end = parseInt(b, 16); cp <= end; cp++) {
              const list = map.get(cp);
              if (list) list.push(slice);
              else map.set(cp, [slice]);
            }
          }
        }
        return map;
      });
    p.catch(() => indexes.delete(url));
    indexes.set(url, p);
  }
  return p;
}

interface Table {
  tag: number;
  checksum: number;
  data: Uint8Array;
}

const dataView = (a: Uint8Array) => new DataView(a.buffer, a.byteOffset, a.byteLength);
const tagId = (tag: string) => [...tag].reduce((n, c) => n * 256 + c.charCodeAt(0), 0);

/**
 * Stores every glyph at an even length, with a long-format loca. fontkit's subsetter writes the
 * short loca format (offsets halved) for small subsets, which corrupts glyphs stored at odd lengths:
 * accented letters lost their base letter before this.
 */
function padGlyphs(tables: Table[]) {
  const get = (tag: string) => tables.find((t) => t.tag === tagId(tag));
  const [head, maxp, loca, glyf] = [get('head'), get('maxp'), get('loca'), get('glyf')];
  if (!head || !maxp || !loca || !glyf) return;
  const longLoca = dataView(head.data).getInt16(50) === 1;
  const glyphs = dataView(maxp.data).getUint16(4);
  const lv = dataView(loca.data);
  const start = (i: number) => (longLoca ? lv.getUint32(i * 4) : lv.getUint16(i * 2) * 2);
  const even = (n: number) => (n + 1) & ~1;

  let size = 0;
  for (let i = 0; i < glyphs; i++) size += even(start(i + 1) - start(i));
  const data = new Uint8Array(size);
  const offsets = new Uint8Array((glyphs + 1) * 4);
  const ov = dataView(offsets);
  let pos = 0;
  for (let i = 0; i < glyphs; i++) {
    ov.setUint32(i * 4, pos);
    data.set(glyf.data.subarray(start(i), start(i + 1)), pos);
    pos += even(start(i + 1) - start(i));
  }
  ov.setUint32(glyphs * 4, pos);
  glyf.data = data;
  loca.data = offsets;
  head.data = head.data.slice();
  dataView(head.data).setInt16(50, 1);
}

/**
 * WOFF → plain TrueType: the same tables, inflated and laid out as an ordinary font file.
 * fontkit can read WOFF itself, but its inflate fails on some of these files.
 */
async function woffToTtf(woff: Uint8Array): Promise<Uint8Array> {
  const view = dataView(woff);
  const count = view.getUint16(12);
  const tables: Table[] = [];
  for (let i = 0; i < count; i++) {
    const at = 44 + i * 20;
    const offset = view.getUint32(at + 4);
    const stored = view.getUint32(at + 8);
    const length = view.getUint32(at + 12);
    let data = woff.subarray(offset, offset + stored);
    if (stored < length) {
      const stream = new Blob([data as BlobPart]).stream().pipeThrough(new DecompressionStream('deflate'));
      data = new Uint8Array(await new Response(stream).arrayBuffer());
    }
    tables.push({ tag: view.getUint32(at), checksum: view.getUint32(at + 16), data });
  }
  padGlyphs(tables);
  const pad = (n: number) => (n + 3) & ~3;
  const out = new Uint8Array(tables.reduce((size, t) => size + pad(t.data.length), 12 + count * 16));
  const ttf = new DataView(out.buffer);
  const pow = 2 ** Math.floor(Math.log2(count));
  ttf.setUint32(0, view.getUint32(4));
  ttf.setUint16(4, count);
  ttf.setUint16(6, pow * 16);
  ttf.setUint16(8, Math.log2(pow));
  ttf.setUint16(10, (count - pow) * 16);
  let offset = 12 + count * 16;
  tables.forEach((t, i) => {
    const at = 12 + i * 16;
    ttf.setUint32(at, t.tag);
    ttf.setUint32(at + 4, t.checksum);
    ttf.setUint32(at + 8, offset);
    ttf.setUint32(at + 12, t.data.length);
    out.set(t.data, offset);
    offset += pad(t.data.length);
  });
  return out;
}

function loadSlice(fontkit: Fontkit, f: Family, slice: string) {
  // WOFF rather than WOFF2: fontkit's subsetter copies glyph data as stored, and WOFF2 transforms it.
  const url = `${base(f)}/files/${f.id}-${slice}-400-normal.woff`;
  let p = slices.get(url);
  if (!p) {
    p = fetchOk(url)
      .then((r) => r.arrayBuffer())
      .then((buf) => woffToTtf(new Uint8Array(buf)))
      .then((bytes) => ({ bytes, font: fontkit.create(bytes) }));
    p.catch(() => slices.delete(url));
    slices.set(url, p);
  }
  return p;
}

/**
 * Finds a Noto font for each character in `chars` and embeds it in `pdf` (subset, so only the
 * glyphs used are stored). Characters no Noto family covers are left out of the result.
 * `failed` is true when a download failed, so missing characters may only be missing offline.
 */
export async function embedFallbackFonts(
  pdf: PDFDocument,
  chars: Set<string>,
  text: string,
  choice: FontChoice,
): Promise<{ fonts: Map<string, PDFFont>; failed: boolean }> {
  // The package's types describe named exports, but its ES build has a single default export.
  const fontkit = ((await import('@pdf-lib/fontkit')) as unknown as { default: Fontkit }).default;
  pdf.registerFontkit(fontkit);

  const fonts = new Map<string, PDFFont>();
  let failed = false;
  let left = [...chars].filter((ch) => !COMPLEX.test(ch));

  for (const f of chain(text, choice)) {
    if (!left.length) break;
    let index: Map<number, string[]>;
    try {
      index = await sliceIndex(f);
    } catch {
      failed = true;
      continue;
    }
    const wanted = new Map<string, string[]>();
    for (const ch of left) {
      for (const slice of index.get(ch.codePointAt(0)!) ?? []) {
        const list = wanted.get(slice);
        if (list) list.push(ch);
        else wanted.set(slice, [ch]);
      }
    }
    const entries = [...wanted];
    const loaded = await Promise.all(
      entries.map(([slice]) =>
        loadSlice(fontkit, f, slice).catch(() => {
          failed = true;
          return null;
        }),
      ),
    );
    for (let i = 0; i < entries.length; i++) {
      const slice = loaded[i];
      if (!slice) continue;
      // A unicode-range is a promise about the slice, not about each glyph, so check.
      const covered = entries[i][1].filter((ch) => !fonts.has(ch) && slice.font.hasGlyphForCodePoint(ch.codePointAt(0)!));
      if (!covered.length) continue;
      const font = await pdf.embedFont(slice.bytes, { subset: true });
      for (const ch of covered) fonts.set(ch, font);
    }
    left = left.filter((ch) => !fonts.has(ch));
  }
  return { fonts, failed };
}

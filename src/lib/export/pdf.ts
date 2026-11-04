// PDF creation with pdf-lib (PLAN.md §8.6 and §8.7). Loaded only when someone creates a PDF.

import { JOINER, SHAPED_SCRIPT } from './shaping-chars';
import type { Shaper } from './pdf-shaping';

export type PageSize = 'a4' | 'letter' | 'fit';
export type Orientation = 'auto' | 'portrait' | 'landscape';

const SIZES = { a4: [595.28, 841.89], letter: [612, 792] } as const;
/** PDF viewers refuse pages over 200 inches, and many complain under 3 points. */
const MAX_PAGE_POINTS = 14400;
const MIN_PAGE_POINTS = 3;

export interface ImagePdfOptions {
  size: PageSize;
  orientation: Orientation;
  /** Margin in points (1/72 inch). */
  margin: number;
}

/** One image per page, scaled to fit inside the margins and centred. Images must be JPEG or PNG bytes. */
export async function imagesToPdf(
  images: { bytes: Uint8Array; type: 'jpeg' | 'png'; width: number; height: number }[],
  opts: ImagePdfOptions,
): Promise<Uint8Array> {
  const { PDFDocument } = await import('pdf-lib');
  const pdf = await PDFDocument.create();

  for (const img of images) {
    const embedded = img.type === 'png' ? await pdf.embedPng(img.bytes) : await pdf.embedJpg(img.bytes);
    let pw: number;
    let ph: number;
    if (opts.size === 'fit') {
      // CSS pixels to points: 96 px per inch, 72 pt per inch.
      const fit = Math.min(0.75, (MAX_PAGE_POINTS - opts.margin * 2) / Math.max(img.width, img.height));
      pw = Math.max(MIN_PAGE_POINTS, img.width * fit + opts.margin * 2);
      ph = Math.max(MIN_PAGE_POINTS, img.height * fit + opts.margin * 2);
    } else {
      const [a, b] = SIZES[opts.size];
      const landscape = opts.orientation === 'landscape' || (opts.orientation === 'auto' && img.width > img.height);
      [pw, ph] = landscape ? [b, a] : [a, b];
    }
    const page = pdf.addPage([pw, ph]);
    const boxW = pw - opts.margin * 2;
    const boxH = ph - opts.margin * 2;
    const scale = Math.min(boxW / img.width, boxH / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    page.drawImage(embedded, { x: (pw - w) / 2, y: (ph - h) / 2, width: w, height: h });
  }
  return pdf.save();
}

export type FontChoice = 'sans' | 'serif' | 'mono';

export interface TextPdfOptions {
  font: FontChoice;
  fontSize: number;
  size: Exclude<PageSize, 'fit'>;
  margin: number;
}

export interface TextPdfResult {
  bytes: Uint8Array;
  /** Characters no font could draw, each replaced with "?". */
  replaced: number;
  /** A font download failed, so some of the replaced characters may draw fine when online. */
  fontsFailed: boolean;
}

// Line breaking for Chinese and Japanese, which have no spaces: a line may break after any
// ideograph or kana, except before closing punctuation or small kana, or after an opening bracket.
// Korean puts spaces between words, so it wraps at spaces like Latin text.
const BREAK_ANY = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Bopomofo}\u3000-\u303f\uff00-\uffef]/u;
const NO_START = new Set('、。，．・：；？！ー）」』】〕〉》〙〗｝］’”ぁぃぅぇぉっゃゅょゎゕゖァィゥェォッャュョヮヵヶ々〻ゝゞヽヾ〜～…‥');
const NO_END = new Set('（「『【〔〈《〘〖｛［‘“');

const PLAIN_ASCII = /^[\x20-\x7e]*$/;
const INVISIBLE = /\p{Default_Ignorable_Code_Point}/u;
/** Enough for the distinct words of a large document, without growing without end. */
const MAX_MEASURED = 200_000;
/** Lines drawn between pauses that let the page repaint. */
const BREATHE_EVERY = 3000;

/** Splits a line into pieces that must stay together: words, runs of spaces, and single CJK characters. */
function breakUnits(line: string): string[] {
  if (PLAIN_ASCII.test(line)) return line.match(/ +|[^ ]+/g) ?? [];
  const units: string[] = [];
  let kind = '';
  for (const ch of line) {
    const next = /\s/.test(ch) ? 'space' : BREAK_ANY.test(ch) ? 'cjk' : 'word';
    const last = units[units.length - 1];
    const join =
      last !== undefined &&
      ((next === kind && next !== 'cjk') ||
        (next !== 'space' && kind !== 'space' && (NO_START.has(ch) || NO_END.has([...last].pop()!))));
    if (join) units[units.length - 1] += ch;
    else units.push(ch);
    kind = next;
  }
  return units;
}

/**
 * Plain text → PDF. Latin text (Windows-1252) uses the standard PDF fonts. Other scripts use Noto
 * fonts, downloaded only when the text needs them (see pdf-fonts.ts), and Devanagari is shaped by
 * HarfBuzz (see pdf-shaping.ts). Characters no font covers are replaced with "?" and counted, so the page can warn the user.
 */
export async function textToPdf(
  text: string,
  opts: TextPdfOptions,
  onFontsLoading?: () => void,
): Promise<TextPdfResult> {
  const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib');
  type PDFFont = import('pdf-lib').PDFFont;
  const pdf = await PDFDocument.create();
  const fontName = { sans: StandardFonts.Helvetica, serif: StandardFonts.TimesRoman, mono: StandardFonts.Courier }[opts.font];
  const font = await pdf.embedFont(fontName);

  const encodable = (ch: string) => {
    try {
      font.encodeText(ch);
      return true;
    } catch {
      return false;
    }
  };
  const cache = new Map<string, boolean>();
  const standard = (ch: string) => {
    if (!cache.has(ch)) cache.set(ch, encodable(ch));
    return cache.get(ch)!;
  };

  // NFC turns letters typed as base + combining accent into the single character the fonts have.
  // Split before cleaning: line breaks are not drawable characters and must not be replaced.
  // Every kind of line break counts (form feeds, the separators Word uses …); other control characters and soft hyphens draw nothing.
  const sources = text
    .normalize('NFC')
    .replace(/\t/g, '    ')
    .split(/\r\n?|[\n\f\v\x85\p{Zl}\p{Zp}]/u)
    .map((line) => line.replace(/[\p{Cc}\xad]/gu, ''));

  const missing = new Set<string>();
  let needsShaping = false;
  for (const source of sources) {
    if (PLAIN_ASCII.test(source)) continue;
    // Invisible characters such as zero-width joiners are simply left out, so they need no font.
    for (const ch of source) {
      if (standard(ch) || INVISIBLE.test(ch)) continue;
      if (SHAPED_SCRIPT.test(ch)) needsShaping = true;
      else missing.add(ch);
    }
  }
  let fallback = new Map<string, PDFFont>();
  let fontsFailed = false;
  let shaper: Shaper | null = null;
  if (missing.size || needsShaping) onFontsLoading?.();
  if (needsShaping) {
    try {
      shaper = await (await import('./pdf-shaping')).loadShaper(pdf, opts.font);
    } catch {
      fontsFailed = true;
    }
  }
  if (missing.size) {
    const { embedFallbackFonts } = await import('./pdf-fonts');
    ({ fonts: fallback, failed: fontsFailed } = await embedFallbackFonts(pdf, missing, text, opts.font));
  }
  const fontOf = (ch: string) => fallback.get(ch) ?? font;
  const isShaped = (ch: string) => !!shaper && (JOINER.test(ch) || (SHAPED_SCRIPT.test(ch) && shaper.covers(ch)));

  let replaced = 0;
  const clean = (s: string) => {
    if (PLAIN_ASCII.test(s)) return s;
    let out = '';
    let previous = '';
    for (const ch of s) {
      // A joiner only means something right after a Devanagari letter.
      if (JOINER.test(ch)) {
        if (isShaped(previous)) out += ch;
      } else if (isShaped(ch) || standard(ch) || fallback.has(ch)) out += ch;
      else if (!INVISIBLE.test(ch)) {
        replaced++;
        out += '?';
      }
      previous = ch;
    }
    return out;
  };

  /** Consecutive characters that share a font; `font` is null for text the shaper draws. */
  const runs = (s: string) => {
    const out: { text: string; font: PDFFont | null }[] = [];
    for (const ch of s) {
      const f = isShaped(ch) ? null : fontOf(ch);
      const last = out[out.length - 1];
      if (last && last.font === f) last.text += ch;
      else out.push({ text: ch, font: f });
    }
    return out;
  };
  /** Whole letters with their marks, so a long Devanagari word never breaks inside one. */
  const pieces = (s: string): Iterable<string> =>
    SHAPED_SCRIPT.test(s) ? Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(s), (g) => g.segment) : s;

  const [pw, ph] = SIZES[opts.size];
  const maxW = pw - opts.margin * 2;
  const lineH = opts.fontSize * 1.4;
  // Words repeat, so measuring each only once matters: long documents have millions of them.
  const measured = new Map<string, number>();
  const width = (s: string) => {
    let w = measured.get(s);
    if (w === undefined) {
      w = runs(s).reduce((sum, r) => sum + (r.font ? r.font.widthOfTextAtSize(r.text, opts.fontSize) : shaper!.width(r.text, opts.fontSize)), 0);
      if (measured.size < MAX_MEASURED) measured.set(s, w);
    }
    return w;
  };

  // Wrap every source line to the page width; units too long for a line are broken by character.
  const lines: string[] = [];
  for (const source of sources) {
    const raw = clean(source);
    if (!raw) {
      lines.push('');
      continue;
    }
    let current = '';
    let currentW = 0;
    for (const unit of breakUnits(raw)) {
      const unitW = width(unit);
      if (currentW + unitW <= maxW) {
        current += unit;
        currentW += unitW;
        continue;
      }
      if (current.trim()) lines.push(current.trimEnd());
      current = unit.trimStart();
      currentW = width(current);
      if (currentW > maxW) {
        // One long run, such as a URL or a line of code. Each character is measured once: it can be 100 000 characters long.
        current = '';
        currentW = 0;
        for (const ch of pieces(unit.trimStart())) {
          const charW = width(ch);
          if (current && currentW + charW > maxW) {
            lines.push(current);
            current = '';
            currentW = 0;
          }
          current += ch;
          currentW += charW;
        }
      }
    }
    lines.push(current.trimEnd());
  }

  let page = pdf.addPage([pw, ph]);
  let y = ph - opts.margin - opts.fontSize;
  for (const [i, line] of lines.entries()) {
    if (y < opts.margin) {
      page = pdf.addPage([pw, ph]);
      y = ph - opts.margin - opts.fontSize;
    }
    let x = opts.margin;
    for (const run of runs(line)) {
      if (run.font) {
        page.drawText(run.text, { x, y, size: opts.fontSize, font: run.font, color: rgb(0.07, 0.07, 0.1) });
        x += run.font.widthOfTextAtSize(run.text, opts.fontSize);
      } else {
        x += shaper!.draw(page, run.text, x, y, opts.fontSize, rgb(0.07, 0.07, 0.1));
      }
    }
    y -= lineH;
    if (i % BREATHE_EVERY === BREATHE_EVERY - 1) await new Promise((resolve) => setTimeout(resolve));
  }
  shaper?.finish();
  return { bytes: await pdf.save(), replaced, fontsFailed };
}

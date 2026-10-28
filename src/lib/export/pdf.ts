// PDF creation with pdf-lib (PLAN.md §8.6 and §8.7). Loaded only when someone creates a PDF.

export type PageSize = 'a4' | 'letter' | 'fit';
export type Orientation = 'auto' | 'portrait' | 'landscape';

const SIZES = { a4: [595.28, 841.89], letter: [612, 792] } as const;

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
      pw = img.width * 0.75 + opts.margin * 2;
      ph = img.height * 0.75 + opts.margin * 2;
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

/** Splits a line into pieces that must stay together: words, runs of spaces, and single CJK characters. */
function breakUnits(line: string): string[] {
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
 * fonts, downloaded only when the text needs them (see pdf-fonts.ts). Characters no font covers
 * are replaced with "?" and counted, so the page can warn the user.
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
  const sources = text.normalize('NFC').replace(/\t/g, '    ').replace(/\r\n?/g, '\n').split('\n');

  const missing = new Set<string>();
  for (const source of sources) for (const ch of source) if (!standard(ch)) missing.add(ch);
  let fallback = new Map<string, PDFFont>();
  let fontsFailed = false;
  if (missing.size) {
    onFontsLoading?.();
    const { embedFallbackFonts } = await import('./pdf-fonts');
    ({ fonts: fallback, failed: fontsFailed } = await embedFallbackFonts(pdf, missing, text, opts.font));
  }
  const fontOf = (ch: string) => fallback.get(ch) ?? font;

  let replaced = 0;
  const clean = (s: string) =>
    [...s]
      .map((ch) => {
        if (standard(ch) || fallback.has(ch)) return ch;
        // Invisible characters such as zero-width joiners and variation selectors are simply left out.
        if (/\p{Default_Ignorable_Code_Point}/u.test(ch)) return '';
        replaced++;
        return '?';
      })
      .join('');

  /** Consecutive characters that share a font. */
  const runs = (s: string) => {
    const out: { text: string; font: PDFFont }[] = [];
    for (const ch of s) {
      const f = fontOf(ch);
      const last = out[out.length - 1];
      if (last?.font === f) last.text += ch;
      else out.push({ text: ch, font: f });
    }
    return out;
  };

  const [pw, ph] = SIZES[opts.size];
  const maxW = pw - opts.margin * 2;
  const lineH = opts.fontSize * 1.4;
  const width = (s: string) => runs(s).reduce((w, r) => w + r.font.widthOfTextAtSize(r.text, opts.fontSize), 0);

  // Wrap every source line to the page width; units too long for a line are broken by character.
  const lines: string[] = [];
  for (const source of sources) {
    const raw = clean(source);
    if (!raw) {
      lines.push('');
      continue;
    }
    let current = '';
    for (const unit of breakUnits(raw)) {
      if (width(current + unit) <= maxW) {
        current += unit;
        continue;
      }
      if (current.trim()) lines.push(current.trimEnd());
      current = unit.trimStart();
      while (width(current) > maxW) {
        const chars = [...current];
        let cut = chars.length;
        while (cut > 1 && width(chars.slice(0, cut).join('')) > maxW) cut--;
        lines.push(chars.slice(0, cut).join(''));
        current = chars.slice(cut).join('');
      }
    }
    lines.push(current.trimEnd());
  }

  let page = pdf.addPage([pw, ph]);
  let y = ph - opts.margin - opts.fontSize;
  for (const line of lines) {
    if (y < opts.margin) {
      page = pdf.addPage([pw, ph]);
      y = ph - opts.margin - opts.fontSize;
    }
    let x = opts.margin;
    for (const run of runs(line)) {
      page.drawText(run.text, { x, y, size: opts.fontSize, font: run.font, color: rgb(0.07, 0.07, 0.1) });
      x += run.font.widthOfTextAtSize(run.text, opts.fontSize);
    }
    y -= lineH;
  }
  return { bytes: await pdf.save(), replaced, fontsFailed };
}

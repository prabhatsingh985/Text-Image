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

/**
 * Plain text → PDF. This version uses the standard PDF fonts, which cover Latin text
 * (Windows-1252). Characters outside that set are replaced with "?" and counted, so the
 * page can warn the user. Noto fonts for other scripts come in Phase 1b (PLAN.md §13).
 */
export async function textToPdf(text: string, opts: TextPdfOptions): Promise<{ bytes: Uint8Array; replaced: number }> {
  const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib');
  const pdf = await PDFDocument.create();
  const fontName = { sans: StandardFonts.Helvetica, serif: StandardFonts.TimesRoman, mono: StandardFonts.Courier }[opts.font];
  const font = await pdf.embedFont(fontName);

  let replaced = 0;
  const encodable = (ch: string) => {
    try {
      font.encodeText(ch);
      return true;
    } catch {
      return false;
    }
  };
  const cache = new Map<string, boolean>();
  const clean = (s: string) =>
    [...s.replace(/\t/g, '    ')]
      .map((ch) => {
        if (!cache.has(ch)) cache.set(ch, encodable(ch));
        if (cache.get(ch)) return ch;
        replaced++;
        return '?';
      })
      .join('');

  const [pw, ph] = SIZES[opts.size];
  const maxW = pw - opts.margin * 2;
  const lineH = opts.fontSize * 1.4;
  const width = (s: string) => font.widthOfTextAtSize(s, opts.fontSize);

  // Wrap every source line to the page width; long words are broken by character.
  const lines: string[] = [];
  // Split first: line breaks are not drawable characters and must not be replaced.
  for (const source of text.replace(/\r\n?/g, '\n').split('\n')) {
    const raw = clean(source);
    if (!raw) {
      lines.push('');
      continue;
    }
    let current = '';
    for (const word of raw.split(/(\s+)/)) {
      if (width(current + word) <= maxW) {
        current += word;
        continue;
      }
      if (current.trim()) lines.push(current.trimEnd());
      current = word.trimStart();
      while (width(current) > maxW) {
        let cut = current.length;
        while (cut > 1 && width(current.slice(0, cut)) > maxW) cut--;
        lines.push(current.slice(0, cut));
        current = current.slice(cut);
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
    if (line) page.drawText(line, { x: opts.margin, y, size: opts.fontSize, font, color: rgb(0.07, 0.07, 0.1) });
    y -= lineH;
  }
  return { bytes: await pdf.save(), replaced };
}

import type { OcrResult } from './ocr/types';

export interface TextOptions {
  keepLines: boolean;
  tidySpaces: boolean;
}

/** Join lines into flowing text, repairing words split with a hyphen at the line end. */
export function joinLines(lines: string[]): string {
  let out = '';
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (!out) out = line;
    else if (/[A-Za-zÀ-ÿ]-$/.test(out) && /^[a-zà-ÿ]/.test(line)) out = out.slice(0, -1) + line;
    else out += ' ' + line;
  }
  return out;
}

function tidy(s: string): string {
  return s
    .replace(/[ \t ]{2,}/g, ' ')
    .replace(/ +([,.;:!?)\]])/g, '$1')
    .replace(/([(\[]) +/g, '$1');
}

/** Plain text from an OCR result: paragraphs separated by a blank line. */
export function buildText(result: OcrResult, opts: TextOptions): string {
  const paras = result.paragraphs.map((p) => {
    const lines = p.lines.map((l) => (opts.tidySpaces ? tidy(l.text) : l.text));
    return opts.keepLines ? lines.join('\n') : joinLines(lines);
  });
  return paras.join('\n\n').trim();
}

export function countWords(text: string): number {
  const t = text.trim();
  if (!t) return 0;
  // Languages without spaces (Chinese, Japanese, Thai) are better counted by characters.
  const segmenter = typeof Intl !== 'undefined' && 'Segmenter' in Intl ? new Intl.Segmenter(undefined, { granularity: 'word' }) : null;
  if (segmenter) {
    let n = 0;
    for (const s of segmenter.segment(t)) if (s.isWordLike) n++;
    return n;
  }
  return t.split(/\s+/).length;
}

export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}

export function baseName(name: string): string {
  return name.replace(/\.[^.]+$/, '') || 'image';
}

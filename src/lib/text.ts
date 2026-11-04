import type { OcrResult } from './ocr/types';

export interface TextOptions {
  keepLines: boolean;
  tidySpaces: boolean;
}

// Chinese and Japanese are written without spaces. Korean does use them, so Hangul is left out.
const CJK = '\\p{Script=Han}\\p{Script=Hiragana}\\p{Script=Katakana}\\u3000-\\u303f\\u30fb\\u30fc\\uff00-\\uff60';
const CJK_GAP = new RegExp(`([${CJK}])[ \\t]+(?=[${CJK}])`, 'gu');
const CJK_END = new RegExp(`[${CJK}]$`, 'u');
const CJK_START = new RegExp(`^[${CJK}]`, 'u');

/** The OCR engine returns Chinese and Japanese with a space between most characters; those spaces are not in the text. */
export function closeCjkGaps(s: string): string {
  return s.replace(CJK_GAP, '$1');
}

/** Join lines into flowing text, repairing words split with a hyphen at the line end. */
export function joinLines(lines: string[]): string {
  let out = '';
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (!out) out = line;
    else if (/[A-Za-zÀ-ÿ]-$/.test(out) && /^[a-zà-ÿ]/.test(line)) out = out.slice(0, -1) + line;
    else if (CJK_END.test(out) && CJK_START.test(line)) out += line;
    else out += ' ' + line;
  }
  return out;
}

/** "•" is usually read as "«" or a similar sign. A "«" with its closing "»" on the line is a real quotation mark. */
export function fixBullet(line: string): string {
  return /^\s*(«(?!.*»)|[°¢])\s+(?=[\p{L}\p{N}])/u.test(line) ? line.replace(/^\s*\S+/, '•') : line;
}

function tidy(s: string): string {
  return fixBullet(s)
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

/** Longer text is counted the quick way: the segmenter needs close to a minute for 5 MB, on every keystroke. */
const SEGMENTER_MAX = 100_000;
const NO_SPACE_SCRIPTS = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Thai}]/gu;

export function countWords(text: string): number {
  const t = text.trim();
  if (!t) return 0;
  // Languages without spaces (Chinese, Japanese, Thai) are better counted by characters.
  if (t.length <= SEGMENTER_MAX && typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    let n = 0;
    for (const s of new Intl.Segmenter(undefined, { granularity: 'word' }).segment(t)) if (s.isWordLike) n++;
    return n;
  }
  // A word in those scripts is about two characters long.
  const noSpace = t.match(NO_SPACE_SCRIPTS)?.length ?? 0;
  const spaced = t.replace(NO_SPACE_SCRIPTS, ' ').match(/\S+/g)?.length ?? 0;
  return spaced + Math.round(noSpace / 2);
}

export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}

/** "3 words", "1 word". Languages whose plural looks the same have no separate string for one. */
export function counted(n: number, many: string, one?: string): string {
  return n === 1 && one ? one : fmt(many, { n });
}

/** The word and character count shown under a text box. */
export function textStats(text: string, t: Record<string, string>): string {
  return text ? `${counted(countWords(text), t.words, t.wordOne)} · ${counted(text.length, t.chars, t.charOne)}` : '';
}

export function baseName(name: string): string {
  return name.replace(/\.[^.]+$/, '') || 'image';
}

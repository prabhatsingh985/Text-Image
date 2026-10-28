import type Tesseract from 'tesseract.js';
import { detectScript, recognize, type ProgressFn } from './engine';
import type { OcrResult } from './types';

// Automatic text language (no picker). Every image is first read in English plus the visitor's
// own language. When that reads poorly, Tesseract's script detection says which writing system
// the image uses and the image is read again with the matching language.

const RTL = new Set(['ara', 'fas', 'urd', 'heb']);

/** Browser language (BCP 47) → Tesseract code. */
const FROM_BROWSER: Record<string, string> = {
  es: 'spa', pt: 'por', fr: 'fra', de: 'deu', it: 'ita', nl: 'nld', pl: 'pol', tr: 'tur', vi: 'vie', id: 'ind', ms: 'msa',
  fil: 'fil', tl: 'fil', ru: 'rus', uk: 'ukr', cs: 'ces', ro: 'ron', hu: 'hun', el: 'ell', sv: 'swe', da: 'dan', nb: 'nor',
  nn: 'nor', no: 'nor', fi: 'fin', ar: 'ara', fa: 'fas', ur: 'urd', he: 'heb', iw: 'heb', hi: 'hin', bn: 'ben', mr: 'mar',
  gu: 'guj', pa: 'pan', ta: 'tam', te: 'tel', kn: 'kan', ml: 'mal', ne: 'nep', th: 'tha', ja: 'jpn', ko: 'kor', zh: 'chi_sim',
};

/** Writing system from OSD → languages to read it with. */
const FROM_SCRIPT: Record<string, string> = {
  Devanagari: 'hin', Bengali: 'ben', Gurmukhi: 'pan', Gujarati: 'guj', Tamil: 'tam', Telugu: 'tel', Kannada: 'kan',
  Malayalam: 'mal', Thai: 'tha', Arabic: 'ara', Hebrew: 'heb', Cyrillic: 'rus', Greek: 'ell', Han: 'chi_sim',
  Japanese: 'jpn', Katakana: 'jpn', Hiragana: 'jpn', Hangul: 'kor', Korean: 'kor',
};

/** Below this page confidence a result is probably the wrong language. Clean text scores 80+. */
const GOOD_ENOUGH = 70;

export function isRtl(langs: string): boolean {
  return langs.split('+').some((l) => RTL.has(l));
}

/** The browser's main language, when it is not English. */
function browserLanguage(): string | null {
  const tag = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase();
  if (/^zh-(tw|hk|mo|hant)/.test(tag)) return 'chi_tra';
  return FROM_BROWSER[tag.split('-')[0]] ?? null;
}

// A language found by detection is tried first for the rest of the visit, so a batch of
// Malayalam images is detected once, not once per image.
let detected: string | null = null;

function withEnglish(lang: string | null): string {
  return !lang || lang === 'eng' ? 'eng' : `${lang}+eng`;
}

/** The languages to try first: last detected, else the page's language, else the browser's. */
export function defaultLangs(pageLang: string): string {
  return withEnglish(detected ?? (pageLang !== 'eng' ? pageLang : browserLanguage()));
}

/**
 * Read an image without being told its language. Pass a canvas where possible: script detection
 * needs pixels, and the caller may free the canvas once this resolves.
 */
export async function recognizeAuto(image: Tesseract.ImageLike, pageLang: string, onProgress?: ProgressFn): Promise<OcrResult> {
  const first = defaultLangs(pageLang);
  const result = await recognize(image, onProgress, first);
  if (result.confidence >= GOOD_ENOUGH) return result;

  const script = await detectScript(image, onProgress);
  const lang = script && FROM_SCRIPT[script];
  // Latin text: the English model already reads it about as well as any other.
  if (!lang) return result;
  const langs = withEnglish(lang);
  if (langs === first) return result;

  const second = await recognize(image, onProgress, langs);
  if (second.confidence > result.confidence) {
    detected = lang;
    return second;
  }
  return result;
}

// All 16 locales from PLAN.md §5.2. Only `enabled` locales are built.
// English lives at the site root; every other locale gets its own folder.
export interface Locale {
  code: string;
  hreflang: string;
  prefix: string;
  dir: 'ltr' | 'rtl';
  label: string;
  /** Default OCR language (Tesseract code) for this locale's pages. */
  ocrLang: string;
  enabled: boolean;
}

export const LOCALES: Locale[] = [
  { code: 'en', hreflang: 'en', prefix: '', dir: 'ltr', label: 'English', ocrLang: 'eng', enabled: true },
  // One Portuguese version (written in Brazilian Portuguese), so it targets every Portuguese speaker.
  { code: 'pt', hreflang: 'pt', prefix: 'pt', dir: 'ltr', label: 'Português', ocrLang: 'por', enabled: true },
  { code: 'id', hreflang: 'id', prefix: 'id', dir: 'ltr', label: 'Bahasa Indonesia', ocrLang: 'ind', enabled: false },
  { code: 'es', hreflang: 'es', prefix: 'es', dir: 'ltr', label: 'Español', ocrLang: 'spa', enabled: true },
  { code: 'de', hreflang: 'de', prefix: 'de', dir: 'ltr', label: 'Deutsch', ocrLang: 'deu', enabled: true },
  { code: 'fr', hreflang: 'fr', prefix: 'fr', dir: 'ltr', label: 'Français', ocrLang: 'fra', enabled: true },
  { code: 'ja', hreflang: 'ja', prefix: 'ja', dir: 'ltr', label: '日本語', ocrLang: 'jpn', enabled: true },
  { code: 'ko', hreflang: 'ko', prefix: 'ko', dir: 'ltr', label: '한국어', ocrLang: 'kor', enabled: true },
  { code: 'ar', hreflang: 'ar', prefix: 'ar', dir: 'rtl', label: 'العربية', ocrLang: 'ara', enabled: false },
  { code: 'tr', hreflang: 'tr', prefix: 'tr', dir: 'ltr', label: 'Türkçe', ocrLang: 'tur', enabled: false },
  { code: 'vi', hreflang: 'vi', prefix: 'vi', dir: 'ltr', label: 'Tiếng Việt', ocrLang: 'vie', enabled: false },
  { code: 'ru', hreflang: 'ru', prefix: 'ru', dir: 'ltr', label: 'Русский', ocrLang: 'rus', enabled: false },
  { code: 'it', hreflang: 'it', prefix: 'it', dir: 'ltr', label: 'Italiano', ocrLang: 'ita', enabled: true },
  { code: 'th', hreflang: 'th', prefix: 'th', dir: 'ltr', label: 'ไทย', ocrLang: 'tha', enabled: false },
  { code: 'pl', hreflang: 'pl', prefix: 'pl', dir: 'ltr', label: 'Polski', ocrLang: 'pol', enabled: false },
  { code: 'nl', hreflang: 'nl', prefix: 'nl', dir: 'ltr', label: 'Nederlands', ocrLang: 'nld', enabled: false },
];

export const ACTIVE_LOCALES = LOCALES.filter((l) => l.enabled);
export const DEFAULT_LOCALE = LOCALES[0];

export function getLocale(code: string): Locale {
  const locale = LOCALES.find((l) => l.code === code);
  if (!locale) throw new Error(`Unknown locale: ${code}`);
  return locale;
}

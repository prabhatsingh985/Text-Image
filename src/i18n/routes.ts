import { LOCALES, type Locale } from './locales';

// Every page has a stable id and a slug per locale. Slugs use the native keyword
// for each language (PLAN.md §5.2). Missing locales fall back to the English slug.
export const TOOL_IDS = [
  'image-to-text',
  'screenshot-to-text',
  'jpg-to-word',
  'jpg-to-excel',
  'pdf-to-text',
  'pdf-to-excel',
  'word-to-text',
  'ppt-to-text',
  'image-to-pdf',
  'text-to-pdf',
] as const;
export const STATIC_IDS = ['about', 'contact', 'privacy-policy', 'terms'] as const;

export type ToolId = (typeof TOOL_IDS)[number];
export type StaticId = (typeof STATIC_IDS)[number];
export type PageId = ToolId | StaticId;

const SLUGS: Record<PageId, Record<string, string>> = {
  'image-to-text': { en: '' },
  'jpg-to-word': { en: 'jpg-to-word' },
  'jpg-to-excel': { en: 'jpg-to-excel' },
  'image-to-pdf': { en: 'image-to-pdf' },
  'text-to-pdf': { en: 'text-to-pdf' },
  'pdf-to-text': { en: 'pdf-to-text' },
  'screenshot-to-text': { en: 'screenshot-to-text' },
  'pdf-to-excel': { en: 'pdf-to-excel' },
  'word-to-text': { en: 'word-to-text' },
  'ppt-to-text': { en: 'ppt-to-text' },
  about: { en: 'about' },
  contact: { en: 'contact' },
  'privacy-policy': { en: 'privacy-policy' },
  terms: { en: 'terms' },
};

export function slugFor(id: PageId, locale: Locale): string {
  return SLUGS[id][locale.code] ?? SLUGS[id].en;
}

/** Path segments after the domain, e.g. "de/jpg-in-word". Empty string for the English homepage. */
export function pathFor(id: PageId, locale: Locale): string {
  return [locale.prefix, slugFor(id, locale)].filter(Boolean).join('/');
}

/** Absolute-from-root URL, e.g. "/jpg-to-word" or "/". */
export function urlFor(id: PageId, locale: Locale): string {
  return '/' + pathFor(id, locale);
}

/** The same page in every locale, for hreflang tags and the language picker. */
export function alternatesFor(id: PageId, locales: Locale[] = LOCALES.filter((l) => l.enabled)) {
  return locales.map((locale) => ({ locale, href: urlFor(id, locale) }));
}

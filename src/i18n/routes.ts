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

// ja and ko keep Latin slugs (romanised or English) so shared links are not percent-encoded.
const SLUGS: Record<PageId, Record<string, string>> = {
  'image-to-text': { en: '', es: '', pt: '', fr: '', de: '', it: '', ja: '', ko: '' },
  'jpg-to-word': { en: 'jpg-to-word', es: 'jpg-a-word', pt: 'jpg-para-word', fr: 'jpg-en-word', de: 'jpg-in-word', it: 'jpg-in-word', ja: 'jpg-word-henkan', ko: 'jpg-word-byeonhwan' },
  'jpg-to-excel': { en: 'jpg-to-excel', es: 'jpg-a-excel', pt: 'jpg-para-excel', fr: 'jpg-en-excel', de: 'jpg-in-excel', it: 'jpg-in-excel', ja: 'jpg-excel-henkan', ko: 'jpg-excel-byeonhwan' },
  'image-to-pdf': { en: 'image-to-pdf', es: 'imagen-a-pdf', pt: 'imagem-para-pdf', fr: 'image-en-pdf', de: 'bild-zu-pdf', it: 'immagine-in-pdf', ja: 'gazou-pdf-henkan', ko: 'image-pdf-byeonhwan' },
  'text-to-pdf': { en: 'text-to-pdf', es: 'texto-a-pdf', pt: 'texto-para-pdf', fr: 'texte-en-pdf', de: 'text-zu-pdf', it: 'testo-in-pdf', ja: 'text-pdf-henkan', ko: 'text-pdf-byeonhwan' },
  'pdf-to-text': { en: 'pdf-to-text', es: 'pdf-a-texto', pt: 'pdf-para-texto', fr: 'pdf-en-texte', de: 'pdf-zu-text', it: 'pdf-in-testo', ja: 'pdf-text-chushutsu', ko: 'pdf-text-chuchul' },
  'screenshot-to-text': { en: 'screenshot-to-text', es: 'captura-de-pantalla-a-texto', pt: 'print-para-texto', fr: 'capture-ecran-en-texte', de: 'screenshot-zu-text', it: 'screenshot-in-testo', ja: 'screenshot-mojiokoshi', ko: 'screenshot-text-chuchul' },
  'pdf-to-excel': { en: 'pdf-to-excel', es: 'pdf-a-excel', pt: 'pdf-para-excel', fr: 'pdf-en-excel', de: 'pdf-in-excel', it: 'pdf-in-excel', ja: 'pdf-excel-henkan', ko: 'pdf-excel-byeonhwan' },
  'word-to-text': { en: 'word-to-text', es: 'word-a-texto', pt: 'word-para-texto', fr: 'word-en-texte', de: 'word-zu-text', it: 'word-in-testo', ja: 'word-text-henkan', ko: 'word-text-byeonhwan' },
  'ppt-to-text': { en: 'ppt-to-text', es: 'ppt-a-texto', pt: 'ppt-para-texto', fr: 'ppt-en-texte', de: 'ppt-zu-text', it: 'ppt-in-testo', ja: 'ppt-text-chushutsu', ko: 'ppt-text-chuchul' },
  about: { en: 'about', es: 'acerca-de', pt: 'sobre', fr: 'a-propos', de: 'ueber-uns', it: 'chi-siamo', ja: 'about', ko: 'about' },
  contact: { en: 'contact', es: 'contacto', pt: 'contato', fr: 'contact', de: 'kontakt', it: 'contatti', ja: 'contact', ko: 'contact' },
  'privacy-policy': { en: 'privacy-policy', es: 'politica-de-privacidad', pt: 'politica-de-privacidade', fr: 'politique-de-confidentialite', de: 'datenschutz', it: 'privacy', ja: 'privacy-policy', ko: 'privacy-policy' },
  terms: { en: 'terms', es: 'terminos', pt: 'termos', fr: 'conditions-utilisation', de: 'nutzungsbedingungen', it: 'termini', ja: 'terms', ko: 'terms' },
};

/** Maps an English path such as "/jpg-to-word" to its page id, so content links can be localised. */
export const ID_BY_EN_PATH: Record<string, PageId> = Object.fromEntries(
  (Object.keys(SLUGS) as PageId[]).map((id) => ['/' + SLUGS[id].en, id]),
);

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

/** hreflang links (every enabled locale plus x-default) for the page at `path`, e.g. "/es/jpg-a-word". Used by the sitemap. */
export function hreflangLinksForPath(path: string, site: string): { url: string; lang: string }[] {
  const clean = '/' + path.replace(/^\/+|\/+$/g, '');
  const enabled = LOCALES.filter((l) => l.enabled);
  const id = (Object.keys(SLUGS) as PageId[]).find((p) => enabled.some((l) => urlFor(p, l) === clean));
  if (!id) return [];
  // Same form as the canonical URLs in SeoHead: root keeps its slash, other pages have none.
  const abs = (href: string) => (href === '/' ? new URL('/', site).href : new URL(href, site).href.replace(/\/$/, ''));
  const links = enabled.map((l) => ({ url: abs(urlFor(id, l)), lang: l.hreflang }));
  return [...links, { url: abs(urlFor(id, enabled[0])), lang: 'x-default' }];
}

/** The same page in every locale, for hreflang tags and the language picker. */
export function alternatesFor(id: PageId, locales: Locale[] = LOCALES.filter((l) => l.enabled)) {
  return locales.map((locale) => ({ locale, href: urlFor(id, locale) }));
}

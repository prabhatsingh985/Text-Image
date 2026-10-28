import type { LocaleContent } from './types';
import { getLocale } from '../i18n/locales';
import { ID_BY_EN_PATH, urlFor } from '../i18n/routes';
import { ui as enUi } from './en/ui';
import { tools as enTools } from './en/tools';
import { pages as enPages } from './en/pages';

// Every other locale is a folder with an index.ts (e.g. ./es/index.ts) whose default export is its LocaleContent.
const translated = import.meta.glob<{ default: LocaleContent }>('./*/index.ts', { eager: true });

const CONTENT: Record<string, LocaleContent> = {
  en: { ui: enUi, tools: enTools, pages: enPages },
  ...Object.fromEntries(Object.entries(translated).map(([path, mod]) => [path.split('/')[1], mod.default])),
};

// Content links are written with English paths ("/jpg-to-word"); point them at the same page in the reader's language.
function localizeLinks<T>(value: T, localeCode: string): T {
  const locale = getLocale(localeCode);
  const fix = (s: string) =>
    s.replace(/href="(\/[a-z0-9-]*)"/g, (m, path: string) => {
      const id = ID_BY_EN_PATH[path];
      return id ? `href="${urlFor(id, locale)}"` : m;
    });
  const walk = (v: unknown): unknown => {
    if (typeof v === 'string') return fix(v);
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    return v;
  };
  return walk(value) as T;
}

const cache = new Map<string, LocaleContent>();

export function contentFor(localeCode: string): LocaleContent {
  const code = CONTENT[localeCode] ? localeCode : 'en';
  if (!cache.has(code)) cache.set(code, code === 'en' ? CONTENT.en : localizeLinks(CONTENT[code], code));
  return cache.get(code)!;
}

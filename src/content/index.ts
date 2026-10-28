import type { LocaleContent } from './types';
import { ui as enUi } from './en/ui';
import { tools as enTools } from './en/tools';
import { pages as enPages } from './en/pages';

// One entry per translated locale. Phase 1b adds the other 15 (PLAN.md §13).
const CONTENT: Record<string, LocaleContent> = {
  en: { ui: enUi, tools: enTools, pages: enPages },
};

export function contentFor(localeCode: string): LocaleContent {
  return CONTENT[localeCode] ?? CONTENT.en;
}

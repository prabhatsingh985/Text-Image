import type { PageId, StaticId, ToolId } from '../i18n/routes';

export interface FaqItem {
  q: string;
  a: string;
}

export interface Section {
  h2: string;
  /** Paragraphs may contain inline HTML (links, <strong>). Content is ours, never user input. */
  paragraphs?: string[];
  list?: string[];
}

export interface ToolContent {
  /** <title>, ideally under 60 characters. */
  title: string;
  /** Meta description, ideally under 155 characters. */
  description: string;
  h1: string;
  lead: string;
  /** Short name used in navigation and related-tool cards. */
  navLabel: string;
  cardText: string;
  howTo: { title: string; steps: string[] };
  features: { title: string; items: { title: string; text: string }[] };
  sections: Section[];
  faq: FaqItem[];
}

export interface StaticContent {
  title: string;
  description: string;
  h1: string;
  updated?: string;
  sections: Section[];
}

export interface UiStrings {
  nav: { tools: string; allTools: string; menu: string; theme: string; language: string; privateBadge: string };
  footer: { tools: string; company: string; privacyNote: string; rights: string; madeIn: string };
  common: {
    howTo: string;
    features: string;
    faq: string;
    related: string;
    toolkit: string;
    heroEyebrow: string;
    privacyBadge: string;
    unlimitedBadge: string;
    noSignupBadge: string;
  };
  tool: Record<string, string>;
}

export interface LocaleContent {
  ui: UiStrings;
  tools: Record<ToolId, ToolContent>;
  pages: Record<StaticId, StaticContent>;
}

export type { PageId };

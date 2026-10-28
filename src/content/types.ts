import type { PageId, StaticId, ToolId } from '../i18n/routes';
import type { ToolGroup, ToolTag } from '../config/tool-meta';

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
  nav: { tools: string; allTools: string; menu: string; theme: string; language: string };
  /** Menu group headings, keyed by ToolGroup. */
  groups: Record<ToolGroup, string>;
  /** Small badges next to tool names, keyed by ToolTag. */
  tags: Record<ToolTag, string>;
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
    skipToContent: string;
    lastUpdated: string;
    /** Site tagline, used as share-image alt text on non-tool pages. */
    tagline: string;
  };
  tool: Record<string, string>;
}

export interface LocaleContent {
  ui: UiStrings;
  tools: Record<ToolId, ToolContent>;
  pages: Record<StaticId, StaticContent>;
}

export type { PageId };

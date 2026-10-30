import type { ToolId } from '../i18n/routes';

// Presentation data for each tool: which menu group it sits in and its icon.
// Icons are inner SVG markup for a 24×24, stroke-based icon (see ToolIcon.astro).

// Group headings and tag labels are translated in each locale's ui.ts (ui.groups, ui.tags).
export type ToolGroup = 'image' | 'pdf' | 'office' | 'compress';
export type ToolTag = 'popular' | 'new';

export const TOOL_GROUPS: { id: ToolGroup }[] = [{ id: 'image' }, { id: 'pdf' }, { id: 'compress' }, { id: 'office' }];

// A frame with arrows pointing out: change the width and height.
const RESIZE_ICON = '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M14 6h4v4M18 6l-5 5M10 18H6v-4M6 18l5-5"/>';
// A file with an arrow pointing down: shrink to a size.
const COMPRESS_ICON = '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M12 10v3.5M10.25 11.75 12 13.5l1.75-1.75M9 17h6"/>';

// `compact` pages (one size of a tool) show in the header menu as a short row without a description,
// so the menu stays a sensible height.
export const TOOL_META: Record<ToolId, { group: ToolGroup; icon: string; tag?: ToolTag; compact?: true }> = {
  'image-to-text': {
    group: 'image',
    icon: '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M8 9h8M8 12h8M8 15h5"/>',
    tag: 'popular',
  },
  'screenshot-to-text': {
    group: 'image',
    icon: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 9h6M7 12h9"/>',
  },
  'jpg-to-word': {
    group: 'image',
    icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="m8.5 12 1.2 5 1.8-4 1.8 4 1.2-5"/>',
  },
  'jpg-to-excel': {
    group: 'image',
    icon: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9.5h16M4 15h16M10 4v16"/>',
  },
  'pdf-to-text': {
    group: 'pdf',
    icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 16.5h4"/>',
  },
  'pdf-to-excel': {
    group: 'pdf',
    icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 12h7v5.5h-7zM8.5 14.75h7M12 12v5.5"/>',
    tag: 'new',
  },
  'image-to-pdf': {
    group: 'pdf',
    icon: '<rect x="4" y="3" width="13" height="16" rx="2"/><path d="M8 21h10a2 2 0 0 0 2-2V8"/><path d="m7 14 2.5-3 2 2.5 1.5-1.5 1.5 2"/>',
  },
  'text-to-pdf': {
    group: 'pdf',
    icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 12h6M12 12v6"/>',
  },
  'image-compressor': { group: 'compress', icon: COMPRESS_ICON, tag: 'new' },
  'image-compressor-to-20kb': { group: 'compress', icon: COMPRESS_ICON, compact: true },
  'image-compressor-to-50kb': { group: 'compress', icon: COMPRESS_ICON, compact: true },
  'image-compressor-to-100kb': { group: 'compress', icon: COMPRESS_ICON, compact: true },
  'image-compressor-to-200kb': { group: 'compress', icon: COMPRESS_ICON, compact: true },
  'resize-image': { group: 'compress', icon: RESIZE_ICON, tag: 'new' },
  'resize-image-to-20kb': { group: 'compress', icon: RESIZE_ICON, compact: true },
  'resize-image-to-50kb': { group: 'compress', icon: RESIZE_ICON, compact: true },
  'resize-image-to-100kb': { group: 'compress', icon: RESIZE_ICON, compact: true },
  'word-to-text': {
    group: 'office',
    icon: '<rect x="3" y="5" width="11" height="14" rx="2"/><path d="m5.5 9 1 6 1.5-4 1.5 4 1-6"/><path d="M17 8h4M17 12h4M17 16h3"/>',
    tag: 'new',
  },
  'ppt-to-text': {
    group: 'office',
    icon: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/><path d="M7 8h5M7 11h8"/>',
    tag: 'new',
  },
};

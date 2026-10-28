// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE } from './src/config/site.ts';
import { hreflangLinksForPath } from './src/i18n/routes.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // Slugs differ per language, so hreflang alternates come from the route table rather than the URL prefix.
      serialize(item) {
        const links = hreflangLinksForPath(new URL(item.url).pathname, SITE.url);
        return links.length ? { ...item, links } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle the lazily imported libraries so the dev server never re-optimizes mid-session.
    optimizeDeps: {
      include: ['tesseract.js', 'pdfjs-dist', 'pdf-lib', '@pdf-lib/fontkit', 'docx', 'jszip', 'xlsx'],
      exclude: ['heic2any'],
    },
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE } from './src/config/site.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle the lazily imported libraries so the dev server never re-optimizes mid-session.
    optimizeDeps: {
      include: ['tesseract.js', 'pdfjs-dist', 'pdf-lib', 'docx', 'jszip', 'xlsx'],
      exclude: ['heic2any'],
    },
  },
});

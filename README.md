# Image to Text (working name: OCRSnap)

Free, unlimited image-to-text tools that run entirely in the browser. The full plan, research and
roadmap are in [PLAN.md](PLAN.md).

## Stack

- [Astro 7](https://astro.build) (static output) + [Tailwind CSS 4](https://tailwindcss.com)
- [Tesseract.js](https://github.com/naptha/tesseract.js) for OCR in the browser
- pdf.js, pdf-lib, docx, SheetJS, JSZip, heic2any — each loaded only when a feature needs it
- Hosted as static files on Cloudflare (Workers static assets)

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type-check Astro and TypeScript files |
| `npm run deploy` | Build and deploy to Cloudflare (needs `wrangler login`) |
| `npm run bench` | Score OCR accuracy (see `bench/README.md`) |

## Where things live

| Path | Contents |
|---|---|
| `src/config/site.ts` | Site name, domain, contact email, ad switch — **placeholders until the domain is registered** |
| `src/i18n/locales.ts` | The 16 locales; only `enabled` ones are built |
| `src/i18n/routes.ts` | Page ids and the slug for each locale |
| `src/content/<locale>/` | All page text and UI strings for one locale |
| `src/pages/[...slug].astro` | Builds every tool and static page for every enabled locale |
| `src/components/tools/` | The tool UIs |
| `src/scripts/` | Browser code that drives the tools |
| `src/lib/ocr/` | OCR engine (worker pool) and language list |
| `src/lib/layout/` | Rebuilding paragraphs, headings, lists and tables from OCR boxes |
| `src/lib/export/` | TXT, ZIP, DOCX, XLSX/CSV and PDF output |
| `bench/` | Accuracy benchmark |

## Adding a locale (Phase 1b)

1. Verify the keyword for each page in that country (PLAN.md §5.2).
2. Add the slugs to `src/i18n/routes.ts`.
3. Copy `src/content/en/` to `src/content/<code>/`, translate, and register it in `src/content/index.ts`.
4. Set `enabled: true` for the locale in `src/i18n/locales.ts`.

## Before launch

- Register the domain and update `src/config/site.ts` (name, url, contactEmail).
- Run the benchmark and pass the quality gate.
- Submit `sitemap-index.xml` to Google Search Console and Bing Webmaster Tools.

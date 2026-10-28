# Image to Text — Project Plan

**Owner:** Prabhat Singh
**Prepared:** 28 Oct 2026
**Status:** Planning. No code written yet.
**What this is:** The full plan for the next website after [profontfinder.com](https://profontfinder.com): a free, browser-based image-to-text (OCR) tool in 16 languages. It covers why we are building it, what the research showed, what goes in and what stays out, how each part will be built, and the order of work.

---

## Contents

1. [Why this project](#1-why-this-project)
2. [Market research](#2-market-research)
3. [Decisions log](#3-decisions-log)
4. [Positioning](#4-positioning)
5. [Pages](#5-pages)
6. [Features](#6-features)
7. [Technical architecture](#7-technical-architecture)
8. [How each tool works inside](#8-how-each-tool-works-inside)
9. [SEO implementation](#9-seo-implementation)
10. [Performance budget](#10-performance-budget)
11. [Quality gate and benchmark](#11-quality-gate-and-benchmark)
12. [Monetization](#12-monetization)
13. [Roadmap with checklists](#13-roadmap-with-checklists)
14. [Launch and distribution](#14-launch-and-distribution)
15. [What we will measure](#15-what-we-will-measure)
16. [Risks and how we handle them](#16-risks-and-how-we-handle-them)
17. [Domain name](#17-domain-name)
18. [Open questions](#18-open-questions)
19. [Sources](#19-sources)

---

## 1. Why this project

### The thesis that made profontfinder work

profontfinder did not win because of the word "font". It won because of this pattern:

1. The user arrives **with a file in hand** (an image) and wants **one answer right now**.
2. The top Google results are **weak**: paywalled, signup-walled, slow, ad-heavy, or blog posts instead of tools.
3. The job **can run entirely in the browser**, so traffic costs us nothing to serve.
4. There is room for **many landing pages** from one engine (tools × languages).

Image to text fits all four.

### Ideas we looked at and dropped

| Idea | Why we dropped it |
|---|---|
| US home-improvement calculators | Strong idea for US AdSense money, but US-only. The goal now is a site that serves every country, like profontfinder. |
| Passport / visa photo maker | PhotoAiD and passport-photo.online already have pages for every country and locale. |
| Per-language OCR pages ("Arabic OCR", "Urdu OCR", "Tamil OCR") | Real but small demand, partly developers searching for datasets and models. Not worth it. See decision D2. |
| QR code generator | Dozens of decent free tools already. |
| Background remover, PDF suites | remove.bg and iLovePDF own these. |
| Non-Latin font finder (Japanese, Arabic, etc.) | Good gap, but it belongs inside profontfinder, not in a new site. Kept as a separate future task for that repo. |

---

## 2. Market research

### 2.1 The market is big and proven

| Site | Traffic (estimate) | Source |
|---|---|---|
| imagetotext.info (leader) | ~9M visits/month (Semrush, Oct 2025); ~1.9M organic search visits (Ahrefs, Oct 2026) | Semrush, Ahrefs |
| prepostseo.com | ~2.4M visits/month | Semrush, Oct 2025 |
| imagetotext.io | ~1.6M visits/month | Semrush, Oct 2025 |
| onlineocr.net | ~1.6M visits/month | Semrush, Oct 2025 |
| imagetotext.online | 26.8K organic visits, traffic value $821 | Ahrefs (screenshot shared by Prabhat) |

These are third-party estimates. They disagree with each other, but every source says the same thing: the demand is real and large.

### 2.2 Where the leader's traffic comes from (imagetotext.info, Ahrefs)

**By country:**

| Country | Share |
|---|---|
| India | 26% |
| United States | 6% |
| Indonesia | 6% |
| Philippines | 6% |
| Bangladesh | 5% |

An earlier Ahrefs snapshot also showed Brazil at ~14%. Brazil and Indonesia traffic comes through the translated `/br` and `/id` pages, which is the proof that native-language pages pull real traffic.

**By page (India):**

| Page | Traffic | Share |
|---|---|---|
| `/` (homepage, image to text) | 278.3K | 62% |
| `/jpg-to-excel` | 50.8K | 11% |
| `/jpg-to-word` | 46.7K | 10% |
| `/text-to-pdf` | 15.7K | 4% |
| `/image-to-pdf` | 11.4K | 3% |

**Takeaway:** the homepage is most of the business. Excel, Word and the two PDF tools are the rest.

### 2.3 Keyword volumes (India, Ahrefs)

| Keyword | Volume/month | Notes |
|---|---|---|
| image to text | 206K | Leader is #1 |
| jpg to word | 144K | Leader is only #4; imagetotext.online is #5 |
| image to word converter | 55K | KD: Easy |
| image to excel | 49K | Leader is #1 |
| jpg to word converter | 45K | |
| image to word | 42K | KD: Easy |
| extract text from image | 21K | |
| photo to text | 18K | |
| image to text converter online | 8.9K | |
| convert image to word | >10K | KD: Easy |
| image to word converter free | >1K | KD: Easy |
| image to word converter online | >1K | KD: Medium |

**The most important finding:** the **Word cluster** (jpg to word + image to word + converters) adds up to **~286K/month in India alone**, which is **more than "image to text" (206K)**. Ahrefs rates the "image to word" keywords **Easy**, and the leader ranks only #4 for "jpg to word". imagetotext.online, a young site with ~31 pages, already ranks **#5 for "jpg to word"** and #5–7 for the other Word keywords. So the Word page gets the same effort as the homepage.

### 2.4 Native-language demand (Google autocomplete)

Autocomplete shows many variants for the main tool in each language, which means real search volume:

- **German:** bild zu text → umwandeln, kostenlos, online, ki
- **Spanish:** imagen a texto → gratis, online, word, editable
- **Japanese:** 画像 文字起こし → 無料, ブラウザ, iphone, windows
- **Korean:** 이미지 텍스트 추출 → 사이트, 프로그램
- **Arabic:** استخراج النص من الصورة

Two things the autocomplete check also showed:

- **Hindi users search in English or Hinglish** ("image to text hindi"), not in Devanagari. A Devanagari query ("छवि से") returns nothing related to OCR. So a Hindi UI locale would not pull its weight.
- The top suggestion for "hindi image to" is "hindi image to **english translation**". Image translation is a real demand worth revisiting later (needs a translation API, so it costs money).

### 2.5 Competitor teardown

| | jpgtotext.com | imagetotext.online | imagetotext.info (leader) |
|---|---|---|---|
| Pages in sitemap | 138 | 31 | not checked |
| UI languages | 20 | English only | 23 |
| Where OCR runs | Server | Server | Server |
| Free limits | 5 images, 7 MB, reCAPTCHA | 10 pages/day, 3 MB, 5 files | Batch is upsold |
| Formatted OCR (tables, headings) | Premium only | Costs 5× tokens | Offered |
| Ads | Heavy (Snigel, Amazon, Criteo) | None | Very heavy (15+ ad networks) |
| Page load (measured) | ~8.0 s, 109 requests | ~3.3 s, 25 requests | ~2.4 s, 153 requests |
| Hindi / Bengali / Urdu UI | No | No | No |
| Per-OCR-language pages | No | No | No |
| Tech | Unknown | Next.js | Unknown |

**Honest note on UI:** none of the three is truly ugly. imagetotext.online is clean and modern. jpgtotext.com looks fine but is slow and ad-heavy. We cannot win on looks alone. We win on the things below.

**jpgtotext.com SEO mistakes we will not repeat:**

- The Czech page uses a Danish slug: `/cs/billede-til-tekst`.
- Many locales keep English slugs: `/ja/image-to-text`, `/th/image-to-text`, `/vi/image-to-text`.
- Most of its 138 pages are image converters (JPG→PNG etc.), which spreads the site's topic thin.
- Only about 7 generic blog articles.
- Sitemap `<loc>` values start with a space.

**Observation (not confirmed):** jpgtotext.com and imagetotext.info share almost the same template, wording, ad network and locale list. They may belong to the same network.

### 2.6 The gaps we will use

1. **Server cost forces them to limit users.** Every OCR request costs them money, so they cap images, add captchas and push premium. Our OCR runs in the visitor's browser, so we can offer **unlimited** use. Their business model stops them from copying this.
2. **Speed.** The leader loads 153 requests. A static Astro site with few ad slots will be much lighter, which helps Core Web Vitals and mobile users.
3. **Formatted output is paywalled.** We give basic formatting free.
4. **Privacy.** "Your file never leaves your device" will be literally true for us.
5. **Locale quality.** Native keywords in URLs, titles and content, done properly in every language.

---

## 3. Decisions log

| # | Decision | Why |
|---|---|---|
| D1 | Separate project and new domain, not inside the Font Finder repo | Different topic. Same stack. |
| D2 | **No per-language OCR pages** (Arabic OCR, Urdu OCR, Tamil OCR, etc.) | Small demand. Prabhat rejected them after reviewing keyword data. |
| D3 | **16 languages:** English + pt-BR, id, es, de, fr, ja, ko, ar, tr, vi, ru, it, th, pl, nl | The leader's non-English traffic comes from locales like these. |
| D4 | No Hindi or other South Asian UI locales | Indian users search in English. English pages cover India, the Philippines and Bangladesh. |
| D5 | **Arabic stays** (`ar`), with a right-to-left layout from day one | Good autocomplete demand; Gulf ad rates are decent. Adding RTL later is harder than building it in. |
| D6 | **One page for JPG to Word and Image to Word** | Same intent. Two pages would compete with each other. |
| D7 | No separate "photo to text" or "extract text from image" pages | The homepage covers them, as it does for the leader. |
| D8 | OCR runs in the browser. No server OCR in v1 | Zero running cost, unlimited use, real privacy. |
| D9 | No accounts, login, pricing or premium in v1 | "Unlimited and free" is the marketing. |
| D10 | English launches first, the 15 locales right after | Fix bugs once, not 16 times, and start indexing early. |

---

## 4. Positioning

**One line:**

> Unlimited. Free. No signup. No captcha. No daily limit. Your files never leave your device.

**Who it is for:** students copying notes from photos, office workers turning scans into Word or Excel, anyone grabbing text from a screenshot.

**What the user should feel:** "I dropped my image and had the text in seconds, and nobody asked me for anything."

---

## 5. Pages

### 5.1 Tool pages: 6 tools × 16 languages = 96 pages

| # | English URL | Page | Main keywords | Priority |
|---|---|---|---|---|
| 1 | `/` | **Image to Text** | image to text, image to text converter, extract text from image, photo to text, picture to text, image to text converter online | Highest |
| 2 | `/jpg-to-word` | **JPG / Image to Word** | jpg to word, image to word converter, jpg to word converter, image to word, convert image to word, jpeg to word | Highest |
| 3 | `/jpg-to-excel` | **Image / JPG to Excel** | image to excel, jpg to excel | High |
| 4 | `/image-to-pdf` | **Image / JPG to PDF** | image to pdf, jpg to pdf | Medium |
| 5 | `/text-to-pdf` | **Text to PDF** | text to pdf | Medium |
| 6 | `/pdf-to-text` | **PDF to Text** | pdf to text, scanned pdf to text | Medium |

Suggested title for page 2: *"JPG to Word Converter – Convert Image to Word Online Free"*.

### 5.2 Locales and native slugs

English lives at the root (`/`). Every other language lives under its own folder. Slugs use the native keyword.

| Locale | Homepage target (draft) | Homepage URL | JPG to Word URL (draft) |
|---|---|---|---|
| English | image to text | `/` | `/jpg-to-word` |
| pt-BR | imagem para texto | `/pt-br/` | `/pt-br/jpg-para-word` |
| id | gambar ke teks | `/id/` | `/id/jpg-ke-word` |
| es | imagen a texto | `/es/` | `/es/jpg-a-word` |
| de | Bild zu Text | `/de/` | `/de/jpg-in-word` |
| fr | image en texte | `/fr/` | `/fr/jpg-en-word` |
| ja | 画像 文字起こし | `/ja/` | `/ja/jpg-word-henkan` |
| ko | 이미지 텍스트 추출 | `/ko/` | `/ko/jpg-word-byeonhwan` |
| ar | استخراج النص من الصورة | `/ar/` | `/ar/jpg-to-word` |
| tr | resmi yazıya çevirme | `/tr/` | `/tr/jpg-word-cevirme` |
| vi | chuyển ảnh thành văn bản | `/vi/` | `/vi/chuyen-jpg-sang-word` |
| ru | текст с картинки | `/ru/` | `/ru/jpg-v-word` |
| it | immagine in testo | `/it/` | `/it/jpg-in-word` |
| th | แปลงรูปเป็นข้อความ | `/th/` | `/th/jpg-to-word` |
| pl | obraz na tekst | `/pl/` | `/pl/jpg-na-word` |
| nl | afbeelding naar tekst | `/nl/` | `/nl/jpg-naar-word` |

**Every keyword and slug in this table is a draft.** Before writing each locale, verify the top keyword with Ahrefs or Google Keyword Planner for that country. One wrong word can make a whole page useless. For ja, ko, ar, th and ru, keep slugs in Latin letters (romanized or English) because non-Latin URLs get percent-encoded and look broken when shared; the native keyword goes in the title, H1 and content.

### 5.3 Supporting pages

| Page | Languages | Why |
|---|---|---|
| About | All 16 | Trust, AdSense review |
| Contact | All 16 | AdSense review |
| Privacy Policy | All 16 | Required by AdSense; explains that files stay on the device |
| Terms | All 16 | Standard |
| Guides (blog) | English first | AdSense approval, backlinks, internal links |

**First guides (English):**

1. How to copy text from an image on iPhone
2. How to copy text from an image on Android
3. How to copy text from an image on Windows and Mac
4. How to convert a scanned document to Word
5. How to extract a table from an image to Excel
6. How to convert a screenshot to text
7. Google Lens vs an online OCR tool: which to use when
8. How to take a photo that OCR reads accurately
9. JPG vs PNG vs PDF: which format gives the best OCR
10. How to convert multiple images to one PDF

**Total at the end of Phase 2:** ~96 tool pages + ~64 supporting pages + ~10–15 guides ≈ **170+ pages**.

### 5.4 Layout of every tool page

```
┌───────────────────────────────────┐
│ H1 + one-line description          │
│ ┌───────────────────────────────┐ │
│ │ TOOL (above the fold)          │ │  ← no ad above the tool, ever
│ └───────────────────────────────┘ │
│ Result area                        │
│ [Ad slot, fixed height]            │  ← best slot: users wait here
│ How to use (3 steps)               │
│ Features                           │
│ FAQ                                │
│ Related tools (internal links)     │
│ [Ad slot, fixed height]            │
└───────────────────────────────────┘
```

### 5.5 Content rules

- 800–1,200 words of real, page-specific content under each tool.
- Native-quality writing in each language. Machine translation is a first draft only and must be reviewed.
- No two pages may be the same template with a word swapped. Google's "scaled content abuse" policy targets exactly that.
- Each page has its own sample image, its own FAQ and its own tips.

---

## 6. Features

### 6.1 Input

| Feature | Phase | Notes |
|---|---|---|
| Drag and drop, click to upload | 1 | |
| **Paste with Ctrl+V / Cmd+V** | 1 | Screenshots go straight in |
| **Camera capture on mobile** | 1 | `<input type="file" accept="image/*" capture="environment">` |
| **Unlimited batch** (50–100+ images) | 1 | Queue processed by a worker pool |
| JPG, JPEG, PNG, WEBP, BMP, GIF, TIFF | 1 | |
| **HEIC (iPhone photos)** | 1 | Decoder loads only when a HEIC file arrives |
| PDF | 1 | For PDF to Text |
| Large files (~50 MB, device-dependent) | 1 | Huge images are scaled down before OCR |
| Import from image URL | 2 | Most sites block cross-origin reads, so this needs a small Cloudflare Worker proxy with size and rate limits |

### 6.2 Processing

| Feature | Phase |
|---|---|
| OCR in the browser; nothing uploaded | 1 |
| Language picked from the page locale (`/de/` → German + English); user can change it or pick several | 1 |
| Auto-rotate (EXIF + 90/180/270 detection) | 1 |
| Deskew (small tilts) | 1 |
| Crop to a region before OCR | 1 |
| Auto-enhance (grayscale, contrast, upscale small text) | 1 |
| Per-file progress bar | 1 |
| Work happens in background workers, so the page never freezes | 1 |

### 6.3 Output

| Feature | Phase | Notes |
|---|---|---|
| Editable result box | 1 | |
| Copy (per file and all files) | 1 | |
| Download TXT, DOCX, PDF | 1 | |
| **Download all as ZIP** | 1 | For batches |
| **Click-to-copy text overlay** | 1 | Boxes drawn over the image; click a line to copy it. None of the three competitors has this. |
| **Highlight uncertain words** | 1 | Words with low OCR confidence get a dotted underline so the user knows what to check |
| Toggle: keep or join line breaks | 1 | Joins broken lines and fixes hyphenation |
| Toggle: remove extra spaces | 1 | |
| Word and character count | 1 | |
| Listen (read the text aloud) | 2 | Uses the browser's built-in voices |
| Search inside the result | 2 | |

### 6.4 JPG / Image to Word (top priority page)

- Keeps paragraphs, headings and line spacing in the DOCX.
- Several images → one Word file, one page per image.
- Simple tables become real Word tables.
- Arabic text is written as right-to-left paragraphs.
- Preview before download.

### 6.5 Image / JPG to Excel

- Detects table rows and columns and exports XLSX or CSV.
- Editable grid preview before download (fix any cell first).
- Numbers are saved as numbers, not text, using the locale's number format.
- **Honest limit:** clean printed tables will work well. Skewed photos of messy tables will have mistakes. Competitors run this on servers as a paid feature.

### 6.6 PDF tools

| Tool | What it does |
|---|---|
| **Image to PDF** | Many images → one PDF. Drag to reorder pages. A4 / Letter / fit-to-image. Portrait or landscape. Margins. Optional compression. |
| **Text to PDF** | Paste or type text → PDF. Font size, margins, page size. Fonts embedded for every supported language. |
| **PDF to Text** | Digital PDFs: text extracted instantly, no OCR. Scanned PDFs: each page is OCR'd. Choose a page range. |

### 6.7 Privacy, offline and extras

| Feature | Phase |
|---|---|
| Works offline after the first visit (PWA) | 2 |
| Android "Share → our site" goes straight to OCR (PWA share target) | 2 |
| History of recent results, stored only on the device, with a Clear button | 2 |
| Dark mode | 1 |
| Keyboard and screen-reader friendly | 1 |

### 6.8 Not in v1

- Login, accounts, pricing, premium
- Server-side OCR
- Handwriting recognition (browser OCR is weak at it)
- Image translator
- Per-language OCR pages (decision D2)
- Hindi, Bengali or other South Asian UI locales (decision D4)
- Browser extension (Phase 3)

---

## 7. Technical architecture

### 7.1 Stack

| Part | Choice | Why |
|---|---|---|
| Framework | **Astro** (static output) | Same as profontfinder; fast static pages |
| Styling | **Tailwind CSS** | Same as profontfinder; logical properties help RTL |
| Hosting | **Cloudflare** (Workers static assets) | Free, fast, already used for profontfinder |
| OCR, main engine | **Tesseract.js** | 100+ languages; already proven in profontfinder |
| OCR, second engine | **PaddleOCR** models via **onnxruntime-web** | Better on Japanese, Korean and phone photos. Added if the benchmark says Tesseract is not good enough there |
| HEIC decoding | heic2any (libheif in WebAssembly) | iPhone photos; loaded only when needed |
| PDF reading | pdf.js | Text layer extraction and page rendering |
| PDF writing | pdf-lib (+ fontkit for custom fonts) | Image to PDF, Text to PDF, searchable PDF |
| Word | docx | DOCX generation in the browser |
| Excel | SheetJS | XLSX and CSV generation |
| ZIP | JSZip | Batch downloads |
| Analytics | Google Search Console, Bing Webmaster Tools, Cloudflare Web Analytics | Cookieless, no file data ever sent |

### 7.2 Folder structure

```
image-to-text/
├── astro.config.mjs
├── tailwind.config.mjs
├── wrangler.jsonc
├── PLAN.md                      ← this document
├── bench/                       ← benchmark images, ground truth, scoring script
├── public/
│   ├── tessdata/                ← Tesseract language files (gzipped), one per language
│   ├── models/paddle/           ← PaddleOCR ONNX models (if used)
│   ├── fonts/                   ← Noto fonts for Text to PDF
│   ├── manifest.webmanifest
│   └── sw.js                    ← service worker (Phase 2)
└── src/
    ├── i18n/
    │   ├── locales/{en,pt-br,id,es,de,fr,ja,ko,ar,tr,vi,ru,it,th,pl,nl}.ts
    │   ├── routes.ts            ← tool id → slug for every locale
    │   └── utils.ts
    ├── pages/
    │   ├── index.astro          ← English homepage
    │   ├── [tool].astro         ← English tool pages
    │   └── [locale]/
    │       ├── index.astro
    │       └── [tool].astro
    ├── components/
    │   ├── SeoHead.astro        ← title, meta, canonical, hreflang, JSON-LD
    │   ├── LanguagePicker.astro
    │   ├── AdSlot.astro         ← fixed-height ad container
    │   └── tools/
    │       ├── Dropzone.astro
    │       ├── ResultPanel.astro
    │       ├── TextOverlay.astro
    │       ├── TableGrid.astro
    │       └── PageSorter.astro
    ├── lib/
    │   ├── input/               ← paste, camera, heic, pdf rendering, resizing
    │   ├── preprocess/          ← orientation, deskew, enhance
    │   ├── ocr/
    │   │   ├── engine.ts        ← common interface
    │   │   ├── tesseract.ts
    │   │   ├── paddle.ts
    │   │   ├── langmap.ts       ← locale → OCR languages
    │   │   └── scheduler.ts     ← worker pool and queue
    │   ├── layout/
    │   │   ├── paragraphs.ts    ← lines → paragraphs, headings, lists
    │   │   └── tables.ts        ← table detection
    │   └── export/
    │       ├── txt.ts
    │       ├── docx.ts
    │       ├── xlsx.ts
    │       ├── pdf.ts
    │       └── zip.ts
    └── content/guides/          ← English guides (Markdown)
```

### 7.3 One OCR interface, two engines

```ts
interface OcrEngine {
  load(langs: string[]): Promise<void>;
  recognize(image: ImageBitmap | HTMLCanvasElement): Promise<OcrResult>;
}

interface OcrResult {
  text: string;
  blocks: Block[];      // block → paragraph → line → word
  confidence: number;   // 0–100
}
// Every word carries its text, bounding box and confidence,
// which the overlay, the uncertain-word highlight, Word export
// and table detection all reuse.
```

**Engine choice:**

| Language | Default engine |
|---|---|
| Latin-script languages (en, pt, id, es, de, fr, tr, vi, it, pl, nl), ru, th, ar | Tesseract |
| ja, ko (and Chinese text in images) | PaddleOCR if it beats Tesseract in the benchmark, otherwise Tesseract |

**Default OCR languages per locale:** the locale's language plus English (for example `deu+eng` on `/de/`). Loading more languages at once slows OCR, so extra languages are opt-in.

### 7.4 Loading strategy

- The page itself ships no OCR code. First paint stays fast.
- After the page finishes loading and the browser is idle, the OCR engine starts downloading in the background.
- Language files download only for the languages in use, and are cached by the browser (and by the service worker in Phase 2).
- HEIC, PDF, DOCX, XLSX and ZIP libraries load only when their feature is used.
- Cloudflare limits each static file to 25 MiB. Every language file and model is well under that.

### 7.5 Worker pool

- Number of workers = `min(navigator.hardwareConcurrency - 1, 4)`, and at most 2 on phones to avoid running out of memory.
- Files go into a queue; each worker takes the next one.
- Each file reports progress. One failed file never stops the batch.

---

## 8. How each tool works inside

### 8.1 Image to Text pipeline

```
File / paste / camera
   ↓
Decode (HEIC → JPEG if needed; PDF → page images)
   ↓
Fix orientation (EXIF via createImageBitmap, then 90/180/270 detection)
   ↓
Resize (cap the long side at ~3000 px; upscale 2× if text is tiny)
   ↓
Enhance (grayscale, contrast; binarize only for poor photos)
   ↓
Deskew (estimate the tilt with a projection profile within ±15°, rotate back)
   ↓
OCR in a worker  →  words with boxes and confidence
   ↓
Post-process (join lines if chosen, fix hyphenation, trim spaces)
   ↓
Show: result text + overlay + uncertain words
```

### 8.2 Click-to-copy overlay

- Draw each OCR line's bounding box over the image, scaled to the displayed size.
- Hover highlights a line; click copies it; Shift+click selects several lines.
- On phones, tapping a line copies it and shows a short "Copied" toast.

### 8.3 Rebuilding a Word document

From the OCR blocks, paragraphs, lines and words:

1. **Paragraphs:** each OCR paragraph becomes a DOCX paragraph. Lines inside it are joined.
2. **Headings:** a line whose height is ≥ 1.3× the page's median line height becomes a heading.
3. **Alignment:** a line centred within the text area is centred in Word.
4. **Lists:** lines that start with •, -, *, or 1. / a) become list items.
5. **Tables:** if the table detector finds one (8.4), it becomes a Word table.
6. **Several images:** each image starts on a new page.
7. **Arabic:** paragraphs are marked right-to-left. Word handles letter shaping itself.

Bold and italic detection is not reliable, so it is out of scope for v1.

### 8.4 Detecting tables for Excel

Two methods, tried in order:

**A. Ruled tables (visible lines)**
1. Binarize the image.
2. Find long horizontal and vertical runs of dark pixels; these are the grid lines.
3. Grid line crossings give the cells.
4. Each OCR word goes into the cell that contains its centre.

**B. Tables without lines**
1. Group words into rows where their vertical ranges overlap.
2. Find vertical gaps that stay empty across most rows; these are column boundaries.
3. Assign each word to a row and column.

**Then:**
- Show the result in an editable grid.
- Convert cells that look like numbers into numbers using the locale's decimal and thousands separators.
- Export with SheetJS to XLSX or CSV.

### 8.5 PDF to Text

1. Open the PDF with pdf.js.
2. For each page, read the text layer.
3. If the page has real text, use it. This is instant.
4. If not (a scanned page), render it at ~2× scale and send it through the OCR pipeline.
5. Let the user choose a page range for long PDFs.

### 8.6 Image to PDF

1. Convert every image to JPEG or PNG (WEBP and HEIC go through a canvas first).
2. Let the user drag to reorder.
3. Create pages with pdf-lib in the chosen size and orientation, with margins.
4. Optional "smaller file" mode re-encodes images at lower quality.

### 8.7 Text to PDF, and the right-to-left / Thai problem

pdf-lib embeds fonts but **does not shape complex scripts**. Arabic letters must join and change form, and Thai has stacked marks, so text written directly with pdf-lib would come out broken in those languages.

**Plan:**
- **Latin, Cyrillic, Japanese, Korean:** write real text with embedded Noto fonts (subset to reduce size).
- **Arabic and Thai:** lay out the text with the browser (which shapes it correctly), draw it onto a canvas, place that image on the PDF page, and add an invisible text layer on top so the PDF stays searchable and copyable.

### 8.8 HEIC

- Detect by MIME type or by the `ftypheic` / `ftypheix` / `ftypmif1` signature in the file header.
- Load heic2any on first use and convert to JPEG.

### 8.9 PWA and share target (Phase 2)

- `manifest.webmanifest` with a `share_target` that accepts images by POST.
- The service worker catches the shared file, stores it, and opens the tool with the file already loaded.
- The app shell and downloaded language files are cached, so the tool works offline.

---

## 9. SEO implementation

### 9.1 On every page

- Unique `<title>` and meta description per page and per language, built around that page's main keyword.
- One H1 with the main keyword.
- Self-referencing canonical URL.
- `hreflang` tags for all 16 versions of the page, plus `x-default` → English.
- `og:` and Twitter tags with a per-language share image.
- JSON-LD: `SoftwareApplication` (category Utilities, price 0) and `BreadcrumbList`. `FAQPage` markup can be added too, but Google has shown FAQ rich results only for a few authoritative government and health sites since 2023, so it will probably not show as a rich result.

### 9.2 Site-wide

- Sitemap index with one sitemap per language (no stray spaces in URLs).
- `robots.txt` pointing to the sitemap.
- Language picker that links to the **same page** in the other language, not to the other language's homepage.
- Clean internal links: every tool page links to the other five tools; guides link to the relevant tools.
- Search Console and Bing Webmaster Tools set up on launch day.

### 9.3 Right-to-left (Arabic)

- `<html lang="ar" dir="rtl">` on Arabic pages.
- Tailwind logical utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) instead of left/right everywhere, so the layout flips automatically.
- Icons that point a direction (arrows) flip in RTL.
- The OCR result box uses `dir="auto"` so mixed Arabic and English text displays correctly.

---

## 10. Performance budget

| Metric | Target |
|---|---|
| Largest Contentful Paint (mobile, 4G) | < 2.0 s |
| Cumulative Layout Shift | < 0.05 (every ad slot has a fixed height) |
| Interaction to Next Paint | < 200 ms (all heavy work in workers) |
| JavaScript on first load | < 100 KB before the OCR engine |
| Network requests on first load | < 30 |
| Time to text, one clear screenshot, desktop | < 3 s after the engine is ready |

For comparison: the leader makes 153 requests on load, and jpgtotext.com took ~8 s to finish loading in our test.

---

## 11. Quality gate and benchmark

Accuracy decides whether people come back. A beautiful tool that returns wrong text loses.

### 11.1 Test set (in `bench/`)

| Type | Count |
|---|---|
| Screenshots (apps, websites, chats) | 10 |
| Phone photos of printed pages | 10 |
| Flatbed scans | 5 |
| Receipts | 5 |
| Tables (for Excel) | 5 |
| Non-English: ja, ko, ar, th, ru + Latin-script locales | 15 |
| **Total** | **50** |

Each image gets a hand-typed "correct" text.

### 11.2 What we measure

- **Character error rate (CER):** edit distance between our text and the correct text, divided by the length of the correct text. Lower is better.
- **Time to result** on a mid-range Android phone and on a laptop.
- **Table accuracy:** share of cells that come out correct.

We run the same images through imagetotext.info and jpgtotext.com (free tier) and record their results too.

### 11.3 The rule

- On **printed text**, our CER must be **no worse than the leader's + 2 percentage points**. If not, we do not launch until it is.
- If Tesseract misses this bar for Japanese or Korean, PaddleOCR moves into Phase 1 for those languages.
- The benchmark is re-run before every release.

---

## 12. Monetization

### 12.1 Ads

- Google AdSense first.
- At most 2–3 ad slots per page, **never above the tool**.
- Best slot: just below the result area, where people look while OCR runs.
- Every slot has a reserved height so the page does not jump.
- Ads load after the page has finished loading.

### 12.2 Consent (important for Europe)

Google requires a **Google-certified consent tool** for ads shown to visitors in the EEA, the UK and Switzerland. Our de, fr, it, pl, nl and es pages will bring that traffic. Use the free Privacy & Messaging consent tool inside AdSense from day one.

### 12.3 AdSense approval

AdSense often rejects pure tool sites as "low value content". The page content (section 5.5), guides, About, Contact and Privacy pages are what get approval.

### 12.4 Later

| Monthly sessions | Option |
|---|---|
| ~50K | Try Ezoic or Mediavine (better rates than AdSense) |
| ~100K | Apply to Raptive |

Check each network's current entry requirements when we get there; they change.

### 12.5 Reality check on revenue

imagetotext.online's 26.8K visits have a traffic value of only $821, about $0.03 per visit, because most of its traffic is from India. Indian traffic builds volume and authority. Money comes mostly from the US, Europe, Japan, Korea and the Gulf, which is why the 15 locales matter.

---

## 13. Roadmap with checklists

Time estimates are rough.

### Phase 1 — Core, English only (~2 weeks)

- [ ] Create the project (Astro + Tailwind + Cloudflare), Git repository, deploy pipeline
- [ ] Build the benchmark set and scoring script (`bench/`)
- [ ] OCR engine interface + Tesseract backend + worker pool
- [ ] Input: drag-drop, upload, paste, camera, HEIC, batch queue
- [ ] Preprocessing: orientation, resize, enhance, deskew, crop
- [ ] Result panel: edit, copy, TXT download, line-break and space toggles, counts
- [ ] Click-to-copy overlay and uncertain-word highlight
- [ ] **JPG to Word** with paragraph, heading, list and simple-table rebuilding
- [ ] **Image to Excel** with table detection and editable grid
- [ ] Image to PDF, Text to PDF (Latin fonts), PDF to Text
- [ ] ZIP download for batches
- [ ] Page content for all 6 English tool pages
- [ ] About, Contact, Privacy, Terms
- [ ] SEO basics: titles, meta, canonical, JSON-LD, sitemap, robots
- [ ] Dark mode, keyboard and screen-reader checks
- [ ] Run the benchmark → pass the quality gate
- [ ] Launch English; submit sitemaps to Search Console and Bing

### Phase 1b — 15 languages (~1–1.5 weeks)

- [ ] Verify the top keyword for each locale and tool
- [ ] Locale files and slug table
- [ ] Translate and review UI and page content for all 15 locales
- [ ] Right-to-left layout for Arabic
- [ ] Text to PDF: Noto fonts for ja, ko, ru; canvas method for ar and th
- [ ] hreflang on every page; per-locale sitemaps
- [ ] Language picker linking to the same page in each language
- [ ] Spot-check each locale on a phone
- [ ] Apply for AdSense once content is live; set up the consent tool

### Phase 2 — Growth (~2 weeks)

- [ ] Write the first 10–15 guides
- [ ] PaddleOCR for ja/ko if the benchmark called for it
- [ ] Better table detection based on real failures
- [ ] PWA: offline mode and Android share target
- [ ] On-device history
- [ ] Listen (text-to-speech) and search in result
- [ ] Import from URL via a small Worker proxy

### Phase 3 — Distribution (~1–2 weeks)

- [ ] Chrome and Edge extension: right-click an image → copy text; select an area of the screen → copy text
- [ ] Launch posts (section 14)

### Phase 4 — Ongoing

- [ ] Move to a better ad network when traffic qualifies
- [ ] Look at Search Console data and decide on new tools (screenshot to text, image translator, handwriting with an optional server mode)

---

## 14. Launch and distribution

| Channel | What to do |
|---|---|
| Google Search Console | Submit sitemaps on launch day; request indexing for the 6 English tool pages |
| Bing Webmaster Tools | Submit sitemaps (Bing also feeds other search engines) |
| Product Hunt | Launch with the angle "OCR that runs entirely in your browser: unlimited and private" |
| Hacker News | "Show HN" post focused on the in-browser engineering |
| AlternativeTo | List as an alternative to imagetotext.info, OnlineOCR, jpgtotext |
| Reddit | Only where self-promotion is allowed, and lead with being genuinely useful (student, productivity, language-learning communities) |
| Chrome Web Store / Edge Add-ons | The Phase 3 extension, linking back to the site |
| Guides | Each guide is a reason for other sites to link to us |

---

## 15. What we will measure

| What | Where |
|---|---|
| Indexed pages, impressions, clicks, average position per page and country | Google Search Console |
| Visits by country and page | Cloudflare Web Analytics |
| Core Web Vitals | Search Console + PageSpeed Insights |
| OCR accuracy | `bench/` before every release |
| Ad revenue and RPM by country | AdSense |

Check positions for the Word cluster first: the "image to word" keywords are rated Easy, and the cluster is the biggest opportunity.

---

## 16. Risks and how we handle them

| Risk | How we handle it |
|---|---|
| "image to text" takes 6–12 months to rank; the leader is strong | Early traffic comes from the Word cluster ("image to word" rated Easy), Excel and the non-English locales |
| Browser OCR is less accurate than competitors' server OCR | Quality gate (section 11); PaddleOCR for weak languages; preprocessing; uncertain-word highlight |
| Table extraction fails on messy photos | Editable grid before export; honest wording on the page; improve from real failures |
| Low phones run out of memory | At most 2 workers on phones; cap image size; process one large file at a time |
| Poor translations stop pages from ranking | Native review of every locale; verify keywords before writing |
| Template-like pages trigger Google's scaled-content policy | Real, page-specific content; no keyword-swapped clones |
| AdSense rejects the site as low value | Content under every tool, guides, About/Contact/Privacy before applying |
| EU ad consent rules | Google-certified consent tool from day one |
| Arabic/Thai text breaks in PDFs | Canvas-based layout with an invisible text layer (section 8.7) |
| Free competitors copy "unlimited" | Their server costs make that expensive; we keep improving speed and quality |

---

## 17. Domain name

### What to look for

- `.com`, short, easy to say and spell in many languages.
- No hyphens or numbers.
- Brandable beats exact-match. Most of our pages are not in English, so an English keyword in the domain helps less than a memorable name. "OCR" is understood worldwide.
- Must not contain a trademark (for example "lens").

### Unregistered `.com` names found on 28 Oct 2026

Checked with Verisign's public RDAP service. "Unregistered" means no record existed at that moment. It can change any time, and a registrar may still price some names as premium.

| Domain | Type | Comment |
|---|---|---|
| **ocrsnap.com** | Brandable | **First choice.** Short, global, says what it does |
| **textfromphoto.com** | Descriptive | **Backup.** Matches "text from photo/image" searches |
| textpluck.com | Brandable | Memorable, less obvious meaning |
| grabtextfromimage.com | Descriptive | Long |
| readmyimage.com | Brandable | |
| imagetextfree.com | Descriptive | |
| imgtotextfree.com | Descriptive | "img" is less clear |
| photototextfree.com | Descriptive | Long |
| picturetotextfree.com | Descriptive | Long |
| scantotextfree.com | Descriptive | Narrower meaning |
| textlyimage.com | Brandable | Weaker |

Already registered at the time of the check: pictotext.com, snaptotext.com, copytextfromimage.com, imagetotextfree.com, freeimagetotext.com, pixtotext.com, textgrabber.com, ocrnest.com, ocrhive.com.

---

## 18. Open questions

1. **Domain name** — pick one from section 17 and register it.
2. **Keyword verification** — confirm the main keyword for each locale and tool before writing pages (Ahrefs or Google Keyword Planner per country).
3. **Project folder** — where to create the new repository (for example `Desktop\Image to Text`).
4. **Brand name and logo** — follows from the domain.

---

## 19. Sources

**Competitors (visited and measured on 28 Oct 2026)**
- jpgtotext.com — https://www.jpgtotext.com/ (sitemap: https://www.jpgtotext.com/sitemap.xml)
- imagetotext.online — https://imagetotext.online/ (sitemap: https://imagetotext.online/sitemap.xml)
- imagetotext.info — https://www.imagetotext.info/

**Traffic and keyword data**
- Ahrefs, imagetotext.info — https://ahrefstop.com/websites/imagetotext.info
- Ahrefs screenshots for imagetotext.info and imagetotext.online, shared by Prabhat
- Semrush, imagetotext.info overview — https://www.semrush.com/website/imagetotext.info/overview/
- Semrush, imagetotext.info competitors — https://www.semrush.com/website/imagetotext.info/competitors/
- Semrush, imagetotext.io competitors — https://www.semrush.com/website/imagetotext.io/competitors/
- Google autocomplete (suggestqueries.google.com), queried 28 Oct 2026

**Domain availability**
- Verisign RDAP — https://rdap.verisign.com/com/v1/domain/

import type Tesseract from 'tesseract.js';
import type { OcrParagraph, OcrResult } from './types';

// A small pool of Tesseract workers (PLAN.md §7.5). Each worker reads one image at a time;
// jobs wait in a queue. Workers are created lazily so a single image never pays for three.

export type ProgressStage = 'engine' | 'language' | 'detecting' | 'recognizing';
export type ProgressFn = (stage: ProgressStage, progress: number) => void;

interface Job {
  image: Tesseract.ImageLike;
  langs: string;
  onProgress?: ProgressFn;
  resolve: (r: OcrResult) => void;
  reject: (e: unknown) => void;
}

interface Slot {
  worker: Tesseract.Worker;
  langs: string;
  busy: boolean;
  current: Job | null;
}

const isPhone = typeof navigator !== 'undefined' && /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
const MAX_WORKERS = isPhone ? 1 : Math.max(1, Math.min((navigator.hardwareConcurrency || 2) - 1, 3));

let tesseractModule: typeof Tesseract | null = null;
async function loadTesseract() {
  tesseractModule ??= (await import('tesseract.js')).default;
  return tesseractModule;
}

const slots: Slot[] = [];
const pending: Job[] = [];
let creating = 0;
let wantedLangs = 'eng';

function stageOf(status: string): ProgressStage {
  if (status.includes('recognizing')) return 'recognizing';
  if (status.includes('language') || status.includes('traineddata')) return 'language';
  return 'engine';
}

/** `reportTo` receives the download progress while the worker starts up. */
async function createSlot(langs: string, reportTo: Job | null = null): Promise<Slot> {
  const T = await loadTesseract();
  const slot: Slot = { worker: null as unknown as Tesseract.Worker, langs, busy: false, current: reportTo };
  slot.worker = await T.createWorker(langs.split('+'), T.OEM.LSTM_ONLY, {
    logger: (m) => slot.current?.onProgress?.(stageOf(m.status), m.progress ?? 0),
  });
  slot.current = null;
  return slot;
}

let pumping = false;

async function pump() {
  if (pumping) return;
  pumping = true;
  try {
    while (pending.length) {
      const free = slots.find((s) => !s.busy);
      if (free) {
        run(free, pending.shift()!);
        continue;
      }
      if (slots.length + creating >= MAX_WORKERS) return;
      // Let the first worker finish downloading before starting more, so files are fetched once.
      if (creating > 0 && slots.length === 0) return;
      creating++;
      const first = pending[0] ?? null;
      first?.onProgress?.('engine', 0);
      try {
        slots.push(await createSlot(wantedLangs, first));
      } catch (e) {
        pending.shift()?.reject(e);
      } finally {
        creating--;
      }
    }
  } finally {
    pumping = false;
  }
}

export function isReady(): boolean {
  return slots.length > 0;
}

async function run(slot: Slot, job: Job) {
  slot.busy = true;
  slot.current = job;
  try {
    if (slot.langs !== job.langs) {
      job.onProgress?.('language', 0);
      await slot.worker.reinitialize(job.langs);
      slot.langs = job.langs;
    }
    const { data } = await slot.worker.recognize(job.image, { rotateAuto: true }, { text: true, blocks: true });
    job.resolve(normalize(data, job.langs));
  } catch (e) {
    job.reject(e);
  } finally {
    slot.busy = false;
    slot.current = null;
    pump();
  }
}

function normalize(page: Tesseract.Page, lang: string): OcrResult {
  const paragraphs: OcrParagraph[] = [];
  for (const block of page.blocks ?? []) {
    for (const para of block.paragraphs) {
      const lines = para.lines
        .map((line) => ({
          text: line.text.replace(/\s+$/, ''),
          conf: line.confidence,
          box: line.bbox,
          words: line.words
            .filter((w) => w.text.trim())
            .map((w) => ({ text: w.text, conf: w.confidence, box: w.bbox })),
        }))
        .filter((l) => l.text.trim());
      if (lines.length) paragraphs.push({ box: para.bbox, lines });
    }
  }
  return {
    width: 0,
    height: 0,
    rotateRadians: page.rotateRadians ?? 0,
    confidence: page.confidence,
    paragraphs,
    lang,
  };
}

/** Set the languages for the next jobs, e.g. ["hin", "eng"]. Workers switch lazily. */
export function setLanguages(langs: string[]) {
  wantedLangs = langs.join('+');
}

/** Read an image. `langs` overrides the default set for this one job, e.g. "mal+eng". */
export function recognize(image: Tesseract.ImageLike, onProgress?: ProgressFn, langs = wantedLangs): Promise<OcrResult> {
  return new Promise((resolve, reject) => {
    pending.push({ image, langs, onProgress, resolve, reject });
    pump();
  });
}

// ---------- script detection ----------
// Tesseract's OSD needs the legacy engine and its own data file, so it lives in a separate
// worker that is only created the first time an image does not read well in the default languages.

let osdWorker: Promise<Tesseract.Worker> | null = null;
let osdQueue: Promise<unknown> = Promise.resolve();

/** The writing system of the text in an image, e.g. "Devanagari", or null when unsure. */
export function detectScript(image: Tesseract.ImageLike, onProgress?: ProgressFn): Promise<string | null> {
  const job = osdQueue.then(async () => {
    onProgress?.('detecting', 0);
    osdWorker ??= loadTesseract().then((T) => T.createWorker('osd', T.OEM.TESSERACT_ONLY, { legacyCore: true, legacyLang: true }));
    try {
      const worker = await osdWorker;
      const { data } = await worker.detect(image instanceof HTMLCanvasElement ? tiled(image) : image);
      return data.script && (data.script_confidence ?? 0) > 1 ? (data.script as string) : null;
    } catch (e) {
      console.warn('Script detection failed', e);
      osdWorker = null;
      return null;
    }
  });
  osdQueue = job.catch(() => {});
  return job;
}

/**
 * OSD needs a fair amount of text to decide. A short line (a screenshot of one sentence) gets
 * repeated down a taller canvas so there is enough to go on.
 */
function tiled(src: HTMLCanvasElement): HTMLCanvasElement {
  const scale = Math.min(1, 1600 / src.width);
  const w = Math.round(src.width * scale);
  const h = Math.max(1, Math.round(src.height * scale));
  const copies = Math.max(1, Math.min(8, Math.floor(1200 / h)));
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h * copies;
  const g = c.getContext('2d')!;
  for (let i = 0; i < copies; i++) g.drawImage(src, 0, i * h, w, h);
  return c;
}

/** Start downloading the engine in the background so the first real job starts faster. */
export async function warmUp() {
  if (slots.length || creating) return;
  creating++;
  try {
    slots.push(await createSlot(wantedLangs));
  } catch {
    // A failed warm-up is not fatal; the first real job will try again.
  } finally {
    creating--;
    pump();
  }
}

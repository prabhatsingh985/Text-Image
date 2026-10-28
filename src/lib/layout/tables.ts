import type { OcrResult, OcrWord } from '../ocr/types';

// Table detection for the Excel export (PLAN.md §8.4, method B: tables without ruling lines).
// 1. Words whose vertical centres line up form a row.
// 2. Vertical gaps that stay empty in almost every row are column borders.
// 3. Each word goes to the column that contains its centre.

export type Grid = string[][];

function median(values: number[]): number {
  if (!values.length) return 0;
  const s = [...values].sort((a, b) => a - b);
  return s[s.length >> 1];
}

export function detectTable(result: OcrResult): Grid {
  const words = result.paragraphs
    .flatMap((p) => p.lines.flatMap((l) => l.words))
    .filter((w) => w.text.trim() && w.conf > 10);
  if (!words.length) return [];

  const medH = median(words.map((w) => w.box.y1 - w.box.y0)) || 10;

  // 1. Rows
  const sorted = [...words].sort((a, b) => cy(a) - cy(b));
  const rows: OcrWord[][] = [];
  let rowY = -Infinity;
  for (const w of sorted) {
    const y = cy(w);
    const current = rows[rows.length - 1];
    if (current && Math.abs(y - rowY) <= medH * 0.55) {
      current.push(w);
      rowY = current.reduce((s, x) => s + cy(x), 0) / current.length;
    } else {
      rows.push([w]);
      rowY = y;
    }
  }
  rows.forEach((r) => r.sort((a, b) => a.box.x0 - b.box.x0));

  // 2. Column borders from a horizontal coverage profile
  const minX = Math.floor(Math.min(...words.map((w) => w.box.x0)));
  const maxX = Math.ceil(Math.max(...words.map((w) => w.box.x1)));
  const width = maxX - minX + 1;
  const coverage = new Uint16Array(width);
  for (const row of rows) {
    const seen = new Uint8Array(width);
    for (const w of row) for (let x = Math.max(0, w.box.x0 - minX); x <= Math.min(width - 1, w.box.x1 - minX); x++) seen[x] = 1;
    for (let x = 0; x < width; x++) coverage[x] += seen[x];
  }
  // A gap may be crossed by a few rows (titles, merged cells) and still count as a border.
  const allowed = Math.floor(rows.length * 0.12);
  const minGap = medH * 0.9;
  const borders: number[] = [];
  let start = -1;
  for (let x = 0; x <= width; x++) {
    const empty = x < width && coverage[x] <= allowed;
    if (empty && start < 0) start = x;
    if (!empty && start >= 0) {
      if (x - start >= minGap && start > 0 && x < width) borders.push(minX + (start + x) / 2);
      start = -1;
    }
  }

  // 3. Cells
  const cols = borders.length + 1;
  const grid: Grid = rows.map((row) => {
    const cells: string[][] = Array.from({ length: cols }, () => []);
    for (const w of row) {
      const mid = (w.box.x0 + w.box.x1) / 2;
      let c = 0;
      while (c < borders.length && mid > borders[c]) c++;
      cells[c].push(w.text);
    }
    return cells.map((c) => c.join(' ').trim());
  });

  // Drop columns that ended up empty everywhere.
  const keep = Array.from({ length: cols }, (_, c) => grid.some((r) => r[c]));
  return grid.map((r) => r.filter((_, c) => keep[c]));
}

function cy(w: OcrWord): number {
  return (w.box.y0 + w.box.y1) / 2;
}

/** True when the grid looks like a real table rather than prose. */
export function looksLikeTable(grid: Grid): boolean {
  if (grid.length < 3) return false;
  const multi = grid.filter((r) => r.filter(Boolean).length >= 2).length;
  return (grid[0]?.length ?? 0) >= 2 && multi / grid.length >= 0.6;
}

/** "1,250.50" → 1250.5. Values with letters, currency or units stay text. */
export function toCellValue(text: string): string | number {
  const t = text.trim();
  if (/^[-+]?(\d{1,3}(,\d{3})+|\d+)(\.\d+)?$/.test(t)) {
    const n = Number(t.replace(/,/g, ''));
    // Keep leading zeros such as phone numbers or IDs as text.
    if (Number.isFinite(n) && !/^[-+]?0\d/.test(t)) return n;
  }
  return t;
}

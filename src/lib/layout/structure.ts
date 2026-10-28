import type { OcrLine, OcrResult } from '../ocr/types';
import { joinLines } from '../text';

// Rebuilds document structure from OCR boxes for the Word export (PLAN.md §8.3).
// Tesseract's own paragraph grouping is unreliable (it often returns a whole page as one
// paragraph), so lines are regrouped here using vertical gaps and changes in text size.

export type DocBlock =
  | { kind: 'heading'; level: 1 | 2; text: string; center: boolean }
  | { kind: 'paragraph'; text: string; center: boolean }
  | { kind: 'bullet'; text: string }
  | { kind: 'numbered'; text: string };

// "•" is often read as "+", "*" or "-", so those count as bullets when a word follows.
const BULLET = /^[•·▪●○◦■□►▸➢✓\-–—*+]\s+(?=\p{L}|\p{N})/u;
const NUMBERED = /^\(?(\d{1,3}|[a-zA-Z]|[ivxIVX]{1,4})[.)]\s+/;

function median(values: number[]): number {
  if (!values.length) return 0;
  const s = [...values].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

const height = (l: OcrLine) => l.box.y1 - l.box.y0;

export function buildStructure(result: OcrResult): DocBlock[] {
  // Keep Tesseract's reading order, but remember where its paragraphs end.
  const lines: { line: OcrLine; paraStart: boolean }[] = [];
  for (const p of result.paragraphs) p.lines.forEach((line, i) => lines.push({ line, paraStart: i === 0 }));
  if (!lines.length) return [];

  const medH = median(lines.map((l) => height(l.line))) || 1;
  const gaps: number[] = [];
  for (let i = 1; i < lines.length; i++) {
    const a = lines[i - 1].line;
    const b = lines[i].line;
    const similar = Math.abs(height(a) - height(b)) < medH * 0.25;
    const gap = b.box.y0 - a.box.y1;
    if (similar && gap > 0) gaps.push(gap);
  }
  const medGap = median(gaps) || medH * 0.5;
  const breakGap = Math.max(medGap * 1.6, medH * 0.9);

  const pageW = result.width || Math.max(...lines.map((l) => l.line.box.x1));
  const isCentered = (l: OcrLine) => {
    const mid = (l.box.x0 + l.box.x1) / 2;
    return Math.abs(mid - pageW / 2) < pageW * 0.03 && l.box.x0 > pageW * 0.1;
  };

  // 1. Group lines into raw paragraphs.
  const groups: OcrLine[][] = [];
  for (let i = 0; i < lines.length; i++) {
    const { line, paraStart } = lines[i];
    const prev = lines[i - 1]?.line;
    const t = line.text.trim();
    const ratio = prev ? height(line) / height(prev) : 1;
    const newGroup =
      !prev ||
      paraStart ||
      line.box.y0 - prev.box.y1 > breakGap ||
      ratio > 1.3 ||
      ratio < 0.77 ||
      line.box.y0 < prev.box.y0 || // next column
      BULLET.test(t) ||
      NUMBERED.test(t);
    if (newGroup) groups.push([line]);
    else groups[groups.length - 1].push(line);
  }

  // 2. Turn each group into a block.
  const blocks: DocBlock[] = [];
  for (const group of groups) {
    const first = group[0].text.trim();
    const text = joinLines(group.map((l) => l.text));
    if (BULLET.test(first)) {
      blocks.push({ kind: 'bullet', text: text.replace(BULLET, '') });
      continue;
    }
    if (NUMBERED.test(first) && first.length > 3) {
      blocks.push({ kind: 'numbered', text });
      continue;
    }
    const tall = median(group.map(height)) / medH;
    const center = group.every(isCentered);
    if (tall >= 1.3 && group.length <= 3 && text.length < 120) {
      blocks.push({ kind: 'heading', level: tall >= 1.8 ? 1 : 2, text, center });
    } else {
      blocks.push({ kind: 'paragraph', text, center });
    }
  }
  return blocks;
}

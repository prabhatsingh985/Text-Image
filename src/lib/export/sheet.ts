import { toCellValue, type Grid } from '../layout/tables';
import { downloadBlob } from './download';

// Excel / CSV export (PLAN.md §6.5). SheetJS is loaded only when someone downloads.

const MAX_SHEET_NAME = 31;

/** Sheet names: at most 31 characters, none of []:*?/\, no apostrophe at either end, and "History" is reserved. */
function sheetName(raw: string): string {
  const name = raw
    .replace(/[[\]:*?/\\]/g, ' ')
    .replace(/^[\s']+/, '')
    .slice(0, MAX_SHEET_NAME)
    .replace(/[\s']+$/, '');
  if (!name) return 'Sheet';
  return name.toLowerCase() === 'history' ? 'History 1' : name;
}

/** A number that shows the way it was printed (486.00, 1,000.00) and still adds up in a formula. */
function cell(text: string) {
  const value = toCellValue(text);
  if (typeof value !== 'number') return value;
  const decimals = /\.(\d+)$/.exec(text.trim())?.[1].length ?? 0;
  const format = (text.includes(',') ? '#,##0' : '0') + (decimals ? `.${'0'.repeat(decimals)}` : '');
  return format === '0' ? value : { t: 'n', v: value, z: format };
}

export async function downloadXlsx(sheets: { name: string; grid: Grid }[], filename: string) {
  const XLSX = await import('xlsx');
  const wb = XLSX.utils.book_new();
  const used = new Set<string>();
  for (const s of sheets) {
    const base = sheetName(s.name);
    let name = base;
    // Excel sees "Photo" and "photo" as the same sheet.
    for (let i = 2; used.has(name.toLowerCase()); i++) {
      const suffix = ` (${i})`;
      name = base.slice(0, MAX_SHEET_NAME - suffix.length).replace(/[\s']+$/, '') + suffix;
    }
    used.add(name.toLowerCase());
    const ws = XLSX.utils.aoa_to_sheet(s.grid.map((row) => row.map(cell)));
    const cols = Math.max(0, ...s.grid.map((r) => r.length));
    ws['!cols'] = Array.from({ length: cols }, (_, c) => ({
      wch: Math.min(60, Math.max(8, ...s.grid.map((r) => (r[c] ?? '').length + 2))),
    }));
    XLSX.utils.book_append_sheet(wb, ws, name);
  }
  XLSX.writeFile(wb, filename);
}

export function gridToCsv(grid: Grid): string {
  return grid
    .map((row) => row.map((cell) => (/[",\n\r]/.test(cell) ? `"${cell.replace(/"/g, '""')}"` : cell)).join(','))
    .join('\r\n');
}

export function downloadCsv(grid: Grid, filename: string) {
  downloadBlob(new Blob(['﻿' + gridToCsv(grid)], { type: 'text/csv;charset=utf-8' }), filename);
}

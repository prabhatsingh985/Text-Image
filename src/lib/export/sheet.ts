import { toCellValue, type Grid } from '../layout/tables';
import { downloadBlob } from './download';

// Excel / CSV export (PLAN.md §6.5). SheetJS is loaded only when someone downloads.

export async function downloadXlsx(sheets: { name: string; grid: Grid }[], filename: string) {
  const XLSX = await import('xlsx');
  const wb = XLSX.utils.book_new();
  const used = new Set<string>();
  for (const s of sheets) {
    // Sheet names: max 31 characters, no []:*?/\ and unique.
    let name = s.name.replace(/[[\]:*?/\\]/g, ' ').slice(0, 31) || 'Sheet';
    for (let i = 2; used.has(name); i++) name = `${name.slice(0, 27)} (${i})`;
    used.add(name);
    const ws = XLSX.utils.aoa_to_sheet(s.grid.map((row) => row.map(toCellValue)));
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

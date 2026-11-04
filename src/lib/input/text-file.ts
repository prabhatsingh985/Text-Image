// Text files keep the encoding of whatever saved them. On Windows that is often not UTF-8:
// old Notepad saves "ANSI" (Windows-1252), and its "Unicode" option saves UTF-16.

/** UTF-16 without a byte order mark shows up as a zero in every other byte of ordinary text. */
function utf16WithoutBom(b: Uint8Array): 'utf-16le' | 'utf-16be' | null {
  const sample = Math.min(b.length, 4096) & ~1;
  if (sample < 8) return null;
  let oddZeros = 0;
  let evenZeros = 0;
  for (let i = 0; i < sample; i += 2) {
    if (b[i] === 0) evenZeros++;
    if (b[i + 1] === 0) oddZeros++;
  }
  const pairs = sample / 2;
  if (oddZeros / pairs > 0.4 && evenZeros / pairs < 0.05) return 'utf-16le';
  if (evenZeros / pairs > 0.4 && oddZeros / pairs < 0.05) return 'utf-16be';
  return null;
}

export async function readTextFile(file: Blob): Promise<string> {
  const b = new Uint8Array(await file.arrayBuffer());
  // TextDecoder removes the byte order mark itself.
  if (b[0] === 0xff && b[1] === 0xfe) return new TextDecoder('utf-16le').decode(b);
  if (b[0] === 0xfe && b[1] === 0xff) return new TextDecoder('utf-16be').decode(b);
  const wide = utf16WithoutBom(b);
  if (wide) return new TextDecoder(wide).decode(b);
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(b);
  } catch {
    return new TextDecoder('windows-1252').decode(b);
  }
}

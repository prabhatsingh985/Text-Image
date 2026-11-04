// Devanagari (Hindi, Marathi, Sanskrit, Nepali …) for Text to PDF. Letters in this script change
// shape, join and reorder, which pdf-lib cannot do: it draws one glyph per character. HarfBuzz
// works out the glyphs and positions, and this file writes them to the PDF itself. Loaded only
// when the text needs it. The whole font is embedded, because pdf-lib's subsetter is not involved.

import {
  PDFHexString,
  PDFName,
  PDFNumber,
  PDFOperator,
  PDFString,
  beginText,
  endText,
  setFillingColor,
  setFontAndSize,
  setTextMatrix,
  showText,
} from 'pdf-lib';
import type { Color, PDFDocument, PDFPage, PDFRef } from 'pdf-lib';
import type { FontChoice } from './pdf';
import { devanagariFontBytes } from './pdf-fonts';
import { JOINER } from './shaping-chars';

interface Glyph {
  id: number;
  x: number;
  y: number;
}
interface Shaped {
  glyphs: Glyph[];
  /** In font units. */
  advance: number;
}

export interface Shaper {
  covers(ch: string): boolean;
  width(text: string, size: number): number;
  /** Draws `text` with its baseline at x, y and returns its width. */
  draw(page: PDFPage, text: string, x: number, y: number, size: number, color: Color): number;
  /** Writes the font into the document. Call once, after the last draw and before saving. */
  finish(): void;
}

const hex = (n: number) => n.toString(16).toUpperCase().padStart(4, '0');
const utf16Hex = (s: string) => Array.from({ length: s.length }, (_, i) => hex(s.charCodeAt(i))).join('');

function toUnicodeCMap(map: Map<number, string>): string {
  const entries = [...map].sort((a, b) => a[0] - b[0]);
  const blocks: string[] = [];
  // The format allows at most 100 entries per block.
  for (let i = 0; i < entries.length; i += 100) {
    const part = entries.slice(i, i + 100);
    blocks.push(`${part.length} beginbfchar\n${part.map(([g, s]) => `<${hex(g)}> <${utf16Hex(s)}>`).join('\n')}\nendbfchar`);
  }
  return `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000> <FFFF>
endcodespacerange
${blocks.join('\n')}
endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
}

/** Downloads the font and shaping engine and returns a shaper bound to `pdf`. Throws when offline. */
export async function loadShaper(pdf: PDFDocument, choice: FontChoice): Promise<Shaper> {
  const [hb, fontkitModule, bytes] = await Promise.all([
    import('harfbuzzjs'),
    import('@pdf-lib/fontkit'),
    devanagariFontBytes(choice),
  ]);
  const fontkit = (fontkitModule as unknown as { default: typeof import('@pdf-lib/fontkit') }).default;
  const info = fontkit.create(bytes);
  const hbFont = new hb.Font(new hb.Face(new hb.Blob(bytes)));
  const upem = info.unitsPerEm;
  const to1000 = (n: number) => Math.round((n * 1000) / upem);

  const fontRef: PDFRef = pdf.context.nextRef();
  const fontKey = PDFName.of('Deva');
  const shapedCache = new Map<string, Shaped>();
  const glyphWidths = new Map<number, number>();
  const unicode = new Map<number, string>();
  const glyphOfChar = (cp: number) => info.glyphForCodePoint(cp).id;

  /** Best-effort per-glyph text for viewers that ignore ActualText. The first reading of a glyph wins. */
  function recordUnicode(text: string, group: number[]) {
    let left = [...text];
    const unmapped: number[] = [];
    for (const id of group) {
      const at = left.findIndex((ch) => glyphOfChar(ch.codePointAt(0)!) === id);
      if (at >= 0) {
        if (!unicode.has(id)) unicode.set(id, left[at]);
        left = left.filter((_, i) => i !== at);
      } else unmapped.push(id);
    }
    const rest = left.filter((ch) => !JOINER.test(ch)).join('');
    if (rest && unmapped.length && !unicode.has(unmapped[0])) unicode.set(unmapped[0], rest);
  }

  function shape(text: string): Shaped {
    let result = shapedCache.get(text);
    if (result) return result;
    const buffer = new hb.Buffer();
    buffer.addText(text);
    buffer.guessSegmentProperties();
    hb.shape(hbFont, buffer);
    const out = buffer.getGlyphInfosAndPositions();
    const glyphs: Glyph[] = [];
    let pen = 0;
    for (let i = 0; i < out.length; ) {
      // One cluster: the glyphs drawn for one run of characters.
      let end = i;
      while (end < out.length && out[end].cluster === out[i].cluster) end++;
      const nextCluster = end < out.length ? out[end].cluster : text.length;
      const group: number[] = [];
      for (let g = i; g < end; g++) {
        const { codepoint: id, xAdvance = 0, xOffset = 0, yOffset = 0 } = out[g];
        glyphs.push({ id, x: pen + xOffset, y: yOffset });
        group.push(id);
        pen += xAdvance;
        if (!glyphWidths.has(id)) glyphWidths.set(id, to1000(info.getGlyph(id).advanceWidth));
      }
      recordUnicode(text.slice(out[i].cluster, nextCluster), group);
      i = end;
    }
    result = { glyphs, advance: pen };
    shapedCache.set(text, result);
    return result;
  }

  return {
    covers: (ch) => info.hasGlyphForCodePoint(ch.codePointAt(0)!),
    width: (text, size) => (shape(text).advance * size) / upem,
    draw(page, text, x, y, size, color) {
      const { glyphs, advance } = shape(text);
      const scale = size / upem;
      page.node.setFontDictionary(fontKey, fontRef);
      page.pushOperators(
        // Tells viewers the real text, since reordered glyphs do not spell it.
        PDFOperator.of('BDC' as never, [
          PDFName.of('Span'),
          // pdf-lib's types leave out dict operands, but it writes them correctly.
          pdf.context.obj({ ActualText: PDFHexString.fromText(text) }) as unknown as PDFName,
        ]),
        beginText(),
        setFillingColor(color),
        setFontAndSize(fontKey, size),
        ...glyphs.flatMap((g) => [
          setTextMatrix(1, 0, 0, 1, x + g.x * scale, y + g.y * scale),
          showText(PDFHexString.of(hex(g.id))),
        ]),
        endText(),
        PDFOperator.of('EMC' as never),
      );
      return advance * scale;
    },
    finish() {
      const ctx = pdf.context;
      const name = PDFName.of(choice === 'serif' ? 'NotoSerifDevanagari' : 'NotoSansDevanagari');
      const fontFile = ctx.register(ctx.flateStream(bytes, { Length1: bytes.length }));
      const descriptor = ctx.register(
        ctx.obj({
          Type: 'FontDescriptor',
          FontName: name,
          Flags: 4,
          FontBBox: [info.bbox.minX, info.bbox.minY, info.bbox.maxX, info.bbox.maxY].map(to1000),
          ItalicAngle: 0,
          Ascent: to1000(info.ascent),
          Descent: to1000(info.descent),
          CapHeight: to1000(info.capHeight || info.ascent),
          StemV: 80,
          FontFile2: fontFile,
        }),
      );
      const widths = [...glyphWidths].sort((a, b) => a[0] - b[0]).flatMap(([id, w]) => [PDFNumber.of(id), ctx.obj([w])]);
      const cidFont = ctx.register(
        ctx.obj({
          Type: 'Font',
          Subtype: 'CIDFontType2',
          BaseFont: name,
          CIDSystemInfo: { Registry: PDFString.of('Adobe'), Ordering: PDFString.of('Identity'), Supplement: 0 },
          FontDescriptor: descriptor,
          CIDToGIDMap: 'Identity',
          DW: 1000,
          W: widths,
        }),
      );
      ctx.assign(
        fontRef,
        ctx.obj({
          Type: 'Font',
          Subtype: 'Type0',
          BaseFont: name,
          Encoding: 'Identity-H',
          DescendantFonts: [cidFont],
          ToUnicode: ctx.register(ctx.flateStream(toUnicodeCMap(unicode))),
        }),
      );
    },
  };
}

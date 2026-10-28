import type { DocBlock } from '../layout/structure';
import type { Grid } from '../layout/tables';

// Word export (PLAN.md §6.4). The docx library is loaded only when someone downloads.

export interface DocPage {
  blocks: DocBlock[];
  /** When set, the page is written as a table instead of paragraphs. */
  table?: Grid;
  rtl: boolean;
}

export async function buildDocx(pages: DocPage[]): Promise<Blob> {
  const d = await import('docx');
  const children: (InstanceType<typeof d.Paragraph> | InstanceType<typeof d.Table>)[] = [];

  pages.forEach((page, i) => {
    const bidi = page.rtl;
    const firstOnPage = children.length;

    if (page.table?.length) {
      const cols = Math.max(...page.table.map((r) => r.length));
      children.push(
        new d.Table({
          width: { size: 100, type: d.WidthType.PERCENTAGE },
          visuallyRightToLeft: bidi,
          rows: page.table.map(
            (row, r) =>
              new d.TableRow({
                tableHeader: r === 0,
                children: Array.from(
                  { length: cols },
                  (_, c) =>
                    new d.TableCell({
                      children: [new d.Paragraph({ bidirectional: bidi, children: [new d.TextRun({ text: row[c] ?? '', bold: r === 0 })] })],
                    }),
                ),
              }),
          ),
        }),
      );
    } else {
      for (const b of page.blocks) {
        const align = bidi ? d.AlignmentType.RIGHT : undefined;
        if (b.kind === 'heading') {
          children.push(
            new d.Paragraph({
              heading: b.level === 1 ? d.HeadingLevel.HEADING_1 : d.HeadingLevel.HEADING_2,
              alignment: b.center ? d.AlignmentType.CENTER : align,
              bidirectional: bidi,
              children: [new d.TextRun(b.text)],
            }),
          );
        } else if (b.kind === 'bullet') {
          children.push(new d.Paragraph({ bullet: { level: 0 }, bidirectional: bidi, children: [new d.TextRun(b.text)] }));
        } else if (b.kind === 'numbered') {
          children.push(new d.Paragraph({ indent: { start: 360 }, bidirectional: bidi, children: [new d.TextRun(b.text)] }));
        } else {
          children.push(
            new d.Paragraph({
              alignment: b.center ? d.AlignmentType.CENTER : align,
              bidirectional: bidi,
              spacing: { after: 160 },
              children: [new d.TextRun(b.text)],
            }),
          );
        }
      }
    }

    if (children.length === firstOnPage) children.push(new d.Paragraph(''));
    if (i < pages.length - 1) children.push(new d.Paragraph({ children: [new d.PageBreak()] }));
  });

  const doc = new d.Document({
    styles: { default: { document: { run: { font: 'Calibri', size: 22 } } } },
    sections: [{ children }],
  });
  return d.Packer.toBlob(doc);
}

// Text extraction from Office files (Word to Text, PPT to Text). Everything runs in the browser:
// DOCX, PPTX and the OpenDocument formats are ZIP archives of XML, read here with JSZip and DOMParser.
// RTF is plain text with control words and is parsed directly.

export interface Slide {
  n: number;
  text: string;
  notes: string;
}

const DOC_EXT = /\.(docx|docm|dotx|odt|ott|rtf)$/i;
const SLIDE_EXT = /\.(pptx|pptm|ppsx|potx|odp|otp)$/i;
const LEGACY_EXT = /\.(doc|ppt|pps)$/i;

export const DOC_ACCEPT = '.docx,.docm,.dotx,.odt,.ott,.rtf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/rtf';
export const SLIDE_ACCEPT = '.pptx,.pptm,.ppsx,.potx,.odp,.otp,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.oasis.opendocument.presentation';

export const isDocFile = (f: File) => DOC_EXT.test(f.name);
export const isSlideFile = (f: File) => SLIDE_EXT.test(f.name);
export const isLegacyOffice = (f: File) => LEGACY_EXT.test(f.name);

// ---------- shared helpers ----------

async function unzip(file: File) {
  const JSZip = (await import('jszip')).default;
  return JSZip.loadAsync(await file.arrayBuffer());
}

async function readXml(zip: Awaited<ReturnType<typeof unzip>>, path: string): Promise<Document | null> {
  const entry = zip.file(path);
  if (!entry) return null;
  const doc = new DOMParser().parseFromString(await entry.async('string'), 'application/xml');
  return doc.getElementsByTagName('parsererror').length ? null : doc;
}

const kids = (el: Element) => [...el.children];
const byName = (el: Element | Document, localName: string) => [...el.getElementsByTagNameNS('*', localName)];

/** Collapse runs of blank lines and trailing spaces, the usual leftovers of document markup. */
function tidy(text: string): string {
  return text
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Join a path inside the ZIP with a relative target such as "../notesSlides/notesSlide1.xml". */
function resolvePath(base: string, target: string): string {
  if (target.startsWith('/')) return target.slice(1);
  const parts = base.split('/').slice(0, -1);
  for (const seg of target.split('/')) {
    if (seg === '..') parts.pop();
    else if (seg !== '.') parts.push(seg);
  }
  return parts.join('/');
}

async function relationships(zip: Awaited<ReturnType<typeof unzip>>, part: string): Promise<Map<string, { type: string; target: string }>> {
  const dir = part.split('/').slice(0, -1).join('/');
  const name = part.split('/').pop();
  const xml = await readXml(zip, `${dir}/_rels/${name}.rels`);
  const map = new Map<string, { type: string; target: string }>();
  for (const r of xml ? byName(xml, 'Relationship') : []) {
    map.set(r.getAttribute('Id') ?? '', { type: r.getAttribute('Type') ?? '', target: resolvePath(part, r.getAttribute('Target') ?? '') });
  }
  return map;
}

// ---------- Word ----------

export async function extractDocument(file: File): Promise<string> {
  if (/\.rtf$/i.test(file.name)) return tidy(rtfToText(await file.text()));
  const zip = await unzip(file);
  if (zip.file('content.xml')) {
    const xml = await readXml(zip, 'content.xml');
    const body = xml && byName(xml, 'text')[0];
    if (!body) return '';
    const out: string[] = [];
    odfBlocks(body, out);
    return tidy(out.join('\n'));
  }
  const xml = await readXml(zip, 'word/document.xml');
  const body = xml && byName(xml, 'body')[0];
  if (!body) throw new Error('Not a Word document');
  const out: string[] = [];
  wordBlocks(body, out);
  return tidy(out.join('\n'));
}

function wordBlocks(el: Element, out: string[]) {
  for (const c of kids(el)) {
    if (c.localName === 'p') out.push(wordParagraph(c));
    else if (c.localName === 'tbl') {
      for (const tr of kids(c).filter((x) => x.localName === 'tr')) {
        const cells = kids(tr).filter((x) => x.localName === 'tc');
        out.push(cells.map((tc) => byName(tc, 'p').map(wordParagraph).filter(Boolean).join(' ')).join('\t'));
      }
      out.push('');
    } else if (c.localName === 'sdt' || c.localName === 'sdtContent' || c.localName === 'customXml') wordBlocks(c, out);
  }
}

function wordParagraph(p: Element): string {
  let s = '';
  const walk = (el: Element) => {
    for (const c of kids(el)) {
      switch (c.localName) {
        case 't':
          s += c.textContent ?? '';
          break;
        case 'tab':
          // w:tab inside paragraph properties is a tab stop definition, not a character.
          if (c.parentElement?.localName === 'r') s += '\t';
          break;
        case 'br':
        case 'cr':
          s += '\n';
          break;
        case 'noBreakHyphen':
          s += '‑';
          break;
        case 'pPr':
        case 'rPr':
        case 'delText':
        case 'instrText':
        case 'Fallback':
          break;
        default:
          walk(c);
      }
    }
  };
  walk(p);
  const listItem = byName(p, 'numPr').length > 0;
  return listItem && s.trim() ? `• ${s}` : s;
}

function odfInline(el: Element): string {
  let s = '';
  for (const n of el.childNodes) {
    if (n.nodeType === Node.TEXT_NODE) s += n.textContent ?? '';
    else if (n instanceof Element) {
      if (n.localName === 's') s += ' '.repeat(Number(n.getAttribute('text:c') ?? n.getAttributeNS('*', 'c') ?? 1) || 1);
      else if (n.localName === 'tab') s += '\t';
      else if (n.localName === 'line-break') s += '\n';
      else if (n.localName !== 'annotation' && n.localName !== 'note') s += odfInline(n);
    }
  }
  return s;
}

function odfBlocks(el: Element, out: string[], bullet = false) {
  for (const c of kids(el)) {
    switch (c.localName) {
      case 'h':
      case 'p': {
        const text = odfInline(c);
        out.push(bullet && text.trim() ? `• ${text}` : text);
        bullet = false;
        break;
      }
      case 'list':
        for (const item of kids(c)) odfBlocks(item, out, item.localName === 'list-item');
        break;
      case 'table':
        for (const tr of byName(c, 'table-row')) {
          out.push(kids(tr).filter((x) => x.localName === 'table-cell').map((tc) => byName(tc, 'p').map(odfInline).join(' ')).join('\t'));
        }
        out.push('');
        break;
      case 'tracked-changes':
      case 'annotation':
      case 'sequence-decls':
        break;
      default:
        odfBlocks(c, out, bullet);
    }
  }
}

// ---------- RTF ----------

const RTF_SKIP = new Set([
  'fonttbl', 'colortbl', 'stylesheet', 'info', 'pict', 'object', 'header', 'headerl', 'headerr', 'headerf', 'footer', 'footerl',
  'footerr', 'footerf', 'themedata', 'colorschememapping', 'latentstyles', 'datastore', 'xmlnstbl', 'listtable', 'listoverridetable',
  'rsidtbl', 'generator', 'fldinst', 'filetbl', 'revtbl', 'mmathPr', 'pgdsctbl', 'operator', 'author',
]);
const RTF_CHARS: Record<string, string> = {
  par: '\n', line: '\n', sect: '\n\n', page: '\n\n', row: '\n', cell: '\t', tab: '\t', emdash: '—', endash: '–', bullet: '•',
  lquote: '‘', rquote: '’', ldblquote: '“', rdblquote: '”', emspace: ' ', enspace: ' ',
};

export function rtfToText(rtf: string): string {
  const cp1252 = new TextDecoder('windows-1252');
  const stack: { skip: boolean; uc: number }[] = [];
  let skip = false;
  let uc = 1;
  let fallback = 0; // characters still to drop after a \u escape
  let out = '';
  const emit = (s: string) => {
    if (skip) return;
    if (fallback > 0) fallback--;
    else out += s;
  };
  for (let i = 0; i < rtf.length; ) {
    const ch = rtf[i];
    if (ch === '{') {
      stack.push({ skip, uc });
      i++;
    } else if (ch === '}') {
      ({ skip, uc } = stack.pop() ?? { skip: false, uc: 1 });
      i++;
    } else if (ch === '\\') {
      const next = rtf[i + 1];
      if (next === '\\' || next === '{' || next === '}') {
        emit(next);
        i += 2;
      } else if (next === "'") {
        emit(cp1252.decode(Uint8Array.of(parseInt(rtf.slice(i + 2, i + 4), 16) || 32)));
        i += 4;
      } else if (next === '*') {
        skip = true;
        i += 2;
      } else if (next === '~') {
        emit(' ');
        i += 2;
      } else if (next === '\n' || next === '\r') {
        if (!skip) out += '\n';
        i += 2;
      } else {
        const m = /^([a-zA-Z]+)(-?\d+)? ?/.exec(rtf.slice(i + 1, i + 48));
        if (!m) {
          i += 2;
          continue;
        }
        i += 1 + m[0].length;
        const word = m[1];
        const arg = m[2] === undefined ? undefined : Number(m[2]);
        if (RTF_SKIP.has(word)) skip = true;
        else if (skip) continue;
        else if (word === 'uc') uc = arg ?? 1;
        else if (word === 'u' && arg !== undefined) {
          out += String.fromCharCode(arg < 0 ? arg + 65536 : arg);
          fallback = uc;
        } else if (RTF_CHARS[word]) out += RTF_CHARS[word];
      }
    } else {
      if (ch !== '\r' && ch !== '\n') emit(ch);
      i++;
    }
  }
  return out;
}

// ---------- PowerPoint ----------

export async function extractSlides(file: File): Promise<Slide[]> {
  const zip = await unzip(file);
  if (zip.file('content.xml')) return odpSlides(zip);

  const pres = 'ppt/presentation.xml';
  const xml = await readXml(zip, pres);
  if (!xml) throw new Error('Not a PowerPoint file');
  const rels = await relationships(zip, pres);
  const R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships';
  const paths = byName(xml, 'sldId')
    .map((s) => rels.get(s.getAttributeNS(R, 'id') ?? '')?.target)
    .filter((p): p is string => !!p);

  const slides: Slide[] = [];
  for (const [i, path] of paths.entries()) {
    const slide = await readXml(zip, path);
    if (!slide) continue;
    const notesRel = [...(await relationships(zip, path)).values()].find((r) => r.type.endsWith('/notesSlide'));
    const notes = notesRel ? await readXml(zip, notesRel.target) : null;
    slides.push({ n: i + 1, text: drawingText(slide), notes: notes ? drawingText(notes, true) : '' });
  }
  return slides;
}

const SKIP_PLACEHOLDERS = new Set(['sldNum', 'dt', 'ftr', 'hdr', 'sldImg']);

/** Text of a slide or notes page, shape by shape, with tables as tab-separated rows. */
function drawingText(doc: Document, notesPage = false): string {
  const tree = byName(doc, 'spTree')[0];
  if (!tree) return '';
  const lines: string[] = [];
  const walk = (el: Element) => {
    for (const c of kids(el)) {
      if (c.localName === 'Fallback') continue;
      if (c.localName === 'sp') {
        const ph = byName(c, 'ph')[0]?.getAttribute('type') ?? '';
        if (SKIP_PLACEHOLDERS.has(ph) || (notesPage && ph === 'sldImg')) continue;
      }
      if (c.localName === 'tbl') {
        for (const tr of byName(c, 'tr')) {
          lines.push(kids(tr).filter((x) => x.localName === 'tc').map((tc) => byName(tc, 'p').map(drawingParagraph).join(' ').trim()).join('\t'));
        }
        continue;
      }
      if (c.localName === 'txBody') {
        const paras = kids(c).filter((x) => x.localName === 'p').map(drawingParagraph);
        const text = paras.join('\n').trim();
        if (text) lines.push(text);
        continue;
      }
      walk(c);
    }
  };
  walk(tree);
  return tidy(lines.join('\n'));
}

function drawingParagraph(p: Element): string {
  let s = '';
  for (const c of kids(p)) {
    if (c.localName === 'r' || c.localName === 'fld') s += byName(c, 't').map((t) => t.textContent ?? '').join('');
    else if (c.localName === 'br') s += '\n';
  }
  const bullet = byName(p, 'buChar')[0] || byName(p, 'buAutoNum')[0];
  return bullet && s.trim() ? `• ${s}` : s;
}

async function odpSlides(zip: Awaited<ReturnType<typeof unzip>>): Promise<Slide[]> {
  const xml = await readXml(zip, 'content.xml');
  if (!xml) return [];
  return byName(xml, 'page').map((page, i) => {
    const notesEl = byName(page, 'notes')[0];
    const text: string[] = [];
    for (const frame of kids(page)) {
      if (frame.localName === 'notes') continue;
      const paras = byName(frame, 'p').map(odfInline).join('\n').trim();
      if (paras) text.push(paras);
    }
    const notes = notesEl ? byName(notesEl, 'p').map(odfInline).join('\n') : '';
    return { n: i + 1, text: tidy(text.join('\n')), notes: tidy(notes) };
  });
}

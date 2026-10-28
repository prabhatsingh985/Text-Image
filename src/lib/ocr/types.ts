export interface Box {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface OcrWord {
  text: string;
  conf: number;
  box: Box;
}

export interface OcrLine {
  text: string;
  conf: number;
  box: Box;
  words: OcrWord[];
}

export interface OcrParagraph {
  box: Box;
  lines: OcrLine[];
}

export interface OcrResult {
  /** Size of the image the boxes refer to. */
  width: number;
  height: number;
  /** Deskew angle Tesseract applied before reading, in radians. Boxes are in the deskewed frame. */
  rotateRadians: number;
  confidence: number;
  paragraphs: OcrParagraph[];
  lang: string;
}

export function allLines(result: OcrResult): OcrLine[] {
  return result.paragraphs.flatMap((p) => p.lines);
}

export function allWords(result: OcrResult): OcrWord[] {
  return allLines(result).flatMap((l) => l.words);
}

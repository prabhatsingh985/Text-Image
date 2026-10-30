import type { TranslatedContent } from '../types';
import { ui } from './ui';
import { pages } from './pages';
import imageToText from './tools/image-to-text';
import screenshotToText from './tools/screenshot-to-text';
import jpgToWord from './tools/jpg-to-word';
import jpgToExcel from './tools/jpg-to-excel';
import pdfToText from './tools/pdf-to-text';
import pdfToExcel from './tools/pdf-to-excel';
import wordToText from './tools/word-to-text';
import pptToText from './tools/ppt-to-text';
import imageToPdf from './tools/image-to-pdf';
import textToPdf from './tools/text-to-pdf';

// Tool pages live one per file in ./tools; links inside them use English paths and are localised by contentFor().
const content: TranslatedContent = {
  ui,
  pages,
  tools: {
    'image-to-text': imageToText,
    'screenshot-to-text': screenshotToText,
    'jpg-to-word': jpgToWord,
    'jpg-to-excel': jpgToExcel,
    'pdf-to-text': pdfToText,
    'pdf-to-excel': pdfToExcel,
    'word-to-text': wordToText,
    'ppt-to-text': pptToText,
    'image-to-pdf': imageToPdf,
    'text-to-pdf': textToPdf,
  },
};

export default content;

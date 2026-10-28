import type { StaticContent } from '../types';
import type { StaticId } from '../../i18n/routes';
import { SITE } from '../../config/site';

export const pages: Record<StaticId, StaticContent> = {
  about: {
    title: `About ${SITE.name}`,
    description: `${SITE.name} is a free, unlimited image to text converter that runs entirely in your browser.`,
    h1: `About ${SITE.name}`,
    sections: [
      {
        h2: 'Why we built this',
        paragraphs: [
          'Getting text out of a picture should be quick, free and private. Most online OCR tools upload your files, limit how many you can convert each day and ask you to sign up or pay. We wanted a tool without any of that.',
          `${SITE.name} reads text from images, screenshots and PDFs directly in your browser. Your files are never uploaded, so there is nothing to limit and nothing to store.`,
        ],
      },
      {
        h2: 'What you can do here',
        list: [
          '<a href="/">Image to Text</a> — copy text out of photos and screenshots.',
          '<a href="/jpg-to-word">JPG to Word</a> — turn images into editable Word documents.',
          '<a href="/jpg-to-excel">JPG to Excel</a> — rebuild tables from images as spreadsheets.',
          '<a href="/image-to-pdf">Image to PDF</a> — combine images into one PDF.',
          '<a href="/text-to-pdf">Text to PDF</a> — turn plain text into a clean PDF.',
          '<a href="/pdf-to-text">PDF to Text</a> — extract text from digital and scanned PDFs.',
        ],
      },
      {
        h2: 'How it works',
        paragraphs: [
          'The tools use open-source technology, including the Tesseract OCR engine compiled to run in web browsers. The engine and language files are downloaded once and cached, after which your own device does all the work.',
        ],
      },
    ],
  },
  contact: {
    title: `Contact ${SITE.name}`,
    description: `Get in touch with the ${SITE.name} team about feedback, bugs or partnerships.`,
    h1: 'Contact us',
    sections: [
      {
        h2: 'We would love to hear from you',
        paragraphs: [
          `Found a bug, have an idea for a new feature, or want to report text that was recognised badly? Email us at <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`,
          'When reporting a recognition problem, please describe the image rather than sending private documents. We read every message and usually reply within a few days.',
        ],
      },
    ],
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    description: `How ${SITE.name} handles your data: files are processed in your browser and never uploaded.`,
    h1: 'Privacy Policy',
    updated: '29 October 2026',
    sections: [
      {
        h2: 'The short version',
        paragraphs: [
          `${SITE.name} processes your images, PDFs and text <strong>inside your web browser</strong>. Your files and the text found in them are not uploaded to our servers or to anyone else's.`,
        ],
      },
      {
        h2: 'Files you add',
        paragraphs: [
          'When you add a file, it is read by code running on your device. Text recognition, document creation and downloads all happen locally. We never receive, see or store your files or their contents.',
          'If you close or reload the page, the files and results are gone, unless you saved them yourself.',
        ],
      },
      {
        h2: 'Files your browser downloads',
        paragraphs: [
          'To read text, your browser downloads the OCR engine and language data from the public content delivery network jsDelivr (cdn.jsdelivr.net) the first time they are needed. When you create a PDF from text in scripts such as Japanese, Korean, Chinese or Cyrillic, it also downloads the matching font files from the same network. Like any website, that network receives standard request information such as your IP address and browser type. It does not receive your files or your text.',
        ],
      },
      {
        h2: 'Preferences stored on your device',
        paragraphs: [
          'We store a few settings, such as dark mode, in your browser’s local storage so they are remembered next time. They never leave your device and you can clear them in your browser settings.',
        ],
      },
      {
        h2: 'Hosting and logs',
        paragraphs: [
          'The website is hosted on Cloudflare. Cloudflare processes standard request data (such as IP addresses) to deliver pages and protect the site from abuse.',
        ],
      },
      {
        h2: 'Advertising and analytics',
        paragraphs: [
          'The site does not currently show ads or use analytics cookies. If we add advertising (such as Google AdSense) or analytics in the future, we will update this policy first and, where required by law, ask for your consent.',
        ],
      },
      {
        h2: 'Contact',
        paragraphs: [`Questions about privacy? Email <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`],
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    description: `The terms that apply when you use ${SITE.name}.`,
    h1: 'Terms of Use',
    updated: '28 October 2026',
    sections: [
      {
        h2: 'Using the tools',
        paragraphs: [
          `${SITE.name} is free to use for personal and commercial purposes. You are responsible for the files you process and for having the right to use them.`,
        ],
      },
      {
        h2: 'No guarantee of accuracy',
        paragraphs: [
          'Text recognition is never perfect. Always check the results before relying on them, especially for legal, medical or financial documents. The tools are provided “as is”, without any warranty.',
        ],
      },
      {
        h2: 'Limitation of liability',
        paragraphs: [
          'To the extent permitted by law, we are not liable for any loss or damage arising from the use of the website or its results.',
        ],
      },
      {
        h2: 'Changes',
        paragraphs: ['We may update these terms from time to time. The date at the top shows when they last changed.'],
      },
    ],
  },
};

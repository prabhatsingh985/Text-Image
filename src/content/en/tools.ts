import type { ToolContent } from '../types';
import type { ToolId } from '../../i18n/routes';

export const tools: Record<ToolId, ToolContent> = {
  'image-to-text': {
    title: 'Image to Text Converter – Free, Unlimited OCR Online',
    description:
      'Extract text from images, photos and screenshots for free. Unlimited OCR in your browser: no signup, no daily limit, and your files never leave your device.',
    h1: 'Image to Text Converter',
    lead: 'Extract text from JPG, PNG, screenshots and photos. Copy it or download it.',
    navLabel: 'Image to Text',
    cardText: 'Copy text out of photos, screenshots and scans.',
    howTo: {
      title: 'How to convert an image to text',
      steps: [
        '<strong>Add your images.</strong> Drag them into the box, click “Choose files”, take a photo on your phone, or simply paste a screenshot with Ctrl+V.',
        '<strong>Let it read.</strong> The language is detected automatically — English, Hindi, Arabic, Japanese, Chinese and 40+ more. Nothing to set.',
        '<strong>Copy or download the text.</strong> Edit it right in the box, copy one line by clicking it on the image, or download everything as a TXT or ZIP file.',
      ],
    },
    features: {
      title: 'Why people use this image to text converter',
      items: [
        { title: 'Truly unlimited', text: 'No daily cap, no credits and no captcha. Convert one image or a hundred — it stays free.' },
        { title: 'Private by design', text: 'Text recognition runs inside your browser. Your images are never uploaded to any server.' },
        { title: 'Batch conversion', text: 'Drop many images at once. They are processed in parallel and you can download all results as one ZIP file.' },
        { title: 'Click-to-copy lines', text: 'Every line found is outlined on your image. Click a line to copy just that line.' },
        { title: 'Spots doubtful words', text: 'Words the engine is unsure about are outlined in amber, so you know exactly what to double-check.' },
        { title: 'Works with phone photos', text: 'Upload HEIC photos from an iPhone, or take a picture straight from your phone camera.' },
      ],
    },
    sections: [
      {
        h2: 'Extract text from images without typing it again',
        paragraphs: [
          'Retyping text from a picture is slow and full of mistakes. This free image to text converter uses OCR (optical character recognition) to find every letter in your image and turn it into real, editable text that you can copy, search and paste anywhere — into an email, a document, a spreadsheet or a chat.',
          'It works with the kinds of images people actually have: screenshots of apps and websites, photos of book pages and notices, scanned documents, receipts, slides from a lecture and pictures of whiteboards. Upload a JPG, PNG, WEBP, GIF, BMP, TIFF or iPhone HEIC file and the text appears in a few seconds.',
        ],
      },
      {
        h2: 'Your images stay on your device',
        paragraphs: [
          'Most online OCR tools upload your file to their server, keep it for a while and limit how many images you can convert per day, because every conversion costs them money. This tool works differently: the OCR engine is downloaded once into your browser and does all the work on your own computer or phone.',
          'That means your ID cards, bank statements, contracts and private notes are never sent anywhere. It also means there is nothing to limit — convert as many images as you like, as often as you like. After the first visit, the engine is cached, so later conversions start even faster.',
        ],
      },
      {
        h2: 'Tips for the most accurate results',
        list: [
          'Use a sharp, well-lit photo. Blurry or very dark pictures are the most common cause of mistakes.',
          'Hold the camera straight above the page. Small tilts are corrected automatically, but strong angles make letters harder to read.',
          'Crop away busy backgrounds before uploading if only part of the image contains text.',
          'Faded scans and photos taken in poor light are cleaned up automatically when the first read is unsure.',
          'Printed text works best. Neat handwriting can work, but messy handwriting is still hard for any OCR engine.',
        ],
      },
      {
        h2: 'Need Word, Excel or PDF instead of plain text?',
        paragraphs: [
          'If you want to keep paragraphs and headings, use the <a href="/jpg-to-word">JPG to Word converter</a>. For tables, the <a href="/jpg-to-excel">image to Excel converter</a> rebuilds rows and columns in a spreadsheet. To pull text out of a scanned document, use <a href="/pdf-to-text">PDF to Text</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Is this image to text converter really free?', a: 'Yes. There is no paid plan, no signup, no watermark and no daily limit.' },
      { q: 'Are my images uploaded anywhere?', a: 'No. The OCR engine runs in your browser, so your images and the text found in them stay on your device. Only the engine and language files are downloaded from a public CDN the first time you use a language.' },
      { q: 'Which image formats are supported?', a: 'JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF and HEIC (iPhone photos). For PDF files, use the PDF to Text tool.' },
      { q: 'Which languages can it read?', a: 'More than 40, including English, Spanish, Portuguese, French, German, Italian, Russian, Arabic, Hindi, Bengali, Urdu, Tamil, Thai, Japanese, Korean and Chinese. You do not need to pick one: the language is detected automatically from the image.' },
      { q: 'Can it read handwriting?', a: 'Clear, neat handwriting often works, but results vary. The tool is most accurate with printed or on-screen text.' },
      { q: 'How many images can I convert at once?', a: 'As many as your device can handle. Images are processed a few at a time, and you can download all results together as a ZIP file.' },
    ],
  },

  'jpg-to-word': {
    title: 'JPG to Word Converter – Convert Image to Word Free',
    description:
      'Convert JPG and other images to an editable Word document (.docx) for free. Keeps paragraphs and headings. Unlimited, no signup, files stay on your device.',
    h1: 'JPG to Word Converter',
    lead: 'Convert photos and scans into an editable Word file.',
    navLabel: 'JPG to Word',
    cardText: 'Turn images into editable .docx documents.',
    howTo: {
      title: 'How to convert JPG to Word',
      steps: [
        '<strong>Upload your images.</strong> Drop JPG, PNG, HEIC or other image files into the box, paste a screenshot, or take a photo.',
        '<strong>Check the text.</strong> Each image is read in your browser. Fix any word right in the text box if you need to.',
        '<strong>Download your Word file.</strong> Save each image as its own .docx, or combine all images into one Word document with one page per image.',
      ],
    },
    features: {
      title: 'A JPG to Word converter that keeps your layout',
      items: [
        { title: 'Paragraphs stay together', text: 'Lines that belong to the same paragraph are joined, so you do not have to fix line breaks by hand.' },
        { title: 'Headings are detected', text: 'Larger text becomes a real Word heading, ready for a table of contents.' },
        { title: 'Lists are recognised', text: 'Bullet points become a proper Word list instead of loose symbols.' },
        { title: 'Many images, one document', text: 'Combine a whole stack of photographed pages into a single .docx file.' },
        { title: 'Tables (beta)', text: 'Pages laid out as a table are rebuilt as a real Word table automatically.' },
        { title: 'Private and unlimited', text: 'Everything runs in your browser. No uploads, no limits, no account.' },
      ],
    },
    sections: [
      {
        h2: 'Convert an image to an editable Word document',
        paragraphs: [
          'A photo of a page is just pixels — you cannot edit, search or reuse the words in it. This JPG to Word converter reads the text with OCR and rebuilds it as a real Word document (.docx) that opens in Microsoft Word, Google Docs, LibreOffice and Pages.',
          'Instead of dumping every line into one block, the converter looks at the shape of the page. Lines that form a paragraph are joined, bigger lines become headings, centred titles stay centred and bullet points become a list. You get a document you can start editing straight away.',
        ],
      },
      {
        h2: 'Works with any image, not only JPG',
        paragraphs: [
          'Despite the name, you can convert PNG, WEBP, GIF, BMP, TIFF and iPhone HEIC images to Word as well. Screenshots, scanned pages, photographed notes, letters, forms and printed handouts all work.',
          'Have a stack of pages? Drop them all in at once and choose “All in one Word file”. Each image becomes its own page in the same document, in the order you added them.',
        ],
      },
      {
        h2: 'Why your documents stay private',
        paragraphs: [
          'Many converters upload your files to a server and limit free use. Here, the text recognition runs on your own device, inside your browser. Contracts, certificates and personal letters are never sent anywhere, and there is no limit on how many pages you convert.',
        ],
      },
      {
        h2: 'Getting the best Word document',
        list: [
          'Photograph the page from directly above, in good light, and fill the frame with the page.',
          'Use one image per page so the Word document keeps the same page breaks.',
          'Bold, italic and exact fonts are not copied — the converter focuses on the text and its structure.',
        ],
      },
    ],
    faq: [
      { q: 'Is the JPG to Word converter free?', a: 'Yes, completely. There is no signup, no watermark and no limit on the number of images.' },
      { q: 'Will the Word file keep my formatting?', a: 'It keeps the structure: paragraphs, headings, centred lines, bullet lists and simple tables. Fonts, colours, bold and italic are not copied.' },
      { q: 'Can I combine several images into one Word document?', a: 'Yes. Upload all the images and click “All in one Word file”. Each image becomes a page in one .docx.' },
      { q: 'Does it work with PNG or iPhone photos?', a: 'Yes. PNG, WEBP, GIF, BMP, TIFF and HEIC images work as well as JPG.' },
      { q: 'Are my files uploaded?', a: 'No. Recognition and document creation both happen in your browser. Your images never leave your device.' },
      { q: 'Which programs can open the file?', a: 'The .docx file opens in Microsoft Word, Google Docs, LibreOffice Writer, Apple Pages and most other word processors.' },
    ],
  },

  'jpg-to-excel': {
    title: 'Image to Excel Converter – JPG Table to Excel Free',
    description:
      'Convert a photo or screenshot of a table into an editable Excel spreadsheet (.xlsx) or CSV. Free and unlimited, no signup, and your images stay on your device.',
    h1: 'Image to Excel Converter',
    lead: 'Turn a photo of a table into an editable Excel sheet.',
    navLabel: 'JPG to Excel',
    cardText: 'Rebuild tables from images as .xlsx or CSV.',
    howTo: {
      title: 'How to convert an image to Excel',
      steps: [
        '<strong>Add a picture of a table.</strong> Upload a JPG, PNG or phone photo, or paste a screenshot with Ctrl+V.',
        '<strong>Review the table.</strong> The tool finds the rows and columns and shows them in a grid. Click any cell to correct it.',
        '<strong>Download Excel or CSV.</strong> Save an .xlsx file, a CSV file, or put several images into one workbook with a sheet for each.',
      ],
    },
    features: {
      title: 'What the image to Excel converter does for you',
      items: [
        { title: 'Finds rows and columns', text: 'Text is grouped into rows and columns by its position, even when the table has no lines.' },
        { title: 'Numbers stay numbers', text: 'Values such as 1,250.50 are saved as real numbers, so Excel formulas work immediately.' },
        { title: 'Edit before you export', text: 'Fix a cell in the preview grid and the change goes straight into your file.' },
        { title: 'Excel or CSV', text: 'Download .xlsx for Excel and Google Sheets, or CSV for any other program.' },
        { title: 'Many tables, one workbook', text: 'Convert several images and get one workbook with a separate sheet for each.' },
        { title: 'Private and unlimited', text: 'Everything happens in your browser — no uploads and no daily limit.' },
      ],
    },
    sections: [
      {
        h2: 'Stop copying tables by hand',
        paragraphs: [
          'Typing a printed price list, a bank statement or a table from a report into a spreadsheet takes ages and invites errors. This image to Excel converter reads the text in your picture, works out which words belong to which row and column, and gives you a ready-made spreadsheet.',
          'It works with screenshots of tables from websites and PDFs, photos of printed sheets, timetables, invoices, receipts with item lists and simple forms. Because you see the result in a grid before downloading, you can correct anything the OCR misread.',
        ],
      },
      {
        h2: 'How tables are rebuilt',
        paragraphs: [
          'First, every word in the image is located. Words that sit on the same horizontal line are grouped into a row. The tool then looks for vertical gaps that run down the whole table — those gaps are the borders between columns. Each word is placed in the cell where it belongs, and numbers are converted so Excel can calculate with them.',
          'Clean, printed tables give the best results. Tables photographed at a strong angle, with merged cells or with handwriting may need a few manual fixes in the preview grid.',
        ],
      },
      {
        h2: 'Tips for better spreadsheets',
        list: [
          'Crop the image to the table only, without surrounding text.',
          'Make sure the photo is straight and evenly lit.',
          'For very long tables, use several screenshots — each becomes its own sheet.',
          'Check columns with currency symbols or units; they are kept as text so nothing is lost.',
        ],
      },
    ],
    faq: [
      { q: 'Is the image to Excel converter free?', a: 'Yes. There is no signup, no watermark and no limit on how many tables you convert.' },
      { q: 'Does the table need visible lines?', a: 'No. Columns are found from the spacing between words, so tables without borders work too.' },
      { q: 'Can I edit the table before downloading?', a: 'Yes. Click any cell in the preview grid to change it. Your edits are included in the file.' },
      { q: 'Will numbers work in Excel formulas?', a: 'Plain numbers such as 42, 1,250 or 3.75 are saved as numbers. Values with currency symbols or units are kept as text.' },
      { q: 'Can I open the file in Google Sheets?', a: 'Yes. Upload the .xlsx file to Google Drive or import the CSV file into Google Sheets.' },
      { q: 'Are my images uploaded?', a: 'No. All processing happens in your browser, and your images never leave your device.' },
    ],
  },

  'image-to-pdf': {
    title: 'Image to PDF Converter – JPG to PDF Free, No Limits',
    description:
      'Combine JPG, PNG, HEIC and other images into one PDF. Reorder pages, choose A4 or Letter, add margins. Free, unlimited, and files stay on your device.',
    h1: 'Image to PDF Converter',
    lead: 'Combine JPG, PNG and HEIC images into one PDF.',
    navLabel: 'Image to PDF',
    cardText: 'Combine images into one PDF file.',
    howTo: {
      title: 'How to convert images to PDF',
      steps: [
        '<strong>Add your images.</strong> Drop them in, click “Choose files”, take photos or paste a screenshot.',
        '<strong>Arrange the pages.</strong> Drag images into the right order or use the arrow buttons, then pick page size, orientation and margins.',
        '<strong>Create the PDF.</strong> Click “Create PDF” and your file downloads straight away.',
      ],
    },
    features: {
      title: 'Everything you need to make a PDF from images',
      items: [
        { title: 'Any image format', text: 'JPG, PNG, WEBP, GIF, BMP and iPhone HEIC photos all work.' },
        { title: 'Drag to reorder', text: 'Put pages in the right order with drag and drop or the arrow buttons.' },
        { title: 'A4, Letter or fit', text: 'Use standard paper sizes or make each page exactly the size of its image.' },
        { title: 'Margins and orientation', text: 'Add white margins and choose portrait, landscape or automatic orientation.' },
        { title: 'Smaller files', text: 'Turn on compression to shrink large phone photos for email.' },
        { title: 'Private and unlimited', text: 'The PDF is built in your browser. No uploads, no watermark, no limits.' },
      ],
    },
    sections: [
      {
        h2: 'Turn photos into one tidy PDF',
        paragraphs: [
          'Schools, offices and online forms often ask for a single PDF, but your documents are a set of photos on your phone. This image to PDF converter puts them together into one PDF file, one image per page, in the order you choose.',
          'Use it for scanned homework, signed forms, receipts for an expense claim, ID documents for an application or a quick photo album. Because the PDF is created on your own device, it is fast and private.',
        ],
      },
      {
        h2: 'Choosing the right settings',
        list: [
          '<strong>A4</strong> is the standard paper size in most of the world; <strong>Letter</strong> is used in the US and Canada.',
          '<strong>Fit to image</strong> makes each page the exact size of its picture, with no white space.',
          '<strong>Auto orientation</strong> turns each page to match its image, so wide pictures get landscape pages.',
          '<strong>Smaller file</strong> reduces the size of big phone photos, which helps when an upload form has a size limit.',
        ],
      },
      {
        h2: 'Need the text too?',
        paragraphs: [
          'A PDF made from photos contains pictures of text, not text you can search. To get editable text, use the <a href="/">image to text converter</a> or the <a href="/jpg-to-word">JPG to Word converter</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Is the image to PDF converter free?', a: 'Yes. No signup, no watermark and no limit on the number of images or PDFs.' },
      { q: 'Can I change the order of the pages?', a: 'Yes. Drag the images into a new order, or use the up and down arrows on each image.' },
      { q: 'Does it work with iPhone photos?', a: 'Yes. HEIC photos are converted automatically, along with JPG, PNG, WEBP, GIF and BMP.' },
      { q: 'How do I make the PDF smaller?', a: 'Turn on “Smaller file” before creating the PDF. Large photos are resized and compressed.' },
      { q: 'Are my images uploaded?', a: 'No. The PDF is created in your browser and your images stay on your device.' },
    ],
  },

  'text-to-pdf': {
    title: 'Text to PDF Converter – Free, Online, No Signup',
    description:
      'Convert plain text or a .txt file to a clean PDF. Choose font, size, page size and margins. Free and unlimited, and your text never leaves your device.',
    h1: 'Text to PDF Converter',
    lead: 'Paste text or open a .txt file. Download it as a PDF.',
    navLabel: 'Text to PDF',
    cardText: 'Turn plain text into a clean PDF.',
    howTo: {
      title: 'How to convert text to PDF',
      steps: [
        '<strong>Add your text.</strong> Type or paste it into the box, or open a .txt file.',
        '<strong>Choose the layout.</strong> Pick a font, font size, page size and margins.',
        '<strong>Download the PDF.</strong> Click “Create PDF” and the file is saved instantly.',
      ],
    },
    features: {
      title: 'Simple text to PDF, done right',
      items: [
        { title: 'Clean typography', text: 'Choose a sans-serif, serif or monospace font and the size you need.' },
        { title: 'Automatic line wrapping', text: 'Long lines wrap neatly and new pages are added automatically.' },
        { title: 'Open .txt files', text: 'Load a text file from your device instead of pasting.' },
        { title: 'A4 or Letter', text: 'Use the paper size that matches your printer or form.' },
        { title: 'Keeps your line breaks', text: 'Empty lines and line breaks in your text stay exactly where they are.' },
        { title: 'Private', text: 'The PDF is created in your browser. Your text is never sent anywhere.' },
      ],
    },
    sections: [
      {
        h2: 'Make a PDF from plain text in seconds',
        paragraphs: [
          'Plain text files look different on every device, and some upload forms only accept PDF. This text to PDF converter turns your text into a properly formatted PDF that looks the same everywhere and prints cleanly.',
          'It is handy for notes, code snippets, logs, letters, transcripts and text you extracted with the <a href="/">image to text converter</a>.',
        ],
      },
      {
        h2: 'Supported characters',
        paragraphs: [
          'The current version supports English and other languages written with the basic Latin alphabet and common accents. Support for scripts such as Cyrillic, Arabic, Thai, Japanese and Korean is coming soon. If your text contains characters that cannot be shown yet, the tool tells you before you download.',
        ],
      },
    ],
    faq: [
      { q: 'Is the text to PDF converter free?', a: 'Yes. It is free, unlimited and needs no account.' },
      { q: 'Can I upload a .txt file?', a: 'Yes. Click “Open .txt file” to load text from your device.' },
      { q: 'Will my line breaks be kept?', a: 'Yes. Every line break and empty line in your text is kept in the PDF.' },
      { q: 'Is my text uploaded?', a: 'No. The PDF is generated in your browser and your text stays on your device.' },
    ],
  },

  'pdf-to-text': {
    title: 'PDF to Text Converter – Extract Text from Scanned PDF',
    description:
      'Extract text from any PDF, including scanned PDFs, for free. Digital pages are read instantly and scanned pages with OCR. Unlimited and fully private.',
    h1: 'PDF to Text Converter',
    lead: 'Extract text from any PDF, including scanned pages.',
    navLabel: 'PDF to Text',
    cardText: 'Extract text from digital and scanned PDFs.',
    howTo: {
      title: 'How to extract text from a PDF',
      steps: [
        '<strong>Add your PDF.</strong> Drop the file into the box or click “Choose PDF”.',
        '<strong>Let it read.</strong> Every page is read. Digital pages are copied instantly; scanned pages go through OCR in whatever language they are written in — detected automatically.',
        '<strong>Copy or download.</strong> Copy the text, or download it as a TXT file.',
      ],
    },
    features: {
      title: 'Smart PDF text extraction',
      items: [
        { title: 'Instant for digital PDFs', text: 'If a page already contains text, it is extracted directly — no waiting and no OCR mistakes.' },
        { title: 'OCR for scanned pages', text: 'Pages that are only images are read with OCR automatically.' },
        { title: 'Nothing to set', text: 'No options, no language to pick. Drop the PDF and the text comes out.' },
        { title: 'Automatic language', text: 'Scanned pages in 40+ languages are read without you choosing anything — the language is detected for you.' },
        { title: 'No size limit', text: 'Long PDFs are processed page by page on your device.' },
        { title: 'Private', text: 'Your PDF is never uploaded. Everything happens in your browser.' },
      ],
    },
    sections: [
      {
        h2: 'Extract text from scanned and digital PDFs',
        paragraphs: [
          'Some PDFs contain real text; others are just pictures of pages made by a scanner or a phone app. This PDF to text converter checks each page: where text is already there, it is copied out exactly; where the page is only an image, OCR reads it for you.',
          'Use it to reuse text from reports, quote from scanned books, search old documents or move content from a PDF into a document or email.',
        ],
      },
      {
        h2: 'Keep your documents private',
        paragraphs: [
          'Contracts, statements and records often contain personal information. Because this converter runs in your browser, the PDF never leaves your device and nothing is stored online.',
        ],
      },
      {
        h2: 'Want an editable document instead?',
        paragraphs: [
          'If you have images of pages rather than a PDF, the <a href="/jpg-to-word">JPG to Word converter</a> gives you a formatted .docx file. For tables, try the <a href="/jpg-to-excel">image to Excel converter</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Can it extract text from a scanned PDF?', a: 'Yes. Pages without a text layer are read with OCR automatically.' },
      { q: 'Is there a page or size limit?', a: 'No fixed limit. Very long scanned PDFs take longer because each page is read on your device.' },
      { q: 'Is the PDF uploaded?', a: 'No. The file is opened and processed in your browser and never leaves your device.' },
      { q: 'Does it work with password-protected PDFs?', a: 'Not yet. Remove the password first, then open the file here.' },
    ],
  },
  'screenshot-to-text': {
    title: 'Screenshot to Text – Copy Text from Any Screenshot Free',
    description:
      'Paste a screenshot with Ctrl+V and copy the text in seconds. Free, unlimited screenshot OCR in your browser — nothing is uploaded and no signup needed.',
    h1: 'Screenshot to Text',
    lead: 'Paste a screenshot with Ctrl+V and copy the text.',
    navLabel: 'Screenshot to Text',
    cardText: 'Paste a screenshot and copy its text instantly.',
    howTo: {
      title: 'How to copy text from a screenshot',
      steps: [
        '<strong>Take a screenshot.</strong> Press Win+Shift+S on Windows, Cmd+Shift+4 on Mac, or use your phone’s screenshot buttons.',
        '<strong>Paste it here.</strong> Press Ctrl+V (Cmd+V on Mac) anywhere on this page, or drop the saved image into the box.',
        '<strong>Copy the text.</strong> Edit it in the box, click a single line on the image to copy just that line, or download a TXT file.',
      ],
    },
    features: {
      title: 'Built for screenshots',
      items: [
        { title: 'Paste, don’t upload', text: 'Straight from the clipboard with Ctrl+V. No need to save the screenshot as a file first.' },
        { title: 'Sharp on screen text', text: 'Screen text is clean and high-contrast, so results are usually near-perfect.' },
        { title: 'Copy one line', text: 'Every line is outlined on your screenshot. Click it to copy only that line.' },
        { title: 'Many at once', text: 'Paste or drop several screenshots in a row and download all the text as one ZIP.' },
        { title: 'Detects the language', text: 'Hindi, Arabic, Chinese, Japanese, Russian and 40+ more — recognised automatically, nothing to set.' },
        { title: 'Stays on your device', text: 'Chats and error logs can be private. Your screenshot is never sent to a server.' },
      ],
    },
    sections: [
      {
        h2: 'Why convert a screenshot to text?',
        paragraphs: [
          'Plenty of text can be seen but not selected: an error dialog, a frame of a video, a slide in a meeting, a message in an app that blocks copying, or a website that turns text into images. A screenshot captures it; this tool turns it back into text you can paste anywhere.',
          'Developers use it to copy error messages and stack traces, students to grab text from lecture slides, and support teams to quote from customer screenshots.',
        ],
      },
      {
        h2: 'Tips for the best results',
        list: [
          'Capture only the part you need. Less clutter means cleaner text.',
          'Zoom in before you take the screenshot if the text is very small.',
        ],
      },
      {
        h2: 'Have a photo instead?',
        paragraphs: [
          'For phone photos of paper documents, the <a href="/">image to text converter</a> cleans up dim or faded photos automatically. To keep layout and headings, use <a href="/jpg-to-word">JPG to Word</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I paste a screenshot?', a: 'Take the screenshot so it is on your clipboard, then press Ctrl+V (Cmd+V on Mac) anywhere on this page. It starts reading straight away.' },
      { q: 'Does it work on my phone?', a: 'Yes. Tap “Choose files” and pick the screenshot from your gallery.' },
      { q: 'Is my screenshot uploaded?', a: 'No. Text recognition runs inside your browser, so the image never leaves your device.' },
      { q: 'Can it read code from a screenshot?', a: 'Yes. Code, error messages and logs read well. Indentation may be simplified, so check it before pasting into an editor.' },
    ],
  },
  'pdf-to-excel': {
    title: 'PDF to Excel Converter – Free, Works with Scanned PDFs',
    description:
      'Convert PDF tables to an editable Excel spreadsheet for free. Digital and scanned PDFs, one sheet per page, no signup — files never leave your device.',
    h1: 'PDF to Excel Converter',
    lead: 'Convert tables in a PDF into an editable Excel file.',
    navLabel: 'PDF to Excel',
    cardText: 'Turn PDF tables into an editable spreadsheet.',
    howTo: {
      title: 'How to convert a PDF to Excel',
      steps: [
        '<strong>Add your PDF.</strong> Drop it into the box or click “Choose PDF”. Every page is read automatically.',
        '<strong>Check the tables.</strong> Each page appears as a table. Click any cell to fix it before downloading.',
        '<strong>Download Excel.</strong> Get an .xlsx file with one sheet per page, or a CSV.',
      ],
    },
    features: {
      title: 'PDF tables, ready for Excel',
      items: [
        { title: 'Digital PDFs read exactly', text: 'When the PDF has a text layer, numbers are taken straight from it — no OCR guesswork.' },
        { title: 'Scanned PDFs too', text: 'Pages that are only images are read with OCR, then split into rows and columns.' },
        { title: 'Real numbers', text: 'Values like 1,250.50 become numbers in Excel, so SUM and charts work immediately.' },
        { title: 'Edit before you export', text: 'Fix any cell right in the preview table before you download.' },
        { title: 'One sheet per page', text: 'Each page lands on its own sheet, so long PDFs stay easy to navigate.' },
        { title: 'Private', text: 'Bank statements stay on your device. The PDF is never uploaded.' },
      ],
    },
    sections: [
      {
        h2: 'Convert bank statements, invoices and reports',
        paragraphs: [
          'Copying a table out of a PDF usually gives you one long jumbled line. This converter looks at where each word sits on the page, finds the rows and the column gaps, and rebuilds the table cell by cell.',
          'It works best on tables with clear columns, such as bank statements, invoices, price lists, timetables and financial reports.',
        ],
      },
      {
        h2: 'Scanned PDF to Excel',
        paragraphs: [
          'Scanned pages have no text inside them — just a picture. For those pages the tool runs OCR first, detecting the language automatically, and then finds the table. Check numbers carefully on low-quality scans.',
        ],
      },
      {
        h2: 'Have a photo of a table?',
        paragraphs: [
          'Use the <a href="/jpg-to-excel">image to Excel converter</a> for photos and screenshots of tables. For plain text, try <a href="/pdf-to-text">PDF to Text</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Can I convert a scanned PDF to Excel?', a: 'Yes. Pages without a text layer are read with OCR and then split into rows and columns.' },
      { q: 'Will numbers be real numbers in Excel?', a: 'Yes. Plain values such as 1,250.50 become numbers. Values with letters, currency signs or leading zeros stay as text so nothing is lost.' },
      { q: 'Is the PDF uploaded to a server?', a: 'No. The file is opened and converted in your browser and never leaves your device.' },
      { q: 'Does it support password-protected PDFs?', a: 'Not yet. Remove the password first, then open the file here.' },
    ],
  },
  'word-to-text': {
    title: 'Word to Text Converter – DOCX to TXT Free Online',
    description:
      'Convert Word documents (DOCX, ODT, RTF) to plain text for free. Instant, unlimited and private — your files are read in your browser, never uploaded.',
    h1: 'Word to Text Converter',
    lead: 'Get plain text from DOCX, ODT and RTF files.',
    navLabel: 'Word to Text',
    cardText: 'Get plain text out of DOCX, ODT and RTF files.',
    howTo: {
      title: 'How to convert Word to text',
      steps: [
        '<strong>Add your documents.</strong> Drop one or many .docx, .odt or .rtf files into the box.',
        '<strong>Review the text.</strong> Paragraphs, lists and tables are kept in order. Edit anything right in the box.',
        '<strong>Copy or download.</strong> Copy the text, save a TXT file, or download all files as a ZIP.',
      ],
    },
    features: {
      title: 'Clean text, no formatting baggage',
      items: [
        { title: 'Instant', text: 'No OCR needed — text is read straight from the file, so even long documents take a second.' },
        { title: 'Keeps the structure', text: 'Paragraphs stay paragraphs, list items get bullets and table rows become tab-separated lines.' },
        { title: 'DOCX, ODT and RTF', text: 'Works with Microsoft Word, Google Docs exports, LibreOffice and WordPad files.' },
        { title: 'Batch convert', text: 'Drop dozens of documents at once and download every TXT in one ZIP.' },
        { title: 'Skips the clutter', text: 'Deleted tracked changes, field codes and hidden markup are left out.' },
        { title: 'Private', text: 'Documents are opened in your browser. Nothing is uploaded or stored.' },
      ],
    },
    sections: [
      {
        h2: 'Why convert a Word document to plain text?',
        paragraphs: [
          'Plain text pastes cleanly into code, CMS editors, emails, AI tools and spreadsheets without bringing fonts, colours and hidden formatting along. It is also the safest format for archiving and for counting words.',
        ],
      },
      {
        h2: 'Old .doc files',
        paragraphs: [
          'The old binary .doc format (Word 97–2003) is not supported. Open the file in Word, Google Docs or LibreOffice and save it as .docx, then convert it here.',
        ],
      },
      {
        h2: 'Only have a scan or photo of the document?',
        paragraphs: [
          'Use the <a href="/">image to text converter</a> for photos and the <a href="/pdf-to-text">PDF to text converter</a> for scanned PDFs.',
        ],
      },
    ],
    faq: [
      { q: 'Which formats are supported?', a: 'DOCX, DOCM and DOTX from Microsoft Word, ODT from LibreOffice and OpenOffice, and RTF. Old .doc files need to be saved as .docx first.' },
      { q: 'Are tables kept?', a: 'Yes. Each table row becomes one line, with cells separated by tabs, so you can paste it into a spreadsheet.' },
      { q: 'Is my document uploaded?', a: 'No. The file is read in your browser and never leaves your device.' },
      { q: 'Is text inside images converted?', a: 'No. Only real text is extracted. For text inside pictures, use the image to text converter.' },
    ],
  },
  'ppt-to-text': {
    title: 'PPT to Text – Extract Text from PowerPoint Slides Free',
    description:
      'Extract all text from PowerPoint slides (PPTX, ODP), including speaker notes. Free, unlimited and private — files never leave your device.',
    h1: 'PPT to Text Converter',
    lead: 'Extract text and speaker notes from PowerPoint slides.',
    navLabel: 'PPT to Text',
    cardText: 'Extract slide text and speaker notes from PPTX.',
    howTo: {
      title: 'How to extract text from PowerPoint',
      steps: [
        '<strong>Add your presentation.</strong> Drop one or more .pptx or .odp files into the box.',
        '<strong>Get every slide.</strong> Text comes out slide by slide with slide numbers, and speaker notes are added below each slide automatically.',
        '<strong>Copy or download.</strong> Copy the text, save it as TXT, or download several presentations as a ZIP.',
      ],
    },
    features: {
      title: 'Every slide, in order',
      items: [
        { title: 'Slide order kept', text: 'Text follows the real order of your slides, even if they were rearranged.' },
        { title: 'Speaker notes', text: 'Presenter notes are included under each slide automatically.' },
        { title: 'Tables and bullets', text: 'Bullet points keep their bullets and table rows become tab-separated lines.' },
        { title: 'Instant', text: 'No OCR — the text is read straight from the file in a second.' },
        { title: 'Batch convert', text: 'Convert a whole folder of decks at once and download one ZIP.' },
        { title: 'Private', text: 'Presentations are read in your browser and never uploaded.' },
      ],
    },
    sections: [
      {
        h2: 'What people use it for',
        list: [
          'Turning lecture slides into study notes.',
          'Reusing a deck’s content in a report, blog post or email.',
          'Pasting slide text into a translator, a grammar checker or an AI assistant.',
          'Pulling the speaker notes out as a script for a talk or video.',
        ],
      },
      {
        h2: 'Old .ppt files',
        paragraphs: [
          'The old binary .ppt format (PowerPoint 97–2003) is not supported. Open the file in PowerPoint, Google Slides or LibreOffice Impress, save it as .pptx, and convert it here.',
        ],
      },
      {
        h2: 'Text inside slide pictures',
        paragraphs: [
          'Text that is part of an image on a slide cannot be extracted this way. Take a screenshot of the slide and use <a href="/screenshot-to-text">Screenshot to Text</a> instead.',
        ],
      },
    ],
    faq: [
      { q: 'Which formats are supported?', a: 'PPTX, PPTM, PPSX and POTX from PowerPoint, and ODP from LibreOffice Impress. Old .ppt files need to be saved as .pptx first.' },
      { q: 'Can I get the speaker notes?', a: 'Yes. If the presentation has notes, they appear below each slide’s text automatically.' },
      { q: 'Is my presentation uploaded?', a: 'No. Everything is read inside your browser and the file never leaves your device.' },
      { q: 'Does it work with Google Slides?', a: 'Yes. In Google Slides choose File → Download → Microsoft PowerPoint (.pptx), then open that file here.' },
    ],
  },
};

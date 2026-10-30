import type { ToolContent } from '../types';
import type { ToolId } from '../../i18n/routes';

export const tools: Record<ToolId, ToolContent> = {
  'image-to-text': {
    title: 'Image to Text Converter – Free, Unlimited OCR Online',
    description:
      'Convert image to text online free. Extract text from JPG, PNG, photos and screenshots. Unlimited OCR, no signup, and your files never leave your device.',
    h1: 'Image to Text Converter',
    lead: 'Convert image to text online, free. Extract text from JPG, PNG, screenshots and photos, then copy it or download it.',
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
        h2: 'A free image to text converter that works in your browser',
        paragraphs: [
          'Retyping text from a picture is slow and full of mistakes. This <strong>image to text converter</strong> does the typing for you. Upload a photo, a screenshot or a scanned page, and in a few seconds every word in it becomes real, editable text that you can copy, search, edit and paste anywhere — into an email, a document, a spreadsheet or a chat.',
          'Most tools that convert image to text online give you a few free conversions and then ask you to sign up or pay. This one does not. It is an <strong>image to text converter online free</strong> of limits: no account, no daily cap, no watermark and no captcha. Convert one picture or a hundred, today and every day, and it stays free.',
          'Students use it to copy notes from photos of the board, office workers use it to pull text out of scanned letters and invoices, and developers use it to grab error messages from screenshots. Whatever is in your image, if it contains text, this tool can read it.',
        ],
      },
      {
        h2: 'How OCR image to text works',
        paragraphs: [
          'The tool uses OCR, short for optical character recognition. OCR image to text software looks at the shapes in a picture, finds the areas that contain writing, splits them into lines and words, and then matches each shape to a letter using a trained recognition model. The result is plain text that a computer can work with, instead of pixels that it cannot.',
          'You do not have to tell the tool which language your image is in. It detects the script and language for every image on its own and reads more than 40 languages, including English, Spanish, French, German, Russian, Arabic, Hindi, Bengali, Urdu, Tamil, Thai, Japanese, Korean and Chinese. Right-to-left text such as Arabic and Urdu is shown in the correct direction.',
          'When the first read of an image looks uncertain — a faded scan, a photo taken in dim light — the tool automatically cleans up the image and reads it again. Words it is still unsure about are outlined in amber, so you know exactly which parts to double-check instead of proofreading everything.',
        ],
      },
      {
        h2: 'What you can turn into text',
        paragraphs: [
          'This image to text extractor handles the kinds of pictures people actually have on their phones and computers. Upload a JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF or iPhone HEIC file, and the text appears next to it. Popular uses include:',
        ],
        list: [
          'Screenshots of apps, websites, chats, error messages and social media posts.',
          'Photos of book pages, notices, posters, menus and product labels.',
          'Scanned letters, forms, certificates and other paper documents.',
          'Receipts and invoices you want to search or copy into a spreadsheet.',
          'Lecture slides and photos of whiteboards or class notes.',
          'Business cards, so you can paste names, numbers and emails straight into your contacts.',
        ],
      },
      {
        h2: 'Image to text copy and paste in one click',
        paragraphs: [
          'Getting the text out is just as important as reading it. After you convert image to text, the result appears in an editable box, so you can fix a word or delete a line before you copy it. Press <strong>Copy</strong> to put everything on your clipboard, or click any line outlined on the image to copy only that line — handy when you need a single phone number, address or code from a busy picture.',
          'Working with a batch? Use <strong>Copy all</strong> to grab the text from every image at once, download each result as a TXT file, or download all of them together in one ZIP file. If an image is sideways, rotate it with one click and it is read again the right way up.',
        ],
      },
      {
        h2: 'Your images stay on your device',
        paragraphs: [
          'A typical online image to text converter uploads your file to its server, keeps it for a while and limits how many images you can convert, because every conversion costs it money. This tool works differently: the OCR engine is downloaded once into your browser and does all the work on your own computer or phone.',
          'That means your ID cards, bank statements, contracts and private notes are never sent anywhere. It also means there is nothing to limit. After the first visit, the engine is cached, so later conversions start even faster.',
        ],
      },
      {
        h2: 'Convert image to text online on any device',
        paragraphs: [
          'There is nothing to install. The converter runs in any modern browser on Windows, Mac, Linux, Android and iPhone. On a phone you can take a picture with your camera and get the text right away, and iPhone HEIC photos are supported without converting them first. On a computer, just take a screenshot and paste it with Ctrl+V — no need to save it as a file.',
        ],
      },
      {
        h2: 'Tips for the most accurate results',
        list: [
          'Use a sharp, well-lit photo. Blurry or very dark pictures are the most common cause of mistakes.',
          'Hold the camera straight above the page. Small tilts are corrected automatically, but strong angles make letters harder to read.',
          'Crop away busy backgrounds before uploading if only part of the image contains text.',
          'Use the largest version of the image you have. Tiny text in a small, compressed picture is hard for any OCR engine to read.',
          'Printed text works best. Neat handwriting can work, but messy handwriting is still hard for any OCR engine.',
        ],
      },
      {
        h2: 'Need Word, Excel or PDF instead of plain text?',
        paragraphs: [
          'This image to text converter free tool gives you plain text. If you want to keep paragraphs and headings, use the <a href="/jpg-to-word">JPG to Word converter</a>. For tables, the <a href="/jpg-to-excel">JPG to Excel converter</a> rebuilds rows and columns in a spreadsheet. To pull text out of a scanned document, use <a href="/pdf-to-text">PDF to Text</a>, and for quick grabs from your screen, try <a href="/screenshot-to-text">Screenshot to Text</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How can I extract text from an image for free?', a: 'Open this free image to text converter, add your image and wait a few seconds. The text is extracted automatically and you can copy it or download it as a TXT file. There is no signup, no watermark and no daily limit, so you can extract text from as many images as you like.' },
      { q: 'How do I convert an image to text online?', a: 'Drag your image into the box at the top of this page, click “Choose files”, take a photo on your phone or paste a screenshot with Ctrl+V. The tool reads the image with OCR and shows the text next to it, ready to edit, copy or download.' },
      { q: 'How can I convert JPG to text?', a: 'Upload your JPG or JPEG file to this image to text converter. The text in the picture is recognized in a few seconds and appears in an editable box. Copy it with one click or download it as a TXT file. PNG, WEBP, GIF, BMP, TIFF and HEIC images work the same way.' },
      { q: 'How to copy text from image?', a: 'Convert the image to text with this tool, then press Copy to put all the text on your clipboard. To copy just one line, click that line where it is outlined on the image. With several images, Copy all grabs the text from every one of them at once.' },
      { q: 'How to scan text from image?', a: 'You do not need a scanner. Take a clear photo of the page with your phone, or upload an existing picture or screenshot. The OCR engine scans the image for letters and words and turns them into editable text. On a phone, you can use the camera button to photograph the page directly.' },
      { q: 'How to copy text from PDF images?', a: 'Use our free PDF to Text tool. It reads every page of the PDF, including scanned pages and pages that are only images, and turns them into text you can copy or download. If you only need one part of a page, take a screenshot of it and paste it into this image to text converter with Ctrl+V.' },
      { q: 'How do I convert scanned handwriting to text?', a: 'Upload a sharp, well-lit scan or photo of the handwritten page. Clear, neat handwriting is often recognized well, but messy or joined-up handwriting is still hard for any OCR engine, so check the result carefully. Words the tool is unsure about are outlined in amber, which shows you where to look first.' },
      { q: 'What are the best ways for text extraction from images?', a: 'The fastest way is an OCR image to text converter like this one: upload the image and the text is extracted in seconds. For the best results, use a sharp, well-lit image, hold the camera straight above the page, crop away busy backgrounds and use the largest version of the image you have. Retyping by hand is only worth it for a few words.' },
      { q: 'How does this photo to text tool work?', a: 'It uses OCR (optical character recognition). The tool finds the areas of your photo that contain writing, splits them into lines and words, and matches each shape to a letter using a trained model. The language is detected automatically, and faded or dark photos are cleaned up and read again if the first result looks unsure.' },
      { q: 'Why do I need to extract text from images?', a: 'Extracting text saves you from retyping it and avoids typing mistakes. Once text is out of an image, you can search it, edit it, translate it, paste it into documents or spreadsheets, and share it. It is useful for notes, screenshots, receipts, scanned letters, business cards and lecture slides.' },
      { q: 'Is this image to text converter really free and unlimited?', a: 'Yes. This image to text converter is completely free, with no paid plan, no signup, no watermark and no daily limit. Because the OCR runs on your own device, there is no server cost to limit, so you can convert as many images as you like.' },
      { q: 'Is it safe to convert images to text here? Are my images uploaded?', a: 'Yes, it is safe. Your images are never uploaded to a server. The OCR engine runs inside your browser, so your images and the text found in them stay on your device. Only the engine and language files are downloaded from a public CDN the first time you use a language.' },
      { q: 'Which image formats can I convert to text?', a: 'You can convert JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF and HEIC (iPhone photos) to text. For PDF files, use the PDF to Text tool, and for Word or PowerPoint files, use Word to Text or PPT to Text.' },
      { q: 'Which languages does the image to text converter support?', a: 'It reads more than 40 languages, including English, Spanish, Portuguese, French, German, Italian, Russian, Arabic, Hindi, Bengali, Urdu, Tamil, Thai, Japanese, Korean and Chinese. You do not need to choose one: the language is detected automatically from each image.' },
      { q: 'How accurate is OCR image to text conversion?', a: 'For clear printed or on-screen text, accuracy is very high. Blurry, dark or heavily angled photos lower it. Words the engine is unsure about are outlined in amber, so you can check them quickly instead of proofreading everything.' },
      { q: 'Can I convert image to text on my phone?', a: 'Yes. The converter works in the browser on Android and iPhone, with nothing to install. Upload photos from your gallery, including iPhone HEIC photos, or take a picture with your camera and get the text right away.' },
      { q: 'Can I convert multiple images to text at once?', a: 'Yes. Drop as many images as you like into the box. They are processed a few at a time, and you can copy all the text together or download every result in one ZIP file.' },
    ],
  },
  'jpg-to-word': {
    title: 'JPG to Word Converter – Convert JPG to Word Free',
    description:
      'Convert JPG to Word free. This online JPG to Word converter turns photos and scans into editable .docx files with paragraphs and headings. No signup.',
    h1: 'JPG to Word Converter',
    lead: 'Convert JPG to Word online, free. Turn photos and scans into an editable Word file.',
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
        h2: 'A free JPG to Word converter for editable documents',
        paragraphs: [
          'A photo of a page is just pixels — you cannot edit, search or reuse the words in it. This <strong>JPG to Word converter</strong> reads the text in your image with OCR (optical character recognition) and rebuilds it as a real Word document (.docx) that opens in Microsoft Word, Google Docs, LibreOffice and Apple Pages.',
          'It is a <strong>JPG to Word converter free</strong> of the usual catches: no signup, no watermark, no trial and no daily limit. Convert one photo or a whole stack of scanned pages, as often as you need. Everything happens in your browser, so you can convert JPG to Word online without installing any software.',
        ],
      },
      {
        h2: 'More than plain text: your layout is kept',
        paragraphs: [
          'Many tools that convert JPG to Word simply dump every line of text into one long block, and you spend the next ten minutes fixing line breaks. This converter looks at the shape of the page first, then builds the Word document to match it:',
        ],
        list: [
          '<strong>Paragraphs:</strong> lines that belong together are joined into one paragraph, so the text flows naturally when you edit it.',
          '<strong>Headings:</strong> larger lines become real Word headings (Heading 1 and Heading 2), ready for a table of contents.',
          '<strong>Centred titles:</strong> lines that are centred on the page stay centred in Word.',
          '<strong>Lists:</strong> bullet points become a proper Word bullet list, and numbered lines keep their numbers.',
          '<strong>Tables (beta):</strong> a page laid out as a table is rebuilt as a real Word table with rows and columns.',
          '<strong>Right-to-left text:</strong> Arabic, Urdu and other right-to-left languages are written in the correct direction.',
        ],
      },
      {
        h2: 'What you can convert from JPG to Word',
        paragraphs: [
          'Students convert photos of textbook pages, handouts and class notes into documents they can edit and highlight. Office workers turn scanned letters, contracts, forms and reports back into Word files they can update instead of retyping. Teachers rebuild old printed worksheets, and writers recover text from printed drafts.',
          'Despite the name, the tool is not limited to JPG. You can convert PNG, WEBP, GIF, BMP, TIFF and iPhone HEIC images to Word as well, so screenshots and phone photos work just like scans. It reads more than 40 languages, including English, Hindi, Spanish, French, German, Arabic, Russian, Chinese and Japanese, and the language is detected automatically for every image.',
        ],
      },
      {
        h2: 'How this JPG to Word converter online works',
        paragraphs: [
          'When you add an image, the OCR engine first finds every area of the picture that contains writing and recognises the letters and words in it. The language is detected automatically, and if the first read of a faded or dim photo looks unsure, the image is cleaned up and read again.',
          'Next, the converter measures the size and position of every line. Taller lines are treated as headings, lines that start with a bullet or a number become list items, lines close together become one paragraph, and evenly spaced columns are checked for a table. Finally, the Word document is written in your browser and saved straight to your device. The whole process usually takes a few seconds per page.',
        ],
      },
      {
        h2: 'Combine many images into one Word document',
        paragraphs: [
          'Have a document that runs over several pages? Drop all the images in at once. Each one is read separately, and when they are done you can click <strong>All in one Word file</strong> to download a single .docx with one page per image, in the order you added them. You can also download each image as its own Word file with the <strong>Word (.docx)</strong> button.',
          'Before you download, check the text in the box next to each image. Words the engine is unsure about are outlined in amber, and you can fix any mistake right there — your corrections go straight into the Word file.',
        ],
      },
      {
        h2: 'Convert JPG to Word free on any device',
        paragraphs: [
          'This online JPG to Word converter works in Chrome, Edge, Firefox and Safari on Windows, Mac, Linux, Chromebook, Android and iPhone. On a phone, you can photograph a page with your camera and get a Word file a few seconds later, with nothing to install. After your first visit, the OCR engine is cached in your browser, so the next conversion starts even faster.',
        ],
      },
      {
        h2: 'Why your documents stay private',
        paragraphs: [
          'Most online JPG to Word converter websites upload your files to a server, keep them for a while and limit free use, because every conversion costs them money. Here, both the text recognition and the creation of the Word file run on your own device, inside your browser.',
          'Contracts, certificates, ID documents and personal letters are never sent anywhere. That is also why there is nothing to limit: you can convert JPG to Word free, as many pages as you like.',
        ],
      },
      {
        h2: 'Getting the best Word document',
        list: [
          'Photograph the page from directly above, in good light, and fill the frame with the page.',
          'Use one image per page so the Word document keeps the same page breaks.',
          'Use the sharpest, largest version of the image you have. Small, compressed images lose detail.',
          'Printed text gives the best results. Neat handwriting can work, but messy handwriting is hard for any OCR engine.',
          'Bold, italic and exact fonts are not copied — the converter focuses on the text and its structure.',
        ],
      },
      {
        h2: 'Need a different format?',
        paragraphs: [
          'If you only need the text to copy and paste, the <a href="/">image to text converter</a> is quicker. For tables and numbers, the <a href="/jpg-to-excel">JPG to Excel converter</a> builds a spreadsheet. To turn your images into a PDF instead, use <a href="/image-to-pdf">Image to PDF</a>, and to pull text from a scanned PDF, use <a href="/pdf-to-text">PDF to Text</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I convert JPG to Word?', a: 'Drop your JPG into the box at the top of this page, paste a screenshot or take a photo. The text is read in a few seconds. Check it, then click Word (.docx) to download an editable Word document.' },
      { q: 'Is this JPG to Word converter free?', a: 'Yes, completely. There is no signup, no watermark and no limit on the number of images, so you can convert JPG to Word free as often as you like.' },
      { q: 'Will the Word file keep my formatting?', a: 'It keeps the structure: paragraphs, headings, centred lines, bullet lists and simple tables. Fonts, colours, bold and italic are not copied.' },
      { q: 'Can I combine several JPG images into one Word document?', a: 'Yes. Upload all the images and click “All in one Word file”. Each image becomes a page in one .docx, in the order you added them.' },
      { q: 'Can I edit the text before downloading the Word file?', a: 'Yes. The text from each image appears in an editable box. Fix any word there and your changes are included in the Word file.' },
      { q: 'Does it work with PNG or iPhone photos?', a: 'Yes. PNG, WEBP, GIF, BMP, TIFF and HEIC images work as well as JPG.' },
      { q: 'Can I convert JPG to Word on my phone?', a: 'Yes. This online JPG to Word converter works in the browser on Android and iPhone. Pick a photo from your gallery or take one with your camera, then download the .docx file.' },
      { q: 'Are my files uploaded?', a: 'No. Recognition and document creation both happen in your browser. Your images never leave your device.' },
      { q: 'Which programs can open the file?', a: 'The .docx file opens in Microsoft Word, Google Docs, LibreOffice Writer, Apple Pages and most other word processors.' },
    ],
  },

  'jpg-to-excel': {
    title: 'JPG to Excel Converter – Convert JPG to Excel Free',
    description:
      'Convert JPG to Excel online free. Turn photos and screenshots of tables into editable Excel (.xlsx) or CSV files. Unlimited, no signup, nothing uploaded.',
    h1: 'JPG to Excel Converter',
    lead: 'Convert JPG to Excel online, free. Turn a photo or screenshot of a table into an editable Excel sheet.',
    navLabel: 'JPG to Excel',
    cardText: 'Rebuild tables from images as .xlsx or CSV.',
    howTo: {
      title: 'How to convert JPG to Excel',
      steps: [
        '<strong>Add a picture of a table.</strong> Upload a JPG, PNG or phone photo, or paste a screenshot with Ctrl+V.',
        '<strong>Review the table.</strong> The tool finds the rows and columns and shows them in a grid. Click any cell to correct it.',
        '<strong>Download Excel or CSV.</strong> Save an .xlsx file, a CSV file, or put several images into one workbook with a sheet for each.',
      ],
    },
    features: {
      title: 'What the JPG to Excel converter does for you',
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
        h2: 'A free JPG to Excel converter for tables in pictures',
        paragraphs: [
          'Typing a printed price list, a bank statement or a table from a report into a spreadsheet takes ages and invites errors. This <strong>JPG to Excel converter</strong> reads the text in your picture with OCR (optical character recognition), works out which words belong to which row and column, and gives you a ready-made Excel spreadsheet in a few seconds.',
          'It is a <strong>JPG to Excel converter online free</strong> of the usual limits: no signup, no watermark, no trial and no daily cap. Convert one table or fifty, as often as you need. Everything runs in your browser, so you can convert JPG to Excel online without installing Excel add-ins or desktop software.',
        ],
      },
      {
        h2: 'What you can convert from JPG to Excel',
        paragraphs: [
          'Any picture that shows information in rows and columns can become a spreadsheet. People use this tool for:',
        ],
        list: [
          'Price lists, product catalogues and stock sheets.',
          'Bank statements, invoices and receipts with item lists.',
          'Timetables, attendance sheets and exam results.',
          'Tables in reports, research papers and textbooks.',
          'Screenshots of tables from websites, PDFs and apps that do not let you copy.',
          'Simple printed forms and registers.',
        ],
      },
      {
        h2: 'Why convert JPG to Excel instead of retyping',
        paragraphs: [
          'Retyping a table of fifty rows and five columns means entering 250 values by hand, and a single wrong digit can break a total or a report. Converting the image does the bulk of the work in seconds, and you only check the result instead of typing everything.',
          'It also keeps the structure. Copying text out of a picture with a plain OCR tool gives you one long list of words; you would still have to split it into columns yourself. A JPG to Excel converter places every value in its own cell, so the spreadsheet is ready to sort, filter and calculate the moment you open it.',
        ],
      },
      {
        h2: 'How tables are rebuilt',
        paragraphs: [
          'First, every word in the image is located and recognised. The language is detected automatically, so tables in English, Hindi, Spanish, Arabic, Chinese and 40+ other languages all work. Words that sit on the same horizontal line are grouped into a row.',
          'The tool then looks for vertical gaps that run down the whole table — those gaps are the borders between columns. That is why tables without any lines convert just as well as tables with borders. Each word is placed in the cell where it belongs, and the columns in your Excel file are sized to fit their content.',
          'Clean, printed tables give the best results. Tables photographed at a strong angle, with merged cells or with handwriting may need a few manual fixes in the preview grid.',
        ],
      },
      {
        h2: 'Numbers that work in Excel formulas',
        paragraphs: [
          'A spreadsheet is only useful if you can calculate with it. When you convert JPG to Excel here, plain numbers such as 42, 3.75 or 1,250.50 are saved as real numbers, so SUM, AVERAGE, sorting and charts work straight away — no “number stored as text” warnings.',
          'Some values must not be changed, so they are kept exactly as written: phone numbers and IDs that start with zero, and values with currency symbols, units or letters. Nothing is lost, and you decide how to format those columns in Excel.',
        ],
      },
      {
        h2: 'Check and fix the table before you download',
        paragraphs: [
          'OCR is fast but not perfect, so the result is shown in an editable grid before you download anything. Click any cell to correct a misread number or word, and your changes go straight into the file.',
          'When the table looks right, download it as an Excel (.xlsx) file for Microsoft Excel, Google Sheets, LibreOffice Calc and Numbers, or as a CSV file for any other program. You can also press <strong>Copy</strong> and paste the table directly into an open spreadsheet — the cells land in the right columns.',
        ],
      },
      {
        h2: 'Many images, one Excel workbook',
        paragraphs: [
          'Long tables often span several photos or screenshots. Add them all at once: each image is read separately, and you can download everything together as one Excel workbook, with a separate sheet for each image named after its file. It is the quickest way to turn a stack of pages into a single spreadsheet.',
        ],
      },
      {
        h2: 'Convert JPG to Excel online, on any device',
        paragraphs: [
          'This JPG to Excel converter online works in Chrome, Edge, Firefox and Safari on Windows, Mac, Linux, Chromebook, Android and iPhone. On a phone, take a photo of a printed table with your camera and get an Excel file a moment later. Besides JPG, you can convert PNG, WEBP, GIF, BMP, TIFF and iPhone HEIC images.',
          'Your images are never uploaded. The table is read and the spreadsheet is created inside your browser, so bank statements, salary sheets and customer lists stay on your own device. After your first visit, the OCR engine is cached, and the next conversion starts even faster.',
        ],
      },
      {
        h2: 'Tips for better spreadsheets',
        list: [
          'Crop the image to the table only, without surrounding text.',
          'Make sure the photo is straight and evenly lit, taken from directly above.',
          'Use the sharpest, largest version of the image you have. Small, blurry numbers are the most common cause of mistakes.',
          'For very long tables, use several screenshots — each becomes its own sheet.',
          'Check columns with currency symbols or units; they are kept as text so nothing is lost.',
        ],
      },
      {
        h2: 'Need a different format?',
        paragraphs: [
          'If your table is inside a PDF file, the <a href="/pdf-to-excel">PDF to Excel converter</a> reads every page directly. For documents with paragraphs and headings, use <a href="/jpg-to-word">JPG to Word</a>, and to simply copy the text from a picture, use the <a href="/">image to text converter</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I convert JPG to Excel?', a: 'Upload a JPG photo or screenshot of a table, or paste it with Ctrl+V. The JPG to Excel converter finds the rows and columns and shows them in a grid. Check the cells, then download an Excel (.xlsx) or CSV file.' },
      { q: 'Is this JPG to Excel converter online free?', a: 'Yes. It is completely free, with no signup, no watermark and no limit on how many tables you convert.' },
      { q: 'How long does a JPG to Excel convert take?', a: 'Usually a few seconds per image. The first conversion takes a little longer while the OCR engine loads; after that it is cached in your browser.' },
      { q: 'Can I convert a table without borders to Excel?', a: 'Yes. Columns are found from the spacing between words, so tables without visible lines convert to Excel just as well as tables with borders.' },
      { q: 'Can I edit the table before downloading the Excel file?', a: 'Yes. Click any cell in the preview grid to change it. Your edits are included in the Excel or CSV file you download.' },
      { q: 'Will numbers from the image work in Excel formulas?', a: 'Plain numbers such as 42, 1,250 or 3.75 are saved as real numbers, so SUM and other formulas work straight away. Values with currency symbols, units or leading zeros are kept as text so nothing is lost.' },
      { q: 'Can I convert several JPG images into one Excel workbook?', a: 'Yes. Add all your images, then download them together as one workbook. Each image becomes its own sheet.' },
      { q: 'Which image formats can I convert to Excel?', a: 'JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF and iPhone HEIC photos. You can also paste a screenshot of a table directly with Ctrl+V.' },
      { q: 'Can I open the converted file in Google Sheets?', a: 'Yes. Upload the .xlsx file to Google Drive, or import the CSV file into Google Sheets.' },
      { q: 'Are my images uploaded to a server?', a: 'No. The table is read and the spreadsheet is created in your browser, so your images never leave your device.' },
    ],
  },

  'image-to-pdf': {
    title: 'Image to PDF Converter – Convert Image to PDF Free',
    description:
      'Convert image to PDF online free. Combine JPG, PNG and HEIC photos into one PDF, reorder pages, pick A4 or Letter. No signup, no watermark, no uploads.',
    h1: 'Image to PDF Converter',
    lead: 'Convert image to PDF online, free — combine JPG, PNG and HEIC photos into one PDF.',
    navLabel: 'Image to PDF',
    cardText: 'Combine images into one PDF file.',
    howTo: {
      title: 'How to convert image to PDF',
      steps: [
        '<strong>Add your images.</strong> Drop them in, click “Choose files”, take photos or paste a screenshot.',
        '<strong>Arrange the pages.</strong> Drag images into the right order or use the arrow buttons, then pick page size, orientation and margins.',
        '<strong>Create the PDF.</strong> Click “Create PDF” and your file downloads straight away.',
      ],
    },
    features: {
      title: 'Everything you need in an image to PDF converter',
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
        h2: 'A free image to PDF converter for photos, scans and screenshots',
        paragraphs: [
          'Schools, offices, banks and online forms often ask for a single PDF, but your documents are a set of photos on your phone. This <strong>image to PDF converter</strong> puts them together into one tidy PDF file, one image per page, in exactly the order you choose.',
          'It is an <strong>image to PDF converter free</strong> of catches: no signup, no watermark, no page limit and no daily cap. Convert one photo or fifty, as often as you need. Everything runs in your browser, so you can convert image to PDF from your computer or phone in a few seconds.',
        ],
      },
      {
        h2: 'Why convert images to PDF?',
        paragraphs: [
          'A PDF looks the same on every device, prints at the right size and keeps many pages together in one file. That makes it the format most places ask for. People use this tool to:',
        ],
        list: [
          'Submit scanned homework, assignments and exam answer sheets as one file.',
          'Upload ID cards, certificates and mark sheets for job, college and visa applications.',
          'Send signed forms and contracts that were photographed on a phone.',
          'Collect receipts and bills into one PDF for an expense claim or tax filing.',
          'Turn screenshots into a single document for a bug report or a tutorial.',
          'Make a simple photo album or portfolio that anyone can open.',
        ],
      },
      {
        h2: 'Put your pages in the right order',
        paragraphs: [
          'Every image you add appears as a thumbnail in a list. Drag a thumbnail up or down to move it, or use the <strong>Move up</strong> and <strong>Move down</strong> arrows if you prefer tapping on a phone. Remove any image you do not need with one click. The order you see is exactly the order of the pages in your PDF, so a ten-page form ends up in the right sequence every time.',
        ],
      },
      {
        h2: 'Choosing the right settings',
        list: [
          '<strong>A4</strong> is the standard paper size in most of the world, including India, the UK and Europe; <strong>Letter</strong> is used in the US and Canada.',
          '<strong>Fit to image</strong> makes each page the exact size of its picture, with no white space — ideal for screenshots and photo albums.',
          '<strong>Orientation:</strong> <strong>Auto</strong> turns each page to match its image, so wide pictures get landscape pages and tall ones portrait. You can also force portrait or landscape for every page.',
          '<strong>Margin:</strong> choose none, small or large white borders. Each image is scaled to fit inside the margins and centred on the page.',
          '<strong>Smaller file</strong> reduces the size of big phone photos, which helps when an upload form has a size limit.',
        ],
      },
      {
        h2: 'How the image to PDF converter builds your file',
        paragraphs: [
          'When you click <strong>Create PDF</strong>, each image becomes one page. The picture is scaled to fit inside the page and its margins, keeping its original proportions, and centred — nothing is stretched, squashed or cropped. With “Fit to image”, the page is simply made the same shape as the picture.',
          'The PDF is put together by your browser itself, page by page, and saved to your device as <strong>images.pdf</strong>. Rename it to something meaningful, like “Aadhaar card” or “Assignment 3”, before you upload or send it.',
        ],
      },
      {
        h2: 'Why use this instead of a scanner app?',
        paragraphs: [
          'Scanner apps are handy, but many of them need an account, add a watermark on the free plan or keep your scans in their cloud. Here you can convert image to PDF with the photos you already have, on any device, without installing anything or creating an account — and your files stay with you.',
        ],
      },
      {
        h2: 'Sharp quality, sensible file size',
        paragraphs: [
          'PNG images, such as screenshots, go into the PDF untouched, so text and lines stay perfectly crisp. Other images are saved at high quality, and photos taken on a phone are turned the right way up automatically, so you never get a sideways page.',
          'Phone photos can be 5 MB or more each, which quickly makes a PDF too large to email or upload. Tick <strong>Smaller file</strong> and each image is resized to a maximum of 2000 pixels on its longest side and compressed. Documents stay perfectly readable, and the PDF is often several times smaller.',
        ],
      },
      {
        h2: 'Image to PDF converter free download? No software needed',
        paragraphs: [
          'Many people search for an image to PDF converter free download, expecting to install a program. You do not need one. This online image to PDF converter works directly in your browser, with nothing to install, no app store and no updates to worry about. The only thing you download is your finished PDF, saved straight to your device as soon as you click <strong>Create PDF</strong>.',
          'After your first visit, the page loads almost instantly, and you can bookmark it to have the converter one click away whenever you need it.',
        ],
      },
      {
        h2: 'Convert image to PDF on your phone',
        paragraphs: [
          'This image to PDF converter online works in Chrome, Safari, Edge and Firefox on Android, iPhone, tablets, Windows, Mac and Chromebook. On a phone, tap <strong>Take a photo</strong> to photograph each page with your camera, or choose existing pictures from your gallery. iPhone HEIC photos are converted automatically. On a computer, you can also paste a screenshot with Ctrl+V.',
        ],
      },
      {
        h2: 'Private and free of watermarks',
        paragraphs: [
          'Many online converters upload your photos to a server, add their logo to every page or ask you to pay to remove it. This one does neither. The PDF is built entirely inside your browser: your ID documents, certificates and personal photos never leave your device, nothing is stored online, and the PDF contains only your images — no watermark, logo or extra pages.',
        ],
      },
      {
        h2: 'Tips for a better PDF',
        list: [
          'Photograph documents from directly above, in good light, and fill the frame with the page.',
          'Crop each photo to the page before adding it, so the PDF has no table or floor around the document.',
          'Use A4 with a small margin for forms and documents that will be printed.',
          'Turn on Smaller file before emailing or uploading to a portal with a size limit.',
        ],
      },
      {
        h2: 'Need the text too?',
        paragraphs: [
          'A PDF made from photos contains pictures of text, not text you can search or copy. To get editable text, use the <a href="/">image to text converter</a> or the <a href="/jpg-to-word">JPG to Word converter</a>. To make a PDF from typed text instead, use <a href="/text-to-pdf">Text to PDF</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How to convert image to PDF?', a: 'Add your images by dropping them in, clicking “Choose files”, taking photos or pasting a screenshot. Arrange them in the right order, choose the page size, orientation and margins, then click “Create PDF”. The PDF downloads straight away.' },
      { q: 'Is this image to PDF converter free?', a: 'Yes. It is completely free, with no signup, no watermark and no limit on the number of images or PDFs.' },
      { q: 'Can I combine multiple images into one PDF?', a: 'Yes. Add as many images as you like and they are combined into a single PDF, one image per page, in the order you choose.' },
      { q: 'Can I change the order of the pages in the PDF?', a: 'Yes. Drag the images into a new order, or use the up and down arrows on each image, before you create the PDF.' },
      { q: 'Which image formats can I convert to PDF?', a: 'JPG, JPEG, PNG, WEBP, GIF, BMP and iPhone HEIC photos. HEIC photos are converted automatically.' },
      { q: 'Do I need to download any software?', a: 'No. This is an online image to PDF converter that works in your browser. There is nothing to install; the only download is your finished PDF.' },
      { q: 'Which page size should I choose for my PDF?', a: 'Choose A4 for most of the world and Letter for the US and Canada. Choose “Fit to image” if you want each page to be exactly the size of its picture, with no white space.' },
      { q: 'How do I make the PDF file smaller?', a: 'Turn on “Smaller file” before creating the PDF. Large phone photos are resized and compressed, which helps when an upload form has a size limit.' },
      { q: 'Can I convert image to PDF on my phone?', a: 'Yes. It works in the browser on Android and iPhone. Take photos with your camera or choose them from your gallery, then tap “Create PDF”.' },
      { q: 'Will the PDF have a watermark?', a: 'No. The PDF contains only your images, with no watermark, logo or extra pages.' },
      { q: 'Can I search or copy the text in a PDF made from images?', a: 'No. A PDF made from photos contains pictures of text. To get text you can copy, use the image to text converter or the JPG to Word converter.' },
      { q: 'Are my images uploaded?', a: 'No. The PDF is created in your browser and your images stay on your device.' },
    ],
  },

  'text-to-pdf': {
    title: 'Text to PDF Converter – Convert Text to PDF Free',
    description:
      'Convert text to PDF online free. Type or paste text, or open a .txt file, choose font, size and margins, and download a clean PDF. No signup, no uploads.',
    h1: 'Text to PDF Converter',
    lead: 'Convert text to PDF online, free — type or paste your text, or open a .txt file.',
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
      title: 'A simple text to PDF maker, done right',
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
        h2: 'A free text to PDF converter that takes seconds',
        paragraphs: [
          'Plain text looks different on every device, and many upload forms, teachers and offices only accept PDF. This <strong>text to PDF converter</strong> turns your text into a properly formatted PDF that looks the same everywhere and prints cleanly. Paste your text, pick a layout, click <strong>Create PDF</strong> — done.',
          'It is a <strong>text to PDF converter free</strong> to use as often as you like: no signup, no watermark, no page limit and no daily cap. There is no software to install either; you can convert text to PDF from any browser on your computer or phone.',
        ],
      },
      {
        h2: 'Type text to PDF online — no Word needed',
        paragraphs: [
          'You do not need Microsoft Word, Google Docs or any other editor to make a PDF. Type text to PDF online right here: write in the box, or paste text you copied from an email, a chat, a website or a note. A live word and character count shows how long your text is as you type.',
          'Already have a text file? Click <strong>Open .txt file</strong> and its contents appear in the box, ready to turn into a PDF. You can still edit anything before you create the file.',
        ],
      },
      {
        h2: 'Why convert text to PDF?',
        paragraphs: [
          'A PDF keeps your text exactly as you laid it out, on every screen and printer. People use this tool to:',
        ],
        list: [
          'Submit assignments, applications and statements to portals that only accept PDF.',
          'Turn notes, lists and drafts into a document that is easy to share and print.',
          'Save letters, poems, transcripts and meeting minutes in a tidy, permanent format.',
          'Share code snippets, logs and configuration files without formatting getting lost.',
          'Make a printable copy of text extracted from photos or documents.',
        ],
      },
      {
        h2: 'Choose the layout of your PDF',
        list: [
          '<strong>Font:</strong> sans-serif (Helvetica) for a clean modern look, serif (Times) for letters and formal documents, or monospace (Courier) for code and tables made of spaces. Text in other scripts, such as Japanese, Korean, Chinese, Greek or Cyrillic, is set in the matching Noto font: Noto Serif when you choose serif, Noto Sans otherwise.',
          '<strong>Font size:</strong> from 10 to 18 pt. 12 pt is the standard for most documents; choose 14–18 pt for large print.',
          '<strong>Page size:</strong> A4, the standard in India, the UK and most of the world, or Letter for the US and Canada.',
          '<strong>Margins:</strong> small (half an inch) to fit more text on each page, or large (one inch), the usual margin for printed documents.',
        ],
      },
      {
        h2: 'Your text stays exactly as you wrote it',
        paragraphs: [
          'Every line break and every empty line in your text is kept in the same place in the PDF, so paragraphs, addresses, lists and poems keep their shape. Lines that are too long for the page wrap neatly at the nearest space (Chinese and Japanese, which have no spaces, wrap between characters, and closing punctuation such as 。 or 」 never starts a line), very long words or links are broken so nothing runs off the edge, and tabs become spaces. When a page is full, a new page is added automatically — a one-line note and a 50-page transcript both work.',
        ],
      },
      {
        h2: 'A real text PDF, not a picture',
        paragraphs: [
          'Some tools turn your text into an image and put that image in a PDF. Here the PDF contains real text, in the standard PDF fonts or, for other scripts, in embedded Noto fonts. That means you can search it, select and copy from it, and screen readers can read it aloud. The file stays small too, because only the characters you actually used are embedded: a few kilobytes per page for English, and usually tens to a few hundred kilobytes for Japanese, Korean or Chinese text. That makes it easy to email or upload anywhere.',
        ],
      },
      {
        h2: 'PDF maker: text to PDF for notes, code and logs',
        paragraphs: [
          'Think of it as a tiny PDF maker: text to PDF with no menus to learn. It is ideal for developers and IT teams who need to share logs, error output or code. Choose the monospace font and everything lines up exactly as it does in your editor, including columns made with spaces. It is just as handy for teachers printing a worksheet, writers sending a draft, or anyone who wants a quick printable page.',
        ],
      },
      {
        h2: 'Why not just use “Print to PDF”?',
        paragraphs: [
          'On a computer you can open a text file in Notepad and print it to PDF, but you get the default font and margins, and the steps differ on every system. On a phone it is even more awkward — most phones have no simple way to turn a block of copied text into a PDF at all.',
          'A dedicated text to PDF maker gives you the same result on every device, with the font, size, paper and margins you choose, in one click. No print dialogs, no printer settings and no extra apps.',
        ],
      },
      {
        h2: 'Supported languages and characters',
        paragraphs: [
          'Text to PDF supports English and other languages written with the Latin alphabet, including Spanish, French, German, Portuguese, Italian, Dutch, Polish, Czech, Turkish, Romanian and Vietnamese, as well as <strong>Japanese, Korean, Chinese (Simplified and Traditional), Russian and other Cyrillic languages, and Greek</strong>. You can mix them freely in one document.',
          'English and Western European text uses the standard PDF fonts. For everything else, your browser downloads only the parts of the free Noto fonts that your text needs, from the public jsDelivr network, the first time they are needed, and the PDF embeds just the characters you used. Chinese and Japanese lines wrap between characters, with closing punctuation kept off the start of a line.',
          'Hindi and other Indian scripts, Arabic, Hebrew, Thai and emoji are not supported yet. Characters the PDF cannot show are replaced with “?”, and the tool tells you how many were replaced so you can check the result.',
        ],
      },
      {
        h2: 'Convert text to PDF on your phone',
        paragraphs: [
          'This online text to PDF converter works in Chrome, Safari, Edge and Firefox on Android, iPhone, tablets, Windows, Mac, Linux and Chromebook. On a phone, copy text from any app, paste it into the box and tap <strong>Create PDF</strong>; the file is saved to your downloads, ready to share on WhatsApp or email.',
        ],
      },
      {
        h2: 'Private: your text never leaves your device',
        paragraphs: [
          'Letters, applications and notes can be personal. Most online converters send your text to a server to build the PDF. This one does not: the PDF is created inside your browser and saved straight to your device as <strong>text.pdf</strong>. If your text includes characters such as Japanese or Cyrillic, the browser downloads the matching font files from jsDelivr; those requests only fetch fonts and do not include your text. Nothing is uploaded or stored, which is also why the tool can stay free and unlimited.',
        ],
      },
      {
        h2: 'Tips for a better PDF',
        list: [
          'Leave an empty line between paragraphs to keep them clearly separated in the PDF.',
          'Use the monospace font for code, logs and anything aligned with spaces.',
          'Rename the downloaded file to something meaningful before you send it.',
        ],
      },
      {
        h2: 'Have an image or a scanned document?',
        paragraphs: [
          'To turn photos into a PDF, use the <a href="/image-to-pdf">image to PDF converter</a>. To get editable text from a picture first, use the <a href="/">image to text converter</a>, then paste the result here. To pull text out of an existing PDF, use <a href="/pdf-to-text">PDF to Text</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How to convert text to PDF?', a: 'Type or paste your text into the box at the top of this page, or click “Open .txt file”. Choose a font, font size, page size and margins, then click “Create PDF”. The PDF is saved to your device instantly.' },
      { q: 'Is this text to PDF converter free?', a: 'Yes. The text to PDF converter is free and unlimited, with no account and no watermark.' },
      { q: 'How can I convert a TXT file to PDF?', a: 'Click “Open .txt file” and choose the file from your device. The text appears in the box, and you can create the PDF with one click.' },
      { q: 'Can I type text and make a PDF online?', a: 'Yes. Type directly into the box on this page, or paste text from anywhere, then click “Create PDF”. You do not need Word or any other software.' },
      { q: 'Can I change the font, size and margins of the PDF?', a: 'Yes. Choose a sans-serif, serif or monospace font, a size from 10 to 18 pt, A4 or Letter paper, and small or large margins.' },
      { q: 'Will my line breaks be kept in the PDF?', a: 'Yes. Every line break and empty line in your text is kept exactly where it is. Long lines wrap neatly and new pages are added automatically.' },
      { q: 'Can I search and copy the text in the PDF?', a: 'Yes. The PDF contains real text, not an image, so you can search it, select it and copy from it.' },
      { q: 'Can I convert code or log files to PDF?', a: 'Yes. Choose the monospace font so code, logs and tables made of spaces line up the same way they do in your editor.' },
      { q: 'Which languages can I convert to PDF?', a: 'English and other Latin-alphabet languages (including Polish, Turkish and Vietnamese), Japanese, Korean, Chinese, Russian and other Cyrillic languages, and Greek. Hindi, Arabic, Hebrew, Thai and emoji are not supported yet; those characters are replaced with “?”, and the tool tells you how many.' },
      { q: 'Can I convert Japanese, Korean or Chinese text to PDF?', a: 'Yes. Paste the text and click “Create PDF”. Those characters are set in Noto Sans or Noto Serif, so the PDF shows them correctly and the text can still be searched and copied. The first time, the font files take a few seconds to download.' },
      { q: 'Is my text uploaded?', a: 'No. The PDF is generated in your browser and your text stays on your device.' },
    ],
  },

  'pdf-to-text': {
    title: 'PDF to Text Converter – Convert PDF to Text Free',
    description:
      'Convert PDF to text free, including scanned image PDFs. Digital pages are read instantly, scanned pages with OCR. Unlimited, no signup, nothing uploaded.',
    h1: 'PDF to Text Converter',
    lead: 'Convert PDF to text online, free — including scanned and image-only PDFs.',
    navLabel: 'PDF to Text',
    cardText: 'Extract text from digital and scanned PDFs.',
    howTo: {
      title: 'How to convert PDF to text',
      steps: [
        '<strong>Add your PDF.</strong> Drop the file into the box or click “Choose PDF”.',
        '<strong>Let it read.</strong> Every page is read. Digital pages are copied instantly; scanned pages go through OCR in whatever language they are written in — detected automatically.',
        '<strong>Copy or download.</strong> Copy the text, or download it as a TXT file.',
      ],
    },
    features: {
      title: 'Why this PDF to text converter is different',
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
        h2: 'A free PDF to text converter for every kind of PDF',
        paragraphs: [
          'PDFs are great for sharing and printing, but getting the words out of them is often a pain. Selecting text grabs the wrong columns, copy and paste breaks lines in strange places, and scanned PDFs do not let you select anything at all. This <strong>PDF to text converter</strong> solves all of that: drop in your file and you get clean, editable plain text from every page.',
          'It is a <strong>PDF to text converter free</strong> to use without limits — no signup, no watermark, no page cap and no daily quota. Convert a one-page letter or a 200-page report, as often as you need. Everything runs in your browser, so you can convert PDF to text without installing Adobe Acrobat or any other software.',
        ],
      },
      {
        h2: 'Digital PDFs and image PDFs: what is the difference?',
        paragraphs: [
          'There are two kinds of PDF. A <strong>digital PDF</strong> is created by a program such as Word, Google Docs or a website, and it contains real text behind every letter you see. An <strong>image PDF</strong> is made by a scanner, a photocopier or a phone scanning app: each page is just a picture of paper, with no text inside it.',
          'Most PDF tools handle only the first kind and return an empty result for scans. This converter checks every page on its own. Where a page already has text, it is copied out exactly as written — instantly, with no OCR mistakes. Where a page is only an image, OCR (optical character recognition) reads the letters for you. Mixed PDFs, with some typed and some scanned pages, work too, and a short note tells you whether OCR was used.',
        ],
      },
      {
        h2: 'Image PDF to text PDF in two steps',
        paragraphs: [
          'A scanned PDF looks like text, but you cannot search it, copy from it or let a screen reader read it aloud. To turn an image PDF into text, open it here: the OCR engine reads every scanned page and gives you the words as plain text that you can edit and correct.',
          'Want a clean text PDF again afterwards? Copy the result into our <a href="/text-to-pdf">Text to PDF converter</a>, choose a font and page size, and download a new PDF made of real text (Text to PDF handles Latin-alphabet languages, Japanese, Korean, Chinese, Cyrillic and Greek, but not yet Hindi, Arabic or Thai). That is the quickest way to go from image PDF to text PDF without paid software.',
        ],
      },
      {
        h2: 'PDF to text, Word, email and everywhere else',
        paragraphs: [
          'Plain text is the most flexible format there is. Once you convert PDF to text, you can paste it into Microsoft Word or Google Docs to rework a document, into an email or chat, into a spreadsheet, a CMS, a translator or an AI assistant — without hidden formatting coming along.',
          'Keep in mind that the result is plain text: fonts, colours, images and exact page layout are not copied. If you need a formatted Word document from pictures of pages, the <a href="/jpg-to-word">JPG to Word converter</a> keeps paragraphs, headings and lists as a .docx file.',
        ],
      },
      {
        h2: 'Who uses a PDF to text converter?',
        paragraphs: [
          'Students convert PDF to text to quote from scanned books and journal articles, or to turn lecture handouts into notes they can edit. Office workers pull text from old contracts, policies and reports so they can update them instead of retyping. Researchers and journalists search through long scanned archives, translators paste the text straight into their tools, and developers feed PDF content into scripts and databases.',
          'Whatever the reason, the goal is the same: get the words out of the PDF quickly and accurately, without spending an afternoon copying page by page.',
        ],
      },
      {
        h2: 'What you get after converting',
        list: [
          'The text of every page, in order, with a page number marker between pages so you always know where you are.',
          'An editable text box, so you can fix a word or remove a header before copying.',
          'A live word and character count — handy for essays, translations and quotes.',
          'One-click <strong>Copy</strong> and a <strong>TXT</strong> download for each file.',
          'Several PDFs at once: drop them all in, then copy everything or download all the TXT files in one ZIP.',
        ],
      },
      {
        h2: 'Scanned PDFs in 40+ languages',
        paragraphs: [
          'You never have to choose a language. For scanned pages the language is detected automatically, and more than 40 are supported, including English, Hindi, Bengali, Tamil, Urdu, Arabic, Spanish, French, German, Russian, Chinese, Japanese and Korean. Right-to-left text such as Arabic and Urdu is shown in the correct direction.',
        ],
      },
      {
        h2: 'Keep your documents private',
        paragraphs: [
          'Contracts, bank statements, medical records and exam papers often contain personal information. Most online PDF converters upload your file to their server. This one does not: the PDF is opened and read inside your browser, so it never leaves your device and nothing is stored online. That is also why there is no size limit — long PDFs are simply processed page by page on your own computer or phone.',
        ],
      },
      {
        h2: 'Tips for the best results',
        list: [
          'For scanned PDFs, a higher scan quality (300 DPI or more) gives far more accurate text.',
          'Very long scanned PDFs take longer, because each page is read on your device. Digital pages are almost instant.',
          'Remove a password from a protected PDF before opening it here.',
          'Check numbers and names in scanned pages before you reuse them.',
        ],
      },
      {
        h2: 'Need tables or images instead?',
        paragraphs: [
          'If your PDF contains tables, the <a href="/pdf-to-excel">PDF to Excel converter</a> rebuilds them as a spreadsheet. For photos and screenshots rather than PDFs, use the <a href="/">image to text converter</a>, and for tables in pictures, the <a href="/jpg-to-excel">JPG to Excel converter</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I convert PDF to text?', a: 'Drop your PDF into the box or click “Choose PDF”. Every page is read automatically. When it is done, copy the text or download it as a TXT file.' },
      { q: 'Is this PDF to text converter free?', a: 'Yes. It is completely free, with no signup, no watermark, no page limit and no daily limit. It works with both digital and scanned PDFs.' },
      { q: 'Can it convert a scanned or image PDF to text?', a: 'Yes. Pages that contain real text are copied out instantly, and pages that are only images are read with OCR automatically.' },
      { q: 'How do I turn an image PDF into a text PDF?', a: 'Convert the image PDF to text here, copy the result, then paste it into our Text to PDF converter and download a new PDF made of real, searchable text.' },
      { q: 'Can I convert PDF to Word with this tool?', a: 'This tool gives you plain text, which you can paste straight into Word or Google Docs. Fonts, images and exact layout are not kept. For a formatted .docx from pictures of pages, use the JPG to Word converter.' },
      { q: 'Why can’t I select or copy the text in my PDF?', a: 'Usually because the pages are scanned images, not real text. Open the PDF here: pages without a text layer are read with OCR, so you get text you can copy.' },
      { q: 'Which languages can it read from scanned PDFs?', a: 'More than 40, including English, Hindi, Arabic, Spanish, French, Russian, Chinese and Japanese. The language is detected automatically, so there is nothing to choose.' },
      { q: 'Can I convert several PDFs to text at once?', a: 'Yes. Drop several PDFs into the box. Each one is converted separately, and you can copy all the text or download every TXT file together in one ZIP.' },
      { q: 'Is there a page or size limit?', a: 'No fixed limit. Long PDFs are processed page by page on your device, so very long scanned PDFs simply take longer.' },
      { q: 'Is the PDF uploaded?', a: 'No. The file is opened and processed in your browser and never leaves your device.' },
      { q: 'Does it work with password-protected PDFs?', a: 'Not yet. Remove the password first, then open the file here.' },
    ],
  },
  'screenshot-to-text': {
    title: 'Screenshot to Text Converter – Free, Unlimited OCR',
    description:
      'Convert screenshot to text in seconds. Paste with Ctrl+V and copy the text. A free, unlimited screenshot to text converter that runs in your browser.',
    h1: 'Screenshot to Text Converter',
    lead: 'Paste a screenshot with Ctrl+V and convert it to text you can copy, edit or download.',
    navLabel: 'Screenshot to Text',
    cardText: 'Paste a screenshot and copy its text instantly.',
    howTo: {
      title: 'How to convert a screenshot to text',
      steps: [
        '<strong>Take a screenshot.</strong> Press Win+Shift+S on Windows, Cmd+Ctrl+Shift+4 on Mac, or use your phone’s screenshot buttons.',
        '<strong>Paste it here.</strong> Press Ctrl+V (Cmd+V on Mac) anywhere on this page, or drop the saved image into the box.',
        '<strong>Copy the text.</strong> Edit it in the box, click a single line on the image to copy just that line, or download a TXT file.',
      ],
    },
    features: {
      title: 'Why this screenshot to text converter is built for screenshots',
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
        h2: 'A free screenshot to text converter: paste and copy',
        paragraphs: [
          'Plenty of text on your screen can be seen but not selected: an error dialog, a frame of a video, a slide in an online meeting, a message in an app that blocks copying, or a website that shows text as an image. A screenshot captures it, and this <strong>screenshot to text converter</strong> turns it back into real text that you can copy, edit and paste anywhere.',
          'There is no file to save and nothing to upload. Take the screenshot, press Ctrl+V on this page and the text appears in a few seconds. It is completely free, with no signup, no watermark and no daily limit, so you can convert screenshot to text as often as you need — ten times a day or a hundred.',
        ],
      },
      {
        h2: 'How to take a screenshot on any device',
        paragraphs: [
          'The quickest way to convert a screenshot to text is to copy the screenshot straight to your clipboard and paste it here. These shortcuts do that:',
        ],
        list: [
          '<strong>Windows:</strong> press Win+Shift+S, select the area you need, then press Ctrl+V on this page. Print Screen copies the whole screen.',
          '<strong>Mac:</strong> press Cmd+Ctrl+Shift+4 and drag over the area to copy it, then press Cmd+V here. Cmd+Shift+4 saves a file instead, which you can drop into the box.',
          '<strong>Chromebook:</strong> press Ctrl+Shift+Show windows, select the area, then paste it here.',
          '<strong>Android:</strong> press Power and Volume Down together, then tap “Choose files” and pick the screenshot.',
          '<strong>iPhone:</strong> press the Side button and Volume Up together, then tap “Choose files” and pick it from Photos.',
        ],
      },
      {
        h2: 'Screenshot to text copy in one click',
        paragraphs: [
          'Reading the text is only half the job; getting it out quickly is the other half. After you convert a screenshot to text, the result appears in an editable box next to your image, so you can fix a word or remove a line before copying. Press <strong>Copy</strong> to put all the text on your clipboard.',
          'Often you need just one thing from a busy screenshot: a phone number, an order ID, a link or a single line of an error. Every line the tool finds is outlined on the screenshot, and clicking a line copies only that line. This makes screenshot to text copy faster than selecting and trimming text by hand.',
          'Working through several screenshots? Paste them one after another. Each one is read separately, and you can use <strong>Copy all</strong> or download every result together in one ZIP file.',
        ],
      },
      {
        h2: 'What people convert from screenshots',
        list: [
          'Error messages, stack traces and log output that a developer needs to search for or share.',
          'Code shown in a video tutorial, a slide or an image someone posted.',
          'Chat messages, emails and social media posts that you want to quote or translate.',
          'Slides from an online class or meeting, so you can keep the notes as text.',
          'Text in apps and websites that block copying, such as some PDFs, menus and image-based pages.',
          'Order numbers, tracking codes, addresses and phone numbers from a confirmation screen.',
        ],
      },
      {
        h2: 'Why screenshots give such accurate results',
        paragraphs: [
          'The tool uses OCR (optical character recognition) to recognise letters and words in your image. Screenshots are the easiest images for OCR to read: the text is perfectly straight, sharp and high-contrast, with no shadows, blur or curved pages. That is why a screenshot to text conversion is usually near-perfect, even for small fonts.',
          'The language is detected automatically for every screenshot. English, Hindi, Arabic, Chinese, Japanese, Russian and more than 40 other languages are recognised without any setting, and right-to-left text such as Arabic and Urdu is shown in the correct direction. If a word looks doubtful, it is outlined in amber so you know what to check.',
        ],
      },
      {
        h2: 'Convert screenshot to text in any format',
        paragraphs: [
          'Screenshots are saved in different formats depending on your device. Windows and Android usually save PNG files, iPhones save screenshots as PNG and photos as HEIC, and some apps save JPG or WEBP. This tool accepts all of them — PNG, JPG, JPEG, WEBP, GIF, BMP, TIFF and HEIC — so you can convert screenshot to text without changing the file type first.',
          'You do not need to install an app or a browser extension either. The screenshot to text converter works in Chrome, Edge, Firefox and Safari on Windows, Mac, Linux, Chromebook, Android and iPhone. Bookmark this page and it is always one paste away.',
        ],
      },
      {
        h2: 'Private: your screenshots never leave your device',
        paragraphs: [
          'Screenshots often contain private things: chats, bank details, passwords in an error log, customer information. Most online OCR tools upload your image to their server. This one does not. The OCR engine runs inside your browser, so your screenshot and its text stay on your computer or phone. After the first visit the engine is cached, and the next conversion starts even faster.',
        ],
      },
      {
        h2: 'Tips for the best results',
        list: [
          'Capture only the part you need. Less clutter means cleaner text.',
          'Zoom in before you take the screenshot if the text is very small.',
          'Avoid screenshots that have been resized or heavily compressed in a chat app; use the original if you can.',
          'Light text on a busy background, such as a photo or video, is harder to read. Pause on a clear frame first.',
          'Check code before pasting it into an editor. Indentation may be simplified.',
        ],
      },
      {
        h2: 'Have a photo or a document instead?',
        paragraphs: [
          'For phone photos of paper documents, the <a href="/">image to text converter</a> cleans up dim or faded photos automatically. To keep layout and headings, use <a href="/jpg-to-word">JPG to Word</a>. If your screenshot shows a table, the <a href="/jpg-to-excel">JPG to Excel converter</a> rebuilds it as a spreadsheet, and <a href="/pdf-to-text">PDF to Text</a> reads whole PDF files.',
        ],
      },
    ],
    faq: [
      { q: 'How do I convert a screenshot to text?', a: 'Take a screenshot, then press Ctrl+V (Cmd+V on Mac) anywhere on this page, or drop the image file into the box. The screenshot to text converter reads it in a few seconds and shows the text, ready to copy, edit or download.' },
      { q: 'How do I paste a screenshot here?', a: 'Copy the screenshot to your clipboard with Win+Shift+S on Windows or Cmd+Ctrl+Shift+4 on Mac, then press Ctrl+V or Cmd+V anywhere on this page. It starts reading straight away. No need to save it as a file.' },
      { q: 'How do I copy text from a screenshot?', a: 'Convert the screenshot to text here, then press Copy to copy all of it. To copy just one line, click that line where it is outlined on the screenshot. With several screenshots, Copy all copies the text from every one at once.' },
      { q: 'Is this screenshot to text converter free?', a: 'Yes. It is completely free, with no signup, no watermark and no daily limit. You can convert as many screenshots to text as you like.' },
      { q: 'Can I convert a screenshot to text on my phone?', a: 'Yes. It works in the browser on Android and iPhone. Take the screenshot, tap “Choose files” and pick it from your gallery or Photos. The text appears in a few seconds.' },
      { q: 'Is my screenshot uploaded to a server?', a: 'No. Text recognition runs inside your browser, so your screenshot and the text in it never leave your device. This keeps private chats, emails and error logs private.' },
      { q: 'Can it read code from a screenshot?', a: 'Yes. Code, error messages and logs read well because screen text is sharp. Indentation may be simplified, so check it before pasting into an editor.' },
      { q: 'Which languages can it read from screenshots?', a: 'More than 40, including English, Hindi, Arabic, Chinese, Japanese, Korean, Russian, Spanish and French. The language is detected automatically, so there is nothing to choose.' },
      { q: 'Can I convert several screenshots at once?', a: 'Yes. Paste or drop as many screenshots as you like. Each one is converted separately, and you can copy all the text or download every result in one ZIP file.' },
    ],
  },
  'pdf-to-excel': {
    title: 'PDF to Excel Converter – Convert PDF to Excel Free',
    description:
      'Convert PDF to Excel online free. Turn tables in digital and scanned PDFs into editable Excel sheets, one per page. No signup, files never uploaded.',
    h1: 'PDF to Excel Converter',
    lead: 'Convert PDF to Excel online, free — tables from digital and scanned PDFs, ready to edit.',
    navLabel: 'PDF to Excel',
    cardText: 'Turn PDF tables into an editable spreadsheet.',
    howTo: {
      title: 'How to convert PDF to Excel',
      steps: [
        '<strong>Add your PDF.</strong> Drop it into the box or click “Choose PDF”. Every page is read automatically.',
        '<strong>Check the tables.</strong> Each page appears as a table. Click any cell to fix it before downloading.',
        '<strong>Download Excel.</strong> Get an .xlsx file with one sheet per page, or a CSV.',
      ],
    },
    features: {
      title: 'A PDF to Excel converter that keeps your tables',
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
        h2: 'A free PDF to Excel converter that rebuilds real tables',
        paragraphs: [
          'Copying a table out of a PDF usually ends badly. Paste it into a spreadsheet and you get one long jumbled column, numbers glued to labels and rows split across lines. This <strong>PDF to Excel converter</strong> does it properly: it looks at where every word sits on the page, finds the rows and the column gaps, and rebuilds the table cell by cell in a real Excel spreadsheet.',
          'You can <strong>convert PDF to Excel for free</strong>, with no signup, no watermark, no page cap and no daily limit. It is a true <strong>PDF to Excel converter online free</strong> of trials and upgrade screens: convert a one-page invoice or a 100-page statement, as often as you need.',
        ],
      },
      {
        h2: 'How the PDF to Excel convert works',
        paragraphs: [
          'Every page of your PDF is handled on its own. First, the converter collects every word on the page together with its exact position. Words that share the same horizontal line are grouped into a row. Then it looks for vertical gaps that run down the whole table — those gaps are the borders between columns. Each word is dropped into the cell where it belongs, and the columns in your Excel file are sized to fit their content.',
          'Because columns are found from spacing rather than drawn lines, tables without borders convert just as well as tables with a full grid. Pages that contain no table are skipped, so your workbook is not filled with empty sheets.',
        ],
      },
      {
        h2: 'Digital and scanned PDFs both work',
        paragraphs: [
          'Most PDFs from banks, accounting software and websites are <strong>digital</strong>: they contain real text. For those pages the numbers are read straight from the file, exactly as written, so there are no recognition mistakes and the conversion is almost instant.',
          '<strong>Scanned</strong> PDFs are different — each page is just a picture. For those pages the tool runs OCR (optical character recognition) first, detecting the language automatically, and then finds the table. Mixed files with both kinds of pages are fine, and a note tells you when OCR was used so you know which numbers to double-check.',
        ],
      },
      {
        h2: 'Real numbers, ready for formulas',
        paragraphs: [
          'When you convert PDF to Excel here, plain values such as 42, 3.75 or 1,250.50 are saved as real numbers, not text. SUM, AVERAGE, sorting, filters, pivot tables and charts work the moment you open the file — no “number stored as text” warnings to fix.',
          'Values that must not change are kept exactly as written: account numbers and IDs that start with zero, and values with currency signs, letters or units. Nothing is lost, and you decide how to format those columns.',
        ],
      },
      {
        h2: 'Check every page before you download',
        paragraphs: [
          'Each page of the PDF appears as its own editable table, labelled with its page number. Click any cell to correct a value, and your changes go straight into the file. When everything looks right, choose how you want it:',
        ],
        list: [
          '<strong>Excel (.xlsx):</strong> one sheet per page, named after your file and the page number. Opens in Microsoft Excel, Google Sheets, LibreOffice Calc and Numbers.',
          '<strong>CSV:</strong> all pages stacked in one file, with an empty row between pages — ideal for importing into other software.',
          '<strong>Copy:</strong> paste the table directly into an open spreadsheet, and every value lands in the right column.',
        ],
      },
      {
        h2: 'Convert several PDFs into one Excel file',
        paragraphs: [
          'Have a year of monthly statements or a folder of invoices? Drop all the PDFs in at once. Each file is converted separately, and <strong>All in one Excel file</strong> puts every page of every PDF into a single workbook, each on its own sheet.',
        ],
      },
      {
        h2: 'Why not just copy and paste?',
        paragraphs: [
          'A PDF does not store a table as rows and columns; it stores individual pieces of text at positions on the page. That is why selecting a table and pasting it into Excel puts everything in one column or mixes up the order. Fixing that by hand — splitting cells, moving values, retyping what went wrong — can take longer than typing the table from scratch.',
          'A dedicated converter reads those positions and puts each value back in its own cell, so the spreadsheet is ready to sort, filter and total immediately. When you can convert PDF to Excel free in a few seconds, there is no reason to spend an hour on copy and paste.',
        ],
      },
      {
        h2: 'What people convert from PDF to Excel',
        list: [
          'Bank and credit card statements, to sort, total and categorise transactions.',
          'Invoices, purchase orders and bills, to check amounts and track payments.',
          'Price lists, product catalogues and stock reports.',
          'Financial reports, balance sheets and annual reports.',
          'Timetables, schedules, attendance sheets and exam results.',
          'Survey results and data tables from research papers and government reports.',
        ],
      },
      {
        h2: 'Convert PDF to Excel online — no software needed',
        paragraphs: [
          'Desktop PDF software is expensive and some online tools send you a file by email or stop after two pages. This online PDF to Excel converter needs nothing but a browser. It works in Chrome, Edge, Firefox and Safari on Windows, Mac, Linux, Chromebook, Android and iPhone, so you can convert PDF to Excel online from your office computer or straight from your phone.',
          'After your first visit, the engine is cached in your browser, so the next time you use this PDF to Excel online converter, it starts even faster.',
        ],
      },
      {
        h2: 'Private: your statements never leave your device',
        paragraphs: [
          'Bank statements, salary slips and invoices contain exactly the kind of information you should not upload to an unknown server. Here, the PDF is opened, read and turned into Excel entirely inside your browser. The file never leaves your computer or phone, nothing is stored online, and there is no account that could be hacked. That is also why it can be free and unlimited: there is no server cost to limit.',
        ],
      },
      {
        h2: 'Tips for the best Excel file',
        list: [
          'Remove the password from a protected PDF before opening it here.',
          'For scanned PDFs, a clean scan at 300 DPI or more gives far more accurate numbers.',
          'Tables with clear columns, such as statements and invoices, give the best results. Merged cells and complex layouts may need a few manual fixes.',
          'Always check totals and key figures from scanned pages before using them.',
        ],
      },
      {
        h2: 'Need plain text or a photo of a table?',
        paragraphs: [
          'To get the plain text from a PDF instead of tables, use the <a href="/pdf-to-text">PDF to Text converter</a>. For photos and screenshots of tables, the <a href="/jpg-to-excel">JPG to Excel converter</a> rebuilds them as a spreadsheet, and the <a href="/">image to text converter</a> copies text from any picture.',
        ],
      },
    ],
    faq: [
      { q: 'How to convert PDF to Excel?', a: 'Drop your PDF into the box at the top of this page or click “Choose PDF”. Every page is read automatically and shown as an editable table. Check the cells, then download an Excel (.xlsx) file with one sheet per page, or a CSV file.' },
      { q: 'How can I convert PDF to Excel for free?', a: 'Use this free PDF to Excel converter. There is no signup, no watermark, no page limit and no daily limit, and it works with both digital and scanned PDFs.' },
      { q: 'Can I convert a scanned PDF to Excel?', a: 'Yes. Pages without a text layer are read with OCR, then split into rows and columns. Check numbers carefully on low-quality scans.' },
      { q: 'How do I convert a bank statement PDF to Excel?', a: 'Open the statement PDF here. The converter finds the rows and the gaps between columns and rebuilds the table cell by cell. Review the amounts in the preview, then download the Excel file. The PDF never leaves your device.' },
      { q: 'Will numbers be real numbers in Excel?', a: 'Yes. Plain values such as 1,250.50 become numbers, so SUM and charts work immediately. Values with letters, currency signs or leading zeros stay as text so nothing is lost.' },
      { q: 'Does each PDF page get its own Excel sheet?', a: 'Yes. Every page with a table lands on its own sheet in the same workbook, named after your file and the page number.' },
      { q: 'Can I edit the table before downloading?', a: 'Yes. Click any cell in the preview table to fix it. Your changes are included in the Excel or CSV file.' },
      { q: 'Can I convert several PDFs into one Excel file?', a: 'Yes. Drop all the PDFs in at once, then click “All in one Excel file” to get one workbook with every page on its own sheet.' },
      { q: 'Can I convert PDF to Excel online on my phone?', a: 'Yes. This online PDF to Excel converter works in the browser on Android and iPhone. Choose the PDF from your files and download the Excel sheet, with nothing to install.' },
      { q: 'Is the PDF uploaded to a server?', a: 'No. The file is opened and converted in your browser and never leaves your device.' },
      { q: 'Does it support password-protected PDFs?', a: 'Not yet. Remove the password first, then open the file here.' },
    ],
  },
  'word-to-text': {
    title: 'Word to Text Converter – Convert Word to Text Free',
    description:
      'Convert Word to text online free. Turn DOCX, ODT and RTF files into clean plain text (TXT) in seconds. Unlimited, no signup, files never uploaded.',
    h1: 'Word to Text Converter',
    lead: 'Convert Word to text online, free — clean plain text from DOCX, ODT and RTF files.',
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
      title: 'A Word to text converter with no formatting baggage',
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
        h2: 'A free Word to text converter for clean plain text',
        paragraphs: [
          'Copying text out of a Word document looks easy until you paste it somewhere else. Fonts, colours, odd spacing, hidden styles and smart formatting come along for the ride and break the layout of your email, website or code. This <strong>Word to text converter</strong> strips all of that away and gives you clean, plain text that pastes perfectly anywhere.',
          'It is a <strong>Word to text converter online free</strong> of limits: no signup, no watermark, no file cap and no daily quota. Drop in a single page or a hundred documents. There is nothing to install and no need to open Microsoft Word — you can convert Word to text from any browser in a second.',
        ],
      },
      {
        h2: 'Why convert Word to text?',
        paragraphs: [
          'Plain text is the universal format. Every program can open it, it never carries hidden formatting, and it stays readable for decades. People convert Word to text to:',
        ],
        list: [
          'Paste content into a website, blog or CMS editor without messing up its styling.',
          'Feed documents into AI assistants, translators, grammar checkers and other online tools.',
          'Copy text into code, scripts, configuration files and databases.',
          'Count words and characters exactly, for essays, articles and translations.',
          'Archive documents in a format that will open on any device, now and in the future.',
          'Send clean text by email or chat, without attachments.',
        ],
      },
      {
        h2: 'Why not just copy and paste from Word?',
        paragraphs: [
          'Copying from Word takes the formatting with it. Many editors, website builders and email apps accept that hidden styling and suddenly your text has the wrong font, strange spacing or broken bullet points. Even “paste as plain text” can leave curly quotes, odd line breaks and stray characters, and it only works one document at a time.',
          'When you convert Word to text with a dedicated tool, you get the whole document as clean text in one step, with tables turned into tidy tab-separated rows and lists marked clearly. For many files at once, it is far quicker than opening each document and copying by hand.',
        ],
      },
      {
        h2: 'What is kept and what is removed',
        paragraphs: [
          'The goal is text you can use straight away, so the converter keeps the structure that matters and drops everything else:',
        ],
        list: [
          '<strong>Kept:</strong> every paragraph in order, line breaks, tabs and blank lines (several blank lines in a row become one).',
          '<strong>Lists:</strong> bullet and numbered list items start with a “•”, so lists stay readable.',
          '<strong>Tables:</strong> each row becomes one line with cells separated by tabs — paste it into Excel or Google Sheets and the columns line up.',
          '<strong>Removed:</strong> fonts, colours, bold, italic, images, deleted tracked changes, field codes and hidden markup.',
          '<strong>Not included:</strong> headers, footers, footnotes and comments. Only the main body text is extracted.',
        ],
      },
      {
        h2: 'How the converter reads your document',
        paragraphs: [
          'A .docx file is really a small zip archive with the text stored inside as structured XML. This tool opens that archive in your browser and reads the text directly — no OCR, no guessing and no recognition errors. Every character comes out exactly as you typed it, which is why the result is instant even for a 200-page document.',
          'The text then appears in an editable box with a live word and character count. Fix anything you like before you copy it or save it as a TXT file.',
        ],
      },
      {
        h2: 'DOCX to TXT and other formats',
        paragraphs: [
          'The converter works with the document formats people actually use: <strong>DOCX</strong>, <strong>DOCM</strong> and <strong>DOTX</strong> from Microsoft Word, <strong>ODT</strong> and <strong>OTT</strong> from LibreOffice and OpenOffice, and <strong>RTF</strong> files from WordPad and other editors.',
          'Working in Google Docs? Choose File → Download → Microsoft Word (.docx), then drop that file here. From Apple Pages, use File → Export To → Word. Either way, you get the same clean plain text.',
        ],
      },
      {
        h2: 'Old .doc files',
        paragraphs: [
          'The old binary .doc format (Word 97–2003) is not supported. Open the file in Word, Google Docs or LibreOffice and save it as .docx, then convert it here. It takes a few seconds and gives you a much better result.',
        ],
      },
      {
        h2: 'Convert many Word files to text at once',
        paragraphs: [
          'Have a folder full of documents? Drop dozens of files into the box at once. Each one is converted separately and shown with its own text, so you can check them one by one. When you are done, use <strong>Copy all</strong> to grab everything, or download every TXT file together in one ZIP.',
        ],
      },
      {
        h2: 'Convert Word to text on your phone',
        paragraphs: [
          'Got a Word file as an email or WhatsApp attachment? You do not need the Word app. Save the attachment to your phone, open this page in Chrome or Safari on Android or iPhone, tap the box and pick the file. The plain text appears a moment later, ready to copy into a message, a note or another app. It works the same way on tablets, Chromebooks, Windows, Mac and Linux.',
        ],
      },
      {
        h2: 'Works with every language',
        paragraphs: [
          'Because the text is read straight from the file, any language your document is written in comes out correctly — English, Hindi, Arabic, Chinese, Japanese, Russian and every other script. TXT files are saved in UTF-8, so even Windows Notepad opens non-English text with the right characters.',
        ],
      },
      {
        h2: 'Private, free and unlimited',
        paragraphs: [
          'Contracts, CVs, school work and business plans often contain private information. Most online converters upload your document to a server. This one does not: the file is opened and read inside your browser, so it never leaves your computer or phone and nothing is stored online. That is also why this Word to text converter is free and unlimited — there is no server cost to limit.',
        ],
      },
      {
        h2: 'Tips for the best plain text',
        list: [
          'Accept or reject tracked changes in Word first if you want to be sure which version of the text you get.',
          'Text inside images is not extracted. Use the image to text converter for that.',
          'If a document looks empty, check that it is not an old .doc file renamed to .docx.',
        ],
      },
      {
        h2: 'Only have a scan, photo or PDF?',
        paragraphs: [
          'Use the <a href="/">image to text converter</a> for photos and screenshots, and the <a href="/pdf-to-text">PDF to text converter</a> for PDF files, including scanned ones. For presentations, the <a href="/ppt-to-text">PPT to text converter</a> extracts every slide and its speaker notes.',
        ],
      },
    ],
    faq: [
      { q: 'How do I convert Word to text?', a: 'Drop one or more Word files into the box at the top of this page. The text appears in seconds with paragraphs, lists and tables in order. Copy it, save it as a TXT file, or download all files as a ZIP.' },
      { q: 'Is this Word to text converter online free?', a: 'Yes. It is completely free, with no signup, no watermark and no limit on the number of documents.' },
      { q: 'How can I convert DOCX to TXT?', a: 'Open your .docx file here and click the TXT button to download the plain text. The file is saved in UTF-8, so it opens correctly in Notepad and every other editor.' },
      { q: 'Which Word formats are supported?', a: 'DOCX, DOCM and DOTX from Microsoft Word, ODT and OTT from LibreOffice and OpenOffice, and RTF. Old .doc files need to be saved as .docx first.' },
      { q: 'Can I convert an old .doc file to text?', a: 'Not directly. Open the .doc file in Word, Google Docs or LibreOffice, save it as .docx, then convert it here.' },
      { q: 'Are tables kept when converting Word to text?', a: 'Yes. Each table row becomes one line, with cells separated by tabs, so you can paste it into a spreadsheet.' },
      { q: 'Are headers, footers and comments included?', a: 'No. Only the main body text of the document is extracted. Headers, footers, footnotes and comments are left out.' },
      { q: 'Can I convert many Word documents to text at once?', a: 'Yes. Drop dozens of documents at once and download every TXT file together in one ZIP.' },
      { q: 'How do I convert a Google Docs document to plain text?', a: 'In Google Docs, choose File → Download → Microsoft Word (.docx), then open that file here to get clean plain text.' },
      { q: 'Is text inside images converted?', a: 'No. Only real text is extracted. For text inside pictures, use the image to text converter.' },
      { q: 'Is my document uploaded?', a: 'No. The file is read in your browser and never leaves your device.' },
    ],
  },
  'ppt-to-text': {
    title: 'PPT to Text Converter – Convert PPT to Text Free',
    description:
      'Convert PPT to text online free. Extract the text and speaker notes of every PowerPoint slide (PPTX, ODP) in seconds. Unlimited, no signup, no uploads.',
    h1: 'PPT to Text Converter',
    lead: 'Convert PPT to text online, free — every slide and its speaker notes as plain text.',
    navLabel: 'PPT to Text',
    cardText: 'Extract slide text and speaker notes from PPTX.',
    howTo: {
      title: 'How to convert PPT to text',
      steps: [
        '<strong>Add your presentation.</strong> Drop one or more .pptx or .odp files into the box.',
        '<strong>Get every slide.</strong> Text comes out slide by slide with slide numbers, and speaker notes are added below each slide automatically.',
        '<strong>Copy or download.</strong> Copy the text, save it as TXT, or download several presentations as a ZIP.',
      ],
    },
    features: {
      title: 'A PPT to text converter that keeps every slide in order',
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
        h2: 'A free PPT to text converter for every slide',
        paragraphs: [
          'Getting the words out of a PowerPoint presentation is surprisingly tedious. You click into each text box, copy, switch windows, paste, and repeat for every slide — then do it again for the speaker notes. This <strong>PPT to text converter</strong> does it all at once: drop in your presentation and you get the text of every slide, in order, as clean plain text.',
          'It is completely free, with no signup, no watermark and no limit on slides or files. Because it is a <strong>PPT to text converter online</strong>, there is nothing to install and you do not even need PowerPoint on your computer. Open the page, add your file, and convert PPT to text in a second.',
        ],
      },
      {
        h2: 'Why convert PPT to text?',
        paragraphs: [
          'Slides are great for presenting but awkward for anything else. Plain text is easy to edit, search, share and reuse. People convert PPT to text to:',
        ],
        list: [
          'Turn lecture slides into study notes they can highlight and revise.',
          'Reuse a deck’s content in a report, blog post, handout or email.',
          'Paste slide text into a translator, a grammar checker or an AI assistant to summarise it.',
          'Pull the speaker notes out as a script for a talk, webinar or video.',
          'Count words, proofread or check spelling across the whole presentation at once.',
          'Search old presentations for a fact, a figure or a quote.',
        ],
      },
      {
        h2: 'Speaker notes included automatically',
        paragraphs: [
          'The notes under your slides often contain more detail than the slides themselves — the full explanation, the talking points, the script. Most tools ignore them. This converter reads the notes of every slide and places them right below that slide’s text, marked “Notes:”, so you always know which notes belong to which slide. There is nothing to switch on: if your presentation has notes, you get them.',
        ],
      },
      {
        h2: 'Why not copy text from PowerPoint by hand?',
        paragraphs: [
          'PowerPoint keeps every title, bullet list and caption in a separate text box, so there is no simple “select all” for a whole deck. Copying slide by slide is slow, easy to get out of order, and you still miss the speaker notes unless you switch to the notes view. Outline view helps a little, but it skips text boxes that are not placeholders and tables entirely.',
          'A dedicated tool that can convert PPT to text reads every text box, table and note in one pass, keeps the slide order and labels each slide, so a 60-slide deck becomes a tidy document in a second.',
        ],
      },
      {
        h2: 'What you get from each slide',
        list: [
          '<strong>Slide markers:</strong> each slide starts with “— Slide 1 —”, “— Slide 2 —” and so on, in the order the slides appear in your presentation.',
          '<strong>Titles and text boxes:</strong> all the text on the slide, shape by shape, including grouped shapes.',
          '<strong>Bullets:</strong> bullet and numbered points start with a “•”, so lists stay readable.',
          '<strong>Tables:</strong> each table row becomes one line with cells separated by tabs, ready to paste into a spreadsheet.',
          '<strong>Speaker notes:</strong> added below each slide when the deck has them.',
          '<strong>Left out:</strong> slide numbers, dates and footers, plus text inside pictures, charts and SmartArt graphics.',
        ],
      },
      {
        h2: 'How the PPT to text converter works',
        paragraphs: [
          'A .pptx file is a zip archive that stores each slide as structured XML. The converter opens it inside your browser, follows the presentation’s own slide list so the order is always right, and reads the text directly from each slide and notes page. There is no OCR and no guessing, so every word comes out exactly as it was typed — even for a 150-slide deck, the result takes about a second.',
          'The text appears in an editable box with a live word and character count. Fix anything you like, then copy it or save it as a TXT file.',
        ],
      },
      {
        h2: 'PPTX, ODP and other presentation formats',
        paragraphs: [
          'You can convert <strong>PPTX</strong>, <strong>PPTM</strong>, <strong>PPSX</strong> and <strong>POTX</strong> files from Microsoft PowerPoint, and <strong>ODP</strong> and <strong>OTP</strong> files from LibreOffice Impress and OpenOffice.',
          'Using Google Slides? Choose File → Download → Microsoft PowerPoint (.pptx) and drop that file here. From Apple Keynote, use File → Export To → PowerPoint. Either way, you convert PPT to text with the same clean result.',
        ],
      },
      {
        h2: 'Old .ppt files',
        paragraphs: [
          'The old binary .ppt format (PowerPoint 97–2003) is not supported. Open the file in PowerPoint, Google Slides or LibreOffice Impress, save it as .pptx, and convert it here.',
        ],
      },
      {
        h2: 'Convert many presentations at once',
        paragraphs: [
          'Have a whole semester of lecture decks or a folder of sales presentations? Drop them all in at once. Each file is converted separately with its slide count shown, and you can use <strong>Copy all</strong> to grab everything or download every TXT file together in one ZIP.',
        ],
      },
      {
        h2: 'Convert PPT to text online on any device',
        paragraphs: [
          'This PPT to text converter online works in Chrome, Edge, Firefox and Safari on Windows, Mac, Linux, Chromebook, Android and iPhone. Got a presentation as an email or WhatsApp attachment on your phone? Save it, open this page, tap the box and pick the file — the slide text is ready to copy a moment later, without the PowerPoint app.',
        ],
      },
      {
        h2: 'Works with every language',
        paragraphs: [
          'Because the text is read straight from the file, any language comes out correctly: English, Hindi, Arabic, Chinese, Japanese, Russian and every other script. TXT files are saved in UTF-8, so even Windows Notepad shows non-English text properly.',
        ],
      },
      {
        h2: 'Private: your slides stay on your device',
        paragraphs: [
          'Presentations often contain unreleased plans, client names, sales figures or exam material. Most online converters upload your file to a server. This one does not: the presentation is opened and read inside your browser and never leaves your computer or phone. Nothing is stored online, which is also why the tool can stay free and unlimited.',
        ],
      },
      {
        h2: 'Tips for the best results',
        list: [
          'If a slide’s text is part of a picture, take a screenshot of that slide and use Screenshot to Text.',
          'Hidden slides are read too; delete them first if you do not want their text.',
          'Need the slides as a PDF first? Export them from PowerPoint and use PDF to Text instead.',
        ],
      },
      {
        h2: 'Text inside slide pictures and other files',
        paragraphs: [
          'Text that is part of an image on a slide cannot be extracted this way. Take a screenshot of the slide and use <a href="/screenshot-to-text">Screenshot to Text</a> instead. For documents, the <a href="/word-to-text">Word to text converter</a> works the same way, and the <a href="/pdf-to-text">PDF to text converter</a> handles PDF files, including scanned ones.',
        ],
      },
    ],
    faq: [
      { q: 'How do I convert PPT to text?', a: 'Drop one or more .pptx or .odp files into the box at the top of this page. The text of every slide comes out in order, with speaker notes below each slide. Copy it, save it as TXT, or download several presentations as a ZIP.' },
      { q: 'Is this PPT to text converter free?', a: 'Yes. It is completely free, with no signup, no watermark and no limit on slides or files.' },
      { q: 'Which PowerPoint formats are supported?', a: 'PPTX, PPTM, PPSX and POTX from PowerPoint, and ODP and OTP from LibreOffice Impress. Old .ppt files need to be saved as .pptx first.' },
      { q: 'Can I get the speaker notes from a PowerPoint?', a: 'Yes. If the presentation has notes, they appear below each slide’s text automatically, marked “Notes:”.' },
      { q: 'Is the slide order kept?', a: 'Yes. Text follows the real order of your slides, with a slide number for each, even if the slides were rearranged.' },
      { q: 'Can I convert an old .ppt file to text?', a: 'Not directly. Open the .ppt file in PowerPoint, Google Slides or LibreOffice Impress, save it as .pptx, then convert it here.' },
      { q: 'Can it extract text from pictures, charts or SmartArt on slides?', a: 'No. Only real text in text boxes, titles, tables and notes is extracted. For text inside a picture, take a screenshot of the slide and use Screenshot to Text instead.' },
      { q: 'Does it work with Google Slides?', a: 'Yes. In Google Slides choose File → Download → Microsoft PowerPoint (.pptx), then open that file here.' },
      { q: 'Can I convert PPT to text online on my phone?', a: 'Yes. This PPT to text converter online works in the browser on Android and iPhone. Save the presentation to your phone, open this page and pick the file.' },
      { q: 'Can I convert several presentations at once?', a: 'Yes. Drop as many files as you like and download every TXT file together in one ZIP.' },
      { q: 'Is my presentation uploaded?', a: 'No. Everything is read inside your browser and the file never leaves your device.' },
    ],
  },

  'image-compressor': {
    title: 'Image Compressor – Compress Images Online Free',
    description:
      'Image compressor online, free. Compress JPG, PNG and HEIC photos to the exact size you need — 20 KB, 50 KB, 100 KB or any limit. No signup, no uploads.',
    h1: 'Image Compressor',
    lead: 'A free online image compressor that shrinks photos and PDFs to the exact size you need, while keeping their original dimensions.',
    navLabel: 'Image Compressor',
    cardText: 'Compress photos and PDFs to any size in KB.',
    howTo: {
      title: 'How to compress an image',
      steps: [
        '<strong>Add your images.</strong> Drop photos or PDFs in, click “Choose files”, take a photo or paste with Ctrl+V.',
        '<strong>Pick the size.</strong> Click 20, 50, 100 or 200 KB, or type any limit. Choose JPG or PDF for images.',
        '<strong>Download.</strong> Each file is compressed just under the limit. Save one at a time or all as a ZIP.',
      ],
    },
    features: {
      title: 'An image compressor built around file size',
      items: [
        { title: 'Choose the exact size', text: 'Set a limit in KB and the file lands just under it, instead of guessing with a quality slider.' },
        { title: 'Best quality that fits', text: 'The compressor keeps the highest JPG quality that still fits, so nothing is squeezed more than needed.' },
        { title: 'Original dimensions kept', text: 'Your image keeps its width and height whenever the size allows; it is only made smaller when it truly cannot fit.' },
        { title: 'Photos and PDFs', text: 'Compress JPG, PNG, WEBP and iPhone HEIC photos, and PDF documents, in the same place.' },
        { title: 'Bulk compression', text: 'Drop many files at once and download them all together as a ZIP file.' },
        { title: 'Private and free', text: 'Everything runs in your browser. No uploads, no signup, no watermark and no daily limit.' },
      ],
    },
    sections: [
      {
        h2: 'A free image compressor that hits the size you need',
        paragraphs: [
          'Most of the time you compress a photo for one reason: something has a size limit. An online form wants a photo under 50 KB, an email will not send a 6 MB attachment, a website loads slowly because of heavy pictures. This <strong>image compressor</strong> is built for exactly that. Instead of a vague quality slider, you choose the file size you need, and every image is compressed to just under it.',
          'It is completely free: no account, no watermark, no limit on how many images you compress. And because the compression runs inside your browser, your photos are never uploaded to a server — they stay on your phone or computer the whole time.',
        ],
      },
      {
        h2: 'Image compressor online, without installing anything',
        paragraphs: [
          'This <strong>image compressor online</strong> works in Chrome, Safari, Edge and Firefox on Android, iPhone, Windows, Mac and Chromebook. There is no app to download and nothing to set up: open the page, add a picture, and the compressed version is ready in a moment. On a phone you can take a photo straight from the camera; on a computer you can paste a screenshot with Ctrl+V.',
          'Many sites that call themselves an <strong>online image compressor</strong> actually send your files to their servers and give them back later. Here the work is done by your own device, which is why it is fast even on mobile data and why your ID cards, certificates and personal photos stay private.',
        ],
      },
      {
        h2: 'How this image compressor works',
        paragraphs: [
          'Photos are saved as JPG, the format with the best size-to-quality balance for pictures. The compressor tries different JPG quality levels and keeps the highest one whose file still fits under your limit, so the result is as sharp as the size allows — usually within a few kilobytes of the limit.',
          'Compression keeps your image’s width and height exactly as they were. The only exception is a picture that is simply too large for the chosen size — a 12-megapixel phone photo squeezed into 20 KB, for example. Then the pixel size is reduced just as far as needed, and the tool tells you that it did.',
        ],
      },
      {
        h2: 'Compressing vs resizing: what is the difference?',
        paragraphs: [
          'People often use the two words for the same thing, but they are different steps. <strong>Compressing</strong> keeps the picture the same width and height and stores it more efficiently, by saving it as a JPG at a carefully chosen quality. <strong>Resizing</strong> changes the width and height in pixels — for example to the 200 × 230 pixels an exam form asks for.',
          'This page compresses. If you also need a specific pixel size, use <a href="/resize-image">resize image</a>, which sets the width and height and the file size together.',
        ],
      },
      {
        h2: 'Compress an image to 20 KB, 50 KB, 100 KB or 200 KB',
        paragraphs: [
          'These four sizes cover most upload rules, so each one has its own page with that limit ready to go:',
        ],
        list: [
          '<a href="/image-compressor-to-20kb">Image compressor to 20KB</a> — signatures and small photos for exam and job forms.',
          '<a href="/image-compressor-to-50kb">Image compressor to 50KB</a> — passport-size photos and small documents.',
          '<a href="/image-compressor-to-100kb">Image compressor to 100KB</a> — certificates, ID proofs and clearer photos.',
          '<a href="/image-compressor-to-200kb">Image compressor to 200KB</a> — detailed documents, resumes and good-quality photos.',
        ],
      },
      {
        h2: 'Any other size? Just type it',
        paragraphs: [
          'The size box on this page accepts any number from 5 KB to 10,000 KB (about 10 MB). Type 30 for a 30 KB limit, 300 for 300 KB, or 1000 for a file under 1 MB. Change the number and every file in the list is compressed again automatically, so you can try a few sizes and keep the one that looks best.',
          'A kilobyte limit is counted as 1,000 bytes, the stricter of the two ways websites measure it, so a file made for “under 50 KB” is accepted everywhere. Windows shows sizes in units of 1,024 bytes, so the same file may appear a little smaller there.',
        ],
      },
      {
        h2: 'Compress PDF files too',
        paragraphs: [
          'Drop a PDF into the same box and it is compressed to your limit as well. The compressor first tries a lossless re-save, which keeps the text selectable. If the PDF is still too large, each page is turned into a compressed image so the file fits; the pages look the same, but their text can no longer be selected, and the tool tells you when this happens. You can also save any photo as a one-page PDF by choosing PDF under “Save images as”.',
        ],
      },
      {
        h2: 'Why choose this online image compressor?',
        list: [
          '<strong>Size first:</strong> most online image compressors ask you to guess a quality level. Here you type the size you need and get it.',
          '<strong>No upload wait:</strong> files are compressed on your device, so there is no upload or download queue, even for large photos.',
          '<strong>No limits:</strong> no daily cap, no file count limit, no premium plan and no watermark.',
          '<strong>Images and PDFs:</strong> one online image compressor for photos, scans and PDF documents.',
          '<strong>Honest results:</strong> you see the old size, the new size and the dimensions of every file, and a clear note if the pixel size had to change.',
        ],
      },
      {
        h2: 'Why compress images?',
        list: [
          '<strong>Online forms:</strong> exam, job, admission and government portals reject files above their size limit.',
          '<strong>Email and chat:</strong> smaller attachments send faster and stay under mailbox limits.',
          '<strong>Websites and blogs:</strong> lighter images load faster, which visitors and search engines both like.',
          '<strong>Storage:</strong> compressed copies take a fraction of the space on your phone or cloud drive.',
        ],
      },
      {
        h2: 'Compress many images at once',
        paragraphs: [
          'Add as many photos and PDFs as you like. Each file is compressed on its own and listed with its original size, its new size and its dimensions. Download any single file, or click <strong>Download all (ZIP)</strong> to save everything in one go. PNG, WEBP and iPhone HEIC photos are converted to JPG while they are compressed, and transparent areas are filled with white.',
        ],
      },
      {
        h2: 'Tips for the best results',
        list: [
          'Crop away empty background before compressing, so the size goes to the part of the picture that matters.',
          'Pick the largest size your form or website allows — a bigger limit always means a clearer image.',
          'Keep your originals. You can always compress them again with a different limit.',
          'For a document with several pages, combine them with <a href="/image-to-pdf">image to PDF</a> first, then compress the PDF here.',
        ],
      },
    ],
    faq: [
      { q: 'What is an image compressor?', a: 'An image compressor makes a picture’s file smaller, usually by saving it as a JPG at a carefully chosen quality. This one lets you choose the exact file size you need in KB.' },
      { q: 'How do I compress an image online?', a: 'Add your image by dropping it in, clicking “Choose files” or pasting it with Ctrl+V. Pick a size such as 50 KB or type your own, then click “Download” to save the compressed file.' },
      { q: 'Is this image compressor free?', a: 'Yes. It is completely free, with no signup, no watermark and no limit on the number of images you compress.' },
      { q: 'Can I compress an image to a specific size in KB?', a: 'Yes. That is what this compressor is built for. Click 20, 50, 100 or 200 KB, or type any size from 5 KB to 10,000 KB, and the image is compressed to just under it.' },
      { q: 'Does compressing change the dimensions of my image?', a: 'No, the width and height stay the same. Only a picture too large to fit the chosen size even at low quality is made smaller in pixels, and the tool tells you when that happens.' },
      { q: 'What is the difference between compressing and resizing?', a: 'Compressing makes the file smaller and keeps the width and height. Resizing changes the width and height in pixels. To do both, use the resize image tool.' },
      { q: 'Which formats can I compress?', a: 'JPG, JPEG, PNG, WEBP, GIF, BMP, iPhone HEIC photos and PDF files. Images are saved as JPG, or as a one-page PDF if you choose.' },
      { q: 'Can I compress many images at once?', a: 'Yes. Add as many files as you like and download them one by one or together as a ZIP file.' },
      { q: 'Can I use this image compressor on my phone?', a: 'Yes. It works in the browser on Android and iPhone. Choose photos from your gallery or take one with the camera.' },
      { q: 'Are my images uploaded to a server?', a: 'No. Images are compressed inside your browser and never leave your device.' },
    ],
  },

  'image-compressor-to-20kb': {
    title: 'Image Compressor to 20KB – JPG Online, Free',
    description:
      'Image compressor to 20KB online free. Compress photos and signatures to under 20 KB JPG for exam and job forms in seconds. No signup, no uploads.',
    h1: 'Image Compressor to 20KB',
    lead: 'Image compressor to 20KB: turn photos and signatures into a JPG just under 20 KB, ready for exam, job and government forms.',
    navLabel: 'Image Compressor to 20KB',
    cardText: 'Compress photos and signatures to under 20 KB.',
    howTo: {
      title: 'How to compress an image to 20KB',
      steps: [
        '<strong>Add your photo or signature.</strong> Drop it in, click “Choose files”, take a photo on your phone or paste it with Ctrl+V.',
        '<strong>Let it compress.</strong> Every file is compressed to just under 20 KB straight away. Choose PDF if your form wants one.',
        '<strong>Download it.</strong> Click “Download”, or “Download all (ZIP)” when you have added several files.',
      ],
    },
    features: {
      title: 'Why use this image compressor to 20KB',
      items: [
        { title: 'Lands just under 20 KB', text: 'It finds the best quality that still fits, so the photo is as clear as 20 KB allows — not needlessly tiny.' },
        { title: 'JPG output', text: 'Every image is saved as a standard JPG, the format almost every form accepts. PDF output is one click away.' },
        { title: 'Dimensions kept', text: 'Small photos and signatures keep their width and height; only their file size changes.' },
        { title: 'One click, no settings', text: 'The 20 KB limit is already set. Add the file and download it — nothing else to choose.' },
        { title: 'Many files at once', text: 'Drop your photo, signature and thumb impression together and download them all as one ZIP.' },
        { title: 'Private and unlimited', text: 'Everything happens in your browser. Your photos are never uploaded, and there is no daily limit.' },
      ],
    },
    sections: [
      {
        h2: 'Image compressor to 20KB, free and online',
        paragraphs: [
          'You have filled in every field of an online application, and then the upload box says: “Photo must be less than 20 KB.” Your phone photo is 3 MB. This <strong>image compressor to 20KB</strong> fixes that in seconds. Add the picture and it is compressed automatically, kept as sharp as possible, and ready to upload.',
          'There is nothing to set: the limit is already 20 KB. There is no signup, no watermark and no limit on how many photos you compress.',
        ],
      },
      {
        h2: 'Online image compressor to 20KB — nothing to install',
        paragraphs: [
          'This <strong>online image compressor to 20KB</strong> runs in your browser on Android, iPhone, Windows, Mac and Chromebook. You do not need an app or an account. The compression is done by your own device, so it is fast even on a slow connection, and your photo, signature or ID never leaves your phone or computer. On a phone, tap <strong>Take a photo</strong> to use the camera, or pick a picture from your gallery.',
        ],
      },
      {
        h2: 'Where you need a 20 KB photo or signature',
        paragraphs: [
          'Small size limits are common on Indian online forms, because thousands of candidates upload at the same time. A limit of 20 KB is used most often for signatures and small photos. You may need it for:',
        ],
        list: [
          'Government exam forms such as SSC, railway, banking, state PSC and police recruitment.',
          'Entrance exams, scholarships and university admission portals.',
          'Job applications, internship forms and online registrations.',
          'Signature, thumb impression and handwritten declaration uploads.',
        ],
      },
      {
        h2: 'How it reaches 20 KB without ruining your photo',
        paragraphs: [
          'Quick fixes just squash the quality until the file is small enough, and the photo comes out blurry and blocky. This compressor keeps your photo’s width and height, tries different JPG quality levels and keeps the highest one that still fits under the limit. Only when a picture is too large for 20 KB — a full-size phone photo of several thousand pixels, for example — does it reduce the pixel size, just as much as needed, and it tells you when it did.',
          'The result usually lands between 17 and 20 KB — the clearest photo that 20 KB can hold. To stay on the safe side, 20 KB is counted as 20,000 bytes, the stricter of the two ways websites measure a kilobyte, so the upload is never rejected for being a few bytes over. Windows shows such a file as about 19.5 KB.',
        ],
      },
      {
        h2: 'Image compressor to 20KB JPG',
        paragraphs: [
          'Almost every form asks for a JPG or JPEG file, so that is what you get. As an <strong>image compressor to 20KB JPG</strong>, it converts PNG screenshots, WEBP images and iPhone HEIC photos to a standard JPG while compressing them. Transparent backgrounds, common in scanned signatures saved as PNG, are filled with white, so your signature does not turn into a black box.',
          'Already have a JPG? It works just as well as a <strong>JPG image compressor to 20KB</strong>: if the file is already under 20 KB, it is handed back untouched. If your form wants a PDF instead, choose <strong>PDF</strong> under “Save images as” and you get a one-page PDF under 20 KB.',
        ],
      },
      {
        h2: 'Image compressor to 20KB to 50KB (a size range)',
        paragraphs: [
          'Many forms give a range instead of a single number: “photo between 20 KB and 50 KB”. A file under 20 KB would be rejected there for being too small. For a range, always aim for the top: use the <a href="/image-compressor-to-50kb">image compressor to 50KB</a>. It lands just under 50 KB, inside the range and at the best quality the form allows.',
          'So the answer to “image compressor to 20KB to 50KB” is simple: think “50 KB maximum”. For a range of 20 KB to 100 KB, use the <a href="/image-compressor-to-100kb">image compressor to 100KB</a>, and for any other number, the main <a href="/image-compressor">image compressor</a> lets you type your own limit.',
        ],
      },
      {
        h2: 'Your form also gives a pixel size?',
        paragraphs: [
          'Some notifications ask for exact dimensions as well, for example a photo of 200 × 230 pixels and a signature of 140 × 60 pixels. This compressor keeps your picture’s own dimensions. To set the width and height too, use <a href="/resize-image-to-20kb">resize image to 20KB</a>, which crops the picture to the pixel size you need and then brings it under 20 KB.',
        ],
      },
      {
        h2: 'Which size should you pick?',
        list: [
          '<strong>“Less than 20 KB” or “maximum 20 KB”:</strong> this page — the classic use of an image compressor to 20KB, often for a signature.',
          '<strong>“Between 10 KB and 20 KB”:</strong> also this page. The result lands just under 20 KB, safely above the minimum.',
          '<strong>“20 KB to 50 KB”:</strong> the 50 KB compressor, so the photo is clearer and still inside the range.',
          '<strong>“20 KB to 100 KB”:</strong> the 100 KB compressor. With a range, always aim for the top.',
        ],
      },
      {
        h2: 'Tips for a 20 KB photo that gets accepted',
        list: [
          'Crop your photo close to the face and shoulders first. Less background means more detail where it counts.',
          'Use a plain, light background and good daylight. Busy backgrounds use up the 20 KB budget on clutter.',
          'Sign with a dark pen on clean white paper, then crop tightly around the signature before compressing it.',
          'Rename the downloaded file if the form expects a name like “photo.jpg” or “signature.jpg”.',
          'Always check the exact size in the official notification — limits change between forms.',
        ],
      },
      {
        h2: 'Many files at once, and private',
        paragraphs: [
          'Drop your photo, signature and thumb impression together. Each file is compressed on its own and listed with its old and new size and its dimensions. Download them one by one or click <strong>Download all (ZIP)</strong>. Nothing is uploaded or stored: the files disappear when you close the tab. To put several scanned pages into one file, use <a href="/image-to-pdf">image to PDF</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I compress an image to 20KB?', a: 'Add your photo by dropping it in, clicking “Choose files” or pasting it with Ctrl+V. The limit is already 20 KB, so the image is compressed straight away. Click “Download” to save the new JPG.' },
      { q: 'Is there a free online image compressor to 20KB?', a: 'Yes, this one. It is free and unlimited, works online in your browser on phone and computer, and needs no signup.' },
      { q: 'How do I compress an image to 20KB to 50KB?', a: 'Use the image compressor to 50KB. With a size range, aim for the top: the photo comes out at around 45–50 KB, inside the 20 KB to 50 KB range.' },
      { q: 'Can I compress an image to 20KB JPG?', a: 'Yes. Every image is saved as a standard JPG file, so it also works as a JPG image compressor to 20KB. PNG, WEBP and iPhone HEIC photos are converted to JPG automatically.' },
      { q: 'Does the image keep its original dimensions?', a: 'Yes, whenever possible. Only a picture too large to fit 20 KB even at low quality, such as a full-size phone photo, is made smaller, and the tool tells you when that happens.' },
      { q: 'My form also asks for a pixel size. What should I use?', a: 'Use resize image to 20KB. It sets the width and height your form asks for and keeps the file under 20 KB.' },
      { q: 'Why does my file show 19.5 KB instead of 20 KB?', a: 'The tool counts 20 KB as 20,000 bytes so that every website accepts the file. Windows shows sizes in units of 1,024 bytes, so 20,000 bytes appears as about 19.5 KB.' },
      { q: 'Can I compress a signature to 20 KB?', a: 'Yes. Scan or photograph your signature on white paper, crop it, and add it here. Transparent PNG signatures get a white background.' },
      { q: 'Can I compress several photos at once?', a: 'Yes. Add as many images as you like and download them one by one or together as a ZIP file.' },
      { q: 'Are my photos uploaded to a server?', a: 'No. The image is compressed inside your browser and never leaves your device.' },
    ],
  },

  'image-compressor-to-50kb': {
    title: 'Image Compressor to 50KB – Compress JPG & PDF Free',
    description:
      'Image compressor to 50KB online free. Compress JPG photos and PDF files to under 50 KB for exam, job and admission forms. No signup, no uploads.',
    h1: 'Image Compressor to 50KB',
    lead: 'Image compressor to 50KB: photos come out as a JPG and documents as a PDF just under 50 KB, in one click.',
    navLabel: 'Image Compressor to 50KB',
    cardText: 'Compress photos and PDFs to under 50 KB.',
    howTo: {
      title: 'How to compress an image to 50KB',
      steps: [
        '<strong>Add your files.</strong> Drop in photos or PDF documents, click “Choose files”, use your phone camera or paste with Ctrl+V.',
        '<strong>Let it compress.</strong> The limit is already 50 KB. Images come out as JPG, or as PDF if you choose.',
        '<strong>Download.</strong> Each file lands just under 50 KB. Download them one by one or as a ZIP.',
      ],
    },
    features: {
      title: 'One compressor for 50 KB photos and PDFs',
      items: [
        { title: 'Images and PDFs together', text: 'Drop photos and PDF documents in the same box. Images come out as JPG, PDFs stay PDF.' },
        { title: 'Best quality under 50 KB', text: 'The compressor keeps the highest quality that fits, so the file lands just under 50 KB instead of far below it.' },
        { title: 'Photo to 50 KB PDF', text: 'Need a photo or scan as a PDF? Choose PDF and get a one-page PDF under 50 KB.' },
        { title: 'Text kept when possible', text: 'PDFs are first shrunk without touching the text. Pages are only turned into images when that is the only way to fit.' },
        { title: 'Dimensions kept', text: 'Your image keeps its width and height; only the file size changes.' },
        { title: 'Online, private, unlimited', text: 'It runs in your browser: nothing to install, nothing uploaded, no daily cap.' },
      ],
    },
    sections: [
      {
        h2: 'Image compressor to 50KB in seconds',
        paragraphs: [
          'A 50 KB limit is one of the most common rules on online application forms — for passport-size photos, scanned signatures, mark sheets and ID proofs. Phone photos are usually 2 to 5 MB, a hundred times too big. This <strong>image compressor to 50KB</strong> shrinks your file the moment you add it and gives you something ready to upload.',
          'Unlike most compressors, it does not stop at images. Drop a PDF document into the same box and get it back under 50 KB too, so every upload for a form can be prepared on one page.',
        ],
      },
      {
        h2: 'Online image compressor to 50KB',
        paragraphs: [
          'This <strong>online image compressor to 50KB</strong> opens in your browser and works there. There is no app to download, no account and no watermark. The compression runs on your own device, so your files are never uploaded to a server and the result appears almost instantly, even on mobile data. On a phone, tap <strong>Choose files</strong> to pick from your gallery, or <strong>Take a photo</strong> to use the camera.',
        ],
      },
      {
        h2: 'Image compressor to 50KB JPG',
        paragraphs: [
          'Forms almost always want photos as JPG or JPEG, so every image is saved as a JPG. PNG screenshots, WEBP pictures and iPhone HEIC photos are converted on the way, and transparent backgrounds are placed on white so they look right as a JPG. That makes this an <strong>image compressor to 50KB JPG</strong> for any picture you have.',
          'To reach 50 KB, the tool keeps your image’s width and height, tests JPG quality levels and keeps the highest one that fits. Only if the picture is too large to fit at all — like a full-resolution phone photo — is the pixel size reduced, and the tool tells you so. Already have a JPG that is too big? As a <strong>JPG image compressor to 50KB</strong>, it works the same way, and a JPG that is already under 50 KB is returned untouched.',
        ],
      },
      {
        h2: 'Compress a PDF or make a 50 KB PDF',
        paragraphs: [
          'Many portals ask for documents — caste certificates, mark sheets, Aadhaar cards — as a PDF under 50 KB. There are two ways to get one here:',
        ],
        list: [
          '<strong>You have a photo or scan of the document:</strong> choose <strong>PDF</strong> under “Save images as”. The image is compressed and placed on a single PDF page, and the whole PDF stays under 50 KB.',
          '<strong>You already have a PDF:</strong> just drop it in. The tool first tries to shrink it without changing anything you can see. If that is not enough, each page is turned into a compressed image, so the PDF fits under 50 KB.',
        ],
      },
      {
        h2: 'What happens to the text in a compressed PDF',
        paragraphs: [
          'A PDF made in Word or downloaded from a website contains real text. When the tool has to turn its pages into images to reach 50 KB, the text still looks the same but can no longer be selected or searched, and the tool tells you when this happened. For uploads to a form this does not matter — the reviewer only needs to read it. Long documents with many pages will look softer at 50 KB, so use a larger limit if the form allows it.',
        ],
      },
      {
        h2: 'What a 50 KB photo looks like',
        paragraphs: [
          'A photo of roughly 400 to 500 pixels wide fits in 50 KB at good quality, which is plenty for a passport-size photo on a form. Smaller pictures, like a cropped face or a signature, keep their original size and simply get a higher quality. Only a large phone photo is reduced in pixels — and the note under the file tells you when that happened.',
        ],
      },
      {
        h2: 'Image compressor to 50KB to 100KB',
        paragraphs: [
          'Some forms ask for a file between 50 KB and 100 KB. A 50 KB file could be rejected there, so aim for the top of the range instead and use the <a href="/image-compressor-to-100kb">image compressor to 100KB</a>. It lands between 90 and 100 KB, comfortably inside the range. That is the whole trick behind “image compressor to 50KB to 100KB”: think “100 KB maximum”.',
          'The same idea works the other way. For a photo that must be between 20 KB and 50 KB, this page is right. For a signature under 20 KB, use the <a href="/image-compressor-to-20kb">image compressor to 20KB</a>, and for any other number, the main <a href="/image-compressor">image compressor</a>.',
        ],
      },
      {
        h2: 'Your form also gives a pixel size?',
        paragraphs: [
          'Notifications often state both, such as “photo 200 × 230 pixels, 20–50 KB”. This compressor keeps your picture’s own dimensions. To set the pixel size as well, use <a href="/resize-image-to-50kb">resize image to 50KB</a>: it crops the photo to the width and height you need, then brings it under 50 KB.',
          'A 50 KB limit is counted as 50,000 bytes, the stricter way to measure a kilobyte, so no website rejects your file. Windows and some phones show 50,000 bytes as about 48.8 KB — that is expected.',
        ],
      },
      {
        h2: 'Good habits for upload-ready files',
        list: [
          'Crop away background, tables and fingers before you compress — every kilobyte then goes to the part that matters.',
          'Photograph documents flat, from straight above, in daylight. Shadows and blur cost size and readability.',
          'For multi-page documents, combine the pages with <a href="/image-to-pdf">image to PDF</a> first, then compress the PDF here.',
          'Give the downloaded file a clear name, such as “photo.jpg” or “marksheet.pdf”, before uploading.',
        ],
      },
      {
        h2: 'Many files at once, and safe for personal documents',
        paragraphs: [
          'Applications usually need a photo, a signature and a few documents. Drop them all in together: each file is compressed on its own and listed with its old and new size. Download any single file, or click <strong>Download all (ZIP)</strong>. ID cards and certificates stay on your device — nothing is uploaded or stored, and the files disappear when you close the tab.',
        ],
      },
    ],
    faq: [
      { q: 'How do I compress an image to 50KB?', a: 'Add your photo by dropping it in, clicking “Choose files” or pasting it with Ctrl+V. The limit is already 50 KB, so the image is compressed straight away. Click “Download” to save it.' },
      { q: 'Is there a free online image compressor to 50KB?', a: 'Yes, this one. It is free and unlimited, with no signup and no watermark, and works online in your browser with nothing to install.' },
      { q: 'Can I compress an image to 50KB JPG?', a: 'Yes. Every image is saved as a JPG, so it also works as a JPG image compressor to 50KB. PNG, WEBP and iPhone HEIC files are converted to JPG automatically.' },
      { q: 'Can I compress a PDF to 50 KB here?', a: 'Yes. PDF files go in the same box as images. The tool first shrinks the PDF without changing it, and if that is not enough, turns the pages into compressed images so it fits under 50 KB.' },
      { q: 'How do I make a 50 KB PDF from a photo?', a: 'Choose PDF under “Save images as” and add your photo or scan. You get a one-page PDF under 50 KB.' },
      { q: 'How do I compress an image to 50KB to 100KB?', a: 'Use the image compressor to 100KB. The file will land just under 100 KB, inside the 50 KB to 100 KB range.' },
      { q: 'Does compressing change my photo’s dimensions?', a: 'No. The width and height stay the same unless the picture is too large to fit 50 KB at all; then it is made smaller and the tool tells you.' },
      { q: 'My form also asks for a pixel size. What should I use?', a: 'Use resize image to 50KB. It sets the width and height your form asks for and keeps the file under 50 KB.' },
      { q: 'Why does my 50 KB file show as 48.8 KB?', a: 'The tool counts 50 KB as 50,000 bytes so every website accepts the file. Windows shows sizes in units of 1,024 bytes, so it displays about 48.8 KB.' },
      { q: 'Are my files uploaded?', a: 'No. Photos and PDFs are compressed inside your browser and never leave your device.' },
    ],
  },

  'image-compressor-to-100kb': {
    title: 'Image Compressor to 100KB – JPG & PDF Online',
    description:
      'Image compressor to 100KB online free. Compress photos and PDFs to a clear JPG or PDF under 100 KB. Works on phone and PC. No signup, no uploads.',
    h1: 'Image Compressor to 100KB',
    lead: 'Image compressor to 100KB: get a sharp JPG or PDF just under 100 KB, ready for any upload form.',
    navLabel: 'Image Compressor to 100KB',
    cardText: 'Compress photos and PDFs to under 100 KB.',
    howTo: {
      title: 'How to compress an image to 100KB',
      steps: [
        '<strong>Add your photos or PDFs.</strong> Drop them in, click “Choose files”, take a photo or paste with Ctrl+V.',
        '<strong>Let it compress.</strong> 100 KB is already set. Choose JPG or PDF for images.',
        '<strong>Download.</strong> Each file is ready in a moment, just under 100 KB. Download one file or all of them as a ZIP.',
      ],
    },
    features: {
      title: 'A sharper result at 100 KB',
      items: [
        { title: 'Uses the full 100 KB', text: 'The compressor keeps the highest quality that fits, so you get a readable image just under 100 KB.' },
        { title: 'JPG or PDF download', text: 'Save images as JPG, or as a one-page PDF. PDF files you add come back as smaller PDFs.' },
        { title: 'Documents stay readable', text: '100 KB leaves room for detail, so certificates and mark sheets keep their small print.' },
        { title: 'Dimensions kept', text: 'Width and height stay as they are; only the file gets smaller.' },
        { title: 'Batch and ZIP', text: 'Add many files at once and download them together as one ZIP file.' },
        { title: 'Nothing uploaded', text: 'The compression runs in your browser, so your documents never leave your phone or computer.' },
      ],
    },
    sections: [
      {
        h2: 'Image compressor to 100KB, free and online',
        paragraphs: [
          'A limit of 100 KB is generous compared with 20 KB, but a photo straight from a phone camera is still 20 to 50 times larger. This <strong>image compressor to 100KB</strong> shrinks the file to just under the limit as soon as you add it, keeping as much detail as 100 KB can hold, so documents stay readable and photos stay sharp.',
          'It is free, with no signup, no watermark and no limit on the number of files, and photos and PDFs go in the same box.',
        ],
      },
      {
        h2: 'When forms ask for a file under 100 KB',
        paragraphs: [
          'The 100 KB limit is common wherever a document needs to be read, not just recognised. You will see it on:',
        ],
        list: [
          'Certificates, mark sheets and caste or income certificates for admissions and scholarships.',
          'ID proofs such as Aadhaar, PAN and voter ID for government and bank forms.',
          'Photos and documents for job portals, visa and passport-related forms.',
          'Email attachments and websites that limit the size of each upload.',
        ],
      },
      {
        h2: 'Online image compressor to 100KB — how it works',
        paragraphs: [
          'Many compressors only lower the quality by a fixed amount, which wastes the limit: the file ends up blurry at 40 KB when 100 KB was allowed. This <strong>online image compressor to 100KB</strong> keeps your image’s width and height and finds the highest JPG quality that still fits just under the limit. Only when the picture is too large for 100 KB at reasonable quality is the pixel size reduced, as little as possible, and the tool tells you.',
          'The limit is counted as 100,000 bytes, the stricter of the two kilobyte definitions websites use, so the upload is always accepted. On Windows the file will show as about 97 KB — that is the same file measured in units of 1,024 bytes. It all runs in your browser: no software, no account, no upload.',
        ],
      },
      {
        h2: 'Image compressor to 100KB JPG',
        paragraphs: [
          'JPG is the format almost every website accepts for photos and scans, so images are saved as JPG by default. PNG, WEBP and iPhone HEIC photos are converted automatically, and transparent backgrounds are filled with white. As an <strong>image compressor to 100KB JPG</strong>, it also leaves good files alone: an image that is already a JPG under 100 KB is returned as it is, without any loss.',
        ],
      },
      {
        h2: 'Compress a PDF to 100 KB',
        paragraphs: [
          'When a form wants a PDF, choose <strong>PDF</strong> under “Save images as”. Your photo or scan is compressed and placed on one PDF page, and the whole PDF stays under 100 KB.',
          'You can also drop an existing PDF. The tool first tries to make it smaller without changing it, which keeps the text selectable. If the PDF is still too large, each page is turned into a compressed image so the file fits — the pages look the same, but the text can no longer be selected, and the tool tells you when this happened. 100 KB is usually enough for a clear one- or two-page document.',
        ],
      },
      {
        h2: 'What a 100 KB image looks like',
        paragraphs: [
          'At 100 KB there is real room for detail. A photo of roughly 700 to 900 pixels wide fits at good quality — sharp on screen and fine for a printed passport-size photo. A photo of a one-page document usually keeps its letters readable, even small print and stamps. Images with a lot of fine detail need more space in a JPG, so a very large detailed photo may be reduced in pixels to fit.',
        ],
      },
      {
        h2: 'Choosing the right limit',
        paragraphs: [
          'Always use the largest size the form allows, because a bigger file is a clearer file. If the form says “between 50 KB and 100 KB”, this page is right: the result lands just below 100 KB, inside the range. For tighter limits, use the <a href="/image-compressor-to-50kb">image compressor to 50KB</a> or <a href="/image-compressor-to-20kb">image compressor to 20KB</a>; for more room, the <a href="/image-compressor-to-200kb">image compressor to 200KB</a>. For any other number, the main <a href="/image-compressor">image compressor</a> lets you type your own.',
        ],
      },
      {
        h2: 'Your form also gives a pixel size?',
        paragraphs: [
          'This compressor keeps your picture’s own width and height. If a form also asks for exact dimensions, use <a href="/resize-image-to-100kb">resize image to 100KB</a>, which crops the image to the pixel size you need and then brings it under 100 KB.',
        ],
      },
      {
        h2: 'Is 100 KB enough for a passport photo?',
        paragraphs: [
          'More than enough. A passport-size photo on a form is usually shown at a few hundred pixels, and at that size 100 KB lets the compressor use a very high JPG quality — the photo looks practically the same as the original. If the form only allows 50 KB or 20 KB, use the smaller compressors instead; the photo will still be perfectly usable.',
        ],
      },
      {
        h2: 'Compress photos for email and websites',
        paragraphs: [
          'A 100 KB photo is also a sensible size outside of forms. Ten photos of 100 KB each fit easily in a single email, and pictures of that size load quickly on a website or blog without looking blurry on a phone screen. Drop the whole set in at once and download them together as a ZIP: each one is compressed separately to just under 100 KB, and you can see the old and new size of every file before you send them.',
        ],
      },
      {
        h2: 'Compress many files for one application',
        paragraphs: [
          'Most applications need several uploads at once — a photo, a signature, an ID proof and a certificate or two. Drop them all in together. Each file is compressed on its own and listed with its old size, its new size and its dimensions, so you can check everything at a glance. Download each one separately, or click <strong>Download all (ZIP)</strong>.',
        ],
      },
      {
        h2: 'Tips for clear documents at 100 KB',
        list: [
          'Scan or photograph the document flat, in daylight, from directly above.',
          'Crop off the table or floor around the page before compressing, so the detail goes to the document.',
          'For a document with several pages, combine them with <a href="/image-to-pdf">image to PDF</a> and then compress the PDF here.',
          'To copy text out of a document instead, try the <a href="/">image to text converter</a> or <a href="/pdf-to-text">PDF to text</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I compress an image to 100KB?', a: 'Add your photo by dropping it in, clicking “Choose files” or pasting it with Ctrl+V. The limit is already 100 KB, so the image is compressed straight away. Click “Download” to save it.' },
      { q: 'Is there a free online image compressor to 100KB?', a: 'Yes, this one. It is free and unlimited, with no signup and no watermark, and works in your browser on phone and computer.' },
      { q: 'Can I compress an image to 100KB JPG?', a: 'Yes. Images are saved as JPG by default. PNG, WEBP and iPhone HEIC photos are converted to JPG automatically.' },
      { q: 'Can I compress a PDF to 100 KB?', a: 'Yes. Drop the PDF in and it is compressed to under 100 KB. You can also turn a photo into a one-page PDF under 100 KB by choosing PDF.' },
      { q: 'Will my document still be readable at 100 KB?', a: 'Usually, yes. The compressor uses as much of the 100 KB as it can, so one- and two-page documents stay clear. Very long PDFs get softer.' },
      { q: 'Does compressing change my image’s dimensions?', a: 'No. The width and height stay the same unless the picture is too large to fit 100 KB at all; then it is made smaller and the tool tells you.' },
      { q: 'My form also asks for a pixel size. What should I use?', a: 'Use resize image to 100KB. It sets the width and height your form asks for and keeps the file under 100 KB.' },
      { q: 'Why does my file show as 97 KB?', a: 'The tool counts 100 KB as 100,000 bytes so that every website accepts it. Windows measures in units of 1,024 bytes, so the same file shows as about 97 KB.' },
      { q: 'Can I compress many images at once?', a: 'Yes. Add as many photos and PDFs as you like and download them one by one or together as a ZIP file.' },
      { q: 'Are my files uploaded to a server?', a: 'No. The files are compressed inside your browser and never leave your device.' },
    ],
  },

  'image-compressor-to-200kb': {
    title: 'Image Compressor to 200KB – Online, JPG & PDF',
    description:
      'Image compressor to 200KB online free. Compress JPG photos and PDF files to under 200 KB with sharp quality. Works on phone and PC. No signup, no uploads.',
    h1: 'Image Compressor to 200KB',
    lead: 'Image compressor to 200KB: photos and PDFs just under 200 KB, with room for sharp detail and readable documents.',
    navLabel: 'Image Compressor to 200KB',
    cardText: 'Compress photos and PDFs to under 200 KB.',
    howTo: {
      title: 'How to compress an image to 200KB',
      steps: [
        '<strong>Add your files.</strong> Drop photos or PDFs in, click “Choose files”, take a photo or paste with Ctrl+V.',
        '<strong>Let it compress.</strong> The limit is already 200 KB. Choose JPG or PDF for images.',
        '<strong>Download.</strong> Each file lands just under 200 KB. Save them one by one or as a ZIP.',
      ],
    },
    features: {
      title: 'Why compress to 200 KB here',
      items: [
        { title: 'Quality close to the original', text: '200 KB is enough for a sharp photo, so most pictures keep their full dimensions and look almost unchanged.' },
        { title: 'JPG and PDF', text: 'Images come out as JPG or a one-page PDF; PDF files come back as smaller PDFs.' },
        { title: 'Multi-page PDFs', text: 'A 200 KB budget leaves room for documents of several pages that stay readable.' },
        { title: 'Exact size limit', text: 'The file lands just under 200 KB, counted strictly, so every upload box accepts it.' },
        { title: 'Bulk with ZIP', text: 'Compress a whole set of photos or documents at once and download them together.' },
        { title: 'Private by design', text: 'Files are compressed inside your browser and never uploaded to any server.' },
      ],
    },
    sections: [
      {
        h2: 'Image compressor to 200KB — sharp, small, ready to upload',
        paragraphs: [
          'A 200 KB limit is the comfortable one. It is small enough for any upload form or email, but large enough that a photo can keep most of its detail. This <strong>image compressor to 200KB</strong> takes your photo or PDF, compresses it to just under 200 KB, and keeps it as close to the original as that size allows.',
          'It is free and unlimited, with no signup and no watermark, and everything happens in your browser. Add a file and the compressed version is ready in a moment.',
        ],
      },
      {
        h2: 'Where a 200 KB limit is used',
        list: [
          'Job portals and recruitment forms that accept a photo, resume scan or certificate up to 200 KB.',
          'Scholarship, admission and government services where documents must stay readable.',
          'Visa, passport-related and bank forms with a per-file limit.',
          'Online marketplaces, blogs and websites, where 200 KB images load fast without looking cheap.',
          'Email and chat, where several photos at 200 KB each still send quickly.',
        ],
      },
      {
        h2: 'Online image compressor to 200KB',
        paragraphs: [
          'This <strong>online image compressor to 200KB</strong> works in Chrome, Safari, Edge and Firefox on Android, iPhone, Windows, Mac and Chromebook. There is nothing to install. Because the compression runs on your own device, your files are never uploaded, and the result appears quickly even on mobile data. On a phone you can take a photo with the camera; on a computer, paste a screenshot with Ctrl+V.',
        ],
      },
      {
        h2: 'Image compressor to 200KB JPG',
        paragraphs: [
          'Images are saved as JPG, the format every website accepts for photos. PNG, WEBP and iPhone HEIC pictures are converted while they are compressed, and transparent backgrounds are filled with white. As an <strong>image compressor to 200KB JPG</strong>, it keeps your picture’s width and height whenever it fits and simply picks the highest JPG quality under the limit. At 200 KB, many photos up to around 1,500 pixels wide keep their full size.',
          'It works just as well as a <strong>JPG image compressor to 200KB</strong> for photos that are already JPG: large camera files are compressed, and a JPG that is already under 200 KB is returned untouched, with no quality lost.',
        ],
      },
      {
        h2: 'Image compressor to 200KB PDF',
        paragraphs: [
          'Need a PDF instead? As an <strong>image compressor to 200KB PDF</strong>, the tool works two ways:',
        ],
        list: [
          '<strong>From a photo or scan:</strong> choose <strong>PDF</strong> under “Save images as”. The image is compressed and placed on one PDF page, and the whole PDF stays under 200 KB.',
          '<strong>From an existing PDF:</strong> drop it in. It is first re-saved without changes, which keeps the text selectable. If it is still over 200 KB, its pages are turned into compressed images so it fits, and the tool tells you that the text can no longer be selected.',
        ],
      },
      {
        h2: 'Why 200 KB keeps documents readable',
        paragraphs: [
          'With 20 KB or 50 KB, a document has to give up a lot of detail. With 200 KB there is room to spare: a one-page certificate keeps small print, stamps and signatures crisp, and a PDF of three or four pages usually stays clear enough to read on screen. If the form allows 200 KB, use all of it — the reviewer will thank you.',
        ],
      },
      {
        h2: 'Compressing photos for websites and online shops',
        paragraphs: [
          'Heavy images are the most common reason a web page loads slowly, and slow pages lose visitors. A product photo or blog image straight from a phone can be 3 to 5 MB; at 200 KB it loads many times faster and still looks sharp on a laptop or phone screen. That makes this image compressor to 200KB a quick way to prepare pictures for an online store, a blog post, a portfolio or a classified ad. Drop the whole set of photos at once and download them as one ZIP file.',
        ],
      },
      {
        h2: 'From several megabytes to under 200 KB',
        paragraphs: [
          'Modern phones take photos of 12 megapixels or more, around 4000 × 3000 pixels. Such a photo cannot fit in 200 KB at its full size, so the compressor lowers the pixel size just as far as needed — often to around 1,000 to 1,500 pixels on the long side, depending on how much detail the photo has — and keeps a clean JPG quality. The note under the file tells you when this happened. For screens, forms and email that is still plenty of detail.',
        ],
      },
      {
        h2: 'Other sizes and pixel sizes',
        paragraphs: [
          'If your form asks for less, use the <a href="/image-compressor-to-100kb">image compressor to 100KB</a>, <a href="/image-compressor-to-50kb">image compressor to 50KB</a> or <a href="/image-compressor-to-20kb">image compressor to 20KB</a>. For any other limit, such as 300 KB or 1 MB, open the main <a href="/image-compressor">image compressor</a> and type the number. For a range such as “100 KB to 200 KB”, this page is right: the file lands just below 200 KB, inside the range.',
          'If you need an exact width and height as well — say 1200 × 800 pixels for a listing photo — use <a href="/resize-image-to-200kb">resize image to 200KB</a>, which sets the pixel size and keeps the file under 200 KB.',
        ],
      },
      {
        h2: 'Tips for the best 200 KB file',
        list: [
          'Crop away empty space first, so the size goes to the subject.',
          'Shoot documents in daylight from straight above; shadows and blur waste kilobytes.',
          'For a document with several pages, combine them with <a href="/image-to-pdf">image to PDF</a>, then compress the PDF here.',
          'Keep the originals, so you can compress again to a different limit later.',
          'Check the new size and dimensions shown in the list before you upload or send the file.',
        ],
      },
      {
        h2: 'Your files stay with you',
        paragraphs: [
          'Resumes, ID cards and family photos are personal. This compressor never uploads them: the work happens inside your browser, nothing is stored online, and closing the tab removes everything. The 200 KB limit is counted as 200,000 bytes, so Windows will show the file as about 195 KB — the same file, measured in units of 1,024 bytes.',
        ],
      },
    ],
    faq: [
      { q: 'How do I compress an image to 200KB?', a: 'Add your photo by dropping it in, clicking “Choose files” or pasting it with Ctrl+V. The limit is already 200 KB, so the image is compressed straight away. Click “Download” to save it.' },
      { q: 'Is there a free online image compressor to 200KB?', a: 'Yes, this one. It is free and unlimited, needs no signup, and works online in your browser on phone and computer.' },
      { q: 'Can I compress an image to 200KB JPG?', a: 'Yes. Images are saved as JPG, so it also works as a JPG image compressor to 200KB. PNG, WEBP and iPhone HEIC photos are converted to JPG automatically.' },
      { q: 'How do I compress an image to 200KB PDF?', a: 'Choose PDF under “Save images as” to get a one-page PDF under 200 KB, or drop an existing PDF to compress it to under 200 KB.' },
      { q: 'Will my photo lose quality at 200 KB?', a: 'Very little in most cases. 200 KB is enough for a sharp photo, and the compressor keeps the highest quality that fits, usually at the original dimensions.' },
      { q: 'Does compressing change my image’s dimensions?', a: 'Not when it can be avoided. Only a very large photo that cannot fit 200 KB even at low quality is made smaller in pixels, and the tool tells you when that happens.' },
      { q: 'Can I compress a multi-page PDF to 200 KB?', a: 'Yes. A PDF of a few pages usually stays readable at 200 KB. Very long PDFs get softer.' },
      { q: 'Why does my file show as 195 KB?', a: 'The tool counts 200 KB as 200,000 bytes so every website accepts it. Windows shows sizes in units of 1,024 bytes, so it displays about 195 KB.' },
      { q: 'Can I compress several images at once?', a: 'Yes. Add as many files as you like and download them one by one or together as a ZIP file.' },
      { q: 'Are my files uploaded?', a: 'No. Everything is compressed inside your browser and never leaves your device.' },
    ],
  },

  'resize-image': {
    title: 'Resize Image Online – Resize Image in KB & Pixels',
    description:
      'Resize image online free. Resize image in KB and pixels together — set width, height and a size limit for exam forms, IDs and websites. No uploads.',
    h1: 'Resize Image',
    lead: 'Resize image online in pixels and KB: choose the width, height and size limit, and download a JPG or PDF that fits both.',
    navLabel: 'Resize Image',
    cardText: 'Set width, height and KB size together.',
    howTo: {
      title: 'How to resize an image',
      steps: [
        '<strong>Add your image.</strong> Drop it in, click “Choose files”, take a photo or paste it with Ctrl+V.',
        '<strong>Set the size.</strong> Type the width and height in pixels or pick a preset, then choose the maximum KB.',
        '<strong>Download.</strong> The resized JPG or PDF is ready straight away. Download one file or all of them as a ZIP.',
      ],
    },
    features: {
      title: 'Pixels and kilobytes, handled together',
      items: [
        { title: 'Exact width and height', text: 'Type the pixel size you need. A different shape is centre-cropped, so nothing is stretched or squashed.' },
        { title: 'Size limit in KB', text: 'Pick 20, 50, 100 KB or any number, and the resized file lands just under it.' },
        { title: 'Form presets', text: 'One click for common exam-form sizes: photo 200 × 230 and signature 140 × 60 pixels.' },
        { title: 'Keep proportions', text: 'Fill in only the width or only the height and the other side follows the original shape.' },
        { title: 'JPG or PDF', text: 'Save resized images as JPG, or as a one-page PDF when a form asks for PDF.' },
        { title: 'Private and free', text: 'Resizing happens in your browser. Nothing is uploaded, and there are no limits or watermarks.' },
      ],
    },
    sections: [
      {
        h2: 'Resize image online in pixels and KB',
        paragraphs: [
          'Online forms rarely ask for just one thing. A typical rule reads: “Photo 200 × 230 pixels, size 20–50 KB.” A picture from your phone is neither. This tool lets you <strong>resize image</strong> files to both rules at once: set the width and height in pixels, set the maximum size in KB, and download a file that meets both.',
          'It is free, with no signup, no watermark and no daily limit. Everything happens in your browser, so your photos and documents are never uploaded to a server.',
        ],
      },
      {
        h2: 'How to set the pixel size',
        paragraphs: [
          'Type the width and the height into the two boxes. If your picture has a different shape, it is centre-cropped to fill the new size exactly — never stretched or squashed — so a face stays a face. If you fill in only the width or only the height, the other side is worked out from the original proportions, and nothing is cropped.',
          'Leave both boxes empty, or click <strong>Original</strong>, to keep the image’s own dimensions and change only the file size. The presets fill in the sizes many bank and government exam forms use: <strong>Photo 200 × 230</strong> and <strong>Signature 140 × 60</strong> pixels. Always check your own notification, because the sizes vary from form to form.',
        ],
      },
      {
        h2: 'Resize image in KB',
        paragraphs: [
          'To resize image in KB, choose the maximum file size next to the pixel size: 10, 20, 30, 50, 100, 200 or 500 KB, or type any number from 5 to 10,000. The image is saved as a JPG at the highest quality that still fits under the limit, so it is as clear as the size allows.',
          'If the pixel size you asked for cannot fit under the KB limit even at low quality — a large size with a tiny limit — the tool makes the picture a little smaller and tells you. With the usual form sizes, such as 200 × 230 at 20–50 KB, this does not happen.',
        ],
      },
      {
        h2: 'Resize image to 20KB, 50KB, 100KB or 200KB',
        paragraphs: [
          'These four limits come up most often, so each has its own page with the size fixed and the pixel options ready. For a range — people often search for “resize image to 20KB to 50KB” — pick the top of the range, here 50 KB, so the file is as clear as the form allows.',
        ],
        list: [
          '<a href="/resize-image-to-20kb">Resize image to 20KB</a> — signatures and small photos.',
          '<a href="/resize-image-to-50kb">Resize image to 50KB</a> — passport-size photos and small documents.',
          '<a href="/resize-image-to-100kb">Resize image to 100KB</a> — certificates, ID proofs and clearer photos.',
          '<a href="/resize-image-to-200kb">Resize image to 200KB</a> — detailed documents, resumes and website photos.',
        ],
      },
      {
        h2: 'Resize or compress?',
        paragraphs: [
          '<strong>Resizing</strong> changes the width and height of a picture in pixels. <strong>Compressing</strong> keeps the width and height and makes the file smaller. This page does both, because forms usually ask for both. If you only need a smaller file and want to keep the dimensions, the <a href="/image-compressor">image compressor</a> is simpler.',
        ],
      },
      {
        h2: 'Pixels, centimetres and DPI',
        paragraphs: [
          'Some forms describe the photo in centimetres, such as 3.5 × 4.5 cm. On a screen, size is measured in pixels, and the link between the two is the resolution in DPI (dots per inch): pixels = centimetres × DPI ÷ 2.54. At 200 DPI, for example, 3.5 × 4.5 cm works out to about 276 × 354 pixels. Most notifications also state the pixel size directly — when they do, use that, because the upload portal checks pixels and kilobytes, not centimetres.',
        ],
      },
      {
        h2: 'Resizing for websites and social media',
        paragraphs: [
          'Online shops, blogs and social networks look best when every picture has the same shape and size. Type the size once — 1200 × 1200 for square product photos, 1200 × 630 for a link preview, 400 × 400 for a profile picture — add all your images, and they are all cropped from the centre to that size. Set the KB limit to 200 or 500 to keep pages fast while the pictures stay sharp.',
        ],
      },
      {
        h2: 'Online resize image tool for phone and PC',
        paragraphs: [
          'Most applications are filled in on a phone, so this online resize image tool works in Chrome and Safari on Android and iPhone as well as on Windows, Mac and Chromebook. Tap <strong>Take a photo</strong> to use the camera, or choose a picture from your gallery. iPhone HEIC photos are converted automatically. The resized file goes to your Downloads folder, ready to choose in the form’s upload box.',
        ],
      },
      {
        h2: 'Resize images in bulk',
        paragraphs: [
          'Add several images at once — a photo, a signature and a thumb impression, or a whole folder of product pictures. Each one is resized to the same settings and listed with its old and new size and its dimensions. Download them one by one, or click <strong>Download all (ZIP)</strong>. Change a setting and every file is resized again automatically.',
        ],
      },
      {
        h2: 'Common uses',
        list: [
          '<strong>Exam and job forms:</strong> photo and signature at the exact pixel size and KB limit in the notification.',
          '<strong>ID and document uploads:</strong> a scan resized to a readable size that stays under the portal’s limit.',
          '<strong>Websites and online shops:</strong> product photos at one consistent size, such as 1200 × 1200 pixels.',
          '<strong>Social media and profiles:</strong> a square photo for a profile picture or avatar.',
          '<strong>Email:</strong> smaller pictures that send quickly and open fast.',
        ],
      },
      {
        h2: 'JPG or PDF output',
        paragraphs: [
          'Resized images are saved as JPG, the format almost every website accepts. PNG, WEBP and HEIC files are converted, and transparent backgrounds are filled with white. If a form wants a PDF, choose <strong>PDF</strong> under “Save images as” to get a one-page PDF of the resized picture. You can also drop a PDF in; it keeps its pages and is compressed to the KB limit.',
        ],
      },
      {
        h2: 'Tips for a sharp resized image',
        list: [
          'Start from the original photo, not a screenshot of it, so there is enough detail to work with.',
          'Crop roughly to the subject first if the shape is very different from the target size.',
          'Use the largest KB limit the form allows; more kilobytes means a clearer picture.',
          'Rename the file before uploading if the form expects a name such as “photo.jpg”.',
        ],
      },
      {
        h2: 'Private by design',
        paragraphs: [
          'Your photos, signatures and ID documents are resized inside your browser. They are never sent to a server, never stored online, and they disappear when you close the tab. To pull the text out of a picture instead, use the <a href="/">image to text converter</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I resize an image online?', a: 'Add your image, type the width and height in pixels or pick a preset, choose the maximum size in KB, and click “Download”. Everything happens in your browser.' },
      { q: 'How do I resize an image in KB?', a: 'To resize image in KB, choose the size limit — click 20, 50, 100 or 200 KB or type your own — and the image is saved as a JPG just under it. Set a pixel size too if your form asks for one.' },
      { q: 'Can I resize an image to a specific size in pixels and KB?', a: 'Yes. That is what this tool is for. Set the width and height in pixels and the limit in KB, and the file meets both.' },
      { q: 'Will my image be stretched?', a: 'No. If the new size has a different shape, the picture is centre-cropped to fill it. Fill in only one side to keep the original shape without cropping.' },
      { q: 'What pixel size do exam forms ask for?', a: 'Many bank and government exam forms ask for a photo of 200 × 230 pixels and a signature of 140 × 60 pixels, which are available as presets. Always check your own notification.' },
      { q: 'How do I resize an image to 20KB, 50KB, 100KB or 200KB?', a: 'Use the resize image to 20KB, 50KB, 100KB or 200KB page, or choose the limit here. The resized image lands just under the limit you choose.' },
      { q: 'How do I resize an image to 20KB to 50KB?', a: 'To resize image to 20KB to 50KB, aim for the top of the range: set the limit to 50 KB here, or use the resize image to 50KB page. The file lands just under 50 KB, inside the 20 KB to 50 KB range.' },
      { q: 'What is the difference between resizing and compressing?', a: 'Resizing changes the width and height in pixels. Compressing keeps them and makes the file smaller. This tool does both; the image compressor only compresses.' },
      { q: 'Can I keep the original dimensions?', a: 'Yes. Click “Original” or leave the width and height empty, and only the file size changes.' },
      { q: 'Can I resize many images at once?', a: 'Yes. Add as many as you like; they are all resized with the same settings and can be downloaded as a ZIP.' },
      { q: 'Is this resize image tool free?', a: 'Yes. It is free and unlimited, with no signup and no watermark.' },
      { q: 'Are my images uploaded?', a: 'No. Images are resized inside your browser and never leave your device.' },
    ],
  },

  'resize-image-to-20kb': {
    title: 'Resize Image to 20KB – Photo & Signature, JPG Free',
    description:
      'Resize image to 20KB online free. Set the pixel size and get a JPG under 20 KB for exam and job forms — photos and signatures. No signup, no uploads.',
    h1: 'Resize Image to 20KB',
    lead: 'Resize image to 20KB JPG with the exact pixel size your form asks for — photos and signatures in one click.',
    navLabel: 'Resize Image to 20KB',
    cardText: 'Resize photos and signatures to under 20 KB.',
    howTo: {
      title: 'How to resize an image to 20KB',
      steps: [
        '<strong>Add your photo or signature.</strong> Drop it in, click “Choose files”, take a photo or paste it with Ctrl+V.',
        '<strong>Set the pixel size.</strong> Click the Photo or Signature preset, type the size from your notification, or keep the original.',
        '<strong>Download.</strong> The file is resized and kept just under 20 KB. Click “Download” or download all as a ZIP.',
      ],
    },
    features: {
      title: 'Built for 20 KB form uploads',
      items: [
        { title: 'Pixels and KB together', text: 'Set the width and height, and the file is kept under 20 KB in the same step.' },
        { title: 'Signature preset', text: 'One click for 140 × 60 pixels, a size many exam forms use for signatures.' },
        { title: 'Photo preset', text: 'One click for 200 × 230 pixels, a common passport-style photo size.' },
        { title: 'No stretching', text: 'A different shape is centre-cropped, so faces and signatures keep their natural proportions.' },
        { title: 'JPG output', text: 'Every file is saved as a JPG, or as a PDF if your form asks for one.' },
        { title: 'Private and free', text: 'Resized in your browser, never uploaded, no limits or watermark.' },
      ],
    },
    sections: [
      {
        h2: 'Resize image to 20KB for exam and job forms',
        paragraphs: [
          'A typical upload rule on an Indian application form reads: “Signature: 140 × 60 pixels, 10–20 KB.” Your scan is neither the right size nor the right weight. This tool lets you <strong>resize image to 20KB</strong> and to the exact pixel size in one step. Add the picture, choose the size, and download a JPG the form will accept.',
          'There is no signup, no watermark and no limit on how many images you resize. It all happens in your browser, so your photo and signature never leave your device.',
        ],
      },
      {
        h2: 'Set the width and height',
        paragraphs: [
          'Type the width and height from your notification into the two boxes, or click a preset: <strong>Photo 200 × 230</strong> or <strong>Signature 140 × 60</strong>. These are sizes many bank and government exam forms use, but always check your own notification. If your picture has a different shape, it is centre-cropped to fill the size exactly, so nothing is stretched. Fill in only one side and the other follows your picture’s proportions.',
          'Click <strong>Original</strong> to keep the picture’s own dimensions and only bring the file under 20 KB.',
        ],
      },
      {
        h2: 'Resize image to 20KB JPG',
        paragraphs: [
          'Forms almost always want JPG or JPEG files, so every resized image is saved as a JPG. PNG scans, WEBP pictures and iPhone HEIC photos are converted on the way, and a transparent signature background becomes white instead of black. That is all it takes to <strong>resize image to 20KB JPG</strong>.',
          'The tool picks the highest JPG quality that still fits under 20 KB. At form sizes such as 200 × 230 or 140 × 60 pixels there is plenty of room, so the result looks clean. 20 KB is counted as 20,000 bytes, the strict way, so the upload is never rejected for being a few bytes over; Windows shows the file as about 19.5 KB.',
        ],
      },
      {
        h2: 'Resize image to 20KB to 50KB',
        paragraphs: [
          'Many forms give a range for the photo: “20 KB to 50 KB”. A file under 20 KB can be rejected there for being too small. For a range, aim for the top: use <a href="/resize-image-to-50kb">resize image to 50KB</a>. The picture lands just under 50 KB — inside the range and clearer. So to resize image to 20KB to 50KB, think “50 KB maximum”, and keep this 20 KB page for limits like “below 20 KB” or “10–20 KB”.',
        ],
      },
      {
        h2: 'Resize image to 20KB to 100KB',
        paragraphs: [
          'Some portals accept anything from 20 KB to 100 KB, usually for documents. Again, aim for the top and use <a href="/resize-image-to-100kb">resize image to 100KB</a>: a larger file keeps small print readable. To resize image to 20KB to 100KB is really to resize it to under 100 KB.',
        ],
      },
      {
        h2: 'What the tool does, step by step',
        paragraphs: [
          'When you add a picture, the tool first applies the pixel size: it scales the picture so it covers the width and height you set, and trims any extra from the edges, keeping the centre. Then it saves the result as a JPG, trying different quality levels and keeping the highest one that still fits under 20 KB. At 140 × 60 or 200 × 230 pixels there is plenty of room, so the file usually comes out well under the limit at top quality. With no pixel size set, the picture keeps its own dimensions and only the quality is adjusted — unless it is too large to fit 20 KB at all, in which case it is made smaller and you are told.',
        ],
      },
      {
        h2: 'Common reasons a 20 KB upload is rejected',
        list: [
          '<strong>Wrong dimensions:</strong> the file is under 20 KB but still 3000 pixels wide. Set the pixel size from the notification.',
          '<strong>Too small:</strong> the form wants 10–20 KB and a tiny file falls below the minimum. Use a larger pixel size so the file carries more detail.',
          '<strong>Wrong format:</strong> the form wants JPG and you uploaded PNG or HEIC. Files from this page are always JPG unless you choose PDF.',
          '<strong>Wrong orientation:</strong> a sideways phone photo. Phone photos are turned the right way up automatically here.',
        ],
      },
      {
        h2: 'Signature and photo: a quick guide',
        list: [
          '<strong>Signature:</strong> sign with a dark pen on white paper, photograph it in daylight, add it here and click the Signature preset.',
          '<strong>Photo:</strong> use a recent photo with a plain light background, add it and click the Photo preset. The face is kept in the centre.',
          '<strong>Thumb impression or declaration:</strong> type the size from the notification, or keep the original.',
          '<strong>Check the result:</strong> the list shows the new size in KB and in pixels, so you can match it against the notification before uploading.',
        ],
      },
      {
        h2: 'Why not just shrink the photo?',
        paragraphs: [
          'If you only make the file smaller, the photo keeps its own shape and pixel size, and the form may reject it for the wrong dimensions. If you only change the pixels, the file may still be over 20 KB. Doing both together, in the right order, is what this page is for. If you only need a smaller file and the form gives no pixel size, the <a href="/image-compressor-to-20kb">image compressor to 20KB</a> is the simpler choice.',
        ],
      },
      {
        h2: 'Works on your phone',
        paragraphs: [
          'Open the page in Chrome or Safari on Android or iPhone. Tap <strong>Take a photo</strong> to use the camera, or pick a picture from your gallery. iPhone HEIC photos are handled automatically, and the resized JPG lands in your Downloads folder. It works the same way on Windows, Mac and Chromebook.',
        ],
      },
      {
        h2: 'Tips so the form accepts it',
        list: [
          'Copy the exact pixel size and KB range from the official notification; sizes differ between exams.',
          'Crop extra background before adding the photo if the face is small in the frame.',
          'Rename the file if the form expects a name like “photo.jpg” or “sign.jpg”.',
          'Keep your original files, so you can resize again if the form changes its rules.',
        ],
      },
      {
        h2: 'Private, free and unlimited',
        paragraphs: [
          'Your photo, signature and ID never leave your device: they are resized in your browser and disappear when you close the tab. Add as many files as you like and download them together as a ZIP. To put scanned pages into one PDF, use <a href="/image-to-pdf">image to PDF</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I resize an image to 20KB?', a: 'Add your photo or signature, set the pixel size (or keep the original), and the file is kept under 20 KB automatically. Click “Download” to save the JPG.' },
      { q: 'How do I resize an image to 20KB to 50KB?', a: 'Use resize image to 50KB. With a size range, aim for the top: the file lands just under 50 KB, inside the 20 KB to 50 KB range.' },
      { q: 'Can I resize an image to 20KB JPG?', a: 'Yes. Every resized image is saved as a JPG. PNG, WEBP and iPhone HEIC files are converted automatically.' },
      { q: 'How do I resize an image to 20KB to 100KB?', a: 'Use resize image to 100KB. The file lands just under 100 KB, which is inside the 20 KB to 100 KB range and keeps more detail.' },
      { q: 'How do I resize a signature to 140 × 60 pixels and under 20 KB?', a: 'Add the signature and click the “Signature 140 × 60” preset. The signature is cropped to that size and saved as a JPG under 20 KB.' },
      { q: 'Will my photo be stretched?', a: 'No. A different shape is centre-cropped to fill the new size, so the photo keeps its natural proportions.' },
      { q: 'Can I keep the original pixel size?', a: 'Yes. Click “Original” or leave the width and height empty; only the file size is brought under 20 KB.' },
      { q: 'Why does my file show 19.5 KB?', a: '20 KB is counted as 20,000 bytes so every website accepts it. Windows uses units of 1,024 bytes and shows about 19.5 KB.' },
      { q: 'Is it free?', a: 'Yes. It is free and unlimited, with no signup and no watermark.' },
      { q: 'Are my photos uploaded?', a: 'No. Everything is resized in your browser and never leaves your device.' },
    ],
  },

  'resize-image-to-50kb': {
    title: 'Resize Image to 50KB – Online, JPG & PDF, Free',
    description:
      'Resize image to 50KB online free. Set the exact pixel size and get a JPG or PDF under 50 KB for exam, job and admission forms. No signup, no uploads.',
    h1: 'Resize Image to 50KB',
    lead: 'Resize image to 50KB online with the exact width and height your form needs — as a JPG or PDF.',
    navLabel: 'Resize Image to 50KB',
    cardText: 'Resize photos to a pixel size under 50 KB.',
    howTo: {
      title: 'How to resize an image to 50KB',
      steps: [
        '<strong>Add your image.</strong> Drop it in, click “Choose files”, take a photo or paste it with Ctrl+V.',
        '<strong>Set the pixel size.</strong> Type the width and height, click a preset, or keep the original. Choose JPG or PDF.',
        '<strong>Download.</strong> The resized file lands just under 50 KB. Save one file or all of them as a ZIP.',
      ],
    },
    features: {
      title: 'Everything a 50 KB upload needs',
      items: [
        { title: 'Width, height and KB', text: 'Set the pixel size and the file stays under 50 KB, both in one step.' },
        { title: 'Passport-style photo preset', text: 'One click for 200 × 230 pixels, a size many exam forms use.' },
        { title: 'JPG or PDF', text: 'Save the resized image as a JPG, or as a one-page PDF under 50 KB.' },
        { title: 'Centre-crop, no stretching', text: 'A different shape is cropped from the centre, never squashed.' },
        { title: 'Bulk resize', text: 'Resize a photo, signature and documents together and download one ZIP.' },
        { title: 'Online and private', text: 'Runs in your browser: nothing to install, nothing uploaded.' },
      ],
    },
    sections: [
      {
        h2: 'Resize image to 50KB for any form',
        paragraphs: [
          '“Photo: 3.5 × 4.5 cm, 200 × 230 pixels, 20–50 KB.” Rules like this are everywhere in Indian exam, admission and job forms, and a phone photo of several megabytes meets none of them. This tool lets you <strong>resize image to 50KB</strong> and to the right pixel size in one go. Add the photo, set the size, download.',
          'It is free, with no signup and no watermark, and it handles PDFs as well as photos.',
        ],
      },
      {
        h2: 'Resize image to 50KB online',
        paragraphs: [
          'To <strong>resize image to 50KB online</strong>, you only need a browser — Chrome, Safari, Edge or Firefox on Android, iPhone, Windows, Mac or Chromebook. There is no app to install. The resizing runs on your own device, so it is quick even on mobile data and your files are never uploaded. On a phone, tap <strong>Take a photo</strong> to use the camera or pick a picture from your gallery.',
        ],
      },
      {
        h2: 'Choose the width and height',
        paragraphs: [
          'Type the pixel size from your notification, or click the <strong>Photo 200 × 230</strong> or <strong>Signature 140 × 60</strong> preset. If the picture’s shape is different, it is centre-cropped to fill the size exactly, so faces are never stretched. Fill in only the width or only the height and the other side follows the original proportions. Click <strong>Original</strong> to keep the picture’s own dimensions.',
          'Some notifications give the size in centimetres, like 3.5 × 4.5 cm. The upload portal checks pixels and kilobytes, so use the pixel size stated in the same notification.',
        ],
      },
      {
        h2: 'Resize image to 50KB JPG',
        paragraphs: [
          'Every resized image is saved as a JPG, the format forms accept. PNG, WEBP and iPhone HEIC files are converted, and transparent backgrounds are filled with white. The tool picks the highest JPG quality that still fits under 50 KB, so the photo stays as clear as possible — at 200 × 230 pixels, 50 KB leaves plenty of room. That is how to <strong>resize image to 50KB JPG</strong> without any software.',
        ],
      },
      {
        h2: 'Resize image to 50KB PDF',
        paragraphs: [
          'If the form wants a PDF, choose <strong>PDF</strong> under “Save images as”. The resized picture is placed on a single page and the whole PDF stays under 50 KB. This is the easiest way to <strong>resize image to 50KB PDF</strong> for a certificate, mark sheet or ID card that you have as a photo.',
          'You can also drop an existing PDF. It keeps its pages and is compressed to under 50 KB; if that needs the pages to be turned into images, the tool tells you that the text can no longer be selected.',
        ],
      },
      {
        h2: 'Resize image to 50KB to 100KB',
        paragraphs: [
          'When the form allows “50 KB to 100 KB”, a 50 KB file may be rejected for being too small. Aim for the top of the range with <a href="/resize-image-to-100kb">resize image to 100KB</a>; the file lands just under 100 KB, inside the range. So to resize image to 50KB to 100KB, think “100 KB maximum”.',
          'For a photo between 20 KB and 50 KB, this page is right — the result lands just under 50 KB. For a signature under 20 KB, use <a href="/resize-image-to-20kb">resize image to 20KB</a>.',
        ],
      },
      {
        h2: 'What the tool does with your photo',
        paragraphs: [
          'First it applies the pixel size you set: the photo is scaled to cover the width and height, and any extra is trimmed from the edges so the centre — usually your face — stays in place. Then it saves a JPG at the highest quality that still fits under 50 KB. At 200 × 230 pixels the photo usually ends up well under the limit at top quality, because a small picture simply does not need 50 KB. If you keep the original dimensions, only the quality is adjusted, and a very large photo is made smaller only when it cannot fit at all.',
        ],
      },
      {
        h2: 'Common reasons a 50 KB upload is rejected',
        list: [
          '<strong>Dimensions do not match:</strong> the file is small enough but the pixel size is wrong. Set the width and height from the notification.',
          '<strong>File below the minimum:</strong> some forms want at least 20 KB. Keep a reasonable pixel size so the file is not too tiny.',
          '<strong>Wrong format:</strong> PNG or HEIC instead of JPG. Files from this page are JPG, or PDF if you choose.',
          '<strong>Blurry or dark photo:</strong> retake it in daylight against a plain wall; no tool can add detail that was never there.',
        ],
      },
      {
        h2: 'Only need a smaller file?',
        paragraphs: [
          'If your form gives a KB limit but no pixel size, you do not need to resize at all. The <a href="/image-compressor-to-50kb">image compressor to 50KB</a> keeps your picture’s dimensions and only makes the file smaller. For a size other than 20, 50 or 100 KB, the main <a href="/resize-image">resize image</a> page lets you type any limit.',
        ],
      },
      {
        h2: 'Resize several files at once',
        paragraphs: [
          'Most applications need a photo, a signature and a few documents. Add them together — each file is resized with the current settings and listed with its old and new size and its pixel dimensions. Download them one at a time, or click <strong>Download all (ZIP)</strong>. Change the pixel size and every file is resized again.',
        ],
      },
      {
        h2: 'Tips for an accepted upload',
        list: [
          'Copy the pixel size and KB range exactly from the official notification.',
          'Use a photo with a plain, light background and your face clearly in the centre.',
          'Photograph documents flat and in daylight before turning them into a 50 KB PDF.',
          'Check the size shown in the list before you upload, then rename the file if the form asks.',
        ],
      },
      {
        h2: 'Private and unlimited',
        paragraphs: [
          'Photos, signatures and ID cards are personal. This tool resizes them inside your browser and never uploads them; nothing is stored, and everything disappears when you close the tab. There is no daily limit and no watermark. 50 KB is counted as 50,000 bytes so every portal accepts the file; Windows shows it as about 48.8 KB.',
        ],
      },
    ],
    faq: [
      { q: 'How do I resize an image to 50KB?', a: 'Add your image, set the pixel size or keep the original, and the file is kept under 50 KB automatically. Click “Download” to save it.' },
      { q: 'How do I resize an image to 50KB online?', a: 'Open this page in any browser on your phone or computer, add the image and download the result. Nothing is installed or uploaded.' },
      { q: 'Can I resize an image to 50KB JPG?', a: 'Yes. Resized images are saved as JPG. PNG, WEBP and iPhone HEIC files are converted automatically.' },
      { q: 'How do I resize an image to 50KB PDF?', a: 'Choose PDF under “Save images as”. The resized picture is placed on one page and the PDF stays under 50 KB.' },
      { q: 'How do I resize an image to 50KB to 100KB?', a: 'Use resize image to 100KB. The file lands just under 100 KB, inside the 50 KB to 100 KB range.' },
      { q: 'How do I resize a photo to 200 × 230 pixels under 50 KB?', a: 'Add the photo and click the “Photo 200 × 230” preset. It is cropped to that size and saved as a JPG under 50 KB.' },
      { q: 'Will the photo be stretched?', a: 'No. A different shape is centre-cropped to fill the new size, so proportions stay natural.' },
      { q: 'My form gives the size in cm. What do I do?', a: 'Use the pixel size stated in the same notification; upload portals check pixels and kilobytes, not centimetres.' },
      { q: 'Why does my 50 KB file show as 48.8 KB?', a: '50 KB is counted as 50,000 bytes so every website accepts it. Windows uses units of 1,024 bytes and shows about 48.8 KB.' },
      { q: 'Are my files uploaded?', a: 'No. Everything is resized in your browser and never leaves your device.' },
    ],
  },

  'resize-image-to-100kb': {
    title: 'Resize Image to 100KB – Online, JPG & PDF Download',
    description:
      'Resize image to 100KB online free. Set the pixel size and download a clear JPG or PDF under 100 KB. Works on phone and PC. No app, no signup, no uploads.',
    h1: 'Resize Image to 100KB',
    lead: 'Resize image to 100KB online and download a clear JPG or PDF at the pixel size you need — no app required.',
    navLabel: 'Resize Image to 100KB',
    cardText: 'Resize images to a pixel size under 100 KB.',
    howTo: {
      title: 'How to resize an image to 100KB',
      steps: [
        '<strong>Add your image or PDF.</strong> Drop it in, click “Choose files”, take a photo or paste with Ctrl+V.',
        '<strong>Set the pixel size.</strong> Type the width and height, click a preset, or keep the original. Choose JPG or PDF.',
        '<strong>Download.</strong> The file is resized and kept just under 100 KB. Download it, or all files as a ZIP.',
      ],
    },
    features: {
      title: 'Clear images at 100 KB',
      items: [
        { title: 'Pixels and KB in one step', text: 'Set the width and height and the file stays under 100 KB.' },
        { title: 'Room for detail', text: '100 KB keeps documents readable and photos sharp at most form sizes.' },
        { title: 'JPG or PDF download', text: 'Download a JPG, or a one-page PDF under 100 KB.' },
        { title: 'No stretching', text: 'A different shape is centre-cropped; one side alone keeps the proportions.' },
        { title: 'Batch and ZIP', text: 'Resize many files together and download them in one ZIP.' },
        { title: 'No app needed', text: 'Works in your browser on any phone or computer, and nothing is uploaded.' },
      ],
    },
    sections: [
      {
        h2: 'Resize image to 100KB at the size you need',
        paragraphs: [
          'A 100 KB limit gives a picture real room for detail, but forms often add a pixel size as well — for example a scanned certificate at 600 × 800 pixels, or a photo at 200 × 230. This tool lets you <strong>resize image to 100KB</strong> and to that pixel size together, so the file meets both rules on the first try.',
          'It is free and unlimited, with no signup and no watermark, and works for photos and PDFs.',
        ],
      },
      {
        h2: 'Resize image to 100KB online',
        paragraphs: [
          'To <strong>resize image to 100KB online</strong>, open this page in Chrome, Safari, Edge or Firefox on Android, iPhone, Windows, Mac or Chromebook. The resizing happens on your own device, so your certificates and ID cards are never uploaded, and the result appears in a moment even on mobile data.',
        ],
      },
      {
        h2: 'Resize image to 100KB download — no app needed',
        paragraphs: [
          'Many people search for “resize image to 100KB download” expecting to install an app. You do not need one: everything happens on this page, and the only download is your resized file. Click <strong>Download</strong> next to a file, or <strong>Download all (ZIP)</strong> when you have several. On a phone, the file goes to your Downloads folder, where any upload box can find it.',
        ],
      },
      {
        h2: 'Set the width and height',
        paragraphs: [
          'Type the pixel size into the width and height boxes, or click a preset — <strong>Photo 200 × 230</strong> or <strong>Signature 140 × 60</strong>. A picture with a different shape is centre-cropped to fill the size exactly, so it is never stretched. Fill in only one side to keep the original proportions without cropping, or click <strong>Original</strong> to keep the picture’s own dimensions and only bring the file under 100 KB.',
        ],
      },
      {
        h2: 'Resize image to 100KB JPG',
        paragraphs: [
          'Resized images are saved as JPG, the format almost every website accepts for photos and scans. PNG, WEBP and iPhone HEIC files are converted automatically, and transparent backgrounds become white. The tool keeps the highest JPG quality that still fits under 100 KB, so text in a document and detail in a photo stay as clear as possible. That is all it takes to <strong>resize image to 100KB JPG</strong>.',
        ],
      },
      {
        h2: 'Resize image to 100KB PDF',
        paragraphs: [
          'When a portal asks for a PDF, choose <strong>PDF</strong> under “Save images as”. Your resized photo or scan is placed on a single page and the PDF stays under 100 KB — the quickest way to <strong>resize image to 100KB PDF</strong>.',
          'You can also add an existing PDF. It keeps its pages and is compressed to under 100 KB; the tool first tries to keep the text selectable, and tells you if the pages had to be turned into images to fit.',
        ],
      },
      {
        h2: 'What fits in 100 KB',
        paragraphs: [
          'At 100 KB, a photo of roughly 700 to 900 pixels wide fits at good quality, and a one-page document photographed in daylight usually keeps its small print readable. Smaller form sizes, like 200 × 230 pixels, use only part of the budget and come out at top quality. If you ask for a very large pixel size, the tool may have to make it a little smaller to fit 100 KB, and it tells you when it does.',
        ],
      },
      {
        h2: 'Resizing scanned documents',
        paragraphs: [
          'Certificates and mark sheets are often asked for at a set width, such as 600 or 800 pixels, so the reviewer can read them without zooming. Type only the width and leave the height empty: the page keeps its proportions, nothing is cropped, and the file is kept under 100 KB. If the portal wants a PDF, switch “Save images as” to PDF and you get the same resized page as a one-page PDF.',
        ],
      },
      {
        h2: 'What the tool does, step by step',
        paragraphs: [
          'With a pixel size set, the picture is scaled to cover it and trimmed from the edges, keeping the centre. Then it is saved as a JPG at the highest quality that fits under 100 KB. Without a pixel size, the picture keeps its own dimensions and only the quality is adjusted; a very large photo is made smaller only when it cannot fit 100 KB at all, and the note under the file tells you. Every file in the list shows its old size, new size and dimensions, so you can check it against the notification before you upload.',
        ],
      },
      {
        h2: 'Common reasons an upload is rejected',
        list: [
          '<strong>Wrong pixel size:</strong> copy the width and height exactly from the notification.',
          '<strong>Wrong format:</strong> the portal wants JPG or PDF; this page gives you either.',
          '<strong>Unreadable document:</strong> photograph it again in daylight, flat and in focus, before resizing.',
        ],
      },
      {
        h2: 'Choosing between 20, 50 and 100 KB',
        paragraphs: [
          'Use the largest size the form allows, because a bigger file is a clearer file. For “50 KB to 100 KB” or “up to 100 KB”, this page is right. For smaller limits, use <a href="/resize-image-to-50kb">resize image to 50KB</a> or <a href="/resize-image-to-20kb">resize image to 20KB</a>; for more room, <a href="/resize-image-to-200kb">resize image to 200KB</a>; and for any other number, the main <a href="/resize-image">resize image</a> page. If the form gives no pixel size at all, the <a href="/image-compressor-to-100kb">image compressor to 100KB</a> keeps your dimensions and only shrinks the file.',
        ],
      },
      {
        h2: 'Tips for clear documents',
        list: [
          'Photograph documents flat, in daylight, from directly above, and crop away the table around them.',
          'Combine multi-page documents with <a href="/image-to-pdf">image to PDF</a> first, then resize the PDF here.',
          'Check the size and dimensions shown in the list against the notification before uploading.',
          'To copy text out of a document instead, use the <a href="/">image to text converter</a>.',
        ],
      },
      {
        h2: 'Private, free and unlimited',
        paragraphs: [
          'Your files are resized inside your browser and never uploaded; nothing is stored, and closing the tab removes everything. There is no limit on how many files you resize. 100 KB is counted as 100,000 bytes so every portal accepts the file — Windows shows it as about 97 KB.',
        ],
      },
    ],
    faq: [
      { q: 'How do I resize an image to 100KB?', a: 'Add your image, set the pixel size or keep the original, and the file is kept under 100 KB automatically. Click “Download” to save it.' },
      { q: 'How do I resize an image to 100KB online?', a: 'Open this page in any browser on your phone or computer, add the image and download the result. Nothing is installed or uploaded.' },
      { q: 'Do I need to download an app to resize an image to 100KB?', a: 'No. Everything works on this page; the only download is your resized file.' },
      { q: 'Can I resize an image to 100KB JPG?', a: 'Yes. Resized images are saved as JPG. PNG, WEBP and iPhone HEIC files are converted automatically.' },
      { q: 'How do I resize an image to 100KB PDF?', a: 'Choose PDF under “Save images as”. The resized picture is placed on one page and the PDF stays under 100 KB.' },
      { q: 'Will my document be readable at 100 KB?', a: 'Usually, yes. 100 KB keeps one-page documents clear, and the tool uses the highest quality that fits.' },
      { q: 'Will the image be stretched?', a: 'No. A different shape is centre-cropped to fill the new size. Fill in only one side to keep the proportions.' },
      { q: 'Can I keep the original pixel size?', a: 'Yes. Click “Original” or leave the width and height empty; only the file size changes.' },
      { q: 'Why does my file show as 97 KB?', a: '100 KB is counted as 100,000 bytes so every website accepts it. Windows uses units of 1,024 bytes and shows about 97 KB.' },
      { q: 'Are my files uploaded?', a: 'No. Everything is resized in your browser and never leaves your device.' },
    ],
  },

  'resize-image-to-200kb': {
    title: 'Resize Image to 200KB – JPG & PDF Online Free',
    description:
      'Resize image to 200KB online free. Set the exact pixel size and download a sharp JPG or PDF under 200 KB. Works on phone and PC. No signup, no uploads.',
    h1: 'Resize Image to 200KB',
    lead: 'Resize image to 200KB with the exact width and height you need, and download a sharp JPG or PDF — online and free.',
    navLabel: 'Resize Image to 200KB',
    cardText: 'Resize images to a pixel size under 200 KB.',
    howTo: {
      title: 'How to resize an image to 200KB',
      steps: [
        '<strong>Add your image or PDF.</strong> Drop it in, click “Choose files”, take a photo or paste it with Ctrl+V.',
        '<strong>Set the pixel size.</strong> Type the width and height, click a preset, or keep the original. Choose JPG or PDF.',
        '<strong>Download.</strong> The file is resized and kept just under 200 KB. Download it, or all files as a ZIP.',
      ],
    },
    features: {
      title: 'Sharp images at 200 KB',
      items: [
        { title: 'Pixels and KB in one step', text: 'Set the width and height and the file stays under 200 KB automatically.' },
        { title: 'Near-original quality', text: '200 KB leaves plenty of room, so most resized photos look just like the original.' },
        { title: 'JPG or PDF', text: 'Download a JPG, or a one-page PDF under 200 KB when a portal asks for PDF.' },
        { title: 'No stretching', text: 'A different shape is centre-cropped; fill in one side only to keep the proportions.' },
        { title: 'Batch and ZIP', text: 'Resize a whole set of photos to one size and download them together.' },
        { title: 'Online, free, private', text: 'Runs in your browser with no signup and no watermark. Nothing is uploaded.' },
      ],
    },
    sections: [
      {
        h2: 'Resize image to 200KB at the exact size you need',
        paragraphs: [
          'A 200 KB limit gives a picture plenty of room for detail, but many portals and websites also ask for a set pixel size — a scanned document at 1000 pixels wide, a product photo at 1200 × 1200, a resume photo at 600 × 800. This tool lets you <strong>resize image to 200KB</strong> and to that pixel size in one step, so the file meets both rules the first time.',
          'It is free and unlimited, with no signup and no watermark, and it works for photos and PDFs.',
        ],
      },
      {
        h2: 'Where you need a 200 KB image',
        list: [
          'Job portals and recruitment forms that accept photos, resume scans and certificates up to 200 KB.',
          'Admission, scholarship and government services that want documents to stay readable.',
          'Visa, passport-related and bank forms with a per-file limit.',
          'Online shops, classified ads and blogs, where pictures should load fast but still look sharp.',
          'Email, where several 200 KB pictures still send quickly.',
        ],
      },
      {
        h2: 'Set the width and height',
        paragraphs: [
          'Type the pixel size into the width and height boxes, or click a preset — <strong>Photo 200 × 230</strong> or <strong>Signature 140 × 60</strong>. A picture with a different shape is centre-cropped to fill the size exactly, so it is never stretched. Fill in only the width or only the height to keep the original proportions without any cropping, or click <strong>Original</strong> to keep the picture’s own dimensions and only bring the file under 200 KB.',
          'With 200 KB to work with, even fairly large sizes fit comfortably: a photo of around 1,200 to 1,500 pixels wide usually stays sharp, and small form sizes come out at top quality.',
        ],
      },
      {
        h2: 'Resize image to 200KB JPG',
        paragraphs: [
          'Resized images are saved as JPG, the format every website accepts for photos. PNG, WEBP and iPhone HEIC pictures are converted automatically, and transparent backgrounds are filled with white. The tool keeps the highest JPG quality that still fits under 200 KB, so most photos look the same as the original. That is all you need to <strong>resize image to 200KB JPG</strong> — no software, no account.',
        ],
      },
      {
        h2: 'Resize image to 200KB PDF',
        paragraphs: [
          'Many portals ask for documents as a PDF. Choose <strong>PDF</strong> under “Save images as” and your resized photo or scan is placed on a single page, with the whole PDF kept under 200 KB. This is the quickest way to <strong>resize image to 200KB PDF</strong> for a certificate, ID card or mark sheet you have as a photo.',
          'You can also add an existing PDF. It keeps its pages and is compressed to under 200 KB; the tool first tries to keep the text selectable, and tells you if the pages had to be turned into images to fit. A PDF of three or four pages usually stays readable at 200 KB.',
        ],
      },
      {
        h2: 'Resize image to 200KB PDF online free',
        paragraphs: [
          'Many “free” PDF tools stop after a few files, add a watermark or ask you to sign up. Here you can <strong>resize image to 200KB PDF online free</strong> as often as you like: there is no account, no daily limit and no watermark on your pages. The work happens in your own browser, so your documents are never uploaded and the PDF is ready in a moment, even on mobile data.',
        ],
      },
      {
        h2: 'Resize image to 200KB online on any device',
        paragraphs: [
          'Open this page in Chrome, Safari, Edge or Firefox on Android, iPhone, Windows, Mac or Chromebook. On a phone, tap <strong>Take a photo</strong> to use the camera or pick a picture from your gallery; on a computer, you can also paste a screenshot with Ctrl+V. The resized file goes straight to your Downloads folder.',
        ],
      },
      {
        h2: 'Resizing product and website photos',
        paragraphs: [
          'Online stores and blogs look best when every picture has the same shape. Type the size once — 1200 × 1200 for square product photos, 1200 × 800 for a blog image — add all your pictures, and each one is cropped from the centre to that size and kept under 200 KB. Download them together with <strong>Download all (ZIP)</strong>. Smaller pictures load faster, which visitors and search engines both appreciate.',
        ],
      },
      {
        h2: 'What the tool does, step by step',
        paragraphs: [
          'With a pixel size set, the picture is scaled to cover it and trimmed from the edges, keeping the centre. Then it is saved as a JPG at the highest quality that fits under 200 KB. Without a pixel size, the picture keeps its own dimensions and only the quality is adjusted; a very large phone photo is made smaller only when it cannot fit 200 KB at all, and the note under the file tells you. 200 KB is counted as 200,000 bytes so every portal accepts the file — Windows shows it as about 195 KB.',
        ],
      },
      {
        h2: 'Tips for a sharp 200 KB file',
        list: [
          'Start from the original photo, not a screenshot or a forwarded copy, so there is enough detail to work with.',
          'Photograph documents flat, in daylight, from directly above, and crop away the table around them.',
          'Combine multi-page documents with <a href="/image-to-pdf">image to PDF</a> first, then bring the PDF under 200 KB here.',
          'Check the size and dimensions shown in the list against the portal’s rules before you upload.',
          'Rename the file if the form expects a particular name, such as “resume.pdf” or “photo.jpg”.',
        ],
      },
      {
        h2: 'Other sizes',
        paragraphs: [
          'For smaller limits, use <a href="/resize-image-to-100kb">resize image to 100KB</a>, <a href="/resize-image-to-50kb">resize image to 50KB</a> or <a href="/resize-image-to-20kb">resize image to 20KB</a>; for any other number, the main <a href="/resize-image">resize image</a> page. If you do not need a particular pixel size at all, the <a href="/image-compressor-to-200kb">image compressor to 200KB</a> keeps your dimensions and only shrinks the file.',
        ],
      },
      {
        h2: 'Private and unlimited',
        paragraphs: [
          'Your photos, resumes and ID documents are resized inside your browser and never uploaded; nothing is stored, and everything disappears when you close the tab. Resize as many files as you like. To pull text out of a picture instead, use the <a href="/">image to text converter</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I resize an image to 200KB?', a: 'Add your image, set the pixel size or keep the original, and the file is kept under 200 KB automatically. Click “Download” to save it.' },
      { q: 'How do I resize an image to 200KB PDF?', a: 'Choose PDF under “Save images as”. The resized picture is placed on one page and the PDF stays under 200 KB. You can also drop an existing PDF to bring it under 200 KB.' },
      { q: 'Can I resize an image to 200KB PDF online free?', a: 'Yes. It is free and unlimited, works online in your browser, and adds no watermark or signup.' },
      { q: 'Can I resize an image to 200KB JPG?', a: 'Yes. Resized images are saved as JPG. PNG, WEBP and iPhone HEIC files are converted automatically.' },
      { q: 'Will the image lose quality at 200 KB?', a: 'Very little in most cases. 200 KB is enough for a sharp photo, and the tool keeps the highest quality that fits.' },
      { q: 'Will the image be stretched?', a: 'No. A different shape is centre-cropped to fill the new size. Fill in only one side to keep the proportions.' },
      { q: 'Can I keep the original pixel size?', a: 'Yes. Click “Original” or leave the width and height empty; only the file size changes.' },
      { q: 'Can I resize many images at once?', a: 'Yes. Add as many as you like; they are resized with the same settings and can be downloaded as a ZIP.' },
      { q: 'Why does my file show as 195 KB?', a: '200 KB is counted as 200,000 bytes so every website accepts it. Windows uses units of 1,024 bytes and shows about 195 KB.' },
      { q: 'Are my files uploaded?', a: 'No. Everything is resized in your browser and never leaves your device.' },
    ],
  },
};

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
      { q: 'How do I convert images to PDF?', a: 'Add your images by dropping them in, choosing files, taking photos or pasting a screenshot. Arrange them in the right order, pick the page size and margins, then click “Create PDF”. The PDF downloads straight away.' },
      { q: 'How can I convert JPG to PDF for free?', a: 'Use this free image to PDF converter. Add your JPG files and click “Create PDF”. There is no signup, no watermark and no limit on the number of images or PDFs.' },
      { q: 'Can I combine multiple images into one PDF?', a: 'Yes. Add as many images as you like and they are combined into a single PDF, one image per page, in the order you choose.' },
      { q: 'Can I change the order of the pages in the PDF?', a: 'Yes. Drag the images into a new order, or use the up and down arrows on each image, before you create the PDF.' },
      { q: 'Which image formats can I convert to PDF?', a: 'JPG, JPEG, PNG, WEBP, GIF, BMP and iPhone HEIC photos. HEIC photos are converted automatically.' },
      { q: 'Which page size should I choose for my PDF?', a: 'Choose A4 for most of the world and Letter for the US and Canada. Choose “Fit to image” if you want each page to be exactly the size of its picture, with no white space.' },
      { q: 'How do I make the PDF file smaller?', a: 'Turn on “Smaller file” before creating the PDF. Large phone photos are resized and compressed, which helps when an upload form has a size limit.' },
      { q: 'Will the PDF have a watermark?', a: 'No. The PDF contains only your images, with no watermark, logo or extra pages.' },
      { q: 'Can I search or copy the text in a PDF made from images?', a: 'No. A PDF made from photos contains pictures of text. To get text you can copy, use the image to text converter or the JPG to Word converter.' },
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
      { q: 'How do I convert text to PDF?', a: 'Type or paste your text into the box, or open a .txt file. Choose a font, font size, page size and margins, then click “Create PDF”. The PDF is saved instantly.' },
      { q: 'How can I convert a TXT file to PDF?', a: 'Click “Open .txt file” and choose the file from your device. The text appears in the box, and you can create the PDF with one click.' },
      { q: 'Is the text to PDF converter free?', a: 'Yes. The text to PDF converter is free and unlimited, with no account and no watermark.' },
      { q: 'Can I change the font, size and margins of the PDF?', a: 'Yes. Choose a sans-serif, serif or monospace font, set the font size, pick A4 or Letter paper and adjust the margins.' },
      { q: 'Will my line breaks be kept in the PDF?', a: 'Yes. Every line break and empty line in your text is kept exactly where it is. Long lines wrap neatly and new pages are added automatically.' },
      { q: 'Can I convert code or log files to PDF?', a: 'Yes. Choose the monospace font so code, logs and tables made of spaces line up the same way they do in your editor.' },
      { q: 'Which languages can I convert to PDF?', a: 'The current version supports English and other languages written with the basic Latin alphabet and common accents. Support for Cyrillic, Arabic, Thai, Japanese and Korean is coming soon. If your text has characters that cannot be shown yet, the tool tells you before you download.' },
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
          'If you have images of pages rather than a PDF, the <a href="/jpg-to-word">JPG to Word converter</a> gives you a formatted .docx file. For tables, try the <a href="/jpg-to-excel">JPG to Excel converter</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I extract text from a PDF?', a: 'Drop your PDF into the box or click “Choose PDF”. Every page is read automatically. When it is done, copy the text or download it as a TXT file.' },
      { q: 'How can I convert PDF to text for free?', a: 'Use this free PDF to text converter. There is no signup, no watermark and no daily limit, and it works with both digital and scanned PDFs.' },
      { q: 'Can it extract text from a scanned PDF?', a: 'Yes. Pages that contain real text are copied out instantly, and pages that are only images are read with OCR automatically.' },
      { q: 'Why can’t I select or copy the text in my PDF?', a: 'Usually because the pages are scanned images, not real text. Open the PDF here: pages without a text layer are read with OCR, so you get text you can copy.' },
      { q: 'Which languages can it read from scanned PDFs?', a: 'More than 40, including English, Hindi, Arabic, Spanish, French, Russian, Chinese and Japanese. The language is detected automatically, so there is nothing to choose.' },
      { q: 'Is there a page or size limit?', a: 'No fixed limit. Long PDFs are processed page by page on your device, so very long scanned PDFs simply take longer.' },
      { q: 'Is the PDF uploaded?', a: 'No. The file is opened and processed in your browser and never leaves your device.' },
      { q: 'Does it work with password-protected PDFs?', a: 'Not yet. Remove the password first, then open the file here.' },
    ],
  },
  'screenshot-to-text': {
    title: 'Screenshot to Text Converter – Free & Unlimited OCR',
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
          'Use the <a href="/jpg-to-excel">JPG to Excel converter</a> for photos and screenshots of tables. For plain text, try <a href="/pdf-to-text">PDF to Text</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I convert a PDF to Excel?', a: 'Drop your PDF into the box or click “Choose PDF”. Each page appears as a table you can check and edit. Then download an Excel (.xlsx) file with one sheet per page, or a CSV.' },
      { q: 'How can I convert PDF to Excel for free?', a: 'Use this free PDF to Excel converter. There is no signup, no watermark and no limit, and it works with both digital and scanned PDFs.' },
      { q: 'Can I convert a scanned PDF to Excel?', a: 'Yes. Pages without a text layer are read with OCR, then split into rows and columns. Check numbers carefully on low-quality scans.' },
      { q: 'How do I convert a bank statement PDF to Excel?', a: 'Open the statement PDF here. The converter finds the rows and the gaps between columns and rebuilds the table cell by cell. Review the amounts in the preview, then download the Excel file. The PDF never leaves your device.' },
      { q: 'Will numbers be real numbers in Excel?', a: 'Yes. Plain values such as 1,250.50 become numbers, so SUM and charts work immediately. Values with letters, currency signs or leading zeros stay as text so nothing is lost.' },
      { q: 'Does each PDF page get its own Excel sheet?', a: 'Yes. Every page lands on its own sheet in the same workbook, so long PDFs stay easy to navigate.' },
      { q: 'Can I edit the table before downloading?', a: 'Yes. Click any cell in the preview table to fix it. Your changes are included in the Excel file.' },
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
      { q: 'How do I convert Word to text?', a: 'Drop one or more Word files into the box. The text appears in seconds with paragraphs, lists and tables in order. Copy it, save it as a TXT file, or download all files as a ZIP.' },
      { q: 'How can I convert DOCX to TXT for free?', a: 'Use this free Word to text converter. Open your .docx file and download the plain text as a TXT file. There is no signup and no limit.' },
      { q: 'Which Word formats are supported?', a: 'DOCX, DOCM and DOTX from Microsoft Word, ODT from LibreOffice and OpenOffice, and RTF. Old .doc files need to be saved as .docx first.' },
      { q: 'Can I convert an old .doc file to text?', a: 'Not directly. Open the .doc file in Word, Google Docs or LibreOffice, save it as .docx, then convert it here.' },
      { q: 'Are tables kept when converting Word to text?', a: 'Yes. Each table row becomes one line, with cells separated by tabs, so you can paste it into a spreadsheet.' },
      { q: 'Can I convert many Word documents to text at once?', a: 'Yes. Drop dozens of documents at once and download every TXT file together in one ZIP.' },
      { q: 'How do I convert a Google Docs document to plain text?', a: 'In Google Docs, choose File → Download → Microsoft Word (.docx), then open that file here to get clean plain text.' },
      { q: 'Is text inside images converted?', a: 'No. Only real text is extracted. For text inside pictures, use the image to text converter.' },
      { q: 'Is my document uploaded?', a: 'No. The file is read in your browser and never leaves your device.' },
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
      { q: 'How do I extract text from a PowerPoint presentation?', a: 'Drop one or more .pptx or .odp files into the box. The text comes out slide by slide, with speaker notes below each slide. Copy it, save it as TXT, or download several presentations as a ZIP.' },
      { q: 'How can I convert PPT to text for free?', a: 'Use this free PPT to text converter. There is no signup and no limit. Open your .pptx file and copy or download the text of every slide.' },
      { q: 'Which PowerPoint formats are supported?', a: 'PPTX, PPTM, PPSX and POTX from PowerPoint, and ODP from LibreOffice Impress. Old .ppt files need to be saved as .pptx first.' },
      { q: 'Can I get the speaker notes from a PowerPoint?', a: 'Yes. If the presentation has notes, they appear below each slide’s text automatically.' },
      { q: 'Is the slide order kept?', a: 'Yes. Text follows the real order of your slides, with a slide number for each, even if the slides were rearranged.' },
      { q: 'Can I convert an old .ppt file to text?', a: 'Not directly. Open the .ppt file in PowerPoint, Google Slides or LibreOffice Impress, save it as .pptx, then convert it here.' },
      { q: 'Can it extract text from pictures on slides?', a: 'No. Text that is part of an image cannot be extracted this way. Take a screenshot of the slide and use Screenshot to Text instead.' },
      { q: 'Does it work with Google Slides?', a: 'Yes. In Google Slides choose File → Download → Microsoft PowerPoint (.pptx), then open that file here.' },
      { q: 'Is my presentation uploaded?', a: 'No. Everything is read inside your browser and the file never leaves your device.' },
    ],
  },
};

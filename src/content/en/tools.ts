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

  'resize-image-to-20kb': {
    title: 'Resize Image to 20KB – Free Online, JPG & PDF',
    description:
      'Resize image to 20KB online free. Shrink photos and signatures to under 20 KB JPG for exam and job forms in seconds. No signup, no uploads, unlimited.',
    h1: 'Resize Image to 20KB',
    lead: 'Resize image to 20KB JPG in one click — for photos and signatures on exam, job and government forms.',
    navLabel: 'Resize Image to 20KB',
    cardText: 'Shrink photos and signatures to under 20 KB.',
    howTo: {
      title: 'How to resize an image to 20KB',
      steps: [
        '<strong>Add your photo or signature.</strong> Drop it in, click “Choose files”, take a photo on your phone or paste it with Ctrl+V.',
        '<strong>Check the size.</strong> 20 KB is already set. Pick another limit, or type exact pixel dimensions if your form asks for them.',
        '<strong>Download it.</strong> The new file appears in a second, just under 20 KB. Click “Download”, or “Download all” for many files.',
      ],
    },
    features: {
      title: 'Why use this tool to resize image to 20KB',
      items: [
        { title: 'Lands just under 20 KB', text: 'It finds the best quality that still fits, so the photo is as clear as 20 KB allows — not needlessly tiny.' },
        { title: 'JPG output', text: 'Every image is saved as a standard JPG, the format almost every form accepts. PDF output is one click away.' },
        { title: 'Exact pixel size', text: 'Type the width and height your form asks for, like 140 × 60 px for a signature, and the image is cropped to fit.' },
        { title: 'Photos and PDFs', text: 'Shrink JPG, PNG, WEBP and iPhone HEIC photos, or a PDF document, on the same page.' },
        { title: 'Many files at once', text: 'Drop your photo, signature and thumb impression together and download them all as one ZIP.' },
        { title: 'Private and unlimited', text: 'Everything happens in your browser. Your photos are never uploaded, and there is no daily limit.' },
      ],
    },
    sections: [
      {
        h2: 'Resize image to 20KB online, free',
        paragraphs: [
          'You have filled in every field of an online application, and then the upload box says: “Photo must be less than 20 KB.” Your phone photo is 3 MB. This tool fixes that in seconds. Add the picture and it will <strong>resize image to 20KB</strong> automatically, keeping it as sharp as possible, ready to upload.',
          'There is no signup, no watermark and no limit on how many photos you resize. The work is done by your own browser, so it is fast even on a slow connection, and your photo, signature or ID never leaves your device.',
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
        h2: 'How the tool reaches 20 KB without ruining your photo',
        paragraphs: [
          'Most quick fixes just squash the quality until the file is small enough, and the photo comes out blurry and blocky. This tool works smarter. It keeps your photo’s original width and height, tries different JPG quality levels and keeps the highest one that still fits under the limit. Only when a picture is simply too large for 20 KB — a full-size phone photo of several thousand pixels, for example — does it reduce the pixel size, just as much as needed, and it tells you when it did.',
          'The result is a file that usually lands between 17 and 20 KB — the clearest photo that 20 KB can hold. Faces stay recognisable and signatures stay crisp. To stay on the safe side, 20 KB is counted as 20,000 bytes, the stricter of the two ways websites measure a kilobyte, so the upload is never rejected for being a few bytes over.',
        ],
      },
      {
        h2: 'Resize image to 20KB JPG',
        paragraphs: [
          'Almost every form asks for a JPG or JPEG file, so that is what you get. PNG screenshots, WEBP images and iPhone HEIC photos are all converted to a standard JPG while they are resized. Transparent backgrounds, common in scanned signatures saved as PNG, are filled with white, so your signature does not turn into a black box.',
          'If your photo is already a JPG under 20 KB, it is handed back untouched — there is no reason to make it worse. Choose <strong>PDF</strong> under “Save images as” if your form wants a PDF instead.',
        ],
      },
      {
        h2: 'Resize image to 20KB to 50KB (a size range)',
        paragraphs: [
          'Many forms give a range instead of a single number: “photo between 20 KB and 50 KB”. A file under 20 KB would be rejected there for being too small. In that case, set the limit to the top of the range — click <strong>50 KB</strong>. The tool aims just under the limit, so the photo comes out at roughly 45–50 KB, inside the range and at the best quality the form allows.',
          'For a 20 KB to 50 KB photo you can also use the <a href="/resize-image-to-50kb">resize image to 50KB</a> page, which has the same tool with 50 KB already selected.',
        ],
      },
      {
        h2: 'Resize image to 20KB to 100KB',
        paragraphs: [
          'Some portals allow anything from 20 KB to 100 KB, especially for documents and certificates. Again, choose the upper number: type 100 in the size box, or open <a href="/resize-image-to-100kb">resize image to 100KB</a>. A larger limit means a larger, clearer image, which matters for documents with small print. Only go down to 20 KB when the form really asks for it.',
        ],
      },
      {
        h2: 'Set the exact pixel size your form asks for',
        paragraphs: [
          'Some notifications give pixel dimensions as well as a file size, for example a photo of 200 × 230 pixels and a signature of 140 × 60 pixels. Type those numbers into the width and height boxes. If your picture has a different shape, it is centre-cropped to fill the size exactly, so nothing is stretched or squashed. Fill in only the width or only the height and the other side follows the original proportions.',
          'With pixel sizes set, the tool keeps your dimensions and only lowers the quality to reach 20 KB. In the rare case that is not enough, it shrinks the image a little and tells you.',
        ],
      },
      {
        h2: 'Which size should you pick?',
        paragraphs: [
          'Read the upload rule carefully, then match it with one of these. As a rough guide, a picture of about 250 to 350 pixels wide fits in 20 KB at good quality; with a higher limit it can be larger and sharper.',
        ],
        list: [
          '<strong>“Less than 20 KB” or “maximum 20 KB”:</strong> keep the limit at 20 KB. This is the classic case to resize image to 20KB JPG, often for a signature.',
          '<strong>“Between 10 KB and 20 KB”:</strong> also keep 20 KB. The result lands just under 20 KB, safely above the minimum.',
          '<strong>“20 KB to 50 KB”:</strong> pick 50 KB, so the photo is clearer and still inside the range. This is what people mean when they search to resize image to 20KB to 50KB.',
          '<strong>“20 KB to 100 KB”:</strong> pick 100 KB. To resize image to 20KB to 100KB, always aim for the top of the range.',
        ],
      },
      {
        h2: 'Tips for a 20 KB photo that gets accepted',
        list: [
          'Crop your photo close to the face and shoulders first. Less background means more detail where it counts.',
          'Use a plain, light background and good daylight. Busy backgrounds use up the 20 KB budget on clutter.',
          'Sign with a dark pen on clean white paper, then crop tightly around the signature before you resize it.',
          'Rename the downloaded file if the form expects a name like “photo.jpg” or “signature.jpg”.',
          'Always check the exact size and dimensions in the official notification — limits change between forms.',
        ],
      },
      {
        h2: 'Works on your phone and computer',
        paragraphs: [
          'Most applications are filled in on a phone, so the tool works in Chrome and Safari on Android and iPhone as well as on Windows, Mac and Chromebook. On a phone, tap <strong>Take a photo</strong> to use the camera, or choose a picture from your gallery. The downloaded JPG lands in your Downloads folder, ready to pick in the form’s upload box.',
        ],
      },
      {
        h2: 'Your photos stay private',
        paragraphs: [
          'Your photo, signature and ID documents are personal. Many online resizers upload them to a server you know nothing about. This one does not: the resizing runs entirely inside your browser, nothing is stored online, and closing the tab removes everything.',
        ],
      },
      {
        h2: 'More free tools for your application',
        paragraphs: [
          'Need to put several scanned pages into one file? Use <a href="/image-to-pdf">image to PDF</a>. To copy text out of a scanned certificate or admit card, use the <a href="/">image to text converter</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I resize an image to 20KB?', a: 'Add your photo by dropping it in, clicking “Choose files” or pasting it with Ctrl+V. The limit is already set to 20 KB, so the tool shrinks the image straight away. Click “Download” to save the new JPG.' },
      { q: 'How do I resize an image to 20KB to 50KB?', a: 'Set the limit to the top of the range by clicking 50 KB. The tool aims just under the limit, so the photo comes out at around 45–50 KB, inside the 20 KB to 50 KB range.' },
      { q: 'Can I resize an image to 20KB JPG?', a: 'Yes. Every image is saved as a standard JPG file. PNG, WEBP and iPhone HEIC photos are converted to JPG automatically while they are resized.' },
      { q: 'How do I resize an image to 20KB to 100KB?', a: 'Type 100 in the size box, or open the resize image to 100KB page. The image is made as large and clear as 100 KB allows, which also meets a 20 KB minimum.' },
      { q: 'Will my photo lose quality at 20 KB?', a: 'Some detail is always lost at 20 KB, but the tool keeps the highest quality that still fits, so faces and signatures stay clear. Cropping the photo first helps even more.' },
      { q: 'Will my image keep its original dimensions?', a: 'Yes, whenever possible. If you leave the width and height empty, the image keeps its original pixel size and only the JPG quality is lowered to fit under 20 KB. Only a picture too large to fit even at low quality, such as a full-size phone photo, is made smaller, and the tool tells you when that happens.' },
      { q: 'Can I set the width and height in pixels as well?', a: 'Yes. Type the width and height your form asks for. The image is centre-cropped to that shape and then compressed to under 20 KB.' },
      { q: 'Why does my file show 19.5 KB instead of 20 KB?', a: 'The tool counts 20 KB as 20,000 bytes so that every website accepts the file. Windows shows sizes in units of 1,024 bytes, so 20,000 bytes appears as about 19.5 KB.' },
      { q: 'Can I resize a signature to 20 KB?', a: 'Yes. Scan or photograph your signature on white paper, crop it, and add it here. Transparent PNG signatures get a white background.' },
      { q: 'Can I resize several photos at once?', a: 'Yes. Add as many images as you like. Each one is resized on its own, and you can download them one by one or all together as a ZIP file.' },
      { q: 'Is this tool free?', a: 'Yes. It is completely free, with no signup, no watermark and no limit on the number of images.' },
      { q: 'Are my photos uploaded to a server?', a: 'No. The image is resized inside your browser and never leaves your device.' },
    ],
  },

  'resize-image-to-50kb': {
    title: 'Resize Image to 50KB – Free Online, JPG & PDF',
    description:
      'Resize image to 50KB online free. Compress JPG photos and PDF files to under 50 KB for exam, job and admission forms. No signup, no uploads, unlimited.',
    h1: 'Resize Image to 50KB',
    lead: 'Resize image to 50KB online — photos to JPG and documents to PDF, all on one page.',
    navLabel: 'Resize Image to 50KB',
    cardText: 'Compress photos and PDFs to under 50 KB.',
    howTo: {
      title: 'How to resize an image to 50KB',
      steps: [
        '<strong>Add your files.</strong> Drop in photos or PDF documents, click “Choose files”, use your phone camera or paste with Ctrl+V.',
        '<strong>Keep 50 KB or change it.</strong> Choose JPG or PDF for images, and type pixel dimensions if your form gives them.',
        '<strong>Download.</strong> Each file is compressed to just under 50 KB. Download them one by one or as a ZIP.',
      ],
    },
    features: {
      title: 'One tool for 50 KB photos and PDFs',
      items: [
        { title: 'Images and PDFs together', text: 'Drop photos and PDF documents in the same box. Images come out as JPG, PDFs stay PDF.' },
        { title: 'Best quality under 50 KB', text: 'The tool keeps the highest quality that fits, so the file lands just under 50 KB instead of far below it.' },
        { title: 'Image to 50 KB PDF', text: 'Need a photo or scan as a PDF? Choose PDF and get a one-page PDF under 50 KB.' },
        { title: 'Text kept when possible', text: 'PDFs are first shrunk without touching the text. Pages are only turned into images when that is the only way to fit.' },
        { title: 'Exact dimensions', text: 'Type the width and height in pixels and the photo is cropped to that size before it is compressed.' },
        { title: 'Online, private, unlimited', text: 'It runs in your browser: nothing to install, nothing uploaded, no daily cap.' },
      ],
    },
    sections: [
      {
        h2: 'Resize image to 50KB in seconds',
        paragraphs: [
          'A 50 KB limit is one of the most common rules on online application forms — for passport-size photos, scanned signatures, mark sheets and ID proofs. Phone photos are usually 2 to 5 MB, a hundred times too big. This tool will <strong>resize image to 50KB</strong> the moment you add it, and gives you a file that is ready to upload.',
          'Unlike most resizers, it does not stop at images. You can drop a PDF document into the same box and get it back under 50 KB as well, so you can prepare every upload for a form on one page.',
        ],
      },
      {
        h2: 'Resize image to 50KB online, without installing anything',
        paragraphs: [
          'This is a <strong>resize image to 50KB online</strong> tool in the true sense: it opens in your browser and works there. There is no app to download, no account and no watermark. Even better, the compression runs on your own device, so your files are never uploaded to a server and the result appears almost instantly, even on mobile data.',
        ],
      },
      {
        h2: 'Resize image to 50KB JPG',
        paragraphs: [
          'Forms almost always want photos as JPG or JPEG, so every image is saved as a JPG. PNG screenshots, WEBP pictures and iPhone HEIC photos are converted on the way. If a picture has a transparent background, it is placed on white so it looks right as a JPG.',
          'To reach 50 KB, the tool keeps your image’s original pixel size, tests JPG quality levels and keeps the highest one that fits. Only if the picture is too large to fit at all — like a full-resolution phone photo — is the pixel size reduced, and the tool tells you so. The finished <strong>50 KB JPG</strong> usually weighs 45–50 KB — as sharp as the limit allows. That is the whole idea behind “resize image to 50KB JPG”: the biggest, clearest photo that still passes the check.',
        ],
      },
      {
        h2: 'Resize image to 50KB PDF',
        paragraphs: [
          'Many portals ask for documents — caste certificates, mark sheets, Aadhaar cards — as a PDF under 50 KB. There are two ways to resize image to 50KB PDF here:',
        ],
        list: [
          '<strong>You have a photo or scan of the document:</strong> choose <strong>PDF</strong> under “Save images as”. The image is compressed and placed on a single PDF page, and the whole PDF stays under 50 KB.',
          '<strong>You already have a PDF:</strong> just drop it in. The tool first tries to shrink it without changing anything you can see. If that is not enough, each page is turned into a compressed image, so the PDF fits under 50 KB.',
        ],
      },
      {
        h2: 'What happens to the text in a compressed PDF',
        paragraphs: [
          'A PDF made in Word or downloaded from a website contains real text. When the tool has to turn its pages into images to reach 50 KB, the text still looks the same but can no longer be selected or searched, and the tool tells you when this happened. For uploads to a form this does not matter — the reviewer only needs to read it. Long documents with many pages will look softer at 50 KB, so set a higher limit if the form allows it.',
        ],
      },
      {
        h2: 'Resize image to 50KB to 100KB',
        paragraphs: [
          'Some forms ask for a file between 50 KB and 100 KB. A 50 KB file could be rejected there, so set the limit to the top of the range instead: click <strong>100 KB</strong>, or use the <a href="/resize-image-to-100kb">resize image to 100KB</a> page. The tool aims just under the limit, so the file will land between 90 and 100 KB, comfortably inside the range. So to resize image to 50KB to 100KB, think “100 KB maximum”.',
          'The same idea works the other way. For a photo that must be between 20 KB and 50 KB, keep the limit at 50 KB. For a signature under 20 KB, use <a href="/resize-image-to-20kb">resize image to 20KB</a>.',
        ],
      },
      {
        h2: 'Photo size in pixels and in KB',
        paragraphs: [
          'Notifications often state both, such as “photo 3.5 cm × 4.5 cm, 200 × 230 pixels, 20–50 KB”. Type the pixel numbers into the width and height boxes and the photo is centre-cropped to exactly that shape, then compressed. If you type only one side, the other is worked out from your photo’s proportions.',
          'Note that a 50 KB limit is counted as 50,000 bytes, the stricter way to measure a kilobyte, so no website rejects your file. Windows and some phones show 50,000 bytes as about 48.8 KB — that is expected.',
        ],
      },
      {
        h2: 'Why your photo is not just made blurry',
        paragraphs: [
          'Many free resizers reach 50 KB by turning the quality down until the file fits, which leaves blocky faces and smudged letters. Here your original pixel size is kept whenever the file can fit at reasonable quality, and reduced only as far as needed when it cannot. A photo of roughly 400 to 500 pixels wide fits in 50 KB at good quality, which is plenty for a passport-size photo on a form. A document photo gets the same treatment, so the writing stays readable. The aim is always the same — use as much of the 50 KB as possible, without going over.',
        ],
      },
      {
        h2: 'Resize image to 50KB online on your phone',
        paragraphs: [
          'Most people fill in forms on their phone, so the tool is built for it. Open this page in Chrome on Android or Safari on iPhone, tap <strong>Choose files</strong> to pick a photo from your gallery, or <strong>Take a photo</strong> to use the camera. iPhone HEIC photos are handled automatically. The 50 KB JPG or PDF downloads in a moment, ready to select in the form. It works the same way on Windows, Mac and Chromebook, where you can also paste a screenshot with Ctrl+V.',
        ],
      },
      {
        h2: 'Good habits for upload-ready files',
        list: [
          'Crop away background, tables and fingers before you compress — every kilobyte then goes to the part that matters.',
          'Photograph documents flat, from straight above, in daylight. Shadows and blur cost size and readability.',
          'For multi-page documents, combine the pages with <a href="/image-to-pdf">image to PDF</a> first, then compress the PDF here.',
          'Give the downloaded file a clear name, such as “photo.jpg” or “marksheet.pdf”, before uploading.',
          'Keep your original files. You can always come back and make a new version with a different limit.',
        ],
      },
      {
        h2: 'Many files at once',
        paragraphs: [
          'Applications usually need a photo, a signature and a few documents. Drop them all in together: each file is compressed on its own and listed with its old and new size. Download any single file, or click <strong>Download all (ZIP)</strong> to save them in one go. Change the limit and every file is compressed again automatically.',
        ],
      },
      {
        h2: 'Safe for your personal documents',
        paragraphs: [
          'ID cards, certificates and photos are exactly the kind of files you should not hand to an unknown website. Here they stay on your device: the compression runs inside your browser, nothing is uploaded or stored, and the files disappear when you close the tab.',
        ],
      },
    ],
    faq: [
      { q: 'How do I resize an image to 50KB?', a: 'Add your photo by dropping it in, clicking “Choose files” or pasting it with Ctrl+V. The limit is already 50 KB, so the image is compressed straight away. Click “Download” to save it.' },
      { q: 'How do I resize an image to 50KB PDF?', a: 'Choose PDF under “Save images as” and add your photo or scan. You get a one-page PDF under 50 KB. If you already have a PDF, simply drop it in and it is compressed to under 50 KB.' },
      { q: 'Can I compress a PDF to 50 KB here?', a: 'Yes. PDF files go in the same box as images. The tool first shrinks the PDF without changing it, and if that is not enough, turns the pages into compressed images so it fits under 50 KB.' },
      { q: 'How do I resize an image to 50KB to 100KB?', a: 'Set the limit to the top of the range by clicking 100 KB. The file will land just under 100 KB, inside the 50 KB to 100 KB range.' },
      { q: 'Can I resize an image to 50KB JPG?', a: 'Yes. Every image is saved as a JPG. PNG, WEBP and iPhone HEIC files are converted to JPG automatically.' },
      { q: 'Is this resize image to 50KB online tool free?', a: 'Yes. It is free and unlimited, with no signup and no watermark. It works online in your browser with nothing to install.' },
      { q: 'Can I keep the text in my PDF selectable?', a: 'Often, yes. The tool tries a lossless shrink first, which keeps the text. Only when that is not enough are pages turned into images, and the tool tells you when that happened.' },
      { q: 'Will my image keep its original dimensions?', a: 'Yes, whenever possible. If you leave the width and height empty, the image keeps its original pixel size and only the JPG quality is lowered to fit under 50 KB. Only a picture too large to fit even at low quality, such as a full-size phone photo, is made smaller, and the tool tells you when that happens.' },
      { q: 'Can I set the photo size in pixels too?', a: 'Yes. Type the width and height in pixels. The photo is centre-cropped to that shape and then compressed to under 50 KB.' },
      { q: 'Why does my 50 KB file show as 48.8 KB?', a: 'The tool counts 50 KB as 50,000 bytes so every website accepts the file. Windows shows sizes in units of 1,024 bytes, so it displays about 48.8 KB.' },
      { q: 'Are my files uploaded?', a: 'No. Photos and PDFs are compressed inside your browser and never leave your device.' },
    ],
  },

  'resize-image-to-100kb': {
    title: 'Resize Image to 100KB – Free Online, JPG & PDF',
    description:
      'Resize image to 100KB online free and download a clear JPG or PDF under 100 KB. Works on phone and PC, for photos and PDFs. No signup, no uploads.',
    h1: 'Resize Image to 100KB',
    lead: 'Resize image to 100KB online and download a sharp JPG or PDF that fits any upload limit.',
    navLabel: 'Resize Image to 100KB',
    cardText: 'Make photos and PDFs fit under 100 KB.',
    howTo: {
      title: 'How to resize an image to 100KB',
      steps: [
        '<strong>Add your photos or PDFs.</strong> Drop them in, click “Choose files”, take a photo or paste with Ctrl+V.',
        '<strong>Choose the format.</strong> 100 KB is already set. Save images as JPG or PDF, and add pixel dimensions if you need them.',
        '<strong>Download.</strong> Each file is ready in a moment, just under 100 KB. Download one file or all of them as a ZIP.',
      ],
    },
    features: {
      title: 'A sharper result at 100 KB',
      items: [
        { title: 'Uses the full 100 KB', text: 'The tool keeps the highest quality that fits, so you get a large, readable image just under 100 KB.' },
        { title: 'JPG or PDF download', text: 'Save images as JPG, or as a one-page PDF. PDF files you add come back as smaller PDFs.' },
        { title: 'Documents stay readable', text: '100 KB leaves room for detail, so certificates and mark sheets keep their small print.' },
        { title: 'Pixel size control', text: 'Keep the original size by default, or set an exact width and height when a form asks for it.' },
        { title: 'Batch and ZIP', text: 'Add many files at once and download them together as one ZIP file.' },
        { title: 'Nothing uploaded', text: 'The resizing runs in your browser, so your documents never leave your phone or computer.' },
      ],
    },
    sections: [
      {
        h2: 'Resize image to 100KB, free and online',
        paragraphs: [
          'A limit of 100 KB is generous compared with 20 KB, but a photo straight from a phone camera is still 20 to 50 times larger. This tool will <strong>resize image to 100KB</strong> as soon as you add it: it shrinks the file to just under the limit while keeping as much detail as 100 KB can hold, so documents stay readable and photos stay sharp.',
          'It is free, with no signup, no watermark and no limit on the number of files. Photos and PDFs go in the same box, so every document for an application can be prepared in one place.',
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
        h2: 'Resize image to 100KB online — how it works',
        paragraphs: [
          'Most resizers only lower the quality, which wastes the limit: the file ends up blurry at 40 KB when 100 KB was allowed. This <strong>resize image to 100KB online</strong> tool keeps your image’s original width and height and finds the highest JPG quality that still fits just under the limit. Only when the picture is too large for 100 KB at reasonable quality is the pixel size reduced, as little as possible, and the tool tells you.',
          'The limit is counted as 100,000 bytes, the stricter of the two kilobyte definitions websites use, so the upload is always accepted. On Windows the file will show as about 97 KB — that is the same file measured in units of 1,024 bytes.',
        ],
      },
      {
        h2: 'Resize image to 100KB JPG',
        paragraphs: [
          'JPG is the format almost every website accepts for photos and scans, so images are saved as JPG by default. PNG, WEBP and iPhone HEIC photos are converted automatically, and transparent backgrounds are filled with white. If your image is already a JPG under 100 KB, it is returned as it is, without any loss.',
        ],
      },
      {
        h2: 'Resize image to 100KB PDF',
        paragraphs: [
          'When a form wants a PDF, choose <strong>PDF</strong> under “Save images as”. Your photo or scan is compressed and placed on one PDF page, and the whole PDF stays under 100 KB. That is the quickest way to resize image to 100KB PDF from a photo.',
          'You can also drop an existing PDF. The tool first tries to make it smaller without changing it, which keeps the text selectable. If the PDF is still too large, each page is turned into a compressed image so the file fits — the pages look the same, but the text can no longer be selected, and the tool tells you when this happened. 100 KB is usually enough for a clear one- or two-page document.',
        ],
      },
      {
        h2: 'Resize image to 100KB download — no app needed',
        paragraphs: [
          'You do not need to download any software to resize a photo. When people search for “resize image to 100KB download”, they usually mean an app — but here everything happens on this page, and the only download is your finished file. Click <strong>Download</strong> next to a file to save it, or <strong>Download all (ZIP)</strong> when you have several. On a phone, the file goes to your Downloads folder, where the upload box of any form can find it.',
        ],
      },
      {
        h2: 'What a 100 KB image looks like',
        paragraphs: [
          'At 100 KB there is real room for detail. A photo of roughly 700 to 900 pixels wide fits at good quality — sharp on screen and fine for a printed passport-size photo. A photo of a one-page document usually keeps its letters readable, even small print and stamps. Images with a lot of fine detail, like busy backgrounds, need more space in a JPG, so a very large detailed photo may be reduced in pixels to fit; plain backgrounds leave more room for the part that matters.',
        ],
      },
      {
        h2: 'Resize image to 100KB JPG or PDF: which to choose',
        paragraphs: [
          'Pick the format the form asks for. If the upload box says “JPG/JPEG”, keep the default and you get a <strong>100 KB JPG</strong>. If it says “PDF only”, switch “Save images as” to PDF: you get a <strong>100 KB PDF</strong> with your photo on a single page. If you have several pages, put them together with <a href="/image-to-pdf">image to PDF</a> first, then drop that PDF here to resize it to 100 KB. Both formats download straight to your device, and you can switch between them at any time — the files are compressed again automatically.',
        ],
      },
      {
        h2: 'Better than a desktop photo editor for this job',
        paragraphs: [
          'You could open a photo editor, guess a size, export, check the file, and repeat until it fits. This page does that guessing for you in a fraction of a second and stops at the best result under the limit. There is nothing to install and nothing to learn: add a file, check the size, and click <strong>Download</strong>. That is why so many people search to resize image to 100KB online instead of using software.',
        ],
      },
      {
        h2: 'Choosing the right limit',
        paragraphs: [
          'Always use the largest size the form allows, because a bigger file is a clearer file. If the form says “between 50 KB and 100 KB”, keep the limit at 100 KB; the result lands just below it, inside the range. For tighter limits, use the <a href="/resize-image-to-50kb">resize image to 50KB</a> or <a href="/resize-image-to-20kb">resize image to 20KB</a> pages, or type any number in the size box, from 5 KB to 10,000 KB.',
        ],
      },
      {
        h2: 'Exact width and height',
        paragraphs: [
          'If a form also gives pixel dimensions, type the width and height. The image is centre-cropped to that exact shape, so it is never stretched, and then compressed to under 100 KB. Leave one box empty to keep the original proportions, or both empty to keep the original pixel size.',
        ],
      },
      {
        h2: 'Tips for clear documents at 100 KB',
        list: [
          'Scan or photograph the document flat, in daylight, from directly above.',
          'Crop off the table or floor around the page before resizing, so the detail goes to the document.',
          'For a document with several pages, combine them with <a href="/image-to-pdf">image to PDF</a> and then shrink the PDF here.',
          'If text looks soft at 100 KB, check whether the form accepts a larger file and raise the limit.',
        ],
      },
      {
        h2: 'Works everywhere, keeps your files private',
        paragraphs: [
          'The tool runs in Chrome, Safari, Edge and Firefox on Android, iPhone, Windows, Mac and Chromebook. Because it works inside your browser, your certificates, IDs and photos are never sent to a server. To copy text out of a document instead, try the <a href="/">image to text converter</a> or <a href="/pdf-to-text">PDF to text</a>.',
        ],
      },
    ],
    faq: [
      { q: 'How do I resize an image to 100KB?', a: 'Add your photo by dropping it in, clicking “Choose files” or pasting it with Ctrl+V. The limit is already 100 KB, so the image is resized straight away. Click “Download” to save it.' },
      { q: 'Can I resize an image to 100KB online for free?', a: 'Yes. This online tool is free and unlimited, with no signup and no watermark. It works in your browser on phone and computer.' },
      { q: 'Do I need to download an app to resize an image to 100KB?', a: 'No. Everything works on this page. The only download is your resized file, which you save with the Download button.' },
      { q: 'Can I resize an image to 100KB JPG?', a: 'Yes. Images are saved as JPG by default. PNG, WEBP and iPhone HEIC photos are converted to JPG automatically.' },
      { q: 'How do I resize an image to 100KB PDF?', a: 'Choose PDF under “Save images as” to get a one-page PDF under 100 KB. You can also drop an existing PDF and it will be compressed to under 100 KB.' },
      { q: 'Will my document still be readable at 100 KB?', a: 'Usually, yes. The tool uses as much of the 100 KB as it can, so one- and two-page documents stay clear. Very long PDFs get softer; use a higher limit if the form allows it.' },
      { q: 'Will my image keep its original dimensions?', a: 'Yes, whenever possible. If you leave the width and height empty, the image keeps its original pixel size and only the JPG quality is lowered to fit under 100 KB. Only a picture too large to fit even at low quality, such as a full-size phone photo, is made smaller, and the tool tells you when that happens.' },
      { q: 'Can I set the width and height in pixels?', a: 'Yes. Type the width and height and the image is centre-cropped to that size, then compressed to under 100 KB.' },
      { q: 'Why does my file show as 97 KB?', a: 'The tool counts 100 KB as 100,000 bytes so that every website accepts it. Windows measures in units of 1,024 bytes, so the same file shows as about 97 KB.' },
      { q: 'Can I resize many images at once?', a: 'Yes. Add as many photos and PDFs as you like and download them one by one or together as a ZIP file.' },
      { q: 'Are my files uploaded to a server?', a: 'No. The files are resized inside your browser and never leave your device.' },
    ],
  },
};

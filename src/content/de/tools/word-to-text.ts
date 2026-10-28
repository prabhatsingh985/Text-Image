import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'Word zu Text – Word in Text umwandeln, kostenlos',
  description:
    'Word in Text umwandeln, kostenlos online. Mach aus DOCX-, ODT- und RTF-Dateien in Sekunden sauberen reinen Text (TXT). Unbegrenzt, ohne Anmeldung, ohne Upload.',
  h1: 'Word-zu-Text-Konverter',
  lead: 'Wandle Word online und kostenlos in Text um – sauberer reiner Text aus DOCX-, ODT- und RTF-Dateien.',
  navLabel: 'Word zu Text',
  cardText: 'Reinen Text aus DOCX-, ODT- und RTF-Dateien holen.',
  howTo: {
    title: 'So wandelst du Word in Text um',
    steps: [
      '<strong>Dokumente hinzufügen.</strong> Leg eine oder mehrere .docx-, .odt- oder .rtf-Dateien in das Feld.',
      '<strong>Text prüfen.</strong> Absätze, Listen und Tabellen bleiben in der richtigen Reihenfolge. Bearbeite alles direkt im Feld.',
      '<strong>Kopieren oder herunterladen.</strong> Kopiere den Text, speichere eine TXT-Datei oder lade alle Dateien als ZIP herunter.',
    ],
  },
  features: {
    title: 'Ein Word-zu-Text-Konverter ohne Formatierungsballast',
    items: [
      { title: 'Sofort', text: 'Keine OCR nötig – der Text wird direkt aus der Datei gelesen, selbst lange Dokumente dauern eine Sekunde.' },
      { title: 'Behält die Struktur', text: 'Absätze bleiben Absätze, Listen bekommen Aufzählungszeichen und Tabellenzeilen werden zu tab-getrennten Zeilen.' },
      { title: 'DOCX, ODT und RTF', text: 'Funktioniert mit Microsoft Word, Google-Docs-Exporten, LibreOffice und WordPad.' },
      { title: 'Stapelverarbeitung', text: 'Leg Dutzende Dokumente auf einmal ab und lade alle TXT-Dateien als ZIP herunter.' },
      { title: 'Lässt Ballast weg', text: 'Gelöschte Überarbeitungen, Feldfunktionen und versteckte Auszeichnungen werden ausgelassen.' },
      { title: 'Privat', text: 'Dokumente werden in deinem Browser geöffnet. Nichts wird hochgeladen oder gespeichert.' },
    ],
  },
  sections: [
    {
      h2: 'Ein kostenloser Word-zu-Text-Konverter für sauberen reinen Text',
      paragraphs: [
        'Text aus einem Word-Dokument zu kopieren wirkt einfach – bis du ihn woanders einfügst. Schriften, Farben, seltsame Abstände, versteckte Formatvorlagen und Autoformatierung kommen mit und zerschießen das Layout deiner E-Mail, deiner Website oder deines Codes. Dieser <strong>Word-zu-Text-Konverter</strong> entfernt all das und gibt dir sauberen, reinen Text, der sich überall perfekt einfügen lässt.',
        'Du kannst hier <strong>Word in Text umwandeln – online und kostenlos</strong>, ohne Grenzen: keine Anmeldung, kein Wasserzeichen, keine Dateibegrenzung, kein Tageskontingent. Leg eine Seite oder hundert Dokumente ab. Es gibt nichts zu installieren, und du musst Microsoft Word nicht einmal öffnen.',
      ],
    },
    {
      h2: 'Warum Word in Text umwandeln?',
      paragraphs: ['Reiner Text ist das universelle Format. Jedes Programm öffnet ihn, er trägt nie versteckte Formatierung mit sich und bleibt jahrzehntelang lesbar. Man wandelt Word in Text um, um:'],
      list: [
        'Inhalte in eine Website, einen Blog oder ein CMS einzufügen, ohne das Design zu zerstören.',
        'Dokumente an KI-Assistenten, Übersetzer, Rechtschreibprüfungen und andere Online-Tools zu geben.',
        'Text in Code, Skripte, Konfigurationsdateien und Datenbanken zu kopieren.',
        'Wörter und Zeichen exakt zu zählen – für Hausarbeiten, Artikel und Übersetzungen.',
        'Dokumente in einem Format zu archivieren, das sich auf jedem Gerät öffnet, heute und in Zukunft.',
        'Sauberen Text per E-Mail oder Chat zu verschicken, ohne Anhang.',
      ],
    },
    {
      h2: 'Warum nicht einfach aus Word kopieren und einfügen?',
      paragraphs: [
        'Beim Kopieren aus Word kommt die Formatierung mit. Viele Editoren, Website-Baukästen und Mail-Programme übernehmen diese versteckten Stile, und plötzlich hat dein Text eine andere Schrift, seltsame Abstände oder kaputte Aufzählungen. Selbst „Nur Text einfügen“ kann typografische Anführungszeichen, merkwürdige Umbrüche und verirrte Zeichen hinterlassen – und es klappt immer nur mit einem Dokument.',
        'Wandelst du Word mit einem eigenen Tool in Text um, bekommst du das ganze Dokument in einem Schritt als sauberen Text, mit Tabellen als ordentliche tab-getrennte Zeilen und klar markierten Listen. Bei vielen Dateien ist das deutlich schneller, als jedes Dokument zu öffnen und von Hand zu kopieren.',
      ],
    },
    {
      h2: 'Was erhalten bleibt und was entfernt wird',
      paragraphs: ['Ziel ist Text, den du sofort nutzen kannst. Der Konverter behält die Struktur, auf die es ankommt, und entfernt alles andere:'],
      list: [
        '<strong>Erhalten:</strong> alle Absätze in Reihenfolge, Zeilenumbrüche, Tabs und Leerzeilen (mehrere hintereinander werden zu einer).',
        '<strong>Listen:</strong> Aufzählungen und nummerierte Einträge beginnen mit „•“, damit Listen lesbar bleiben.',
        '<strong>Tabellen:</strong> Jede Zeile wird zu einer Textzeile mit tab-getrennten Zellen – in Excel oder Google Tabellen eingefügt, stehen die Spalten richtig.',
        '<strong>Entfernt:</strong> Schriften, Farben, Fett, Kursiv, Bilder, gelöschte Überarbeitungen, Feldfunktionen und versteckte Auszeichnungen.',
        '<strong>Nicht enthalten:</strong> Kopf- und Fußzeilen, Fußnoten und Kommentare. Nur der Haupttext wird extrahiert.',
      ],
    },
    {
      h2: 'So liest der Konverter dein Dokument',
      paragraphs: [
        'Eine .docx-Datei ist eigentlich ein kleines ZIP-Archiv, in dem der Text als strukturiertes XML liegt. Dieses Tool öffnet das Archiv in deinem Browser und liest den Text direkt – keine OCR, kein Raten, keine Erkennungsfehler. Jedes Zeichen kommt genau so heraus, wie du es getippt hast, deshalb ist das Ergebnis selbst bei einem 200-seitigen Dokument sofort da.',
        'Der Text erscheint in einem bearbeitbaren Feld mit Live-Zählung von Wörtern und Zeichen. Korrigiere, was du willst, bevor du kopierst oder als TXT speicherst.',
      ],
    },
    {
      h2: 'DOCX zu TXT und andere Formate',
      paragraphs: [
        'Der Konverter verarbeitet die Dokumentformate, die man wirklich nutzt: <strong>DOCX</strong>, <strong>DOCM</strong> und <strong>DOTX</strong> aus Microsoft Word, <strong>ODT</strong> und <strong>OTT</strong> aus LibreOffice und OpenOffice sowie <strong>RTF</strong>-Dateien aus WordPad und anderen Editoren.',
        'Du arbeitest in Google Docs? Wähle Datei → Herunterladen → Microsoft Word (.docx) und leg diese Datei hier ab. Aus Apple Pages nutzt du Ablage → Exportieren → Word. So oder so bekommst du denselben sauberen reinen Text.',
      ],
    },
    {
      h2: 'Alte .doc-Dateien',
      paragraphs: [
        'Das alte Binärformat .doc (Word 97–2003) wird nicht unterstützt. Öffne die Datei in Word, Google Docs oder LibreOffice, speichere sie als .docx und wandle sie dann hier um. Das dauert ein paar Sekunden und liefert ein deutlich besseres Ergebnis.',
      ],
    },
    {
      h2: 'Viele Word-Dateien auf einmal in Text umwandeln',
      paragraphs: [
        'Ein Ordner voller Dokumente? Leg Dutzende Dateien auf einmal in das Feld. Jede wird einzeln umgewandelt und mit ihrem eigenen Text angezeigt, damit du sie nacheinander prüfen kannst. Am Ende holst du mit <strong>Alles kopieren</strong> alles auf einmal oder lädst alle TXT-Dateien zusammen als ZIP herunter.',
      ],
    },
    {
      h2: 'Word am Handy in Text umwandeln',
      paragraphs: [
        'Eine Word-Datei per E-Mail oder WhatsApp bekommen? Du brauchst keine Word-App. Speichere den Anhang auf dem Handy, öffne diese Seite in Chrome oder Safari auf Android oder iPhone, tippe auf das Feld und wähle die Datei. Der reine Text erscheint sofort, bereit zum Kopieren in eine Nachricht, eine Notiz oder eine andere App. Auf Tablets, Chromebooks, Windows, macOS und Linux funktioniert es genauso.',
      ],
    },
    {
      h2: 'Funktioniert mit jeder Sprache',
      paragraphs: [
        'Weil der Text direkt aus der Datei gelesen wird, kommt jede Sprache korrekt heraus – Deutsch, Englisch, Türkisch, Arabisch, Chinesisch, Japanisch, Russisch und jede andere Schrift. TXT-Dateien werden in UTF-8 gespeichert, sodass selbst der Windows-Editor Umlaute und ß korrekt anzeigt.',
      ],
    },
    {
      h2: 'Privat, kostenlos und unbegrenzt',
      paragraphs: [
        'Verträge, Lebensläufe, Hausarbeiten und Businesspläne enthalten oft private Informationen. Die meisten Online-Konverter laden dein Dokument auf einen Server. Dieser nicht: Die Datei wird in deinem Browser geöffnet und gelesen, sie verlässt also nie deinen Computer oder dein Handy und nichts wird online gespeichert. Deshalb ist dieser Word-zu-Text-Konverter kostenlos und unbegrenzt – es gibt keine Serverkosten zu begrenzen.',
      ],
    },
    {
      h2: 'Tipps für den besten reinen Text',
      list: [
        'Nimm Überarbeitungen in Word vorher an oder lehne sie ab, wenn du sicher sein willst, welche Textversion du bekommst.',
        'Text in Bildern wird nicht extrahiert. Nutze dafür den Bild-zu-Text-Konverter.',
        'Wirkt ein Dokument leer, prüfe, ob es nicht eine alte .doc-Datei ist, die in .docx umbenannt wurde.',
      ],
    },
    {
      h2: 'Du hast nur einen Scan, ein Foto oder ein PDF?',
      paragraphs: [
        'Nutze den <a href="/">Bild-zu-Text-Konverter</a> für Fotos und Screenshots und den <a href="/pdf-to-text">PDF-zu-Text-Konverter</a> für PDF-Dateien, auch gescannte. Für Präsentationen extrahiert der <a href="/ppt-to-text">PPT-zu-Text-Konverter</a> jede Folie samt Sprechernotizen.',
      ],
    },
  ],
  faq: [
    { q: 'Wie wandle ich Word in Text um?', a: 'Leg eine oder mehrere Word-Dateien in das Feld oben. Der Text erscheint in Sekunden, mit Absätzen, Listen und Tabellen in der richtigen Reihenfolge. Kopiere ihn, speichere ihn als TXT oder lade alle Dateien als ZIP herunter.' },
    { q: 'Ist dieser Word-zu-Text-Konverter online kostenlos?', a: 'Ja. Er ist komplett kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Limit für die Anzahl der Dokumente.' },
    { q: 'Wie wandle ich DOCX in TXT um?', a: 'Öffne deine .docx-Datei hier und klicke auf den TXT-Button, um den reinen Text herunterzuladen. Die Datei wird in UTF-8 gespeichert und öffnet sich korrekt im Windows-Editor und jedem anderen Editor.' },
    { q: 'Welche Word-Formate werden unterstützt?', a: 'DOCX, DOCM und DOTX aus Microsoft Word, ODT und OTT aus LibreOffice und OpenOffice sowie RTF. Alte .doc-Dateien müssen zuerst als .docx gespeichert werden.' },
    { q: 'Kann ich eine alte .doc-Datei in Text umwandeln?', a: 'Nicht direkt. Öffne die .doc-Datei in Word, Google Docs oder LibreOffice, speichere sie als .docx und wandle sie dann hier um.' },
    { q: 'Bleiben Tabellen beim Umwandeln von Word in Text erhalten?', a: 'Ja. Jede Tabellenzeile wird zu einer Textzeile mit tab-getrennten Zellen, die du in eine Tabellenkalkulation einfügen kannst.' },
    { q: 'Sind Kopfzeilen, Fußzeilen und Kommentare enthalten?', a: 'Nein. Nur der Haupttext des Dokuments wird extrahiert. Kopf- und Fußzeilen, Fußnoten und Kommentare werden ausgelassen.' },
    { q: 'Kann ich viele Word-Dokumente auf einmal in Text umwandeln?', a: 'Ja. Leg Dutzende Dokumente auf einmal ab und lade alle TXT-Dateien zusammen als ZIP herunter.' },
    { q: 'Wie wandle ich ein Google-Docs-Dokument in reinen Text um?', a: 'Wähle in Google Docs Datei → Herunterladen → Microsoft Word (.docx) und öffne diese Datei hier, um sauberen reinen Text zu bekommen.' },
    { q: 'Wird Text in Bildern umgewandelt?', a: 'Nein. Nur echter Text wird extrahiert. Für Text in Bildern nutze den Bild-zu-Text-Konverter.' },
    { q: 'Wird mein Dokument hochgeladen?', a: 'Nein. Die Datei wird in deinem Browser gelesen und verlässt dein Gerät nie.' },
  ],
};

export default content;

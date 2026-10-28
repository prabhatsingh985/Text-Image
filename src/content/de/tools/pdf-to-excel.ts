import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'PDF in Excel umwandeln – kostenlos online',
  description:
    'PDF kostenlos in Excel umwandeln. Mach aus Tabellen in digitalen und gescannten PDFs bearbeitbare Excel-Blätter, eins pro Seite. Ohne Anmeldung, ohne Upload.',
  h1: 'PDF-in-Excel-Konverter',
  lead: 'Wandle PDF online und kostenlos in Excel um – Tabellen aus digitalen und gescannten PDFs, sofort bearbeitbar.',
  navLabel: 'PDF in Excel',
  cardText: 'PDF-Tabellen in ein bearbeitbares Excel-Blatt verwandeln.',
  howTo: {
    title: 'So wandelst du PDF in Excel um',
    steps: [
      '<strong>PDF hinzufügen.</strong> Leg es in das Feld oder klicke auf „PDF auswählen“. Alle Seiten werden automatisch gelesen.',
      '<strong>Tabellen prüfen.</strong> Jede Seite erscheint als Tabelle. Klick auf eine Zelle, um sie vor dem Download zu korrigieren.',
      '<strong>Excel herunterladen.</strong> Erhalte eine .xlsx-Datei mit einem Blatt pro Seite oder eine CSV.',
    ],
  },
  features: {
    title: 'Ein PDF-in-Excel-Konverter, der deine Tabellen respektiert',
    items: [
      { title: 'Digitale PDFs exakt gelesen', text: 'Hat das PDF eine Textebene, werden die Zahlen direkt daraus übernommen – kein OCR-Raten.' },
      { title: 'Auch gescannte PDFs', text: 'Seiten, die nur Bilder sind, werden per OCR gelesen und dann in Zeilen und Spalten aufgeteilt.' },
      { title: 'Echte Zahlen', text: 'Werte wie 1,250.50 werden in Excel zu Zahlen, SUMME und Diagramme funktionieren sofort.' },
      { title: 'Vor dem Export bearbeiten', text: 'Korrigiere jede Zelle direkt in der Vorschautabelle, bevor du herunterlädst.' },
      { title: 'Ein Blatt pro Seite', text: 'Jede Seite bekommt ihr eigenes Blatt, lange PDFs bleiben übersichtlich.' },
      { title: 'Privat', text: 'Kontoauszüge bleiben auf deinem Gerät. Das PDF wird nie hochgeladen.' },
    ],
  },
  sections: [
    {
      h2: 'Ein kostenloser PDF-in-Excel-Konverter, der echte Tabellen nachbaut',
      paragraphs: [
        'Eine Tabelle aus einem PDF zu kopieren geht meist schief. In eine Tabellenkalkulation eingefügt, bekommst du eine lange, wirre Spalte, Zahlen kleben an Beschriftungen und Zeilen sind zerrissen. Dieser <strong>PDF-in-Excel-Konverter</strong> macht es richtig: Er schaut, wo jedes Wort auf der Seite steht, findet die Zeilen und die Spaltenlücken und baut die Tabelle Zelle für Zelle in einem echten Excel-Blatt nach.',
        'Du kannst <strong>PDF kostenlos in Excel umwandeln</strong> – ohne Anmeldung, ohne Wasserzeichen, ohne Seitenlimit und ohne Tageslimit. Das ist ein echter <strong>PDF-in-Excel-Konverter, online und kostenlos</strong>, ohne Testphase und Upgrade-Hinweise: Wandle eine einseitige Rechnung oder einen 100-seitigen Kontoauszug um, so oft du willst.',
      ],
    },
    {
      h2: 'So funktioniert die Umwandlung von PDF in Excel',
      paragraphs: [
        'Jede Seite des PDFs wird einzeln behandelt. Zuerst sammelt der Konverter alle Wörter der Seite samt ihrer genauen Position. Wörter auf derselben waagerechten Linie bilden eine Zeile. Dann sucht er nach senkrechten Lücken, die durch die ganze Tabelle laufen – das sind die Grenzen zwischen den Spalten. Jedes Wort landet in seiner Zelle, und die Spalten der Excel-Datei passen sich dem Inhalt an.',
        'Da Spalten anhand der Abstände und nicht anhand gezeichneter Linien erkannt werden, lassen sich Tabellen ohne Rahmen genauso gut umwandeln wie Tabellen mit Gitter. Seiten ohne Tabelle werden übersprungen, deine Arbeitsmappe füllt sich also nicht mit leeren Blättern.',
      ],
    },
    {
      h2: 'Digitale und gescannte PDFs funktionieren',
      paragraphs: [
        'Die meisten PDFs von Banken, Buchhaltungsprogrammen und Websites sind <strong>digital</strong>: Sie enthalten echten Text. Auf diesen Seiten werden die Zahlen direkt aus der Datei gelesen, genau so, wie sie dort stehen – ohne Erkennungsfehler und fast sofort.',
        '<strong>Gescannte</strong> PDFs sind anders: Jede Seite ist nur ein Bild. Auf diesen Seiten wendet das Tool zuerst OCR (optische Zeichenerkennung) an, mit automatischer Spracherkennung, und sucht dann die Tabelle. Gemischte Dateien funktionieren auch, und ein Hinweis zeigt, wann OCR verwendet wurde – so weißt du, welche Zahlen du prüfen solltest.',
      ],
    },
    {
      h2: 'Echte Zahlen, bereit für Formeln',
      paragraphs: [
        'Wenn du hier PDF in Excel umwandelst, werden einfache Werte wie 42, 3.75 oder 1,250.50 als Zahlen gespeichert, nicht als Text. SUMME, MITTELWERT, Sortieren, Filter, Pivot-Tabellen und Diagramme funktionieren, sobald du die Datei öffnest.',
        'Werte, die sich nicht ändern dürfen, bleiben genau so: Kontonummern und Kennungen mit führender Null sowie Werte mit Währungszeichen, Buchstaben oder Einheiten. Zahlen im deutschen Format mit Dezimalkomma (1.250,50) bleiben vorerst ebenfalls Text; in Excel kannst du sie mit Daten → Text in Spalten umwandeln. Es geht nichts verloren.',
      ],
    },
    {
      h2: 'Jede Seite vor dem Download prüfen',
      paragraphs: ['Jede Seite des PDFs erscheint als bearbeitbare Tabelle mit ihrer Seitennummer. Klick auf eine Zelle, um einen Wert zu korrigieren – die Änderungen landen direkt in der Datei. Passt alles, wähle das Format:'],
      list: [
        '<strong>Excel (.xlsx):</strong> ein Blatt pro Seite, benannt nach Datei und Seitennummer. Öffnet sich in Microsoft Excel, Google Tabellen, LibreOffice Calc und Numbers.',
        '<strong>CSV:</strong> alle Seiten in einer Datei, mit einer Leerzeile zwischen den Seiten – ideal zum Import in andere Programme.',
        '<strong>Kopieren:</strong> Füge die Tabelle direkt in ein offenes Tabellenblatt ein, jeder Wert landet in der richtigen Spalte.',
      ],
    },
    {
      h2: 'Mehrere PDFs in eine Excel-Datei umwandeln',
      paragraphs: [
        'Ein Jahr Monatsauszüge oder ein Ordner voller Rechnungen? Leg alle PDFs auf einmal ab. Jede Datei wird einzeln umgewandelt, und <strong>Alles in einer Excel-Datei</strong> packt jede Seite jedes PDFs in eine einzige Arbeitsmappe, jede auf ihr eigenes Blatt.',
      ],
    },
    {
      h2: 'Warum nicht einfach kopieren und einfügen?',
      paragraphs: [
        'Ein PDF speichert eine Tabelle nicht als Zeilen und Spalten, sondern als einzelne Textstücke an Positionen auf der Seite. Deshalb landet beim Markieren und Einfügen in Excel alles in einer Spalte oder die Reihenfolge gerät durcheinander. Das von Hand zu reparieren – Zellen trennen, Werte verschieben, Fehler abtippen – dauert oft länger, als die Tabelle neu einzugeben.',
        'Ein spezieller Konverter liest diese Positionen und setzt jeden Wert zurück in seine Zelle, sodass die Tabelle sofort sortiert, gefiltert und summiert werden kann. Wenn du PDF in Sekunden kostenlos in Excel umwandeln kannst, gibt es keinen Grund, eine Stunde mit Kopieren und Einfügen zu verbringen.',
      ],
    },
    {
      h2: 'Was man typischerweise von PDF in Excel umwandelt',
      list: [
        'Kontoauszüge und Kreditkartenabrechnungen, um Buchungen zu sortieren, zu summieren und zu kategorisieren.',
        'Rechnungen, Bestellungen und Belege, um Beträge zu prüfen und Zahlungen nachzuverfolgen.',
        'Preislisten, Produktkataloge und Lagerberichte.',
        'Finanzberichte, Bilanzen und Geschäftsberichte.',
        'Stundenpläne, Dienstpläne, Anwesenheitslisten und Noten.',
        'Umfrageergebnisse und Datentabellen aus Studien und öffentlichen Berichten.',
      ],
    },
    {
      h2: 'PDF online in Excel umwandeln – ohne Software',
      paragraphs: [
        'Desktop-PDF-Software ist teuer, und manche Online-Tools schicken dir die Datei per E-Mail oder hören nach zwei Seiten auf. Dieser PDF-in-Excel-Konverter braucht nur einen Browser. Er läuft in Chrome, Edge, Firefox und Safari unter Windows, macOS, Linux, ChromeOS, Android und iOS – du kannst PDF also vom Bürorechner oder direkt vom Handy online in Excel umwandeln.',
        'Nach dem ersten Besuch ist die Engine im Browser zwischengespeichert, beim nächsten Mal startet dieser Online-Konverter also noch schneller.',
      ],
    },
    {
      h2: 'Privat: Deine Auszüge verlassen dein Gerät nicht',
      paragraphs: [
        'Kontoauszüge, Gehaltsabrechnungen und Rechnungen enthalten genau die Art von Informationen, die du nicht auf einen unbekannten Server laden solltest. Hier wird das PDF vollständig in deinem Browser geöffnet, gelesen und in Excel umgewandelt. Die Datei verlässt deinen Computer oder dein Handy nie, nichts wird online gespeichert, und es gibt kein Konto, das gehackt werden könnte. Darum kann das Tool auch kostenlos und unbegrenzt sein: Es gibt keine Serverkosten zu begrenzen.',
      ],
    },
    {
      h2: 'Tipps für die beste Excel-Datei',
      list: [
        'Entferne das Passwort eines geschützten PDFs, bevor du es hier öffnest.',
        'Bei gescannten PDFs liefert ein sauberer Scan mit 300 dpi oder mehr deutlich genauere Zahlen.',
        'Tabellen mit klaren Spalten, etwa Kontoauszüge und Rechnungen, liefern die besten Ergebnisse. Verbundene Zellen und komplexe Layouts brauchen eventuell ein paar Korrekturen.',
        'Prüfe Summen und wichtige Zahlen aus gescannten Seiten immer, bevor du sie verwendest.',
      ],
    },
    {
      h2: 'Brauchst du reinen Text oder hast du ein Foto einer Tabelle?',
      paragraphs: [
        'Um statt Tabellen den reinen Text eines PDFs zu bekommen, nutze den <a href="/pdf-to-text">PDF-zu-Text-Konverter</a>. Für Fotos und Screenshots von Tabellen baut der <a href="/jpg-to-excel">JPG-in-Excel-Konverter</a> sie als Tabellenblatt nach, und der <a href="/">Bild-zu-Text-Konverter</a> kopiert Text aus jedem Bild.',
      ],
    },
  ],
  faq: [
    { q: 'Wie wandle ich PDF in Excel um?', a: 'Leg dein PDF in das Feld oben oder klicke auf „PDF auswählen“. Alle Seiten werden automatisch gelesen und als bearbeitbare Tabellen angezeigt. Prüfe die Zellen und lade eine Excel-Datei (.xlsx) mit einem Blatt pro Seite oder eine CSV herunter.' },
    { q: 'Wie kann ich PDF kostenlos in Excel umwandeln?', a: 'Nutze diesen kostenlosen PDF-in-Excel-Konverter. Keine Anmeldung, kein Wasserzeichen, kein Seiten- und kein Tageslimit – und er funktioniert mit digitalen und gescannten PDFs.' },
    { q: 'Kann ich ein gescanntes PDF in Excel umwandeln?', a: 'Ja. Seiten ohne Textebene werden per OCR gelesen und dann in Zeilen und Spalten aufgeteilt. Prüfe die Zahlen bei Scans schlechter Qualität sorgfältig.' },
    { q: 'Wie wandle ich einen Kontoauszug als PDF in Excel um?', a: 'Öffne das PDF des Kontoauszugs hier. Der Konverter findet die Zeilen und die Spaltenlücken und baut die Tabelle Zelle für Zelle nach. Prüfe die Beträge in der Vorschau und lade die Excel-Datei herunter. Das PDF verlässt dein Gerät nie.' },
    { q: 'Werden Zahlen in Excel zu echten Zahlen?', a: 'Werte im Format 1,250.50 werden zu Zahlen, SUMME und Diagramme funktionieren sofort. Werte mit Buchstaben, Währungszeichen, führenden Nullen oder Dezimalkomma (1.250,50) bleiben Text, damit nichts verloren geht.' },
    { q: 'Bekommt jede PDF-Seite ein eigenes Excel-Blatt?', a: 'Ja. Jede Seite mit einer Tabelle landet auf einem eigenen Blatt in derselben Arbeitsmappe, benannt nach Datei und Seitennummer.' },
    { q: 'Kann ich die Tabelle vor dem Download bearbeiten?', a: 'Ja. Klick auf eine Zelle in der Vorschau, um sie zu korrigieren. Deine Änderungen landen in der Excel- oder CSV-Datei.' },
    { q: 'Kann ich mehrere PDFs in eine Excel-Datei umwandeln?', a: 'Ja. Leg alle PDFs auf einmal ab und klicke auf „Alles in einer Excel-Datei“, um eine Arbeitsmappe mit jeder Seite auf einem eigenen Blatt zu bekommen.' },
    { q: 'Kann ich PDF am Handy online in Excel umwandeln?', a: 'Ja. Dieser PDF-in-Excel-Konverter läuft im Browser auf Android und iPhone. Wähle das PDF aus deinen Dateien und lade das Excel-Blatt herunter – ohne Installation.' },
    { q: 'Wird das PDF auf einen Server hochgeladen?', a: 'Nein. Die Datei wird in deinem Browser geöffnet und umgewandelt und verlässt dein Gerät nie.' },
    { q: 'Werden passwortgeschützte PDFs unterstützt?', a: 'Noch nicht. Entferne zuerst das Passwort und öffne die Datei dann hier.' },
  ],
};

export default content;

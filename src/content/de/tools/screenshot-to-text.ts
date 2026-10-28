import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'Screenshot zu Text – Text aus Screenshot kopieren, kostenlos',
  description:
    'Screenshot in Text umwandeln, in Sekunden. Mit Strg+V einfügen und den Text kopieren. Kostenlos, unbegrenzt und direkt im Browser – nichts wird hochgeladen.',
  h1: 'Screenshot zu Text',
  lead: 'Füge einen Screenshot mit Strg+V ein und mach daraus Text, den du kopieren, bearbeiten oder herunterladen kannst.',
  navLabel: 'Screenshot zu Text',
  cardText: 'Screenshot einfügen und Text sofort kopieren.',
  howTo: {
    title: 'So wandelst du einen Screenshot in Text um',
    steps: [
      '<strong>Screenshot machen.</strong> Drücke Win+Umschalt+S unter Windows, Cmd+Ctrl+Umschalt+4 auf dem Mac oder nutze die Screenshot-Tasten deines Handys.',
      '<strong>Hier einfügen.</strong> Drücke Strg+V (Cmd+V auf dem Mac) irgendwo auf dieser Seite oder lege das gespeicherte Bild in das Feld.',
      '<strong>Text kopieren.</strong> Bearbeite ihn im Feld, klicke im Bild auf eine Zeile, um nur diese zu kopieren, oder lade ein TXT herunter.',
    ],
  },
  features: {
    title: 'Ein Konverter, gemacht für Screenshots',
    items: [
      { title: 'Einfügen statt hochladen', text: 'Direkt aus der Zwischenablage mit Strg+V. Du musst den Screenshot nicht als Datei speichern.' },
      { title: 'Präzise bei Bildschirmtext', text: 'Bildschirmtext ist scharf und kontrastreich, daher sind die Ergebnisse meist nahezu perfekt.' },
      { title: 'Eine Zeile kopieren', text: 'Jede Zeile wird im Screenshot markiert. Ein Klick kopiert nur diese Zeile.' },
      { title: 'Viele auf einmal', text: 'Füge mehrere Screenshots hintereinander ein und lade den ganzen Text als ZIP herunter.' },
      { title: 'Erkennt die Sprache', text: 'Deutsch, Englisch, Chinesisch, Japanisch, Russisch und über 40 weitere – automatisch erkannt.' },
      { title: 'Bleibt auf deinem Gerät', text: 'Chats und Fehlerprotokolle können privat sein. Dein Screenshot geht nie an einen Server.' },
    ],
  },
  sections: [
    {
      h2: 'Kostenloser Screenshot-zu-Text-Konverter: einfügen und kopieren',
      paragraphs: [
        'Viel Text auf dem Bildschirm kann man sehen, aber nicht markieren: eine Fehlermeldung, ein Videobild, eine Folie im Online-Meeting, eine Nachricht in einer App, die das Kopieren sperrt, oder eine Website, die Text als Bild zeigt. Ein Screenshot hält ihn fest, und dieser <strong>Screenshot-zu-Text-Konverter</strong> macht daraus wieder echten Text, den du kopieren, bearbeiten und überall einfügen kannst.',
        'Keine Datei speichern, nichts hochladen. Mach den Screenshot, drück Strg+V auf dieser Seite, und der Text erscheint in Sekunden. Das Ganze ist komplett kostenlos – ohne Anmeldung, ohne Wasserzeichen und ohne Tageslimit –, du kannst Screenshots also so oft in Text umwandeln, wie du willst.',
      ],
    },
    {
      h2: 'So machst du auf jedem Gerät einen Screenshot',
      paragraphs: ['Am schnellsten wandelst du einen Screenshot in Text um, wenn du ihn direkt in die Zwischenablage kopierst und hier einfügst. Diese Tastenkürzel machen genau das:'],
      list: [
        '<strong>Windows:</strong> Drücke Win+Umschalt+S, wähle den Bereich aus und drücke dann Strg+V auf dieser Seite. Die Druck-Taste kopiert den ganzen Bildschirm.',
        '<strong>Mac:</strong> Drücke Cmd+Ctrl+Umschalt+4 und zieh über den Bereich, um ihn zu kopieren, dann hier Cmd+V. Cmd+Umschalt+4 speichert stattdessen eine Datei, die du in das Feld ziehen kannst.',
        '<strong>Chromebook:</strong> Drücke Strg+Umschalt+Fensterübersicht, wähle den Bereich aus und füge ihn hier ein.',
        '<strong>Android:</strong> Drücke gleichzeitig Ein/Aus und Leiser, tippe dann auf „Dateien auswählen“ und wähle den Screenshot.',
        '<strong>iPhone:</strong> Drücke gleichzeitig Seitentaste und Lauter, tippe dann auf „Dateien auswählen“ und wähle ihn in Fotos.',
      ],
    },
    {
      h2: 'Text aus Screenshot kopieren – mit einem Klick',
      paragraphs: [
        'Den Text zu lesen ist nur die halbe Arbeit, ihn schnell herauszubekommen die andere Hälfte. Wenn du einen Screenshot in Text umwandelst, erscheint das Ergebnis in einem bearbeitbaren Feld neben dem Bild – du kannst ein Wort korrigieren oder eine Zeile entfernen, bevor du kopierst. Klick auf <strong>Kopieren</strong>, und der ganze Text liegt in der Zwischenablage.',
        'Oft brauchst du nur eine Sache aus einem vollen Screenshot: eine Telefonnummer, eine Bestellnummer, einen Link oder eine Zeile einer Fehlermeldung. Jede gefundene Zeile ist im Screenshot markiert, ein Klick kopiert nur diese. So geht das Kopieren schneller, als Text von Hand zu markieren und zu kürzen.',
        'Mehrere Screenshots? Füge sie nacheinander ein. Jeder wird einzeln gelesen, und du kannst <strong>Alles kopieren</strong> nutzen oder alle Ergebnisse als ZIP herunterladen.',
      ],
    },
    {
      h2: 'Was man typischerweise aus Screenshots holt',
      list: [
        'Fehlermeldungen, Stacktraces und Logausgaben, die Entwickler suchen oder teilen müssen.',
        'Code aus einem Videotutorial, einer Folie oder einem geposteten Bild.',
        'Chatnachrichten, E-Mails und Social-Media-Beiträge zum Zitieren oder Übersetzen.',
        'Folien aus Vorlesungen und Online-Meetings, um die Notizen als Text zu behalten.',
        'Text aus Apps und Websites, die das Kopieren sperren, etwa manche Menüs und bildbasierte Seiten.',
        'Bestellnummern, Sendungsnummern, Adressen und Telefonnummern von einer Bestätigungsseite.',
      ],
    },
    {
      h2: 'Warum Screenshots so genaue Ergebnisse liefern',
      paragraphs: [
        'Das Tool erkennt Buchstaben und Wörter per OCR (optische Zeichenerkennung). Screenshots sind für OCR die einfachsten Bilder: Der Text ist perfekt gerade, scharf und kontrastreich, ohne Schatten, Unschärfe oder gewölbte Seiten. Deshalb liefert die Umwandlung von Screenshot zu Text meist ein nahezu perfektes Ergebnis, selbst bei kleiner Schrift.',
        'Die Sprache wird für jeden Screenshot automatisch erkannt. Deutsch, Englisch, Chinesisch, Japanisch, Russisch und über 40 weitere Sprachen werden ohne Einstellung gelesen, und Rechts-nach-links-Text wie Arabisch wird richtig herum angezeigt. Wirkt ein Wort unsicher, wird es orange markiert.',
      ],
    },
    {
      h2: 'Screenshots in jedem Format in Text umwandeln',
      paragraphs: [
        'Screenshots werden je nach Gerät in unterschiedlichen Formaten gespeichert. Windows und Android speichern meist PNG, das iPhone speichert Screenshots als PNG und Fotos als HEIC, manche Apps nutzen JPG oder WEBP. Dieses Tool nimmt alle an – PNG, JPG, JPEG, WEBP, GIF, BMP, TIFF und HEIC –, du musst den Dateityp also vorher nicht ändern.',
        'Auch eine App oder Browsererweiterung brauchst du nicht. Der Konverter läuft in Chrome, Edge, Firefox und Safari unter Windows, macOS, Linux, ChromeOS, Android und iOS. Leg dir ein Lesezeichen an, und er ist immer nur ein Strg+V entfernt.',
      ],
    },
    {
      h2: 'Privat: Deine Screenshots verlassen dein Gerät nicht',
      paragraphs: [
        'Screenshots enthalten oft Privates: Chats, Bankdaten, Passwörter in einem Fehlerprotokoll, Kundendaten. Die meisten Online-OCR-Tools laden dein Bild auf ihren Server. Dieses nicht. Die OCR-Engine läuft in deinem Browser, Screenshot und Text bleiben also auf deinem Computer oder Handy. Nach dem ersten Besuch ist die Engine zwischengespeichert, und die nächste Umwandlung startet noch schneller.',
      ],
    },
    {
      h2: 'Tipps für die besten Ergebnisse',
      list: [
        'Nimm nur den Teil auf, den du brauchst. Weniger Drumherum heißt saubererer Text.',
        'Zoome vor dem Screenshot hinein, wenn der Text sehr klein ist.',
        'Vermeide Screenshots, die ein Messenger verkleinert oder stark komprimiert hat; nutze wenn möglich das Original.',
        'Heller Text auf unruhigem Hintergrund, etwa einem Foto oder Video, ist schwerer zu lesen. Halte das Video vorher an einer scharfen Stelle an.',
        'Prüfe Code, bevor du ihn in einen Editor einfügst. Einrückungen können vereinfacht werden.',
      ],
    },
    {
      h2: 'Du hast eher ein Foto oder ein Dokument?',
      paragraphs: [
        'Für Fotos von Papierdokumenten bereinigt der <a href="/">Bild-zu-Text-Konverter</a> dunkle oder blasse Fotos automatisch. Um Layout und Überschriften zu behalten, nutze <a href="/jpg-to-word">JPG in Word</a>. Zeigt dein Screenshot eine Tabelle, baut der <a href="/jpg-to-excel">JPG-in-Excel-Konverter</a> sie als Tabellenblatt nach, und <a href="/pdf-to-text">PDF zu Text</a> liest ganze PDF-Dateien.',
      ],
    },
  ],
  faq: [
    { q: 'Wie wandle ich einen Screenshot in Text um?', a: 'Mach einen Screenshot und drücke Strg+V (Cmd+V auf dem Mac) irgendwo auf dieser Seite oder leg die Bilddatei in das Feld. Der Konverter liest ihn in Sekunden und zeigt den Text an – bereit zum Kopieren, Bearbeiten oder Herunterladen.' },
    { q: 'Wie füge ich hier einen Screenshot ein?', a: 'Kopiere den Screenshot mit Win+Umschalt+S unter Windows oder Cmd+Ctrl+Umschalt+4 auf dem Mac in die Zwischenablage und drücke dann Strg+V bzw. Cmd+V auf dieser Seite. Das Lesen startet sofort, ohne Speichern.' },
    { q: 'Wie kopiere ich Text aus einem Screenshot?', a: 'Wandle den Screenshot hier in Text um und klicke auf Kopieren, um alles zu kopieren. Für nur eine Zeile klickst du sie im Screenshot an. Bei mehreren Screenshots kopiert „Alles kopieren“ den Text aller auf einmal.' },
    { q: 'Ist dieser Screenshot-zu-Text-Konverter kostenlos?', a: 'Ja. Er ist komplett kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Tageslimit. Du kannst beliebig viele Screenshots umwandeln.' },
    { q: 'Kann ich am Handy einen Screenshot in Text umwandeln?', a: 'Ja. Es läuft im Browser auf Android und iPhone. Mach den Screenshot, tippe auf „Dateien auswählen“ und wähle ihn aus der Galerie oder aus Fotos. Der Text erscheint in Sekunden.' },
    { q: 'Wird mein Screenshot auf einen Server hochgeladen?', a: 'Nein. Die Texterkennung läuft in deinem Browser, Screenshot und Text verlassen dein Gerät also nie.' },
    { q: 'Kann es Code aus einem Screenshot lesen?', a: 'Ja. Code, Fehlermeldungen und Logs werden gut gelesen, weil Bildschirmtext scharf ist. Einrückungen können vereinfacht werden – prüfe sie, bevor du den Code in einen Editor einfügst.' },
    { q: 'Welche Sprachen liest es aus Screenshots?', a: 'Über 40, darunter Deutsch, Englisch, Französisch, Spanisch, Chinesisch, Japanisch, Koreanisch und Russisch. Die Sprache wird automatisch erkannt.' },
    { q: 'Kann ich mehrere Screenshots auf einmal umwandeln?', a: 'Ja. Füge so viele Screenshots ein oder leg so viele ab, wie du willst. Jeder wird einzeln umgewandelt, und du kannst den ganzen Text kopieren oder alle Ergebnisse als ZIP herunterladen.' },
  ],
};

export default content;

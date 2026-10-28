import type { StaticContent } from '../types';
import type { StaticId } from '../../i18n/routes';
import { SITE } from '../../config/site';

export const pages: Record<StaticId, StaticContent> = {
  about: {
    title: `Über ${SITE.name}`,
    description: `${SITE.name} ist ein kostenloser, unbegrenzter Bild-zu-Text-Konverter, der komplett in deinem Browser läuft.`,
    h1: `Über ${SITE.name}`,
    sections: [
      {
        h2: 'Warum wir das gebaut haben',
        paragraphs: [
          'Text aus einem Bild zu holen sollte schnell, kostenlos und privat sein. Die meisten Online-OCR-Tools laden deine Dateien hoch, begrenzen die Zahl der Umwandlungen pro Tag und verlangen eine Anmeldung oder Bezahlung. Wir wollten ein Tool ohne all das.',
          `${SITE.name} liest Text aus Bildern, Screenshots und PDFs direkt in deinem Browser. Deine Dateien werden nie hochgeladen – es gibt also nichts zu begrenzen und nichts zu speichern.`,
        ],
      },
      {
        h2: 'Was du hier machen kannst',
        list: [
          '<a href="/">Bild zu Text</a> – Text aus Fotos und Screenshots kopieren.',
          '<a href="/jpg-to-word">JPG in Word</a> – Bilder in bearbeitbare Word-Dokumente umwandeln.',
          '<a href="/jpg-to-excel">JPG in Excel</a> – Tabellen aus Bildern als Tabellenblätter nachbauen.',
          '<a href="/image-to-pdf">Bild zu PDF</a> – mehrere Bilder zu einem PDF zusammenfügen.',
          '<a href="/text-to-pdf">Text zu PDF</a> – reinen Text in ein sauberes PDF verwandeln.',
          '<a href="/pdf-to-text">PDF zu Text</a> – Text aus digitalen und gescannten PDFs extrahieren.',
        ],
      },
      {
        h2: 'So funktioniert es',
        paragraphs: [
          'Die Tools nutzen Open-Source-Technik, darunter die OCR-Engine Tesseract, die für Webbrowser kompiliert wurde. Engine und Sprachdateien werden einmal geladen und zwischengespeichert; danach erledigt dein eigenes Gerät die ganze Arbeit.',
        ],
      },
    ],
  },
  contact: {
    title: `Kontakt – ${SITE.name}`,
    description: `Kontaktiere das ${SITE.name}-Team bei Feedback, Fehlern oder Kooperationsanfragen.`,
    h1: 'Kontakt',
    sections: [
      {
        h2: 'Wir freuen uns auf deine Nachricht',
        paragraphs: [
          `Einen Fehler gefunden, eine Idee für eine neue Funktion oder schlecht erkannten Text gesehen? Schreib uns an <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`,
          'Wenn du ein Erkennungsproblem meldest, beschreibe bitte das Bild, statt private Dokumente zu schicken. Wir lesen jede Nachricht und antworten in der Regel innerhalb weniger Tage.',
        ],
      },
    ],
  },
  'privacy-policy': {
    title: 'Datenschutzerklärung',
    description: `Wie ${SITE.name} mit deinen Daten umgeht: Dateien werden im Browser verarbeitet und nie hochgeladen.`,
    h1: 'Datenschutzerklärung',
    updated: '28. Oktober 2026',
    sections: [
      {
        h2: 'Kurz gesagt',
        paragraphs: [
          `${SITE.name} verarbeitet deine Bilder, PDFs und Texte <strong>in deinem Webbrowser</strong>. Deine Dateien und der darin gefundene Text werden weder auf unsere Server noch auf die von anderen hochgeladen.`,
        ],
      },
      {
        h2: 'Dateien, die du hinzufügst',
        paragraphs: [
          'Wenn du eine Datei hinzufügst, wird sie von Code gelesen, der auf deinem Gerät läuft. Texterkennung, Dokumenterstellung und Downloads passieren lokal. Wir erhalten, sehen oder speichern deine Dateien und ihren Inhalt nie.',
          'Wenn du die Seite schließt oder neu lädst, sind Dateien und Ergebnisse weg – es sei denn, du hast sie selbst gespeichert.',
        ],
      },
      {
        h2: 'Dateien, die dein Browser lädt',
        paragraphs: [
          'Zum Lesen von Text lädt dein Browser die OCR-Engine und die Sprachdaten beim ersten Bedarf vom öffentlichen Content-Delivery-Netzwerk jsDelivr (cdn.jsdelivr.net). Wie jede Website erhält dieses Netzwerk die üblichen Anfragedaten wie deine IP-Adresse und deinen Browsertyp. Deine Dateien erhält es nicht.',
        ],
      },
      {
        h2: 'Auf deinem Gerät gespeicherte Einstellungen',
        paragraphs: [
          'Wir speichern einige Einstellungen, etwa den Dunkelmodus, im lokalen Speicher deines Browsers, damit sie beim nächsten Besuch erhalten bleiben. Sie verlassen dein Gerät nie und du kannst sie in den Browsereinstellungen löschen.',
        ],
      },
      {
        h2: 'Hosting und Protokolle',
        paragraphs: [
          'Die Website wird bei Cloudflare gehostet. Cloudflare verarbeitet übliche Anfragedaten (etwa IP-Adressen), um Seiten auszuliefern und die Website vor Missbrauch zu schützen.',
        ],
      },
      {
        h2: 'Werbung und Statistik',
        paragraphs: [
          'Derzeit zeigt die Website keine Werbung und nutzt keine Analyse-Cookies. Falls wir künftig Werbung (etwa Google AdSense) oder Statistik einsetzen, aktualisieren wir zuerst diese Erklärung und holen, wo gesetzlich vorgeschrieben (DSGVO), deine Einwilligung ein.',
        ],
      },
      {
        h2: 'Kontakt',
        paragraphs: [`Fragen zum Datenschutz? Schreib an <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`],
      },
    ],
  },
  terms: {
    title: 'Nutzungsbedingungen',
    description: `Die Bedingungen, die für die Nutzung von ${SITE.name} gelten.`,
    h1: 'Nutzungsbedingungen',
    updated: '28. Oktober 2026',
    sections: [
      {
        h2: 'Nutzung der Tools',
        paragraphs: [
          `${SITE.name} ist für private und gewerbliche Zwecke kostenlos nutzbar. Du bist für die Dateien verantwortlich, die du verarbeitest, und dafür, dass du sie verwenden darfst.`,
        ],
      },
      {
        h2: 'Keine Garantie für Genauigkeit',
        paragraphs: [
          'Texterkennung ist nie perfekt. Prüfe die Ergebnisse immer, bevor du dich darauf verlässt – besonders bei rechtlichen, medizinischen oder finanziellen Dokumenten. Die Tools werden „wie besehen“ und ohne Gewährleistung bereitgestellt.',
        ],
      },
      {
        h2: 'Haftungsbeschränkung',
        paragraphs: [
          'Soweit gesetzlich zulässig, haften wir nicht für Verluste oder Schäden, die aus der Nutzung der Website oder ihrer Ergebnisse entstehen.',
        ],
      },
      {
        h2: 'Änderungen',
        paragraphs: ['Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Das Datum oben zeigt, wann sie zuletzt geändert wurden.'],
      },
    ],
  },
};

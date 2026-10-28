import type { StaticContent } from '../types';
import type { StaticId } from '../../i18n/routes';
import { SITE } from '../../config/site';

export const pages: Record<StaticId, StaticContent> = {
  about: {
    title: `Chi siamo – ${SITE.name}`,
    description: `${SITE.name} è un convertitore da immagine a testo gratuito e illimitato che funziona interamente nel tuo browser.`,
    h1: `Chi siamo`,
    sections: [
      {
        h2: 'Perché l’abbiamo creato',
        paragraphs: [
          'Estrarre il testo da un’immagine dovrebbe essere veloce, gratuito e privato. La maggior parte degli strumenti OCR online carica i tuoi file, limita le conversioni giornaliere e chiede di registrarti o pagare. Volevamo uno strumento senza niente di tutto questo.',
          `${SITE.name} legge il testo di immagini, screenshot e PDF direttamente nel tuo browser. I tuoi file non vengono mai caricati: non c’è niente da limitare e niente da conservare.`,
        ],
      },
      {
        h2: 'Cosa puoi fare qui',
        list: [
          '<a href="/">Immagine in testo</a> — copia il testo da foto e screenshot.',
          '<a href="/jpg-to-word">JPG in Word</a> — trasforma le immagini in documenti Word modificabili.',
          '<a href="/jpg-to-excel">JPG in Excel</a> — ricostruisci le tabelle delle immagini come fogli di calcolo.',
          '<a href="/image-to-pdf">Immagine in PDF</a> — unisci più immagini in un unico PDF.',
          '<a href="/text-to-pdf">Testo in PDF</a> — trasforma il testo semplice in un PDF pulito.',
          '<a href="/pdf-to-text">PDF in testo</a> — estrai il testo da PDF digitali e scansionati.',
        ],
      },
      {
        h2: 'Come funziona',
        paragraphs: [
          'Gli strumenti usano tecnologie open source, tra cui il motore OCR Tesseract compilato per funzionare nei browser. Il motore e i file della lingua vengono scaricati una volta e memorizzati nella cache; da lì in poi è il tuo dispositivo a fare tutto il lavoro.',
        ],
      },
    ],
  },
  contact: {
    title: `Contatti – ${SITE.name}`,
    description: `Contatta il team di ${SITE.name} per suggerimenti, bug o collaborazioni.`,
    h1: 'Contattaci',
    sections: [
      {
        h2: 'Ci farebbe piacere sentirti',
        paragraphs: [
          `Hai trovato un bug, hai un’idea per una nuova funzione o vuoi segnalare un testo riconosciuto male? Scrivici a <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`,
          'Se segnali un problema di riconoscimento, descrivi l’immagine invece di inviare documenti privati. Leggiamo ogni messaggio e di solito rispondiamo entro pochi giorni.',
        ],
      },
    ],
  },
  'privacy-policy': {
    title: 'Informativa sulla privacy',
    description: `Come ${SITE.name} tratta i tuoi dati: i file vengono elaborati nel browser e non vengono mai caricati.`,
    h1: 'Informativa sulla privacy',
    updated: '29 ottobre 2026',
    sections: [
      {
        h2: 'In breve',
        paragraphs: [
          `${SITE.name} elabora immagini, PDF e testi <strong>all’interno del tuo browser</strong>. I tuoi file e il testo che contengono non vengono caricati sui nostri server né su quelli di altri.`,
        ],
      },
      {
        h2: 'I file che aggiungi',
        paragraphs: [
          'Quando aggiungi un file, viene letto da codice che gira sul tuo dispositivo. Riconoscimento del testo, creazione dei documenti e download avvengono in locale. Non riceviamo, vediamo né conserviamo mai i tuoi file o il loro contenuto.',
          'Se chiudi o ricarichi la pagina, file e risultati spariscono, a meno che tu non li abbia salvati.',
        ],
      },
      {
        h2: 'I file scaricati dal browser',
        paragraphs: [
          'Per leggere il testo, il browser scarica il motore OCR e i dati della lingua dalla rete pubblica di distribuzione dei contenuti jsDelivr (cdn.jsdelivr.net) la prima volta che servono. Se crei un PDF da un testo in alfabeti come giapponese, coreano, cinese o cirillico, scarica anche i font corrispondenti dalla stessa rete. Come qualsiasi sito, questa rete riceve le informazioni standard della richiesta, come l’indirizzo IP e il tipo di browser. Non riceve i tuoi file né il tuo testo.',
        ],
      },
      {
        h2: 'Preferenze salvate sul dispositivo',
        paragraphs: [
          'Salviamo alcune impostazioni, come il tema scuro, nella memoria locale del browser per ricordarle la volta successiva. Non lasciano mai il tuo dispositivo e puoi cancellarle dalle impostazioni del browser.',
        ],
      },
      {
        h2: 'Hosting e log',
        paragraphs: [
          'Il sito è ospitato su Cloudflare. Cloudflare elabora i dati standard delle richieste (come gli indirizzi IP) per fornire le pagine e proteggere il sito dagli abusi.',
        ],
      },
      {
        h2: 'Pubblicità e statistiche',
        paragraphs: [
          'Al momento il sito non mostra pubblicità e non usa cookie statistici. Se in futuro aggiungeremo pubblicità (come Google AdSense) o statistiche, aggiorneremo prima questa informativa e, dove la legge lo richiede (GDPR), ti chiederemo il consenso.',
        ],
      },
      {
        h2: 'Contatti',
        paragraphs: [`Domande sulla privacy? Scrivi a <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`],
      },
    ],
  },
  terms: {
    title: 'Termini di utilizzo',
    description: `Le condizioni che si applicano quando usi ${SITE.name}.`,
    h1: 'Termini di utilizzo',
    updated: '28 ottobre 2026',
    sections: [
      {
        h2: 'Uso degli strumenti',
        paragraphs: [
          `${SITE.name} è gratuito per uso personale e commerciale. Sei responsabile dei file che elabori e di avere il diritto di usarli.`,
        ],
      },
      {
        h2: 'Nessuna garanzia di precisione',
        paragraphs: [
          'Il riconoscimento del testo non è mai perfetto. Controlla sempre i risultati prima di farvi affidamento, soprattutto per documenti legali, medici o finanziari. Gli strumenti sono forniti «così come sono», senza alcuna garanzia.',
        ],
      },
      {
        h2: 'Limitazione di responsabilità',
        paragraphs: [
          'Nei limiti consentiti dalla legge, non siamo responsabili di perdite o danni derivanti dall’uso del sito o dei suoi risultati.',
        ],
      },
      {
        h2: 'Modifiche',
        paragraphs: ['Possiamo aggiornare questi termini di tanto in tanto. La data in alto indica l’ultima modifica.'],
      },
    ],
  },
};

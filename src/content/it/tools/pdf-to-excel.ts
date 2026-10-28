import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'PDF in Excel – Convertire PDF in Excel gratis',
  description:
    'Converti PDF in Excel online gratis. Trasforma le tabelle di PDF digitali e scansionati in fogli Excel modificabili, uno per pagina. Senza registrazione.',
  h1: 'Convertitore da PDF a Excel',
  lead: 'Converti PDF in Excel online e gratis: tabelle da PDF digitali e scansionati, pronte da modificare.',
  navLabel: 'PDF in Excel',
  cardText: 'Trasforma le tabelle di un PDF in un foglio modificabile.',
  howTo: {
    title: 'Come convertire PDF in Excel',
    steps: [
      '<strong>Aggiungi il PDF.</strong> Trascinalo nel riquadro o clicca su «Scegli PDF». Tutte le pagine vengono lette in automatico.',
      '<strong>Controlla le tabelle.</strong> Ogni pagina appare come una tabella. Clicca su una cella per correggerla prima di scaricare.',
      '<strong>Scarica l’Excel.</strong> Ottieni un file .xlsx con un foglio per pagina, oppure un CSV.',
    ],
  },
  features: {
    title: 'Un convertitore da PDF a Excel che rispetta le tue tabelle',
    items: [
      { title: 'PDF digitali letti con esattezza', text: 'Se il PDF ha un livello di testo, i numeri vengono presi direttamente da lì: niente congetture dell’OCR.' },
      { title: 'Anche PDF scansionati', text: 'Le pagine che sono solo immagini vengono lette con l’OCR e poi divise in righe e colonne.' },
      { title: 'Numeri veri', text: 'Valori come 1,250.50 diventano numeri in Excel, quindi SOMMA e i grafici funzionano subito.' },
      { title: 'Modifica prima di esportare', text: 'Correggi qualsiasi cella direttamente nell’anteprima prima di scaricare.' },
      { title: 'Un foglio per pagina', text: 'Ogni pagina finisce in un foglio a sé, così anche i PDF lunghi restano facili da consultare.' },
      { title: 'Privato', text: 'Gli estratti conto restano sul tuo dispositivo. Il PDF non viene mai caricato.' },
    ],
  },
  sections: [
    {
      h2: 'Un convertitore da PDF a Excel gratuito che ricostruisce tabelle vere',
      paragraphs: [
        'Copiare una tabella da un PDF di solito va male. Incollata in un foglio di calcolo diventa una lunga colonna disordinata, con numeri attaccati alle etichette e righe spezzate. Questo <strong>convertitore da PDF a Excel</strong> lo fa nel modo giusto: guarda dove si trova ogni parola sulla pagina, trova le righe e gli spazi tra le colonne e ricostruisce la tabella cella per cella in un vero foglio Excel.',
        'Puoi <strong>convertire PDF in Excel gratis</strong>, senza registrazione, senza filigrana, senza limiti di pagine e senza limiti giornalieri. È un vero convertitore <strong>da PDF a Excel online gratis</strong>, senza prove né schermate di upgrade: converti una fattura di una pagina o un estratto conto di 100, tutte le volte che vuoi.',
      ],
    },
    {
      h2: 'Come funziona la conversione da PDF a Excel',
      paragraphs: [
        'Ogni pagina del PDF viene trattata separatamente. Prima il convertitore raccoglie tutte le parole della pagina con la loro posizione esatta. Le parole sulla stessa linea orizzontale formano una riga. Poi cerca spazi verticali che attraversano tutta la tabella: sono i confini tra le colonne. Ogni parola finisce nella sua cella e le colonne del file Excel si adattano al contenuto.',
        'Dato che le colonne vengono individuate dagli spazi e non dalle linee disegnate, le tabelle senza bordi si convertono bene quanto quelle con la griglia. Le pagine senza tabella vengono saltate, quindi la cartella di lavoro non si riempie di fogli vuoti.',
      ],
    },
    {
      h2: 'Funzionano PDF digitali e scansionati',
      paragraphs: [
        'La maggior parte dei PDF di banche, programmi di contabilità e siti web è <strong>digitale</strong>: contiene testo vero. In queste pagine i numeri vengono letti direttamente dal file, esattamente come sono scritti, quindi niente errori di riconoscimento e conversione quasi istantanea.',
        'I PDF <strong>scansionati</strong> sono diversi: ogni pagina è solo un’immagine. In queste pagine lo strumento applica prima l’OCR (riconoscimento ottico dei caratteri), con rilevamento automatico della lingua, e poi trova la tabella. Funzionano anche i file misti, e un avviso indica quando è stato usato l’OCR, così sai quali numeri controllare.',
      ],
    },
    {
      h2: 'Numeri veri, pronti per le formule',
      paragraphs: [
        'Quando converti PDF in Excel qui, i valori semplici come 42, 3.75 o 1,250.50 vengono salvati come numeri, non come testo. SOMMA, MEDIA, l’ordinamento, i filtri, le tabelle pivot e i grafici funzionano appena apri il file.',
        'I valori che non devono cambiare restano come sono: numeri di conto e codici che iniziano con zero e valori con simboli di valuta, lettere o unità. Per ora anche i numeri con virgola decimale (1.250,50) restano testo; in Excel puoi convertirli con Dati → Testo in colonne. Non si perde nulla.',
      ],
    },
    {
      h2: 'Controlla ogni pagina prima di scaricare',
      paragraphs: ['Ogni pagina del PDF appare come una tabella modificabile con il suo numero di pagina. Clicca su una cella per correggere un valore: le modifiche finiscono direttamente nel file. Quando è tutto a posto, scegli il formato:'],
      list: [
        '<strong>Excel (.xlsx):</strong> un foglio per pagina, intitolato col nome del file e il numero di pagina. Si apre in Microsoft Excel, Fogli Google, LibreOffice Calc e Numbers.',
        '<strong>CSV:</strong> tutte le pagine in un unico file, con una riga vuota tra le pagine, ideale da importare in altri programmi.',
        '<strong>Copia:</strong> incolla la tabella direttamente in un foglio aperto e ogni valore finisce nella colonna giusta.',
      ],
    },
    {
      h2: 'Converti più PDF in un solo file Excel',
      paragraphs: [
        'Un anno di estratti conto mensili o una cartella di fatture? Trascina tutti i PDF insieme. Ogni file viene convertito separatamente e <strong>Tutto in un file Excel</strong> mette ogni pagina di ogni PDF in un’unica cartella di lavoro, ognuna nel suo foglio.',
      ],
    },
    {
      h2: 'Perché non copiare e incollare e basta?',
      paragraphs: [
        'Un PDF non salva una tabella come righe e colonne, ma come pezzi di testo in posizioni sulla pagina. Per questo, selezionando una tabella e incollandola in Excel, tutto finisce in una colonna o l’ordine si mescola. Sistemarlo a mano — dividere celle, spostare valori, ribattere ciò che è venuto male — può richiedere più tempo che riscrivere la tabella da zero.',
        'Un convertitore dedicato legge quelle posizioni e rimette ogni valore nella sua cella, così il foglio è subito pronto da ordinare, filtrare e sommare. Se puoi convertire PDF in Excel gratis in pochi secondi, non ha senso passare un’ora a copiare e incollare.',
      ],
    },
    {
      h2: 'Cosa si converte di solito da PDF a Excel',
      list: [
        'Estratti conto e della carta di credito, per ordinare, sommare e classificare i movimenti.',
        'Fatture, ordini e ricevute, per controllare importi e pagamenti.',
        'Listini prezzi, cataloghi prodotti e report di magazzino.',
        'Report finanziari, bilanci e relazioni annuali.',
        'Orari, turni, fogli presenze e voti.',
        'Risultati di sondaggi e tabelle di dati da studi e rapporti pubblici.',
      ],
    },
    {
      h2: 'Converti PDF in Excel online, senza programmi',
      paragraphs: [
        'I software PDF desktop costano e alcuni strumenti online ti mandano il file via email o si fermano dopo due pagine. Questo convertitore da PDF a Excel online ha bisogno solo di un browser. Funziona in Chrome, Edge, Firefox e Safari su Windows, Mac, Linux, Chromebook, Android e iPhone, quindi puoi convertire PDF in Excel online dal computer dell’ufficio o direttamente dal telefono.',
        'Dopo la prima visita il motore resta in cache nel browser, quindi la prossima volta questo convertitore online parte ancora più velocemente.',
      ],
    },
    {
      h2: 'Privato: i tuoi estratti conto non lasciano il dispositivo',
      paragraphs: [
        'Estratti conto, buste paga e fatture contengono proprio il tipo di informazioni che non dovresti caricare su un server sconosciuto. Qui il PDF viene aperto, letto e trasformato in Excel interamente nel browser. Il file non lascia mai il tuo computer o telefono, nulla viene conservato online e non c’è nessun account che possa essere violato. Per questo lo strumento può essere gratuito e illimitato: non ci sono costi di server da limitare.',
      ],
    },
    {
      h2: 'Consigli per il miglior file Excel',
      list: [
        'Rimuovi la password da un PDF protetto prima di aprirlo qui.',
        'Per i PDF scansionati, una scansione pulita a 300 dpi o più dà numeri molto più precisi.',
        'Le tabelle con colonne chiare, come estratti conto e fatture, danno i risultati migliori. Celle unite e impaginazioni complesse possono richiedere qualche ritocco.',
        'Controlla sempre totali e cifre importanti delle pagine scansionate prima di usarli.',
      ],
    },
    {
      h2: 'Ti serve testo semplice o hai la foto di una tabella?',
      paragraphs: [
        'Per ottenere il testo semplice di un PDF invece delle tabelle, usa il <a href="/pdf-to-text">convertitore da PDF a testo</a>. Per foto e screenshot di tabelle, il <a href="/jpg-to-excel">convertitore da JPG a Excel</a> le ricostruisce come foglio di calcolo, e il <a href="/">convertitore da immagine a testo</a> copia il testo di qualsiasi immagine.',
      ],
    },
  ],
  faq: [
    { q: 'Come convertire PDF in Excel?', a: 'Trascina il PDF nel riquadro qui sopra o clicca su «Scegli PDF». Tutte le pagine vengono lette in automatico e mostrate come tabelle modificabili. Controlla le celle e scarica un file Excel (.xlsx) con un foglio per pagina, oppure un CSV.' },
    { q: 'Come posso convertire PDF in Excel gratis?', a: 'Usa questo convertitore da PDF a Excel gratuito. Nessuna registrazione, nessuna filigrana, nessun limite di pagine né giornaliero, e funziona con PDF digitali e scansionati.' },
    { q: 'Posso convertire un PDF scansionato in Excel?', a: 'Sì. Le pagine senza livello di testo vengono lette con l’OCR e poi divise in righe e colonne. Controlla bene i numeri nelle scansioni di bassa qualità.' },
    { q: 'Come converto un estratto conto PDF in Excel?', a: 'Apri qui il PDF dell’estratto conto. Il convertitore trova le righe e gli spazi tra le colonne e ricostruisce la tabella cella per cella. Controlla gli importi nell’anteprima e scarica il file Excel. Il PDF non lascia mai il tuo dispositivo.' },
    { q: 'I numeri saranno numeri veri in Excel?', a: 'I valori nel formato 1,250.50 diventano numeri, quindi SOMMA e i grafici funzionano subito. I valori con lettere, simboli di valuta, zeri iniziali o virgola decimale (1.250,50) restano testo per non perdere nulla.' },
    { q: 'Ogni pagina del PDF ha il suo foglio Excel?', a: 'Sì. Ogni pagina con una tabella finisce in un foglio a sé nella stessa cartella di lavoro, intitolato col nome del file e il numero di pagina.' },
    { q: 'Posso modificare la tabella prima di scaricare?', a: 'Sì. Clicca su una cella dell’anteprima per correggerla. Le modifiche finiscono nel file Excel o CSV.' },
    { q: 'Posso convertire più PDF in un unico Excel?', a: 'Sì. Trascina tutti i PDF insieme e clicca su «Tutto in un file Excel» per ottenere una cartella di lavoro con ogni pagina nel suo foglio.' },
    { q: 'Posso convertire PDF in Excel online dal telefono?', a: 'Sì. Questo convertitore da PDF a Excel online funziona nel browser su Android e iPhone. Scegli il PDF tra i tuoi file e scarica il foglio Excel, senza installare nulla.' },
    { q: 'Il PDF viene caricato su un server?', a: 'No. Il file viene aperto e convertito nel browser e non lascia mai il tuo dispositivo.' },
    { q: 'Supporta i PDF protetti da password?', a: 'Non ancora. Rimuovi prima la password e poi apri il file qui.' },
  ],
};

export default content;

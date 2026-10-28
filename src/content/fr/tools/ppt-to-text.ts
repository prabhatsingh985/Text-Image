import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'PPT en texte gratuit – PowerPoint en texte',
  description:
    'Convertissez un PPT en texte gratuitement. Extrayez le texte et les notes de chaque diapositive PowerPoint (PPTX, ODP) en quelques secondes. Sans envoi.',
  h1: 'Convertisseur PPT en texte',
  lead: 'Convertissez un PPT en texte en ligne et gratuitement : chaque diapositive et ses notes de l’orateur en texte brut.',
  navLabel: 'PPT en texte',
  cardText: 'Extrayez le texte et les notes de diapositives PPTX.',
  howTo: {
    title: 'Comment convertir un PPT en texte',
    steps: [
      '<strong>Ajoutez votre présentation.</strong> Déposez un ou plusieurs fichiers .pptx ou .odp dans le cadre.',
      '<strong>Récupérez chaque diapositive.</strong> Le texte sort diapositive par diapositive avec son numéro, et les notes de l’orateur sont ajoutées sous chacune automatiquement.',
      '<strong>Copiez ou téléchargez.</strong> Copiez le texte, enregistrez-le en TXT ou téléchargez plusieurs présentations dans un ZIP.',
    ],
  },
  features: {
    title: 'Un convertisseur PPT en texte qui garde l’ordre des diapositives',
    items: [
      { title: 'Ordre conservé', text: 'Le texte suit l’ordre réel de vos diapositives, même si elles ont été réorganisées.' },
      { title: 'Notes de l’orateur', text: 'Les notes du présentateur sont incluses sous chaque diapositive automatiquement.' },
      { title: 'Tableaux et puces', text: 'Les puces sont conservées et les lignes de tableau sont séparées par des tabulations.' },
      { title: 'Instantané', text: 'Pas d’OCR : le texte est lu directement dans le fichier en une seconde.' },
      { title: 'Par lot', text: 'Convertissez tout un dossier de présentations d’un coup et téléchargez un ZIP.' },
      { title: 'Privé', text: 'Les présentations sont lues dans votre navigateur et jamais envoyées.' },
    ],
  },
  sections: [
    {
      h2: 'Un convertisseur PPT en texte gratuit pour chaque diapositive',
      paragraphs: [
        'Récupérer les mots d’une présentation PowerPoint est étonnamment fastidieux. Vous cliquez dans chaque zone de texte, copiez, changez de fenêtre, collez et recommencez à chaque diapositive — puis encore une fois pour les notes de l’orateur. Ce <strong>convertisseur PPT en texte</strong> fait tout d’un coup : déposez votre présentation et obtenez le texte de toutes les diapositives, dans l’ordre, en texte brut propre.',
        'C’est entièrement gratuit, sans inscription, sans filigrane et sans limite de diapositives ni de fichiers. Comme c’est un <strong>convertisseur PPT en texte en ligne</strong>, rien à installer et vous n’avez même pas besoin de PowerPoint sur votre ordinateur. Ouvrez la page, ajoutez votre fichier et convertissez votre PPT en texte en une seconde.',
      ],
    },
    {
      h2: 'Pourquoi convertir un PPT en texte ?',
      paragraphs: ['Les diapositives sont idéales pour présenter, mais peu pratiques pour tout le reste. Le texte brut est facile à modifier, rechercher, partager et réutiliser. On convertit un PPT en texte pour :'],
      list: [
        'Transformer les diapositives d’un cours en fiches de révision à surligner.',
        'Réutiliser le contenu d’une présentation dans un rapport, un article, un support ou un e-mail.',
        'Coller le texte dans un traducteur, un correcteur ou un assistant IA pour le résumer.',
        'Extraire les notes de l’orateur comme script pour une conférence, un webinaire ou une vidéo.',
        'Compter les mots, relire ou vérifier l’orthographe de toute la présentation d’un coup.',
        'Retrouver un fait, un chiffre ou une citation dans d’anciennes présentations.',
      ],
    },
    {
      h2: 'Notes de l’orateur incluses automatiquement',
      paragraphs: [
        'Les notes sous vos diapositives contiennent souvent plus de détails que les diapositives elles-mêmes : l’explication complète, les points clés, le script. La plupart des outils les ignorent. Ce convertisseur lit les notes de chaque diapositive et les place juste sous son texte, précédées de « Notes: », pour que vous sachiez toujours à quelle diapositive elles appartiennent. Rien à activer : si votre présentation a des notes, vous les obtenez.',
      ],
    },
    {
      h2: 'Pourquoi ne pas copier le texte de PowerPoint à la main ?',
      paragraphs: [
        'PowerPoint place chaque titre, liste et légende dans une zone de texte séparée : il n’existe donc pas de « tout sélectionner » pour toute la présentation. Copier diapositive par diapositive est lent, on mélange facilement l’ordre et on oublie les notes si l’on ne passe pas en mode Pages de commentaires. Le mode Plan aide un peu, mais il ignore les zones de texte qui ne sont pas des espaces réservés et tous les tableaux.',
        'Un outil capable de convertir un PPT en texte lit chaque zone de texte, tableau et note en une seule passe, conserve l’ordre et numérote chaque diapositive : une présentation de 60 diapositives devient un document bien rangé en une seconde.',
      ],
    },
    {
      h2: 'Ce que vous obtenez pour chaque diapositive',
      list: [
        '<strong>Repères de diapositive :</strong> chaque diapositive commence par « — Diapositive 1 — », « — Diapositive 2 — », etc., dans l’ordre de votre présentation.',
        '<strong>Titres et zones de texte :</strong> tout le texte de la diapositive, forme par forme, y compris les formes groupées.',
        '<strong>Puces :</strong> les éléments à puces ou numérotés commencent par « • », pour des listes lisibles.',
        '<strong>Tableaux :</strong> chaque ligne devient une ligne de texte aux cellules séparées par des tabulations, prête à coller dans un tableur.',
        '<strong>Notes de l’orateur :</strong> ajoutées sous chaque diapositive quand la présentation en contient.',
        '<strong>Non inclus :</strong> numéros de diapositive, dates et pieds de page, ainsi que le texte contenu dans les images, graphiques et SmartArt.',
      ],
    },
    {
      h2: 'Comment fonctionne le convertisseur PPT en texte',
      paragraphs: [
        'Un fichier .pptx est une archive zip qui stocke chaque diapositive en XML structuré. Le convertisseur l’ouvre dans votre navigateur, suit la liste de diapositives de la présentation pour garantir le bon ordre et lit le texte directement dans chaque diapositive et page de notes. Pas d’OCR ni de devinette : chaque mot sort exactement comme il a été tapé, et même une présentation de 150 diapositives prend environ une seconde.',
        'Le texte apparaît dans un cadre modifiable avec un compteur de mots et de caractères. Corrigez ce que vous voulez, puis copiez-le ou enregistrez-le en TXT.',
      ],
    },
    {
      h2: 'PPTX, ODP et autres formats de présentation',
      paragraphs: [
        'Vous pouvez convertir des fichiers <strong>PPTX</strong>, <strong>PPTM</strong>, <strong>PPSX</strong> et <strong>POTX</strong> de Microsoft PowerPoint, ainsi que des fichiers <strong>ODP</strong> et <strong>OTP</strong> de LibreOffice Impress et OpenOffice.',
        'Vous utilisez Google Slides ? Choisissez Fichier → Télécharger → Microsoft PowerPoint (.pptx) et déposez ce fichier ici. Depuis Keynote d’Apple, utilisez Fichier → Exporter vers → PowerPoint. Dans tous les cas, vous obtenez le même résultat propre.',
      ],
    },
    {
      h2: 'Anciens fichiers .ppt',
      paragraphs: [
        'L’ancien format binaire .ppt (PowerPoint 97–2003) n’est pas pris en charge. Ouvrez le fichier dans PowerPoint, Google Slides ou LibreOffice Impress, enregistrez-le en .pptx, puis convertissez-le ici.',
      ],
    },
    {
      h2: 'Convertissez plusieurs présentations à la fois',
      paragraphs: [
        'Tout un semestre de cours ou un dossier de présentations commerciales ? Déposez-les toutes d’un coup. Chaque fichier est converti séparément avec son nombre de diapositives, et vous pouvez utiliser <strong>Tout copier</strong> ou télécharger tous les TXT ensemble dans un ZIP.',
      ],
    },
    {
      h2: 'Convertissez un PPT en texte en ligne sur tout appareil',
      paragraphs: [
        'Ce convertisseur PPT en texte en ligne fonctionne dans Chrome, Edge, Firefox et Safari sur Windows, Mac, Linux, Chromebook, Android et iPhone. Vous avez reçu une présentation par e-mail ou WhatsApp sur votre téléphone ? Enregistrez-la, ouvrez cette page, touchez le cadre et choisissez le fichier : le texte des diapositives est prêt à copier aussitôt, sans l’application PowerPoint.',
      ],
    },
    {
      h2: 'Fonctionne avec toutes les langues',
      paragraphs: [
        'Comme le texte est lu directement dans le fichier, toutes les langues sortent correctement : français, anglais, arabe, chinois, japonais, russe et tous les autres alphabets. Les TXT sont enregistrés en UTF-8 : même le Bloc-notes de Windows affiche correctement les accents.',
      ],
    },
    {
      h2: 'Privé : vos diapositives restent sur votre appareil',
      paragraphs: [
        'Les présentations contiennent souvent des projets confidentiels, des noms de clients, des chiffres de vente ou des sujets d’examen. La plupart des convertisseurs en ligne envoient votre fichier sur un serveur. Pas celui-ci : la présentation est ouverte et lue dans votre navigateur et ne quitte jamais votre ordinateur ou votre téléphone. Rien n’est stocké en ligne, et c’est pourquoi l’outil peut rester gratuit et illimité.',
      ],
    },
    {
      h2: 'Conseils pour de meilleurs résultats',
      list: [
        'Si le texte d’une diapositive fait partie d’une image, faites une capture de la diapositive et utilisez capture d’écran en texte.',
        'Les diapositives masquées sont lues aussi ; supprimez-les d’abord si vous ne voulez pas leur texte.',
        'Besoin des diapositives en PDF d’abord ? Exportez-les depuis PowerPoint et utilisez PDF en texte.',
      ],
    },
    {
      h2: 'Texte dans les images des diapositives et autres fichiers',
      paragraphs: [
        'Le texte qui fait partie d’une image sur une diapositive ne peut pas être extrait ainsi. Faites une capture de la diapositive et utilisez <a href="/screenshot-to-text">capture d’écran en texte</a>. Pour les documents, le <a href="/word-to-text">convertisseur Word en texte</a> fonctionne de la même façon, et le <a href="/pdf-to-text">convertisseur PDF en texte</a> lit les fichiers PDF, même numérisés.',
      ],
    },
  ],
  faq: [
    { q: 'Comment convertir un PPT en texte ?', a: 'Déposez un ou plusieurs fichiers .pptx ou .odp dans le cadre ci-dessus. Le texte de chaque diapositive sort dans l’ordre, avec les notes de l’orateur sous chacune. Copiez-le, enregistrez-le en TXT ou téléchargez plusieurs présentations dans un ZIP.' },
    { q: 'Ce convertisseur PPT en texte est-il gratuit ?', a: 'Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite de diapositives ni de fichiers.' },
    { q: 'Quels formats PowerPoint sont pris en charge ?', a: 'PPTX, PPTM, PPSX et POTX de PowerPoint, ainsi que ODP et OTP de LibreOffice Impress. Les anciens fichiers .ppt doivent d’abord être enregistrés en .pptx.' },
    { q: 'Puis-je récupérer les notes de l’orateur d’un PowerPoint ?', a: 'Oui. Si la présentation contient des notes, elles apparaissent sous le texte de chaque diapositive automatiquement, précédées de « Notes: ».' },
    { q: 'L’ordre des diapositives est-il conservé ?', a: 'Oui. Le texte suit l’ordre réel de vos diapositives, avec un numéro pour chacune, même si elles ont été réorganisées.' },
    { q: 'Puis-je convertir un ancien fichier .ppt en texte ?', a: 'Pas directement. Ouvrez le fichier .ppt dans PowerPoint, Google Slides ou LibreOffice Impress, enregistrez-le en .pptx, puis convertissez-le ici.' },
    { q: 'Peut-il extraire le texte des images, graphiques ou SmartArt ?', a: 'Non. Seul le vrai texte des zones de texte, titres, tableaux et notes est extrait. Pour le texte dans une image, faites une capture de la diapositive et utilisez capture d’écran en texte.' },
    { q: 'Fonctionne-t-il avec Google Slides ?', a: 'Oui. Dans Google Slides, choisissez Fichier → Télécharger → Microsoft PowerPoint (.pptx), puis ouvrez ce fichier ici.' },
    { q: 'Puis-je convertir un PPT en texte en ligne sur mon téléphone ?', a: 'Oui. Ce convertisseur PPT en texte en ligne fonctionne dans le navigateur sur Android et iPhone. Enregistrez la présentation sur votre téléphone, ouvrez cette page et choisissez le fichier.' },
    { q: 'Puis-je convertir plusieurs présentations à la fois ?', a: 'Oui. Déposez autant de fichiers que vous voulez et téléchargez tous les TXT ensemble dans un ZIP.' },
    { q: 'Ma présentation est-elle envoyée ?', a: 'Non. Tout est lu dans votre navigateur et le fichier ne quitte jamais votre appareil.' },
  ],
};

export default content;

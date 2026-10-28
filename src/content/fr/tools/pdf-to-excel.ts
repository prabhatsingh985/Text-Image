import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'PDF en Excel gratuit – Convertir un PDF en Excel',
  description:
    'Convertissez un PDF en Excel en ligne gratuitement. Transformez les tableaux de PDF natifs et numérisés en feuilles Excel modifiables, une par page. Sans envoi.',
  h1: 'Convertisseur PDF en Excel',
  lead: 'Convertissez un PDF en Excel en ligne et gratuitement : les tableaux de PDF natifs et numérisés, prêts à modifier.',
  navLabel: 'PDF en Excel',
  cardText: 'Transformez les tableaux d’un PDF en feuille modifiable.',
  howTo: {
    title: 'Comment convertir un PDF en Excel',
    steps: [
      '<strong>Ajoutez votre PDF.</strong> Déposez-le dans le cadre ou cliquez sur « Choisir un PDF ». Toutes les pages sont lues automatiquement.',
      '<strong>Vérifiez les tableaux.</strong> Chaque page apparaît sous forme de tableau. Cliquez sur une cellule pour la corriger avant de télécharger.',
      '<strong>Téléchargez Excel.</strong> Obtenez un fichier .xlsx avec une feuille par page, ou un CSV.',
    ],
  },
  features: {
    title: 'Un convertisseur PDF en Excel qui respecte vos tableaux',
    items: [
      { title: 'PDF natifs lus à l’exact', text: 'Si le PDF a une couche de texte, les chiffres en sont tirés directement — sans approximation d’OCR.' },
      { title: 'PDF numérisés aussi', text: 'Les pages qui ne sont que des images sont lues par OCR puis découpées en lignes et colonnes.' },
      { title: 'De vrais nombres', text: 'Des valeurs comme 1,250.50 deviennent des nombres dans Excel : SOMME et les graphiques fonctionnent aussitôt.' },
      { title: 'Modifiez avant d’exporter', text: 'Corrigez n’importe quelle cellule dans l’aperçu avant de télécharger.' },
      { title: 'Une feuille par page', text: 'Chaque page a sa propre feuille : les longs PDF restent faciles à parcourir.' },
      { title: 'Privé', text: 'Vos relevés bancaires restent sur votre appareil. Le PDF n’est jamais envoyé.' },
    ],
  },
  sections: [
    {
      h2: 'Un convertisseur PDF en Excel gratuit qui reconstruit de vrais tableaux',
      paragraphs: [
        'Copier un tableau depuis un PDF se passe rarement bien. Collé dans un tableur, il donne une longue colonne en vrac, des chiffres collés aux libellés et des lignes coupées. Ce <strong>convertisseur PDF en Excel</strong> fait les choses correctement : il repère la position de chaque mot sur la page, trouve les lignes et les espaces entre colonnes, puis reconstruit le tableau cellule par cellule dans une vraie feuille Excel.',
        'Vous pouvez <strong>convertir un PDF en Excel gratuitement</strong>, sans inscription, sans filigrane, sans plafond de pages et sans limite quotidienne. C’est un vrai outil <strong>PDF en Excel en ligne gratuit</strong>, sans essai ni écran de mise à niveau : convertissez une facture d’une page ou un relevé de 100 pages, aussi souvent que nécessaire.',
      ],
    },
    {
      h2: 'Comment se déroule la conversion de PDF en Excel',
      paragraphs: [
        'Chaque page du PDF est traitée séparément. D’abord, le convertisseur récupère tous les mots de la page avec leur position exacte. Les mots qui partagent la même ligne horizontale forment une ligne. Il cherche ensuite des espaces verticaux qui traversent tout le tableau : ce sont les séparations entre colonnes. Chaque mot est placé dans sa cellule et les colonnes du fichier Excel s’ajustent à leur contenu.',
        'Comme les colonnes sont repérées grâce aux espaces et non aux traits dessinés, les tableaux sans bordures se convertissent aussi bien que les tableaux quadrillés. Les pages sans tableau sont ignorées : votre classeur ne se remplit pas de feuilles vides.',
      ],
    },
    {
      h2: 'PDF natifs et numérisés : les deux fonctionnent',
      paragraphs: [
        'La plupart des PDF de banques, de logiciels comptables et de sites web sont <strong>natifs</strong> : ils contiennent du vrai texte. Sur ces pages, les chiffres sont lus directement dans le fichier, exactement comme ils sont écrits : aucune erreur de reconnaissance et une conversion quasi instantanée.',
        'Les PDF <strong>numérisés</strong> sont différents : chaque page n’est qu’une image. Sur ces pages, l’outil applique d’abord l’OCR (reconnaissance optique de caractères), avec détection automatique de la langue, puis trouve le tableau. Les fichiers mixtes fonctionnent aussi, et une note signale l’utilisation de l’OCR pour que vous sachiez quels chiffres vérifier.',
      ],
    },
    {
      h2: 'De vrais nombres, prêts pour les formules',
      paragraphs: [
        'Quand vous convertissez un PDF en Excel ici, les valeurs simples comme 42, 3.75 ou 1,250.50 sont enregistrées comme des nombres, pas comme du texte. SOMME, MOYENNE, le tri, les filtres, les tableaux croisés dynamiques et les graphiques fonctionnent dès l’ouverture du fichier.',
        'Les valeurs qui ne doivent pas changer restent telles quelles : numéros de compte et identifiants commençant par zéro, valeurs avec symbole monétaire, lettres ou unités. Pour l’instant, les nombres à virgule décimale (1 250,50) restent aussi du texte ; dans Excel, vous pouvez les convertir avec Données → Convertir. Rien n’est perdu.',
      ],
    },
    {
      h2: 'Vérifiez chaque page avant de télécharger',
      paragraphs: ['Chaque page du PDF apparaît sous forme de tableau modifiable, avec son numéro de page. Cliquez sur une cellule pour corriger une valeur : vos modifications passent directement dans le fichier. Quand tout est bon, choisissez le format :'],
      list: [
        '<strong>Excel (.xlsx) :</strong> une feuille par page, nommée d’après votre fichier et le numéro de page. S’ouvre dans Microsoft Excel, Google Sheets, LibreOffice Calc et Numbers.',
        '<strong>CSV :</strong> toutes les pages dans un seul fichier, séparées par une ligne vide — idéal pour l’import dans d’autres logiciels.',
        '<strong>Copier :</strong> collez le tableau directement dans une feuille ouverte, chaque valeur tombe dans la bonne colonne.',
      ],
    },
    {
      h2: 'Convertissez plusieurs PDF en un seul fichier Excel',
      paragraphs: [
        'Une année de relevés mensuels ou un dossier de factures ? Déposez tous les PDF d’un coup. Chaque fichier est converti séparément et <strong>Tout dans un fichier Excel</strong> réunit chaque page de chaque PDF dans un seul classeur, chacune sur sa feuille.',
      ],
    },
    {
      h2: 'Pourquoi ne pas simplement copier-coller ?',
      paragraphs: [
        'Un PDF ne stocke pas un tableau sous forme de lignes et de colonnes, mais des morceaux de texte placés à des positions sur la page. C’est pourquoi sélectionner un tableau et le coller dans Excel met tout dans une colonne ou mélange l’ordre. Réparer à la main — séparer les cellules, déplacer les valeurs, retaper ce qui a mal tourné — peut prendre plus de temps que de saisir le tableau depuis zéro.',
        'Un convertisseur dédié lit ces positions et remet chaque valeur dans sa cellule : la feuille est prête à trier, filtrer et additionner immédiatement. Quand on peut convertir un PDF en Excel gratuitement en quelques secondes, inutile de passer une heure à copier-coller.',
      ],
    },
    {
      h2: 'Ce que l’on convertit de PDF en Excel',
      list: [
        'Relevés bancaires et de carte, pour trier, additionner et catégoriser les opérations.',
        'Factures, bons de commande et notes, pour vérifier les montants et suivre les paiements.',
        'Listes de prix, catalogues produits et états de stock.',
        'Rapports financiers, bilans et rapports annuels.',
        'Emplois du temps, plannings, feuilles de présence et notes.',
        'Résultats d’enquêtes et tableaux de données d’études et de rapports publics.',
      ],
    },
    {
      h2: 'Convertissez un PDF en Excel en ligne, sans logiciel',
      paragraphs: [
        'Les logiciels PDF de bureau sont chers et certains outils en ligne vous envoient le fichier par e-mail ou s’arrêtent après deux pages. Ce convertisseur PDF en Excel en ligne n’a besoin que d’un navigateur. Il fonctionne dans Chrome, Edge, Firefox et Safari sur Windows, Mac, Linux, Chromebook, Android et iPhone : vous pouvez convertir un PDF en Excel en ligne depuis l’ordinateur du bureau comme depuis votre téléphone.',
        'Après la première visite, le moteur est mis en cache dans votre navigateur : la prochaine fois, ce convertisseur PDF en Excel en ligne démarre encore plus vite.',
      ],
    },
    {
      h2: 'Privé : vos relevés ne quittent pas votre appareil',
      paragraphs: [
        'Relevés bancaires, fiches de paie et factures contiennent exactement le genre d’informations qu’on ne devrait pas envoyer à un serveur inconnu. Ici, le PDF est ouvert, lu et transformé en Excel entièrement dans votre navigateur. Le fichier ne quitte jamais votre ordinateur ou votre téléphone, rien n’est stocké en ligne et il n’y a aucun compte à pirater. C’est aussi pourquoi l’outil peut être gratuit et illimité : il n’y a aucun coût serveur à limiter.',
      ],
    },
    {
      h2: 'Conseils pour le meilleur fichier Excel',
      list: [
        'Retirez le mot de passe d’un PDF protégé avant de l’ouvrir ici.',
        'Pour les PDF numérisés, un scan propre à 300 ppp ou plus donne des chiffres bien plus précis.',
        'Les tableaux aux colonnes nettes, comme les relevés et les factures, donnent les meilleurs résultats. Les cellules fusionnées et les mises en page complexes peuvent demander quelques retouches.',
        'Vérifiez toujours les totaux et les chiffres clés des pages numérisées avant de les utiliser.',
      ],
    },
    {
      h2: 'Besoin de texte brut ou vous avez la photo d’un tableau ?',
      paragraphs: [
        'Pour obtenir le texte brut d’un PDF plutôt que des tableaux, utilisez le <a href="/pdf-to-text">convertisseur PDF en texte</a>. Pour les photos et captures de tableaux, le <a href="/jpg-to-excel">convertisseur JPG en Excel</a> les reconstruit en feuille de calcul, et le <a href="/">convertisseur d’image en texte</a> copie le texte de n’importe quelle image.',
      ],
    },
  ],
  faq: [
    { q: 'Comment convertir un PDF en Excel ?', a: 'Déposez votre PDF dans le cadre ci-dessus ou cliquez sur « Choisir un PDF ». Toutes les pages sont lues automatiquement et affichées sous forme de tableaux modifiables. Vérifiez les cellules, puis téléchargez un fichier Excel (.xlsx) avec une feuille par page, ou un CSV.' },
    { q: 'Comment convertir un PDF en Excel gratuitement ?', a: 'Utilisez ce convertisseur PDF en Excel gratuit. Sans inscription, sans filigrane, sans limite de pages et sans limite quotidienne, il fonctionne avec les PDF natifs et numérisés.' },
    { q: 'Puis-je convertir un PDF numérisé en Excel ?', a: 'Oui. Les pages sans couche de texte sont lues par OCR puis découpées en lignes et colonnes. Vérifiez bien les chiffres sur les scans de mauvaise qualité.' },
    { q: 'Comment convertir un relevé bancaire PDF en Excel ?', a: 'Ouvrez ici le PDF du relevé. Le convertisseur trouve les lignes et les espaces entre colonnes et reconstruit le tableau cellule par cellule. Vérifiez les montants dans l’aperçu, puis téléchargez le fichier Excel. Le PDF ne quitte jamais votre appareil.' },
    { q: 'Les nombres seront-ils de vrais nombres dans Excel ?', a: 'Les valeurs au format 1,250.50 deviennent des nombres : SOMME et les graphiques fonctionnent aussitôt. Les valeurs avec lettres, symbole monétaire, zéros en tête ou virgule décimale (1 250,50) restent du texte pour ne rien perdre.' },
    { q: 'Chaque page du PDF a-t-elle sa propre feuille Excel ?', a: 'Oui. Chaque page contenant un tableau a sa propre feuille dans le même classeur, nommée d’après votre fichier et le numéro de page.' },
    { q: 'Puis-je modifier le tableau avant de télécharger ?', a: 'Oui. Cliquez sur une cellule de l’aperçu pour la corriger. Vos modifications sont reprises dans le fichier Excel ou CSV.' },
    { q: 'Puis-je convertir plusieurs PDF en un seul fichier Excel ?', a: 'Oui. Déposez tous les PDF d’un coup, puis cliquez sur « Tout dans un fichier Excel » pour obtenir un classeur avec chaque page sur sa propre feuille.' },
    { q: 'Puis-je convertir un PDF en Excel en ligne sur mon téléphone ?', a: 'Oui. Ce convertisseur PDF en Excel en ligne fonctionne dans le navigateur sur Android et iPhone. Choisissez le PDF dans vos fichiers et téléchargez la feuille Excel, sans rien installer.' },
    { q: 'Le PDF est-il envoyé sur un serveur ?', a: 'Non. Le fichier est ouvert et converti dans votre navigateur et ne quitte jamais votre appareil.' },
    { q: 'Les PDF protégés par mot de passe sont-ils pris en charge ?', a: 'Pas encore. Retirez d’abord le mot de passe, puis ouvrez le fichier ici.' },
  ],
};

export default content;

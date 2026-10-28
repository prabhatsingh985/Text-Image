import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'Word en texte gratuit – Convertir un Word en texte',
  description:
    'Convertissez un Word en texte gratuitement. Transformez vos fichiers DOCX, ODT et RTF en texte brut propre (TXT) en quelques secondes. Illimité, sans envoi.',
  h1: 'Convertisseur Word en texte',
  lead: 'Convertissez un Word en texte en ligne et gratuitement : du texte brut propre à partir de fichiers DOCX, ODT et RTF.',
  navLabel: 'Word en texte',
  cardText: 'Récupérez le texte brut de fichiers DOCX, ODT et RTF.',
  howTo: {
    title: 'Comment convertir un Word en texte',
    steps: [
      '<strong>Ajoutez vos documents.</strong> Déposez un ou plusieurs fichiers .docx, .odt ou .rtf dans le cadre.',
      '<strong>Vérifiez le texte.</strong> Paragraphes, listes et tableaux restent dans l’ordre. Modifiez ce que vous voulez dans le cadre.',
      '<strong>Copiez ou téléchargez.</strong> Copiez le texte, enregistrez un TXT ou téléchargez tous les fichiers dans un ZIP.',
    ],
  },
  features: {
    title: 'Un convertisseur Word en texte sans mise en forme superflue',
    items: [
      { title: 'Instantané', text: 'Pas d’OCR : le texte est lu directement dans le fichier, même un long document prend une seconde.' },
      { title: 'Garde la structure', text: 'Les paragraphes restent des paragraphes, les listes ont des puces et les lignes de tableau sont séparées par des tabulations.' },
      { title: 'DOCX, ODT et RTF', text: 'Fonctionne avec Microsoft Word, les exports Google Docs, LibreOffice et WordPad.' },
      { title: 'Conversion par lot', text: 'Déposez des dizaines de documents d’un coup et téléchargez tous les TXT dans un ZIP.' },
      { title: 'Écarte le superflu', text: 'Les modifications suivies supprimées, les codes de champ et le balisage caché sont ignorés.' },
      { title: 'Privé', text: 'Les documents sont ouverts dans votre navigateur. Rien n’est envoyé ni stocké.' },
    ],
  },
  sections: [
    {
      h2: 'Un convertisseur Word en texte gratuit pour un texte brut propre',
      paragraphs: [
        'Copier le texte d’un document Word semble simple jusqu’à ce que vous le colliez ailleurs. Polices, couleurs, espacements bizarres, styles cachés et mise en forme automatique suivent et cassent la mise en page de votre e-mail, de votre site ou de votre code. Ce <strong>convertisseur Word en texte</strong> retire tout cela et vous donne un texte brut propre, qui se colle parfaitement partout.',
        'C’est un outil <strong>Word en texte en ligne gratuit</strong> et sans limites : sans inscription, sans filigrane, sans plafond de fichiers et sans quota quotidien. Déposez une page ou cent documents. Rien à installer, pas besoin d’ouvrir Microsoft Word : vous pouvez convertir un Word en texte depuis n’importe quel navigateur en une seconde.',
      ],
    },
    {
      h2: 'Pourquoi convertir un Word en texte ?',
      paragraphs: ['Le texte brut est le format universel. Tous les logiciels l’ouvrent, il ne transporte jamais de mise en forme cachée et reste lisible pendant des décennies. On convertit un Word en texte pour :'],
      list: [
        'Coller du contenu dans un site, un blog ou un CMS sans casser son style.',
        'Envoyer des documents à des assistants IA, des traducteurs, des correcteurs et d’autres outils en ligne.',
        'Copier du texte dans du code, des scripts, des fichiers de configuration et des bases de données.',
        'Compter exactement les mots et les caractères pour les devoirs, les articles et les traductions.',
        'Archiver des documents dans un format qui s’ouvrira sur tous les appareils, aujourd’hui et demain.',
        'Envoyer un texte propre par e-mail ou messagerie, sans pièce jointe.',
      ],
    },
    {
      h2: 'Pourquoi ne pas simplement copier-coller depuis Word ?',
      paragraphs: [
        'Copier depuis Word emporte la mise en forme. Beaucoup d’éditeurs, de créateurs de sites et d’applications mail acceptent ce style caché, et votre texte se retrouve soudain avec une autre police, des espaces étranges ou des puces cassées. Même « coller en texte brut » peut laisser des guillemets typographiques, des retours à la ligne bizarres et des caractères parasites, et ne fonctionne qu’un document à la fois.',
        'Quand vous convertissez un Word en texte avec un outil dédié, vous obtenez tout le document en texte propre en une seule étape, avec des tableaux transformés en lignes nettes séparées par des tabulations et des listes bien marquées. Pour de nombreux fichiers, c’est bien plus rapide que d’ouvrir chaque document et de copier à la main.',
      ],
    },
    {
      h2: 'Ce qui est conservé et ce qui est retiré',
      paragraphs: ['L’objectif est un texte utilisable tout de suite : le convertisseur garde la structure utile et retire tout le reste :'],
      list: [
        '<strong>Conservé :</strong> tous les paragraphes dans l’ordre, les retours à la ligne, les tabulations et les lignes vides (plusieurs à la suite n’en font qu’une).',
        '<strong>Listes :</strong> les éléments à puces ou numérotés commencent par « • », pour des listes toujours lisibles.',
        '<strong>Tableaux :</strong> chaque ligne devient une ligne de texte aux cellules séparées par des tabulations — collez-la dans Excel ou Google Sheets et les colonnes s’alignent.',
        '<strong>Retiré :</strong> polices, couleurs, gras, italique, images, modifications suivies supprimées, codes de champ et balisage caché.',
        '<strong>Non inclus :</strong> en-têtes, pieds de page, notes de bas de page et commentaires. Seul le texte principal est extrait.',
      ],
    },
    {
      h2: 'Comment le convertisseur lit votre document',
      paragraphs: [
        'Un fichier .docx est en réalité une petite archive zip qui contient le texte sous forme de XML structuré. Cet outil ouvre l’archive dans votre navigateur et lit le texte directement — pas d’OCR, pas de devinette, pas d’erreur de reconnaissance. Chaque caractère sort exactement comme vous l’avez tapé, d’où un résultat instantané même pour un document de 200 pages.',
        'Le texte s’affiche dans un cadre modifiable avec un compteur de mots et de caractères en direct. Corrigez ce que vous voulez avant de le copier ou de l’enregistrer en TXT.',
      ],
    },
    {
      h2: 'DOCX en TXT et autres formats',
      paragraphs: [
        'Le convertisseur gère les formats de document réellement utilisés : <strong>DOCX</strong>, <strong>DOCM</strong> et <strong>DOTX</strong> de Microsoft Word, <strong>ODT</strong> et <strong>OTT</strong> de LibreOffice et OpenOffice, et les fichiers <strong>RTF</strong> de WordPad et d’autres éditeurs.',
        'Vous travaillez dans Google Docs ? Choisissez Fichier → Télécharger → Microsoft Word (.docx) et déposez ce fichier ici. Depuis Pages d’Apple, utilisez Fichier → Exporter vers → Word. Dans les deux cas, vous obtenez le même texte brut propre.',
      ],
    },
    {
      h2: 'Anciens fichiers .doc',
      paragraphs: [
        'L’ancien format binaire .doc (Word 97–2003) n’est pas pris en charge. Ouvrez le fichier dans Word, Google Docs ou LibreOffice, enregistrez-le en .docx, puis convertissez-le ici. Cela prend quelques secondes et donne un bien meilleur résultat.',
      ],
    },
    {
      h2: 'Convertissez de nombreux fichiers Word en texte à la fois',
      paragraphs: [
        'Un dossier plein de documents ? Déposez des dizaines de fichiers d’un coup dans le cadre. Chacun est converti séparément et affiché avec son propre texte, pour les vérifier un par un. À la fin, utilisez <strong>Tout copier</strong> pour tout récupérer ou téléchargez tous les TXT ensemble dans un ZIP.',
      ],
    },
    {
      h2: 'Convertissez un Word en texte sur votre téléphone',
      paragraphs: [
        'Vous avez reçu un fichier Word en pièce jointe par e-mail ou WhatsApp ? Pas besoin de l’application Word. Enregistrez la pièce jointe sur votre téléphone, ouvrez cette page dans Chrome ou Safari sur Android ou iPhone, touchez le cadre et choisissez le fichier. Le texte brut apparaît aussitôt, prêt à copier dans un message, une note ou une autre application. Cela fonctionne de la même façon sur tablette, Chromebook, Windows, Mac et Linux.',
      ],
    },
    {
      h2: 'Fonctionne avec toutes les langues',
      paragraphs: [
        'Comme le texte est lu directement dans le fichier, toutes les langues sortent correctement : français, anglais, arabe, chinois, japonais, russe et tous les autres alphabets. Les fichiers TXT sont enregistrés en UTF-8 : même le Bloc-notes de Windows affiche correctement les accents.',
      ],
    },
    {
      h2: 'Privé, gratuit et illimité',
      paragraphs: [
        'Contrats, CV, devoirs et business plans contiennent souvent des informations privées. La plupart des convertisseurs en ligne envoient votre document sur un serveur. Pas celui-ci : le fichier est ouvert et lu dans votre navigateur, il ne quitte donc jamais votre ordinateur ou votre téléphone et rien n’est stocké en ligne. C’est pourquoi ce convertisseur Word en texte est gratuit et illimité : il n’y a aucun coût serveur à limiter.',
      ],
    },
    {
      h2: 'Conseils pour le meilleur texte brut',
      list: [
        'Acceptez ou refusez d’abord les modifications suivies dans Word si vous voulez être sûr de la version du texte obtenue.',
        'Le texte contenu dans les images n’est pas extrait. Utilisez pour cela le convertisseur d’image en texte.',
        'Si un document semble vide, vérifiez qu’il ne s’agit pas d’un ancien fichier .doc renommé en .docx.',
      ],
    },
    {
      h2: 'Vous n’avez qu’un scan, une photo ou un PDF ?',
      paragraphs: [
        'Utilisez le <a href="/">convertisseur d’image en texte</a> pour les photos et captures, et le <a href="/pdf-to-text">convertisseur PDF en texte</a> pour les fichiers PDF, même numérisés. Pour les présentations, le <a href="/ppt-to-text">convertisseur PPT en texte</a> extrait chaque diapositive et ses notes de l’orateur.',
      ],
    },
  ],
  faq: [
    { q: 'Comment convertir un Word en texte ?', a: 'Déposez un ou plusieurs fichiers Word dans le cadre ci-dessus. Le texte apparaît en quelques secondes, avec paragraphes, listes et tableaux dans l’ordre. Copiez-le, enregistrez-le en TXT ou téléchargez tous les fichiers dans un ZIP.' },
    { q: 'Ce convertisseur Word en texte en ligne est-il gratuit ?', a: 'Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite de documents.' },
    { q: 'Comment convertir un DOCX en TXT ?', a: 'Ouvrez ici votre fichier .docx et cliquez sur le bouton TXT pour télécharger le texte brut. Le fichier est enregistré en UTF-8 : il s’ouvre correctement dans le Bloc-notes et dans tous les éditeurs.' },
    { q: 'Quels formats Word sont pris en charge ?', a: 'DOCX, DOCM et DOTX de Microsoft Word, ODT et OTT de LibreOffice et OpenOffice, et RTF. Les anciens fichiers .doc doivent d’abord être enregistrés en .docx.' },
    { q: 'Puis-je convertir un ancien fichier .doc en texte ?', a: 'Pas directement. Ouvrez le fichier .doc dans Word, Google Docs ou LibreOffice, enregistrez-le en .docx, puis convertissez-le ici.' },
    { q: 'Les tableaux sont-ils conservés lors de la conversion ?', a: 'Oui. Chaque ligne de tableau devient une ligne de texte aux cellules séparées par des tabulations, que vous pouvez coller dans un tableur.' },
    { q: 'Les en-têtes, pieds de page et commentaires sont-ils inclus ?', a: 'Non. Seul le texte principal du document est extrait. Les en-têtes, pieds de page, notes de bas de page et commentaires sont ignorés.' },
    { q: 'Puis-je convertir de nombreux documents Word en texte à la fois ?', a: 'Oui. Déposez des dizaines de documents d’un coup et téléchargez tous les TXT ensemble dans un ZIP.' },
    { q: 'Comment convertir un document Google Docs en texte brut ?', a: 'Dans Google Docs, choisissez Fichier → Télécharger → Microsoft Word (.docx), puis ouvrez ce fichier ici pour obtenir un texte brut propre.' },
    { q: 'Le texte contenu dans les images est-il converti ?', a: 'Non. Seul le vrai texte est extrait. Pour le texte dans les images, utilisez le convertisseur d’image en texte.' },
    { q: 'Mon document est-il envoyé ?', a: 'Non. Le fichier est lu dans votre navigateur et ne quitte jamais votre appareil.' },
  ],
};

export default content;

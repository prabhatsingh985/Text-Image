import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'Capture d’écran en texte – Convertisseur gratuit',
  description:
    'Convertissez une capture d’écran en texte en quelques secondes. Collez-la avec Ctrl+V et copiez le texte. Gratuit, illimité et 100 % dans votre navigateur.',
  h1: 'Capture d’écran en texte',
  lead: 'Collez une capture d’écran avec Ctrl+V et transformez-la en texte à copier, modifier ou télécharger.',
  navLabel: 'Capture en texte',
  cardText: 'Collez une capture et copiez son texte aussitôt.',
  howTo: {
    title: 'Comment convertir une capture d’écran en texte',
    steps: [
      '<strong>Faites une capture.</strong> Appuyez sur Win+Maj+S sous Windows, Cmd+Ctrl+Maj+4 sur Mac ou utilisez les boutons de capture de votre téléphone.',
      '<strong>Collez-la ici.</strong> Appuyez sur Ctrl+V (Cmd+V sur Mac) n’importe où sur cette page ou déposez l’image enregistrée dans le cadre.',
      '<strong>Copiez le texte.</strong> Modifiez-le dans le cadre, cliquez sur une ligne de l’image pour ne copier qu’elle ou téléchargez un TXT.',
    ],
  },
  features: {
    title: 'Un convertisseur pensé pour les captures d’écran',
    items: [
      { title: 'Collez, sans envoi', text: 'Directement depuis le presse-papiers avec Ctrl+V. Inutile d’enregistrer la capture dans un fichier.' },
      { title: 'Précis sur le texte d’écran', text: 'Le texte affiché à l’écran est net et contrasté : le résultat est généralement quasi parfait.' },
      { title: 'Copiez une ligne', text: 'Chaque ligne est entourée sur votre capture. Cliquez pour ne copier que celle-ci.' },
      { title: 'Plusieurs à la fois', text: 'Collez ou déposez plusieurs captures à la suite et téléchargez tout le texte dans un ZIP.' },
      { title: 'Détecte la langue', text: 'Français, anglais, chinois, japonais, russe et plus de 40 langues, reconnues automatiquement.' },
      { title: 'Reste sur votre appareil', text: 'Les conversations et les journaux d’erreurs peuvent être privés. Votre capture n’est jamais envoyée.' },
    ],
  },
  sections: [
    {
      h2: 'Convertisseur gratuit de capture d’écran en texte : collez et copiez',
      paragraphs: [
        'Beaucoup de textes à l’écran se voient mais ne se sélectionnent pas : une boîte de dialogue d’erreur, une image d’une vidéo, une diapositive en visioconférence, un message dans une application qui bloque la copie ou un site qui affiche le texte sous forme d’image. Une capture le fige, et ce <strong>convertisseur de capture d’écran en texte</strong> le retransforme en vrai texte à copier, modifier et coller où vous voulez.',
        'Aucun fichier à enregistrer, rien à envoyer. Faites la capture, appuyez sur Ctrl+V sur cette page et le texte apparaît en quelques secondes. C’est entièrement gratuit, sans inscription, sans filigrane et sans limite quotidienne : convertissez vos captures d’écran en texte aussi souvent que nécessaire.',
      ],
    },
    {
      h2: 'Comment faire une capture d’écran sur chaque appareil',
      paragraphs: ['Le moyen le plus rapide de convertir une capture d’écran en texte est de la copier directement dans le presse-papiers puis de la coller ici. Ces raccourcis le font :'],
      list: [
        '<strong>Windows :</strong> appuyez sur Win+Maj+S, sélectionnez la zone voulue puis appuyez sur Ctrl+V sur cette page. La touche Impr écran copie tout l’écran.',
        '<strong>Mac :</strong> appuyez sur Cmd+Ctrl+Maj+4 et faites glisser sur la zone pour la copier, puis appuyez sur Cmd+V ici. Cmd+Maj+4 enregistre un fichier, que vous pouvez déposer dans le cadre.',
        '<strong>Chromebook :</strong> appuyez sur Ctrl+Maj+Afficher les fenêtres, sélectionnez la zone et collez-la ici.',
        '<strong>Android :</strong> appuyez en même temps sur Marche/Arrêt et Volume bas, puis touchez « Choisir des fichiers » et sélectionnez la capture.',
        '<strong>iPhone :</strong> appuyez en même temps sur le bouton latéral et Volume haut, puis touchez « Choisir des fichiers » et choisissez-la dans Photos.',
      ],
    },
    {
      h2: 'Copier le texte d’une capture en un clic',
      paragraphs: [
        'Lire le texte n’est que la moitié du travail ; le récupérer vite, c’est l’autre moitié. Quand vous convertissez une capture en texte, le résultat apparaît dans un cadre modifiable à côté de l’image : vous pouvez corriger un mot ou supprimer une ligne avant de copier. Appuyez sur <strong>Copier</strong> pour tout mettre dans le presse-papiers.',
        'Souvent, vous n’avez besoin que d’une chose dans une capture chargée : un numéro de téléphone, un numéro de commande, un lien ou une ligne d’erreur. Chaque ligne trouvée est entourée sur la capture, et un clic copie uniquement cette ligne. Copier le texte d’une capture devient ainsi plus rapide que de le sélectionner et le découper à la main.',
        'Plusieurs captures ? Collez-les l’une après l’autre. Chacune est lue séparément, puis vous pouvez utiliser <strong>Tout copier</strong> ou télécharger tous les résultats dans un ZIP.',
      ],
    },
    {
      h2: 'Ce que l’on convertit depuis des captures',
      list: [
        'Messages d’erreur, traces d’appel et journaux qu’un développeur doit rechercher ou partager.',
        'Du code affiché dans un tutoriel vidéo, une diapositive ou une image publiée.',
        'Des messages, e-mails et publications de réseaux sociaux à citer ou à traduire.',
        'Des diapositives d’un cours ou d’une réunion en ligne, pour garder les notes en texte.',
        'Le texte d’applications et de sites qui bloquent la copie, comme certains menus et pages composées d’images.',
        'Numéros de commande, codes de suivi, adresses et numéros de téléphone d’un écran de confirmation.',
      ],
    },
    {
      h2: 'Pourquoi les captures donnent des résultats si précis',
      paragraphs: [
        'L’outil utilise l’OCR (reconnaissance optique de caractères) pour reconnaître lettres et mots. Les captures sont les images les plus faciles à lire pour un OCR : le texte est parfaitement droit, net et contrasté, sans ombre, flou ni page courbée. C’est pourquoi convertir une capture d’écran en texte donne presque toujours un résultat quasi parfait, même avec une petite police.',
        'La langue est détectée automatiquement pour chaque capture. Français, anglais, chinois, japonais, russe et plus de 40 autres langues sont reconnus sans réglage, et le texte de droite à gauche, comme l’arabe, s’affiche dans le bon sens. Si un mot semble douteux, il est entouré en orange pour que vous sachiez quoi vérifier.',
      ],
    },
    {
      h2: 'Convertissez des captures en texte, quel que soit le format',
      paragraphs: [
        'Les captures sont enregistrées dans différents formats selon l’appareil. Windows et Android enregistrent généralement en PNG, l’iPhone enregistre les captures en PNG et les photos en HEIC, et certaines applications utilisent JPG ou WEBP. Cet outil accepte tous ces formats — PNG, JPG, JPEG, WEBP, GIF, BMP, TIFF et HEIC —, vous convertissez donc votre capture sans changer le type de fichier.',
        'Aucune application ni extension à installer non plus. Le convertisseur fonctionne dans Chrome, Edge, Firefox et Safari sur Windows, Mac, Linux, Chromebook, Android et iPhone. Ajoutez cette page à vos favoris et elle sera toujours à un Ctrl+V de distance.',
      ],
    },
    {
      h2: 'Privé : vos captures ne quittent pas votre appareil',
      paragraphs: [
        'Les captures contiennent souvent des choses privées : conversations, coordonnées bancaires, mots de passe dans un journal d’erreurs, données clients. La plupart des outils OCR en ligne envoient votre image sur leur serveur. Pas celui-ci. Le moteur OCR s’exécute dans votre navigateur : votre capture et son texte restent sur votre ordinateur ou votre téléphone. Après la première visite, le moteur est mis en cache et la conversion suivante démarre encore plus vite.',
      ],
    },
    {
      h2: 'Conseils pour de meilleurs résultats',
      list: [
        'Ne capturez que la partie utile. Moins d’éléments parasites, c’est un texte plus propre.',
        'Zoomez avant de faire la capture si le texte est très petit.',
        'Évitez les captures réduites ou très compressées par une messagerie ; utilisez l’original si possible.',
        'Un texte clair sur un fond chargé, comme une photo ou une vidéo, est plus difficile à lire. Mettez d’abord la vidéo en pause sur une image nette.',
        'Vérifiez le code avant de le coller dans un éditeur. L’indentation peut être simplifiée.',
      ],
    },
    {
      h2: 'Vous avez plutôt une photo ou un document ?',
      paragraphs: [
        'Pour les photos de documents papier, le <a href="/">convertisseur d’image en texte</a> nettoie automatiquement les photos sombres ou pâles. Pour garder la mise en page et les titres, utilisez <a href="/jpg-to-word">JPG en Word</a>. Si votre capture montre un tableau, le <a href="/jpg-to-excel">convertisseur JPG en Excel</a> le reconstruit en feuille de calcul, et <a href="/pdf-to-text">PDF en texte</a> lit des fichiers PDF entiers.',
      ],
    },
  ],
  faq: [
    { q: 'Comment convertir une capture d’écran en texte ?', a: 'Faites une capture, puis appuyez sur Ctrl+V (Cmd+V sur Mac) n’importe où sur cette page, ou déposez le fichier image dans le cadre. Le convertisseur la lit en quelques secondes et affiche le texte, prêt à être copié, modifié ou téléchargé.' },
    { q: 'Comment coller une capture ici ?', a: 'Copiez la capture dans le presse-papiers avec Win+Maj+S sous Windows ou Cmd+Ctrl+Maj+4 sur Mac, puis appuyez sur Ctrl+V ou Cmd+V n’importe où sur cette page. La lecture démarre aussitôt, sans enregistrer de fichier.' },
    { q: 'Comment copier le texte d’une capture d’écran ?', a: 'Convertissez la capture en texte ici et appuyez sur Copier pour tout copier. Pour ne copier qu’une ligne, cliquez dessus sur la capture. Avec plusieurs captures, Tout copier récupère le texte de toutes d’un coup.' },
    { q: 'Ce convertisseur de capture d’écran en texte est-il gratuit ?', a: 'Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite quotidienne. Convertissez autant de captures que vous voulez.' },
    { q: 'Puis-je convertir une capture en texte sur mon téléphone ?', a: 'Oui. Il fonctionne dans le navigateur sur Android et iPhone. Faites la capture, touchez « Choisir des fichiers » et choisissez-la dans la galerie ou dans Photos. Le texte apparaît en quelques secondes.' },
    { q: 'Ma capture est-elle envoyée sur un serveur ?', a: 'Non. La reconnaissance de texte s’exécute dans votre navigateur : votre capture et son texte ne quittent jamais votre appareil.' },
    { q: 'Peut-il lire du code dans une capture ?', a: 'Oui. Le code, les messages d’erreur et les journaux se lisent bien car le texte d’écran est net. L’indentation peut être simplifiée : vérifiez-la avant de coller dans un éditeur.' },
    { q: 'Quelles langues peut-il lire dans les captures ?', a: 'Plus de 40, dont le français, l’anglais, l’espagnol, l’allemand, le chinois, le japonais, le coréen et le russe. La langue est détectée automatiquement.' },
    { q: 'Puis-je convertir plusieurs captures à la fois ?', a: 'Oui. Collez ou déposez autant de captures que vous voulez. Chacune est convertie séparément et vous pouvez copier tout le texte ou télécharger tous les résultats dans un ZIP.' },
  ],
};

export default content;

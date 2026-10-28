import type { StaticContent } from '../types';
import type { StaticId } from '../../i18n/routes';
import { SITE } from '../../config/site';

export const pages: Record<StaticId, StaticContent> = {
  about: {
    title: `À propos de ${SITE.name}`,
    description: `${SITE.name} est un convertisseur d’image en texte gratuit et illimité qui fonctionne entièrement dans votre navigateur.`,
    h1: `À propos de ${SITE.name}`,
    sections: [
      {
        h2: 'Pourquoi nous l’avons créé',
        paragraphs: [
          'Extraire le texte d’une image devrait être rapide, gratuit et privé. La plupart des outils OCR en ligne envoient vos fichiers sur un serveur, limitent le nombre de conversions par jour et demandent une inscription ou un paiement. Nous voulions un outil sans rien de tout cela.',
          `${SITE.name} lit le texte des images, des captures d’écran et des PDF directement dans votre navigateur. Vos fichiers ne sont jamais envoyés : il n’y a donc rien à limiter ni rien à stocker.`,
        ],
      },
      {
        h2: 'Ce que vous pouvez faire ici',
        list: [
          '<a href="/">Image en texte</a> — copiez le texte de photos et de captures d’écran.',
          '<a href="/jpg-to-word">JPG en Word</a> — transformez des images en documents Word modifiables.',
          '<a href="/jpg-to-excel">JPG en Excel</a> — reconstruisez des tableaux d’images en feuilles de calcul.',
          '<a href="/image-to-pdf">Image en PDF</a> — réunissez plusieurs images dans un seul PDF.',
          '<a href="/text-to-pdf">Texte en PDF</a> — transformez du texte brut en un PDF propre.',
          '<a href="/pdf-to-text">PDF en texte</a> — extrayez le texte des PDF natifs et numérisés.',
        ],
      },
      {
        h2: 'Comment ça marche',
        paragraphs: [
          'Les outils reposent sur des technologies open source, dont le moteur OCR Tesseract compilé pour fonctionner dans les navigateurs. Le moteur et les fichiers de langue sont téléchargés une fois puis mis en cache ; ensuite, c’est votre propre appareil qui fait tout le travail.',
        ],
      },
    ],
  },
  contact: {
    title: `Contact – ${SITE.name}`,
    description: `Contactez l’équipe ${SITE.name} pour vos suggestions, bugs ou partenariats.`,
    h1: 'Nous contacter',
    sections: [
      {
        h2: 'Votre avis nous intéresse',
        paragraphs: [
          `Vous avez trouvé un bug, vous avez une idée de fonctionnalité ou un texte a été mal reconnu ? Écrivez-nous à <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`,
          'Pour signaler un problème de reconnaissance, décrivez l’image plutôt que d’envoyer des documents personnels. Nous lisons chaque message et répondons généralement sous quelques jours.',
        ],
      },
    ],
  },
  'privacy-policy': {
    title: 'Politique de confidentialité',
    description: `Comment ${SITE.name} traite vos données : les fichiers sont traités dans votre navigateur et jamais envoyés.`,
    h1: 'Politique de confidentialité',
    updated: '28 octobre 2026',
    sections: [
      {
        h2: 'En bref',
        paragraphs: [
          `${SITE.name} traite vos images, PDF et textes <strong>dans votre navigateur</strong>. Vos fichiers et le texte qu’ils contiennent ne sont envoyés ni sur nos serveurs ni sur ceux de quelqu’un d’autre.`,
        ],
      },
      {
        h2: 'Les fichiers que vous ajoutez',
        paragraphs: [
          'Quand vous ajoutez un fichier, il est lu par un code qui s’exécute sur votre appareil. La reconnaissance de texte, la création de documents et les téléchargements se font en local. Nous ne recevons, ne voyons et ne stockons jamais vos fichiers ni leur contenu.',
          'Si vous fermez ou rechargez la page, les fichiers et les résultats disparaissent, sauf si vous les avez enregistrés vous-même.',
        ],
      },
      {
        h2: 'Les fichiers que votre navigateur télécharge',
        paragraphs: [
          'Pour lire le texte, votre navigateur télécharge le moteur OCR et les données de langue depuis le réseau public de diffusion de contenu jsDelivr (cdn.jsdelivr.net) la première fois qu’ils sont nécessaires. Comme tout site web, ce réseau reçoit les informations standard de la requête, comme votre adresse IP et votre type de navigateur. Il ne reçoit pas vos fichiers.',
        ],
      },
      {
        h2: 'Préférences enregistrées sur votre appareil',
        paragraphs: [
          'Nous enregistrons quelques réglages, comme le mode sombre, dans le stockage local de votre navigateur pour nous en souvenir la prochaine fois. Ils ne quittent jamais votre appareil et vous pouvez les effacer dans les paramètres du navigateur.',
        ],
      },
      {
        h2: 'Hébergement et journaux',
        paragraphs: [
          'Le site est hébergé par Cloudflare. Cloudflare traite des données de requête standard (comme les adresses IP) pour servir les pages et protéger le site contre les abus.',
        ],
      },
      {
        h2: 'Publicité et statistiques',
        paragraphs: [
          'Pour l’instant, le site n’affiche pas de publicité et n’utilise pas de cookies de mesure d’audience. Si nous ajoutons un jour de la publicité (comme Google AdSense) ou des statistiques, nous mettrons d’abord cette politique à jour et, lorsque la loi l’exige (RGPD), nous vous demanderons votre consentement.',
        ],
      },
      {
        h2: 'Contact',
        paragraphs: [`Des questions sur la confidentialité ? Écrivez à <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`],
      },
    ],
  },
  terms: {
    title: 'Conditions d’utilisation',
    description: `Les conditions qui s’appliquent lorsque vous utilisez ${SITE.name}.`,
    h1: 'Conditions d’utilisation',
    updated: '28 octobre 2026',
    sections: [
      {
        h2: 'Utilisation des outils',
        paragraphs: [
          `${SITE.name} est gratuit pour un usage personnel et commercial. Vous êtes responsable des fichiers que vous traitez et du droit de les utiliser.`,
        ],
      },
      {
        h2: 'Aucune garantie d’exactitude',
        paragraphs: [
          'La reconnaissance de texte n’est jamais parfaite. Vérifiez toujours les résultats avant de vous y fier, surtout pour les documents juridiques, médicaux ou financiers. Les outils sont fournis « en l’état », sans aucune garantie.',
        ],
      },
      {
        h2: 'Limitation de responsabilité',
        paragraphs: [
          'Dans les limites permises par la loi, nous ne sommes pas responsables des pertes ou dommages résultant de l’utilisation du site ou de ses résultats.',
        ],
      },
      {
        h2: 'Modifications',
        paragraphs: ['Nous pouvons mettre à jour ces conditions de temps en temps. La date en haut de la page indique leur dernière modification.'],
      },
    ],
  },
};

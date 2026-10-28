import type { StaticContent } from '../types';
import type { StaticId } from '../../i18n/routes';
import { SITE } from '../../config/site';

export const pages: Record<StaticId, StaticContent> = {
  about: {
    title: `Acerca de ${SITE.name}`,
    description: `${SITE.name} es un convertidor de imagen a texto gratuito e ilimitado que funciona por completo en tu navegador.`,
    h1: `Acerca de ${SITE.name}`,
    sections: [
      {
        h2: 'Por qué lo creamos',
        paragraphs: [
          'Sacar el texto de una imagen debería ser rápido, gratis y privado. La mayoría de las herramientas OCR en línea suben tus archivos, limitan cuántos puedes convertir al día y te piden registrarte o pagar. Queríamos una herramienta sin nada de eso.',
          `${SITE.name} lee el texto de imágenes, capturas de pantalla y PDF directamente en tu navegador. Tus archivos nunca se suben, así que no hay nada que limitar ni nada que guardar.`,
        ],
      },
      {
        h2: 'Qué puedes hacer aquí',
        list: [
          '<a href="/">Imagen a texto</a>: copia el texto de fotos y capturas de pantalla.',
          '<a href="/jpg-to-word">JPG a Word</a>: convierte imágenes en documentos de Word editables.',
          '<a href="/jpg-to-excel">JPG a Excel</a>: reconstruye tablas de imágenes como hojas de cálculo.',
          '<a href="/image-to-pdf">Imagen a PDF</a>: une varias imágenes en un solo PDF.',
          '<a href="/text-to-pdf">Texto a PDF</a>: convierte texto plano en un PDF limpio.',
          '<a href="/pdf-to-text">PDF a texto</a>: extrae el texto de PDF digitales y escaneados.',
        ],
      },
      {
        h2: 'Cómo funciona',
        paragraphs: [
          'Las herramientas usan tecnología de código abierto, incluido el motor OCR Tesseract compilado para funcionar en navegadores web. El motor y los archivos de idioma se descargan una vez y se guardan en caché; a partir de ahí, tu propio dispositivo hace todo el trabajo.',
        ],
      },
    ],
  },
  contact: {
    title: `Contacto – ${SITE.name}`,
    description: `Ponte en contacto con el equipo de ${SITE.name} para enviar sugerencias, errores o propuestas de colaboración.`,
    h1: 'Contacto',
    sections: [
      {
        h2: 'Nos encantará saber de ti',
        paragraphs: [
          `¿Has encontrado un error, tienes una idea para una nueva función o quieres avisarnos de un texto mal reconocido? Escríbenos a <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`,
          'Si nos avisas de un problema de reconocimiento, describe la imagen en lugar de enviarnos documentos privados. Leemos todos los mensajes y solemos responder en pocos días.',
        ],
      },
    ],
  },
  'privacy-policy': {
    title: 'Política de privacidad',
    description: `Cómo trata ${SITE.name} tus datos: los archivos se procesan en tu navegador y nunca se suben.`,
    h1: 'Política de privacidad',
    updated: '28 de octubre de 2026',
    sections: [
      {
        h2: 'En resumen',
        paragraphs: [
          `${SITE.name} procesa tus imágenes, PDF y textos <strong>dentro de tu navegador web</strong>. Tus archivos y el texto que contienen no se suben a nuestros servidores ni a los de nadie más.`,
        ],
      },
      {
        h2: 'Archivos que añades',
        paragraphs: [
          'Cuando añades un archivo, lo lee un código que se ejecuta en tu dispositivo. El reconocimiento de texto, la creación de documentos y las descargas ocurren de forma local. Nunca recibimos, vemos ni guardamos tus archivos ni su contenido.',
          'Si cierras o recargas la página, los archivos y los resultados desaparecen, salvo que los hayas guardado tú.',
        ],
      },
      {
        h2: 'Archivos que descarga tu navegador',
        paragraphs: [
          'Para leer texto, tu navegador descarga el motor OCR y los datos de idioma desde la red pública de distribución de contenidos jsDelivr (cdn.jsdelivr.net) la primera vez que se necesitan. Como cualquier sitio web, esa red recibe la información estándar de la solicitud, como tu dirección IP y el tipo de navegador. No recibe tus archivos.',
        ],
      },
      {
        h2: 'Preferencias guardadas en tu dispositivo',
        paragraphs: [
          'Guardamos algunos ajustes, como el modo oscuro, en el almacenamiento local de tu navegador para recordarlos la próxima vez. Nunca salen de tu dispositivo y puedes borrarlos en la configuración del navegador.',
        ],
      },
      {
        h2: 'Alojamiento y registros',
        paragraphs: [
          'El sitio web está alojado en Cloudflare. Cloudflare procesa datos estándar de las solicitudes (como las direcciones IP) para servir las páginas y proteger el sitio frente a abusos.',
        ],
      },
      {
        h2: 'Publicidad y analítica',
        paragraphs: [
          'Por ahora el sitio no muestra anuncios ni usa cookies de analítica. Si en el futuro añadimos publicidad (como Google AdSense) o analítica, actualizaremos antes esta política y, cuando la ley lo exija, te pediremos tu consentimiento.',
        ],
      },
      {
        h2: 'Contacto',
        paragraphs: [`¿Preguntas sobre privacidad? Escribe a <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`],
      },
    ],
  },
  terms: {
    title: 'Términos de uso',
    description: `Las condiciones que se aplican cuando usas ${SITE.name}.`,
    h1: 'Términos de uso',
    updated: '28 de octubre de 2026',
    sections: [
      {
        h2: 'Uso de las herramientas',
        paragraphs: [
          `${SITE.name} se puede usar gratis con fines personales y comerciales. Eres responsable de los archivos que procesas y de tener derecho a usarlos.`,
        ],
      },
      {
        h2: 'Sin garantía de exactitud',
        paragraphs: [
          'El reconocimiento de texto nunca es perfecto. Revisa siempre los resultados antes de confiar en ellos, sobre todo en documentos legales, médicos o financieros. Las herramientas se ofrecen «tal cual», sin ninguna garantía.',
        ],
      },
      {
        h2: 'Limitación de responsabilidad',
        paragraphs: [
          'En la medida en que lo permita la ley, no somos responsables de ninguna pérdida o daño derivado del uso del sitio web o de sus resultados.',
        ],
      },
      {
        h2: 'Cambios',
        paragraphs: ['Podemos actualizar estos términos de vez en cuando. La fecha de arriba indica cuándo cambiaron por última vez.'],
      },
    ],
  },
};

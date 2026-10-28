import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'PPT a texto – Convertir PowerPoint a texto gratis',
  description:
    'Convierte PPT a texto online gratis. Extrae el texto y las notas del orador de cada diapositiva de PowerPoint (PPTX, ODP) en segundos. Sin registro ni subidas.',
  h1: 'Convertidor de PPT a texto',
  lead: 'Convierte PPT a texto online y gratis: cada diapositiva y sus notas del orador como texto plano.',
  navLabel: 'PPT a texto',
  cardText: 'Extrae el texto y las notas de diapositivas PPTX.',
  howTo: {
    title: 'Cómo convertir PPT a texto',
    steps: [
      '<strong>Añade tu presentación.</strong> Suelta uno o varios archivos .pptx u .odp en el recuadro.',
      '<strong>Obtén cada diapositiva.</strong> El texto sale diapositiva a diapositiva con su número, y las notas del orador se añaden debajo de cada una automáticamente.',
      '<strong>Copia o descarga.</strong> Copia el texto, guárdalo como TXT o descarga varias presentaciones en un ZIP.',
    ],
  },
  features: {
    title: 'Un convertidor de PPT a texto que mantiene el orden de las diapositivas',
    items: [
      { title: 'Se mantiene el orden', text: 'El texto sigue el orden real de tus diapositivas, aunque las hayas reordenado.' },
      { title: 'Notas del orador', text: 'Las notas del presentador se incluyen debajo de cada diapositiva automáticamente.' },
      { title: 'Tablas y viñetas', text: 'Las viñetas se mantienen y las filas de tabla se separan con tabulaciones.' },
      { title: 'Instantáneo', text: 'Sin OCR: el texto se lee directamente del archivo en un segundo.' },
      { title: 'Por lotes', text: 'Convierte una carpeta entera de presentaciones a la vez y descarga un ZIP.' },
      { title: 'Privado', text: 'Las presentaciones se leen en tu navegador y nunca se suben.' },
    ],
  },
  sections: [
    {
      h2: 'Un convertidor de PPT a texto gratis para cada diapositiva',
      paragraphs: [
        'Sacar las palabras de una presentación de PowerPoint es sorprendentemente pesado. Haces clic en cada cuadro de texto, copias, cambias de ventana, pegas y repites en cada diapositiva, y luego otra vez con las notas del orador. Este <strong>convertidor de PPT a texto</strong> lo hace todo a la vez: suelta tu presentación y obtienes el texto de todas las diapositivas, en orden, como texto plano limpio.',
        'Es totalmente gratis, sin registro, sin marca de agua y sin límite de diapositivas ni archivos. Como es un <strong>convertidor de PPT a texto online</strong>, no hay que instalar nada y ni siquiera necesitas PowerPoint en tu ordenador. Abre la página, añade tu archivo y convierte PPT a texto en un segundo.',
      ],
    },
    {
      h2: '¿Por qué convertir PPT a texto?',
      paragraphs: ['Las diapositivas son geniales para presentar, pero incómodas para todo lo demás. El texto plano es fácil de editar, buscar, compartir y reutilizar. La gente convierte PPT a texto para:'],
      list: [
        'Convertir las diapositivas de clase en apuntes que puedan subrayar y repasar.',
        'Reutilizar el contenido de una presentación en un informe, un post, un folleto o un correo.',
        'Pegar el texto en un traductor, un corrector o un asistente de IA para resumirlo.',
        'Sacar las notas del orador como guion para una charla, un webinar o un vídeo.',
        'Contar palabras, revisar o corregir la ortografía de toda la presentación a la vez.',
        'Buscar un dato, una cifra o una cita en presentaciones antiguas.',
      ],
    },
    {
      h2: 'Notas del orador incluidas automáticamente',
      paragraphs: [
        'Las notas bajo tus diapositivas suelen tener más detalle que las propias diapositivas: la explicación completa, los puntos clave, el guion. La mayoría de las herramientas las ignoran. Este convertidor lee las notas de cada diapositiva y las coloca justo debajo de su texto, marcadas como «Notas:», para que siempre sepas a qué diapositiva pertenecen. No hay que activar nada: si tu presentación tiene notas, las obtienes.',
      ],
    },
    {
      h2: '¿Por qué no copiar el texto de PowerPoint a mano?',
      paragraphs: [
        'PowerPoint guarda cada título, lista y pie de imagen en un cuadro de texto distinto, así que no hay un «seleccionar todo» para toda la presentación. Copiar diapositiva a diapositiva es lento, es fácil desordenarse y además te dejas las notas del orador si no cambias a la vista de notas. La vista de esquema ayuda un poco, pero se salta los cuadros de texto que no son marcadores de posición y todas las tablas.',
        'Una herramienta que puede convertir PPT a texto lee cada cuadro de texto, tabla y nota de una pasada, mantiene el orden y etiqueta cada diapositiva, así que una presentación de 60 diapositivas se convierte en un documento ordenado en un segundo.',
      ],
    },
    {
      h2: 'Qué obtienes de cada diapositiva',
      list: [
        '<strong>Marcadores de diapositiva:</strong> cada diapositiva empieza con «— Diapositiva 1 —», «— Diapositiva 2 —», etc., en el orden en que aparecen en tu presentación.',
        '<strong>Títulos y cuadros de texto:</strong> todo el texto de la diapositiva, forma por forma, incluidas las formas agrupadas.',
        '<strong>Viñetas:</strong> los puntos con viñetas o numerados empiezan con «•», para que las listas sigan siendo legibles.',
        '<strong>Tablas:</strong> cada fila se convierte en una línea con las celdas separadas por tabulaciones, lista para pegar en una hoja de cálculo.',
        '<strong>Notas del orador:</strong> se añaden debajo de cada diapositiva cuando la presentación las tiene.',
        '<strong>No se incluye:</strong> números de diapositiva, fechas y pies de página, ni el texto dentro de imágenes, gráficos y SmartArt.',
      ],
    },
    {
      h2: 'Cómo funciona el convertidor de PPT a texto',
      paragraphs: [
        'Un archivo .pptx es un archivo zip que guarda cada diapositiva como XML estructurado. El convertidor lo abre dentro de tu navegador, sigue la propia lista de diapositivas de la presentación para que el orden siempre sea correcto y lee el texto directamente de cada diapositiva y página de notas. No hay OCR ni conjeturas, así que cada palabra sale exactamente como se escribió; incluso con 150 diapositivas, el resultado tarda alrededor de un segundo.',
        'El texto aparece en un recuadro editable con un contador de palabras y caracteres. Corrige lo que quieras y luego cópialo o guárdalo como TXT.',
      ],
    },
    {
      h2: 'PPTX, ODP y otros formatos de presentación',
      paragraphs: [
        'Puedes convertir archivos <strong>PPTX</strong>, <strong>PPTM</strong>, <strong>PPSX</strong> y <strong>POTX</strong> de Microsoft PowerPoint, y archivos <strong>ODP</strong> y <strong>OTP</strong> de LibreOffice Impress y OpenOffice.',
        '¿Usas Presentaciones de Google? Elige Archivo → Descargar → Microsoft PowerPoint (.pptx) y suelta ese archivo aquí. Desde Keynote de Apple, usa Archivo → Exportar a → PowerPoint. En ambos casos obtienes el mismo resultado limpio.',
      ],
    },
    {
      h2: 'Archivos .ppt antiguos',
      paragraphs: [
        'El antiguo formato binario .ppt (PowerPoint 97–2003) no es compatible. Abre el archivo en PowerPoint, Presentaciones de Google o LibreOffice Impress, guárdalo como .pptx y conviértelo aquí.',
      ],
    },
    {
      h2: 'Convierte muchas presentaciones a la vez',
      paragraphs: [
        '¿Tienes todas las presentaciones de un cuatrimestre o una carpeta de presentaciones comerciales? Suéltalas todas a la vez. Cada archivo se convierte por separado con su número de diapositivas, y puedes usar <strong>Copiar todo</strong> o descargar todos los TXT juntos en un ZIP.',
      ],
    },
    {
      h2: 'Convierte PPT a texto online en cualquier dispositivo',
      paragraphs: [
        'Este convertidor de PPT a texto online funciona en Chrome, Edge, Firefox y Safari en Windows, Mac, Linux, Chromebook, Android y iPhone. ¿Te han enviado una presentación por correo o WhatsApp? Guárdala, abre esta página, toca el recuadro y elige el archivo: el texto está listo para copiar al momento, sin la app de PowerPoint.',
      ],
    },
    {
      h2: 'Funciona con cualquier idioma',
      paragraphs: [
        'Como el texto se lee directamente del archivo, cualquier idioma sale correctamente: español, inglés, árabe, chino, japonés, ruso y cualquier otro alfabeto. Los TXT se guardan en UTF-8, así que incluso el Bloc de notas de Windows muestra bien las tildes y la ñ.',
      ],
    },
    {
      h2: 'Privado: tus diapositivas se quedan en tu dispositivo',
      paragraphs: [
        'Las presentaciones suelen contener planes sin publicar, nombres de clientes, cifras de ventas o material de exámenes. La mayoría de los conversores online suben tu archivo a un servidor. Este no: la presentación se abre y se lee dentro de tu navegador y nunca sale de tu ordenador o móvil. No se guarda nada online, y por eso la herramienta puede seguir siendo gratis e ilimitada.',
      ],
    },
    {
      h2: 'Consejos para obtener los mejores resultados',
      list: [
        'Si el texto de una diapositiva forma parte de una imagen, haz una captura de esa diapositiva y usa captura de pantalla a texto.',
        'Las diapositivas ocultas también se leen; bórralas antes si no quieres su texto.',
        '¿Necesitas antes las diapositivas en PDF? Expórtalas desde PowerPoint y usa PDF a texto.',
      ],
    },
    {
      h2: 'Texto dentro de imágenes y otros archivos',
      paragraphs: [
        'El texto que forma parte de una imagen en una diapositiva no se puede extraer así. Haz una captura de la diapositiva y usa <a href="/screenshot-to-text">captura de pantalla a texto</a>. Para documentos, el <a href="/word-to-text">convertidor de Word a texto</a> funciona igual, y el <a href="/pdf-to-text">convertidor de PDF a texto</a> lee archivos PDF, también escaneados.',
      ],
    },
  ],
  faq: [
    { q: '¿Cómo convierto PPT a texto?', a: 'Suelta uno o varios archivos .pptx u .odp en el recuadro de arriba. El texto de cada diapositiva sale en orden, con las notas del orador debajo de cada una. Cópialo, guárdalo como TXT o descarga varias presentaciones en un ZIP.' },
    { q: '¿Es gratis este convertidor de PPT a texto?', a: 'Sí. Es totalmente gratis, sin registro, sin marca de agua y sin límite de diapositivas ni archivos.' },
    { q: '¿Qué formatos de PowerPoint se admiten?', a: 'PPTX, PPTM, PPSX y POTX de PowerPoint, y ODP y OTP de LibreOffice Impress. Los archivos .ppt antiguos deben guardarse antes como .pptx.' },
    { q: '¿Puedo obtener las notas del orador de un PowerPoint?', a: 'Sí. Si la presentación tiene notas, aparecen debajo del texto de cada diapositiva automáticamente, marcadas como «Notas:».' },
    { q: '¿Se mantiene el orden de las diapositivas?', a: 'Sí. El texto sigue el orden real de tus diapositivas, con un número para cada una, aunque se hayan reordenado.' },
    { q: '¿Puedo convertir un archivo .ppt antiguo a texto?', a: 'No directamente. Abre el archivo .ppt en PowerPoint, Presentaciones de Google o LibreOffice Impress, guárdalo como .pptx y conviértelo aquí.' },
    { q: '¿Puede extraer texto de imágenes, gráficos o SmartArt?', a: 'No. Solo se extrae el texto real de cuadros de texto, títulos, tablas y notas. Para el texto dentro de una imagen, haz una captura de la diapositiva y usa captura de pantalla a texto.' },
    { q: '¿Funciona con Presentaciones de Google?', a: 'Sí. En Presentaciones de Google elige Archivo → Descargar → Microsoft PowerPoint (.pptx) y abre ese archivo aquí.' },
    { q: '¿Puedo convertir PPT a texto online en el móvil?', a: 'Sí. Este convertidor de PPT a texto online funciona en el navegador de Android y iPhone. Guarda la presentación en el móvil, abre esta página y elige el archivo.' },
    { q: '¿Puedo convertir varias presentaciones a la vez?', a: 'Sí. Suelta tantos archivos como quieras y descarga todos los TXT juntos en un ZIP.' },
    { q: '¿Se sube mi presentación?', a: 'No. Todo se lee dentro de tu navegador y el archivo nunca sale de tu dispositivo.' },
  ],
};

export default content;

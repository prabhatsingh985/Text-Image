import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'JPG a Excel – Convertir imagen a Excel gratis',
  description:
    'Convierte JPG a Excel online gratis. Pasa fotos y capturas de tablas a hojas de Excel (.xlsx) o CSV editables. Ilimitado, sin registro y sin subir nada.',
  h1: 'Convertidor de JPG a Excel',
  lead: 'Convierte JPG a Excel online y gratis. Pasa la foto o captura de una tabla a una hoja de Excel editable.',
  navLabel: 'JPG a Excel',
  cardText: 'Reconstruye tablas de imágenes en .xlsx o CSV.',
  howTo: {
    title: 'Cómo convertir JPG a Excel',
    steps: [
      '<strong>Añade la imagen de una tabla.</strong> Sube un JPG, PNG o una foto del móvil, o pega una captura con Ctrl+V.',
      '<strong>Revisa la tabla.</strong> La herramienta encuentra las filas y columnas y las muestra en una cuadrícula. Haz clic en cualquier celda para corregirla.',
      '<strong>Descarga Excel o CSV.</strong> Guarda un archivo .xlsx, un CSV o une varias imágenes en un libro con una hoja para cada una.',
    ],
  },
  features: {
    title: 'Qué hace por ti el convertidor de JPG a Excel',
    items: [
      { title: 'Encuentra filas y columnas', text: 'El texto se agrupa en filas y columnas según su posición, aunque la tabla no tenga líneas.' },
      { title: 'Los números siguen siendo números', text: 'Valores como 1,250.50 se guardan como números reales, así las fórmulas de Excel funcionan al momento.' },
      { title: 'Edita antes de exportar', text: 'Corrige una celda en la cuadrícula y el cambio pasa directamente a tu archivo.' },
      { title: 'Excel o CSV', text: 'Descarga .xlsx para Excel y Google Sheets, o CSV para cualquier otro programa.' },
      { title: 'Muchas tablas, un libro', text: 'Convierte varias imágenes y obtén un libro con una hoja para cada una.' },
      { title: 'Privado e ilimitado', text: 'Todo ocurre en tu navegador: sin subidas y sin límite diario.' },
    ],
  },
  sections: [
    {
      h2: 'Un convertidor de JPG a Excel gratis para tablas en imágenes',
      paragraphs: [
        'Copiar a mano una lista de precios impresa, un extracto bancario o una tabla de un informe en una hoja de cálculo lleva mucho tiempo y provoca errores. Este <strong>convertidor de JPG a Excel</strong> lee el texto de tu imagen con OCR (reconocimiento óptico de caracteres), averigua qué palabras van en cada fila y columna y te da una hoja de Excel lista en unos segundos.',
        'Es un convertidor de <strong>JPG a Excel online gratis</strong> y sin los límites habituales: sin registro, sin marca de agua, sin prueba y sin tope diario. Convierte una tabla o cincuenta, tantas veces como necesites. Todo se ejecuta en tu navegador, así que puedes convertir JPG a Excel sin instalar complementos ni programas.',
      ],
    },
    {
      h2: 'Qué puedes convertir de JPG a Excel',
      paragraphs: ['Cualquier imagen que muestre información en filas y columnas puede convertirse en una hoja de cálculo. La gente usa esta herramienta para:'],
      list: [
        'Listas de precios, catálogos de productos e inventarios.',
        'Extractos bancarios, facturas y tickets con listas de artículos.',
        'Horarios, hojas de asistencia y notas de exámenes.',
        'Tablas de informes, trabajos de investigación y libros de texto.',
        'Capturas de tablas de webs, PDF y apps que no dejan copiar.',
        'Formularios y registros impresos sencillos.',
      ],
    },
    {
      h2: 'Por qué convertir JPG a Excel en lugar de volver a escribir',
      paragraphs: [
        'Volver a escribir una tabla de cincuenta filas y cinco columnas supone introducir 250 valores a mano, y un solo dígito equivocado puede estropear un total o un informe. Convertir la imagen hace el grueso del trabajo en segundos y tú solo revisas el resultado.',
        'Además conserva la estructura. Copiar el texto de una imagen con un OCR normal te da una lista larga de palabras que luego tendrías que separar en columnas. Un convertidor de JPG a Excel coloca cada valor en su propia celda, así que la hoja está lista para ordenar, filtrar y calcular en cuanto la abres.',
      ],
    },
    {
      h2: 'Cómo se reconstruyen las tablas',
      paragraphs: [
        'Primero se localiza y reconoce cada palabra de la imagen. El idioma se detecta automáticamente, así que funcionan tablas en español, inglés, portugués, árabe, chino y más de 40 idiomas. Las palabras que están en la misma línea horizontal se agrupan en una fila.',
        'Después la herramienta busca huecos verticales que recorren toda la tabla: esos huecos son los límites entre columnas. Por eso las tablas sin líneas se convierten tan bien como las que tienen bordes. Cada palabra se coloca en la celda que le corresponde y las columnas del archivo de Excel se ajustan a su contenido.',
        'Las tablas impresas y limpias dan los mejores resultados. Las tablas fotografiadas con mucho ángulo, con celdas combinadas o escritas a mano pueden necesitar algún retoque en la cuadrícula.',
      ],
    },
    {
      h2: 'Números que funcionan en las fórmulas de Excel',
      paragraphs: [
        'Una hoja de cálculo solo es útil si puedes calcular con ella. Cuando conviertes JPG a Excel aquí, los números simples como 42, 3.75 o 1,250.50 se guardan como números reales, así que SUMA, PROMEDIO, la ordenación y los gráficos funcionan al momento, sin avisos de «número almacenado como texto».',
        'Algunos valores no deben cambiar, así que se mantienen tal cual: teléfonos e identificadores que empiezan por cero y valores con símbolos de moneda, unidades o letras. Por ahora, los números escritos con coma decimal (1.250,50) también se guardan como texto; en Excel puedes convertirlos con Datos → Texto en columnas. No se pierde nada y tú decides cómo dar formato a esas columnas.',
      ],
    },
    {
      h2: 'Revisa y corrige la tabla antes de descargar',
      paragraphs: [
        'El OCR es rápido pero no perfecto, así que el resultado se muestra en una cuadrícula editable antes de descargar nada. Haz clic en cualquier celda para corregir un número o una palabra mal leídos y tus cambios pasan directamente al archivo.',
        'Cuando la tabla esté bien, descárgala como archivo de Excel (.xlsx) para Microsoft Excel, Google Sheets, LibreOffice Calc y Numbers, o como CSV para cualquier otro programa. También puedes pulsar <strong>Copiar</strong> y pegar la tabla directamente en una hoja abierta: las celdas caen en las columnas correctas.',
      ],
    },
    {
      h2: 'Muchas imágenes, un solo libro de Excel',
      paragraphs: [
        'Las tablas largas suelen ocupar varias fotos o capturas. Añádelas todas a la vez: cada imagen se lee por separado y puedes descargarlo todo en un único libro de Excel, con una hoja para cada imagen con el nombre de su archivo. Es la forma más rápida de convertir un montón de páginas en una sola hoja de cálculo.',
      ],
    },
    {
      h2: 'Convierte JPG a Excel online en cualquier dispositivo',
      paragraphs: [
        'Este convertidor de JPG a Excel online funciona en Chrome, Edge, Firefox y Safari en Windows, Mac, Linux, Chromebook, Android y iPhone. En el móvil, fotografía una tabla impresa con la cámara y obtén un archivo de Excel un momento después. Además de JPG, puedes convertir imágenes PNG, WEBP, GIF, BMP, TIFF y HEIC de iPhone.',
        'Tus imágenes nunca se suben. La tabla se lee y la hoja de cálculo se crea dentro de tu navegador, así que los extractos bancarios, nóminas y listas de clientes se quedan en tu dispositivo. Tras la primera visita, el motor OCR queda en caché y la siguiente conversión empieza aún más rápido.',
      ],
    },
    {
      h2: 'Consejos para obtener mejores hojas de cálculo',
      list: [
        'Recorta la imagen para dejar solo la tabla, sin texto alrededor.',
        'Asegúrate de que la foto está recta y bien iluminada, hecha desde arriba.',
        'Usa la versión más nítida y grande de la imagen. Los números pequeños y borrosos son la causa más común de errores.',
        'Para tablas muy largas, usa varias capturas: cada una se convierte en su propia hoja.',
        'Revisa las columnas con símbolos de moneda o unidades: se guardan como texto para no perder nada.',
      ],
    },
    {
      h2: '¿Necesitas otro formato?',
      paragraphs: [
        'Si tu tabla está dentro de un PDF, el <a href="/pdf-to-excel">convertidor de PDF a Excel</a> lee cada página directamente. Para documentos con párrafos y títulos, usa <a href="/jpg-to-word">JPG a Word</a>, y para copiar simplemente el texto de una imagen, el <a href="/">convertidor de imagen a texto</a>.',
      ],
    },
  ],
  faq: [
    { q: '¿Cómo convierto JPG a Excel?', a: 'Sube una foto JPG o una captura de una tabla, o pégala con Ctrl+V. El convertidor encuentra las filas y columnas y las muestra en una cuadrícula. Revisa las celdas y descarga un archivo de Excel (.xlsx) o CSV.' },
    { q: '¿Es gratis este convertidor de JPG a Excel online?', a: 'Sí. Es totalmente gratis, sin registro, sin marca de agua y sin límite de tablas.' },
    { q: '¿Cuánto tarda en convertir JPG a Excel?', a: 'Normalmente unos segundos por imagen. La primera conversión tarda un poco más mientras se carga el motor OCR; después queda en caché en tu navegador.' },
    { q: '¿Puedo convertir a Excel una tabla sin bordes?', a: 'Sí. Las columnas se detectan por el espacio entre palabras, así que las tablas sin líneas se convierten igual de bien que las que tienen bordes.' },
    { q: '¿Puedo editar la tabla antes de descargar el Excel?', a: 'Sí. Haz clic en cualquier celda de la cuadrícula para cambiarla. Tus cambios se incluyen en el archivo de Excel o CSV.' },
    { q: '¿Los números de la imagen funcionan en las fórmulas de Excel?', a: 'Los números simples como 42, 1,250 o 3.75 se guardan como números reales, así que SUMA y otras fórmulas funcionan al momento. Los valores con símbolos de moneda, unidades, ceros a la izquierda o coma decimal (1.250,50) se guardan como texto para no perder nada.' },
    { q: '¿Puedo convertir varias imágenes JPG en un solo libro de Excel?', a: 'Sí. Añade todas tus imágenes y descárgalas juntas como un libro. Cada imagen se convierte en su propia hoja.' },
    { q: '¿Qué formatos de imagen puedo convertir a Excel?', a: 'JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF y fotos HEIC de iPhone. También puedes pegar una captura de una tabla con Ctrl+V.' },
    { q: '¿Puedo abrir el archivo en Google Sheets?', a: 'Sí. Sube el archivo .xlsx a Google Drive o importa el CSV en Google Sheets.' },
    { q: '¿Se suben mis imágenes a un servidor?', a: 'No. La tabla se lee y la hoja de cálculo se crea en tu navegador, así que tus imágenes nunca salen de tu dispositivo.' },
  ],
};

export default content;

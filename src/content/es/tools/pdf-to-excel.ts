import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'PDF a Excel – Convertir PDF a Excel gratis online',
  description:
    'Convierte PDF a Excel online gratis. Pasa las tablas de PDF digitales y escaneados a hojas de Excel editables, una por página. Sin registro y sin subidas.',
  h1: 'Convertidor de PDF a Excel',
  lead: 'Convierte PDF a Excel online y gratis: tablas de PDF digitales y escaneados, listas para editar.',
  navLabel: 'PDF a Excel',
  cardText: 'Convierte las tablas de un PDF en una hoja editable.',
  howTo: {
    title: 'Cómo convertir PDF a Excel',
    steps: [
      '<strong>Añade tu PDF.</strong> Suéltalo en el recuadro o haz clic en «Elegir PDF». Todas las páginas se leen automáticamente.',
      '<strong>Revisa las tablas.</strong> Cada página aparece como una tabla. Haz clic en cualquier celda para corregirla antes de descargar.',
      '<strong>Descarga Excel.</strong> Obtén un archivo .xlsx con una hoja por página, o un CSV.',
    ],
  },
  features: {
    title: 'Un convertidor de PDF a Excel que respeta tus tablas',
    items: [
      { title: 'PDF digitales al detalle', text: 'Si el PDF tiene capa de texto, los números se toman directamente de ella, sin adivinar con OCR.' },
      { title: 'También PDF escaneados', text: 'Las páginas que solo son imágenes se leen con OCR y se dividen en filas y columnas.' },
      { title: 'Números reales', text: 'Valores como 1,250.50 se convierten en números en Excel, así SUMA y los gráficos funcionan al momento.' },
      { title: 'Edita antes de exportar', text: 'Corrige cualquier celda en la tabla de vista previa antes de descargar.' },
      { title: 'Una hoja por página', text: 'Cada página va a su propia hoja, así los PDF largos siguen siendo fáciles de recorrer.' },
      { title: 'Privado', text: 'Los extractos bancarios se quedan en tu dispositivo. El PDF nunca se sube.' },
    ],
  },
  sections: [
    {
      h2: 'Un convertidor de PDF a Excel gratis que reconstruye tablas reales',
      paragraphs: [
        'Copiar una tabla de un PDF suele acabar mal. Al pegarla en una hoja de cálculo obtienes una columna larga y desordenada, números pegados a etiquetas y filas partidas. Este <strong>convertidor de PDF a Excel</strong> lo hace bien: mira dónde está cada palabra en la página, encuentra las filas y los huecos entre columnas y reconstruye la tabla celda a celda en una hoja de Excel real.',
        'Puedes <strong>convertir PDF a Excel gratis</strong>, sin registro, sin marca de agua, sin tope de páginas y sin límite diario. Es un convertidor de <strong>PDF a Excel online gratis</strong> de verdad, sin pruebas ni pantallas para pasar a la versión de pago: convierte una factura de una página o un extracto de 100, tantas veces como necesites.',
      ],
    },
    {
      h2: 'Cómo funciona la conversión de PDF a Excel',
      paragraphs: [
        'Cada página del PDF se trata por separado. Primero, el convertidor recoge todas las palabras de la página con su posición exacta. Las palabras que comparten la misma línea horizontal se agrupan en una fila. Luego busca huecos verticales que recorren toda la tabla: esos huecos son los límites entre columnas. Cada palabra se coloca en su celda y las columnas del archivo de Excel se ajustan a su contenido.',
        'Como las columnas se detectan por el espacio y no por las líneas dibujadas, las tablas sin bordes se convierten igual de bien que las que tienen cuadrícula. Las páginas sin tabla se omiten, así el libro no se llena de hojas vacías.',
      ],
    },
    {
      h2: 'Funcionan PDF digitales y escaneados',
      paragraphs: [
        'La mayoría de los PDF de bancos, programas de contabilidad y webs son <strong>digitales</strong>: contienen texto real. En esas páginas los números se leen directamente del archivo, tal como están escritos, así que no hay errores de reconocimiento y la conversión es casi instantánea.',
        'Los PDF <strong>escaneados</strong> son distintos: cada página es solo una imagen. En esas páginas la herramienta aplica primero OCR (reconocimiento óptico de caracteres), con detección automática del idioma, y después busca la tabla. Los archivos mixtos también funcionan, y una nota te avisa cuando se usó OCR para que sepas qué números revisar.',
      ],
    },
    {
      h2: 'Números reales, listos para fórmulas',
      paragraphs: [
        'Cuando conviertes PDF a Excel aquí, los valores simples como 42, 3.75 o 1,250.50 se guardan como números reales, no como texto. SUMA, PROMEDIO, la ordenación, los filtros, las tablas dinámicas y los gráficos funcionan en cuanto abres el archivo.',
        'Los valores que no deben cambiar se mantienen tal cual: números de cuenta e identificadores que empiezan por cero y valores con símbolos de moneda, letras o unidades. Por ahora, los números con coma decimal (1.250,50) también se guardan como texto; en Excel puedes convertirlos con Datos → Texto en columnas. No se pierde nada.',
      ],
    },
    {
      h2: 'Revisa cada página antes de descargar',
      paragraphs: ['Cada página del PDF aparece como una tabla editable con su número de página. Haz clic en cualquier celda para corregir un valor y tus cambios pasan directamente al archivo. Cuando todo esté bien, elige cómo lo quieres:'],
      list: [
        '<strong>Excel (.xlsx):</strong> una hoja por página, con el nombre de tu archivo y el número de página. Se abre en Microsoft Excel, Google Sheets, LibreOffice Calc y Numbers.',
        '<strong>CSV:</strong> todas las páginas en un solo archivo, con una fila vacía entre páginas, ideal para importar en otros programas.',
        '<strong>Copiar:</strong> pega la tabla directamente en una hoja abierta y cada valor cae en su columna.',
      ],
    },
    {
      h2: 'Convierte varios PDF en un solo archivo de Excel',
      paragraphs: [
        '¿Tienes un año de extractos mensuales o una carpeta de facturas? Suelta todos los PDF a la vez. Cada archivo se convierte por separado y <strong>Todo en un archivo Excel</strong> pone cada página de cada PDF en un único libro, cada una en su hoja.',
      ],
    },
    {
      h2: '¿Por qué no copiar y pegar sin más?',
      paragraphs: [
        'Un PDF no guarda una tabla como filas y columnas, sino trozos de texto en posiciones de la página. Por eso, al seleccionar una tabla y pegarla en Excel, todo acaba en una columna o en desorden. Arreglarlo a mano —separar celdas, mover valores, volver a escribir lo que salió mal— puede llevar más que escribir la tabla desde cero.',
        'Un convertidor específico lee esas posiciones y devuelve cada valor a su celda, así que la hoja está lista para ordenar, filtrar y sumar al instante. Si puedes convertir PDF a Excel gratis en unos segundos, no tiene sentido pasar una hora copiando y pegando.',
      ],
    },
    {
      h2: 'Qué se suele convertir de PDF a Excel',
      list: [
        'Extractos bancarios y de tarjetas, para ordenar, sumar y clasificar movimientos.',
        'Facturas, pedidos y recibos, para revisar importes y controlar pagos.',
        'Listas de precios, catálogos de productos e informes de inventario.',
        'Informes financieros, balances y memorias anuales.',
        'Horarios, calendarios, hojas de asistencia y notas.',
        'Resultados de encuestas y tablas de datos de estudios e informes públicos.',
      ],
    },
    {
      h2: 'Convierte PDF a Excel online, sin programas',
      paragraphs: [
        'El software de PDF de escritorio es caro y algunas herramientas online te envían el archivo por correo o se paran tras dos páginas. Este convertidor de PDF a Excel online solo necesita un navegador. Funciona en Chrome, Edge, Firefox y Safari en Windows, Mac, Linux, Chromebook, Android y iPhone, así que puedes convertir PDF a Excel online desde el ordenador de la oficina o desde el móvil.',
        'Tras la primera visita, el motor queda en caché en tu navegador, así que la próxima vez este convertidor online de PDF a Excel arranca aún más rápido.',
      ],
    },
    {
      h2: 'Privado: tus extractos no salen de tu dispositivo',
      paragraphs: [
        'Extractos bancarios, nóminas y facturas contienen justo el tipo de información que no deberías subir a un servidor desconocido. Aquí, el PDF se abre, se lee y se convierte en Excel por completo dentro de tu navegador. El archivo nunca sale de tu ordenador o móvil, no se guarda nada online y no hay ninguna cuenta que pueda ser hackeada. Por eso también puede ser gratis e ilimitado: no hay coste de servidor que limitar.',
      ],
    },
    {
      h2: 'Consejos para obtener el mejor archivo de Excel',
      list: [
        'Quita la contraseña de un PDF protegido antes de abrirlo aquí.',
        'En PDF escaneados, un escaneo limpio a 300 ppp o más da números mucho más precisos.',
        'Las tablas con columnas claras, como extractos y facturas, dan los mejores resultados. Las celdas combinadas y los diseños complejos pueden necesitar algún retoque.',
        'Revisa siempre los totales y las cifras clave de las páginas escaneadas antes de usarlos.',
      ],
    },
    {
      h2: '¿Necesitas texto plano o tienes la foto de una tabla?',
      paragraphs: [
        'Para obtener el texto plano de un PDF en lugar de tablas, usa el <a href="/pdf-to-text">convertidor de PDF a texto</a>. Para fotos y capturas de tablas, el <a href="/jpg-to-excel">convertidor de JPG a Excel</a> las reconstruye como hoja de cálculo, y el <a href="/">convertidor de imagen a texto</a> copia el texto de cualquier imagen.',
      ],
    },
  ],
  faq: [
    { q: '¿Cómo convertir PDF a Excel?', a: 'Suelta tu PDF en el recuadro de arriba o haz clic en «Elegir PDF». Todas las páginas se leen automáticamente y se muestran como tablas editables. Revisa las celdas y descarga un archivo de Excel (.xlsx) con una hoja por página, o un CSV.' },
    { q: '¿Cómo puedo convertir PDF a Excel gratis?', a: 'Usa este convertidor de PDF a Excel gratuito. No hay registro, marca de agua, límite de páginas ni límite diario, y funciona con PDF digitales y escaneados.' },
    { q: '¿Puedo convertir un PDF escaneado a Excel?', a: 'Sí. Las páginas sin capa de texto se leen con OCR y luego se dividen en filas y columnas. Revisa bien los números en escaneos de baja calidad.' },
    { q: '¿Cómo paso un extracto bancario en PDF a Excel?', a: 'Abre aquí el PDF del extracto. El convertidor encuentra las filas y los huecos entre columnas y reconstruye la tabla celda a celda. Revisa los importes en la vista previa y descarga el archivo de Excel. El PDF nunca sale de tu dispositivo.' },
    { q: '¿Los números serán números reales en Excel?', a: 'Los valores en formato 1,250.50 se convierten en números, así SUMA y los gráficos funcionan al momento. Los valores con letras, símbolos de moneda, ceros a la izquierda o coma decimal (1.250,50) se guardan como texto para no perder nada.' },
    { q: '¿Cada página del PDF tiene su propia hoja de Excel?', a: 'Sí. Cada página con una tabla va a su propia hoja del mismo libro, con el nombre de tu archivo y el número de página.' },
    { q: '¿Puedo editar la tabla antes de descargar?', a: 'Sí. Haz clic en cualquier celda de la tabla de vista previa para corregirla. Tus cambios se incluyen en el archivo de Excel o CSV.' },
    { q: '¿Puedo convertir varios PDF en un solo Excel?', a: 'Sí. Suelta todos los PDF a la vez y pulsa «Todo en un archivo Excel» para obtener un libro con cada página en su propia hoja.' },
    { q: '¿Puedo convertir PDF a Excel online en el móvil?', a: 'Sí. Este convertidor de PDF a Excel online funciona en el navegador de Android y iPhone. Elige el PDF entre tus archivos y descarga la hoja de Excel, sin instalar nada.' },
    { q: '¿Se sube el PDF a un servidor?', a: 'No. El archivo se abre y se convierte en tu navegador y nunca sale de tu dispositivo.' },
    { q: '¿Admite PDF protegidos con contraseña?', a: 'Todavía no. Quita primero la contraseña y luego abre el archivo aquí.' },
  ],
};

export default content;

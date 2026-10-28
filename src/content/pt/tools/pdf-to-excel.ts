import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'PDF para Excel – Converter PDF em Excel grátis',
  description:
    'Converta PDF para Excel online grátis. Transforme tabelas de PDFs digitais e digitalizados em planilhas editáveis, uma por página. Sem cadastro e sem upload.',
  h1: 'Conversor de PDF para Excel',
  lead: 'Converta PDF para Excel online e grátis — tabelas de PDFs digitais e digitalizados, prontas para editar.',
  navLabel: 'PDF para Excel',
  cardText: 'Transforme as tabelas de um PDF em uma planilha editável.',
  howTo: {
    title: 'Como converter PDF para Excel',
    steps: [
      '<strong>Adicione seu PDF.</strong> Solte na caixa ou clique em “Escolher PDF”. Todas as páginas são lidas automaticamente.',
      '<strong>Confira as tabelas.</strong> Cada página aparece como uma tabela. Clique em qualquer célula para corrigir antes de baixar.',
      '<strong>Baixe o Excel.</strong> Receba um arquivo .xlsx com uma planilha por página, ou um CSV.',
    ],
  },
  features: {
    title: 'Um conversor de PDF para Excel que respeita suas tabelas',
    items: [
      { title: 'PDF digital lido com exatidão', text: 'Se o PDF tem camada de texto, os números são tirados direto dela — sem adivinhação de OCR.' },
      { title: 'PDF digitalizado também', text: 'Páginas que são só imagem são lidas com OCR e divididas em linhas e colunas.' },
      { title: 'Números de verdade', text: 'Valores como 1,250.50 viram números no Excel, então SOMA e gráficos funcionam na hora.' },
      { title: 'Edite antes de exportar', text: 'Corrija qualquer célula direto na prévia da tabela antes de baixar.' },
      { title: 'Uma planilha por página', text: 'Cada página vai para uma planilha própria, então PDFs longos continuam fáceis de navegar.' },
      { title: 'Privado', text: 'Extratos bancários ficam no seu aparelho. O PDF nunca é enviado.' },
    ],
  },
  sections: [
    {
      h2: 'Um conversor de PDF para Excel grátis que recria tabelas de verdade',
      paragraphs: [
        'Copiar uma tabela de um PDF geralmente dá errado. Cole em uma planilha e você recebe uma coluna comprida e bagunçada, números grudados nos nomes e linhas partidas. Este <strong>conversor de PDF para Excel</strong> faz do jeito certo: olha onde cada palavra está na página, encontra as linhas e os espaços entre colunas e recria a tabela célula por célula em uma planilha do Excel de verdade.',
        'Você pode <strong>converter PDF para Excel grátis</strong>, sem cadastro, sem marca d’água, sem limite de páginas e sem limite diário. É um conversor de <strong>PDF para Excel online grátis</strong> de verdade, sem teste nem tela de upgrade: converta uma nota fiscal de uma página ou um extrato de 100, quantas vezes precisar.',
      ],
    },
    {
      h2: 'Como funciona a conversão de PDF para Excel',
      paragraphs: [
        'Cada página do PDF é tratada separadamente. Primeiro, o conversor coleta todas as palavras da página com a posição exata. Palavras na mesma linha horizontal formam uma linha da tabela. Depois, ele procura espaços verticais que atravessam a tabela inteira — esses espaços são as divisões entre colunas. Cada palavra vai para a célula certa e as colunas do arquivo do Excel se ajustam ao conteúdo.',
        'Como as colunas são encontradas pelo espaço e não pelas linhas desenhadas, tabelas sem bordas convertem tão bem quanto tabelas com grade. Páginas sem tabela são ignoradas, então a pasta de trabalho não fica cheia de planilhas vazias.',
      ],
    },
    {
      h2: 'Funciona com PDF digital e digitalizado',
      paragraphs: [
        'A maioria dos PDFs de bancos, sistemas de contabilidade e sites é <strong>digital</strong>: tem texto de verdade. Nessas páginas os números são lidos direto do arquivo, exatamente como estão, então não há erro de reconhecimento e a conversão é quase instantânea.',
        'PDFs <strong>digitalizados</strong> são diferentes — cada página é só uma imagem. Nessas páginas a ferramenta aplica primeiro o OCR (reconhecimento óptico de caracteres), com detecção automática do idioma, e depois encontra a tabela. Arquivos mistos também funcionam, e um aviso mostra quando o OCR foi usado, para você saber quais números conferir.',
      ],
    },
    {
      h2: 'Números de verdade, prontos para fórmulas',
      paragraphs: [
        'Quando você converte PDF para Excel aqui, valores simples como 42, 3.75 ou 1,250.50 são salvos como números, não como texto. SOMA, MÉDIA, classificação, filtros, tabelas dinâmicas e gráficos funcionam assim que você abre o arquivo.',
        'Valores que não podem mudar ficam como estão: números de conta e códigos que começam com zero e valores com símbolo de moeda (como R$), letras ou unidades. Por enquanto, números com vírgula decimal (1.250,50) também ficam como texto; no Excel, você pode convertê-los com Dados → Texto para Colunas. Nada se perde.',
      ],
    },
    {
      h2: 'Confira cada página antes de baixar',
      paragraphs: ['Cada página do PDF aparece como uma tabela editável com o número da página. Clique em qualquer célula para corrigir um valor, e as mudanças vão direto para o arquivo. Quando tudo estiver certo, escolha como quer:'],
      list: [
        '<strong>Excel (.xlsx):</strong> uma planilha por página, com o nome do arquivo e o número da página. Abre no Microsoft Excel, Google Planilhas, LibreOffice Calc e Numbers.',
        '<strong>CSV:</strong> todas as páginas em um arquivo, com uma linha vazia entre elas — ideal para importar em outros sistemas.',
        '<strong>Copiar:</strong> cole a tabela direto em uma planilha aberta, e cada valor cai na coluna certa.',
      ],
    },
    {
      h2: 'Converta vários PDFs em um único arquivo do Excel',
      paragraphs: [
        'Tem um ano de extratos mensais ou uma pasta de notas fiscais? Solte todos os PDFs de uma vez. Cada arquivo é convertido separadamente e <strong>Tudo em um arquivo Excel</strong> coloca cada página de cada PDF em uma única pasta de trabalho, cada uma na sua planilha.',
      ],
    },
    {
      h2: 'Por que não só copiar e colar?',
      paragraphs: [
        'Um PDF não guarda uma tabela como linhas e colunas; guarda pedaços de texto em posições da página. Por isso, selecionar uma tabela e colar no Excel joga tudo em uma coluna ou bagunça a ordem. Arrumar à mão — separar células, mover valores, redigitar o que deu errado — pode levar mais tempo do que digitar a tabela do zero.',
        'Um conversor próprio lê essas posições e devolve cada valor à sua célula, então a planilha já está pronta para ordenar, filtrar e somar. Se dá para converter PDF para Excel grátis em segundos, não faz sentido gastar uma hora copiando e colando.',
      ],
    },
    {
      h2: 'O que as pessoas convertem de PDF para Excel',
      list: [
        'Extratos bancários e faturas de cartão, para ordenar, somar e categorizar lançamentos.',
        'Notas fiscais, pedidos e boletos, para conferir valores e controlar pagamentos.',
        'Tabelas de preços, catálogos de produtos e relatórios de estoque.',
        'Relatórios financeiros, balanços e demonstrativos anuais.',
        'Horários, escalas, listas de presença e notas.',
        'Resultados de pesquisas e tabelas de dados de estudos e relatórios públicos.',
      ],
    },
    {
      h2: 'Converta PDF para Excel online — sem programa',
      paragraphs: [
        'Software de PDF para desktop é caro e algumas ferramentas online mandam o arquivo por e-mail ou param depois de duas páginas. Este conversor de PDF para Excel online só precisa de um navegador. Funciona no Chrome, Edge, Firefox e Safari no Windows, Mac, Linux, Chromebook, Android e iPhone, então você pode converter PDF para Excel online do computador do escritório ou direto do celular.',
        'Depois da primeira visita, o motor fica em cache no navegador, então na próxima vez este conversor online de PDF para Excel abre ainda mais rápido.',
      ],
    },
    {
      h2: 'Privado: seus extratos não saem do aparelho',
      paragraphs: [
        'Extratos bancários, holerites e notas fiscais têm exatamente o tipo de informação que você não deveria enviar para um servidor desconhecido. Aqui, o PDF é aberto, lido e transformado em Excel inteiramente dentro do navegador. O arquivo nunca sai do seu computador ou celular, nada é guardado online e não existe conta que possa ser invadida. Por isso também pode ser grátis e ilimitado: não há custo de servidor para limitar.',
      ],
    },
    {
      h2: 'Dicas para o melhor arquivo do Excel',
      list: [
        'Tire a senha de um PDF protegido antes de abrir aqui.',
        'Em PDF digitalizado, uma digitalização limpa em 300 dpi ou mais dá números bem mais precisos.',
        'Tabelas com colunas claras, como extratos e notas fiscais, dão os melhores resultados. Células mescladas e layouts complexos podem precisar de alguns ajustes.',
        'Sempre confira totais e números importantes das páginas digitalizadas antes de usar.',
      ],
    },
    {
      h2: 'Precisa de texto simples ou tem a foto de uma tabela?',
      paragraphs: [
        'Para pegar o texto simples de um PDF em vez de tabelas, use o <a href="/pdf-to-text">conversor de PDF para texto</a>. Para fotos e prints de tabelas, o <a href="/jpg-to-excel">conversor de JPG para Excel</a> recria tudo como planilha, e o <a href="/">conversor de imagem para texto</a> copia o texto de qualquer imagem.',
      ],
    },
  ],
  faq: [
    { q: 'Como converter PDF para Excel?', a: 'Solte seu PDF na caixa acima ou clique em “Escolher PDF”. Todas as páginas são lidas automaticamente e aparecem como tabelas editáveis. Confira as células e baixe um arquivo do Excel (.xlsx) com uma planilha por página, ou um CSV.' },
    { q: 'Como converter PDF para Excel grátis?', a: 'Use este conversor de PDF para Excel grátis. Não tem cadastro, marca d’água, limite de páginas nem limite diário, e funciona com PDF digital e digitalizado.' },
    { q: 'Dá para converter PDF digitalizado para Excel?', a: 'Sim. Páginas sem camada de texto são lidas com OCR e depois divididas em linhas e colunas. Confira bem os números em digitalizações de baixa qualidade.' },
    { q: 'Como passar um extrato bancário em PDF para Excel?', a: 'Abra o PDF do extrato aqui. O conversor encontra as linhas e os espaços entre colunas e recria a tabela célula por célula. Confira os valores na prévia e baixe o arquivo do Excel. O PDF nunca sai do seu aparelho.' },
    { q: 'Os números viram números de verdade no Excel?', a: 'Valores no formato 1,250.50 viram números, então SOMA e gráficos funcionam na hora. Valores com letras, símbolo de moeda, zeros à esquerda ou vírgula decimal (1.250,50) ficam como texto para nada se perder.' },
    { q: 'Cada página do PDF vira uma planilha do Excel?', a: 'Sim. Cada página com tabela vai para uma planilha própria na mesma pasta de trabalho, com o nome do arquivo e o número da página.' },
    { q: 'Posso editar a tabela antes de baixar?', a: 'Sim. Clique em qualquer célula da prévia para corrigir. As mudanças entram no arquivo do Excel ou CSV.' },
    { q: 'Posso converter vários PDFs em um único Excel?', a: 'Sim. Solte todos os PDFs de uma vez e clique em “Tudo em um arquivo Excel” para receber uma pasta de trabalho com cada página em uma planilha própria.' },
    { q: 'Dá para converter PDF para Excel online no celular?', a: 'Sim. Este conversor de PDF para Excel online funciona no navegador do Android e do iPhone. Escolha o PDF nos seus arquivos e baixe a planilha, sem instalar nada.' },
    { q: 'O PDF é enviado para um servidor?', a: 'Não. O arquivo é aberto e convertido no navegador e nunca sai do seu aparelho.' },
    { q: 'Aceita PDF protegido por senha?', a: 'Ainda não. Tire a senha primeiro e depois abra o arquivo aqui.' },
  ],
};

export default content;

import type { ToolContent } from '../../types';

const content: ToolContent = {
  title: 'PPT para texto – Converter PowerPoint em texto grátis',
  description:
    'Converta PPT em texto online grátis. Extraia o texto e as anotações de cada slide do PowerPoint (PPTX, ODP) em segundos. Ilimitado, sem cadastro e sem upload.',
  h1: 'Conversor de PPT para texto',
  lead: 'Converta PPT em texto online e grátis — cada slide e as anotações do apresentador como texto simples.',
  navLabel: 'PPT para texto',
  cardText: 'Extraia o texto e as anotações de slides PPTX.',
  howTo: {
    title: 'Como converter PPT em texto',
    steps: [
      '<strong>Adicione sua apresentação.</strong> Solte um ou mais arquivos .pptx ou .odp na caixa.',
      '<strong>Receba cada slide.</strong> O texto sai slide por slide com o número de cada um, e as anotações do apresentador entram embaixo de cada slide automaticamente.',
      '<strong>Copie ou baixe.</strong> Copie o texto, salve em TXT ou baixe várias apresentações em um ZIP.',
    ],
  },
  features: {
    title: 'Um conversor de PPT para texto que mantém os slides em ordem',
    items: [
      { title: 'Ordem dos slides mantida', text: 'O texto segue a ordem real dos slides, mesmo que eles tenham sido reorganizados.' },
      { title: 'Anotações do apresentador', text: 'As anotações entram embaixo de cada slide automaticamente.' },
      { title: 'Tabelas e marcadores', text: 'Os marcadores são mantidos e linhas de tabela viram linhas separadas por tabulação.' },
      { title: 'Instantâneo', text: 'Sem OCR — o texto é lido direto do arquivo em um segundo.' },
      { title: 'Em lote', text: 'Converta uma pasta inteira de apresentações de uma vez e baixe um ZIP.' },
      { title: 'Privado', text: 'As apresentações são lidas no navegador e nunca enviadas.' },
    ],
  },
  sections: [
    {
      h2: 'Um conversor de PPT para texto grátis para cada slide',
      paragraphs: [
        'Tirar as palavras de uma apresentação do PowerPoint dá um trabalho enorme. Você clica em cada caixa de texto, copia, troca de janela, cola e repete em cada slide — depois faz tudo de novo com as anotações do apresentador. Este <strong>conversor de PPT para texto</strong> faz tudo de uma vez: solte a apresentação e receba o texto de todos os slides, em ordem, como texto simples e limpo.',
        'É totalmente grátis, sem cadastro, sem marca d’água e sem limite de slides ou arquivos. Como é um <strong>conversor de PPT para texto online</strong>, não há nada para instalar e você nem precisa ter o PowerPoint no computador. Abra a página, adicione o arquivo e converta PPT em texto em um segundo.',
      ],
    },
    {
      h2: 'Por que converter PPT em texto?',
      paragraphs: ['Slides são ótimos para apresentar, mas ruins para todo o resto. Texto simples é fácil de editar, pesquisar, compartilhar e reaproveitar. As pessoas convertem PPT em texto para:'],
      list: [
        'Transformar os slides da aula em resumos para estudar e grifar.',
        'Reaproveitar o conteúdo de uma apresentação em um relatório, post, material ou e-mail.',
        'Colar o texto em um tradutor, corretor ou assistente de IA para resumir.',
        'Tirar as anotações do apresentador como roteiro para uma palestra, webinar ou vídeo.',
        'Contar palavras, revisar ou checar a ortografia da apresentação inteira de uma vez.',
        'Procurar um dado, um número ou uma citação em apresentações antigas.',
      ],
    },
    {
      h2: 'Anotações do apresentador incluídas automaticamente',
      paragraphs: [
        'As anotações embaixo dos slides costumam ter mais detalhes que os próprios slides — a explicação completa, os pontos principais, o roteiro. A maioria das ferramentas ignora isso. Este conversor lê as anotações de cada slide e coloca logo abaixo do texto daquele slide, marcadas como “Notas:”, para você sempre saber de qual slide elas são. Não precisa ativar nada: se a apresentação tem anotações, você recebe.',
      ],
    },
    {
      h2: 'Por que não copiar o texto do PowerPoint à mão?',
      paragraphs: [
        'O PowerPoint guarda cada título, lista e legenda em uma caixa de texto separada, então não existe “selecionar tudo” para a apresentação inteira. Copiar slide por slide é lento, fácil de embaralhar a ordem, e você ainda perde as anotações se não mudar para o modo de anotações. O modo de estrutura ajuda um pouco, mas pula caixas de texto que não são espaços reservados e todas as tabelas.',
        'Uma ferramenta que converte PPT em texto lê cada caixa de texto, tabela e anotação de uma vez, mantém a ordem e identifica cada slide, então uma apresentação de 60 slides vira um documento organizado em um segundo.',
      ],
    },
    {
      h2: 'O que você recebe de cada slide',
      list: [
        '<strong>Marcadores de slide:</strong> cada slide começa com “— Slide 1 —”, “— Slide 2 —” e assim por diante, na ordem da apresentação.',
        '<strong>Títulos e caixas de texto:</strong> todo o texto do slide, forma por forma, inclusive formas agrupadas.',
        '<strong>Marcadores:</strong> itens com marcador ou numerados começam com “•”, para as listas continuarem legíveis.',
        '<strong>Tabelas:</strong> cada linha vira uma linha com as células separadas por tabulação, pronta para colar em uma planilha.',
        '<strong>Anotações do apresentador:</strong> entram embaixo de cada slide quando a apresentação tem.',
        '<strong>Fica de fora:</strong> número do slide, data e rodapé, além de texto dentro de imagens, gráficos e SmartArt.',
      ],
    },
    {
      h2: 'Como funciona o conversor de PPT para texto',
      paragraphs: [
        'Um arquivo .pptx é um arquivo zip que guarda cada slide como XML estruturado. O conversor abre esse arquivo no navegador, segue a lista de slides da própria apresentação para a ordem sempre estar certa e lê o texto direto de cada slide e página de anotações. Não há OCR nem adivinhação, então cada palavra sai exatamente como foi digitada — mesmo em uma apresentação de 150 slides, o resultado leva cerca de um segundo.',
        'O texto aparece em uma caixa editável com contagem de palavras e caracteres. Corrija o que quiser e depois copie ou salve em TXT.',
      ],
    },
    {
      h2: 'PPTX, ODP e outros formatos de apresentação',
      paragraphs: [
        'Você pode converter arquivos <strong>PPTX</strong>, <strong>PPTM</strong>, <strong>PPSX</strong> e <strong>POTX</strong> do Microsoft PowerPoint, e arquivos <strong>ODP</strong> e <strong>OTP</strong> do LibreOffice Impress e OpenOffice.',
        'Usa o Google Apresentações? Escolha Arquivo → Fazer download → Microsoft PowerPoint (.pptx) e solte esse arquivo aqui. No Keynote da Apple, use Arquivo → Exportar para → PowerPoint. Em qualquer caso, o resultado é o mesmo texto limpo.',
      ],
    },
    {
      h2: 'Arquivos .ppt antigos',
      paragraphs: [
        'O formato binário antigo .ppt (PowerPoint 97–2003) não é compatível. Abra o arquivo no PowerPoint, Google Apresentações ou LibreOffice Impress, salve como .pptx e converta aqui.',
      ],
    },
    {
      h2: 'Converta várias apresentações de uma vez',
      paragraphs: [
        'Tem as apresentações de um semestre inteiro ou uma pasta de apresentações de vendas? Solte todas de uma vez. Cada arquivo é convertido separadamente com a quantidade de slides, e você pode usar <strong>Copiar tudo</strong> ou baixar todos os TXT juntos em um ZIP.',
      ],
    },
    {
      h2: 'Converta PPT em texto online em qualquer aparelho',
      paragraphs: [
        'Este conversor de PPT para texto online funciona no Chrome, Edge, Firefox e Safari no Windows, Mac, Linux, Chromebook, Android e iPhone. Recebeu uma apresentação por e-mail ou WhatsApp no celular? Salve, abra esta página, toque na caixa e escolha o arquivo — o texto dos slides fica pronto para copiar na hora, sem o app do PowerPoint.',
      ],
    },
    {
      h2: 'Funciona com qualquer idioma',
      paragraphs: [
        'Como o texto é lido direto do arquivo, qualquer idioma sai certo: português, inglês, árabe, chinês, japonês, russo e qualquer outro alfabeto. Os TXT são salvos em UTF-8, então até o Bloco de Notas do Windows mostra acentos e cedilha corretamente.',
      ],
    },
    {
      h2: 'Privado: seus slides ficam no seu aparelho',
      paragraphs: [
        'Apresentações costumam ter planos ainda não divulgados, nomes de clientes, números de vendas ou conteúdo de provas. A maioria dos conversores online envia o arquivo para um servidor. Este não: a apresentação é aberta e lida dentro do navegador e nunca sai do seu computador ou celular. Nada fica guardado online, e por isso a ferramenta pode continuar grátis e ilimitada.',
      ],
    },
    {
      h2: 'Dicas para os melhores resultados',
      list: [
        'Se o texto de um slide faz parte de uma imagem, tire um print desse slide e use print para texto.',
        'Slides ocultos também são lidos; apague antes se não quiser o texto deles.',
        'Precisa dos slides em PDF primeiro? Exporte pelo PowerPoint e use PDF para texto.',
      ],
    },
    {
      h2: 'Texto dentro de imagens dos slides e outros arquivos',
      paragraphs: [
        'Texto que faz parte de uma imagem no slide não pode ser extraído assim. Tire um print do slide e use <a href="/screenshot-to-text">print para texto</a>. Para documentos, o <a href="/word-to-text">conversor de Word para texto</a> funciona do mesmo jeito, e o <a href="/pdf-to-text">conversor de PDF para texto</a> lê arquivos PDF, inclusive digitalizados.',
      ],
    },
  ],
  faq: [
    { q: 'Como converter PPT em texto?', a: 'Solte um ou mais arquivos .pptx ou .odp na caixa acima. O texto de cada slide sai em ordem, com as anotações do apresentador embaixo de cada um. Copie, salve em TXT ou baixe várias apresentações em um ZIP.' },
    { q: 'Este conversor de PPT para texto é grátis?', a: 'Sim. É totalmente grátis, sem cadastro, sem marca d’água e sem limite de slides ou arquivos.' },
    { q: 'Quais formatos do PowerPoint são aceitos?', a: 'PPTX, PPTM, PPSX e POTX do PowerPoint, e ODP e OTP do LibreOffice Impress. Arquivos .ppt antigos precisam ser salvos como .pptx antes.' },
    { q: 'Dá para pegar as anotações do apresentador de um PowerPoint?', a: 'Sim. Se a apresentação tem anotações, elas aparecem embaixo do texto de cada slide automaticamente, marcadas como “Notas:”.' },
    { q: 'A ordem dos slides é mantida?', a: 'Sim. O texto segue a ordem real dos slides, com o número de cada um, mesmo que eles tenham sido reorganizados.' },
    { q: 'Dá para converter um arquivo .ppt antigo em texto?', a: 'Não diretamente. Abra o arquivo .ppt no PowerPoint, Google Apresentações ou LibreOffice Impress, salve como .pptx e converta aqui.' },
    { q: 'Ele extrai texto de imagens, gráficos ou SmartArt dos slides?', a: 'Não. Só o texto real de caixas de texto, títulos, tabelas e anotações é extraído. Para texto dentro de uma imagem, tire um print do slide e use print para texto.' },
    { q: 'Funciona com o Google Apresentações?', a: 'Sim. No Google Apresentações escolha Arquivo → Fazer download → Microsoft PowerPoint (.pptx) e abra esse arquivo aqui.' },
    { q: 'Dá para converter PPT em texto online no celular?', a: 'Sim. Este conversor de PPT para texto online funciona no navegador do Android e do iPhone. Salve a apresentação no celular, abra esta página e escolha o arquivo.' },
    { q: 'Posso converter várias apresentações de uma vez?', a: 'Sim. Solte quantos arquivos quiser e baixe todos os TXT juntos em um ZIP.' },
    { q: 'Minha apresentação é enviada?', a: 'Não. Tudo é lido dentro do navegador e o arquivo nunca sai do seu aparelho.' },
  ],
};

export default content;

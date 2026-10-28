import type { StaticContent } from '../types';
import type { StaticId } from '../../i18n/routes';
import { SITE } from '../../config/site';

export const pages: Record<StaticId, StaticContent> = {
  about: {
    title: `Sobre o ${SITE.name}`,
    description: `O ${SITE.name} é um conversor de imagem para texto grátis e ilimitado que funciona inteiramente no seu navegador.`,
    h1: `Sobre o ${SITE.name}`,
    sections: [
      {
        h2: 'Por que criamos isto',
        paragraphs: [
          'Tirar o texto de uma imagem deveria ser rápido, grátis e privado. A maioria das ferramentas de OCR online envia seus arquivos para um servidor, limita quantos você pode converter por dia e pede cadastro ou pagamento. Queríamos uma ferramenta sem nada disso.',
          `O ${SITE.name} lê o texto de imagens, prints e PDFs direto no seu navegador. Seus arquivos nunca são enviados, então não há nada para limitar nem para guardar.`,
        ],
      },
      {
        h2: 'O que você pode fazer aqui',
        list: [
          '<a href="/">Imagem para texto</a> — copie o texto de fotos e prints.',
          '<a href="/jpg-to-word">JPG para Word</a> — transforme imagens em documentos do Word editáveis.',
          '<a href="/jpg-to-excel">JPG para Excel</a> — recrie tabelas de imagens como planilhas.',
          '<a href="/image-to-pdf">Imagem para PDF</a> — junte imagens em um único PDF.',
          '<a href="/text-to-pdf">Texto para PDF</a> — transforme texto simples em um PDF limpo.',
          '<a href="/pdf-to-text">PDF para texto</a> — extraia o texto de PDFs digitais e digitalizados.',
        ],
      },
      {
        h2: 'Como funciona',
        paragraphs: [
          'As ferramentas usam tecnologia de código aberto, incluindo o motor de OCR Tesseract compilado para rodar em navegadores. O motor e os arquivos de idioma são baixados uma vez e ficam em cache; depois disso, o seu próprio aparelho faz todo o trabalho.',
        ],
      },
    ],
  },
  contact: {
    title: `Contato – ${SITE.name}`,
    description: `Fale com a equipe do ${SITE.name} sobre sugestões, erros ou parcerias.`,
    h1: 'Fale conosco',
    sections: [
      {
        h2: 'Queremos ouvir você',
        paragraphs: [
          `Encontrou um erro, tem uma ideia de recurso novo ou quer avisar sobre um texto mal reconhecido? Escreva para <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`,
          'Ao relatar um problema de reconhecimento, descreva a imagem em vez de enviar documentos pessoais. Lemos todas as mensagens e costumamos responder em poucos dias.',
        ],
      },
    ],
  },
  'privacy-policy': {
    title: 'Política de privacidade',
    description: `Como o ${SITE.name} trata seus dados: os arquivos são processados no navegador e nunca enviados.`,
    h1: 'Política de privacidade',
    updated: '28 de outubro de 2026',
    sections: [
      {
        h2: 'Resumindo',
        paragraphs: [
          `O ${SITE.name} processa suas imagens, PDFs e textos <strong>dentro do seu navegador</strong>. Seus arquivos e o texto encontrado neles não são enviados para os nossos servidores nem para os de ninguém.`,
        ],
      },
      {
        h2: 'Arquivos que você adiciona',
        paragraphs: [
          'Quando você adiciona um arquivo, ele é lido por um código que roda no seu aparelho. O reconhecimento de texto, a criação de documentos e os downloads acontecem localmente. Nunca recebemos, vemos nem guardamos seus arquivos ou o conteúdo deles.',
          'Se você fechar ou recarregar a página, os arquivos e resultados somem, a menos que você mesmo os tenha salvado.',
        ],
      },
      {
        h2: 'Arquivos que o seu navegador baixa',
        paragraphs: [
          'Para ler texto, seu navegador baixa o motor de OCR e os dados de idioma da rede pública de distribuição de conteúdo jsDelivr (cdn.jsdelivr.net) na primeira vez que são necessários. Como qualquer site, essa rede recebe informações padrão da requisição, como seu endereço IP e o tipo de navegador. Ela não recebe seus arquivos.',
        ],
      },
      {
        h2: 'Preferências salvas no seu aparelho',
        paragraphs: [
          'Guardamos algumas configurações, como o modo escuro, no armazenamento local do navegador para lembrá-las na próxima visita. Elas nunca saem do seu aparelho e você pode apagá-las nas configurações do navegador.',
        ],
      },
      {
        h2: 'Hospedagem e registros',
        paragraphs: [
          'O site é hospedado na Cloudflare. A Cloudflare processa dados padrão das requisições (como endereços IP) para entregar as páginas e proteger o site contra abusos.',
        ],
      },
      {
        h2: 'Publicidade e estatísticas',
        paragraphs: [
          'No momento o site não mostra anúncios nem usa cookies de estatísticas. Se no futuro adicionarmos publicidade (como o Google AdSense) ou estatísticas, atualizaremos esta política antes e, quando a lei exigir (como a LGPD), pediremos o seu consentimento.',
        ],
      },
      {
        h2: 'Contato',
        paragraphs: [`Dúvidas sobre privacidade? Escreva para <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`],
      },
    ],
  },
  terms: {
    title: 'Termos de uso',
    description: `Os termos que valem quando você usa o ${SITE.name}.`,
    h1: 'Termos de uso',
    updated: '28 de outubro de 2026',
    sections: [
      {
        h2: 'Uso das ferramentas',
        paragraphs: [
          `O ${SITE.name} pode ser usado de graça para fins pessoais e comerciais. Você é responsável pelos arquivos que processa e por ter o direito de usá-los.`,
        ],
      },
      {
        h2: 'Sem garantia de precisão',
        paragraphs: [
          'O reconhecimento de texto nunca é perfeito. Sempre confira os resultados antes de confiar neles, principalmente em documentos jurídicos, médicos ou financeiros. As ferramentas são oferecidas “no estado em que se encontram”, sem garantia.',
        ],
      },
      {
        h2: 'Limitação de responsabilidade',
        paragraphs: [
          'Na medida permitida pela lei, não nos responsabilizamos por perdas ou danos decorrentes do uso do site ou dos seus resultados.',
        ],
      },
      {
        h2: 'Alterações',
        paragraphs: ['Podemos atualizar estes termos de tempos em tempos. A data no topo mostra quando foram alterados pela última vez.'],
      },
    ],
  },
};

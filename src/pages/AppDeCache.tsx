import React from 'react';
import { TermPage } from './TermPage';

const AppDeCache: React.FC = () => (
  <TermPage
    path="/app-de-cache"
    badge="Controle de cachê"
    h1Highlight="App de cachê"
    h1="para saber quanto você realmente ganha"
    intro="Registre o cachê de cada show, lance as despesas, pague a equipe e veja o lucro líquido de verdade. Com aviso automático do que ainda está pendente."
    title="App de cachê para músicos — controle de pagamentos | SouArtista"
    description="App para controlar cachê de show: valor recebido, despesas, divisão com a banda, status pendente ou recebido e lucro líquido automático para músicos e DJs."
    keywords="app de cachê, controle de cachê, cachê de músico, como controlar cachê, divisão de cachê de banda, app financeiro para músico, receber cachê, cachê pendente, SouArtista"
    breadcrumbName="App de cachê"
    benefits={[
      { title: 'Pendente ou recebido', text: 'Cada show tem status de pagamento e o painel mostra o total em aberto, com lembretes semanais dos cachês atrasados.' },
      { title: 'Lucro líquido real', text: 'O app desconta despesas, equipe e impostos e mostra quanto de fato sobrou naquele show.' },
      { title: 'Divisão com a banda', text: 'Cadastre os músicos do show com o valor de cada um e acompanhe quem já foi pago.' },
    ]}
    sections={[
      {
        heading: 'O problema do cachê "de cabeça"',
        paragraphs: [
          'Muito músico recebe bem e mesmo assim termina o mês sem dinheiro. O motivo raramente é o valor do show: é a falta de registro do que entrou, do que saiu e do que ficou para receber.',
          'Sem controle, três coisas acontecem: você esquece de cobrar, negocia mal o próximo show e não sabe quais eventos realmente compensam.',
        ],
      },
      {
        heading: 'O que o SouArtista controla',
        paragraphs: ['Tudo que envolve o dinheiro do show, ligado à data na agenda.'],
        bullets: [
          'Valor do cachê e forma de pagamento',
          'Despesas: combustível, pedágio, alimentação, som, hospedagem',
          'Pagamento dos músicos de apoio e do técnico',
          'Impostos e simulação de MEI, CNPJ ou RPA',
          'Status pendente/recebido com notificação',
          'Relatórios por período e ranking dos locais mais lucrativos',
        ],
      },
      {
        heading: 'Antes de aceitar o show, simule',
        paragraphs: [
          'O simulador financeiro mostra o resultado do show antes de você responder ao contratante. Você negocia com número na mão, e não no chute.',
        ],
      },
    ]}
    faqs={[
      { question: 'Como controlar o cachê dos meus shows?', answer: 'Registre cada show com valor, despesas e equipe em um app como o SouArtista. Ele calcula o lucro líquido automaticamente e marca se o cachê já foi recebido ou está pendente.' },
      { question: 'O app divide o cachê da banda?', answer: 'Sim. Você cadastra os músicos do show com o valor de cada um e o app calcula quanto sobra para você depois de pagar a equipe.' },
      { question: 'Dá para saber quanto ainda tenho a receber?', answer: 'Sim. O painel mostra o total de cachês pendentes e o app envia lembretes semanais dos pagamentos em aberto.' },
      { question: 'Funciona para DJ e músico freelancer?', answer: 'Sim. Existe um Modo Músico para quem toca com vários artistas e precisa acompanhar os próprios cachês separadamente.' },
    ]}
    relatedLinks={[
      { label: 'Como repartir o cachê da banda', to: '/blog/como-repartir-cache-de-banda' },
      { label: 'Como receber o cachê sem tomar calote', to: '/blog/como-receber-cache-sem-calote' },
      { label: 'Quanto cobrar por show', to: '/blog/quanto-cobrar-por-show-como-definir-seu-cache' },
    ]}
  />
);

export default AppDeCache;

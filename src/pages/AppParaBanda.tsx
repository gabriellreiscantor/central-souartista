import React from 'react';
import { TermPage } from './TermPage';

const AppParaBanda: React.FC = () => (
  <TermPage
    path="/app-para-banda"
    badge="Gestão de banda"
    h1Highlight="App para banda"
    h1="organizar shows, equipe e dinheiro"
    intro="Shows, músicos, cachês, despesas, contratos e rider técnico da sua banda em um só lugar — com a conta do lucro feita automaticamente."
    title="App para banda: gestão de shows, equipe e cachês | SouArtista"
    description="App de gestão para bandas: agenda de shows, escalação de músicos, divisão de cachê, despesas, contratos, rider técnico e relatórios financeiros automáticos."
    keywords="app para banda, gestão de banda, organizar banda, divisão de cachê de banda, agenda de banda, app para grupo musical, produção de shows, rider técnico, contrato de show, SouArtista"
    breadcrumbName="App para banda"
    benefits={[
      { title: 'Equipe por show', text: 'Escale os músicos de cada data com o valor combinado e acompanhe quem já recebeu.' },
      { title: 'Documentos prontos', text: 'Contratos personalizáveis, rider técnico e mapa de palco gerados em PDF e enviados ao contratante.' },
      { title: 'Números da banda', text: 'Relatórios de faturamento, despesas e lucro por período, prontos para dividir com o grupo.' },
    ]}
    sections={[
      {
        heading: 'Banda sem gestão perde dinheiro em silêncio',
        paragraphs: [
          'A maior parte dos conflitos dentro de uma banda não é musical: é sobre data confirmada sem aviso, cachê dividido de forma diferente do combinado e despesa que ninguém anotou.',
          'Quando a produção fica na memória de uma pessoa só, o grupo trava toda vez que essa pessoa some.',
        ],
      },
      {
        heading: 'O que a banda resolve no SouArtista',
        paragraphs: ['Uma central de produção para o grupo inteiro.'],
        bullets: [
          'Agenda de shows, ensaios e passagens de som',
          'Escalação de músicos fixos e freelancers por data',
          'Divisão de cachê com valor por músico e status de pagamento',
          'Despesas de locomoção, som, hospedagem e alimentação',
          'Contratos prontos para bares, eventos privados e shows maiores',
          'Rider técnico e mapa de palco enviados junto com o contrato',
          'Relatórios em PDF para prestar contas ao grupo',
        ],
      },
      {
        heading: 'Rotina de produção que funciona',
        paragraphs: [
          'Confirme a equipe no início da semana, envie rider e contrato dos próximos eventos, cobre os cachês pendentes na sexta e lance as despesas logo depois de cada show. Com tudo registrado, a reunião da banda deixa de ser discussão e vira leitura de relatório.',
        ],
      },
    ]}
    faqs={[
      { question: 'Qual o melhor app para gerenciar uma banda?', answer: 'O SouArtista reúne agenda de shows, escalação de músicos, divisão de cachê, despesas, contratos e rider técnico no mesmo aplicativo, com cálculo automático do lucro de cada show.' },
      { question: 'Como dividir o cachê entre os músicos?', answer: 'Primeiro desconte os custos do show; depois aplique o modelo combinado (divisão igual, por função ou por participação). No app, o valor de cada músico fica registrado por show.' },
      { question: 'A banda toda precisa pagar assinatura?', answer: 'Não. Quem produz os shows centraliza a gestão; os músicos de apoio podem usar o Modo Músico para acompanhar as próprias datas e pagamentos.' },
      { question: 'O app gera contrato e rider?', answer: 'Sim. Há contratos prontos e personalizáveis, além de rider técnico e mapa de palco exportáveis em PDF.' },
    ]}
    relatedLinks={[
      { label: 'Como organizar a equipe de apoio', to: '/blog/como-organizar-equipe-de-apoio-de-musicos' },
      { label: 'Contrato de show: 10 cláusulas essenciais', to: '/blog/contrato-de-show-o-que-nao-pode-faltar' },
      { label: 'Rider técnico e mapa de palco', to: '/blog/rider-tecnico-e-mapa-de-palco-como-montar' },
    ]}
  />
);

export default AppParaBanda;

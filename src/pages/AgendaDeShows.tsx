import React from 'react';
import { TermPage } from './TermPage';

const AgendaDeShows: React.FC = () => (
  <TermPage
    path="/agenda-de-shows"
    badge="Agenda de shows"
    h1Highlight="Agenda de shows"
    h1="para músicos, bandas e DJs"
    intro="Marque cada show e veja, na mesma tela, o cachê, as despesas, quem toca e quanto sobra de lucro. A agenda que fala com o seu bolso."
    title="Agenda de shows para músicos e bandas — SouArtista"
    description="Agenda de shows completa para músicos, cantores, bandas e DJs: datas, cachês, despesas, equipe e lucro líquido em um só app, com lembretes automáticos."
    keywords="agenda de shows, agenda de shows para banda, app agenda de shows, agenda musical, agenda para músico, organizar shows, calendário de shows, agenda de apresentações, SouArtista"
    breadcrumbName="Agenda de shows"
    benefits={[
      { title: 'Datas sem conflito', text: 'Todos os shows, ensaios e passagens de som em um calendário único, com status de proposta, confirmado e realizado.' },
      { title: 'Cachê no evento', text: 'Cada data carrega o valor combinado, as despesas previstas e o lucro líquido calculado automaticamente.' },
      { title: 'Lembretes automáticos', text: 'Avisos com 7 dias, 1 dia, 3 horas e 30 minutos de antecedência. Nunca mais um compromisso esquecido.' },
    ]}
    sections={[
      {
        heading: 'Por que uma agenda comum não basta',
        paragraphs: [
          'Google Agenda, caderninho e grupo de WhatsApp resolvem a parte fácil: lembrar a data. Eles não respondem a pergunta que decide a sua carreira — esse show dá lucro?',
          'Sem o financeiro ligado à agenda, você aceita convites no escuro: descobre só depois que o combustível, o som e o pagamento da banda consumiram quase todo o cachê.',
        ],
        bullets: [
          'Não vincula cachê, despesa e pagamento ao evento',
          'Não calcula o lucro líquido do show',
          'Não controla quem da equipe já foi pago',
          'Não avisa sobre cachê pendente',
        ],
      },
      {
        heading: 'Como funciona a agenda do SouArtista',
        paragraphs: [
          'Você cadastra o show com data, horário e local, informa o cachê e lança as despesas. O app calcula o resultado real e mostra tudo no calendário.',
        ],
        bullets: [
          'Agenda visual por mês, semana e dia',
          'Status do pagamento: pendente ou recebido',
          'Equipe escalada por show, com o valor de cada músico',
          'Despesas de locomoção por quilometragem',
          'Contrato, rider técnico e mapa de palco ligados ao evento',
          'Modo Palco e Modo Offline para locais sem internet',
          'Relatórios em PDF por período',
        ],
      },
      {
        heading: 'Para quem é',
        paragraphs: [
          'Músicos solo, duplas, bandas de baile, artistas autorais, DJs, produtores e músicos freelancers que tocam com vários grupos e precisam acompanhar as próprias datas e pagamentos.',
        ],
      },
    ]}
    faqs={[
      { question: 'Qual o melhor app de agenda de shows?', answer: 'O SouArtista é o app mais completo para músicos no Brasil porque une a agenda de shows ao controle financeiro: cada data mostra cachê, despesas, equipe e lucro líquido real, com lembretes automáticos.' },
      { question: 'A agenda funciona sem internet?', answer: 'Sim. O Modo Offline mantém seus shows acessíveis mesmo em locais sem sinal, e os dados sincronizam quando a conexão volta.' },
      { question: 'Dá para usar com a banda inteira?', answer: 'Sim. O líder ou produtor cadastra os shows e a equipe; os músicos de apoio acompanham as próprias datas e o status dos pagamentos.' },
      { question: 'Quanto custa?', answer: 'O SouArtista tem plano mensal de R$ 29,90 e plano anual de R$ 300,00, com período de teste para experimentar.' },
    ]}
    relatedLinks={[
      { label: 'Agenda de shows para banda: como organizar', to: '/blog/agenda-de-shows-para-banda-como-organizar' },
      { label: 'SouArtista vs Excel vs Google Agenda', to: '/comparativo' },
      { label: 'Funcionalidades', to: '/funcionalidades' },
    ]}
  />
);

export default AgendaDeShows;

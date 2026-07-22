import React from 'react';
import { Layout } from '@/components/Layout';
import { FeaturesHero } from '@/components/features/FeaturesHero';
import { FeaturesNav } from '@/components/features/FeaturesTabs';
import { FeatureSection } from '@/components/features/FeatureSection';
import { FeatureCompare } from '@/components/features/FeatureCompare';
import { FeaturesCTA } from '@/components/features/FeaturesCTA';
import { SEOHead } from '@/components/SEOHead';
import {
  Music,
  Wallet,
  Receipt,
  Users,
  Car,
  BarChart3,
  Calendar,
  Bell,
  Settings,
  Mic2,
  ListMusic,
} from 'lucide-react';

const categories = [
  { id: 'palco', label: 'Modo Palco & Repertórios', icon: Mic2 },
  { id: 'shows', label: 'Gestão de Shows', icon: Music },
  { id: 'financeiro', label: 'Financeiro', icon: Wallet },
  { id: 'despesas', label: 'Despesas Gerais', icon: Receipt },
  { id: 'equipe', label: 'Equipe', icon: Users },
  { id: 'locomocao', label: 'Locomoção', icon: Car },
  { id: 'relatorios', label: 'Relatórios', icon: BarChart3 },
  { id: 'calendario', label: 'Calendário', icon: Calendar },
  { id: 'notificacoes', label: 'Notificações', icon: Bell },
  { id: 'configuracoes', label: 'Configurações', icon: Settings },
];

const palcoFeatures = [
  {
    title: 'Modo Palco (Teleprompter Profissional)',
    description: 'Teleprompter com rolagem automática, transposição de tom em tempo real e avanço automático de música. Para tocar sem preocupação.',
    badge: 'NOVO',
    resources: [
      'Rolagem automática com velocidade ajustável',
      'Transposição de tom on-the-fly',
      'Avanço automático de música',
      'Detecção inteligente de cifras',
      'Aviso de "música curta"',
      'Configurações globais salvas no perfil',
    ],
  },
  {
    title: 'Repertórios (Setlists) Reformulados',
    description: 'Organize seus repertórios por blocos, com arrastar e soltar, importação em massa e salvamento automático.',
    badge: 'NOVO',
    resources: [
      'Blocos e organização por música',
      'Drag & drop com animação nativa',
      'Importação em massa de músicas',
      'Repertório de boas-vindas automático',
      'Salvamento em rascunho automático',
    ],
  },
  {
    title: 'Código de Amizade (Artista ↔ Músico)',
    description: 'Vincule sua conta de artista à conta de músicos parceiros e envie convites para shows direto pelo app.',
    badge: 'NOVO',
    resources: [
      'Vínculo Artista ↔ Músico',
      'Convites de show pelo app',
      'Independência e privacidade preservadas',
      'Notificações push de vínculo e convite',
    ],
  },
];


const showsFeatures = [
  {
    title: 'Cadastro Completo de Shows',
    description: 'Registre todas as informações do seu show: local, data, horário, cachê bruto e tipo de evento.',
    resources: [
      'Data e horário do show',
      'Local do evento integrado',
      'Valor do cachê bruto',
      'Identificação de evento privado',
      'Histórico completo',
    ],
  },
  {
    title: 'Gestão de Equipe por Show',
    description: 'Adicione músicos contratados para cada apresentação com cachê individual.',
    resources: [
      'Adicionar músicos da lista',
      'Definir cachê por músico',
      'Especificar instrumento',
      'Calcular custo total automático',
    ],
  },
  {
    title: 'Despesas do Show',
    description: 'Registre gastos extras como alimentação, hospedagem e transporte específicos do show.',
    resources: [
      'Categorização de despesas',
      'Vinculação ao show',
      'Impacto no lucro líquido',
    ],
  },
];

const financeiroFeatures = [
  {
    title: 'Dashboard Financeiro',
    description: 'Acompanhe em tempo real sua Receita Bruta, Custos Totais e Lucro Líquido.',
    resources: [
      'Receita bruta total',
      'Custos de show (equipe + despesas)',
      'Lucro líquido calculado',
      'Filtro por período',
    ],
  },
  {
    title: 'Simulador de Nota Fiscal',
    description: 'Calcule automaticamente os descontos de impostos baseado no seu tipo de empresa.',
    resources: [
      'Cálculo de ISS (2% a 5%)',
      'INSS para Pessoa Física',
      'IRRF com tabela atualizada',
      'Suporte para MEI e CNPJ',
    ],
  },
];

const despesasFeatures = [
  {
    title: 'Categorias de Despesas',
    description: 'Organize seus gastos profissionais em categorias pré-definidas para melhor controle.',
    resources: [
      'Equipamento',
      'Acessórios',
      'Manutenção',
      'Vestuário',
    ],
  },
  {
    title: 'Mais Categorias',
    description: 'Cubra todas as áreas de investimento da sua carreira musical.',
    resources: [
      'Marketing',
      'Formação/Cursos',
      'Software/Apps',
      'Outros',
    ],
  },
  {
    title: 'Gestão Mensal',
    description: 'Vincule despesas a meses específicos e acompanhe seus gastos ao longo do tempo.',
    resources: [
      'Vincula despesa a um mês',
      'Visualiza total por categoria',
      'Histórico de gastos',
      'Análise de tendências',
    ],
  },
];

const equipeFeatures = [
  {
    title: 'Banco de Músicos',
    description: 'Cadastre músicos parceiros e administre os cachês de cada integrante de forma controlada, show a show.',
    resources: [
      'Nome e instrumento',
      'Definir cachê por músico',
      'Administração controlada dos pagamentos',
      'Histórico de shows juntos',
    ],
  },
  {
    title: 'Gestão de Cachês para Músicos',
    description: 'Controle o status de pagamento dos cachês diretamente pelo app. Veja o que está pendente, atualize com um toque e receba lembretes automáticos.',
    resources: [
      'Badge de status: Pendente ou Recebido',
      'Alternar status com um clique',
      'Card "Cachê Pendente" no Dashboard',
      'Modal com detalhes dos shows pendentes',
      'Notificações semanais automáticas',
    ],
  },
  {
    title: 'Casas de Show',
    description: 'Cadastre locais de apresentação por cidade e estado para reutilizar em novos shows.',
    resources: [
      'Nome e localização',
      'Seleção rápida no cadastro',
      'Histórico por local',
    ],
  },
  {
    title: 'Modo Músico',
    description: 'Dashboard independente para músicos freelancers que tocam com vários artistas. Veja quem te contrata e quem paga melhor.',
    resources: [
      'Veja quais artistas te contratam',
      'Compare lucro por artista',
      'Identifique quem paga melhor',
      'Dashboard independente do artista',
    ],
  },
  {
    title: 'Contratos, Riders e Mapa Técnico',
    description: 'Crie contratos prontos e personalizáveis para bares, eventos privados e shows maiores. Monte seu rider técnico e mapa de palco.',
    resources: [
      'Contratos pré-formatados por tipo de evento',
      'Rider técnico (som, luz, equipamentos)',
      'Mapa de palco (stage plot)',
      'Envio por WhatsApp ou e-mail',
    ],
  },
];

const locomocaoFeatures = [
  {
    title: 'Múltiplos Modais',
    description: 'Registre qualquer tipo de deslocamento: Uber, veículo próprio, van, ônibus ou avião.',
    resources: [
      'Uber/99: valor da corrida',
      'KM: cálculo automático',
      'Van, ônibus e avião',
      'Vinculação ao show',
    ],
  },
  {
    title: 'Calculadora de KM',
    description: 'Calcule o custo exato do seu carro com distância, consumo e preço do combustível.',
    resources: [
      'Distância em KM',
      'Consumo médio (km/l)',
      'Preço do combustível',
      'Cálculo instantâneo',
    ],
  },
];

const relatoriosFeatures = [
  {
    title: 'Relatórios Detalhados',
    description: 'Relatórios completos com filtros por período: semana, mês, ano ou todo o período.',
    resources: [
      'Total de shows',
      'Receita e custos',
      'Lucro líquido',
      'Ticket médio',
    ],
  },
  {
    title: 'Top 5 Rankings',
    description: 'Rankings automáticos dos locais mais lucrativos, músicos e categorias de despesas.',
    resources: [
      'Top venues por lucro',
      'Top venues por quantidade',
      'Top membros por custo',
      'Top categorias de despesas',
    ],
  },
  {
    title: 'Exportação',
    description: 'Exporte relatórios em PDF ou Excel diretamente para seu e-mail.',
    resources: [
      'Exportação em PDF',
      'Exportação em XLSX',
      'Envio por e-mail',
    ],
  },
  {
    title: 'Recibo de Cachê em PDF',
    description: 'Gere recibos profissionais de cachê em PDF direto do celular e compartilhe pelo WhatsApp ou e-mail.',
    badge: 'NOVO',
    resources: [
      'Geração 100% no celular',
      'Compartilhamento nativo',
      'Histórico de recibos por show',
    ],
  },
  {
    title: 'Demonstrativo Anual de Rendimentos',
    description: 'Relatório completo do ano em PDF, pronto pra enviar ao contador. Ideal pra declaração do imposto de renda.',
    badge: 'NOVO',
    resources: [
      'Somatório de cachês, despesas e líquido',
      'Top 5 cidades por faturamento',
      'PDF pronto pro contador',
      'Compartilhamento direto',
    ],
  },

];

const calendarioFeatures = [
  {
    title: 'Calendário Visual',
    description: 'Visualize todos os seus compromissos em um calendário mensal interativo.',
    resources: [
      'Visualização mensal',
      'Navegação entre meses',
      'Destaque de dias com shows',
      'Detalhes ao clicar',
    ],
  },
  {
    title: 'Agenda Semanal',
    description: 'Veja rapidamente os shows da semana atual no Dashboard.',
    resources: [
      'Shows da semana',
      'Data, horário e local',
      'Valor do cachê',
    ],
  },
];

const notificacoesFeatures = [
  {
    title: 'Lembretes Automáticos',
    description: 'Receba notificações push antes dos seus shows em momentos estratégicos.',
    resources: [
      '7 dias antes',
      '1 dia antes',
      'No dia do show',
      '3h e 30min antes',
    ],
  },
  {
    title: 'Dicas de Engajamento',
    description: 'Receba sugestões inteligentes para otimizar sua gestão no app.',
    resources: [
      'Registrar transporte',
      'Atualizar agenda',
      'Analisar finanças',
    ],
  },
];

const configuracoesFeatures = [
  {
    title: 'Privacidade de Valores',
    description: 'Escolha quais valores financeiros deseja ocultar no Dashboard e Relatórios.',
    resources: [
      'Ocultar receita',
      'Ocultar custos',
      'Ocultar lucro',
      'Máscara: R$ *.**',
    ],
  },
  {
    title: 'Perfil e Foto',
    description: 'Personalize sua conta com foto de perfil e informações pessoais.',
    resources: [
      'Upload de foto',
      'Editor com crop',
      'Edição de dados',
      'Alteração de senha',
    ],
  },
  {
    title: 'Programa de Indicação',
    description: 'Convide amigos músicos e ganhe meses grátis do plano Pro.',
    resources: [
      'Link único de indicação',
      'Compartilhar no WhatsApp',
      'Progresso visual',
      'Sistema multi-ciclo',
    ],
  },
];

const Features: React.FC = () => {
  return (
    <Layout>
      <SEOHead 
        title="Funcionalidades - SouArtista"
        description="Descubra todas as funcionalidades do SouArtista: gestão de shows, controle de cachês, gestão de despesas, relatórios financeiros e muito mais para músicos, cantores e DJs."
        keywords="funcionalidades souartista, recursos app músico, gestão shows, controle cachê, simulador nota fiscal, agenda músico, relatórios financeiros, app para DJ, gestão de cachê músico, controle de pagamento músico, cachê pendente app, gerenciar pagamentos shows, contrato para músico, rider técnico, mapa de palco"
        canonical="https://souartista.app/funcionalidades"
        breadcrumbs={[
          { name: 'Início', url: 'https://souartista.app' },
          { name: 'Funcionalidades', url: 'https://souartista.app/funcionalidades' }
        ]}
      />
      <FeaturesHero />
      <FeaturesNav categories={categories} />
      
      <div className="bg-background">
        <FeatureSection
          id="shows"
          title="Gestão de Shows"
          icon={Music}
          features={showsFeatures}
        />
        
        <FeatureSection
          id="financeiro"
          title="Controle Financeiro"
          icon={Wallet}
          features={financeiroFeatures}
          className="bg-muted/30"
        />
        
        <FeatureSection
          id="despesas"
          title="Despesas Gerais"
          icon={Receipt}
          features={despesasFeatures}
        />
        
        <FeatureSection
          id="equipe"
          title="Equipe e Músicos"
          icon={Users}
          features={equipeFeatures}
          className="bg-muted/30"
        />
        
        <FeatureSection
          id="locomocao"
          title="Locomoção"
          icon={Car}
          features={locomocaoFeatures}
          className="bg-muted/30"
        />
        
        <FeatureSection
          id="relatorios"
          title="Relatórios e Insights"
          icon={BarChart3}
          features={relatoriosFeatures}
        />
        
        <FeatureSection
          id="calendario"
          title="Calendário e Agenda"
          icon={Calendar}
          features={calendarioFeatures}
          className="bg-muted/30"
        />
        
        <FeatureSection
          id="notificacoes"
          title="Notificações"
          icon={Bell}
          features={notificacoesFeatures}
        />
        
        <FeatureSection
          id="configuracoes"
          title="Configurações"
          icon={Settings}
          features={configuracoesFeatures}
          className="bg-muted/30"
        />
        
        <FeatureCompare />
      </div>
      
      <FeaturesCTA />
    </Layout>
  );
};

export default Features;

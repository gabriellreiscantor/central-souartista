import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { FeaturesHero } from '@/components/features/FeaturesHero';
import { FeaturesTabs } from '@/components/features/FeaturesTabs';
import { FeatureSection } from '@/components/features/FeatureSection';
import { FeatureCompare } from '@/components/features/FeatureCompare';
import { FeaturesCTA } from '@/components/features/FeaturesCTA';
import { 
  DollarSign, 
  Calendar, 
  Users, 
  Receipt, 
  BarChart3,
  Car,
  ListChecks,
  Eye,
  UserPlus,
  MapPin,
  UserCheck,
  Calculator,
  Wallet,
  ShoppingBag,
  Trophy,
  FileText,
  TrendingUp,
  CalendarDays,
  CalendarCheck,
  List,
  Bell,
  Lightbulb,
  EyeOff,
  User,
  Gift,
  Fuel,
  History,
  Settings
} from 'lucide-react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('shows');

  const categories = [
    { id: 'shows', label: '🎵 Gestão de Shows', icon: Calendar },
    { id: 'financeiro', label: '💰 Controle Financeiro', icon: DollarSign },
    { id: 'equipe', label: '👥 Equipe e Músicos', icon: Users },
    { id: 'locomocao', label: '🚗 Locomoção', icon: Car },
    { id: 'relatorios', label: '📊 Relatórios', icon: BarChart3 },
    { id: 'calendario', label: '📅 Calendário', icon: CalendarDays },
    { id: 'notificacoes', label: '🔔 Notificações', icon: Bell },
    { id: 'configuracoes', label: '⚙️ Configurações', icon: Settings },
  ];

  const featureSections = {
    shows: {
      title: 'Gestão de Shows',
      subtitle: 'Organize todas as suas apresentações em um só lugar',
      features: [
        {
          icon: ListChecks,
          title: 'Cadastre seus shows em segundos',
          description: 'Registre todas as informações do seu show: local, data, horário, cachê bruto e tipo de evento. Diferencie shows públicos de eventos privados.',
          resources: [
            'Data e horário do show',
            'Local do evento integrado',
            'Valor do cachê bruto',
            'Identificação de evento privado',
            'Histórico completo de apresentações',
          ],
        },
        {
          icon: Eye,
          title: 'Veja seus shows do seu jeito',
          description: 'Alterne entre visualização em lista (mais compacta) ou grade (mais visual) para organizar seus shows da forma que preferir.',
          resources: [
            'Modo Lista para visão detalhada',
            'Modo Grade para visão geral',
            'Ordenação por data',
            'Filtros por período',
          ],
        },
        {
          icon: UserPlus,
          title: 'Monte sua equipe para cada show',
          description: 'Adicione músicos contratados para cada apresentação, defina o cachê individual e especifique o instrumento de cada profissional.',
          resources: [
            'Adicionar músicos da sua lista',
            'Definir cachê por músico',
            'Especificar instrumento',
            'Calcular custo total automaticamente',
            'Divisão automática de custos',
          ],
        },
      ],
    },
    financeiro: {
      title: 'Controle Financeiro',
      subtitle: 'Tenha clareza total sobre suas finanças',
      features: [
        {
          icon: Wallet,
          title: 'Visualize seu dinheiro com clareza',
          description: 'Acompanhe em tempo real sua Receita Bruta, Custos Totais e Lucro Líquido. Cards intuitivos que mostram exatamente quanto você está ganhando.',
          resources: [
            'Receita Bruta total',
            'Custos de show (equipe + despesas)',
            'Lucro Líquido (receita - custos)',
            'Comparativo mensal',
            'Filtro por período',
          ],
        },
        {
          icon: Receipt,
          title: 'Saiba quanto vai receber de verdade',
          description: 'Calcule automaticamente os descontos de impostos (ISS, INSS, IRRF) baseado no seu tipo de empresa.',
          resources: [
            'Cálculo automático de ISS (2% a 5%)',
            'INSS para Pessoa Física (RPA)',
            'IRRF com tabela progressiva',
            'MEI: isento de retenção',
            'CNPJ/Simples: cálculo de ISS',
          ],
          badge: 'Legislação Atualizada',
        },
        {
          icon: ShoppingBag,
          title: 'Controle todos os seus gastos',
          description: 'Registre despesas que não estão ligadas a shows: equipamentos, acessórios, manutenção, vestuário, marketing e mais.',
          resources: [
            'Equipamento (instrumentos, caixas)',
            'Acessório (cabos, palhetas)',
            'Manutenção (consertos)',
            'Marketing (divulgação)',
            'Formação (cursos)',
            'Software (plugins, apps)',
          ],
        },
      ],
    },
    equipe: {
      title: 'Equipe e Músicos',
      subtitle: 'Gerencie sua rede de profissionais',
      features: [
        {
          icon: Users,
          title: 'Sua rede de músicos organizada',
          description: 'Cadastre músicos parceiros com instrumentos e cachê padrão. Na hora de montar a equipe do show, é só selecionar da lista!',
          resources: [
            'Nome do músico',
            'Instrumento principal',
            'Cachê padrão sugerido',
            'Histórico de shows juntos',
            'Edição e exclusão',
          ],
        },
        {
          icon: MapPin,
          title: 'Seus palcos favoritos salvos',
          description: 'Cadastre casas de show, bares e locais de eventos por cidade e estado. Selecione rapidamente ao criar um novo show.',
          resources: [
            'Nome do local',
            'Estado e cidade',
            'Seleção rápida',
            'Histórico de shows por local',
          ],
        },
        {
          icon: UserCheck,
          title: 'Modo Músico Exclusivo',
          description: 'O SouArtista tem um modo exclusivo para músicos que fazem freelas. Veja com quais artistas você tocou e quanto ganhou com cada um.',
          resources: [
            'Lista de artistas parceiros',
            'Total ganho por artista',
            'Quantidade de shows por artista',
            'Dashboard adaptado',
            'Mesmas ferramentas de despesas',
          ],
          badge: 'Novo',
        },
      ],
    },
    locomocao: {
      title: 'Locomoção',
      subtitle: 'Controle todos os custos de transporte',
      features: [
        {
          icon: Car,
          title: 'Múltiplos modais de transporte',
          description: 'Controle detalhado de todos os custos de transporte: Uber/99, quilometragem de veículo próprio, van, ônibus ou avião.',
          resources: [
            'Uber/99: valor da corrida',
            'KM (veículo próprio): cálculo automático',
            'Van: valor do frete',
            'Ônibus: passagem',
            'Avião: passagem aérea',
          ],
        },
        {
          icon: Calculator,
          title: 'Calculadora de Quilometragem',
          description: 'Informe a distância percorrida, consumo médio do veículo e preço do combustível. O app calcula automaticamente.',
          resources: [
            'Distância em KM',
            'Consumo médio (km/l)',
            'Preço do combustível',
            'Cálculo automático instantâneo',
          ],
          formula: '(Distância ÷ Consumo) × Preço = Custo Total',
        },
        {
          icon: History,
          title: 'Histórico por Show',
          description: 'Vincule despesas de locomoção a shows específicos. No relatório, veja o lucro real já descontando o transporte.',
          resources: [
            'Seleção do show',
            'Múltiplas despesas por show',
            'Total de locomoção no relatório',
            'Impacto no lucro líquido',
          ],
        },
      ],
    },
    relatorios: {
      title: 'Relatórios e Insights',
      subtitle: 'Entenda seu negócio como nunca antes',
      features: [
        {
          icon: BarChart3,
          title: 'Relatórios Detalhados',
          description: 'Relatórios completos com filtros por período: este mês, mês passado, esta semana, últimos 7 dias, este ano ou todo o período.',
          resources: [
            'Total de shows no período',
            'Receita Bruta',
            'Custos de Show',
            'Lucro Líquido',
            'Ticket médio por show',
            'Média mensal',
          ],
        },
        {
          icon: Trophy,
          title: 'Top 5 Rankings',
          description: 'Rankings automáticos dos locais que mais deram lucro, músicos com maior custo e venues com mais shows.',
          resources: [
            'Top 5 Venues por Lucro',
            'Top 5 Venues por Quantidade',
            'Top 5 Membros por Custo',
            'Top 5 Tipos de Locomoção',
            'Top 5 Categorias de Despesas',
          ],
        },
        {
          icon: FileText,
          title: 'Exportação de Relatórios',
          description: 'Exporte relatórios em PDF ou XLSX (Excel). Os arquivos são enviados diretamente para seu e-mail cadastrado.',
          resources: [
            'Exportação em PDF',
            'Exportação em XLSX (Excel)',
            'Envio automático por e-mail',
            'Logo do SouArtista nos documentos',
          ],
          badge: 'Pro',
        },
        {
          icon: TrendingUp,
          title: 'Gráficos de Fluxo de Caixa',
          description: 'Gráficos de linha interativos mostrando Receita, Despesa e Lucro mês a mês.',
          resources: [
            'Gráfico de Fluxo de Caixa Mensal',
            'Comparativo ano a ano',
            'Tooltips interativos',
            'Legenda colorida',
          ],
        },
      ],
    },
    calendario: {
      title: 'Calendário e Agenda',
      subtitle: 'Sua agenda sempre organizada',
      features: [
        {
          icon: CalendarDays,
          title: 'Calendário Visual',
          description: 'Visualize todos os seus compromissos em um calendário mensal. Dias com shows são destacados com um ícone musical.',
          resources: [
            'Visualização mensal',
            'Navegação entre meses',
            'Destaque de dias com shows',
            'Clique para ver detalhes',
          ],
        },
        {
          icon: CalendarCheck,
          title: 'Agenda Semanal no Dashboard',
          description: 'Veja rapidamente os shows da semana atual diretamente no Dashboard. Planeje-se sem precisar abrir outra tela.',
          resources: [
            'Shows da semana atual',
            'Data, horário e local',
            'Valor do cachê',
            'Acesso rápido',
          ],
        },
        {
          icon: List,
          title: 'Lista de Shows do Mês',
          description: 'Tabela com todos os shows agendados para o mês selecionado, incluindo data, local e cachê.',
          resources: [
            'Listagem cronológica',
            'Data formatada',
            'Nome do local',
            'Valor do cachê',
          ],
        },
      ],
    },
    notificacoes: {
      title: 'Notificações',
      subtitle: 'Nunca mais perca um compromisso',
      features: [
        {
          icon: Bell,
          title: 'Lembretes de Show Automáticos',
          description: 'Receba notificações push automáticas antes dos seus shows. Você é lembrado em 5 momentos estratégicos!',
          resources: [
            '7 dias antes: "Show em uma semana!"',
            '1 dia antes: "Amanhã tem show!"',
            'No dia: "Hoje é dia de show!"',
            '3 horas antes: "Prepare-se!"',
            '30 minutos antes: "Hora de brilhar!"',
          ],
          badge: 'iOS e Android',
        },
        {
          icon: Lightbulb,
          title: 'Dicas de Engajamento',
          description: 'Receba sugestões inteligentes para otimizar sua gestão: registrar transporte, atualizar agenda e mais.',
          resources: [
            '🚗 Registre despesas de transporte',
            '📆 Use o calendário para visualizar',
            '💰 Veja o resumo financeiro',
            '🎵 Cadastre os músicos da banda',
          ],
        },
      ],
    },
    configuracoes: {
      title: 'Configurações',
      subtitle: 'Personalize sua experiência',
      features: [
        {
          icon: EyeOff,
          title: 'Privacidade de Valores',
          description: 'Escolha quais valores financeiros deseja ver. Valores ocultos aparecem como R$ *.***,**',
          resources: [
            'Ocultar Receita Bruta',
            'Ocultar Custos de Show',
            'Ocultar Lucro Líquido',
            'Ocultar Despesas de Locomoção',
          ],
        },
        {
          icon: User,
          title: 'Perfil e Foto',
          description: 'Adicione sua foto de perfil, atualize seu nome e telefone. Editor de imagem integrado.',
          resources: [
            'Upload de foto de perfil',
            'Editor com crop circular',
            'Remoção de foto',
            'Edição de nome',
            'Alteração de senha',
          ],
        },
        {
          icon: Gift,
          title: 'Programa de Indicação',
          description: 'Convide amigos músicos! A cada 5 indicações validadas, você ganha 1 mês grátis!',
          resources: [
            'Link único de indicação',
            'Compartilhar no WhatsApp',
            'Compartilhar em qualquer app',
            'Progresso visual (0/5)',
            'Sistema multi-ciclo',
          ],
          badge: 'Ganhe meses grátis',
        },
      ],
    },
  };

  const currentSection = featureSections[activeTab as keyof typeof featureSections];

  return (
    <Layout>
      <FeaturesHero />
      
      <FeaturesTabs 
        categories={categories} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      <FeatureSection 
        title={currentSection.title}
        subtitle={currentSection.subtitle}
        features={currentSection.features}
      />
      
      <FeatureCompare />
      
      <FeaturesCTA />
    </Layout>
  );
};

export default Features;

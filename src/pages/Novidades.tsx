import React from 'react';
import { Layout } from '@/components/Layout';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import {
  Mic2,
  ListMusic,
  Users,
  FileText,
  BarChart3,
  Image as ImageIcon,
  Calendar,
  LayoutDashboard,
  Bell,
  CreditCard,
  Palette,
  ShieldCheck,
  Settings,
  type LucideIcon,
} from 'lucide-react';

interface Update {
  icon: LucideIcon;
  title: string;
  date: string;
  isNew?: boolean;
  items: string[];
}

const updates: Update[] = [
  {
    icon: Mic2,
    title: 'Modo Palco (Teleprompter Profissional)',
    date: 'Julho 2026',
    isNew: true,
    items: [
      'Teleprompter com rolagem automática e velocidade ajustável',
      'Transposição de tom em tempo real (mudança de acordes on-the-fly)',
      'Avanço automático de música',
      'Detecção inteligente de cifras',
      'Aviso de "música curta" para ajustar preparação',
      'Configurações globais salvas no seu perfil',
    ],
  },
  {
    icon: ListMusic,
    title: 'Repertórios (Setlists) Reformulados',
    date: 'Julho 2026',
    isNew: true,
    items: [
      'Criação de blocos e organização por música',
      'Arrastar e soltar (drag & drop) com animação nativa',
      'Importação em massa de músicas',
      'Repertório de boas-vindas criado automaticamente',
      'Editor com salvamento em rascunho automático',
    ],
  },
  {
    icon: Users,
    title: 'Código de Amizade (Artista ↔ Músico)',
    date: 'Julho 2026',
    isNew: true,
    items: [
      'Vincule sua conta de artista à conta de músicos parceiros',
      'Convites para shows enviados direto pelo app',
      'Músicos mantêm total independência e privacidade',
      'Notificações push quando um vínculo ou convite chega',
    ],
  },
  {
    icon: FileText,
    title: 'Recibo de Cachê em PDF',
    date: 'Julho 2026',
    items: [
      'Geração de recibo profissional em PDF (100% no celular)',
      'Compartilhamento nativo (WhatsApp, e-mail, etc.)',
      'Histórico de recibos salvos por show',
    ],
  },
  {
    icon: BarChart3,
    title: 'Demonstrativo Anual de Rendimentos',
    date: 'Julho 2026',
    items: [
      'Relatório completo do ano em PDF pronto pro contador',
      'Somatório de cachês, despesas e líquido',
      'Top 5 cidades por faturamento',
      'Compartilhamento direto',
    ],
  },
  {
    icon: ImageIcon,
    title: 'Foto de Perfil Otimizada',
    date: 'Julho 2026',
    items: [
      'Upload muito mais rápido',
      'Correções em travamentos e falhas de recorte',
      'Carregamento até 10x mais leve (cache inteligente)',
    ],
  },
  {
    icon: Calendar,
    title: 'Agenda e Calendário',
    date: 'Julho 2026',
    items: [
      'Novo tema visual roxo escuro premium',
      'Layout mobile corrigido (sem cortes de coluna)',
      'Melhor visualização de shows por dia',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard do Músico',
    date: 'Julho 2026',
    items: [
      'Destaque para Relatórios no menu inferior',
      'Cards de Artistas, Instrumentos e Locais aprimorados',
      'Nome do artista sempre visível nos shows',
    ],
  },
  {
    icon: Bell,
    title: 'Notificações Push Ampliadas',
    date: 'Julho 2026',
    items: [
      '17 novas mensagens sobre Código de Amizade, Modo Palco, Repertórios, Recibos, Contratos e Demonstrativos',
      'Segmentação por plataforma (iOS/Android)',
      'Notificações dedicadas para admin e suporte',
      'Push de resposta de suporte',
    ],
  },
  {
    icon: CreditCard,
    title: 'Assinaturas e Pagamentos',
    date: 'Julho 2026',
    items: [
      'API do Asaas atualizada (PIX/Cartão/Boleto)',
      'Sincronização automática de assinaturas Apple (iOS)',
      'Modal exclusivo pra assinantes que voltaram',
    ],
  },
  {
    icon: Palette,
    title: 'Novo Visual Premium',
    date: 'Julho 2026',
    items: [
      'Tema roxo escuro (#1E082B) em Shows, Dashboard, Relatórios, Transporte, Despesas, Contratos e Simulador de Nota',
      'Ajustes, páginas Legais e Suporte com glassmorphism',
      'Tutorial expandido com 6 guias interativos',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Segurança Reforçada',
    date: 'Julho 2026',
    items: [
      'Blindagem completa de assinaturas contra fraude',
      'Proteção de dados sensíveis (LGPD)',
      'Autenticação 2FA (TOTP) com códigos de recuperação para admins',
      '13 tabelas com políticas de segurança revisadas',
    ],
  },
  {
    icon: Settings,
    title: 'Melhorias Internas',
    date: 'Julho 2026',
    items: [
      'Painel de Saúde do Sistema (/admin) monitorando Supabase, Resend, Asaas, RevenueCat, Firebase e backups',
      'Logs de auditoria completos',
      'Backup diário automático em servidor secundário (43/43 tabelas)',
      'Métricas em tempo real de usuários e assinaturas',
    ],
  },
];

const Novidades: React.FC = () => {
  return (
    <Layout>
      <SEOHead
        title="Novidades da Plataforma — SouArtista"
        description="Confira as últimas atualizações do SouArtista: Modo Palco, Repertórios, Código de Amizade, Recibos em PDF, Demonstrativo Anual e muito mais."
        breadcrumbs={[
          { name: 'Início', url: 'https://central-souartista.lovable.app' },
          { name: 'Novidades', url: 'https://central-souartista.lovable.app/novidades' },
        ]}
      />

      <section className="relative bg-[#1E082B] text-white pt-32 pb-16 overflow-hidden">
        <div className="blob-purple -top-40 -left-40" />
        <div className="blob-purple -bottom-40 -right-40" />
        <div className="container relative z-10 max-w-4xl">
          <Badge className="mb-4 bg-primary/20 text-primary border border-primary/30 hover:bg-primary/20">
            Changelog
          </Badge>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Novidades da Plataforma
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Estamos sempre evoluindo o SouArtista pra facilitar a vida de músicos, cantores, DJs e bandas. Veja o que chegou nas últimas atualizações.
          </p>
        </div>
      </section>

      <section className="bg-[#1E082B] pb-24">
        <div className="container max-w-4xl">
          <div className="grid gap-6">
            {updates.map((update, idx) => {
              const Icon = update.icon;
              return (
                <article
                  key={idx}
                  className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 hover:shadow-purple"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h2 className="font-display font-semibold text-xl sm:text-2xl text-white">
                          {update.title}
                        </h2>
                        {update.isNew && (
                          <Badge className="bg-primary text-primary-foreground border-0 shadow-purple text-xs font-bold tracking-wide">
                            NOVO
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-white/50">{update.date}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 sm:pl-16">
                    {update.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 leading-relaxed">
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(185,111,255,0.8)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Novidades;

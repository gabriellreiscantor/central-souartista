import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  WifiOff,
  Mic2,
  ListMusic,
  Users,
  Mail,
  LogIn,
  Star,
  Palette,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

interface NewsItem {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const news: NewsItem[] = [
  {
    icon: WifiOff,
    title: 'Modo Offline turbinado',
    items: [
      'Timeout inteligente de 30s em todas as requisições — sem tela travada carregando pra sempre',
      'Banner offline mostrando há quanto tempo os dados foram atualizados, com botão para recarregar',
      'Pré-carregamento automático dos próximos 30 dias de shows e setlists ao entrar no app',
    ],
  },
  {
    icon: Mic2,
    title: 'Modo Palco blindado',
    items: [
      'Uma vez aberto, seus dados ficam intactos durante todo o show, mesmo sem sinal',
      'Zero risco de perder o repertório no meio da apresentação',
      'Otimizado para funcionar como referência ao vivo, sem recarregar nada',
    ],
  },
  {
    icon: ListMusic,
    title: 'Repertório (Setlists)',
    items: [
      'Monte e organize seus repertórios com blocos, tons e letras',
      'Vincule um setlist direto ao show',
      'Disponível offline dentro do Modo Palco',
    ],
  },
  {
    icon: Users,
    title: 'Vínculo Artista ↔ Músico',
    items: [
      'Código de amizade para vincular artistas e músicos',
      'Compartilhamento nativo do código com mensagem do SouArtista',
      'Músicos vinculados aparecem com destaque nas listas',
      'Convites automáticos para shows quando o artista escala o músico vinculado',
      'Revogar o vínculo cancela convites pendentes automaticamente',
    ],
  },
  {
    icon: Mail,
    title: 'E-mails com a cara do SouArtista',
    items: [
      'Novo visual em todos os e-mails',
      'Preferências de descadastro respeitadas, com link em todo e-mail de novidades',
      'Proteção contra excesso de mensagens (você não recebe spam)',
    ],
  },
  {
    icon: LogIn,
    title: 'Login mais esperto',
    items: [
      'Usuários antigos com credenciais migradas recebem aviso claro do que fazer — ninguém fica preso no login sem entender',
    ],
  },
  {
    icon: Star,
    title: 'Avaliação sem travas',
    items: [
      'Ao tocar em "Avaliar" no perfil, se o pop-up nativo não aparecer, o app abre direto a página da loja',
    ],
  },
  {
    icon: Palette,
    title: 'Visual repaginado',
    items: [
      'Modais de atualização, LGPD, boas-vindas, anúncios e conteúdo bloqueado com o tema SouArtista',
    ],
  },
];

export const WhatsNewSection: React.FC = () => {
  return (
    <section className="relative bg-[#1E082B] text-white py-20 sm:py-24 overflow-hidden">
      <div className="blob-purple -top-40 -left-40" />
      <div className="blob-purple -bottom-40 -right-40" />

      <div className="container relative z-10 max-w-6xl">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-primary/20 text-primary border border-primary/30 hover:bg-primary/20">
            Versão 2.0
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Novidades da versão 2.0
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Uma atualização inteira pensada pra você tocar tranquilo, do camarim ao palco.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n, idx) => {
            const Icon = n.icon;
            return (
              <article
                key={idx}
                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 hover:shadow-purple"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white leading-tight">
                    {n.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {n.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-white/75 leading-relaxed"
                    >
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(185,111,255,0.8)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-purple"
          >
            <Link to="/funcionalidades#novidades">
              Ver todas as funcionalidades
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

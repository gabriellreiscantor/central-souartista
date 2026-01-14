import React from 'react';
import { Mic2, Guitar, Check, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const artistFeatures = [
  'Cadastro completo de shows',
  'Gestão de equipe e músicos',
  'Cadastro de casas de show',
  'Simulador de Nota Fiscal',
  'Divisão automática de custos',
];

const musicianFeatures = [
  'Lista de artistas parceiros',
  'Total ganho por artista',
  'Histórico de shows por banda',
  'Dashboard focado em cachês',
];

const sharedFeatures = [
  'Controle de locomoção',
  'Despesas gerais',
  'Relatórios financeiros',
  'Calendário e agenda',
  'Notificações push',
  'Programa de indicação',
];

export const FeatureCompare: React.FC = () => {
  return (
    <section id="modos" className="py-12 scroll-mt-28">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display font-semibold text-2xl text-foreground">
            Modos de Uso
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Artista Mode */}
          <ModeCard
            icon={Mic2}
            title="Modo Artista"
            subtitle="Líder de banda ou artista solo"
            features={artistFeatures}
            color="primary"
          />

          {/* Músico Mode */}
          <ModeCard
            icon={Guitar}
            title="Modo Músico"
            subtitle="Freelancer ou membro de banda"
            features={musicianFeatures}
            color="secondary"
          />
        </div>

        {/* Shared Features */}
        <div className="bg-muted/50 rounded-2xl p-5 border border-border">
          <h3 className="font-semibold text-foreground mb-4 text-center">
            Funcionalidades compartilhadas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sharedFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ModeCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  features: string[];
  color: 'primary' | 'secondary';
}

const ModeCard: React.FC<ModeCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  features,
  color,
}) => {
  return (
    <div className={cn(
      'bg-card border border-border rounded-2xl p-5',
      color === 'primary' && 'border-primary/20'
    )}>
      <div className="flex items-center gap-3 mb-4">
        <div className={cn(
          'w-10 h-10 rounded-xl flex items-center justify-center',
          color === 'primary' ? 'bg-primary/10' : 'bg-muted'
        )}>
          <Icon className={cn(
            'w-5 h-5',
            color === 'primary' ? 'text-primary' : 'text-muted-foreground'
          )} />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <Check className={cn(
              'w-4 h-4 shrink-0',
              color === 'primary' ? 'text-primary' : 'text-muted-foreground'
            )} />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

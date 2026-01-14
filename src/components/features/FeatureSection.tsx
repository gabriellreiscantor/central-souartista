import React from 'react';
import { LucideIcon, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface FeatureItem {
  title: string;
  description: string;
  resources: string[];
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'outline';
}

interface FeatureSectionProps {
  id: string;
  title: string;
  icon: LucideIcon;
  features: FeatureItem[];
  className?: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  icon: Icon,
  features,
  className,
}) => {
  return (
    <section id={id} className={cn('py-12 scroll-mt-28', className)}>
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display font-semibold text-2xl text-foreground">
            {title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<FeatureItem> = ({
  title,
  description,
  resources,
  badge,
  badgeVariant = 'secondary',
}) => {
  return (
    <div className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-semibold text-foreground leading-tight">
          {title}
        </h3>
        {badge && (
          <Badge 
            variant={badgeVariant} 
            className={cn(
              "shrink-0 text-xs",
              badge === 'Pro' && "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0",
              badge === 'Exclusivo' && "bg-primary/10 text-primary border-primary/20"
            )}
          >
            {badge === 'Pro' && '🌟 '}
            {badge}
          </Badge>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Resources */}
      <ul className="space-y-2">
        {resources.slice(0, 4).map((resource, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{resource}</span>
          </li>
        ))}
        {resources.length > 4 && (
          <li className="text-xs text-muted-foreground pl-6">
            +{resources.length - 4} recursos
          </li>
        )}
      </ul>
    </div>
  );
};

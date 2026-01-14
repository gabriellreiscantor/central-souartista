import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  popularLabel?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period,
  features,
  cta,
  isPopular,
  popularLabel,
}) => {
  return (
    <div className={`relative rounded-2xl p-8 transition-smooth hover-lift ${
      isPopular 
        ? 'bg-primary/5 border-2 border-primary shadow-purple' 
        : 'bg-card border border-border'
    }`}>
      {isPopular && popularLabel && (
        <div className="badge-popular">
          {popularLabel}
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display font-semibold text-xl text-foreground mb-2">
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-4xl text-foreground">
            {price}
          </span>
          <span className="text-muted-foreground">{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full rounded-full ${
          isPopular 
            ? 'shadow-purple hover:shadow-purple-lg' 
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }`}
        variant={isPopular ? 'default' : 'secondary'}
      >
        {cta}
      </Button>
    </div>
  );
};

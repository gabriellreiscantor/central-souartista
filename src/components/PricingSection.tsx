import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PricingCard } from './PricingCard';
import { Switch } from '@/components/ui/switch';

export const PricingSection: React.FC = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: t.pricing.free.name,
      price: t.pricing.free.price,
      period: t.pricing.free.period,
      features: t.pricing.free.features,
      cta: t.pricing.free.cta,
      isPopular: false,
    },
    {
      name: t.pricing.pro.name,
      price: isYearly ? t.pricing.pro.priceYearly : t.pricing.pro.price,
      period: isYearly ? t.pricing.pro.periodYearly : t.pricing.pro.period,
      features: t.pricing.pro.features,
      cta: t.pricing.pro.cta,
      isPopular: true,
    },
    {
      name: t.pricing.premium.name,
      price: isYearly ? t.pricing.premium.priceYearly : t.pricing.premium.price,
      period: isYearly ? t.pricing.premium.periodYearly : t.pricing.premium.period,
      features: t.pricing.premium.features,
      cta: t.pricing.premium.cta,
      isPopular: false,
    },
  ];

  return (
    <section className="py-24 bg-secondary/30" id="pricing">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            {t.pricing.monthly}
          </span>
          <Switch 
            checked={isYearly} 
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-primary"
          />
          <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            {t.pricing.yearly}
          </span>
          {isYearly && (
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
              {t.pricing.yearlyDiscount}
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              cta={plan.cta}
              isPopular={plan.isPopular}
              popularLabel={plan.isPopular ? t.pricing.popular : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FeatureCard } from './FeatureCard';
import { 
  DollarSign, 
  Calendar, 
  Users, 
  FileText, 
  BarChart3 
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: DollarSign,
      title: t.features.financial.title,
      description: t.features.financial.description,
    },
    {
      icon: Calendar,
      title: t.features.calendar.title,
      description: t.features.calendar.description,
    },
    {
      icon: Users,
      title: t.features.musicians.title,
      description: t.features.musicians.description,
    },
    {
      icon: FileText,
      title: t.features.invoice.title,
      description: t.features.invoice.description,
    },
    {
      icon: BarChart3,
      title: t.features.reports.title,
      description: t.features.reports.description,
    },
  ];

  return (
    <section className="py-24 bg-background" id="features">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { LucideIcon, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  resources: string[];
  badge?: string;
  formula?: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
}) => {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1E082B] mb-4">
            {title}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <div 
      className={cn(
        "group relative p-6 bg-white rounded-2xl border border-gray-100",
        "hover:shadow-xl hover:shadow-[#B96FFF]/10 hover:-translate-y-1 hover:border-[#B96FFF]/20",
        "transition-all duration-300 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Badge */}
      {feature.badge && (
        <Badge 
          className={cn(
            "absolute top-4 right-4 text-xs",
            feature.badge === 'Pro' 
              ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0" 
              : feature.badge === 'Novo'
              ? "bg-green-500 text-white border-0"
              : "bg-[#B96FFF]/10 text-[#B96FFF] border-[#B96FFF]/20"
          )}
        >
          {feature.badge === 'Pro' && '🌟 '}
          {feature.badge === 'Novo' && '✨ '}
          {feature.badge === 'Ganhe meses grátis' && '🎁 '}
          {feature.badge}
        </Badge>
      )}
      
      {/* Icon */}
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br from-[#B96FFF]/15 to-[#B96FFF]/5 group-hover:from-[#B96FFF]/25 group-hover:to-[#B96FFF]/10 transition-all duration-300"
      >
        <Icon className="w-7 h-7 text-[#B96FFF]" />
      </div>
      
      {/* Title */}
      <h3 className="font-display font-semibold text-xl text-[#1E082B] mb-3 group-hover:text-[#B96FFF] transition-colors">
        {feature.title}
      </h3>
      
      {/* Description */}
      <p className="text-[#6B7280] leading-relaxed mb-5">
        {feature.description}
      </p>

      {/* Formula (if exists) */}
      {feature.formula && (
        <div className="mb-5 p-3 bg-[#1E082B] rounded-lg">
          <code className="text-sm text-[#B96FFF] font-mono">
            {feature.formula}
          </code>
        </div>
      )}
      
      {/* Resources List */}
      <ul className="space-y-2">
        {feature.resources.map((resource, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-[#4B5563]">
            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span>{resource}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  return (
    <div 
      className="group p-6 bg-white rounded-2xl border border-[#E5E7EB] hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon Container - 48x48px circle */}
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
        style={{ backgroundColor: 'rgba(147, 51, 234, 0.15)' }}
      >
        <Icon className="w-6 h-6 text-[#9333EA]" />
      </div>
      
      {/* Title */}
      <h3 className="font-display font-semibold text-xl text-[#111827] mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-[#6B7280] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

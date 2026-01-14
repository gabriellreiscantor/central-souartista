import React, { useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface FeaturesTabsProps {
  categories: Category[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const FeaturesTabs: React.FC<FeaturesTabsProps> = ({
  categories,
  activeTab,
  onTabChange,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeButtonRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const button = activeButtonRef.current;
      const containerWidth = container.offsetWidth;
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      
      container.scrollTo({
        left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [activeTab]);

  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container py-4">
        <div 
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => {
            const isActive = activeTab === category.id;
            const Icon = category.icon;
            
            return (
              <button
                key={category.id}
                ref={isActive ? activeButtonRef : null}
                onClick={() => onTabChange(category.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-medium text-sm',
                  isActive
                    ? 'bg-[#B96FFF] text-white shadow-lg shadow-[#B96FFF]/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                )}
              >
                <span className="text-base">{category.label.split(' ')[0]}</span>
                <span>{category.label.split(' ').slice(1).join(' ')}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

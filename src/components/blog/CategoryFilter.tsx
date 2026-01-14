import React from 'react';
import { Button } from '@/components/ui/button';
import { BlogCategory, categoryLabels } from '@/data/blogData';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  activeCategory: BlogCategory;
  onCategoryChange: (category: BlogCategory) => void;
}

const categories: BlogCategory[] = ['all', 'gestao-financeira', 'carreira', 'dicas-praticas', 'novidades'];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={cn(
            "rounded-full transition-all",
            activeCategory === category 
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
              : "border-white/20 hover:border-primary/50 hover:bg-primary/10"
          )}
        >
          {categoryLabels[category]}
        </Button>
      ))}
    </div>
  );
};

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  variant?: 'light' | 'dark';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'light' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-smooth hover:bg-primary/10 ${
        variant === 'dark' ? 'text-white/80 hover:text-white' : 'text-foreground/70 hover:text-foreground'
      }`}>
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{language === 'pt' ? 'PT' : 'EN'}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        <DropdownMenuItem 
          onClick={() => setLanguage('pt')}
          className={language === 'pt' ? 'bg-primary/10 text-primary' : ''}
        >
          🇧🇷 Português
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'bg-primary/10 text-primary' : ''}
        >
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

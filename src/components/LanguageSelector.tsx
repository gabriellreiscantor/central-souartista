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

  const getLanguageLabel = () => {
    switch (language) {
      case 'pt': return 'Português';
      case 'en': return 'English';
      case 'es': return 'Español';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-smooth hover:bg-primary/10 ${
        variant === 'dark' ? 'text-white/80 hover:text-white' : 'text-foreground/70 hover:text-foreground'
      }`}>
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{getLanguageLabel()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px] bg-popover">
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
        <DropdownMenuItem 
          onClick={() => setLanguage('es')}
          className={language === 'es' ? 'bg-primary/10 text-primary' : ''}
        >
          🇪🇸 Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { DownloadButtons } from './DownloadButtons';
import { Mail } from 'lucide-react';

export const CTASection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 section-dark relative overflow-hidden">
      {/* Glow Effects */}
      <div className="blob-purple top-0 left-1/4 opacity-30" />
      <div className="blob-purple bottom-0 right-1/4 opacity-20" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg text-white/60 mb-10">
            {t.cta.subtitle}
          </p>

          <DownloadButtons size="lg" className="justify-center mb-12" />

          <div className="flex items-center justify-center gap-2 text-white/50">
            <Mail className="w-4 h-4" />
            <span className="text-sm">{t.cta.contact}</span>
            <a 
              href="mailto:contato@souartista.app" 
              className="text-sm text-primary hover:underline"
            >
              contato@souartista.app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { DownloadButtons } from './DownloadButtons';
import { DollarSign, Users } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20">
      {/* Glow Effects */}
      <div className="blob-purple top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="blob-purple top-0 right-0 opacity-20 w-[400px] h-[400px]" />
      
      <div className="container relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-in-up">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/90 font-medium">{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-fade-in-up stagger-1">
              {t.hero.title}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up stagger-2">
              {t.hero.subtitle}
            </p>

            {/* Download Buttons */}
            <div className="animate-fade-in-up stagger-3">
              <DownloadButtons size="lg" className="justify-center lg:justify-start" />
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start animate-fade-in-up stagger-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-400 border-2 border-purple-dark flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">
                      {['JM', 'AS', 'RC', 'LP', 'MG'][i - 1]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/70">{t.hero.socialProof}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex-1 flex justify-center animate-fade-in-up stagger-2">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-90" />
              
              {/* iPhone Mockup Container */}
              <div className="relative w-[280px] sm:w-[320px] animate-float">
                {/* Frame do iPhone via CSS */}
                <div className="relative w-full aspect-[9/19] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] p-[3px] shadow-2xl">
                  {/* Borda interna */}
                  <div className="w-full h-full rounded-[2.8rem] bg-black overflow-hidden relative">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20 border border-gray-800" />
                    
                    {/* Área da tela com vídeo */}
                    <div className="w-full h-full rounded-[2.8rem] overflow-hidden">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src="/demo-video.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

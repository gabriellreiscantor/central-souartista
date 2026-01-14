import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Play } from 'lucide-react';

export const FeaturesHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#1E082B] via-[#2D0F3F] to-[#1E082B]">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#B96FFF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#B96FFF]/15 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge 
            variant="outline" 
            className="mb-6 px-4 py-2 bg-white/5 border-[#B96FFF]/30 text-white backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-2 text-[#B96FFF]" />
            Todas as Ferramentas
          </Badge>
          
          {/* Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Tudo que você precisa para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B96FFF] to-[#D4A5FF]">
              gerenciar sua carreira musical
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ferramentas inteligentes desenvolvidas por músicos, para músicos. 
            Simplifique sua gestão financeira, agenda e equipe em um único lugar.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#B96FFF] hover:bg-[#A855F7] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#B96FFF]/30 transition-all hover:shadow-xl hover:shadow-[#B96FFF]/40"
            >
              Começar Gratuitamente
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Assistir Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
    </section>
  );
};

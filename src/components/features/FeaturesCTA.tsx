import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DownloadModal } from '@/components/DownloadModal';
import appleLogoImg from '@/assets/apple-logo.png';
import playstoreLogoImg from '@/assets/playstore-logo.webp';
import webLogoImg from '@/assets/web-logo.png';

export const FeaturesCTA: React.FC = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#1E082B] via-[#2D0F3F] to-[#1E082B]">
        {/* Background effects */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#B96FFF]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#B96FFF]/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Headline */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Pronto para profissionalizar{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B96FFF] to-[#D4A5FF]">
                sua carreira?
              </span>
            </h2>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl mx-auto">
              Junte-se a milhares de músicos que já organizaram suas finanças com o SouArtista.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsDownloadModalOpen(true)}
                size="lg"
                className="w-full sm:w-auto bg-white text-[#1E082B] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold shadow-xl transition-all hover:shadow-2xl"
              >
                <img src={appleLogoImg} alt="Apple" className="w-6 h-6 mr-2" />
                Baixar na App Store
              </Button>
              
              <Button 
                onClick={() => setIsDownloadModalOpen(true)}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
              >
                <img src={playstoreLogoImg} alt="Google Play" className="w-6 h-6 mr-2" />
                Google Play
              </Button>
              
              <Button 
                onClick={() => setIsDownloadModalOpen(true)}
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto text-white/70 hover:text-white hover:bg-white/5 px-6 py-6 text-lg rounded-xl"
              >
                <img src={webLogoImg} alt="Web" className="w-6 h-6 mr-2" />
                Versão Web
              </Button>
            </div>
          </div>
        </div>
      </section>

      <DownloadModal 
        open={isDownloadModalOpen} 
        onOpenChange={setIsDownloadModalOpen} 
      />
    </>
  );
};

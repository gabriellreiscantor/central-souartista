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
                {/* Screen Content Area - positioned inside the phone frame */}
                <div className="absolute top-[2.8%] left-[6%] w-[88%] h-[94.5%] rounded-[2rem] overflow-hidden bg-purple-dark z-0">
                  {/* 
                    PARA ADICIONAR VÍDEO/GIF NO FUTURO:
                    1. Descomente o bloco de vídeo abaixo
                    2. Adicione seu arquivo em /public/demo-video.mp4 ou /public/demo.gif
                    3. Comente ou remova o conteúdo estático
                  */}
                  
                  {/* Opção 1: Vídeo (descomente quando tiver o vídeo)
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/demo-video.mp4" type="video/mp4" />
                  </video>
                  */}
                  
                  {/* Opção 2: GIF (descomente quando tiver o gif)
                  <img 
                    src="/demo.gif" 
                    alt="App Demo"
                    className="w-full h-full object-cover"
                  />
                  */}
                  
                  {/* Conteúdo estático (remover quando adicionar vídeo/gif) */}
                  <div className="p-5 pt-12 h-full">
                    <div className="text-white/60 text-xs mb-2">Olá, João 👋</div>
                    <div className="text-white text-lg font-display font-bold mb-5">Sua semana</div>
                    
                    {/* Balance Card */}
                    <div className="bg-primary/20 rounded-2xl p-4 mb-4 border border-primary/30">
                      <div className="text-white/60 text-xs mb-1">Saldo do mês</div>
                      <div className="text-white text-2xl font-bold">R$ 8.450,00</div>
                      <div className="text-green-400 text-xs mt-1">+12% vs mês anterior</div>
                    </div>

                    {/* Upcoming Shows */}
                    <div className="text-white/60 text-xs mb-3">Próximos shows</div>
                    {[
                      { day: 'Sex', date: '17', venue: 'Bar do Blues', value: 'R$ 1.200' },
                      { day: 'Sab', date: '18', venue: 'Casa de Shows', value: 'R$ 2.500' },
                    ].map((show, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 mb-2">
                        <div className="w-10 h-10 bg-primary/30 rounded-lg flex flex-col items-center justify-center">
                          <span className="text-[9px] text-white/60">{show.day}</span>
                          <span className="text-white text-sm font-bold">{show.date}</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm font-medium">{show.venue}</div>
                          <div className="text-primary text-xs">{show.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* iPhone Frame - realistic device frame */}
                <div className="relative z-10 w-full aspect-[9/19] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] p-1 shadow-purple-lg">
                  <div className="w-full h-full rounded-[2.8rem] border-4 border-gray-700/50 bg-transparent">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
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

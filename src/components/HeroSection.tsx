import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { DownloadButtons } from './DownloadButtons';
import { DollarSign, Users } from 'lucide-react';
import appIcon from '@/assets/app-icon.png';
import testimonialAvatar1 from '@/assets/testimonial-avatar-1.jpg';
import testimonialAvatar2 from '@/assets/testimonial-avatar-2.jpg';
import testimonialAvatar3 from '@/assets/testimonial-avatar-3.jpg';
import testimonialAvatar4 from '@/assets/testimonial-avatar-4.jpg';
import testimonialAvatar5 from '@/assets/testimonial-avatar-5.jpg';

const avatars = [
  testimonialAvatar1,
  testimonialAvatar2,
  testimonialAvatar3,
  testimonialAvatar4,
  testimonialAvatar5,
];

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 animate-fade-in-up">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/90 font-medium">{t.hero.badge}</span>
            </div>

            {/* App Icon */}
            <div className="flex justify-center lg:justify-start mb-6 animate-fade-in-up stagger-1">
              <img 
                src={appIcon} 
                alt="SouArtista App" 
                className="w-16 h-16 rounded-2xl shadow-lg shadow-primary/30"
              />
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
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt={`Usuário ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-purple-dark object-cover"
                  />
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
                {/* Sombra externa */}
                <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-[4rem] scale-105" />
                
                {/* Frame do iPhone via CSS */}
                <div className="relative w-full aspect-[9/19.5] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-[2.5rem] p-[10px] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(139,92,246,0.3)]">
                  {/* Borda interna metálica */}
                  <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-gray-900 to-black p-[3px] overflow-hidden relative">
                    {/* Tela */}
                    <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-black">
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
                
                {/* Botões laterais do iPhone */}
                <div className="absolute left-0 top-[20%] w-[3px] h-8 bg-gray-700 rounded-l-sm" />
                <div className="absolute left-0 top-[32%] w-[3px] h-12 bg-gray-700 rounded-l-sm" />
                <div className="absolute left-0 top-[45%] w-[3px] h-12 bg-gray-700 rounded-l-sm" />
                <div className="absolute right-0 top-[28%] w-[3px] h-16 bg-gray-700 rounded-r-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

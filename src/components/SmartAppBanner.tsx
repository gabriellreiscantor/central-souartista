import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/hooks/use-toast';
import appIcon from '@/assets/app-icon.png';

const BANNER_DISMISS_KEY = 'souartista_banner_dismissed';
const DISMISS_DURATION_DAYS = 7;

type OS = 'ios' | 'android' | null;

const getOS = (): OS => {
  if (typeof navigator === 'undefined') return null;
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) return 'ios';
  if (/Android/.test(ua)) return 'android';
  return null;
};

const isDismissed = (): boolean => {
  if (typeof localStorage === 'undefined') return false;
  const dismissed = localStorage.getItem(BANNER_DISMISS_KEY);
  if (!dismissed) return false;
  
  const dismissedDate = new Date(dismissed);
  const now = new Date();
  const diffDays = (now.getTime() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24);
  
  return diffDays < DISMISS_DURATION_DAYS;
};

interface SmartAppBannerProps {
  onVisibilityChange?: (visible: boolean) => void;
}

export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({ onVisibilityChange }) => {
  const isMobile = useIsMobile();
  const [os, setOS] = useState<OS>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const detectedOS = getOS();
    setOS(detectedOS);
    
    if (detectedOS && !isDismissed()) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 50);
    }
  }, []);

  useEffect(() => {
    onVisibilityChange?.(isVisible && isAnimating);
  }, [isVisible, isAnimating, onVisibilityChange]);

  const handleDismiss = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem(BANNER_DISMISS_KEY, new Date().toISOString());
    }, 300);
  };

  const handleOpen = () => {
    if (os === 'ios') {
      // App Store link - substitua pelo link real quando disponível
      window.open('https://apps.apple.com/app/souartista/id6743639498', '_blank');
    } else if (os === 'android') {
      toast({
        title: "Em breve! 🚀",
        description: "Já, já chegamos na Play Store!",
        duration: 3000,
      });
    }
  };

  // Só mostra em mobile e quando há OS detectado
  if (!isMobile || !os || !isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[60] bg-white border-b border-border shadow-sm transition-transform duration-300 ease-out ${
        isAnimating ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between px-3 py-2.5 max-w-7xl mx-auto">
        {/* App Info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <img 
            src={appIcon} 
            alt="SouArtista" 
            className="w-12 h-12 rounded-xl shadow-sm flex-shrink-0"
          />
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground text-sm leading-tight">SouArtista</h3>
            <p className="text-xs text-muted-foreground leading-tight mt-0.5">
              Gerencie seus shows
            </p>
            <p className="text-[10px] text-muted-foreground/70 leading-tight">
              {os === 'ios' ? 'App Store' : 'Google Play'}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleOpen}
            className={`px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors ${
              os === 'android' ? 'opacity-70' : ''
            }`}
          >
            Abrir
          </button>
          <button
            onClick={handleDismiss}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fechar banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

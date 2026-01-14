import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import appIcon from '@/assets/app-icon.png';
import appleLogo from '@/assets/apple-logo.png';
import playstoreLogo from '@/assets/playstore-logo.webp';
import webLogo from '@/assets/web-logo.png';

interface DownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ open, onOpenChange }) => {
  const appDownloads = [
    {
      label: 'SouArtista no iOS',
      icon: 'apple' as const,
      href: '#',
    },
    {
      label: 'SouArtista no Android',
      icon: 'playstore' as const,
      href: '#',
    },
  ];

  const webDownload = {
    label: 'SouArtista no Web App',
    href: 'https://souartista.app',
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-0 rounded-3xl p-8 shadow-2xl">
        <DialogHeader className="flex flex-col items-center text-center space-y-4">
          <div className="w-24 h-24 rounded-[1.75rem] overflow-hidden shadow-xl ring-4 ring-primary/10">
            <img 
              src={appIcon} 
              alt="SouArtista" 
              className="w-full h-full object-cover"
            />
          </div>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            SouArtista - Cachês e agenda
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-6 mt-6">
          {/* App Downloads Section */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide px-1">
              Baixe o app SouArtista
            </p>
            <div className="flex flex-col gap-2">
              {appDownloads.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  className="flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-primary/5 hover:to-primary/10 border border-gray-100 hover:border-primary/20 rounded-2xl transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  {option.icon === 'apple' ? (
                    <div className="w-11 h-11 rounded-xl overflow-hidden">
                      <img src={appleLogo} alt="Apple" className="w-full h-full object-cover" />
                    </div>
                  ) : option.icon === 'playstore' ? (
                    <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                      <img src={playstoreLogo} alt="Google Play" className="w-8 h-8 object-contain" />
                    </div>
                  ) : null}
                  <span className="text-gray-800 font-medium group-hover:text-primary transition-colors">
                    {option.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Web App Section */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide px-1">
              Use no seu PC
            </p>
            <a
              href={webDownload.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-primary/5 hover:to-primary/10 border border-gray-100 hover:border-primary/20 rounded-2xl transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-11 h-11 rounded-xl overflow-hidden">
                <img src={webLogo} alt="Web App" className="w-full h-full object-cover" />
              </div>
              <span className="text-gray-800 font-medium group-hover:text-primary transition-colors">
                {webDownload.label}
              </span>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

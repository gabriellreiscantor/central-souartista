import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Apple, Smartphone, Globe } from 'lucide-react';
import appIcon from '@/assets/app-icon.png';

interface DownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ open, onOpenChange }) => {
  const downloadOptions = [
    {
      label: 'SouArtista no iOS',
      icon: Apple,
      href: '#',
    },
    {
      label: 'SouArtista no Android',
      icon: Smartphone,
      href: '#',
    },
    {
      label: 'SouArtista no Web App',
      icon: Globe,
      href: 'https://souartista.app',
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-0 rounded-3xl p-8">
        <DialogHeader className="flex flex-col items-center text-center space-y-4">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
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
        
        <div className="flex flex-col gap-3 mt-6">
          {downloadOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : undefined}
              rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 px-5 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
            >
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <option.icon className="w-5 h-5" />
              </div>
              <span className="text-gray-900 font-medium group-hover:text-primary transition-colors">
                {option.label}
              </span>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

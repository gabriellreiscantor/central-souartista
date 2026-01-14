import React from 'react';
import { Apple, Globe } from 'lucide-react';

interface DownloadButtonsProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const DownloadButtons: React.FC<DownloadButtonsProps> = ({ 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-10 px-4 text-xs',
    md: 'h-12 px-5 text-sm',
    lg: 'h-14 px-6 text-base',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {/* App Store Button */}
      <a
        href="#"
        className={`flex items-center gap-3 bg-white text-purple-dark rounded-xl font-medium shadow-purple hover:shadow-purple-lg hover-lift ${sizeClasses[size]}`}
      >
        <Apple className={iconSizes[size]} />
        <div className="flex flex-col items-start">
          <span className="text-[10px] opacity-70 leading-none">Baixar na</span>
          <span className="font-semibold leading-tight">App Store</span>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href="#"
        className={`flex items-center gap-3 bg-white text-purple-dark rounded-xl font-medium shadow-purple hover:shadow-purple-lg hover-lift ${sizeClasses[size]}`}
      >
        <svg className={iconSizes[size]} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-[10px] opacity-70 leading-none">Disponível no</span>
          <span className="font-semibold leading-tight">Google Play</span>
        </div>
      </a>

      {/* Web App Button */}
      <a
        href="https://souartista.app"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 bg-gradient-to-r from-primary to-purple-400 text-white rounded-xl font-medium shadow-purple hover:shadow-purple-lg hover-lift ${sizeClasses[size]}`}
      >
        <Globe className={iconSizes[size]} />
        <div className="flex flex-col items-start">
          <span className="text-[10px] opacity-90 leading-none">Acessar via</span>
          <span className="font-semibold leading-tight">Web App</span>
        </div>
      </a>
    </div>
  );
};

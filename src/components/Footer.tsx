import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { DownloadModal } from './DownloadModal';
import { Instagram, Youtube } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = React.useState(false);

  const footerLinks = {
    product: [
      { label: t.footer.features, path: '/funcionalidades' },
      { label: t.footer.pricing, path: '/precos' },
      { label: t.footer.download, path: null, onClick: () => setIsDownloadModalOpen(true) },
    ],
    company: [
      { label: t.footer.about, path: '/sobre' },
      { label: t.footer.blog, path: '/blog' },
      { label: t.footer.contact, path: '/contato' },
    ],
    legal: [
      { label: t.footer.terms, path: '/termos' },
      { label: t.footer.privacy, path: '/privacidade' },
      { label: t.footer.trust, path: '/confianca' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ), 
      href: '#', 
      label: 'TikTok' 
    },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-purple-dark text-white py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="SouArtista" className="h-16 w-auto" />
            </Link>
            <p className="text-white/50 text-sm mb-4">
              Gestão financeira e agenda para músicos e artistas.
            </p>
            <LanguageSelector variant="dark" />
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={link.path || index}>
                  {link.path ? (
                    <Link 
                      to={link.path}
                      className="text-white/60 hover:text-white transition-smooth text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={link.onClick}
                      className="text-white/60 hover:text-white transition-smooth text-sm"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/60 hover:text-white transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/60 hover:text-white transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.social}</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p className="text-white/60 text-sm font-medium">
                {t.footer.copyright}
              </p>
              <span className="hidden md:block text-white/30">|</span>
              <p className="text-white/40 text-sm">
                {t.footer.developer}
              </p>
            </div>
            <p className="text-white/30 text-xs">
              {t.footer.cnpj}
            </p>
          </div>
        </div>
      </div>

      <DownloadModal
        open={isDownloadModalOpen}
        onOpenChange={setIsDownloadModalOpen}
      />
    </footer>
  );
};

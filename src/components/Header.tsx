import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { DownloadModal } from './DownloadModal';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

interface HeaderProps {
  bannerVisible?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ bannerVisible = false }) => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/funcionalidades', label: t.nav.features },
    { path: '/precos', label: t.nav.pricing },
    { path: '/blog', label: t.nav.blog },
  ];

  // Altura do banner: ~64px no mobile
  const bannerOffset = bannerVisible ? 'top-16' : 'top-0';

  return (
    <>
      <header className={`fixed ${bannerOffset} left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-purple-dark/90 backdrop-blur-xl border-b border-white/10 py-3' 
          : isHomePage 
            ? 'bg-transparent py-5'
            : 'bg-purple-dark py-5'
      }`}>
        <div className="container flex items-center justify-between relative">
          {/* Language selector on mobile (left side) */}
          <div className="md:hidden">
            <LanguageSelector variant="dark" />
          </div>
          
          {/* Logo - centered on mobile */}
          <Link to="/" className="flex items-center absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
            <img 
              src={logo} 
              alt="SouArtista" 
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-16 md:h-20'
              }`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? 'text-white bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector variant="dark" />
            <Button 
              onClick={() => setIsDownloadModalOpen(true)}
              className="rounded-full px-6 shadow-purple hover:shadow-purple-lg transition-smooth"
            >
              {t.nav.download}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-purple-dark border-l border-white/10 animate-slide-in-right">
            <div className="pt-20 px-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-smooth ${
                      isActive(link.path)
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-4">
                <LanguageSelector variant="dark" />
                <Button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsDownloadModalOpen(true);
                  }}
                  className="w-full rounded-full shadow-purple"
                >
                  {t.nav.download}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <DownloadModal 
        open={isDownloadModalOpen} 
        onOpenChange={setIsDownloadModalOpen} 
      />
    </>
  );
};

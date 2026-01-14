import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturesHero: React.FC = () => {
  return (
    <section className="pt-28 pb-12 bg-background">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">
            Início
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Funcionalidades</span>
        </nav>
        
        {/* Title */}
        <div className="max-w-2xl">
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Funcionalidades
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conheça todas as ferramentas do SouArtista para gerenciar sua carreira musical de forma profissional.
          </p>
        </div>
      </div>
    </section>
  );
};

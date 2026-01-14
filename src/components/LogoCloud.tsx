import React from 'react';

const logos = [
  'TechTudo',
  'StartSe',
  'Negócios',
  'Música+',
  'TechCrunch',
  'Billboard',
];

export const LogoCloud: React.FC = () => {
  return (
    <section className="py-16 bg-secondary/30 border-y border-border">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Confiam em nós
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-xl font-display font-bold text-muted-foreground/40 hover:text-muted-foreground transition-smooth"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

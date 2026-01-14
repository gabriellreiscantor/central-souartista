import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: 'João Mendes',
    handle: '@joaomendes_music',
    content: 'Finalmente consigo saber exatamente quanto ganho por mês. O SouArtista mudou minha vida financeira como músico.',
  },
  {
    name: 'Ana Silva',
    handle: '@anasilvamusic',
    content: 'O simulador de nota fiscal me salvou! Agora sei exatamente quanto vou receber líquido antes de fechar qualquer show.',
  },
  {
    name: 'Ricardo Costa',
    handle: '@ricardocosta_',
    content: 'Gerenciar minha banda nunca foi tão fácil. Todos os pagamentos organizados e a galera sempre sabe quando vai receber.',
  },
  {
    name: 'Luísa Pereira',
    handle: '@luisap_sax',
    content: 'Uso há 6 meses e já economizei horas de trabalho com planilhas. Super recomendo para qualquer músico profissional.',
  },
  {
    name: 'Marcos Gomes',
    handle: '@marcosgomes_drums',
    content: 'A agenda integrada com as finanças é genial. Vejo meus shows e já sei quanto vou faturar no mês.',
  },
  {
    name: 'Carla Freitas',
    handle: '@carlafreitas',
    content: 'O melhor investimento que fiz na minha carreira. O app é lindo, fácil de usar e resolve todos os meus problemas.',
  },
];

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 section-dark" id="testimonials">
      {/* Glow Effect */}
      <div className="blob-purple top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-white/60">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              handle={testimonial.handle}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

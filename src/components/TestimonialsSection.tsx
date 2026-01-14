import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TestimonialCard } from './TestimonialCard';
import testimonialAvatar1 from '@/assets/testimonial-avatar-1.jpg';
import testimonialAvatar2 from '@/assets/testimonial-avatar-2.jpg';
import testimonialAvatar3 from '@/assets/testimonial-avatar-3.jpg';
import testimonialAvatar4 from '@/assets/testimonial-avatar-4.jpg';
import testimonialAvatar5 from '@/assets/testimonial-avatar-5.jpg';
import testimonialAvatar6 from '@/assets/testimonial-avatar-6.jpg';

const avatars = [
  testimonialAvatar1,
  testimonialAvatar2,
  testimonialAvatar3,
  testimonialAvatar6,
  testimonialAvatar5,
  testimonialAvatar4,
];

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 section-dark overflow-hidden relative" id="testimonials">
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
          {t.testimonials.items.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              handle={testimonial.handle}
              content={testimonial.content}
              avatar={avatars[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

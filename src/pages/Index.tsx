import React from 'react';
import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { WhatsNewSection } from '@/components/WhatsNewSection';
import { SEOHead } from '@/components/SEOHead';

const Index: React.FC = () => {
  return (
    <Layout>
      <SEOHead 
        title="SouArtista — Agenda de shows para Web, iPhone e Android"
        description="Agenda de shows e gestão financeira multiplataforma para músicos, cantores, DJs e bandas. Use na Web, iPhone e Android com tudo sincronizado."
        canonical="https://souartista.com"
        includeAppSchemas
        breadcrumbs={[
          { name: 'Início', url: 'https://souartista.com' }
        ]}
      />
      <HeroSection />
      <FeaturesSection />
      <WhatsNewSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

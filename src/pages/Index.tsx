import React from 'react';
import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { SEOHead } from '@/components/SEOHead';

const Index: React.FC = () => {
  return (
    <Layout>
      <SEOHead 
        title="SouArtista — Gestão financeira para quem vive de música"
        description="O aplicativo feito para músicos, cantores, DJs e artistas brasileiros organizarem shows, cachês, despesas e terem controle real da vida financeira."
        canonical="https://souartista.app"
        includeAppSchemas
        breadcrumbs={[
          { name: 'Início', url: 'https://souartista.app' }
        ]}
      />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

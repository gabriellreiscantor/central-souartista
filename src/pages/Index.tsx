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
        title="SouArtista — Agenda de shows + gestão financeira para músicos"
        description="O app mais completo para músicos, cantores, DJs e bandas: agenda de shows, controle de cachês, despesas, equipe e lucro líquido em um só lugar."
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

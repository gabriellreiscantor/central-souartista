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
        title="SouArtista — Agenda, repertório, palco e financeiro para músicos"
        description="App completo para músicos: agenda, repertórios e setlists com letras e tons, Modo Palco offline, notificações push, cachês, contratos, equipe e estrada."
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

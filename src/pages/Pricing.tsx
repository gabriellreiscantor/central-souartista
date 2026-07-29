import React from 'react';
import { Layout } from '@/components/Layout';
import { PricingSection } from '@/components/PricingSection';
import { CTASection } from '@/components/CTASection';
import { SEOHead } from '@/components/SEOHead';

const Pricing: React.FC = () => {
  return (
    <Layout>
      <SEOHead 
        title="Preços e Planos - SouArtista"
        description="Conheça os planos do SouArtista: Plano Mensal por R$ 29,90 ou Plano Anual por R$ 300,00. Organize sua carreira musical com o melhor app para músicos, cantores e DJs."
        keywords="preços souartista, planos app músico, assinatura gestão musical, quanto custa souartista, plano pro músico, app para DJ preço"
        canonical="https://souartista.com/precos"
        breadcrumbs={[
          { name: 'Início', url: 'https://souartista.com' },
          { name: 'Preços', url: 'https://souartista.com/precos' }
        ]}
      />
      <PricingSection />
      <CTASection />
    </Layout>
  );
};

export default Pricing;

import React from 'react';
import { Layout } from '@/components/Layout';
import { PricingSection } from '@/components/PricingSection';
import { CTASection } from '@/components/CTASection';
import { SEOHead } from '@/components/SEOHead';

const Pricing: React.FC = () => {
  return (
    <Layout>
      <SEOHead 
        title="Preços e Planos - SouArtista | App para Músicos"
        description="Conheça os planos do SouArtista: Gratuito, Pro e Premium. Comece grátis por 7 dias e organize sua carreira musical. A partir de R$ 19,90/mês."
        keywords="preços souartista, planos app músico, assinatura gestão musical, quanto custa souartista, plano pro músico"
        canonical="https://souartista.app/precos"
      />
      <PricingSection />
      <CTASection />
    </Layout>
  );
};

export default Pricing;

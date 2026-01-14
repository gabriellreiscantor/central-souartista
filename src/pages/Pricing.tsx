import React from 'react';
import { Layout } from '@/components/Layout';
import { PricingSection } from '@/components/PricingSection';
import { CTASection } from '@/components/CTASection';

const Pricing: React.FC = () => {
  return (
    <Layout>
      <PricingSection />
      <CTASection />
    </Layout>
  );
};

export default Pricing;

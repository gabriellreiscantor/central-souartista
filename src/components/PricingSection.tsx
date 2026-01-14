import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, Star, Building2, Shield, Lock, RefreshCw, Headphones, CreditCard, QrCode } from 'lucide-react';

type BillingCycle = 'monthly' | 'yearly';
type PaymentMethod = 'card' | 'pix';

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('yearly');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  const plans = {
    monthly: {
      price: 'R$ 29,90',
      period: '/mês',
      equivalent: null,
      savings: null,
      description: 'Ideal para começar e explorar os recursos',
      features: [
        { text: 'Gerenciamento de shows ilimitado', included: true },
        { text: 'Controle financeiro completo', included: true },
        { text: 'Gestão de equipe e músicos', included: true },
        { text: 'Relatórios detalhados', included: true },
        { text: 'Suporte prioritário via tickets', included: true },
        { text: 'Suporte premium via WhatsApp', included: false },
      ],
    },
    yearly: {
      price: 'R$ 300,00',
      period: '/ano',
      equivalent: 'R$ 25,00/mês',
      savings: 'Economize R$ 58,80',
      description: 'A melhor opção para profissionais comprometidos',
      features: [
        { text: 'Gerenciamento de shows ilimitado', included: true },
        { text: 'Controle financeiro completo', included: true },
        { text: 'Gestão de equipe e músicos', included: true },
        { text: 'Relatórios detalhados', included: true },
        { text: 'Suporte prioritário via tickets', included: true },
        { text: 'Pague uma vez, use o ano todo', included: true },
        { text: 'Suporte premium via WhatsApp', included: true },
      ],
    },
  };

  const currentPlan = plans[billingCycle];

  return (
    <section className="pt-32 pb-24 bg-background" id="pricing">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Escolha o plano ideal para você
          </h1>
          <p className="text-lg text-muted-foreground">
            Libere todo o potencial da plataforma e organize sua carreira musical.
          </p>
        </div>

        {/* Toggles Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          {/* Billing Cycle Toggle */}
          <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Anual
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                -16%
              </span>
            </button>
          </div>

          {/* Payment Method Toggle */}
          <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-full">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                paymentMethod === 'card'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              Cartão
            </button>
            <button
              onClick={() => setPaymentMethod('pix')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                paymentMethod === 'pix'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <QrCode className="w-4 h-4" />
              PIX
            </button>
          </div>
        </div>

        {/* Payment Method Notice */}
        <div className="text-center mb-8">
          {paymentMethod === 'card' ? (
            <p className="text-sm text-muted-foreground">
              <span className="text-green-500 font-medium">✓ 7 dias grátis</span> • Primeira cobrança em 7 dias
            </p>
          ) : (
            <p className="text-sm text-amber-500 font-medium">
              ⚠️ PIX: cobrança imediata (sem período de teste)
            </p>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Plan Card */}
          <div className={`relative rounded-2xl p-8 transition-all ${
            billingCycle === 'yearly'
              ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40 shadow-xl shadow-primary/10'
              : 'bg-card border border-border'
          }`}>
            {/* Popular Badge */}
            {billingCycle === 'yearly' && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-current" />
                Mais Popular
              </div>
            )}

            {/* Free Trial Badge */}
            {paymentMethod === 'card' && (
              <div className="absolute top-4 right-4 bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1 rounded-full text-xs font-medium">
                7 dias grátis
              </div>
            )}

            <div className="mb-6 mt-4">
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                Plano Pro {billingCycle === 'yearly' ? 'Anual' : 'Mensal'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {currentPlan.description}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-4xl text-foreground">
                  {currentPlan.price}
                </span>
                <span className="text-muted-foreground">{currentPlan.period}</span>
              </div>
              {currentPlan.equivalent && (
                <p className="text-sm text-muted-foreground mt-1">
                  Equivale a {currentPlan.equivalent}
                </p>
              )}
              {currentPlan.savings && (
                <span className="inline-block mt-2 bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1 rounded-full text-sm font-medium">
                  {currentPlan.savings}
                </span>
              )}
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/40 shrink-0 mt-0.5" />
                  )}
                  <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/60'}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Security Notice */}
            {paymentMethod === 'card' && (
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 mb-6">
                <h4 className="font-medium text-foreground text-sm mb-1">
                  Teste por 7 dias, sem compromisso!
                </h4>
                <p className="text-xs text-muted-foreground">
                  Seu cartão será validado hoje, mas a primeira cobrança só acontecerá em 7 dias. 
                  Cancele a qualquer momento durante o período de teste sem custos.
                </p>
              </div>
            )}

            {paymentMethod === 'pix' && (
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                <h4 className="font-medium text-foreground text-sm mb-1">
                  Pagamento via PIX
                </h4>
                <p className="text-xs text-muted-foreground">
                  Com PIX, o acesso é liberado imediatamente após a confirmação do pagamento.
                </p>
              </div>
            )}

            {/* CTA Button */}
            <Button 
              className="w-full rounded-full shadow-purple hover:shadow-purple-lg"
              size="lg"
            >
              {paymentMethod === 'card' ? 'Começar teste grátis' : 'Assinar agora'}
            </Button>

            {paymentMethod === 'card' && (
              <p className="text-xs text-center text-muted-foreground mt-3">
                Cancele a qualquer momento durante os 7 dias grátis — você não será cobrado!
              </p>
            )}
          </div>

          {/* Enterprise Card */}
          <div className="rounded-2xl p-8 bg-card border border-border flex flex-col">
            <h3 className="font-display font-semibold text-xl text-foreground mb-2">
              Plano Enterprise
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Para produtoras e empresas que gerenciam múltiplos artistas e bandas
            </p>

            <div className="mb-6">
              <span className="font-display font-bold text-3xl text-foreground">
                Sob consulta
              </span>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">Gestão de múltiplas bandas/artistas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">Relatórios consolidados por projeto</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">Dashboard centralizado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">Suporte dedicado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">Proposta personalizada em até 24h</span>
              </li>
            </ul>

            <Button 
              variant="outline"
              className="w-full rounded-full"
              size="lg"
              onClick={() => window.location.href = 'mailto:contato@souartista.app'}
            >
              Falar com a equipe
            </Button>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="rounded-2xl bg-card border border-border p-6 mb-12 overflow-x-auto">
          <h3 className="font-display font-semibold text-lg text-foreground mb-6 text-center">
            Comparativo de Recursos
          </h3>
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Recurso</th>
                <th className="text-center py-3 px-4 text-muted-foreground font-medium">Mensal</th>
                <th className="text-center py-3 px-4 text-muted-foreground font-medium">Anual</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Shows ilimitados', monthly: true, yearly: true },
                { feature: 'Controle financeiro', monthly: true, yearly: true },
                { feature: 'Gestão de equipe', monthly: true, yearly: true },
                { feature: 'Relatórios detalhados', monthly: true, yearly: true },
                { feature: 'Suporte via tickets', monthly: true, yearly: true },
                { feature: 'Suporte WhatsApp', monthly: false, yearly: true },
                { feature: 'Desconto', monthly: '-', yearly: '16%' },
              ].map((row, index) => (
                <tr key={index} className="border-b border-border/50 last:border-0">
                  <td className="py-3 px-4 text-foreground">{row.feature}</td>
                  <td className="py-3 px-4 text-center">
                    {typeof row.monthly === 'boolean' ? (
                      row.monthly ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                      )
                    ) : (
                      <span className="text-muted-foreground">{row.monthly}</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {typeof row.yearly === 'boolean' ? (
                      row.yearly ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                      )
                    ) : (
                      <span className="text-green-500 font-medium">{row.yearly}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Shield, text: 'Dados criptografados e seguros' },
            { icon: Lock, text: 'Conformidade com LGPD' },
            { icon: RefreshCw, text: 'Cancele quando quiser, sem burocracia' },
            { icon: Headphones, text: 'Suporte real, não bot' },
          ].map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/30 text-center"
            >
              <item.icon className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

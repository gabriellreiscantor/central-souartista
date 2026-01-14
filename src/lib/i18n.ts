export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      features: 'Funcionalidades',
      pricing: 'Preços',
      blog: 'Blog',
      download: 'Baixar App',
    },
    hero: {
      badge: 'Experimente 7 dias grátis',
      title: 'Suas finanças musicais e agenda organizadas',
      subtitle: 'Cuidamos da parte chata e você cuida da música',
      socialProof: 'Mais de 5.000 artistas já organizam sua carreira conosco',
      downloadApp: 'Baixar App',
    },
    features: {
      title: 'Tudo que você precisa para gerenciar sua carreira',
      subtitle: 'Ferramentas pensadas por músicos, para músicos',
      financial: {
        title: 'Controle total do seu dinheiro',
        description: 'Registre cachês, despesas e recebimentos. Veja exatamente quanto sobra no seu bolso depois de cada show.',
      },
      calendar: {
        title: 'Nunca mais perca um compromisso',
        description: 'Shows, ensaios e eventos em um só lugar. Receba notificações direto na tela do seu celular e nunca esqueça um show.',
      },
      musicians: {
        title: 'Sua banda na palma da mão',
        description: 'Gerencie sidemen, divida cachês automaticamente e mantenha a comunicação clara com toda sua equipe.',
      },
      invoice: {
        title: 'Saiba quanto vai receber de verdade',
        description: 'Simule notas fiscais e descubra seu cachê líquido após ISS, INSS e outros descontos. Sem surpresas na hora do pagamento.',
      },
      reports: {
        title: 'Entenda seu negócio como nunca',
        description: 'Gráficos claros que mostram sua evolução mês a mês. Saiba quais shows pagam melhor e onde você pode economizar.',
      },
      transportation: {
        title: 'Seus custos de estrada organizados',
        description: 'Registre quilometragem, pedágios, combustível e hospedagem. Saiba exatamente quanto cada show custa para você chegar.',
      },
    },
    testimonials: {
      title: 'Amado por milhares de artistas',
      subtitle: 'Veja o que nossos usuários estão dizendo',
    },
    pricing: {
      title: 'Escolha seu plano',
      subtitle: 'Comece grátis e evolua quando precisar',
      monthly: 'Mensal',
      yearly: 'Anual',
      yearlyDiscount: '15% de desconto',
      popular: 'Mais Popular',
      free: {
        name: 'Gratuito',
        price: 'R$ 0',
        period: '/mês',
        features: [
          'Até 5 shows cadastrados',
          'Agenda básica',
          'Relatórios limitados',
        ],
        cta: 'Começar Grátis',
      },
      pro: {
        name: 'Pro',
        price: 'R$ 19,90',
        priceYearly: 'R$ 199',
        period: '/mês',
        periodYearly: '/ano',
        features: [
          'Shows ilimitados',
          'Gestão de músicos',
          'Relatórios completos',
          'Simulador de nota fiscal',
          'Suporte prioritário',
        ],
        cta: 'Assinar Pro',
      },
      premium: {
        name: 'Premium',
        price: 'R$ 39,90',
        priceYearly: 'R$ 399',
        period: '/mês',
        periodYearly: '/ano',
        features: [
          'Tudo do Pro +',
          'Multi-bandas',
          'Exportação avançada',
          'Backup na nuvem',
          'Suporte VIP',
        ],
        cta: 'Assinar Premium',
      },
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tire suas dúvidas sobre o SouArtista',
      questions: [
        {
          question: 'O que é o SouArtista?',
          answer: 'O SouArtista é o aplicativo completo de gestão para músicos e artistas. Organize seus shows, controle cachês, gerencie despesas, calcule impostos, registre custos de locomoção e acompanhe toda sua carreira financeira em um só lugar. Desenvolvido por músicos que entendem sua realidade.',
        },
        {
          question: 'Qual a diferença entre Artista e Músico no app?',
          answer: 'O Artista é quem contrata, gerencia a banda e define os cachês dos shows. O Músico é quem toca nas bandas e recebe convites de participação. Se você faz os dois, pode ter uma conta como Artista e gerenciar seus músicos.',
        },
        {
          question: 'Como funciona o período de teste gratuito?',
          answer: 'Você tem 7 dias grátis para testar todas as funcionalidades do plano Pro. Não pedimos cartão de crédito para começar. Após o período, você pode continuar no plano gratuito com funcionalidades básicas ou assinar o Pro.',
        },
        {
          question: 'O app me lembra dos meus shows?',
          answer: 'Sim! O SouArtista envia notificações inteligentes para você nunca esquecer um compromisso: 7 dias antes do show, 1 dia antes, no dia do show, 3 horas antes e 30 minutos antes. Você nunca mais vai perder um show ou ensaio!',
        },
        {
          question: 'Posso usar no iPhone e Android?',
          answer: 'Sim! O SouArtista está disponível na App Store (iOS) e Google Play Store (Android). O app funciona offline e sincroniza quando você tiver internet.',
        },
        {
          question: 'Meus dados estão seguros?',
          answer: 'Absolutamente. Utilizamos criptografia de ponta a ponta e infraestrutura de nível bancário. Seguimos a LGPD (Lei Geral de Proteção de Dados) e você pode solicitar exportação ou exclusão dos seus dados a qualquer momento.',
        },
        {
          question: 'O que é o Simulador de Nota Fiscal?',
          answer: 'É uma ferramenta exclusiva que calcula automaticamente quanto você vai receber líquido após impostos (ISS, IRRF). Basta informar o valor bruto do cachê e o tipo de recebimento (PF ou PJ) para saber exatamente quanto vai cair na sua conta.',
        },
        {
          question: 'Posso registrar custos de locomoção?',
          answer: 'Sim! O app tem uma seção dedicada para registrar quilometragem, pedágios, combustível e hospedagem. No final do mês, você sabe exatamente quanto gastou para se deslocar até os shows.',
        },
        {
          question: 'Como funciona o programa de indicação?',
          answer: 'Cada usuário tem um código de indicação único. Quando alguém se cadastra usando seu código, vocês dois ganham benefícios. Acompanhe suas indicações e recompensas diretamente no app.',
        },
        {
          question: 'Posso gerenciar múltiplas bandas?',
          answer: 'No momento, o gerenciamento de múltiplos projetos/bandas está disponível apenas para produtoras e empresas. Se você gerencia várias bandas profissionalmente, entre em contato conosco para conhecer nosso plano especial.',
        },
        {
          question: 'Como cancelo minha assinatura?',
          answer: 'Você pode cancelar a qualquer momento diretamente pelo app, na seção "Assinatura". Sem burocracia, sem ligações. O acesso Pro continua até o fim do período já pago.',
        },
        {
          question: 'Preciso de internet para usar o app?',
          answer: 'O app funciona offline para consultas básicas. Para sincronizar dados, adicionar shows ou gerar relatórios, você precisa de conexão. Assim que conectar, tudo é atualizado automaticamente.',
        },
        {
          question: 'Posso exportar meus relatórios?',
          answer: 'Sim! O plano Pro permite exportar relatórios financeiros em PDF e Excel. Perfeito para declaração de imposto de renda ou para mostrar ao seu contador.',
        },
        {
          question: 'Como entro em contato com o suporte?',
          answer: 'Diretamente pelo app! Na seção "Suporte", você pode enviar mensagens, sugestões ou reportar problemas. Nossa equipe responde em até 24 horas úteis.',
        },
      ],
    },
    cta: {
      title: 'Pronto para organizar sua carreira musical?',
      subtitle: 'Baixe agora e comece a usar gratuitamente',
      contact: 'Dúvidas? Fale conosco:',
    },
    footer: {
      product: 'Produto',
      company: 'Empresa',
      legal: 'Legal',
      social: 'Redes Sociais',
      features: 'Funcionalidades',
      pricing: 'Preços',
      download: 'Download',
      about: 'Sobre',
      blog: 'Blog',
      contact: 'Contato',
      terms: 'Termos de Uso',
      privacy: 'Política de Privacidade',
      trust: 'Central de Confiança',
      copyright: '© 2025 SouArtista',
      developer: 'Desenvolvido por Savini Comunicação',
      cnpj: 'CNPJ: 50.075.961/0001-33',
    },
  },
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      pricing: 'Pricing',
      blog: 'Blog',
      download: 'Download App',
    },
    hero: {
      badge: 'Try 7 days free',
      title: 'Your music finances and schedule organized',
      subtitle: 'We handle the boring stuff so you can focus on the music',
      socialProof: 'Over 5,000 artists already manage their career with us',
      downloadApp: 'Download App',
    },
    features: {
      title: 'Everything you need to manage your career',
      subtitle: 'Tools designed by musicians, for musicians',
      financial: {
        title: 'Total control of your money',
        description: 'Record gig fees, expenses, and payments. See exactly how much you take home after each show.',
      },
      calendar: {
        title: 'Never miss an appointment',
        description: 'Shows, rehearsals, and events in one place. Get notifications right on your phone screen and never forget a gig.',
      },
      musicians: {
        title: 'Your band in your pocket',
        description: 'Manage sidemen, split fees automatically, and keep clear communication with your entire team.',
      },
      invoice: {
        title: 'Know what you\'ll really earn',
        description: 'Simulate invoices and discover your net fee after taxes and deductions. No surprises at payment time.',
      },
      reports: {
        title: 'Understand your business like never before',
        description: 'Clear charts showing your growth month by month. Know which gigs pay best and where you can save.',
      },
      transportation: {
        title: 'Your road costs organized',
        description: 'Track mileage, tolls, fuel, and lodging. Know exactly how much each show costs you to get there.',
      },
    },
    testimonials: {
      title: 'Loved by thousands of artists',
      subtitle: 'See what our users are saying',
    },
    pricing: {
      title: 'Choose your plan',
      subtitle: 'Start free and upgrade when you need',
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyDiscount: '15% off',
      popular: 'Most Popular',
      free: {
        name: 'Free',
        price: '$0',
        period: '/month',
        features: [
          'Up to 5 shows',
          'Basic calendar',
          'Limited reports',
        ],
        cta: 'Start Free',
      },
      pro: {
        name: 'Pro',
        price: '$9.90',
        priceYearly: '$99',
        period: '/month',
        periodYearly: '/year',
        features: [
          'Unlimited shows',
          'Musician management',
          'Complete reports',
          'Invoice simulator',
          'Priority support',
        ],
        cta: 'Subscribe Pro',
      },
      premium: {
        name: 'Premium',
        price: '$19.90',
        priceYearly: '$199',
        period: '/month',
        periodYearly: '/year',
        features: [
          'Everything in Pro +',
          'Multi-bands',
          'Advanced export',
          'Cloud backup',
          'VIP Support',
        ],
        cta: 'Subscribe Premium',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Get answers about SouArtista',
      questions: [
        {
          question: 'What is SouArtista?',
          answer: 'SouArtista is the complete management app for musicians and artists. Organize your shows, control fees, manage expenses, calculate taxes, track travel costs, and monitor your entire financial career in one place. Built by musicians who understand your reality.',
        },
        {
          question: 'What\'s the difference between Artist and Musician in the app?',
          answer: 'The Artist is who hires, manages the band, and sets show fees. The Musician plays in bands and receives participation invites. If you do both, you can have an Artist account and manage your musicians.',
        },
        {
          question: 'How does the free trial work?',
          answer: 'You get 7 free days to test all Pro plan features. No credit card required to start. After the trial, you can continue on the free plan with basic features or subscribe to Pro.',
        },
        {
          question: 'Does the app remind me of my shows?',
          answer: 'Yes! SouArtista sends smart notifications so you never forget a commitment: 7 days before the show, 1 day before, on the day, 3 hours before, and 30 minutes before. You\'ll never miss a show or rehearsal again!',
        },
        {
          question: 'Can I use it on iPhone and Android?',
          answer: 'Yes! SouArtista is available on the App Store (iOS) and Google Play Store (Android). The app works offline and syncs when you have internet.',
        },
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. We use end-to-end encryption and bank-level infrastructure. We follow data protection regulations and you can request export or deletion of your data at any time.',
        },
        {
          question: 'What is the Invoice Simulator?',
          answer: 'It\'s an exclusive tool that automatically calculates how much you\'ll receive net after taxes. Just enter the gross fee amount and payment type to know exactly how much will hit your account.',
        },
        {
          question: 'Can I track travel costs?',
          answer: 'Yes! The app has a dedicated section to record mileage, tolls, fuel, and lodging. At the end of the month, you know exactly how much you spent traveling to shows.',
        },
        {
          question: 'How does the referral program work?',
          answer: 'Each user has a unique referral code. When someone signs up using your code, you both earn benefits. Track your referrals and rewards directly in the app.',
        },
        {
          question: 'Can I manage multiple bands?',
          answer: 'Currently, multi-project/band management is available only for production companies and businesses. If you manage multiple bands professionally, contact us to learn about our special plan.',
        },
        {
          question: 'How do I cancel my subscription?',
          answer: 'You can cancel anytime directly through the app, in the "Subscription" section. No hassle, no calls. Pro access continues until the end of the already paid period.',
        },
        {
          question: 'Do I need internet to use the app?',
          answer: 'The app works offline for basic queries. To sync data, add shows, or generate reports, you need a connection. Once connected, everything updates automatically.',
        },
        {
          question: 'Can I export my reports?',
          answer: 'Yes! The Pro plan allows exporting financial reports in PDF and Excel. Perfect for tax returns or to show your accountant.',
        },
        {
          question: 'How do I contact support?',
          answer: 'Directly through the app! In the "Support" section, you can send messages, suggestions, or report issues. Our team responds within 24 business hours.',
        },
      ],
    },
    cta: {
      title: 'Ready to organize your music career?',
      subtitle: 'Download now and start using for free',
      contact: 'Questions? Contact us:',
    },
    footer: {
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      social: 'Social',
      features: 'Features',
      pricing: 'Pricing',
      download: 'Download',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      trust: 'Trust Center',
      copyright: '© 2025 SouArtista',
      developer: 'Developed by Savini Comunicação',
      cnpj: 'CNPJ: 50.075.961/0001-33',
    },
  },
};

export const useTranslation = (lang: Language) => {
  return translations[lang];
};

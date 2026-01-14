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
        description: 'Registre cachês, despesas, recebimentos e tenha relatórios detalhados de quanto você ganha por show',
      },
      calendar: {
        title: 'Nunca mais perca um show',
        description: 'Cadastre shows, ensaios e compromissos. Receba lembretes e mantenha sua agenda sempre organizada',
      },
      musicians: {
        title: 'Sua banda na palma da mão',
        description: 'Gerencie músicos, pagamentos de sideman e comunicação com sua equipe',
      },
      invoice: {
        title: 'Simule seus impostos',
        description: 'Calcule quanto receberá líquido considerando ISS, INSS e outros descontos',
      },
      reports: {
        title: 'Entenda seu negócio',
        description: 'Gráficos e relatórios que mostram sua evolução financeira mês a mês',
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
          answer: 'O SouArtista é um aplicativo de gestão financeira e agenda desenvolvido especialmente para músicos e artistas brasileiros. Com ele, você organiza cachês, despesas, shows e toda sua carreira em um só lugar.',
        },
        {
          question: 'Como funciona o período de teste?',
          answer: 'Você pode testar todas as funcionalidades do plano Pro gratuitamente por 7 dias. Não pedimos cartão de crédito para iniciar o teste.',
        },
        {
          question: 'Posso usar no iPhone e Android?',
          answer: 'Sim! O SouArtista está disponível tanto na App Store (iOS) quanto na Google Play Store (Android).',
        },
        {
          question: 'Meus dados estão seguros?',
          answer: 'Absolutamente. Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança da indústria. Seus dados financeiros são tratados com o máximo sigilo.',
        },
        {
          question: 'Como cancelo minha assinatura?',
          answer: 'Você pode cancelar a qualquer momento diretamente pelo app, sem burocracia. O acesso continua até o fim do período pago.',
        },
        {
          question: 'Posso usar para múltiplas bandas?',
          answer: 'Sim! No plano Premium, você pode gerenciar múltiplas bandas/projetos musicais separadamente, com relatórios individuais para cada um.',
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
        description: 'Record gig fees, expenses, and payments with detailed reports of how much you earn per show',
      },
      calendar: {
        title: 'Never miss a gig again',
        description: 'Schedule shows, rehearsals, and appointments. Get reminders and keep your calendar organized',
      },
      musicians: {
        title: 'Your band in your pocket',
        description: 'Manage musicians, sideman payments, and team communication',
      },
      invoice: {
        title: 'Simulate your taxes',
        description: 'Calculate your net earnings considering all tax deductions',
      },
      reports: {
        title: 'Understand your business',
        description: 'Charts and reports showing your financial growth month by month',
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
          answer: 'SouArtista is a financial management and scheduling app designed specifically for musicians and artists. Organize gig fees, expenses, shows, and your entire career in one place.',
        },
        {
          question: 'How does the free trial work?',
          answer: 'You can test all Pro features free for 7 days. No credit card required to start.',
        },
        {
          question: 'Is it available on iPhone and Android?',
          answer: 'Yes! SouArtista is available on both the App Store (iOS) and Google Play Store (Android).',
        },
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. We use end-to-end encryption and follow industry best security practices. Your financial data is treated with maximum confidentiality.',
        },
        {
          question: 'How do I cancel my subscription?',
          answer: 'You can cancel anytime directly through the app, hassle-free. Access continues until the end of the paid period.',
        },
        {
          question: 'Can I use it for multiple bands?',
          answer: 'Yes! With the Premium plan, you can manage multiple bands/music projects separately, with individual reports for each.',
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

import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'SouArtista - Gestão Financeira e Agenda para Músicos',
  description = 'O app completo para músicos brasileiros. Organize seus shows, controle cachês, gerencie despesas, simule notas fiscais e acompanhe sua carreira financeira. Experimente 7 dias grátis!',
  keywords = 'app para músicos, gestão financeira artistas, agenda de shows, controle de cachê, simulador nota fiscal músico, app banda, gerenciamento músicos, SouArtista, músicos brasileiros, app show, controle financeiro músico',
  canonical,
  ogImage = 'https://storage.googleapis.com/gpt-engineer-file-uploads/mKx26voRlBSrfQgaD8ihFhaECGz1/social-images/social-1768421693138-ICONE FINAL.png',
  ogType = 'website',
  noIndex = false,
}) => {
  const siteUrl = 'https://souartista.app';
  const canonicalUrl = canonical || siteUrl;

  // JSON-LD Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SouArtista',
    url: siteUrl,
    logo: ogImage,
    description: 'Aplicativo de gestão financeira e agenda para músicos brasileiros',
    foundingDate: '2024',
    sameAs: [
      'https://instagram.com/souartista.app',
      'https://facebook.com/souartista',
      'https://youtube.com/@souartista',
      'https://tiktok.com/@souartista.app',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contato@souartista.app',
      contactType: 'customer service',
      availableLanguage: ['Portuguese', 'English', 'Spanish'],
    },
  };

  // JSON-LD Software Application Schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SouArtista',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
      description: 'Teste grátis por 7 dias',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1500',
      bestRating: '5',
      worstRating: '1',
    },
    description: description,
    screenshot: ogImage,
    featureList: [
      'Controle de cachês e finanças',
      'Agenda de shows e ensaios',
      'Gestão de músicos e banda',
      'Simulador de nota fiscal',
      'Relatórios financeiros',
      'Controle de custos de locomoção',
    ],
  };

  // JSON-LD FAQ Schema (for main page)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O que é o SouArtista?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'O SouArtista é o aplicativo completo de gestão para músicos e artistas. Organize seus shows, controle cachês, gerencie despesas, calcule impostos, registre custos de locomoção e acompanhe toda sua carreira financeira em um só lugar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como funciona o período de teste gratuito?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Você tem 7 dias grátis para testar todas as funcionalidades do plano Pro. Não pedimos cartão de crédito para começar. Após o período, você pode continuar no plano gratuito ou assinar o Pro.',
        },
      },
      {
        '@type': 'Question',
        name: 'O SouArtista está disponível para iPhone e Android?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim! O SouArtista está disponível na App Store (iOS) e Google Play Store (Android). O app funciona offline e sincroniza quando você tiver internet.',
        },
      },
      {
        '@type': 'Question',
        name: 'O que é o Simulador de Nota Fiscal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'É uma ferramenta exclusiva que calcula automaticamente quanto você vai receber líquido após impostos (ISS, IRRF). Basta informar o valor bruto do cachê para saber exatamente quanto vai cair na sua conta.',
        },
      },
    ],
  };

  // JSON-LD Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: siteUrl,
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SouArtista" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="pt-BR" href={siteUrl} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
      <link rel="alternate" hrefLang="es" href={`${siteUrl}/es`} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="SouArtista" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="es_ES" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@souartista" />
      <meta name="twitter:creator" content="@souartista" />
      
      {/* App Links */}
      <meta property="al:ios:app_name" content="SouArtista" />
      <meta property="al:android:app_name" content="SouArtista" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'SouArtista — Gestão financeira para quem vive de música',
  description = 'O aplicativo feito para músicos, cantores, DJs e artistas brasileiros organizarem shows, cachês, despesas e terem controle real da vida financeira.',
  keywords = 'app para músicos, gestão financeira artistas, agenda de shows, controle de cachê, app para DJ, app para cantor, app banda, gerenciamento músicos, SouArtista, músicos brasileiros, app show, controle financeiro músico',
  canonical,
  ogImage = 'https://storage.googleapis.com/gpt-engineer-file-uploads/mKx26voRlBSrfQgaD8ihFhaECGz1/social-images/social-1768421693138-ICONE FINAL.png',
  ogType = 'website',
  noIndex = false,
  breadcrumbs,
}) => {
  const siteUrl = 'https://souartista.app';
  const canonicalUrl = canonical || siteUrl;

  // JSON-LD WebSite Schema with SearchAction
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SouArtista',
    alternateName: 'SouArtista App',
    url: siteUrl,
    description: 'Gestão financeira para quem vive de música',
    inLanguage: ['pt-BR', 'en', 'es'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // JSON-LD Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SouArtista',
    url: siteUrl,
    logo: ogImage,
    description: 'Aplicativo de gestão financeira para músicos, cantores, DJs e artistas brasileiros',
    slogan: 'Gestão financeira para quem vive de música',
    foundingDate: '2024',
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
      alternateName: 'BR',
    },
    sameAs: [
      'https://instagram.com/souartista.app',
      'https://facebook.com/souartistaapp',
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
    operatingSystem: 'iOS, Android, Web',
    offers: [
      {
        '@type': 'Offer',
        name: 'Plano Mensal',
        price: '29.90',
        priceCurrency: 'BRL',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Plano Anual',
        price: '300.00',
        priceCurrency: 'BRL',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
      },
    ],
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
      'Agenda de shows e apresentações',
      'Controle de cachês e lucro líquido',
      'Gestão de despesas e custos',
      'Gestão de equipe com administração de cachês da banda',
      'Modo Músico freelancer com dashboard independente',
      'Contratos prontos para bares, eventos privados e shows',
      'Rider técnico e mapa de palco',
      'Gestão de cachês com status de pagamento e notificações',
      'Relatórios financeiros com gráficos',
      'Simulador financeiro',
    ],
  };

  // JSON-LD FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O que é o SouArtista?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'O SouArtista é um aplicativo de gestão financeira criado por músicos, para músicos. Ele ajuda artistas, cantores, DJs e bandas a organizarem shows, cachês, despesas e terem controle real da vida financeira artística.',
        },
      },
      {
        '@type': 'Question',
        name: 'Para quem é o SouArtista?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'O SouArtista é para músicos, cantores, DJs, bandas, duplas sertanejas, produtores musicais e qualquer profissional que vive de música e recebe cachê.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto custa o SouArtista?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'O SouArtista oferece o Plano Mensal por R$ 29,90 e o Plano Anual por R$ 300,00 (com economia em relação ao mensal).',
        },
      },
      {
        '@type': 'Question',
        name: 'O SouArtista está disponível para iPhone e Android?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim! O SouArtista está disponível na App Store (iOS), Google Play Store (Android) e também possui versão web integrada.',
        },
      },
      {
        '@type': 'Question',
        name: 'O SouArtista faz contratos e riders técnicos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim! O artista pode criar contratos prontos e personalizáveis para bares, eventos privados e shows maiores, além de montar rider técnico e mapa de palco (stage plot) para enviar ao contratante.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como o músico controla se recebeu o cachê?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No SouArtista, cada show exibe um badge de status (Pendente ou Recebido). O músico pode alterar o status com um toque. Além disso, o Dashboard mostra um resumo dos cachês pendentes e envia lembretes semanais automáticos.',
        },
      },
    ],
  };

  // JSON-LD Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }
    : {
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
        {JSON.stringify(websiteSchema)}
      </script>
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

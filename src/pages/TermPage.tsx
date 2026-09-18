import React from 'react';
import { Layout } from '@/components/Layout';
import { SEOHead } from '@/components/SEOHead';
import { DownloadButtons } from '@/components/DownloadButtons';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export interface TermFaq {
  question: string;
  answer: string;
}

export interface TermPageProps {
  /** Path sem barra final, ex: "/agenda-de-shows" */
  path: string;
  badge: string;
  h1: string;
  h1Highlight: string;
  intro: string;
  title: string;
  description: string;
  keywords: string;
  breadcrumbName: string;
  benefits: { title: string; text: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: TermFaq[];
  relatedLinks?: { label: string; to: string }[];
}

export const TermPage: React.FC<TermPageProps> = ({
  path,
  badge,
  h1,
  h1Highlight,
  intro,
  title,
  description,
  keywords,
  breadcrumbName,
  benefits,
  sections,
  faqs,
  relatedLinks = [],
}) => {
  const url = `https://souartista.com${path}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <Layout>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonical={url}
        breadcrumbs={[
          { name: 'Início', url: 'https://souartista.com' },
          { name: breadcrumbName, url },
        ]}
        extraSchemas={[faqSchema]}
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">{badge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">{h1Highlight}</span>
              <br />
              <span className="text-foreground">{h1}</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{intro}</p>

            <div className="mt-8 flex justify-center">
              <DownloadButtons />
            </div>
          </div>

          {/* Benefícios */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border/50 bg-card/50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <h2 className="text-lg font-bold text-foreground">{b.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>

          {/* Conteúdo */}
          <div className="max-w-3xl mx-auto space-y-10 mb-16">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="space-y-2 mt-2">
                    {s.bullets.map((item) => (
                      <li key={item} className="flex gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Perguntas frequentes</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.question} className="rounded-xl border border-border/50 bg-card/50 p-6">
                  <h3 className="text-base font-semibold text-foreground mb-2">{f.question}</h3>
                  <p className="text-sm text-muted-foreground">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Links relacionados */}
          {relatedLinks.length > 0 && (
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-xl font-bold text-foreground mb-4">Continue lendo</h2>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 text-sm text-foreground hover:border-primary/50 transition-colors"
                  >
                    {l.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comece hoje, de graça</h2>
            <p className="text-muted-foreground mb-8">
              Agenda de shows e controle de cachês no mesmo app. iOS, Android e web.
            </p>
            <DownloadButtons />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermPage;

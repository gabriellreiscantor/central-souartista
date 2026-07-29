/// <reference types="vite/client" />
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { HelmetProvider } from "@/lib/helmet";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PB3S23ML');`;

const META_PIXEL_SCRIPT = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1642429076941218');
fbq('track', 'PageView');`;

const WEBSITE_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SouArtista",
  alternateName: "SouArtista App",
  url: "https://souartista.com",
  description: "Gestão financeira para quem vive de música",
  inLanguage: ["pt-BR", "en", "es"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://souartista.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
});

const SITE_TITLE = "SouArtista — Gestão financeira para quem vive de música";
const SITE_DESCRIPTION =
  "O aplicativo feito para músicos, cantores, DJs e artistas brasileiros organizarem shows, cachês, despesas e terem controle real da vida financeira.";
const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/mKx26voRlBSrfQgaD8ihFhaECGz1/social-images/social-1768421693138-ICONE FINAL.png";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: SITE_TITLE },
      {
        name: "google-site-verification",
        content: "8-PqOrrCd0CLE9JafL4qv6OKicDstzeYNTGRrPmStP8",
      },
      { name: "title", content: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "gestão financeira músicos, app para artistas, agenda de shows, controle de cachê, app para DJ, app para cantor, músicos brasileiros, gestão de banda",
      },
      { name: "author", content: "SouArtista" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://souartista.com" },
      { property: "og:site_name", content: "SouArtista" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://souartista.com" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "apple-itunes-app", content: "app-id=6756150476" },
      { name: "theme-color", content: "#1E082B" },
      { name: "ai-content-declaration", content: "human-created" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        as: "video",
        type: "video/mp4",
        href: "/__l5e/assets-v1/eb00f988-67ea-48ce-ad54-fc1a71b903b0/demo-video.mp4",
        fetchPriority: "high",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://storage.googleapis.com" },
      { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
      { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "LLM Information" },
    ],
    scripts: [
      { children: GTM_SCRIPT },
      { children: META_PIXEL_SCRIPT },
      { type: "application/ld+json", children: WEBSITE_JSON_LD },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
  errorComponent: ErrorComponent,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PB3S23ML"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=1642429076941218&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Outlet />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <h1 className="font-display text-3xl font-bold text-foreground">Algo deu errado</h1>
      <p className="max-w-md text-muted-foreground">
        Ocorreu um erro inesperado. Tente novamente ou volte para a página inicial.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="rounded-full bg-primary px-6 py-2 font-medium text-primary-foreground shadow-purple transition-smooth hover:opacity-90"
        >
          Tentar novamente
        </button>
        <a
          href="/"
          className="rounded-full border border-border px-6 py-2 font-medium text-foreground transition-smooth hover:bg-secondary"
        >
          Ir para o início
        </a>
      </div>
    </div>
  );
}

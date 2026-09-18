import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SouArtista — Agenda, repertório, palco e financeiro para músicos" },
      {
        name: "description",
        content: "App completo para músicos: agenda, repertórios e setlists com letras e tons, Modo Palco offline, notificações push, cachês, contratos, equipe e estrada.",
      },
      { property: "og:title", content: "SouArtista — Agenda, repertório, palco e financeiro para músicos" },
      {
        property: "og:description",
        content: "App completo para músicos: agenda, repertórios e setlists com letras e tons, Modo Palco offline, notificações push, cachês, contratos, equipe e estrada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://souartista.com" }],
  }),
});

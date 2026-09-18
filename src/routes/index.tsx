import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SouArtista — Agenda de shows para Web, iPhone e Android" },
      {
        name: "description",
        content: "Agenda de shows e gestão financeira multiplataforma para músicos. Use na Web, iPhone e Android com tudo sincronizado.",
      },
      { property: "og:title", content: "SouArtista — Agenda de shows para Web, iPhone e Android" },
      {
        property: "og:description",
        content: "Agenda de shows e gestão financeira multiplataforma para músicos. Use na Web, iPhone e Android com tudo sincronizado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://souartista.com" }],
  }),
});

import { createFileRoute } from "@tanstack/react-router";
import AgendaDeShows from "@/pages/AgendaDeShows";

export const Route = createFileRoute("/agenda-de-shows")({
  component: AgendaDeShows,
});

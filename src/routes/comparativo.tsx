import { createFileRoute } from "@tanstack/react-router";
import Comparativo from "@/pages/Comparativo";

export const Route = createFileRoute("/comparativo")({
  component: Comparativo,
});

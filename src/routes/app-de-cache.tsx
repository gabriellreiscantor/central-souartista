import { createFileRoute } from "@tanstack/react-router";
import AppDeCache from "@/pages/AppDeCache";

export const Route = createFileRoute("/app-de-cache")({
  component: AppDeCache,
});

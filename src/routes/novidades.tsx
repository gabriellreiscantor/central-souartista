import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/novidades")({
  beforeLoad: () => {
    throw redirect({ to: "/funcionalidades", hash: "novidades", replace: true });
  },
});

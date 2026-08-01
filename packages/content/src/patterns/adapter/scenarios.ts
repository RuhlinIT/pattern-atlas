import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "payment-gateway-integration",
    title: "Payment gateway integration",
    summary:
      "A checkout flow expects one payment interface, while a third-party gateway exposes a different SDK method and payload shape.",
  },
  {
    slug: "legacy-notification-service",
    title: "Legacy notification service",
    summary:
      "An application expects a notifier interface, but an older messaging service exposes a different send API.",
  },
  {
    slug: "file-format-conversion",
    title: "File format conversion",
    summary:
      "An application expects structured user records, but a legacy data source returns rows in a different format that must be translated.",
  },
];
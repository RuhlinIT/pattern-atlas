import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "payment-processing",
    "title": "Payment processing",
    "summary": "A checkout flow delegates payment behavior to a selected strategy so the order flow stays stable while payment methods vary."
  },
  {
    "slug": "shipping-cost-calculation",
    "title": "Shipping cost calculation",
    "summary": "An order service chooses a shipping algorithm based on delivery type without embedding pricing rules in one large conditional block."
  },
  {
    "slug": "notification-delivery",
    "title": "Notification delivery",
    "summary": "A notification service picks a delivery channel strategy so the caller does not manage channel-specific branching logic."
  }
];

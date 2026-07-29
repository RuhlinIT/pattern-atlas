import type { PatternRecord } from "@atlas-patterns/schemas";
import { notificationDeliveryExamples, paymentProcessingExamples, shippingCostCalculationExamples } from "./strategy";

export const StrategyPattern: PatternRecord = {
  slug: "strategy",
  name: "Strategy",
  category: "Behavioral",
  problem:
    "A system needs to switch between interchangeable behaviors without hardcoding branching logic everywhere.",
  intent:
    "Encapsulate a family of algorithms or behaviors behind a common contract so they can be selected and swapped cleanly.",
  tradeoffs: [
    "Adds more moving parts than a direct conditional approach",
    "Works best when behavior variations are real and likely to grow",
  ],
  languages: ["TypeScript", "Java", "Python"],
  platforms: ["Web", "Backend", "Services"],
  integrationNotes:
    "Strategies can cross codebases through shared contracts, API selection rules, or runtime configuration.",
  scenarios: [
    {
      slug: "payment-processing",
      title: "Payment processing",
      summary:
        "A checkout flow delegates payment behavior to a selected strategy so the order flow stays stable while payment methods vary.",
      languageExamples: paymentProcessingExamples
    },
    {
      slug: "shipping-cost-calculation",
      title: "Shipping cost calculation",
      summary:
        "An order service chooses a shipping algorithm based on delivery type without embedding pricing rules in one large conditional block.",
      languageExamples: shippingCostCalculationExamples
    },
    {
      slug: "notification-delivery",
      title: "Notification delivery",
      summary:
        "A notification service picks a delivery channel strategy so the caller does not manage channel-specific branching logic.",
      languageExamples: notificationDeliveryExamples
    },
  ],
  realWorldExamples: [
    {
      title: "Checkout payment providers",
      description:
        "Choose Stripe, PayPal, or bank transfer behavior behind a stable checkout flow.",
    },
    {
      title: "Shipping rate engines",
      description:
        "Switch between standard, express, and international pricing algorithms.",
    },
    {
      title: "Messaging channels",
      description:
        "Select email, SMS, or push delivery based on user preference or channel availability.",
    },
  ],
};
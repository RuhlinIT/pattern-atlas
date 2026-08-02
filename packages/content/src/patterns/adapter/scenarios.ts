import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "payment-gateway-integration",
    title: "Payment gateway integration",
    summary:
      "A checkout flow connects to Stripe, Adyen, or PayPal without exposing vendor-specific details to the rest of the app.",
    context:
      "An e-commerce team needs to support multiple payment providers while keeping checkout behavior stable.",
    problem:
      "Payment provider contracts leak into business logic when each gateway is wired directly.",
    solution:
      "Use an adapter to translate checkout operations into the provider's request and response shapes.",
    stackArea: "integration",
  },
  {
    slug: "legacy-notification-service",
    title: "Legacy notification service",
    summary:
      "An app sends email or SMS through an older service without inheriting its awkward interface.",
    context:
      "A product still depends on a notification system with inconsistent payloads and methods.",
    problem:
      "Business logic becomes fragile when it must understand legacy notification details.",
    solution:
      "Use an adapter to normalize the legacy notification API into a modern notifier contract.",
    stackArea: "backend",
  },
  {
    slug: "file-format-conversion",
    title: "File format conversion",
    summary:
      "A file import pipeline accepts CSV, XML, JSON, or proprietary inputs and converts them into a consistent internal model.",
    context:
      "Partners and customers upload files in different shapes that the system must process reliably.",
    problem:
      "Every consumer handling file quirks on its own leads to duplicated parsing logic.",
    solution:
      "Use an adapter to centralize file translation before the data reaches the application core.",
    stackArea: "backend",
  },
  {
    slug: "adapter-frontend-normalize-api-response",
    title: "Frontend response normalization",
    summary:
      "A UI layer converts backend DTOs into view models before rendering components.",
    context:
      "Frontend teams need predictable data shapes even when backend payloads change over time.",
    problem:
      "UI code becomes brittle when components depend directly on transport-specific fields.",
    solution:
      "Use an adapter to normalize API responses into a component-friendly model.",
    stackArea: "frontend",
  },
  {
    slug: "adapter-backend-isolate-legacy-service",
    title: "Backend service isolation",
    summary:
      "A backend layer wraps a legacy billing, inventory, or identity service behind a clean domain interface.",
    context:
      "The domain must remain stable even though an external system exposes XML, RPC, or other awkward contracts.",
    problem:
      "Direct coupling to legacy services makes the backend hard to refactor or replace.",
    solution:
      "Use an adapter to translate legacy requests and responses into domain-friendly objects.",
    stackArea: "backend",
  },
  {
    slug: "adapter-integration-bridge-front-and-backend-contracts",
    title: "Contract translation boundary",
    summary:
      "A boundary layer keeps frontend models and backend DTOs aligned through explicit mapping.",
    context:
      "Frontend and backend teams evolve independently and need a stable translation layer between them.",
    problem:
      "Shared assumptions about data shape create coupling across team boundaries.",
    solution:
      "Use an adapter to centralize contract translation at the system boundary.",
    stackArea: "integration",
  },
];
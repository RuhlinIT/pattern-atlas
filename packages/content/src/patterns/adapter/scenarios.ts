import type {
  PatternScenario,
  PatternScenarioExamples,
  PatternUseCase,
  PatternVariant,
} from "@atlas-patterns/schemas";

import { typescript as paymentGatewayTypescript } from "./examples/payment-gateway-integration/typescript";
import { java as paymentGatewayJava } from "./examples/payment-gateway-integration/java";

import { typescript as legacyNotificationTypescript } from "./examples/legacy-notification-service/typescript";
import { python as legacyNotificationPython } from "./examples/legacy-notification-service/python";
import { csharp as legacyNotificationCsharp } from "./examples/legacy-notification-service/csharp";

import { typescript as fileFormatTypescript } from "./examples/file-format-conversion/typescript";
import { go as fileFormatGo } from "./examples/file-format-conversion/go";
import { java as fileFormatJava } from "./examples/file-format-conversion/java";

import { typescript as frontendTypescript } from "./examples/adapter-frontend-normalize-api-response/typescript";
import { react as frontendReact } from "./examples/adapter-frontend-normalize-api-response/react";
import { angular as frontendAngular } from "./examples/adapter-frontend-normalize-api-response/angular";

import { java as backendJava } from "./examples/adapter-backend-isolate-legacy-service/java";
import { typescript as backendTypescript } from "./examples/adapter-backend-isolate-legacy-service/typescript";
import { python as backendPython } from "./examples/adapter-backend-isolate-legacy-service/python";

import { typescript as integrationTypescript } from "./examples/adapter-integration-bridge-front-and-backend-contracts/typescript";
import { react as integrationReact } from "./examples/adapter-integration-bridge-front-and-backend-contracts/react";

export const adapterProblem =
  "Different systems often expose incompatible shapes, forcing consumers to know too much about implementation details.";

export const adapterTradeoffs = [
  "Adds an extra abstraction layer.",
  "Can obscure data flow if overused.",
  "Improves isolation from external changes.",
] as const;

export const adapterPlatforms = ["web", "api", "services", "integration"] as const;

export const adapterIntegrationNotes =
  "Use adapters at the boundary between transport models, UI models, domain models, and third-party APIs.";

export const adapterWhenToUse = [
  "When an API response does not match UI needs.",
  "When a legacy service uses an awkward contract.",
  "When your domain should not depend on external payloads.",
] as const;

export const adapterAntiPatterns = [
  "Using adapters for simple pass-throughs that add no value.",
  "Stuffing business rules into mapping code.",
  "Creating many tiny adapters instead of a single boundary layer.",
] as const;

export const adapterScenarios: PatternScenario[] = [
  {
    slug: "payment-gateway-integration",
    title: "Integrate a payment gateway through an adapter",
    summary:
      "Wrap a third-party payment provider so the app only depends on a stable billing interface.",
    context:
      "The payment provider has its own request and response shapes, retries, and error codes.",
    problem:
      "Checkout flow should not depend on vendor-specific payment SDK details.",
    solution:
      "Use an adapter that translates application billing commands into gateway calls.",
    runtime: "backend",
  },
  {
    slug: "legacy-notification-service",
    title: "Adapt a legacy notification service",
    summary:
      "Shield the app from an old email or SMS service by mapping it into a unified notifier interface.",
    context:
      "The notification provider exposes awkward methods and inconsistent message payloads.",
    problem:
      "Business logic should not know whether notifications are sent via email, SMS, or vendor APIs.",
    solution:
      "Introduce an adapter that normalizes the old notification API into a modern service contract.",
    runtime: "backend",
  },
  {
    slug: "file-format-conversion",
    title: "Convert file formats through an adapter",
    summary:
      "Translate CSV, XML, JSON, or proprietary file formats into the structure the app expects.",
    context:
      "External partners upload files in formats that do not match internal processing models.",
    problem:
      "Parsing logic gets scattered when every consumer handles its own file-shape quirks.",
    solution:
      "Centralize the conversion in an adapter that produces a consistent internal model.",
    runtime: "backend",
  },
  {
    slug: "adapter-frontend-normalize-api-response",
    title: "Normalize API responses for UI components",
    summary:
      "Map backend DTOs into a stable view model before rendering cards, tables, or forms.",
    context:
      "The backend returns inconsistent field names and nested structures that are awkward for UI components.",
    problem:
      "React or Angular components should not know about transport-specific shape changes.",
    solution:
      "Create a frontend adapter that converts raw API data into a component-friendly model.",
    runtime: "frontend",
  },
  {
    slug: "adapter-backend-isolate-legacy-service",
    title: "Isolate a legacy service behind an adapter",
    summary:
      "Wrap an old billing or inventory service so the domain layer sees a clean interface.",
    context:
      "A legacy system exposes XML or a highly coupled RPC contract.",
    problem:
      "Business code becomes brittle when it talks directly to unstable external systems.",
    solution:
      "Use a backend adapter to translate legacy payloads into domain objects.",
    runtime: "backend",
  },
  {
    slug: "adapter-integration-bridge-front-and-backend-contracts",
    title: "Bridge frontend and backend contracts",
    summary:
      "Keep frontend view models and backend DTOs aligned through explicit boundary mapping.",
    context:
      "The frontend and backend evolve independently and need a shared translation layer.",
    problem:
      "Without a contract adapter, both sides accumulate assumptions about each other’s structure.",
    solution:
      "Centralize the mapping in a typed adapter layer that both teams can reason about.",
    runtime: "backend",
  },
];

export const adapterScenarioExamples: PatternScenarioExamples = {
  "payment-gateway-integration": {
    typescript: paymentGatewayTypescript,
    java: paymentGatewayJava,
  },
  "legacy-notification-service": {
    typescript: legacyNotificationTypescript,
    python: legacyNotificationPython,
    csharp: legacyNotificationCsharp,
  },
  "file-format-conversion": {
    typescript: fileFormatTypescript,
    go: fileFormatGo,
    java: fileFormatJava,
  },
  "adapter-frontend-normalize-api-response": {
    typescript: frontendTypescript,
    react: frontendReact,
    angular: frontendAngular,
  },
  "adapter-backend-isolate-legacy-service": {
    java: backendJava,
    typescript: backendTypescript,
    python: backendPython,
  },
  "adapter-integration-bridge-front-and-backend-contracts": {
    typescript: integrationTypescript,
    react: integrationReact,
  },
};

export const adapterRealWorldExamples: PatternUseCase[] = [
  {
    title: "REST API response mapping",
    description:
      "Map backend DTOs into frontend view models before rendering UI components.",
    runtime: "frontend",
  },
  {
    title: "Legacy billing integration",
    description:
      "Wrap a legacy billing service in a backend adapter to protect the domain layer.",
    runtime: "backend",
  },
  {
    title: "Cross-service contract translation",
    description:
      "Use a translation layer between API contracts and internal models during integration work.",
    runtime: "backend",
  },
];

export const adapterVariants: PatternVariant[] = [
  {
    slug: "adapter-frontend",
    title: "Adapter for FrontEnd data shaping",
    layer: "frontend",
    language: "typescript",
    summary:
      "Normalize API payloads or third-party props into a UI-friendly view model.",
    intent:
      "Keep components focused on presentation rather than transport shape details.",
    problem:
      "UI code becomes brittle when every component knows raw backend field names.",
    solution:
      "Use a small adapter to translate DTOs into component-ready models.",
    dependencies: ["adapter"],
    relatedVariants: ["adapter-backend", "adapter-integration"],
    examplePatternSlugs: ["adapter"],
    notes:
      "This variant is especially useful at the API boundary in React, Angular, or Next.js apps.",
  },
  {
    slug: "adapter-backend",
    title: "Adapter for BackEnd isolation",
    layer: "backend",
    language: "java",
    summary:
      "Wrap legacy APIs, external services, or persistence models behind a stable interface.",
    intent:
      "Protect domain logic from unstable infrastructure concerns.",
    problem:
      "Service code becomes hard to maintain when it depends directly on external payloads.",
    solution:
      "Create an adapter that translates external responses into domain entities or commands.",
    dependencies: ["adapter"],
    relatedVariants: ["adapter-frontend", "adapter-integration"],
    examplePatternSlugs: ["adapter"],
    notes:
      "Use this when talking to legacy SOAP APIs, third-party SDKs, or old database access layers.",
  },
  {
    slug: "adapter-integration",
    title: "Adapter for integration boundaries",
    layer: "integration",
    language: "typescript",
    summary:
      "Translate between frontend models, backend DTOs, and partner contracts in one place.",
    intent:
      "Make cross-system communication explicit and safe.",
    problem:
      "Different teams evolve contracts independently and need a controlled translation layer.",
    solution:
      "Centralize mapping logic in a boundary adapter shared by the consuming side.",
    dependencies: ["adapter"],
    relatedVariants: ["adapter-frontend", "adapter-backend"],
    examplePatternSlugs: ["adapter"],
    notes:
      "This is a good fit for API clients, BFF layers, or service orchestration code.",
  },
];
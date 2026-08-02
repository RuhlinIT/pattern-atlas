import type { PatternRecord } from "@atlas-patterns/schemas";
import { adapterMeta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

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

const paymentGatewayExamples = normalizeExamples({
  typescript: paymentGatewayTypescript,
  java: paymentGatewayJava,
});

const legacyNotificationExamples = normalizeExamples({
  typescript: legacyNotificationTypescript,
  python: legacyNotificationPython,
  csharp: legacyNotificationCsharp,
});

const fileFormatExamples = normalizeExamples({
  typescript: fileFormatTypescript,
  go: fileFormatGo,
  java: fileFormatJava,
});

const frontendExamples = normalizeExamples({
  typescript: frontendTypescript,
  react: frontendReact,
  angular: frontendAngular,
});

const backendExamples = normalizeExamples({
  java: backendJava,
  typescript: backendTypescript,
  python: backendPython,
});

const integrationExamples = normalizeExamples({
  typescript: integrationTypescript,
  react: integrationReact,
});

export const adapterPattern: PatternRecord = {
  ...adapterMeta,
  problem:
    "Different systems often expose incompatible shapes, forcing consumers to know too much about implementation details.",
  tradeoffs: [
    "Adds an extra abstraction layer.",
    "Can obscure data flow if overused.",
    "Improves isolation from external changes.",
  ],
  platforms: ["web", "backend", "services", "integration"],
  integrationNotes:
    "Use adapters at the boundary between transport models, UI models, domain models, and third-party APIs.",
  scenarios,
  scenarioExamples: {
    "payment-gateway-integration": paymentGatewayExamples,
    "legacy-notification-service": legacyNotificationExamples,
    "file-format-conversion": fileFormatExamples,
    "adapter-frontend-normalize-api-response": frontendExamples,
    "adapter-backend-isolate-legacy-service": backendExamples,
    "adapter-integration-bridge-front-and-backend-contracts": integrationExamples,
  },
  variants: [
    {
      slug: "adapter-frontend-model-shape",
      title: "Frontend model shaping",
      stackArea: "frontend",
      language: "typescript",
      summary:
        "Translate API payloads into a UI-friendly view model before rendering components.",
      intent:
        "Keep presentation code isolated from transport-specific payload details.",
      problem:
        "UI code becomes brittle when every component understands raw backend field names.",
      solution:
        "Use an adapter to shape transport data into component-ready models.",
      dependencies: ["adapter"],
      relatedVariants: ["adapter-backend-boundary", "adapter-integration-contract"],
      examplePatternSlugs: ["adapter"],
      notes:
        "This is the right choice when the primary concern is protecting UI components from DTO churn.",
    },
    {
      slug: "adapter-backend-boundary",
      title: "Backend boundary isolation",
      stackArea: "backend",
      language: "java",
      summary:
        "Wrap legacy systems, external SDKs, or storage APIs behind a stable backend interface.",
      intent:
        "Keep domain logic independent from infrastructure quirks.",
      problem:
        "Service code becomes hard to maintain when it depends directly on external payloads or protocols.",
      solution:
        "Use an adapter to translate external responses into domain entities or commands.",
      dependencies: ["adapter"],
      relatedVariants: ["adapter-frontend-model-shape", "adapter-integration-contract"],
      examplePatternSlugs: ["adapter"],
      notes:
        "Use this when the backend needs to absorb legacy contracts, vendor APIs, or storage peculiarities.",
    },
    {
      slug: "adapter-integration-contract",
      title: "Integration contract translation",
      stackArea: "integration",
      language: "typescript",
      summary:
        "Translate between internal workflows and external contracts such as payment gateways, notification providers, or partner APIs.",
      intent:
        "Keep contract translation explicit at the boundary.",
      problem:
        "Integrations become fragile when vendor-specific data shapes leak into shared workflows.",
      solution:
        "Use an adapter to centralize contract translation behind one boundary layer.",
      dependencies: ["adapter"],
      relatedVariants: ["adapter-frontend-model-shape", "adapter-backend-boundary"],
      examplePatternSlugs: ["adapter"],
      notes:
        "This is the best fit when the system is primarily mediating between two independently evolving contracts.",
    },
  ],
  realWorldExamples: [
    {
      title: "REST API response mapping",
      description:
        "Map backend DTOs into frontend view models before rendering UI components.",
    },
    {
      title: "Legacy billing integration",
      description:
        "Wrap a legacy billing service in a backend adapter to protect the domain layer.",
    },
    {
      title: "Cross-service contract translation",
      description:
        "Use a translation layer between API contracts and internal models during integration work.",
    },
  ],
};
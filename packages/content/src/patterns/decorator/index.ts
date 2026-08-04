import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { typescript as notificationDeliveryTypescript } from "./examples/notification-delivery/typescript";
import { java as notificationDeliveryJava } from "./examples/notification-delivery/java";
import { python as notificationDeliveryPython } from "./examples/notification-delivery/python";

import { typescript as httpClientTypescript } from "./examples/http-client/typescript";
import { java as httpClientJava } from "./examples/http-client/java";
import { python as httpClientPython } from "./examples/http-client/python";

import { typescript as fileStorageTypescript } from "./examples/file-storage/typescript";
import { java as fileStorageJava } from "./examples/file-storage/java";
import { python as fileStoragePython } from "./examples/file-storage/python";

import { typescript as textFormattingTypescript } from "./examples/text-formatting/typescript";
import { react as textFormattingReact } from "./examples/text-formatting/react";
import { angular as textFormattingAngular } from "./examples/text-formatting/angular";

import { typescript as coffeeCustomizationTypescript } from "./examples/coffee-customization/typescript";
import { java as coffeeCustomizationJava } from "./examples/coffee-customization/java";

import { typescript as notificationChannelsTypescript } from "./examples/notification-channels/typescript";
import { react as notificationChannelsReact } from "./examples/notification-channels/react";

import { typescript as loggingMetricsTracingTypescript } from "./examples/logging-metrics-tracing/typescript";
import { java as loggingMetricsTracingJava } from "./examples/logging-metrics-tracing/java";

import { typescript as uiAccessibilityEnhancementTypescript } from "./examples/ui-accessibility-enhancement/typescript";
import { react as uiAccessibilityEnhancementReact } from "./examples/ui-accessibility-enhancement/react";

const notificationDeliveryExamples = normalizeExamples({
  typescript: notificationDeliveryTypescript,
  java: notificationDeliveryJava,
  python: notificationDeliveryPython,
});

const httpClientExamples = normalizeExamples({
  typescript: httpClientTypescript,
  java: httpClientJava,
  python: httpClientPython,
});

const fileStorageExamples = normalizeExamples({
  typescript: fileStorageTypescript,
  java: fileStorageJava,
  python: fileStoragePython,
});

const textFormattingExamples = normalizeExamples({
  typescript: textFormattingTypescript,
  react: textFormattingReact,
  angular: textFormattingAngular,
});

const coffeeCustomizationExamples = normalizeExamples({
  typescript: coffeeCustomizationTypescript,
  java: coffeeCustomizationJava,
});

const notificationChannelsExamples = normalizeExamples({
  typescript: notificationChannelsTypescript,
  react: notificationChannelsReact,
});

const loggingMetricsTracingExamples = normalizeExamples({
  typescript: loggingMetricsTracingTypescript,
  java: loggingMetricsTracingJava,
});

const uiAccessibilityEnhancementExamples = normalizeExamples({
  typescript: uiAccessibilityEnhancementTypescript,
  react: uiAccessibilityEnhancementReact,
});

export const decoratorPattern: PatternRecord = {
  ...meta,
  problem:
    "A system needs to add optional behaviors to an object without creating many subclasses for every feature combination.",
  tradeoffs: [
    "Can introduce many small wrapper classes that are harder to trace in debugging.",
    "Ordering of decorators matters, so composition needs to be deliberate.",
    "Keeps responsibilities modular and easy to combine.",
  ],
  platforms: ["frontend", "backend", "services"],
  integrationNotes:
    "Decorators work well for cross-cutting concerns such as logging, retry, caching, compression, and telemetry because each layer keeps the same interface while adding one concern.",
  scenarios,
  scenarioExamples: {
    "notification-delivery": notificationDeliveryExamples,
    "http-client": httpClientExamples,
    "file-storage": fileStorageExamples,
    "text-formatting": textFormattingExamples,
    "coffee-customization": coffeeCustomizationExamples,
    "notification-channels": notificationChannelsExamples,
    "logging-metrics-tracing": loggingMetricsTracingExamples,
    "ui-accessibility-enhancement": uiAccessibilityEnhancementExamples,
  },
  variants: [
    {
      slug: "decorator-transparent",
      title: "Transparent decorator",
      stackArea: "backend",
      language: "typescript",
      summary:
        "Wrap an object while keeping the same interface so callers do not know whether they are using the base object or a decorated one.",
      intent:
        "Add behavior without changing the caller contract.",
      problem:
        "Callers should not need special-case logic for decorated objects.",
      solution:
        "Use a wrapper that forwards the same operations to the wrapped object and augments the result.",
      dependencies: ["decorator"],
      relatedVariants: ["decorator-stacked", "decorator-pipeline"],
      examplePatternSlugs: ["decorator"],
      notes:
        "Good for logging, caching, retries, and other cross-cutting concerns.",
    },
    {
      slug: "decorator-stacked",
      title: "Stacked decorators",
      stackArea: "frontend",
      language: "react",
      summary:
        "Layer several decorators in a known order so each wrapper adds one concern to the final result.",
      intent:
        "Combine multiple features by stacking wrappers.",
      problem:
        "Feature combinations become hard to manage if every permutation needs its own class.",
      solution:
        "Compose multiple decorators around the same base object.",
      dependencies: ["decorator"],
      relatedVariants: ["decorator-transparent", "decorator-pipeline"],
      examplePatternSlugs: ["decorator"],
      notes:
        "Useful when layering UI styling, text formatting, or notification channels.",
    },
    {
      slug: "decorator-pipeline",
      title: "Pipeline decorator",
      stackArea: "backend",
      language: "java",
      summary:
        "Use decorators as processing stages so data flows through compression, encryption, validation, or instrumentation layers.",
      intent:
        "Model staged processing with reusable wrappers.",
      problem:
        "A monolithic processing function becomes difficult to extend or reorder.",
      solution:
        "Treat each step as a decorator that adds a transformation before delegating.",
      dependencies: ["decorator"],
      relatedVariants: ["decorator-transparent", "decorator-stacked"],
      examplePatternSlugs: ["decorator"],
      notes:
        "Strong fit for file I/O, HTTP client middleware, and stream processing.",
    },
  ],
  realWorldExamples: [
    {
      title: "Service-layer cross-cutting behavior",
      description:
        "Wrap application services with logging, retry, metrics, or authorization without rewriting the core service implementation.",
    },
    {
      title: "HTTP client middleware",
      description:
        "Add caching, telemetry, tracing, or circuit-breaking around a base client while preserving the same request interface.",
    },
    {
      title: "I/O transformation pipelines",
      description:
        "Layer compression and encryption around streams or file writers so data processing concerns remain modular.",
    },
    {
      title: "Multi-channel notifications",
      description:
        "Applications can combine in-app, email, SMS, and chat delivery by layering decorators around a base notifier.",
    },
    {
      title: "Product customization",
      description:
        "Pricing and description add-ons such as toppings, extras, or optional services can be composed dynamically.",
    },
    {
      title: "UI and document formatting",
      description:
        "Formatting or rendering behavior can be layered onto text and view components without changing their core implementation.",
    },
  ],
};
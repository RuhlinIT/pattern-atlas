import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { notificationDeliveryExamples } from "./examples/notification-delivery";
import { httpClientExamples } from "./examples/http-client";
import { fileStorageExamples } from "./examples/file-storage";
import { textFormattingExamples } from "./examples/text-formatting";
import { coffeeCustomizationExamples } from "./examples/coffee-customization";
import { notificationChannelsExamples } from "./examples/notification-channels";

export const decoratorPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "notification-delivery": notificationDeliveryExamples,
    "http-client": httpClientExamples,
    "file-storage": fileStorageExamples,
    "text-formatting": textFormattingExamples,
    "coffee-customization": coffeeCustomizationExamples,
    "notification-channels": notificationChannelsExamples,
  },
  realWorldExamples: [
  {
    "title": "Service-layer cross-cutting behavior",
    "description": "Wrap application services with logging, retry, metrics, or authorization without rewriting the core service implementation."
  },
  {
    "title": "HTTP client middleware",
    "description": "Add caching, telemetry, tracing, or circuit-breaking around a base client while preserving the same request interface."
  },
  {
    "title": "I/O transformation pipelines",
    "description": "Layer compression and encryption around streams or file writers so data processing concerns remain modular."
  },
  {
    "title": "Multi-channel notifications",
    "description": "Applications can combine in-app, email, SMS, and chat delivery by layering decorators around a base notifier."
  },
  {
    "title": "Product customization",
    "description": "Pricing and description add-ons such as toppings, extras, or optional services can be composed dynamically."
  },
  {
    "title": "UI and document formatting",
    "description": "Formatting or rendering behavior can be layered onto text and view components without changing their core implementation."
  }
],
  tradeoffs: [
  "Can introduce many small wrapper classes that are harder to trace in debugging",
  "Ordering of decorators matters, so composition needs to be deliberate"
],
  platforms: [
  "Frontend",
  "Backend",
  "Services"
],
  integrationNotes: "Decorators work well for cross-cutting concerns such as logging, retry, caching, compression, and telemetry because each layer keeps the same interface while adding one concern.",
  problem: "A system needs to add optional behaviors to an object without creating many subclasses for every feature combination.",
};

import type { PatternRecord } from "@atlas-patterns/schemas";
import { textFormattingExamples } from "./decorator/textFormattingExamples";
import { coffeeCustomizationExamples } from "./decorator/coffeeCustomizationExamples";
import { fileStorageExamples } from "./decorator/fileStorageExamples";
import { httpClientExamples } from "./decorator/httpClientExamples";
import { notificationChannelExamples } from "./decorator/notificationChannelExamples";
import { notificationDeliveryExamples } from "./decorator/notificationDeliveryExamples";

export const DecoratorPattern: PatternRecord = {
  slug: "decorator",
  name: "Decorator",
  category: "Structural",
  problem:
    "A system needs to add optional behaviors to an object without creating many subclasses for every feature combination.",
  intent:
    "Wrap an object with other objects that implement the same contract so responsibilities can be layered dynamically.",
  tradeoffs: [
    "Can introduce many small wrapper classes that are harder to trace in debugging",
    "Ordering of decorators matters, so composition needs to be deliberate",
  ],
  languages: ["TypeScript", "Java", "Python", "Angular", "React", "React_Native", "C#", ".NET"],
  platforms: ["Frontend", "Backend", "Services"],
  integrationNotes:
    "Decorators work well for cross-cutting concerns such as logging, retry, caching, compression, and telemetry because each layer keeps the same interface while adding one concern.",
  scenarios: [
    {
      slug: "notification-delivery",
      title: "Notification delivery",
      summary:
        "A notification service sends a message, while decorators add logging and retry behavior around the same send contract.",
      languageExamples: notificationDeliveryExamples
    },
    {
      slug: "http-client",
      title: "HTTP client",
      summary:
        "A basic HTTP client performs requests, while decorators add caching and metrics without changing the request interface.",
      languageExamples: httpClientExamples
    },
    {
      slug: "file-storage",
      title: "File storage",
      summary:
        "A file storage component writes data, while decorators add compression and encryption as optional layers before persistence.",
      languageExamples: fileStorageExamples
    },
    {
      slug: "text-formatting",
      title: "Text formatting",
      summary:
        "A text component can be wrapped with formatting decorators such as bold, italic, and underline without changing the original component.",
      languageExamples: textFormattingExamples,
    },
    {
      slug: "coffee-customization",
      title: "Coffee customization",
      summary:
        "A coffee order starts with a base drink and gains extra behavior and cost through decorators like milk, mocha, and whip.",
      languageExamples: coffeeCustomizationExamples,
    },
    {
      slug: "notification-channels",
      title: "Notification channels",
      summary:
        "A base notifier can be wrapped with email, SMS, or Slack decorators so one message is delivered through multiple channels.",
      languageExamples: notificationChannelExamples,
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
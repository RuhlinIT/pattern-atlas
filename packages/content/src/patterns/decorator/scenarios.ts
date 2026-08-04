import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "notification-delivery",
    title: "Notification delivery",
    summary:
      "A notification service sends a message, while decorators add logging and retry behavior around the same send contract.",
    context:
      "A notification pipeline needs to add reliability and observability without changing the base sender.",
    problem:
      "Adding retries and logging directly to the sender makes the notification service harder to reuse.",
    solution:
      "Use Decorator to wrap the sender with optional behaviors that keep the same interface.",
    stackArea: "backend",
  },
  {
    slug: "http-client",
    title: "HTTP client",
    summary:
      "A basic HTTP client performs requests, while decorators add caching and metrics without changing the request interface.",
    context:
      "An API client needs extra behavior like tracing, retries, or caching.",
    problem:
      "Specialized subclasses for every client feature combination quickly become unmanageable.",
    solution:
      "Use Decorator so each concern can wrap the client independently.",
    stackArea: "backend",
  },
  {
    slug: "file-storage",
    title: "File storage",
    summary:
      "A file storage component writes data, while decorators add compression and encryption as optional layers before persistence.",
    context:
      "A storage pipeline needs transformation steps before data is written.",
    problem:
      "Combining compression, encryption, and persistence in one component makes the code rigid.",
    solution:
      "Use Decorator to layer file transformations around the storage contract.",
    stackArea: "backend",
  },
  {
    slug: "text-formatting",
    title: "Text formatting",
    summary:
      "A text component can be wrapped with formatting decorators such as bold, italic, and underline without changing the original component.",
    context:
      "A document editor needs composable formatting behavior.",
    problem:
      "Many formatting combinations are awkward if each style is a separate subclass.",
    solution:
      "Use Decorator so text styling can be stacked dynamically.",
    stackArea: "frontend",
  },
  {
    slug: "coffee-customization",
    title: "Coffee customization",
    summary:
      "A coffee order starts with a base drink and gains extra behavior and cost through decorators like milk, mocha, and whip.",
    context:
      "A menu system needs configurable options that add price and description.",
    problem:
      "A large inheritance tree is hard to maintain when customers can combine many add-ons.",
    solution:
      "Use Decorator so each add-on wraps the base beverage.",
    stackArea: "frontend",
  },
  {
    slug: "notification-channels",
    title: "Notification channels",
    summary:
      "A base notifier can be wrapped with email, SMS, or Slack decorators so one message is delivered through multiple channels.",
    context:
      "A message needs to be forwarded through several delivery mechanisms.",
    problem:
      "Hard-coded branching for every delivery channel makes the notifier difficult to extend.",
    solution:
      "Use Decorator to compose channel-specific delivery layers.",
    stackArea: "integration",
  },
  {
    slug: "logging-metrics-tracing",
    title: "Logging, metrics, and tracing",
    summary:
      "A service wrapper layers logs, metrics, and tracing around one core operation so cross-cutting concerns stay separate.",
    context:
      "A service call needs instrumentation without polluting business logic.",
    problem:
      "Embedding observability concerns in the core service makes the code harder to test.",
    solution:
      "Use Decorator to add observability as separate wrappers.",
    stackArea: "backend",
  },
  {
    slug: "ui-accessibility-enhancement",
    title: "UI accessibility enhancement",
    summary:
      "A component can be wrapped with accessibility decorators that add labels, keyboard handling, or hints without changing the base UI.",
    context:
      "A design system needs optional accessibility behavior across many components.",
    problem:
      "Repeating accessibility logic in every component leads to duplication.",
    solution:
      "Use Decorator to layer accessibility concerns onto shared UI components.",
    stackArea: "frontend",
  },
];
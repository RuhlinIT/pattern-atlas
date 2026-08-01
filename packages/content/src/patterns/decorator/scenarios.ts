import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "notification-delivery",
    "title": "Notification delivery",
    "summary": "A notification service sends a message, while decorators add logging and retry behavior around the same send contract."
  },
  {
    "slug": "http-client",
    "title": "HTTP client",
    "summary": "A basic HTTP client performs requests, while decorators add caching and metrics without changing the request interface."
  },
  {
    "slug": "file-storage",
    "title": "File storage",
    "summary": "A file storage component writes data, while decorators add compression and encryption as optional layers before persistence."
  },
  {
    "slug": "text-formatting",
    "title": "Text formatting",
    "summary": "A text component can be wrapped with formatting decorators such as bold, italic, and underline without changing the original component."
  },
  {
    "slug": "coffee-customization",
    "title": "Coffee customization",
    "summary": "A coffee order starts with a base drink and gains extra behavior and cost through decorators like milk, mocha, and whip."
  },
  {
    "slug": "notification-channels",
    "title": "Notification channels",
    "summary": "A base notifier can be wrapped with email, SMS, or Slack decorators so one message is delivered through multiple channels."
  }
];

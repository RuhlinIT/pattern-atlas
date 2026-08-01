import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "document-export",
    "title": "Document export",
    "summary": "A reporting workflow uses a factory method to choose the right exporter for PDF, CSV, or other output formats while keeping the export flow consistent."
  },
  {
    "slug": "notification-channel",
    "title": "Notification channel",
    "summary": "A notification service delegates sender creation to channel-specific creators so email, SMS, and push delivery can vary without changing the notification workflow."
  },
  {
    "slug": "logger-transport",
    "title": "Logger transport",
    "summary": "An application selects console, file, or remote logging transports through specialized factories so environments can change the concrete logger implementation cleanly."
  }
];

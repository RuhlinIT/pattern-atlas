import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "application-config-singleton",
    "title": "Application config singleton",
    "summary": "A shared configuration object loads environment settings once and serves them throughout the application."
  },
  {
    "slug": "logger-singleton",
    "title": "Logger singleton",
    "summary": "A logging service keeps one shared logger instance so every component writes to the same output pipeline."
  },
  {
    "slug": "cache-manager-singleton",
    "title": "Cache manager singleton",
    "summary": "A cache manager keeps one shared in-memory cache so all parts of the app reuse the same stored data."
  }
];

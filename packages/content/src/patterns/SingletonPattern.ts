import type { PatternRecord } from "@atlas-patterns/schemas";
import { applicationConfigSingletonExamples } from "./singleton/applicationConfigSingletonExamples";
import { loggerSingletonExamples } from "./singleton/loggerSingletonExamples";
import { cacheManagerSingletonExamples } from "./singleton/cacheManagerSingletonExamples";

export const SingletonPattern: PatternRecord = {
  slug: "singleton",
  name: "Singleton",
  category: "Creational",
  problem:
    "A system needs exactly one shared instance of a class, and that instance must be globally accessible without allowing uncontrolled duplication.",
  intent:
    "Ensure a class has only one instance and provide a global access point to it.",
  tradeoffs: [
    "Can make dependencies harder to test if the singleton is used everywhere",
    "May introduce hidden global state that complicates debugging and concurrency",
  ],
  languages: [
    "TypeScript",
    "Java",
    "Python",
    "Angular",
    "React",
    "React_Native",
    "C#",
    ".NET",
  ],
  platforms: ["Web", "Backend", "Mobile", "UI kits", "Cross-platform systems"],
  integrationNotes:
    "Singleton is useful for centralized services like configuration, logging, caching, and shared application state.",
  scenarios: [
    {
      slug: "application-config-singleton",
      title: "Application config singleton",
      summary:
        "A shared configuration object loads environment settings once and serves them throughout the application.",
      languageExamples: applicationConfigSingletonExamples,
    },
    {
      slug: "logger-singleton",
      title: "Logger singleton",
      summary:
        "A logging service keeps one shared logger instance so every component writes to the same output pipeline.",
      languageExamples: loggerSingletonExamples,
    },
    {
      slug: "cache-manager-singleton",
      title: "Cache manager singleton",
      summary:
        "A cache manager keeps one shared in-memory cache so all parts of the app reuse the same stored data.",
      languageExamples: cacheManagerSingletonExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Configuration services",
      description:
        "Applications often use one shared config source for environment variables, feature flags, and runtime settings.",
    },
    {
      title: "Central logging pipelines",
      description:
        "Many systems route logs through one shared logger or telemetry client to keep formatting and destination consistent.",
    },
    {
      title: "Shared caches",
      description:
        "Apps frequently maintain one cache instance so repeated lookups can reuse the same stored values.",
    },
  ],
};

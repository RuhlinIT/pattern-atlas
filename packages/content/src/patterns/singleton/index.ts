import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { applicationConfigSingletonExamples } from "./examples/application-config-singleton";
import { loggerSingletonExamples } from "./examples/logger-singleton";
import { cacheManagerSingletonExamples } from "./examples/cache-manager-singleton";

export const singletonPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "application-config-singleton": applicationConfigSingletonExamples,
    "logger-singleton": loggerSingletonExamples,
    "cache-manager-singleton": cacheManagerSingletonExamples,
  },
  realWorldExamples: [
  {
    "title": "Configuration services",
    "description": "Applications often use one shared config source for environment variables, feature flags, and runtime settings."
  },
  {
    "title": "Central logging pipelines",
    "description": "Many systems route logs through one shared logger or telemetry client to keep formatting and destination consistent."
  },
  {
    "title": "Shared caches",
    "description": "Apps frequently maintain one cache instance so repeated lookups can reuse the same stored values."
  }
],
  tradeoffs: [
  "Can make dependencies harder to test if the singleton is used everywhere",
  "May introduce hidden global state that complicates debugging and concurrency"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Singleton is useful for centralized services like configuration, logging, caching, and shared application state.",
  problem: "A system needs exactly one shared instance of a class, and that instance must be globally accessible without allowing uncontrolled duplication.",
};

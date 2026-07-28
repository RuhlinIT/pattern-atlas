import type { PatternRecord } from "@atlas-patterns/schemas";
import { DecoratorPattern, StrategyPattern } from "./patterns";

export const patternExporter: PatternRecord[] = [
  StrategyPattern,
  DecoratorPattern,
  {
    slug: "adapter",
    name: "Adapter",
    category: "Structural",
    problem:
      "A new system needs to work with an existing interface, library, or service that does not match the expected shape.",
    intent:
      "Translate one interface into another so incompatible parts can collaborate without changing their internals.",
    tradeoffs: [
      "Can hide deeper domain mismatch if overused",
      "May introduce a growing translation layer that needs clear ownership",
    ],
    languages: ["TypeScript", "Java", "Python"],
    platforms: ["Frontend", "Backend", "Integrations"],
    integrationNotes:
      "Adapters are often the safest way to connect different codebases, especially during migrations or legacy modernization.",
    scenarios: [],
    realWorldExamples: [],
  },
  {
    slug: "observer",
    name: "Observer",
    category: "Behavioral",
    problem:
      "Multiple parts of a system need to react when state changes, without tightly coupling every consumer to the producer.",
    intent:
      "Define a subscription relationship so dependents can be notified automatically when the source changes.",
    tradeoffs: [
      "Can become hard to trace when many subscribers exist",
      "Event ordering and side effects need discipline",
    ],
    languages: ["TypeScript", "Java", "Python"],
    platforms: ["Frontend", "Backend", "Event-driven systems"],
    integrationNotes:
      "Inside one app this may look like listeners or subscriptions, while across systems it often becomes pub-sub or event streaming.",
    scenarios: [],
    realWorldExamples: [],
  },
  {
    slug: "facade",
    name: "Facade",
    category: "Structural",
    problem:
      "A subsystem is too complex or noisy for most consumers to use directly.",
    intent:
      "Provide a simpler surface over a more complex set of classes, modules, or services.",
    tradeoffs: [
      "Can become a dumping ground if boundaries are unclear",
      "May obscure useful lower-level capabilities from advanced consumers",
    ],
    languages: ["TypeScript", "Java", "Python"],
    platforms: ["Applications", "APIs", "Service layers"],
    integrationNotes:
      "Facades are useful when exposing a stable boundary over a multi-service or mixed-language backend.",
    scenarios: [],
    realWorldExamples: [],
  },
];

export function getPatternBySlug(slug: string): PatternRecord | undefined {
  return patterns.find((pattern) => pattern.slug === slug);
}
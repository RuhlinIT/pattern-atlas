import type { PatternRecord } from "@atlas-patterns/schemas";

export const patterns: PatternRecord[] = [
  {
    slug: "strategy",
    name: "Strategy",
    category: "Behavioral",
    problem:
      "A system needs to switch between interchangeable behaviors without hardcoding branching logic everywhere.",
    intent:
      "Encapsulate a family of algorithms or behaviors behind a common contract so they can be selected and swapped cleanly.",
    tradeoffs: [
      "Adds more moving parts than a direct conditional approach",
      "Works best when behavior variations are real and likely to grow",
    ],
    languages: ["TypeScript", "Java", "Python", "Go"],
    platforms: ["Web", "Backend", "Services"],
    integrationNotes:
      "Strategies can cross codebases through shared contracts, API selection rules, or runtime configuration.",
  },
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
    languages: ["TypeScript", "C#", "Java", "Python"],
    platforms: ["Frontend", "Backend", "Integrations"],
    integrationNotes:
      "Adapters are often the safest way to connect different codebases, especially during migrations or legacy modernization.",
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
    languages: ["TypeScript", "JavaScript", "Java", "Kotlin"],
    platforms: ["Frontend", "Backend", "Event-driven systems"],
    integrationNotes:
      "Inside one app this may look like listeners or subscriptions, while across systems it often becomes pub-sub or event streaming.",
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
    languages: ["TypeScript", "PHP", "Java", "C#"],
    platforms: ["Applications", "APIs", "Service layers"],
    integrationNotes:
      "Facades are useful when exposing a stable boundary over a multi-service or mixed-language backend.",
  },
];
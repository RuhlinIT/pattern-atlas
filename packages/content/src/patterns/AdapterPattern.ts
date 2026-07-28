  import type { PatternRecord } from "@atlas-patterns/schemas";
  
  export const AdapterPattern: PatternRecord = {
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
  }
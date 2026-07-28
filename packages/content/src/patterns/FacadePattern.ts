    import type { PatternRecord } from "@atlas-patterns/schemas";
    
    export const FacadePattern: PatternRecord = {
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
  }
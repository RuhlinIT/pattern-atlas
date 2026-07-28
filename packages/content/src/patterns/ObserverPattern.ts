  import type { PatternRecord } from "@atlas-patterns/schemas";
  
  export const ObserverPattern: PatternRecord = {
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
  }
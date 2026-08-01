import type { PatternMeta } from "@atlas-patterns/schemas";

export const meta: PatternMeta = {
  slug: "bridge",
  name: "Bridge",
  category: "structural",
  summary:
    "Decouple an abstraction from its implementation so the two can vary independently.",
  intent:
    "Use this pattern when you need to separate what something does from how it does it, especially when both sides may evolve independently.",
  difficulty: "intermediate",
  tags: [],
  languages: ["typescript", "javascript"],
  relatedPatterns: ["abstract-factory", "adapter"],
  aliases: [],
  order: 0,
  icon: "bridge",
  prerequisites: ["abstraction", "composition"],
  bestFor: ["platform adapters", "rendering systems", "driver layers"],
};
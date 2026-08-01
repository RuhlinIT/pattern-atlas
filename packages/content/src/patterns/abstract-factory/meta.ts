import type { PatternMeta } from "@atlas-patterns/schemas";

export const meta: PatternMeta = {
  slug: "abstract-factory",
  name: "Abstract Factory",
  category: "creational",
  summary:
    "Provide an interface for creating families of related or dependent objects without specifying their concrete classes.",
  intent:
    "Use this pattern when you need to create related objects that should work together but want to keep the concrete classes hidden behind a shared interface.",
  difficulty: "intermediate",
  tags: [],
  languages: ["typescript", "javascript"],
  relatedPatterns: ["factory-method", "builder"],
  aliases: [],
  order: 0,
  icon: "factory",
  prerequisites: ["interface", "inheritance"],
  bestFor: ["ui kits", "cross-platform SDKs", "themeable systems"],
};
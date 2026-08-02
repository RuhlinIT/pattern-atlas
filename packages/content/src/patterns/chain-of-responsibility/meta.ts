import type { PatternMeta } from "@atlas-patterns/schemas";

export const meta: PatternMeta = {
  slug: "chain-of-responsibility",
  name: "Chain of Responsibility",
  category: "behavioral",
  summary:
    "Pass a request through a sequence of handlers until one handles it or the chain ends.",
  intent:
    "Pass requests along a chain of handlers until one of them handles the request or the request reaches the end of the chain.",
  difficulty: "intermediate",
  tags: ["behavioral", "chain", "handlers", "requests"],
  relatedPatterns: [],
  aliases: [],
  order: 0,
  icon: "",
  prerequisites: [],
  bestFor: [],
  languages: [
    "typescript",
    "java",
    "python",
    "angular",
    "react",
    "react-native",
    "csharp",
    "dotnet",
  ],
};
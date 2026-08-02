import type { PatternMeta } from "@atlas-patterns/schemas";

export const meta: PatternMeta = {
  slug: "command",
  name: "Command",
  category: "behavioral",
  summary:
    "Encapsulate a request as an object so it can be invoked, queued, logged, or undone independently of the receiver that performs the work.",
  intent:
    "Encapsulate a request as an object so it can be invoked, queued, logged, or undone independently of the receiver that performs the work.",
  difficulty: "intermediate",
  tags: ["behavioral", "request", "invocation", "undo"],
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
import type { PatternMeta } from "@atlas-patterns/schemas";

export const adapterMeta: PatternMeta = {
  slug: "adapter",
  name: "Adapter",
  category: "structural",
  summary:
    "Convert the interface of a class or module into another interface clients expect.",
  intent:
    "Allow incompatible interfaces to work together without changing the consuming code.",
  difficulty: "intermediate",
  tags: ["interface", "translation", "legacy", "integration", "mapping"],
  relatedPatterns: ["facade", "proxy", "bridge"],
  aliases: ["wrapper"],
  order: 10,
  icon: "🔌",
  prerequisites: ["solid interface boundaries", "basic dependency inversion"],
  bestFor: ["legacy integration", "API normalization", "service isolation"],
  languages: [
    "typescript",
    "java",
    "python",
    "go",
    "csharp",
    "dotnet",
    "react",
    "angular",
    "react-native",
  ],
};
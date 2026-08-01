import type { PatternMeta } from "@atlas-patterns/schemas";

export const meta: PatternMeta = {
  slug: "adapter",
  name: "Adapter",
  category: "structural",
  summary:
    "Convert the interface of an existing class into one that the client can use without changing the original implementation.",
  intent:
    "A client needs to use an existing class or external service, but its interface does not match what the application expects.",
  difficulty: "intermediate",
  tags: ["integration", "legacy", "translation", "compatibility"],
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
  bestFor: [
    "Wrapping third-party SDKs",
    "Integrating legacy services",
    "Translating data formats",
  ],
  prerequisites: [
    "Interface segregation",
    "Basic object composition",
  ],
};
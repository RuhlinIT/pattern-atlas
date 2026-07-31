import type { PatternLanguage } from "@atlas-patterns/schemas";

const languageAliases: Record<string, PatternLanguage> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  JSX: "jsx",
  TSX: "tsx",
  Python: "python",
  Java: "java",
  "C#": "csharp",
  ".NET": "dotnet",
  Angular: "angular",
  React: "react",
  React_Native: "react-native",
  "React Native": "react-native",
};

export function normalizeLanguage(language: string): PatternLanguage {
  return languageAliases[language] ?? (language.toLowerCase() as PatternLanguage);
}
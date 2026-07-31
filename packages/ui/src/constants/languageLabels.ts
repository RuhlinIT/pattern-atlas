export type PatternLanguage =
  | "typescript"
  | "python"
  | "java"
  | "csharp"
  | "dotnet"
  | "angular"
  | "react"
  | "react-native";

export type PrettyLanguageLabels = Partial<Record<PatternLanguage, string>>;

export const prettyLanguageLabels: PrettyLanguageLabels = {
  typescript: "TypeScript",
  python: "Python",
  java: "Java",
  csharp: "C#",
  dotnet: ".NET",
  angular: "Angular",
  react: "React",
  "react-native": "React Native",
};
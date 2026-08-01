export type PatternLanguage =
  | "typescript"
  | "javascript"
  | "tsx"
  | "jsx"
  | "go"
  | "php"
  | "kotlin"
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
  javascript: "JavaScript",
  tsx: "TSX",
  jsx: "JSX",
  python: "Python",
  java: "Java",
  go: "Go",
  php: "PHP",
  csharp: "C#",
  dotnet: ".NET",
  kotlin: "Kotlin",
  react: "React",
  "react-native": "React Native",
  angular: "Angular",
} as const;
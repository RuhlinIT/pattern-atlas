export type PatternCategory =
  | "Creational"
  | "Structural"
  | "Behavioral"
  | "Architectural"
  | "Integration";

export type PatternLanguageExample = {
  language: string;
  code: string;
  explanation: string;
};

export type PatternScenario = {
  slug: string;
  title: string;
  summary: string;
  languageExamples: PatternLanguageExample[];
};

export type PatternUseCase = {
  title: string;
  description: string;
};

export type PatternRecord = {
  slug: string;
  name: string;
  category: PatternCategory;
  problem: string;
  intent: string;
  tradeoffs: string[];
  languages: string[];
  platforms: string[];
  integrationNotes: string;
  scenarios: PatternScenario[];
  realWorldExamples: PatternUseCase[];
};
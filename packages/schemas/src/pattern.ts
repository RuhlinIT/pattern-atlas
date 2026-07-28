export type PatternCategory =
  | "Creational"
  | "Structural"
  | "Behavioral"
  | "Architectural"
  | "Integration";

export type PatternExample = {
  language: string;
  title: string;
  summary: string;
  code: string;
  explanation: string;
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
  examples: PatternExample[];
};
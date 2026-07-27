export type PatternCategory =
  | "Creational"
  | "Structural"
  | "Behavioral"
  | "Architectural"
  | "Integration";

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
};
export type PatternCategory =
  | 'creational'
  | 'structural'
  | 'behavioral'
  | 'architectural'
  | 'integration'
  | 'other';

export type PatternDifficulty = 'beginner' | 'intermediate' | 'advanced';

export type PatternLanguage =
  | 'typescript'
  | 'java'
  | 'python'
  | 'angular'
  | 'react'
  | 'react-native'
  | 'csharp'
  | 'dotnet'
  | 'kotlin'
  | 'jsx'
  | 'javascript'
  | 'tsx'
  | 'go'
  | 'php';

export interface PatternMeta {
  slug: string;
  name: string;
  category: PatternCategory;
  summary: string;
  intent: string;
  difficulty: PatternDifficulty;
  tags: readonly string[];
  relatedPatterns?: readonly string[];
  aliases?: readonly string[];
  order?: number;
  icon?: string;
  prerequisites?: readonly string[];
  bestFor?: readonly string[];
  languages: readonly PatternLanguage[];
}

export interface PatternScenario {
  slug: string;
  title: string;
  summary: string;
  context?: string;
  problem?: string;
  solution?: string;
}

export interface PatternLanguageExample {
  language: PatternLanguage;
  label?: string;
  title?: string;
  code: string;
  explanation?: string;
}

export interface PatternUseCase {
  title: string;
  description: string;
}

export type PatternExampleMap = Partial<
  Record<PatternLanguage, PatternLanguageExample>
>;

export type PatternScenarioExamples = Partial<Record<string, PatternExampleMap>>;

export interface LegacyPatternScenario extends PatternScenario {
  languageExamples?: readonly PatternLanguageExample[];
}

export interface PatternRecord extends PatternMeta {
  problem?: string;
  tradeoffs?: readonly string[];
  platforms?: readonly string[];
  integrationNotes?: string;
  scenarios: readonly PatternScenario[] | readonly LegacyPatternScenario[];
  scenarioExamples?: PatternScenarioExamples;
  realWorldExamples?: readonly PatternUseCase[];
  whenToUse?: readonly string[];
  flexibility?: PatternDifficulty;
  antiPatterns?: readonly string[];
}

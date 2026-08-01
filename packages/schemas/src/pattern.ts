import { z } from "zod";

export const patternCategorySchema = z.enum([
  "creational",
  "structural",
  "behavioral",
  "architectural",
  "integration",
  "other",
]);

export type PatternCategory = z.infer<typeof patternCategorySchema>;

export const patternDifficultySchema = z.enum([
  "beginner",
  "intermediate",
  "advanced",
]);

export type PatternDifficulty = z.infer<typeof patternDifficultySchema>;

export const patternLanguageSchema = z.enum([
  "typescript",
  "java",
  "python",
  "angular",
  "react",
  "react-native",
  "csharp",
  "dotnet",
  "kotlin",
  "jsx",
  "javascript",
  "tsx",
  "go",
  "php",
]);

export const patternVariantLanguageSchema = z.enum([
  "typescript",
  "javascript",
  "tsx",
  "jsx",
  "python",
  "java",
  "go",
  "php",
  "csharp",
  "dotnet",
  "kotlin",
  "react",
  "react-native",
  "angular",
]);

export type PatternVariantLanguage = z.infer<typeof patternVariantLanguageSchema>;

export type PatternLanguage = z.infer<typeof patternLanguageSchema>;

export const exampleRuntimeSchema = z.enum(["frontend", "backend"]);
export type ExampleRuntime = z.infer<typeof exampleRuntimeSchema>;

export const patternLayerSchema = z.enum([
  "frontend",
  "backend",
  "integration",
]);

export type PatternLayer = z.infer<typeof patternLayerSchema>;

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
  runtime?: ExampleRuntime;
}

export interface PatternLanguageExample {
  language: PatternLanguage;
  label?: string;
  title?: string;
  code: string;
  explanation?: string;
  runtime?: ExampleRuntime;
}

export interface PatternUseCase {
  title: string;
  description: string;
  runtime?: ExampleRuntime;
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
  variants?: readonly PatternVariant[];
}

export const patternScenarioSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  context: z.string().optional(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  runtime: exampleRuntimeSchema.optional(),
});

export const patternVariantSchema = z.object({
  slug: z.string(),
  title: z.string(),
  layer: patternLayerSchema,
  language: patternVariantLanguageSchema,
  summary: z.string(),
  intent: z.string().optional(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  relatedVariants: z.array(z.string()).optional(),
  examplePatternSlugs: z.array(z.string()).optional(),
  notes: z.string().optional(),
});

export const patternLanguageExampleSchema = z.object({
  language: patternLanguageSchema,
  label: z.string().optional(),
  title: z.string().optional(),
  code: z.string(),
  explanation: z.string().optional(),
  runtime: exampleRuntimeSchema.optional(),
});

export const patternUseCaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  runtime: exampleRuntimeSchema.optional(),
});

export const patternExampleMapSchema = z.record(
  patternLanguageSchema,
  patternLanguageExampleSchema
);

export const patternScenarioExamplesSchema = z.record(
  z.string(),
  patternExampleMapSchema
);

export const legacyPatternScenarioSchema = patternScenarioSchema.extend({
  languageExamples: z.array(patternLanguageExampleSchema).optional(),
});

export const patternRecordSchema = z.object({
  slug: z.string(),
  name: z.string(),
  category: patternCategorySchema,
  summary: z.string(),
  intent: z.string(),
  difficulty: patternDifficultySchema,
  tags: z.array(z.string()),
  relatedPatterns: z.array(z.string()).optional(),
  aliases: z.array(z.string()).optional(),
  order: z.number().optional(),
  icon: z.string().optional(),
  prerequisites: z.array(z.string()).optional(),
  bestFor: z.array(z.string()).optional(),
  languages: z.array(patternLanguageSchema),
  problem: z.string().optional(),
  tradeoffs: z.array(z.string()).optional(),
  platforms: z.array(z.string()).optional(),
  integrationNotes: z.string().optional(),
  scenarios: z.union([
    z.array(patternScenarioSchema),
    z.array(legacyPatternScenarioSchema),
  ]),
  scenarioExamples: patternScenarioExamplesSchema.optional(),
  realWorldExamples: z.array(patternUseCaseSchema).optional(),
  whenToUse: z.array(z.string()).optional(),
  flexibility: patternDifficultySchema.optional(),
  antiPatterns: z.array(z.string()).optional(),
  variants: z.array(patternVariantSchema).optional(),
});

export const patternsSchema = z.array(patternRecordSchema);
export type Patterns = z.infer<typeof patternsSchema>;

export type PatternVariant = z.infer<typeof patternVariantSchema>;
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

export type PatternLanguage = z.infer<typeof patternLanguageSchema>;

export const patternScenarioSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  context: z.string().optional(),
  problem: z.string().optional(),
  solution: z.string().optional(),
});

export type PatternScenario = z.infer<typeof patternScenarioSchema>;

export const patternLanguageExampleSchema = z.object({
  language: patternLanguageSchema,
  label: z.string().optional(),
  title: z.string().optional(),
  code: z.string(),
  explanation: z.string().optional(),
});

export type PatternLanguageExample = z.infer<typeof patternLanguageExampleSchema>;

export const patternUseCaseSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type PatternUseCase = z.infer<typeof patternUseCaseSchema>;

export const patternExampleMapSchema = z.record(
  patternLanguageSchema,
  patternLanguageExampleSchema
);

export type PatternExampleMap = z.infer<typeof patternExampleMapSchema>;

export const patternScenarioExamplesSchema = z.record(
  z.string(),
  patternExampleMapSchema
);

export type PatternScenarioExamples = z.infer<typeof patternScenarioExamplesSchema>;

export const legacyPatternScenarioSchema = patternScenarioSchema.extend({
  languageExamples: z.array(patternLanguageExampleSchema).optional(),
});

export type LegacyPatternScenario = z.infer<typeof legacyPatternScenarioSchema>;

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
});

export type PatternRecord = z.infer<typeof patternRecordSchema>;

export const patternsSchema = z.array(patternRecordSchema);

export type Patterns = z.infer<typeof patternsSchema>;
import type { PatternLanguage, PatternLanguageExample } from "@atlas-patterns/schemas";
import { normalizeLanguage } from "./normalize-language";

export function normalizeExamples<T extends Record<string, PatternLanguageExample>>(
  examples: T,
): Partial<Record<PatternLanguage, PatternLanguageExample>> {
  return Object.fromEntries(
    Object.entries(examples).map(([key, example]) => [
      normalizeLanguage(key),
      {
        ...example,
        language: normalizeLanguage(example.language),
      },
    ]),
  ) as Partial<Record<PatternLanguage, PatternLanguageExample>>;
}
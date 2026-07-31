import type { PatternLanguage, PatternLanguageExample } from "@atlas-patterns/schemas";
import { normalizeLanguage } from "./normalize-language";

type LooseLegacyExample = Omit<PatternLanguageExample, "language"> & {
  language: string;
};

export function normalizeLegacyExamples(
  examples: readonly LooseLegacyExample[],
): Partial<Record<PatternLanguage, PatternLanguageExample>> {
  return Object.fromEntries(
    examples.map((example) => {
      const language = normalizeLanguage(example.language);

      return [
        language,
        {
          ...example,
          language,
        },
      ];
    }),
  ) as Partial<Record<PatternLanguage, PatternLanguageExample>>;
}
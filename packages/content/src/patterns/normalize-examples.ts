import type {
  PatternLanguageExample,
} from "@atlas-patterns/schemas";

export type NormalizedExample =
  PatternLanguageExample & {
    id: string;
    label: string;
  };

export function normalizeExamples(
  examples: Record<string, PatternLanguageExample>,
): Record<string, NormalizedExample> {
  return Object.fromEntries(
    Object.entries(examples).map(
      ([id, example]) => [
        id,
        {
          ...example,
          id,
          label:
            example.title ??
            formatExampleLabel(id),
        },
      ],
    ),
  );
}

function formatExampleLabel(id: string): string {
  return id
    .split("-")
    .map((part) =>
      part.length > 0
        ? part[0]?.toUpperCase() + part.slice(1)
        : part,
    )
    .join(" ");
}
import { patterns } from "@atlas-patterns/content";
import type { PatternCategory } from "@atlas-patterns/schemas";
import type {
  ComparePageSearchParams,
  CompareRow,
  CompareRowValue,
  CompareablePattern,
  ParsedCompareState,
} from "./compare.types";

const patternCategories = [
  "Behavioral",
  "Structural",
  "Creational",
] as const satisfies readonly PatternCategory[];

const MAX_COMPARE_SELECTIONS = 3;

export function isPatternCategory(value: string): value is PatternCategory {
  return (patternCategories as readonly string[]).includes(value);
}

export function isTruthyString(value: string | undefined): value is string {
  return Boolean(value && value.trim().length > 0);
}

export function parseBooleanParam(value: string | undefined): boolean {
  if (!value) {
    return false;
  }

  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

export function parsePatternSlugs(value: string | undefined): string[] {
  if (!value) {
    return [];
  }

  const knownSlugs = new Set(patterns.map((pattern) => pattern.slug));

  return Array.from(
    new Set(
      value
        .split(",")
        .map((slug) => slug.trim())
        .filter(isTruthyString)
        .filter((slug) => knownSlugs.has(slug)),
    ),
  ).slice(0, MAX_COMPARE_SELECTIONS);
}

export function parseCompareSearchParams(
  params?: ComparePageSearchParams,
): ParsedCompareState {
  const requestedCategory = params?.category?.trim();
  const category =
    requestedCategory && isPatternCategory(requestedCategory)
      ? requestedCategory
      : undefined;

  return {
    selectedSlugs: parsePatternSlugs(params?.patterns),
    differencesOnly: parseBooleanParam(params?.differences),
    ...(category ? { category } : {}),
  };
}

export function buildCompareRows(
  selectedPatterns: CompareablePattern[],
): CompareRow[] {
  return [
    {
      key: "category",
      label: "Category",
      group: "basics",
      values: toValueMap(
        selectedPatterns,
        (pattern) => pattern.category,
      ),
    },
    {
      key: "intent",
      label: "Intent",
      group: "basics",
      values: toValueMap(
        selectedPatterns,
        (pattern) => pattern.intent,
      ),
    },
    {
      key: "problem",
      label: "Problem",
      group: "basics",
      values: toValueMap(
        selectedPatterns,
        (pattern) => pattern.problem,
      ),
    },
    {
      key: "tradeoffs",
      label: "Tradeoffs",
      group: "decision",
      values: toValueMap(
        selectedPatterns,
        (pattern) => pattern.tradeoffs,
      ),
    },
    {
      key: "languages",
      label: "Languages",
      group: "practical",
      values: toValueMap(
        selectedPatterns,
        (pattern) => pattern.languages,
      ),
    },
    {
      key: "platforms",
      label: "Platforms",
      group: "practical",
      values: toValueMap(
        selectedPatterns,
        (pattern) => pattern.platforms,
      ),
    },
    {
      key: "integrationNotes",
      label: "Integration",
      group: "practical",
      values: toValueMap(
        selectedPatterns,
        (pattern) => pattern.integrationNotes,
      ),
    },
  ];
}

export function filterDifferenceRows(rows: CompareRow[]): CompareRow[] {
  return rows.filter((row) => {
    const normalized = Object.values(row.values).map(normalizeCompareValue);
    return new Set(normalized).size > 1;
  });
}

export function groupCompareRows(
  rows: CompareRow[],
): Record<CompareRow["group"], CompareRow[]> {
  return {
    basics: rows.filter((row) => row.group === "basics"),
    decision: rows.filter((row) => row.group === "decision"),
    practical: rows.filter((row) => row.group === "practical"),
  };
}

function toValueMap(
  selectedPatterns: CompareablePattern[],
  getValue: (pattern: CompareablePattern) => CompareRowValue,
): Record<string, CompareRowValue> {
  return Object.fromEntries(
    selectedPatterns.map((pattern) => [pattern.slug, getValue(pattern)]),
  );
}

function normalizeCompareValue(value: CompareRowValue): string {
  if (Array.isArray(value)) {
    return value.join("|");
  }

  return value ?? "";
}
import { patterns } from "@atlas-patterns/content";
import type { PatternCategory, PatternVariant } from "@atlas-patterns/schemas";
import type {
  BuildCompareHrefOptions,
  ComparePageSearchParams,
  CompareRow,
  CompareRowGroup,
  CompareRowValue,
  CompareVariantFilter,
  CompareablePattern,
  ParsedCompareState,
} from "./compare.types";

const patternCategories = [
  "behavioral",
  "structural",
  "creational",
] as const satisfies readonly PatternCategory[];

const MAX_COMPARE_SELECTIONS = 3;

function parseVariantFilter(params?: ComparePageSearchParams): CompareVariantFilter {
  const layer = params?.layer?.trim();
  const language = params?.language?.trim();
  const runtime = params?.runtime?.trim();

  return {
    ...(layer && layer !== "all" ? { layer: layer as CompareVariantFilter["layer"] } : { layer: "all" }),
    ...(language && language !== "all" ? { language: language as CompareVariantFilter["language"] } : { language: "all" }),
    ...(runtime && runtime !== "all" ? { runtime: runtime as CompareVariantFilter["runtime"] } : { runtime: "all" }),
  };
}

function setIfMeaningful(params: URLSearchParams, key: string, value?: string | null) {
  if (value && value !== "all") {
    params.set(key, value);
  }
}

export function buildCompareHref({
  selectedSlugs,
  category,
  differencesOnly = false,
  variantFilter,
}: BuildCompareHrefOptions): string {
  const params = new URLSearchParams();

  if (selectedSlugs.length > 0) {
    params.set("patterns", selectedSlugs.join(","));
  }

  if (category && category !== "All") {
    params.set("category", category);
  }

  if (differencesOnly) {
    params.set("differences", "true");
  }

  setIfMeaningful(params, "layer", variantFilter?.layer);
  setIfMeaningful(params, "language", variantFilter?.language);
  setIfMeaningful(params, "runtime", variantFilter?.runtime);

  const queryString = params.toString();
  return queryString ? `/compare?${queryString}` : "/compare";
}

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
    variantFilter: parseVariantFilter(params),
    ...(category ? { category } : {}),
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

export function buildCompareRows(
  selectedPatterns: CompareablePattern[],
): CompareRow[] {
  return [
    {
      key: "category",
      label: "Category",
      group: "basics",
      values: toValueMap(selectedPatterns, (pattern) => pattern.category),
    },
    {
      key: "summary",
      label: "Summary",
      group: "basics",
      values: toValueMap(selectedPatterns, (pattern) => pattern.summary),
    },
    {
      key: "intent",
      label: "Intent",
      group: "basics",
      values: toValueMap(selectedPatterns, (pattern) => pattern.intent ?? null),
    },
    {
      key: "problem",
      label: "Problem",
      group: "decision",
      values: toValueMap(selectedPatterns, (pattern) => pattern.problem ?? null),
    },
    {
      key: "tradeoffs",
      label: "Tradeoffs",
      group: "decision",
      values: toValueMap(selectedPatterns, (pattern) => pattern.tradeoffs ?? null),
    },
    {
      key: "languages",
      label: "Languages",
      group: "practical",
      values: toValueMap(selectedPatterns, (pattern) => pattern.languages ?? []),
    },
    {
      key: "platforms",
      label: "Platforms",
      group: "practical",
      values: toValueMap(selectedPatterns, (pattern) => pattern.platforms ?? []),
    },
    {
      key: "integrationNotes",
      label: "Integration notes",
      group: "practical",
      values: toValueMap(
        selectedPatterns,
        (pattern) => pattern.integrationNotes ?? null,
      ),
    },
  ];
}

function areValuesEqual(values: CompareRowValue[]): boolean {
  if (values.length <= 1) {
    return true;
  }

  const normalize = (value: CompareRowValue) =>
    Array.isArray(value) ? JSON.stringify(value) : value ?? null;

  const [first, ...rest] = values.map(normalize);
  return rest.every((value) => value === first);
}

export function filterDifferenceRows(rows: CompareRow[]): CompareRow[] {
  return rows.filter((row) => !areValuesEqual(Object.values(row.values)));
}

export function getMatchingVariants(
  pattern: CompareablePattern & { variants?: readonly PatternVariant[] },
  filter: CompareVariantFilter,
) {
  return (pattern.variants ?? []).filter((variant) => {
    const layerOk =
      filter.layer === "all" || !filter.layer || variant.layer === filter.layer;
    const languageOk =
      filter.language === "all" ||
      !filter.language ||
      variant.language === filter.language;
    return layerOk && languageOk;
  });
}

export function groupCompareRows(
  rows: CompareRow[],
): Record<CompareRowGroup, CompareRow[]> {
  return rows.reduce<Record<CompareRowGroup, CompareRow[]>>(
    (groups, row) => {
      groups[row.group].push(row);
      return groups;
    },
    {
      basics: [],
      decision: [],
      practical: [],
    },
  );
}
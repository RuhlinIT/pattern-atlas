import type { PatternCategory, PatternRecord } from "@atlas-patterns/schemas";

export type CompareablePattern = Pick<
  PatternRecord,
  | "slug"
  | "name"
  | "category"
  | "summary"
  | "intent"
  | "problem"
  | "tradeoffs"
  | "languages"
  | "platforms"
  | "integrationNotes"
>;

export type ComparePattern = CompareablePattern;

export type CompareRowGroup = "basics" | "decision" | "practical";

export type CompareRowValue = string | readonly string[] | null;

export type CompareRow = {
  key: string;
  label: string;
  group: CompareRowGroup;
  values: Record<string, CompareRowValue>;
};

export type ComparePickerItem = {
  slug: string;
  name: string;
  category: PatternCategory;
  summary: string;
};

export type ComparePageSearchParams = {
  patterns?: string;
  category?: string;
  differences?: string;
};

export type ParsedCompareState = {
  selectedSlugs: string[];
  category?: PatternCategory;
  differencesOnly: boolean;
};

export type BuildCompareHrefOptions = {
  selectedSlugs: string[];
  category?: PatternCategory | "All";
  differencesOnly?: boolean;
};

export type ComparePickerProps = {
  items: ComparePickerItem[];
  selectedSlugs: string[];
  maxSelections?: number;
  activeCategory?: PatternCategory | "All";
  differencesOnly?: boolean;
};

export type CompareSelectedSummaryProps = {
  patterns: CompareablePattern[];
  category?: PatternCategory | "All";
  differencesOnly?: boolean;
  maxSelections?: number;
};

export type CompareTableProps = {
  patterns: CompareablePattern[];
  rows: CompareRow[];
  differencesOnly?: boolean;
  emptyMessage?: string;
};

export type ComparePageProps = {
  searchParams?: Promise<ComparePageSearchParams>;
};

export type CompareSelection = {
  left: string | undefined;
  right: string | undefined;
  third: string | undefined;
};

export type CompareColumn = {
  slug: string;
  name: string;
  category: string;
  difficulty: string;
};
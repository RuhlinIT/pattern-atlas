import { patterns } from "@atlas-patterns/content";
import { PageHeader } from "@atlas-patterns/ui";
import {
  buildCompareRows,
  filterDifferenceRows,
  parseCompareSearchParams,
} from "./compare.utils";
import { ComparePicker } from "./ComparePicker";
import { CompareSelectedSummary } from "./CompareSelectedSummary";
import { CompareTable } from "./CompareTable";
import type { ComparePageProps } from "./compare.types";

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const params = await searchParams;
  const state = parseCompareSearchParams(params);

  const items = patterns.map((pattern) => ({
    slug: pattern.slug,
    name: pattern.name,
    category: pattern.category,
    summary: pattern.intent,
  }));

  const selectedPatterns = patterns.filter((pattern) =>
    state.selectedSlugs.includes(pattern.slug),
  );

  const allRows = buildCompareRows(selectedPatterns);
  const rows = state.differencesOnly ? filterDifferenceRows(allRows) : allRows;

  return (
    <section className="page">
      <PageHeader
        eyebrow="Analysis"
        title="Compare patterns"
        description="Evaluate design patterns side by side across intent, tradeoffs, languages, and integration fit."
      />

      <ComparePicker
        items={items}
        selectedSlugs={state.selectedSlugs}
        maxSelections={3}
        activeCategory={state.category ?? "All"}
        differencesOnly={state.differencesOnly}
      />

      <CompareSelectedSummary
        patterns={selectedPatterns}
        category={state.category ?? "All"}
        differencesOnly={state.differencesOnly}
        maxSelections={3}
      />

      <CompareTable
        patterns={selectedPatterns}
        rows={rows}
        differencesOnly={state.differencesOnly}
        emptyMessage="Select two or more patterns to compare."
      />
    </section>
  );
}
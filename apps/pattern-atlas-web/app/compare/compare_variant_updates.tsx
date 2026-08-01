import type {
  ComparePageProps,
  CompareSelectedSummaryProps,
  CompareTableProps,
  CompareVariantFilter,
} from "./compare.types";
import {
  buildCompareHref,
  buildCompareRows,
  filterDifferenceRows,
  getMatchingVariants,
  groupCompareRows,
  parseCompareSearchParams,
} from "./compare.utils";
import { patterns } from "@atlas-patterns/content";
import { PageHeader } from "@atlas-patterns/ui";
import Link from "next/link";

export function normalizeVariantFilter(
  filter?: CompareVariantFilter,
): Required<CompareVariantFilter> {
  return {
    layer: filter?.layer ?? "all",
    language: filter?.language ?? "all",
    runtime: filter?.runtime ?? "all",
  };
}

export function getPatternVariantLabel(
  filter: Required<CompareVariantFilter>,
): string {
  const parts: string[] = [];
  if (filter.layer !== "all") parts.push(filter.layer ?? "");
  if (filter.language !== "all") parts.push(filter.language ?? "");
  if (filter.runtime !== "all") parts.push(filter.runtime ?? "");
  return parts.length ? parts.join(" · ") : "all variants";
}

export function CompareSelectedSummary({
  patterns: selectedPatterns,
  category,
  differencesOnly = false,
  maxSelections = 3,
  variantFilter,
}: CompareSelectedSummaryProps & { variantFilter?: CompareVariantFilter }) {
  const activeVariantFilter = normalizeVariantFilter(variantFilter);

  if (selectedPatterns.length === 0) {
    return (
      <section className="rounded-xl border border-slate-700 bg-slate-900/80 p-4 text-slate-100 shadow-sm">
        <p className="text-slate-300">Choose up to {maxSelections} patterns to compare.</p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900/80 p-4 text-slate-100 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Current selection</p>
          <h2 className="text-lg font-semibold text-slate-50">
            {selectedPatterns.length} of {maxSelections} selected
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            Comparing {category ?? "all categories"} with {getPatternVariantLabel(activeVariantFilter)}.
          </p>
        </div>

        <Link
          className="inline-flex items-center rounded-md border border-slate-600 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
          href="/compare"
        >
          Clear all
        </Link>
      </div>
    </section>
  );
}

export function CompareTable({
  patterns: selectedPatterns,
  rows,
  differencesOnly = false,
  emptyMessage = "Select patterns to compare.",
  variantFilter,
}: CompareTableProps & { variantFilter?: CompareVariantFilter }) {
  const activeVariantFilter = normalizeVariantFilter(variantFilter);

  if (selectedPatterns.length < 2) {
    return (
      <section className="rounded-xl border border-slate-700 bg-slate-900/80 p-4 text-slate-100 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-50">Comparison</h2>
        <p className="mt-1 text-sm text-slate-300">{emptyMessage}</p>
      </section>
    );
  }

  const groupedRows = groupCompareRows(rows);
  const patternSlugs = selectedPatterns.map((pattern) => pattern.slug);

  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900/80 p-4 text-slate-100 shadow-sm">
      <div className="mb-4 flex flex-col gap-1">
        <p className="text-xs uppercase tracking-wide text-slate-400">Analysis</p>
        <h2 className="text-lg font-semibold text-slate-50">Pattern comparison</h2>
        <p className="text-sm text-slate-300">
          Showing {getPatternVariantLabel(activeVariantFilter)}.
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-800">
        <table className="min-w-full border-collapse bg-slate-950">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Criteria</th>
              {selectedPatterns.map((pattern) => (
                <th key={pattern.slug} className="px-4 py-3 text-left">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium uppercase tracking-wide text-sky-400">{pattern.category}</span>
                    <span className="text-sm font-semibold text-slate-100">{pattern.name}</span>
                    <Link className="text-sm font-medium text-sky-400 hover:text-sky-300" href={`/patterns/${pattern.slug}`}>
                      View pattern
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groupedRows.basics.map((row) => (
              <tr key={row.key} className="border-t border-slate-800">
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-100">{row.label}</th>
                {patternSlugs.map((slug) => (
                  <td key={slug} className="px-4 py-3 align-top text-sm text-slate-200">
                    {Array.isArray(row.values[slug]) ? (row.values[slug] as readonly string[]).join(", ") : (row.values[slug] ?? "—")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const params = (await searchParams) ?? {};
  const state = parseCompareSearchParams(params);
  const selectedPatterns = patterns.filter((pattern) => state.selectedSlugs.includes(pattern.slug));
  const rows = filterDifferenceRows(buildCompareRows(selectedPatterns));
  return (
    <section className="space-y-6">
      <PageHeader eyebrow="Analysis" title="Compare patterns" description="Evaluate design patterns side by side." />
      <CompareSelectedSummary patterns={selectedPatterns} category={state.category ?? "All"} differencesOnly={state.differencesOnly} maxSelections={3} variantFilter={state.variantFilter} />
      <CompareTable patterns={selectedPatterns} rows={rows} differencesOnly={state.differencesOnly} emptyMessage="Select two or more patterns to compare." variantFilter={state.variantFilter} />
    </section>
  );
}
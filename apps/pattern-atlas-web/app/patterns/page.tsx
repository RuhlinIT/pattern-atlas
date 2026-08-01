import type { Metadata } from "next";
import { patterns } from "@atlas-patterns/content";
import { ButtonLink, PageHeader, SectionCard, Tag } from "@atlas-patterns/ui";
import { CategoryFilter } from "./CategoryFilter";
import type { PatternCategory } from "@atlas-patterns/schemas";

export const metadata: Metadata = {
  title: "Patterns",
};

const patternCategories = [
  "behavioral",
  "structural",
  "creational",
] as const satisfies readonly PatternCategory[];

function isPatternCategory(value: string): value is PatternCategory {
  return (patternCategories as readonly string[]).includes(value.toLowerCase() as PatternCategory);
}

function normalizeCategoryKey(category: string) {
  return category.toLowerCase();
}

function formatCategoryLabel(category: string) {
  const lower = category.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

type PatternsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function PatternsPage({
  searchParams,
}: PatternsPageProps) {
  const params = await searchParams;

  const availableCategories: string[] = Array.from(
    new Set(patterns.map((pattern) => normalizeCategoryKey(pattern.category))),
  ).sort();

  const requestedCategory = params?.category ?? "";
  const activeCategoryKey = normalizeCategoryKey(requestedCategory);

  const activeCategory = isPatternCategory(activeCategoryKey)
    ? formatCategoryLabel(activeCategoryKey)
    : "All";

  const filteredPatterns =
    activeCategory === "All"
      ? patterns
      : patterns.filter(
          (pattern) =>
            normalizeCategoryKey(pattern.category) === activeCategoryKey,
        );

  return (
    <section className="page">
      <PageHeader
        eyebrow="Library"
        title="Patterns"
        description="A growing set of design patterns with implementation notes, tradeoffs, and cross-stack integration guidance."
      />

      <div className="page-actions">
        <ButtonLink href="/compare" variant="secondary">
          Compare patterns
        </ButtonLink>
      </div>

      <CategoryFilter
        categories={availableCategories}
        activeCategory={activeCategory}
      />

      <p className="results-meta">
        {filteredPatterns.length} pattern
        {filteredPatterns.length === 1 ? "" : "s"}
      </p>

      <div className="grid card-grid">
        {filteredPatterns.map((pattern) => (
          <SectionCard key={pattern.slug} title={pattern.name}>
            <div className="panel-meta">
              <Tag>{formatCategoryLabel(pattern.category)}</Tag>
            </div>

            <p>{pattern.intent}</p>

            <div className="stack">
              <p>
                <strong>Problem:</strong> {pattern.problem}
              </p>
              <p>
                <strong>Languages:</strong> {pattern.languages.join(", ")}
              </p>
              <p>
                <strong>Integration:</strong> {pattern.integrationNotes}
              </p>
            </div>

            <ButtonLink href={`/patterns/${pattern.slug}`}>
              View pattern
            </ButtonLink>
          </SectionCard>
        ))}
      </div>
    </section>
  );
}
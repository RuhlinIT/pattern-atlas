import type { Metadata } from "next";
import { patternExporter } from "@atlas-patterns/content";
import { ButtonLink, PageHeader, SectionCard, Tag } from "@atlas-patterns/ui";
import { CategoryFilter } from "./CategoryFilter";

export const metadata: Metadata = {
  title: "Patterns",
};

type PatternsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function PatternsPage({
  searchParams,
}: PatternsPageProps) {
  const params = await searchParams;

  const categories = Array.from(
    new Set(patternExporter.map((pattern) => pattern.category)),
  ).sort();

  const requestedCategory = params?.category;
  const activeCategory = categories.includes(requestedCategory ?? "")
    ? requestedCategory
    : undefined;

  const filteredPatterns = activeCategory
    ? patternExporter.filter((pattern) => pattern.category === activeCategory)
    : patternExporter;

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
        categories={categories}
        activeCategory={activeCategory ?? "All"}
      />

      <p className="results-meta">
        {filteredPatterns.length} pattern
        {filteredPatterns.length === 1 ? "" : "s"}
      </p>

      <div className="grid card-grid">
        {filteredPatterns.map((pattern) => (
          <SectionCard key={pattern.slug} title={pattern.name}>
            <div className="panel-meta">
              <Tag>{pattern.category}</Tag>
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
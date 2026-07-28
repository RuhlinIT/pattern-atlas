import type { Metadata } from "next";
import { patterns } from "@atlas-patterns/content";
import { ButtonLink, PageHeader, SectionCard, Tag } from "@atlas-patterns/ui";

export const metadata: Metadata = {
  title: "Patterns",
};

export default function PatternsPage() {
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

      <div className="grid card-grid">
        {patterns.map((pattern) => (
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
          </SectionCard>
        ))}
      </div>
    </section>
  );
}

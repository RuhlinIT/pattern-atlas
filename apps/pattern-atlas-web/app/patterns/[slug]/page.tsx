import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPatternBySlug, patterns } from "@atlas-patterns/content";
import { PageHeader, SectionCard, Tag } from "@atlas-patterns/ui";

type PatternDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return patterns.map((pattern) => ({
    slug: pattern.slug,
  }));
}

export async function generateMetadata({
  params,
}: PatternDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pattern = getPatternBySlug(slug);

  if (!pattern) {
    return {
      title: "Pattern not found",
    };
  }

  return {
    title: `${pattern.name} Pattern`,
    description: pattern.intent,
  };
}

export default async function PatternDetailPage({
  params,
}: PatternDetailPageProps) {
  const { slug } = await params;
  const pattern = getPatternBySlug(slug);

  if (!pattern) {
    notFound();
  }

  return (
    <section className="page">
      <PageHeader
        eyebrow={pattern.category}
        title={pattern.name}
        description={pattern.intent}
      />

      <div className="grid two-up">
        <SectionCard title="Problem">
          <div className="panel-meta">
            <Tag>{pattern.category}</Tag>
          </div>
          <p>{pattern.problem}</p>
        </SectionCard>

        <SectionCard title="Integration notes">
          <p>{pattern.integrationNotes}</p>
        </SectionCard>
      </div>

      <SectionCard title="Tradeoffs">
        <ul className="list">
          {pattern.tradeoffs.map((tradeoff) => (
            <li key={tradeoff}>{tradeoff}</li>
          ))}
        </ul>
      </SectionCard>

      <div className="grid two-up">
        <SectionCard title="Languages">
          <p>{pattern.languages.join(", ")}</p>
        </SectionCard>

        <SectionCard title="Platforms">
          <p>{pattern.platforms.join(", ")}</p>
        </SectionCard>
      </div>

      <SectionCard title="Examples">
        {pattern.examples.length === 0 ? (
          <p>No examples yet.</p>
        ) : (
          <div className="stack">
            {pattern.examples.map((example) => (
              <article key={example.language} className="example-card">
                <div className="panel-meta">
                  <Tag>{example.language}</Tag>
                </div>

                <h3>{example.title}</h3>
                <p>{example.summary}</p>

                <pre className="code-block">
                  <code>{example.code}</code>
                </pre>

                <p>{example.explanation}</p>
              </article>
            ))}
          </div>
        )}
      </SectionCard>
    </section>
  );
}
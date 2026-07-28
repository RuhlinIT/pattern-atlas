import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPatternBySlug, patterns } from "@atlas-patterns/content";
import { PageHeader, SectionCard, Tag } from "@atlas-patterns/ui";
import { PatternExamplesTabs } from "./PatternExamplesTabs";

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

      <SectionCard title="Scenarios">
        <PatternExamplesTabs scenarios={pattern.scenarios} />
      </SectionCard>

      <SectionCard title="Real-world examples">
        {pattern.realWorldExamples.length === 0 ? (
          <p>No real-world examples yet.</p>
        ) : (
          <ul className="list">
            {pattern.realWorldExamples.map((example) => (
              <li key={example.title}>
                <strong>{example.title}:</strong> {example.description}
              </li>
            ))}
          </ul>
        )}
      </SectionCard>
    </section>
  );
}
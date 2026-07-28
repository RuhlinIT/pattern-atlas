import type { Metadata } from "next";
import { ButtonLink, PageHeader, SectionCard } from "@atlas-patterns/ui";

export const metadata: Metadata = {
  title: "Compare",
};

const comparisonLanes = [
  {
    title: "FrontEnd",
    description:
      "Compare how patterns show up in component architecture, state management, and client-side interaction models.",
  },
  {
    title: "BackEnd",
    description:
      "Review service boundaries, application structure, and data flow patterns across server runtimes.",
  },
  {
    title: "DevOps",
    description:
      "Map pattern thinking into automation, deployment pipelines, observability, and operational workflows.",
  },
  {
    title: "FullStack Integration",
    description:
      "Trace how a pattern expressed in one codebase can be adapted through APIs, events, contracts, or adapters in another.",
  },
];

export default function ComparePage() {
  return (
    <section className="page">
      <PageHeader
        eyebrow="Cross-stack view"
        title="Compare implementations"
        description="This space will compare the same pattern across languages and platform boundaries so the design intent stays visible even when the syntax changes."
      />

      <div className="page-actions">
        <ButtonLink href="/patterns" variant="secondary">
          Browse patterns
        </ButtonLink>
      </div>

      <div className="grid card-grid">
        {comparisonLanes.map((lane) => (
          <SectionCard key={lane.title} title={lane.title}>
            <p>{lane.description}</p>
          </SectionCard>
        ))}
      </div>
    </section>
  );
}

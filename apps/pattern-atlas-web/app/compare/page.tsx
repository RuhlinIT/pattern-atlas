import type { Metadata } from "next";

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
      <div className="page-header">
        <p className="eyebrow">Cross-stack view</p>
        <h1>Compare implementations</h1>
        <p className="lead">
          This space will compare the same pattern across languages and platform
          boundaries so the design intent stays visible even when the syntax
          changes.
        </p>
      </div>

      <div className="grid card-grid">
        {comparisonLanes.map((lane) => (
          <article key={lane.title} className="panel">
            <h2>{lane.title}</h2>
            <p>{lane.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
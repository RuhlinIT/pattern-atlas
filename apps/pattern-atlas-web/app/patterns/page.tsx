import type { Metadata } from "next";
import { patterns } from "../../../../packages/content/src/patterns";

export const metadata: Metadata = {
  title: "Patterns",
};

export default function PatternsPage() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">Library</p>
        <h1>Patterns</h1>
        <p className="lead">
          A growing set of design patterns with implementation notes, tradeoffs,
          and cross-stack integration guidance.
        </p>
      </div>

      <div className="grid card-grid">
        {patterns.map((pattern) => (
          <article key={pattern.slug} className="panel">
            <div className="panel-meta">
              <span className="tag">{pattern.category}</span>
            </div>

            <h2>{pattern.name}</h2>
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
          </article>
        ))}
      </div>
    </section>
  );
}
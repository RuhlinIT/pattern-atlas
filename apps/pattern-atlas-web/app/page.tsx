import Link from "next/link";
import { SectionCard } from "@atlas-patterns/ui";

const focusAreas = [
  "Pattern comparison across languages",
  "Integration notes between codebases",
  "Starter implementations for common patterns",
];

const starterPatterns = [
  "Strategy",
  "Adapter",
  "Observer",
  "Factory Method",
  "Facade",
];

export default function HomePage() {
  return (
    <section className="page">
      <div className="hero">
        <p className="eyebrow">Software Design Patterns</p>
        <h1>Build the same solution across any stack.</h1>
        <p className="lead">
          Pattern Atlas is the working surface for exploring how software design
          patterns translate across languages, frameworks, and platforms without
          losing their architectural intent.
        </p>

        <div className="hero-actions">
          <Link href="/patterns" className="button button-primary">
            Browse patterns
          </Link>
          <Link href="/compare" className="button button-secondary">
            Start comparing
          </Link>
        </div>
      </div>

      <div className="grid two-up">
        <SectionCard title="Current focus">
          <ul className="list">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="First pattern set">
          <ul className="list">
            {starterPatterns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </section>
  );
}
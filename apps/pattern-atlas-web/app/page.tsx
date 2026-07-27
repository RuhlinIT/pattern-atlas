import Link from "next/link";

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
        <section className="panel">
          <h2>Current focus</h2>
          <ul className="list">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h2>First pattern set</h2>
          <ul className="list">
            {starterPatterns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
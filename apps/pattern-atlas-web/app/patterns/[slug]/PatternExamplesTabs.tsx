"use client";

import { useId, useMemo, useState, type KeyboardEvent } from "react";
import type { PatternExample } from "@atlas-patterns/schemas";
import { CodeBlock, Tag } from "@atlas-patterns/ui";

type PatternExamplesTabsProps = {
  examples: PatternExample[];
};

export function PatternExamplesTabs({ examples }: PatternExamplesTabsProps) {
  const baseId = useId();

  const sortedExamples = useMemo(() => examples, [examples]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (sortedExamples.length === 0) {
    return <p>No examples yet.</p>;
  }

  const activeExample = sortedExamples[activeIndex];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (sortedExamples.length <= 1) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % sortedExamples.length);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex((current) =>
        current === 0 ? sortedExamples.length - 1 : current - 1,
      );
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(sortedExamples.length - 1);
    }
  }

  return (
    <div className="examples-tabs">
      <div
        className="tab-list"
        role="tablist"
        aria-label="Pattern examples by language"
        onKeyDown={onKeyDown}
      >
        {sortedExamples.map((example, index) => {
          const tabId = `${baseId}-tab-${example.language}`;
          const panelId = `${baseId}-panel-${example.language}`;
          const isActive = index === activeIndex;

          return (
            <button
              key={example.language}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={`tab-button${isActive ? " active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {example.language}
            </button>
          );
        })}
      </div>

      <section
        id={`${baseId}-panel-${activeExample.language}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${activeExample.language}`}
        tabIndex={0}
        className="example-card"
      >
        <div className="panel-meta">
          <Tag>{activeExample.language}</Tag>
        </div>

        <h3>{activeExample.title}</h3>
        <p>{activeExample.summary}</p>

        <CodeBlock
          code={activeExample.code}
          language={activeExample.language}
        />

        <p>{activeExample.explanation}</p>
      </section>
    </div>
  );
}

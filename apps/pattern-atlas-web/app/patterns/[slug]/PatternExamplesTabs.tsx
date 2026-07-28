"use client";

import { useId, useMemo, useState, type KeyboardEvent } from "react";
import type {
  PatternLanguageExample,
  PatternScenario,
} from "@atlas-patterns/schemas";
import { CodeBlock, Tag } from "@atlas-patterns/ui";

type PatternExamplesTabsProps = {
  scenarios: PatternScenario[];
};

function getNextIndex(current: number, total: number) {
  return (current + 1) % total;
}

function getPreviousIndex(current: number, total: number) {
  return current === 0 ? total - 1 : current - 1;
}

export function PatternExamplesTabs({ scenarios }: PatternExamplesTabsProps) {
  const baseId = useId();
  const orderedScenarios = useMemo(() => scenarios, [scenarios]);

  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [activeLanguageIndex, setActiveLanguageIndex] = useState(0);

  if (orderedScenarios.length === 0) {
    return <p>No scenarios yet.</p>;
  }

  const activeScenario = orderedScenarios[activeScenarioIndex];

  if (!activeScenario) {
    return <p>No scenarios yet.</p>;
  }

  const languageExamples = activeScenario.languageExamples;
  const activeLanguageExample: PatternLanguageExample | undefined =
    languageExamples[activeLanguageIndex] ?? languageExamples[0];

  if (!activeLanguageExample) {
    return (
      <div className="examples-tabs">
        <div className="stack-sm">
          <div className="panel-meta">
            <Tag>{activeScenario.title}</Tag>
          </div>
          <p>{activeScenario.summary}</p>
        </div>
        <p>No language examples yet.</p>
      </div>
    );
  }

  function handleScenarioSelect(index: number) {
    setActiveScenarioIndex(index);
    setActiveLanguageIndex(0);
  }

  function handleScenarioKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (orderedScenarios.length <= 1) return;

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        setActiveScenarioIndex((current) =>
          getNextIndex(current, orderedScenarios.length),
        );
        setActiveLanguageIndex(0);
        break;
      case "ArrowLeft":
        event.preventDefault();
        setActiveScenarioIndex((current) =>
          getPreviousIndex(current, orderedScenarios.length),
        );
        setActiveLanguageIndex(0);
        break;
      case "Home":
        event.preventDefault();
        setActiveScenarioIndex(0);
        setActiveLanguageIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveScenarioIndex(orderedScenarios.length - 1);
        setActiveLanguageIndex(0);
        break;
      default:
        break;
    }
  }

  function handleLanguageKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (languageExamples.length <= 1) return;

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        setActiveLanguageIndex((current) =>
          getNextIndex(current, languageExamples.length),
        );
        break;
      case "ArrowLeft":
        event.preventDefault();
        setActiveLanguageIndex((current) =>
          getPreviousIndex(current, languageExamples.length),
        );
        break;
      case "Home":
        event.preventDefault();
        setActiveLanguageIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveLanguageIndex(languageExamples.length - 1);
        break;
      default:
        break;
    }
  }

  const scenarioTabPanelId = `${baseId}-scenario-panel-${activeScenario.slug}`;
  const scenarioTabId = `${baseId}-scenario-tab-${activeScenario.slug}`;

  const languageTabPanelId = `${baseId}-language-panel-${activeScenario.slug}-${activeLanguageExample.language}`;
  const languageTabId = `${baseId}-language-tab-${activeScenario.slug}-${activeLanguageExample.language}`;

  return (
    <div className="examples-tabs">
      <div className="stack-sm">
        <p className="results-meta">Scenarios</p>

        <div className="tabs-shell">
          <div
            className="tab-list"
            role="tablist"
            aria-label={`${activeScenario.title} scenarios`}
            onKeyDown={handleScenarioKeyDown}
          >
            {orderedScenarios.map((scenario, index) => {
              const isActive = index === activeScenarioIndex;
              const tabId = `${baseId}-scenario-tab-${scenario.slug}`;
              const panelId = `${baseId}-scenario-panel-${scenario.slug}`;

              return (
                <button
                  key={scenario.slug}
                  id={tabId}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  className={`tab-button${isActive ? " active" : ""}`}
                  onClick={() => handleScenarioSelect(index)}
                >
                  {scenario.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section
        id={scenarioTabPanelId}
        role="tabpanel"
        aria-labelledby={scenarioTabId}
        tabIndex={0}
        className="example-card"
      >
        <div className="stack-sm">
          <div className="panel-meta">
            <Tag>{activeScenario.title}</Tag>
          </div>
          <p>{activeScenario.summary}</p>
        </div>

        <div className="stack-sm">
          <p className="results-meta">Languages</p>
          <div className="tabs-shell">
            <div
              className="tab-list"
              role="tablist"
              aria-label={`${activeScenario.title} languages`}
              onKeyDown={handleLanguageKeyDown}
            >
              {languageExamples.map((example, index) => {
                const isActive = index === activeLanguageIndex;
                const tabId = `${baseId}-language-tab-${activeScenario.slug}-${example.language}`;
                const panelId = `${baseId}-language-panel-${activeScenario.slug}-${example.language}`;

                return (
                  <button
                    key={`${activeScenario.slug}-${example.language}`}
                    id={tabId}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={panelId}
                    tabIndex={isActive ? 0 : -1}
                    className={`tab-button${isActive ? " active" : ""}`}
                    onClick={() => setActiveLanguageIndex(index)}
                  >
                    {example.language}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <section
          id={languageTabPanelId}
          role="tabpanel"
          aria-labelledby={languageTabId}
          tabIndex={0}
          className="stack-sm"
        >
          <CodeBlock
            code={activeLanguageExample.code}
            language={activeLanguageExample.language}
          />
          <p>{activeLanguageExample.explanation}</p>
        </section>
      </section>
    </div>
  );
}

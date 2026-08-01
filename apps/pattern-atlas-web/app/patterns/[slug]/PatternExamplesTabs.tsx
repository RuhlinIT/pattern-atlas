"use client";

import { useMemo, useState } from "react";
import type {
  PatternLanguageExample,
  PatternRecord,
  PatternScenario,
  PatternScenarioExamples,
} from "@atlas-patterns/schemas";
import { CodeBlock, SectionCard, Tag } from "@atlas-patterns/ui";

type ScenarioRuntimeFilter = "all" | "frontend" | "backend";

type PatternExamplesTabsProps = {
  scenarios: PatternRecord["scenarios"];
  scenarioExamples?: PatternScenarioExamples;
};

function getScenarioExampleLanguages(
  scenarioSlug: string,
  scenarioExamples?: PatternScenarioExamples,
): PatternLanguageExample[] {
  const exampleMap = scenarioExamples?.[scenarioSlug];
  if (!exampleMap) {
    return [];
  }

  return Object.values(exampleMap);
}

function ExampleCodeBlock({ example }: { example: PatternLanguageExample }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Tag>{example.language}</Tag>
        {example.title ? <Tag>{example.title}</Tag> : null}
      </div>

      {example.explanation ? <p>{example.explanation}</p> : null}

      <CodeBlock code={example.code} language={example.language} />
    </div>
  );
}

export function PatternExamplesTabs({
  scenarios,
  scenarioExamples,
}: PatternExamplesTabsProps) {
  const scenarioList = useMemo(
    () => scenarios as PatternScenario[],
    [scenarios],
  );
  const [runtimeFilter, setRuntimeFilter] =
    useState<ScenarioRuntimeFilter>("all");
  const [activeScenarioSlug, setActiveScenarioSlug] = useState(
    scenarioList[0]?.slug ?? "",
  );
  const [activeLanguage, setActiveLanguage] = useState("");

  const filteredScenarios = useMemo(() => {
    if (runtimeFilter === "all") {
      return scenarioList;
    }

    return scenarioList.filter(
      (scenario) => scenario.runtime === runtimeFilter,
    );
  }, [scenarioList, runtimeFilter]);

  const activeScenario =
    filteredScenarios.find(
      (scenario) => scenario.slug === activeScenarioSlug,
    ) ?? filteredScenarios[0];

  const activeExamples = activeScenario
    ? getScenarioExampleLanguages(activeScenario.slug, scenarioExamples)
    : [];

  const activeExample =
    activeExamples.find((example) => example.language === activeLanguage) ??
    activeExamples[0];

  function handleRuntimeFilterChange(nextFilter: ScenarioRuntimeFilter) {
    setRuntimeFilter(nextFilter);

    const nextFilteredScenarios =
      nextFilter === "all"
        ? scenarioList
        : scenarioList.filter((scenario) => scenario.runtime === nextFilter);

    const nextScenario = nextFilteredScenarios[0];
    setActiveScenarioSlug(nextScenario?.slug ?? "");

    const nextExamples = nextScenario
      ? getScenarioExampleLanguages(nextScenario.slug, scenarioExamples)
      : [];

    setActiveLanguage(nextExamples[0]?.language ?? "");
  }

  function handleScenarioChange(nextScenarioSlug: string) {
    setActiveScenarioSlug(nextScenarioSlug);

    const nextExamples = getScenarioExampleLanguages(
      nextScenarioSlug,
      scenarioExamples,
    );

    setActiveLanguage(nextExamples[0]?.language ?? "");
  }

  if (scenarioList.length === 0) {
    return <p>No scenarios yet.</p>;
  }

  return (
    <div className="space-y-6">
      <div
        role="tablist"
        aria-label="Scenario runtime filter"
        className="flex flex-wrap gap-2 border-b border-slate-700"
      >
        {(["all", "frontend", "backend"] as const).map((filter) => {
          const isActive = runtimeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleRuntimeFilterChange(filter)}
              className={[
                "relative -mb-px rounded-t-lg border px-4 py-3 text-sm transition-all",
                isActive
                  ? "border-sky-400 border-b-slate-950 bg-slate-950 text-sky-400 shadow-sm"
                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
              ].join(" ")}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        {filteredScenarios.map((scenario) => {
          const isActive = scenario.slug === activeScenario?.slug;

          return (
            <button
              key={scenario.slug}
              type="button"
              onClick={() => handleScenarioChange(scenario.slug)}
              className={[
                "rounded-lg border px-4 py-3 text-sm transition-all",
                isActive
                  ? "border-sky-400 bg-slate-950 text-sky-400 shadow-sm translate-y-[-1px]"
                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
              ].join(" ")}
            >
              {scenario.title}
            </button>
          );
        })}
      </div>

      {activeScenario ? (
        <div className="space-y-4">
          <SectionCard title={activeScenario.title}>
            <div className="space-y-3">
              <p>{activeScenario.summary}</p>

              {activeScenario.context ? (
                <p>
                  <strong>Context:</strong> {activeScenario.context}
                </p>
              ) : null}

              {activeScenario.problem ? (
                <p>
                  <strong>Problem:</strong> {activeScenario.problem}
                </p>
              ) : null}

              {activeScenario.solution ? (
                <p>
                  <strong>Solution:</strong> {activeScenario.solution}
                </p>
              ) : null}

              {activeScenario.runtime ? (
                <Tag>{activeScenario.runtime}</Tag>
              ) : null}
            </div>
          </SectionCard>

          <SectionCard title="Language examples">
            {activeExamples.length === 0 ? (
              <p>No examples yet.</p>
            ) : (
              <div className="space-y-0">
                <div
                  role="tablist"
                  aria-label="Language examples"
                  className="flex flex-wrap gap-2 border-b border-slate-700"
                >
                  {activeExamples.map((example) => {
                    const isActive = example.language === activeLanguage;

                    return (
                      <button
                        key={example.language}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`language-panel-${example.language}`}
                        id={`language-tab-${example.language}`}
                        onClick={() => setActiveLanguage(example.language)}
                        className={[
                          "relative -mb-px rounded-t-lg border px-4 py-3 text-sm transition-all",
                          isActive
                            ? "border-sky-400 border-b-slate-950 bg-slate-950 text-sky-400 shadow-sm"
                            : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
                        ].join(" ")}
                      >
                        {example.language}
                      </button>
                    );
                  })}
                </div>

                {activeExample ? (
                  <div
                    role="tabpanel"
                    id={`language-panel-${activeExample.language}`}
                    aria-labelledby={`language-tab-${activeExample.language}`}
                    className="rounded-b-lg border border-t-0 border-slate-700 bg-slate-950 p-4"
                  >
                    <ExampleCodeBlock example={activeExample} />
                  </div>
                ) : null}
              </div>
            )}
          </SectionCard>
        </div>
      ) : (
        <p>No scenarios match this filter.</p>
      )}
    </div>
  );
}
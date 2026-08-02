"use client";

import { useMemo, useState } from "react";
import type {
  PatternLanguageExample,
  PatternRecord,
  PatternScenario,
  PatternScenarioExamples,
  PatternStackArea,
} from "@atlas-patterns/schemas";
import { CodeBlock, SectionCard, Tag } from "@atlas-patterns/ui";

type StackAreaFilter = "all" | PatternStackArea;

const STACK_AREA_ORDER: readonly PatternStackArea[] = [
  "frontend",
  "backend",
  "integration",
  "devops",
  "cloud",
  "fullstack",
];

function getScenarioExampleLanguages(
  scenarioSlug: string,
  scenarioExamples?: PatternScenarioExamples,
): PatternLanguageExample[] {
  const exampleMap = scenarioExamples?.[scenarioSlug];
  if (!exampleMap) return [];
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
}: {
  scenarios: PatternRecord["scenarios"];
  scenarioExamples?: PatternScenarioExamples;
}) {
  const scenarioList = useMemo(() => scenarios as PatternScenario[], [scenarios]);

  const groupedScenarios = useMemo(
    () => ({
      frontend: scenarioList.filter((scenario) => scenario.stackArea === "frontend"),
      backend: scenarioList.filter((scenario) => scenario.stackArea === "backend"),
      integration: scenarioList.filter((scenario) => scenario.stackArea === "integration"),
      devops: scenarioList.filter((scenario) => scenario.stackArea === "devops"),
      cloud: scenarioList.filter((scenario) => scenario.stackArea === "cloud"),
      fullstack: scenarioList.filter((scenario) => scenario.stackArea === "fullstack"),
    }),
    [scenarioList],
  );

  const initialStackArea = useMemo<StackAreaFilter>(() => {
    return STACK_AREA_ORDER.find((area) => groupedScenarios[area].length > 0) ?? "all";
  }, [groupedScenarios]);

  const [stackAreaFilter, setStackAreaFilter] = useState<StackAreaFilter>(initialStackArea);
  const [activeScenarioSlug, setActiveScenarioSlug] = useState(() => {
    const seedList = initialStackArea === "all" ? scenarioList : groupedScenarios[initialStackArea];
    return seedList[0]?.slug ?? "";
  });
  const [activeLanguage, setActiveLanguage] = useState(() => {
    const seedList = initialStackArea === "all" ? scenarioList : groupedScenarios[initialStackArea];
    const seedScenario = seedList[0];
    return seedScenario ? getScenarioExampleLanguages(seedScenario.slug, scenarioExamples)[0]?.language ?? "" : "";
  });

  const visibleScenarios = useMemo(() => {
    if (stackAreaFilter === "all") return scenarioList;
    return groupedScenarios[stackAreaFilter];
  }, [stackAreaFilter, groupedScenarios, scenarioList]);

  const activeScenario =
    visibleScenarios.find((scenario) => scenario.slug === activeScenarioSlug) ??
    visibleScenarios[0] ??
    null;

  const activeExamples = activeScenario
    ? getScenarioExampleLanguages(activeScenario.slug, scenarioExamples)
    : [];

  const activeExample =
    activeExamples.find((example) => example.language === activeLanguage) ??
    activeExamples[0] ??
    null;

  function handleStackAreaChange(nextArea: StackAreaFilter) {
    setStackAreaFilter(nextArea);
    const nextScenarios = nextArea === "all" ? scenarioList : groupedScenarios[nextArea];
    const nextScenario = nextScenarios[0];
    setActiveScenarioSlug(nextScenario?.slug ?? "");
    const nextExamples = nextScenario ? getScenarioExampleLanguages(nextScenario.slug, scenarioExamples) : [];
    setActiveLanguage(nextExamples[0]?.language ?? "");
  }

  function handleScenarioChange(nextScenarioSlug: string) {
    setActiveScenarioSlug(nextScenarioSlug);
    const nextExamples = getScenarioExampleLanguages(nextScenarioSlug, scenarioExamples);
    setActiveLanguage(nextExamples[0]?.language ?? "");
  }

  if (!scenarioList.length) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div
        role="tablist"
        aria-label="Scenario stack area filter"
        className="flex flex-wrap gap-2 border-b border-slate-700"
      >
        {STACK_AREA_ORDER.map((filter) => {
          const isActive = stackAreaFilter === filter;
          const count = groupedScenarios[filter].length;

          if (count === 0) return null;

          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleStackAreaChange(filter)}
              className={[
                "relative -mb-px rounded-t-lg border px-4 py-3 text-sm transition-all",
                isActive
                  ? "border-sky-400 border-b-slate-950 bg-slate-950 text-sky-400 shadow-sm"
                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
              ].join(" ")}
            >
              {filter} ({count})
            </button>
          );
        })}

        <button
          type="button"
          role="tab"
          aria-selected={stackAreaFilter === "all"}
          onClick={() => handleStackAreaChange("all")}
          className={[
            "relative -mb-px rounded-t-lg border px-4 py-3 text-sm transition-all",
            stackAreaFilter === "all"
              ? "border-sky-400 border-b-slate-950 bg-slate-950 text-sky-400 shadow-sm"
              : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
          ].join(" ")}
        >
          all ({scenarioList.length})
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {visibleScenarios.map((scenario) => {
          const isActive = scenario.slug === activeScenario?.slug;
          const exampleCount = getScenarioExampleLanguages(scenario.slug, scenarioExamples).length;

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
              {scenario.title} ({exampleCount})
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
              {activeScenario.stackArea ? <Tag>{activeScenario.stackArea}</Tag> : null}
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
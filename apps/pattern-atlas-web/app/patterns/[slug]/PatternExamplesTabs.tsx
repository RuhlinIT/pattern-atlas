"use client";

import { useMemo, useState } from "react";
import type {
  NormalizedExample,
  PatternRecord,
  PatternScenario,
  PatternScenarioExamples,
} from "@atlas-patterns/schemas";
import {
  CodeBlock,
  SectionCard,
  Tag,
  coreLanguageLabels,
  getCoreLanguage,
  type CoreLanguage,
} from "@atlas-patterns/ui";

type StackAreaFilter = "all" | NonNullable<PatternScenario["stackArea"]>;

type CoreLanguageFilter = "all" | CoreLanguage;

const STACK_AREA_ORDER = [
  "frontend",
  "backend",
  "integration",
  "devops",
  "cloud",
  "fullstack",
] as const;

function getScenarioExamples(
  scenarioSlug: string,
  scenarioExamples?: PatternScenarioExamples,
): NormalizedExample[] {
  const exampleMap = scenarioExamples?.[scenarioSlug];

  if (!exampleMap) {
    return [];
  }

  return Object.values(exampleMap);
}

function getTabId(prefix: string, value: string): string {
  const safeValue = value.replace(/[^a-zA-Z0-9_-]/g, "-").replace(/-+/g, "-");

  return `${prefix}-${safeValue}`;
}

function ExampleCodeBlock({ example }: { example: NormalizedExample }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Tag>{example.label}</Tag>
        <Tag>{example.language}</Tag>
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
  const scenarioList = useMemo(
    () => scenarios as PatternScenario[],
    [scenarios],
  );

  const groupedScenarios = useMemo(
    () => ({
      frontend: scenarioList.filter(
        (scenario) => scenario.stackArea === "frontend",
      ),
      backend: scenarioList.filter(
        (scenario) => scenario.stackArea === "backend",
      ),
      integration: scenarioList.filter(
        (scenario) => scenario.stackArea === "integration",
      ),
      devops: scenarioList.filter(
        (scenario) => scenario.stackArea === "devops",
      ),
      cloud: scenarioList.filter((scenario) => scenario.stackArea === "cloud"),
      fullstack: scenarioList.filter(
        (scenario) => scenario.stackArea === "fullstack",
      ),
    }),
    [scenarioList],
  );

  const initialStackArea = useMemo<StackAreaFilter>(() => {
    return (
      STACK_AREA_ORDER.find((area) => groupedScenarios[area].length > 0) ??
      "all"
    );
  }, [groupedScenarios]);

  const initialScenarioList =
    initialStackArea === "all"
      ? scenarioList
      : groupedScenarios[initialStackArea];

  const initialScenario = initialScenarioList[0];

  const initialExamples = initialScenario
    ? getScenarioExamples(initialScenario.slug, scenarioExamples)
    : [];

  const [stackAreaFilter, setStackAreaFilter] =
    useState<StackAreaFilter>(initialStackArea);

  const [activeScenarioSlug, setActiveScenarioSlug] = useState(
    initialScenario?.slug ?? "",
  );

  const [coreLanguageFilter, setCoreLanguageFilter] =
    useState<CoreLanguageFilter>("all");

  const [activeExampleId, setActiveExampleId] = useState(
    initialExamples[0]?.id ?? "",
  );

  const visibleScenarios = useMemo(() => {
    if (stackAreaFilter === "all") {
      return scenarioList;
    }

    return groupedScenarios[stackAreaFilter];
  }, [groupedScenarios, scenarioList, stackAreaFilter]);

  const activeScenario =
    visibleScenarios.find((scenario) => scenario.slug === activeScenarioSlug) ??
    visibleScenarios[0] ??
    null;

  const activeExamples = useMemo(
    () =>
      activeScenario
        ? getScenarioExamples(activeScenario.slug, scenarioExamples)
        : [],
    [activeScenario, scenarioExamples],
  );

  const availableCoreLanguages = useMemo(() => {
    const languages = activeExamples.map((example) =>
      getCoreLanguage(example.language),
    );

    return Array.from(new Set(languages));
  }, [activeExamples]);

  const filteredExamples = useMemo(() => {
    if (coreLanguageFilter === "all") {
      return activeExamples;
    }

    return activeExamples.filter(
      (example) => getCoreLanguage(example.language) === coreLanguageFilter,
    );
  }, [activeExamples, coreLanguageFilter]);

  const activeExample =
    filteredExamples.find((example) => example.id === activeExampleId) ??
    filteredExamples[0] ??
    null;

  function selectCoreLanguage(nextFilter: CoreLanguageFilter) {
    setCoreLanguageFilter(nextFilter);

    const nextExamples =
      nextFilter === "all"
        ? activeExamples
        : activeExamples.filter(
            (example) => getCoreLanguage(example.language) === nextFilter,
          );

    setActiveExampleId(nextExamples[0]?.id ?? "");
  }

  function handleStackAreaChange(nextArea: StackAreaFilter) {
    setStackAreaFilter(nextArea);
    setCoreLanguageFilter("all");

    const nextScenarios =
      nextArea === "all" ? scenarioList : groupedScenarios[nextArea];

    const nextScenario = nextScenarios[0];

    setActiveScenarioSlug(nextScenario?.slug ?? "");

    const nextExamples = nextScenario
      ? getScenarioExamples(nextScenario.slug, scenarioExamples)
      : [];

    setActiveExampleId(nextExamples[0]?.id ?? "");
  }

  function handleScenarioChange(nextScenarioSlug: string) {
    setActiveScenarioSlug(nextScenarioSlug);
    setCoreLanguageFilter("all");

    const nextExamples = getScenarioExamples(
      nextScenarioSlug,
      scenarioExamples,
    );

    setActiveExampleId(nextExamples[0]?.id ?? "");
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

          if (count === 0) {
            return null;
          }

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

          const exampleCount = getScenarioExamples(
            scenario.slug,
            scenarioExamples,
          ).length;

          return (
            <button
              key={scenario.slug}
              type="button"
              onClick={() => handleScenarioChange(scenario.slug)}
              className={[
                "rounded-lg border px-4 py-3 text-sm transition-all",
                isActive
                  ? "translate-y-[-1px] border-sky-400 bg-slate-950 text-sky-400 shadow-sm"
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

              {activeScenario.stackArea ? (
                <Tag>{activeScenario.stackArea}</Tag>
              ) : null}
            </div>
          </SectionCard>

          <SectionCard title="Language examples">
            {activeExamples.length === 0 ? (
              <p>No examples yet.</p>
            ) : (
              <div className="space-y-6">
                <section
                  aria-labelledby="core-languages-heading"
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <h3
                      id="core-languages-heading"
                      className="text-sm font-semibold uppercase tracking-wide text-slate-200"
                    >
                      Core languages
                    </h3>

                    <div
                      aria-hidden="true"
                      className="h-px flex-1 bg-slate-700"
                    />
                  </div>

                  <div
                    role="group"
                    aria-label="Filter examples by core language"
                    className="flex flex-wrap gap-2"
                  >
                    <button
                      type="button"
                      aria-pressed={coreLanguageFilter === "all"}
                      onClick={() => selectCoreLanguage("all")}
                      className={[
                        "rounded-lg border px-3 py-2 text-sm transition-all",
                        coreLanguageFilter === "all"
                          ? "border-sky-400 bg-slate-950 text-sky-400"
                          : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500",
                      ].join(" ")}
                    >
                      All ({activeExamples.length})
                    </button>

                    {availableCoreLanguages.map((coreLanguage) => {
                      const count = activeExamples.filter(
                        (example) =>
                          getCoreLanguage(example.language) === coreLanguage,
                      ).length;

                      const isActive = coreLanguageFilter === coreLanguage;

                      return (
                        <button
                          key={coreLanguage}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => selectCoreLanguage(coreLanguage)}
                          className={[
                            "rounded-lg border px-3 py-2 text-sm transition-all",
                            isActive
                              ? "border-sky-400 bg-slate-950 text-sky-400"
                              : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500",
                          ].join(" ")}
                        >
                          {coreLanguageLabels[coreLanguage]} ({count})
                        </button>
                      );
                    })}
                  </div>
                </section>

                <section
                  aria-labelledby="framework-examples-heading"
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <h3
                      id="framework-examples-heading"
                      className="text-sm font-semibold uppercase tracking-wide text-slate-200"
                    >
                      Frameworks and libraries
                    </h3>

                    <div
                      aria-hidden="true"
                      className="h-px flex-1 bg-slate-700"
                    />
                  </div>

                  {filteredExamples.length === 0 ? (
                    <p>No examples for this core language.</p>
                  ) : (
                    <div className="space-y-0">
                      <div
                        role="tablist"
                        aria-label="Framework and library examples"
                        className="flex flex-wrap gap-2 border-b border-slate-700"
                      >
                        {filteredExamples.map((example) => {
                          const isActive = example.id === activeExampleId;

                          const tabId = getTabId("language-tab", example.id);

                          const panelId = getTabId(
                            "language-panel",
                            example.id,
                          );

                          return (
                            <button
                              key={example.id}
                              type="button"
                              role="tab"
                              aria-selected={isActive}
                              aria-controls={panelId}
                              id={tabId}
                              onClick={() => setActiveExampleId(example.id)}
                              className={[
                                "relative -mb-px rounded-t-lg border px-4 py-3 text-sm transition-all",
                                isActive
                                  ? "border-sky-400 border-b-slate-950 bg-slate-950 text-sky-400 shadow-sm"
                                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
                              ].join(" ")}
                            >
                              {example.label}
                            </button>
                          );
                        })}
                      </div>

                      {activeExample ? (
                        <div
                          role="tabpanel"
                          id={getTabId("language-panel", activeExample.id)}
                          aria-labelledby={getTabId(
                            "language-tab",
                            activeExample.id,
                          )}
                          className="rounded-b-lg border border-t-0 border-slate-700 bg-slate-950 p-4"
                        >
                          <ExampleCodeBlock example={activeExample} />
                        </div>
                      ) : null}
                    </div>
                  )}
                </section>
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

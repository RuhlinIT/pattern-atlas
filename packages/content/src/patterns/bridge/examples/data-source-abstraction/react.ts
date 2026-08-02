import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "React data source bridge",
  code: `type DataSource = { fetch(query: string): Promise<unknown[]> };

function createReportingService(source: DataSource) {
  return {
    runReport: (query: string) => source.fetch(query),
  };
}`,
  explanation:
    "React apps can keep reporting logic separate from the implementation of data access.",
};
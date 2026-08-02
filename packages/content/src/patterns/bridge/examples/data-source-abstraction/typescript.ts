import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Data source bridge",
  code: `type Source = "sql" | "api" | "file";

interface DataSource {
  fetch(query: string): Promise<unknown[]>;
}

class ReportingService {
  constructor(private source: DataSource) {}

  async runReport(query: string) {
    return this.source.fetch(query);
  }
}`,
  explanation:
    "The reporting abstraction stays stable while the underlying data-source implementation can change.",
};
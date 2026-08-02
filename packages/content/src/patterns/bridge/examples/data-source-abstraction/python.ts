import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Python data source bridge",
  code: `class DataSource:
    def fetch(self, query):
        raise NotImplementedError()

class ReportingService:
    def __init__(self, source):
        self.source = source

    def run_report(self, query):
        return self.source.fetch(query)`,
  explanation:
    "Python keeps reporting behavior independent of the source implementation.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Java data source bridge",
  code: `interface DataSource {
    List<Object> fetch(String query);
}

class ReportingService {
    private final DataSource source;

    ReportingService(DataSource source) {
        this.source = source;
    }
}`,
  explanation:
    "Java can separate the reporting abstraction from the concrete source implementation.",
};
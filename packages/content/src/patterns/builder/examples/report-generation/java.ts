import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Report generation",
  code: `class Report {
    String title;
    java.util.List<String> sections = new java.util.ArrayList<>();
    java.util.List<String> charts = new java.util.ArrayList<>();
    String footer;
}

class ReportBuilder {
    private final Report report = new Report();

    ReportBuilder title(String title) {
        report.title = title;
        return this;
    }

    ReportBuilder addSection(String section) {
        report.sections.add(section);
        return this;
    }

    ReportBuilder addChart(String chart) {
        report.charts.add(chart);
        return this;
    }

    ReportBuilder footer(String footer) {
        report.footer = footer;
        return this;
    }

    Report build() {
        return report;
    }
}

Report report = new ReportBuilder()
    .title("Quarterly Revenue")
    .addSection("Summary")
    .addChart("Revenue by Region")
    .footer("Confidential")
    .build();`,
  explanation:
    "A builder is useful when reports are assembled in stages and not every section is always required.",
};
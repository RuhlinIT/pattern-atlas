import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Report generation",
  code: `type Report = {
  title: string;
  sections: string[];
  charts: string[];
  footer?: string;
};

class ReportBuilder {
  private report: Report = {
    title: "",
    sections: [],
    charts: [],
  };

  title(title: string) {
    this.report.title = title;
    return this;
  }

  addSection(section: string) {
    this.report.sections.push(section);
    return this;
  }

  addChart(chart: string) {
    this.report.charts.push(chart);
    return this;
  }

  footer(footer: string) {
    this.report.footer = footer;
    return this;
  }

  build() {
    return this.report;
  }
}

const report = new ReportBuilder()
  .title("Quarterly Revenue")
  .addSection("Summary")
  .addChart("Revenue by Region")
  .footer("Confidential")
  .build();`,
  explanation:
    "A builder helps when a report is assembled from optional sections and formatting choices.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Report generation",
  code: "class Report {\n  constructor(\n    public title: string,\n    public summary: string,\n    public sections: string[],\n    public includeCharts: boolean,\n  ) {}\n}\n\nclass ReportBuilder {\n  private title = \"Untitled Report\";\n  private summary = \"\";\n  private sections: string[] = [];\n  private includeCharts = false;\n\n  withTitle(title: string): this {\n    this.title = title;\n    return this;\n  }\n\n  withSummary(summary: string): this {\n    this.summary = summary;\n    return this;\n  }\n\n  addSection(section: string): this {\n    this.sections.push(section);\n    return this;\n  }\n\n  withCharts(includeCharts: boolean): this {\n    this.includeCharts = includeCharts;\n    return this;\n  }\n\n  build(): Report {\n    return new Report(this.title, this.summary, [...this.sections], this.includeCharts);\n  }\n}\n\nconst report = new ReportBuilder()\n  .withTitle(\"Quarterly Review\")\n  .withSummary(\"Q1 performance overview\")\n  .addSection(\"Revenue\")\n  .addSection(\"Growth\")\n  .withCharts(true)\n  .build();\n\nconsole.log(report);",
  explanation: "The builder assembles a report piece by piece, which is ideal when different report types need different optional sections and settings.",
};

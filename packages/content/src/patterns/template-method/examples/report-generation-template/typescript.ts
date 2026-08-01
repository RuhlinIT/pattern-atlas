import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Report generation template",
  code: "abstract class ReportGenerator {\n  generate(): void {\n    this.collectData();\n    this.formatHeader();\n    this.renderBody();\n    this.formatFooter();\n  }\n\n\n  protected collectData(): void {\n    console.log(\"Collecting data\");\n  }\n\n\n  protected formatHeader(): void {\n    console.log(\"Formatting header\");\n  }\n\n\n  protected abstract renderBody(): void;\n\n\n  protected formatFooter(): void {\n    console.log(\"Formatting footer\");\n  }\n}\n\n\nclass SalesReportGenerator extends ReportGenerator {\n  protected renderBody(): void {\n    console.log(\"Rendering sales report body\");\n  }\n}\n\n\nclass InventoryReportGenerator extends ReportGenerator {\n  protected renderBody(): void {\n    console.log(\"Rendering inventory report body\");\n  }\n}\n\n\nconst sales = new SalesReportGenerator();\nsales.generate();\n\n\nconst inventory = new InventoryReportGenerator();\ninventory.generate();",
  explanation: "The report generator keeps the report workflow fixed while subclasses customize the body rendering step.",
};

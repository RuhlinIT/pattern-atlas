import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Report generation template",
  code: "abstract class ReportGenerator {\n    public final void generate() {\n        collectData();\n        formatHeader();\n        renderBody();\n        formatFooter();\n    }\n\n\n    protected void collectData() {\n        System.out.println(\"Collecting data\");\n    }\n\n\n    protected void formatHeader() {\n        System.out.println(\"Formatting header\");\n    }\n\n\n    protected abstract void renderBody();\n\n\n    protected void formatFooter() {\n        System.out.println(\"Formatting footer\");\n    }\n}\n\n\nclass SalesReportGenerator extends ReportGenerator {\n    protected void renderBody() {\n        System.out.println(\"Rendering sales report body\");\n    }\n}\n\n\nclass InventoryReportGenerator extends ReportGenerator {\n    protected void renderBody() {\n        System.out.println(\"Rendering inventory report body\");\n    }\n}\n\n\nReportGenerator sales = new SalesReportGenerator();\nsales.generate();\n\n\nReportGenerator inventory = new InventoryReportGenerator();\ninventory.generate();",
  explanation: "The Java report generator shares the same generation flow while each report type defines its own body content.",
};

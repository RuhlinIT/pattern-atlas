import type { PatternRecord } from "@atlas-patterns/schemas";
import { orderProcessingTemplateExamples } from "./template-method/orderProcessingTemplateExamples";
import { reportGenerationTemplateExamples } from "./template-method/reportGenerationTemplateExamples";
import { dataImportTemplateExamples } from "./template-method/dataImportTemplateExamples";

export const TemplateMethodPattern: PatternRecord = {
  slug: "template-method",
  name: "Template Method",
  category: "Behavioral",
  problem:
    "Several classes share the same algorithm structure, but some steps need to vary between implementations.",
  intent:
    "Define the skeleton of an algorithm in a base class and let subclasses override selected steps without changing the overall structure.",
  tradeoffs: [
    "Relies on inheritance, which can be less flexible than composition in some designs",
    "May create a deep class hierarchy if many variations are needed",
  ],
  languages: [
    "TypeScript",
    "Java",
    "Python",
    "Angular",
    "React",
    "React_Native",
    "C#",
    ".NET",
  ],
  platforms: ["Web", "Backend", "Mobile", "UI kits", "Cross-platform systems"],
  integrationNotes:
    "Template Method is useful when you have repeated workflows with a common sequence of steps, such as processing orders, generating reports, and importing data.",
  scenarios: [
    {
      slug: "order-processing-template",
      title: "Order processing template",
      summary:
        "Order processing follows the same high-level steps, but some validation and fulfillment details vary by order type.",
      languageExamples: orderProcessingTemplateExamples,
    },
    {
      slug: "report-generation-template",
      title: "Report generation template",
      summary:
        "Report generation uses the same flow, while each report type customizes data collection and formatting.",
      languageExamples: reportGenerationTemplateExamples,
    },
    {
      slug: "data-import-template",
      title: "Data import template",
      summary:
        "Data import follows a standard pipeline while different file formats customize parsing and validation.",
      languageExamples: dataImportTemplateExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Order workflows",
      description:
        "E-commerce systems often follow the same order processing steps with variation in payment or shipping handling.",
    },
    {
      title: "Report pipelines",
      description:
        "Reporting tools typically collect, format, and export data in a fixed sequence with type-specific customizations.",
    },
    {
      title: "Import jobs",
      description:
        "CSV, JSON, and XML imports often share a pipeline but differ in parsing rules and validation logic.",
    },
  ],
};

import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { orderProcessingTemplateExamples } from "./examples/order-processing-template";
import { reportGenerationTemplateExamples } from "./examples/report-generation-template";
import { dataImportTemplateExamples } from "./examples/data-import-template";

export const templateMethodPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "order-processing-template": orderProcessingTemplateExamples,
    "report-generation-template": reportGenerationTemplateExamples,
    "data-import-template": dataImportTemplateExamples,
  },
  realWorldExamples: [
  {
    "title": "Order workflows",
    "description": "E-commerce systems often follow the same order processing steps with variation in payment or shipping handling."
  },
  {
    "title": "Report pipelines",
    "description": "Reporting tools typically collect, format, and export data in a fixed sequence with type-specific customizations."
  },
  {
    "title": "Import jobs",
    "description": "CSV, JSON, and XML imports often share a pipeline but differ in parsing rules and validation logic."
  }
],
  tradeoffs: [
  "Relies on inheritance, which can be less flexible than composition in some designs",
  "May create a deep class hierarchy if many variations are needed"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Template Method is useful when you have repeated workflows with a common sequence of steps, such as processing orders, generating reports, and importing data.",
  problem: "Several classes share the same algorithm structure, but some steps need to vary between implementations.",
};

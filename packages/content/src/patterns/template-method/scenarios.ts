import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "order-processing-template",
    "title": "Order processing template",
    "summary": "Order processing follows the same high-level steps, but some validation and fulfillment details vary by order type."
  },
  {
    "slug": "report-generation-template",
    "title": "Report generation template",
    "summary": "Report generation uses the same flow, while each report type customizes data collection and formatting."
  },
  {
    "slug": "data-import-template",
    "title": "Data import template",
    "summary": "Data import follows a standard pipeline while different file formats customize parsing and validation."
  }
];

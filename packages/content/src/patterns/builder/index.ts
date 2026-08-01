import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { pizzaOrderConstructionExamples } from "./examples/pizza-order-construction";
import { characterCreationExamples } from "./examples/character-creation";
import { reportGenerationExamples } from "./examples/report-generation";

export const builderPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "pizza-order-construction": pizzaOrderConstructionExamples,
    "character-creation": characterCreationExamples,
    "report-generation": reportGenerationExamples,
  },
  realWorldExamples: [
  {
    "title": "Form wizards",
    "description": "Multi-step forms often gather data progressively before creating the final domain object or submission payload."
  },
  {
    "title": "Document composition",
    "description": "Reports, invoices, and export files can be assembled from optional sections and formatting settings."
  },
  {
    "title": "Game and avatar setup",
    "description": "Games often build characters or loadouts through a sequence of configurable choices before play begins."
  }
],
  tradeoffs: [
  "Adds more classes and code than constructing an object directly",
  "Can be overkill for simple objects with only a few required fields"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "Content generation"
],
  integrationNotes: "Builders are useful when a product can be assembled in steps, especially for forms, documents, configuration-heavy models, and fluent APIs.",
  problem: "Some objects need many optional settings or a multi-step setup process, and large constructors become hard to read and maintain.",
};

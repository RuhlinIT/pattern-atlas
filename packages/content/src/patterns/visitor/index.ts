import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { shapeVisitorExamples } from "./examples/shape-visitor";
import { cartVisitorExamples } from "./examples/cart-visitor";
import { documentVisitorExamples } from "./examples/document-visitor";

export const visitorPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "shape-visitor": shapeVisitorExamples,
    "cart-visitor": cartVisitorExamples,
    "document-visitor": documentVisitorExamples,
  },
  realWorldExamples: [
  {
    "title": "AST traversal",
    "description": "Compilers and linters often traverse syntax trees with visitors to gather information or transform nodes."
  },
  {
    "title": "Cart calculations",
    "description": "Shopping systems may compute totals, taxes, and promotions across mixed item types."
  },
  {
    "title": "Export formats",
    "description": "Documents and diagrams can be exported to multiple formats without changing the element classes."
  }
],
  tradeoffs: [
  "Requires updating the visitor interface when new element types are added",
  "Can be awkward if the object structure changes often"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Visitor is useful for AST processing, reporting, cart calculations, and exporting object structures to alternate formats.",
  problem: "You need to perform operations across a set of different object types without stuffing all the logic into the objects themselves.",
};

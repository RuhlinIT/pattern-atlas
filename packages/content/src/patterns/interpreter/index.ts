import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { expressionInterpreterExamples } from "./examples/expression-interpreter";
import { booleanRuleInterpreterExamples } from "./examples/boolean-rule-interpreter";
import { commandInterpreterExamples } from "./examples/command-interpreter";

export const interpreterPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "expression-interpreter": expressionInterpreterExamples,
    "boolean-rule-interpreter": booleanRuleInterpreterExamples,
    "command-interpreter": commandInterpreterExamples,
  },
  realWorldExamples: [
  {
    "title": "Calculator apps",
    "description": "Simple calculators interpret expressions like addition, subtraction, and grouping."
  },
  {
    "title": "Rule engines",
    "description": "Applications often evaluate rule expressions such as access conditions or eligibility checks."
  },
  {
    "title": "Command parsing",
    "description": "CLI tools and DSLs interpret user commands into executable actions."
  }
],
  tradeoffs: [
  "Can become complex if the grammar grows too large.",
  "Best suited to small, well-defined languages or expression sets."
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Interpreter is useful for calculators, rule engines, simple DSLs, and command parsing systems where a structured grammar must be evaluated.",
  problem: "You need to define a small language or expression grammar and evaluate it consistently across the application.",
};

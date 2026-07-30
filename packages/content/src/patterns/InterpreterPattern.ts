import type { PatternRecord } from "@atlas-patterns/schemas";
import { expressionInterpreterExamples } from "./interpreter/expressionInterpreterExamples";
import { booleanRuleInterpreterExamples } from "./interpreter/booleanRuleInterpreterExamples";
import { commandInterpreterExamples } from "./interpreter/commandInterpreterExamples";

export const InterpreterPattern: PatternRecord = {
  slug: "interpreter",
  name: "Interpreter",
  category: "Behavioral",
  problem:
    "You need to define a small language or expression grammar and evaluate it consistently across the application.",
  intent:
    "Represent grammar rules as objects and interpret sentences by evaluating an abstract syntax tree or expression chain.",
  tradeoffs: [
    "Can become complex if the grammar grows too large.",
    "Best suited to small, well-defined languages or expression sets.",
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
    "Interpreter is useful for calculators, rule engines, simple DSLs, and command parsing systems where a structured grammar must be evaluated.",
  scenarios: [
    {
      slug: "expression-interpreter",
      title: "Expression interpreter",
      summary:
        "An arithmetic expression is represented as a tree of terminal and non-terminal expressions and then evaluated.",
      languageExamples: expressionInterpreterExamples,
    },
    {
      slug: "boolean-rule-interpreter",
      title: "Boolean rule interpreter",
      summary:
        "A simple rules engine interprets boolean conditions against a context object.",
      languageExamples: booleanRuleInterpreterExamples,
    },
    {
      slug: "command-interpreter",
      title: "Command interpreter",
      summary:
        "A command string is parsed into operations that the interpreter can execute in order.",
      languageExamples: commandInterpreterExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Calculator apps",
      description:
        "Simple calculators interpret expressions like addition, subtraction, and grouping.",
    },
    {
      title: "Rule engines",
      description:
        "Applications often evaluate rule expressions such as access conditions or eligibility checks.",
    },
    {
      title: "Command parsing",
      description:
        "CLI tools and DSLs interpret user commands into executable actions.",
    },
  ],
};

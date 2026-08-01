import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "expression-interpreter",
    "title": "Expression interpreter",
    "summary": "An arithmetic expression is represented as a tree of terminal and non-terminal expressions and then evaluated."
  },
  {
    "slug": "boolean-rule-interpreter",
    "title": "Boolean rule interpreter",
    "summary": "A simple rules engine interprets boolean conditions against a context object."
  },
  {
    "slug": "command-interpreter",
    "title": "Command interpreter",
    "summary": "A command string is parsed into operations that the interpreter can execute in order."
  }
];

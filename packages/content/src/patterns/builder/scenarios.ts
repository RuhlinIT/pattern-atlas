import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "api-request-construction",
    title: "API request construction",
    summary:
      "A client assembles a complex API request step by step before sending it.",
    context:
      "A system needs to set optional headers, query parameters, and payload fields based on user input.",
    problem:
      "Large request objects become hard to build safely when many fields are optional or conditional.",
    solution:
      "Use Builder to construct the request in controlled steps before execution.",
    stackArea: "integration",
  },
  {
    slug: "report-generation",
    title: "Report generation",
    summary:
      "A reporting tool assembles a report with headers, body sections, charts, and footers.",
    context:
      "Different report types need different combinations of sections without duplicating assembly logic.",
    problem:
      "Directly building the final report object makes conditional sections messy and repetitive.",
    solution:
      "Use Builder to assemble the report one section at a time.",
    stackArea: "backend",
  },
  {
    slug: "ui-form-assembly",
    title: "UI form assembly",
    summary:
      "A form workflow constructs a multi-step interface with fields, validation, and actions.",
    context:
      "An app needs to build forms dynamically based on user role, plan, or workflow state.",
    problem:
      "Inline form creation makes complex UI flows difficult to maintain and extend.",
    solution:
      "Use Builder to assemble the form in stages.",
    stackArea: "frontend",
  },
  {
    slug: "configuration-assembly",
    title: "Configuration assembly",
    summary:
      "An application builds a runtime configuration object from many optional settings.",
    context:
      "A service needs environment-specific values, feature flags, and overrides combined safely.",
    problem:
      "Manual configuration wiring can lead to invalid combinations or missing required values.",
    solution:
      "Use Builder to validate and assemble the configuration progressively.",
    stackArea: "backend",
  },
  {
    slug: "document-composition",
    title: "Document composition",
    summary:
      "A document pipeline assembles invoices, contracts, or letters from reusable sections.",
    context:
      "The final output depends on many optional clauses, templates, and formatting decisions.",
    problem:
      "Putting everything into one construction step makes document assembly inflexible.",
    solution:
      "Use Builder to compose the document section by section.",
    stackArea: "backend",
  },
  {
    slug: "character-creation",
    title: "Character creation",
    summary:
      "A game builds a character with name, class, and class-dependent stats step by step.",
    context:
      "A game or RPG needs to assemble a character profile based on player choices and class rules.",
    problem:
      "Character construction becomes messy when class, stats, and optional abilities are all set at once.",
    solution:
      "Use Builder to progressively assemble the character and enforce the right construction flow.",
    stackArea: "frontend",
  },
  {
    slug: "pizza-order-construction",
    title: "Pizza order construction",
    summary:
      "A food ordering flow assembles a pizza order with size, crust, toppings, and extras.",
    context:
      "A restaurant app needs to capture many optional choices without creating a confusing form or object shape.",
    problem:
      "Pizza orders become harder to validate and maintain when size, crust, toppings, and extras are mixed together.",
    solution:
      "Use Builder to collect the order details in a controlled sequence before checkout.",
    stackArea: "frontend",
  },
];
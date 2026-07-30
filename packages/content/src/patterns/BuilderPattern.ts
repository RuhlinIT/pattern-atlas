import type { PatternRecord } from "@atlas-patterns/schemas";
import { characterBuilderExamples } from "./builder/characterBuilderExamples";
import { pizzaBuilderExamples } from "./builder/pizzaBuilderExamples";
import { reportBuilderExamples } from "./builder/reportBuilderExamples";

export const BuilderPattern: PatternRecord = {
  slug: "builder",
  name: "Builder",
  category: "Creational",
  problem:
    "Some objects need many optional settings or a multi-step setup process, and large constructors become hard to read and maintain.",
  intent:
    "Separate the construction of a complex object from its representation so the same build process can create different configured results.",
  tradeoffs: [
    "Adds more classes and code than constructing an object directly",
    "Can be overkill for simple objects with only a few required fields",
  ],
  languages: ["TypeScript", "Java", "Python", "Angular", "React", "React_Native", "C#", ".NET"],
  platforms: ["Web", "Backend", "Mobile", "Content generation"],
  integrationNotes:
    "Builders are useful when a product can be assembled in steps, especially for forms, documents, configuration-heavy models, and fluent APIs.",
  scenarios: [
    {
      slug: "pizza-order-construction",
      title: "Pizza order construction",
      summary:
        "A pizza builder lets a customer choose size, crust, cheese, and toppings step by step before finalizing the order.",
      languageExamples: pizzaBuilderExamples,
    },
    {
      slug: "character-creation",
      title: "Character creation",
      summary:
        "A character builder assembles name, class, and stats in a readable sequence for games or profile setup.",
      languageExamples: characterBuilderExamples,
    },
    {
      slug: "report-generation",
      title: "Report generation",
      summary:
        "A report builder configures title, summary, sections, and chart options before producing the final document.",
      languageExamples: reportBuilderExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Form wizards",
      description:
        "Multi-step forms often gather data progressively before creating the final domain object or submission payload.",
    },
    {
      title: "Document composition",
      description:
        "Reports, invoices, and export files can be assembled from optional sections and formatting settings.",
    },
    {
      title: "Game and avatar setup",
      description:
        "Games often build characters or loadouts through a sequence of configurable choices before play begins.",
    },
  ],
};
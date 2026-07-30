import type { PatternRecord } from "@atlas-patterns/schemas";
import { shapeVisitorExamples } from "./visitor/shapeVisitorExamples";
import { cartVisitorExamples } from "./visitor/cartVisitorExamples";
import { documentVisitorExamples } from "./visitor/documentVisitorExamples";

export const VisitorPattern: PatternRecord = {
  slug: "visitor",
  name: "Visitor",
  category: "Behavioral",
  problem:
    "You need to perform operations across a set of different object types without stuffing all the logic into the objects themselves.",
  intent:
    "Separate an algorithm from the object structure it operates on by moving behavior into visitor objects.",
  tradeoffs: [
    "Requires updating the visitor interface when new element types are added",
    "Can be awkward if the object structure changes often",
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
    "Visitor is useful for AST processing, reporting, cart calculations, and exporting object structures to alternate formats.",
  scenarios: [
    {
      slug: "shape-visitor",
      title: "Shape visitor",
      summary:
        "Different shapes accept visitors that can render or measure them without changing the shape classes.",
      languageExamples: shapeVisitorExamples,
    },
    {
      slug: "cart-visitor",
      title: "Cart visitor",
      summary:
        "Shopping cart items accept visitors that calculate pricing and discounts across product types.",
      languageExamples: cartVisitorExamples,
    },
    {
      slug: "document-visitor",
      title: "Document visitor",
      summary:
        "Document nodes accept visitors that export or inspect them without coupling those behaviors to the nodes themselves.",
      languageExamples: documentVisitorExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "AST traversal",
      description:
        "Compilers and linters often traverse syntax trees with visitors to gather information or transform nodes.",
    },
    {
      title: "Cart calculations",
      description:
        "Shopping systems may compute totals, taxes, and promotions across mixed item types.",
    },
    {
      title: "Export formats",
      description:
        "Documents and diagrams can be exported to multiple formats without changing the element classes.",
    },
  ],
};

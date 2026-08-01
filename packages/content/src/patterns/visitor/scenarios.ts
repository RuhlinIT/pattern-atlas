import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "shape-visitor",
    "title": "Shape visitor",
    "summary": "Different shapes accept visitors that can render or measure them without changing the shape classes."
  },
  {
    "slug": "cart-visitor",
    "title": "Cart visitor",
    "summary": "Shopping cart items accept visitors that calculate pricing and discounts across product types."
  },
  {
    "slug": "document-visitor",
    "title": "Document visitor",
    "summary": "Document nodes accept visitors that export or inspect them without coupling those behaviors to the nodes themselves."
  }
];

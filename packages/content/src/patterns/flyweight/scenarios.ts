import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "tree-rendering-flyweight",
    "title": "Tree rendering flyweight",
    "summary": "A forest renderer shares tree type data across many individual tree instances to minimize memory usage."
  },
  {
    "slug": "text-formatting-flyweight",
    "title": "Text formatting flyweight",
    "summary": "A text editor reuses character style objects for many glyphs while storing only position and content-specific state separately."
  },
  {
    "slug": "game-tile-flyweight",
    "title": "Game tile flyweight",
    "summary": "A tile-based game reuses terrain definitions while each map tile stores only its coordinates and local effects."
  }
];

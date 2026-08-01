import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { treeRenderingFlyweightExamples } from "./examples/tree-rendering-flyweight";
import { textFormattingFlyweightExamples } from "./examples/text-formatting-flyweight";
import { gameTileFlyweightExamples } from "./examples/game-tile-flyweight";

export const flyweightPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "tree-rendering-flyweight": treeRenderingFlyweightExamples,
    "text-formatting-flyweight": textFormattingFlyweightExamples,
    "game-tile-flyweight": gameTileFlyweightExamples,
  },
  realWorldExamples: [
  {
    "title": "Forest rendering",
    "description": "Games and simulations often reuse one tree model or texture definition across thousands of placed trees."
  },
  {
    "title": "Text glyph caching",
    "description": "Text renderers commonly share glyph shapes or font data while each character instance stores only placement details."
  },
  {
    "title": "Tile maps",
    "description": "Strategy games and editors often reuse terrain definitions and store only tile position and runtime state per cell."
  }
],
  tradeoffs: [
  "Adds complexity because state must be split into shared and unshared parts",
  "Can be harder to understand when many objects depend on an external context"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Flyweight is useful when thousands or millions of similar objects need to be represented efficiently, such as trees, glyphs, tiles, or UI tokens.",
  problem: "A system creates a large number of similar objects, but storing all of their state separately uses too much memory.",
};

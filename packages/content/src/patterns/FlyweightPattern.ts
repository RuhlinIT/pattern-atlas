import type { PatternRecord } from "@atlas-patterns/schemas";
import { treeRenderingFlyweightExamples } from "./flyweight/treeRenderingFlyweightExamples";
import { textFormattingFlyweightExamples } from "./flyweight/textFormattingFlyweightExamples";
import { gameTileFlyweightExamples } from "./flyweight/gameTileFlyweightExamples";

export const FlyweightPattern: PatternRecord = {
  slug: "flyweight",
  name: "Flyweight",
  category: "Structural",
  problem:
    "A system creates a large number of similar objects, but storing all of their state separately uses too much memory.",
  intent:
    "Use sharing to support large numbers of fine-grained objects efficiently by separating shared intrinsic state from per-object extrinsic state.",
  tradeoffs: [
    "Adds complexity because state must be split into shared and unshared parts",
    "Can be harder to understand when many objects depend on an external context",
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
    "Flyweight is useful when thousands or millions of similar objects need to be represented efficiently, such as trees, glyphs, tiles, or UI tokens.",
  scenarios: [
    {
      slug: "tree-rendering-flyweight",
      title: "Tree rendering flyweight",
      summary:
        "A forest renderer shares tree type data across many individual tree instances to minimize memory usage.",
      languageExamples: treeRenderingFlyweightExamples,
    },
    {
      slug: "text-formatting-flyweight",
      title: "Text formatting flyweight",
      summary:
        "A text editor reuses character style objects for many glyphs while storing only position and content-specific state separately.",
      languageExamples: textFormattingFlyweightExamples,
    },
    {
      slug: "game-tile-flyweight",
      title: "Game tile flyweight",
      summary:
        "A tile-based game reuses terrain definitions while each map tile stores only its coordinates and local effects.",
      languageExamples: gameTileFlyweightExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Forest rendering",
      description:
        "Games and simulations often reuse one tree model or texture definition across thousands of placed trees.",
    },
    {
      title: "Text glyph caching",
      description:
        "Text renderers commonly share glyph shapes or font data while each character instance stores only placement details.",
    },
    {
      title: "Tile maps",
      description:
        "Strategy games and editors often reuse terrain definitions and store only tile position and runtime state per cell.",
    },
  ],
};

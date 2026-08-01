import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { documentTemplateCloneExamples } from "./examples/document-template-clone";
import { gameCharacterCloneExamples } from "./examples/game-character-clone";
import { productConfigCloneExamples } from "./examples/product-config-clone";

export const prototypePattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "document-template-clone": documentTemplateCloneExamples,
    "game-character-clone": gameCharacterCloneExamples,
    "product-config-clone": productConfigCloneExamples,
  },
  realWorldExamples: [
  {
    "title": "Template-based editors",
    "description": "Writing tools and content systems often duplicate document templates or slide layouts instead of recreating them from scratch."
  },
  {
    "title": "Game entity spawning",
    "description": "Games frequently clone enemies, NPCs, or loadout presets to quickly generate many similar entities."
  },
  {
    "title": "Configurable product variants",
    "description": "E-commerce systems often duplicate a base product configuration and then tweak colors, sizes, or pricing rules."
  }
],
  tradeoffs: [
  "Can be difficult if the object graph contains deep references that need custom clone behavior",
  "May require careful handling of mutable state to avoid shared-reference bugs"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Prototype is useful when object creation is expensive, when many near-identical objects are needed, or when cloning preconfigured templates is simpler than rebuilding them.",
  problem: "Creating new objects from scratch can be expensive or repetitive when the system needs many similar variants.",
};

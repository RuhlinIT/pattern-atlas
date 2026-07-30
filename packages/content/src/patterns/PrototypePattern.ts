import type { PatternRecord } from "@atlas-patterns/schemas";
import { documentTemplateCloneExamples } from "./prototype/documentTemplateCloneExamples";
import { gameCharacterCloneExamples } from "./prototype/gameCharacterCloneExamples";
import { productConfigCloneExamples } from "./prototype/productConfigCloneExamples";

export const PrototypePattern: PatternRecord = {
  slug: "prototype",
  name: "Prototype",
  category: "Creational",
  problem:
    "Creating new objects from scratch can be expensive or repetitive when the system needs many similar variants.",
  intent:
    "Specify the kinds of objects to create using a prototypical instance, and create new objects by cloning that prototype.",
  tradeoffs: [
    "Can be difficult if the object graph contains deep references that need custom clone behavior",
    "May require careful handling of mutable state to avoid shared-reference bugs",
  ],
  languages: ["TypeScript", "Java", "Python", "Angular", "React", "React_Native", "C#", ".NET"],
  platforms: ["Web", "Backend", "Mobile", "UI kits", "Cross-platform systems"],
  integrationNotes:
    "Prototype is useful when object creation is expensive, when many near-identical objects are needed, or when cloning preconfigured templates is simpler than rebuilding them.",
  scenarios: [
    {
      slug: "document-template-clone",
      title: "Document template clone",
      summary:
        "An editor clones a preconfigured document template to quickly create new reports with the same layout and styling.",
      languageExamples: documentTemplateCloneExamples,
    },
    {
      slug: "game-character-clone",
      title: "Game character clone",
      summary:
        "A game system clones a base character prototype to produce variant enemies or allies with shared stats and equipment.",
      languageExamples: gameCharacterCloneExamples,
    },
    {
      slug: "product-config-clone",
      title: "Product config clone",
      summary:
        "A commerce system clones a product configuration prototype to generate many similar catalog items with small differences.",
      languageExamples: productConfigCloneExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Template-based editors",
      description:
        "Writing tools and content systems often duplicate document templates or slide layouts instead of recreating them from scratch.",
    },
    {
      title: "Game entity spawning",
      description:
        "Games frequently clone enemies, NPCs, or loadout presets to quickly generate many similar entities.",
    },
    {
      title: "Configurable product variants",
      description:
        "E-commerce systems often duplicate a base product configuration and then tweak colors, sizes, or pricing rules.",
    },
  ],
};
import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { fileSystemCompositeExamples } from "./examples/file-system-composite";
import { menuCompositeExamples } from "./examples/menu-composite";
import { organizationChartCompositeExamples } from "./examples/organization-chart-composite";

export const compositePattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "file-system-composite": fileSystemCompositeExamples,
    "menu-composite": menuCompositeExamples,
    "organization-chart-composite": organizationChartCompositeExamples,
  },
  realWorldExamples: [
  {
    "title": "File browsers",
    "description": "File browsers often work with files and folders in the same tree structure, even though folders can contain more items."
  },
  {
    "title": "Menu systems",
    "description": "UI menus frequently use nested submenus that behave like a single menu item from the client’s perspective."
  },
  {
    "title": "Org charts",
    "description": "Organizations commonly model employees and managers in a hierarchy where managers contain subordinate nodes."
  }
],
  tradeoffs: [
  "Can make the design more abstract and harder to follow",
  "May require careful handling of operations that only apply to some nodes in the tree"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Composite is useful when a hierarchy of nested objects should expose a common interface, such as files and folders, menus and submenus, or org charts.",
  problem: "A system needs to treat individual objects and groups of objects uniformly, but the hierarchy becomes difficult to manage with separate code paths.",
};

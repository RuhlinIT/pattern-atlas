import type { PatternRecord } from "@atlas-patterns/schemas";
import { fileSystemCompositeExamples } from "./composite/fileSystemCompositeExamples";
import { menuCompositeExamples } from "./composite/menuCompositeExamples";
import { organizationChartCompositeExamples } from "./composite/organizationChartCompositeExamples";

export const CompositePattern: PatternRecord = {
  slug: "composite",
  name: "Composite",
  category: "Structural",
  problem:
    "A system needs to treat individual objects and groups of objects uniformly, but the hierarchy becomes difficult to manage with separate code paths.",
  intent:
    "Compose objects into tree structures to represent part-whole hierarchies and let clients work with individual and composite objects through the same interface.",
  tradeoffs: [
    "Can make the design more abstract and harder to follow",
    "May require careful handling of operations that only apply to some nodes in the tree",
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
    "Composite is useful when a hierarchy of nested objects should expose a common interface, such as files and folders, menus and submenus, or org charts.",
  scenarios: [
    {
      slug: "file-system-composite",
      title: "File system composite",
      summary:
        "A file system treats files and folders through the same interface, allowing nested structures to be processed uniformly.",
      languageExamples: fileSystemCompositeExamples,
    },
    {
      slug: "menu-composite",
      title: "Menu composite",
      summary:
        "A menu system represents menu items and submenus together so the UI can render or invoke them the same way.",
      languageExamples: menuCompositeExamples,
    },
    {
      slug: "organization-chart-composite",
      title: "Organization chart composite",
      summary:
        "An organization chart uses a common component interface for employees and managers, allowing recursive traversal of the hierarchy.",
      languageExamples: organizationChartCompositeExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "File browsers",
      description:
        "File browsers often work with files and folders in the same tree structure, even though folders can contain more items.",
    },
    {
      title: "Menu systems",
      description:
        "UI menus frequently use nested submenus that behave like a single menu item from the client’s perspective.",
    },
    {
      title: "Org charts",
      description:
        "Organizations commonly model employees and managers in a hierarchy where managers contain subordinate nodes.",
    },
  ],
};

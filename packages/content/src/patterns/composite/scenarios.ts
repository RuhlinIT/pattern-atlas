import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "file-system-composite",
    title: "File system composite",
    summary:
      "A file system treats files and folders through the same interface, allowing nested structures to be processed uniformly.",
    context:
      "A document browser needs to traverse items without caring whether each node is a file or a folder.",
    problem:
      "Separate code paths for files and folders make traversal and rendering inconsistent.",
    solution:
      "Use Composite so both files and folders expose the same operations.",
    stackArea: "backend",
  },
  {
    slug: "menu-composite",
    title: "Menu composite",
    summary:
      "A menu system represents menu items and submenus together so the UI can render or invoke them the same way.",
    context:
      "A navigation system needs one structure for clicks, grouping, and nested submenus.",
    problem:
      "Different handling for items and groups makes menu rendering harder to maintain.",
    solution:
      "Use Composite to treat menu items and submenu containers as one menu component.",
    stackArea: "frontend",
  },
  {
    slug: "organization-chart-composite",
    title: "Organization chart composite",
    summary:
      "An organization chart uses a common component interface for employees and managers, allowing recursive traversal of the hierarchy.",
    context:
      "A people directory or org chart needs to show nested reporting structures.",
    problem:
      "Directly special-casing managers and employees makes tree operations difficult.",
    solution:
      "Use Composite so every node in the hierarchy can be traversed through the same interface.",
    stackArea: "integration",
  },
  {
    slug: "dashboard-widget-tree",
    title: "Dashboard widget tree",
    summary:
      "A dashboard groups widgets and widget containers so layout and rendering can recurse through the same structure.",
    context:
      "A product dashboard needs to nest panels, groups, and leaf widgets.",
    problem:
      "Hard-coded widget handling makes nested layouts brittle.",
    solution:
      "Use Composite so simple widgets and widget groups share one component contract.",
    stackArea: "frontend",
  },
  {
    slug: "permission-group-hierarchy",
    title: "Permission group hierarchy",
    summary:
      "An access-control system nests roles and permission groups so aggregate permissions can be evaluated recursively.",
    context:
      "An authorization system needs to compute effective permissions across nested groups.",
    problem:
      "Flat permission checks do not scale when groups inherit from other groups.",
    solution:
      "Use Composite so permission groups and leaf permissions can be queried through the same interface.",
    stackArea: "backend",
  },
  {
    slug: "scene-graph-composite",
    title: "Scene graph composite",
    summary:
      "A graphics engine represents shapes and containers in a scene graph so rendering and transforms can recurse through the hierarchy.",
    context:
      "A drawing tool needs to apply transformations to nested graphical objects.",
    problem:
      "Manual traversal of nested objects makes rendering code repetitive.",
    solution:
      "Use Composite so individual shapes and grouped containers are rendered the same way.",
    stackArea: "frontend",
  },
];
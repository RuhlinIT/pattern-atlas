import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "file-system-composite",
    "title": "File system composite",
    "summary": "A file system treats files and folders through the same interface, allowing nested structures to be processed uniformly."
  },
  {
    "slug": "menu-composite",
    "title": "Menu composite",
    "summary": "A menu system represents menu items and submenus together so the UI can render or invoke them the same way."
  },
  {
    "slug": "organization-chart-composite",
    "title": "Organization chart composite",
    "summary": "An organization chart uses a common component interface for employees and managers, allowing recursive traversal of the hierarchy."
  }
];

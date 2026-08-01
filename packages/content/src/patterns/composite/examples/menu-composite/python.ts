import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Menu composite",
  code: "from abc import ABC, abstractmethod\n\n\nclass MenuItem(ABC):\n    @abstractmethod\n    def render(self) -> str:\n        pass\n\n\nclass LeafMenuItem(MenuItem):\n    def __init__(self, label: str) -> None:\n        self.label = label\n\n\n    def render(self) -> str:\n        return self.label\n\n\nclass MenuGroup(MenuItem):\n    def __init__(self, label: str) -> None:\n        self.label = label\n        self.children: list[MenuItem] = []\n\n\n    def add(self, item: MenuItem) -> None:\n        self.children.append(item)\n\n\n    def render(self) -> str:\n        return f\"{self.label}: [{', '.join(child.render() for child in self.children)}]\"\n\n\nfile_menu = MenuGroup(\"File\")\nfile_menu.add(LeafMenuItem(\"New\"))\nfile_menu.add(LeafMenuItem(\"Open\"))\n\n\nrecent_menu = MenuGroup(\"Recent\")\nrecent_menu.add(LeafMenuItem(\"Project A\"))\nrecent_menu.add(LeafMenuItem(\"Project B\"))\nfile_menu.add(recent_menu)\n\n\nprint(file_menu.render())",
  explanation: "The menu composite lets the app treat single items and grouped submenus the same way while still supporting nesting.",
};

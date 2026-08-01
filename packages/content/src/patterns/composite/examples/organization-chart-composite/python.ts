import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Organization chart composite",
  code: "from abc import ABC, abstractmethod\n\n\nclass OrgComponent(ABC):\n    @abstractmethod\n    def describe(self, indent: int = 0) -> str:\n        pass\n\n\nclass Employee(OrgComponent):\n    def __init__(self, name: str, role: str) -> None:\n        self.name = name\n        self.role = role\n\n\n    def describe(self, indent: int = 0) -> str:\n        return f\"{' ' * indent}{self.name} - {self.role}\"\n\n\nclass Manager(OrgComponent):\n    def __init__(self, name: str, role: str) -> None:\n        self.name = name\n        self.role = role\n        self.children: list[OrgComponent] = []\n\n\n    def add(self, component: OrgComponent) -> None:\n        self.children.append(component)\n\n\n    def describe(self, indent: int = 0) -> str:\n        lines = [f\"{' ' * indent}{self.name} - {self.role}\"]\n        for child in self.children:\n            lines.append(child.describe(indent + 2))\n        return \"\\n\".join(lines)\n\n\ndirector = Manager(\"Ava\", \"Director\")\ndirector.add(Employee(\"Ben\", \"Developer\"))\ndirector.add(Employee(\"Cara\", \"Designer\"))\n\n\nlead = Manager(\"Dana\", \"Team Lead\")\nlead.add(Employee(\"Eli\", \"QA Engineer\"))\ndirector.add(lead)\n\n\nprint(director.describe())",
  explanation: "The organization chart composite handles nested managers and employees with the same interface, which makes tree traversal natural.",
};

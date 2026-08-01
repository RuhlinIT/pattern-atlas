import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Document template clone",
  code: "from abc import ABC, abstractmethod\nfrom copy import deepcopy\n\n\nclass DocumentPrototype(ABC):\n    @abstractmethod\n    def clone(self):\n        pass\n\n\n    @abstractmethod\n    def render(self) -> str:\n        pass\n\n\nclass ReportDocument(DocumentPrototype):\n    def __init__(self, title: str, author: str, sections: list[str]) -> None:\n        self.title = title\n        self.author = author\n        self.sections = sections\n\n\n    def clone(self):\n        return deepcopy(self)\n\n\n    def render(self) -> str:\n        return f\"{self.title} by {self.author}: {', '.join(self.sections)}\"\n\n\ntemplate = ReportDocument(\"Quarterly Report\", \"Atlas Team\", [\"Summary\", \"Metrics\", \"Conclusion\"])\ncopy = template.clone()\ncopy.title = \"Quarterly Report Copy\"\ncopy.sections.append(\"Appendix\")\n\n\nprint(template.render())\nprint(copy.render())",
  explanation: "The document prototype uses cloning to duplicate a ready-made report layout, which makes it easy to create new documents with the same base structure.",
};

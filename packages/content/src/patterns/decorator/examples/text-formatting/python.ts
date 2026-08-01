import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Text formatting",
  code: "from abc import ABC, abstractmethod\n\nclass Text(ABC):\n    @abstractmethod\n    def render(self) -> str:\n        pass\n\nclass PlainText(Text):\n    def __init__(self, value: str) -> None:\n        self.value = value\n\n    def render(self) -> str:\n        return self.value\n\nclass TextDecorator(Text):\n    def __init__(self, text: Text) -> None:\n        self.text = text\n\n    def render(self) -> str:\n        return self.text.render()\n\nclass BoldDecorator(TextDecorator):\n    def render(self) -> str:\n        return f\"<b>{super().render()}</b>\"\n\nclass ItalicDecorator(TextDecorator):\n    def render(self) -> str:\n        return f\"<i>{super().render()}</i>\"\n\nclass UnderlineDecorator(TextDecorator):\n    def render(self) -> str:\n        return f\"<u>{super().render()}</u>\"\n\nformatted = UnderlineDecorator(\n    ItalicDecorator(\n        BoldDecorator(PlainText(\"Pattern Atlas\"))\n    )\n)\n\nprint(formatted.render())",
  explanation: "The formatter chain adds output behavior in layers, which makes combinations flexible without changing the plain text class.",
};

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Text editor memento",
  code: "class TextEditorMemento:\n    def __init__(self, content: str) -> None:\n        self.content = content\n\n\nclass TextEditor:\n    def __init__(self) -> None:\n        self.content = \"\"\n\n\n    def type(self, text: str) -> None:\n        self.content += text\n\n\n    def save(self) -> TextEditorMemento:\n        return TextEditorMemento(self.content)\n\n\n    def restore(self, memento: TextEditorMemento) -> None:\n        self.content = memento.content\n\n\n    def get_content(self) -> str:\n        return self.content\n\n\nclass History:\n    def __init__(self) -> None:\n        self.snapshots: list[TextEditorMemento] = []\n\n\n    def save(self, memento: TextEditorMemento) -> None:\n        self.snapshots.append(memento)\n\n\n    def undo(self) -> TextEditorMemento | None:\n        return self.snapshots.pop() if self.snapshots else None\n\n\neditor = TextEditor()\nhistory = History()\n\n\neditor.type(\"Hello\")\nhistory.save(editor.save())\n\n\neditor.type(\" World\")\nhistory.save(editor.save())\n\n\neditor.type(\"!\")\nprint(editor.get_content())\n\n\nprevious = history.undo()\nif previous:\n    editor.restore(previous)\n\n\nprint(editor.get_content())",
  explanation: "The Python text editor captures content snapshots with a memento and restores the editor from saved history.",
};

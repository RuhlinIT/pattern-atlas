import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Text editor memento",
  code: "class TextEditorMemento {\n  constructor(public readonly content: string) {}\n}\n\n\nclass TextEditor {\n  private content = \"\";\n\n\n  type(text: string): void {\n    this.content += text;\n  }\n\n\n  save(): TextEditorMemento {\n    return new TextEditorMemento(this.content);\n  }\n\n\n  restore(memento: TextEditorMemento): void {\n    this.content = memento.content;\n  }\n\n\n  getContent(): string {\n    return this.content;\n  }\n}\n\n\nclass History {\n  private snapshots: TextEditorMemento[] = [];\n\n\n  save(memento: TextEditorMemento): void {\n    this.snapshots.push(memento);\n  }\n\n\n  undo(): TextEditorMemento | null {\n    return this.snapshots.pop() ?? null;\n  }\n}\n\n\nconst editor = new TextEditor();\nconst history = new History();\n\n\neditor.type(\"Hello\");\nhistory.save(editor.save());\n\n\neditor.type(\" World\");\nhistory.save(editor.save());\n\n\neditor.type(\"!\");\nconsole.log(editor.getContent());\n\n\nconst previous = history.undo();\nif (previous) {\n  editor.restore(previous);\n}\n\n\nconsole.log(editor.getContent());",
  explanation: "The text editor memento stores snapshots of content so the editor can restore earlier versions without exposing its internal state.",
};

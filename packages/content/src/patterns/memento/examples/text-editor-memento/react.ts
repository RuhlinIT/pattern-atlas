import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Text editor memento",
  code: "import React, { useMemo } from \"react\";\n\n\nclass TextEditorMemento {\n  constructor(public readonly content: string) {}\n}\n\n\nclass TextEditor {\n  private content = \"\";\n\n\n  type(text: string): void {\n    this.content += text;\n  }\n\n\n  save(): TextEditorMemento {\n    return new TextEditorMemento(this.content);\n  }\n\n\n  restore(memento: TextEditorMemento): void {\n    this.content = memento.content;\n  }\n\n\n  getContent(): string {\n    return this.content;\n  }\n}\n\n\nclass History {\n  private snapshots: TextEditorMemento[] = [];\n\n\n  save(memento: TextEditorMemento): void {\n    this.snapshots.push(memento);\n  }\n\n\n  undo(): TextEditorMemento | null {\n    return this.snapshots.pop() ?? null;\n  }\n}\n\n\nfunction EditorPreview({ editor }: { editor: TextEditor }) {\n  return <p>{editor.getContent()}</p>;\n}\n\n\nexport function App() {\n  const editor = useMemo(() => new TextEditor(), []);\n\n\n  useMemo(() => {\n    editor.type(\"Hello\");\n    editor.type(\" World\");\n  }, [editor]);\n\n\n  return (\n    <main>\n      <h1>Text Editor Memento</h1>\n      <EditorPreview editor={editor} />\n    </main>\n  );\n}",
  explanation: "The React example treats the editor as the originator and uses mementos to preserve content history for undo support.",
};

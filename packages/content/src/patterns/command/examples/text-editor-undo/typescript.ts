import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Text editor undo",
  code: "interface Command {\n  execute(): void;\n  undo(): void;\n}\n\nclass DocumentEditor {\n  private content = \"\";\n\n  insert(text: string): void {\n    this.content += text;\n  }\n\n  removeLast(length: number): void {\n    this.content = this.content.slice(0, -length);\n  }\n\n  getContent(): string {\n    return this.content;\n  }\n}\n\nclass InsertTextCommand implements Command {\n  constructor(\n    private editor: DocumentEditor,\n    private text: string,\n  ) {}\n\n  execute(): void {\n    this.editor.insert(this.text);\n  }\n\n  undo(): void {\n    this.editor.removeLast(this.text.length);\n  }\n}\n\nclass CommandHistory {\n  private history: Command[] = [];\n\n  executeCommand(command: Command): void {\n    command.execute();\n    this.history.push(command);\n  }\n\n  undoLast(): void {\n    const command = this.history.pop();\n    command?.undo();\n  }\n}\n\nconst editor = new DocumentEditor();\nconst history = new CommandHistory();\n\nhistory.executeCommand(new InsertTextCommand(editor, \"Hello \"));\nhistory.executeCommand(new InsertTextCommand(editor, \"World\"));\n\nconsole.log(editor.getContent());\n\nhistory.undoLast();\nconsole.log(editor.getContent());",
  explanation: "The editor is the receiver, the insert action is wrapped as a command, and the history invoker can replay or undo commands without knowing document details.",
};

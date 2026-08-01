import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Text editor undo",
  code: "import { Injectable } from '@angular/core';\n\n\n  abstract class Command {\n    abstract execute(): void;\n    abstract undo(): void;\n  }\n\n\n  @Injectable({ providedIn: 'root' })\n  class DocumentEditor {\n    private content = '';\n\n\n    insert(text: string): void {\n      this.content += text;\n    }\n\n\n    removeLast(length: number): void {\n      this.content = this.content.slice(0, -length);\n    }\n\n\n    getContent(): string {\n      return this.content;\n    }\n  }\n\n\n  class InsertTextCommand extends Command {\n    constructor(\n      private editor: DocumentEditor,\n      private text: string,\n    ) {\n      super();\n    }\n\n\n    execute(): void {\n      this.editor.insert(this.text);\n    }\n\n\n    undo(): void {\n      this.editor.removeLast(this.text.length);\n    }\n  }\n\n\n  @Injectable({ providedIn: 'root' })\n  class CommandHistory {\n    private history: Command[] = [];\n\n\n    executeCommand(command: Command): void {\n      command.execute();\n      this.history.push(command);\n    }\n\n\n    undoLast(): void {\n      const command = this.history.pop();\n      command?.undo();\n    }\n  }",
  explanation: "The Angular history service can execute and undo command objects, while the editor service stays focused on document state changes.",
};

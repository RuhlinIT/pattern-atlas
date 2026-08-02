import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Text editor undo",
  code: `interface Command {
  execute(): void;
  undo(): void;
}

class InsertTextCommand implements Command {
  constructor(
    private editor: Editor,
    private text: string,
  ) {}

  execute() {
    this.editor.insert(this.text);
  }

  undo() {
    this.editor.delete(this.text.length);
  }
}

class Editor {
  private content = "";

  insert(text: string) {
    this.content += text;
  }

  delete(length: number) {
    this.content = this.content.slice(0, -length);
  }

  getText() {
    return this.content;
  }
}

class CommandHistory {
  private commands: Command[] = [];

  execute(command: Command) {
    command.execute();
    this.commands.push(command);
  }

  undoLast() {
    const command = this.commands.pop();
    if (command) command.undo();
  }
}

const editor = new Editor();
const history = new CommandHistory();

history.execute(new InsertTextCommand(editor, "Hello "));
history.execute(new InsertTextCommand(editor, "world"));
history.undoLast();`,
  explanation:
    "Wrap edits as commands so the editor can execute them and later undo the most recent action.",
};
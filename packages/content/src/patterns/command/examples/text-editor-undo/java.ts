import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Text editor undo",
  code: `import java.util.ArrayDeque;
import java.util.Deque;

interface Command {
    void execute();
    void undo();
}

class Editor {
    private StringBuilder content = new StringBuilder();

    void insert(String text) {
        content.append(text);
    }

    void delete(int length) {
        content.delete(content.length() - length, content.length());
    }

    String getText() {
        return content.toString();
    }
}

class InsertTextCommand implements Command {
    private final Editor editor;
    private final String text;

    InsertTextCommand(Editor editor, String text) {
        this.editor = editor;
        this.text = text;
    }

    public void execute() {
        editor.insert(text);
    }

    public void undo() {
        editor.delete(text.length());
    }
}

class CommandHistory {
    private final Deque<Command> commands = new ArrayDeque<>();

    void execute(Command command) {
        command.execute();
        commands.push(command);
    }

    void undoLast() {
        if (!commands.isEmpty()) {
            commands.pop().undo();
        }
    }
}
`,
  explanation:
    "Wrap edits as commands so the editor can execute them and later undo the most recent action.",
};
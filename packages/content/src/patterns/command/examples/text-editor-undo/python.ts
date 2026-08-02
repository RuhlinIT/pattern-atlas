import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Text editor undo",
  code: `class Editor:
    def __init__(self):
        self.content = ""

    def insert(self, text):
        self.content += text

    def delete(self, length):
        self.content = self.content[:-length]

class InsertTextCommand:
    def __init__(self, editor, text):
        self.editor = editor
        self.text = text

    def execute(self):
        self.editor.insert(self.text)

    def undo(self):
        self.editor.delete(len(self.text))

class CommandHistory:
    def __init__(self):
        self.commands = []

    def execute(self, command):
        command.execute()
        self.commands.append(command)

    def undo_last(self):
        if self.commands:
            self.commands.pop().undo()

editor = Editor()
history = CommandHistory()
history.execute(InsertTextCommand(editor, "Hello "))
history.execute(InsertTextCommand(editor, "world"))
history.undo_last()`,
  explanation:
    "Wrap edits as commands so the editor can execute them and later undo the most recent action.",
};

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const textEditorUndoExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Command {
  execute(): void;
  undo(): void;
}

class DocumentEditor {
  private content = "";

  insert(text: string): void {
    this.content += text;
  }

  removeLast(length: number): void {
    this.content = this.content.slice(0, -length);
  }

  getContent(): string {
    return this.content;
  }
}

class InsertTextCommand implements Command {
  constructor(
    private editor: DocumentEditor,
    private text: string,
  ) {}

  execute(): void {
    this.editor.insert(this.text);
  }

  undo(): void {
    this.editor.removeLast(this.text.length);
  }
}

class CommandHistory {
  private history: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undoLast(): void {
    const command = this.history.pop();
    command?.undo();
  }
}

const editor = new DocumentEditor();
const history = new CommandHistory();

history.executeCommand(new InsertTextCommand(editor, "Hello "));
history.executeCommand(new InsertTextCommand(editor, "World"));

console.log(editor.getContent());

history.undoLast();
console.log(editor.getContent());`,
    explanation:
      "The editor is the receiver, the insert action is wrapped as a command, and the history invoker can replay or undo commands without knowing document details.",
  },
  {
    language: "Java",
    code: `import java.util.ArrayList;
import java.util.List;

interface Command {
    void execute();
    void undo();
}

class DocumentEditor {
    private String content = "";

    public void insert(String text) {
        content += text;
    }

    public void removeLast(int length) {
        content = content.substring(0, content.length() - length);
    }

    public String getContent() {
        return content;
    }
}

class InsertTextCommand implements Command {
    private final DocumentEditor editor;
    private final String text;

    public InsertTextCommand(DocumentEditor editor, String text) {
        this.editor = editor;
        this.text = text;
    }

    public void execute() {
        editor.insert(text);
    }

    public void undo() {
        editor.removeLast(text.length());
    }
}

class CommandHistory {
    private final List<Command> history = new ArrayList<>();

    public void executeCommand(Command command) {
        command.execute();
        history.add(command);
    }

    public void undoLast() {
        if (!history.isEmpty()) {
            Command command = history.remove(history.size() - 1);
            command.undo();
        }
    }
}

DocumentEditor editor = new DocumentEditor();
CommandHistory history = new CommandHistory();

history.executeCommand(new InsertTextCommand(editor, "Hello "));
history.executeCommand(new InsertTextCommand(editor, "World"));

System.out.println(editor.getContent());

history.undoLast();
System.out.println(editor.getContent());`,
    explanation:
      "The command object stores what action to run and how to reverse it, which makes undo support straightforward.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class Command(ABC):
    @abstractmethod
    def execute(self) -> None:
        pass

    @abstractmethod
    def undo(self) -> None:
        pass

class DocumentEditor:
    def __init__(self) -> None:
        self.content = ""

    def insert(self, text: str) -> None:
        self.content += text

    def remove_last(self, length: int) -> None:
        self.content = self.content[:-length]

    def get_content(self) -> str:
        return self.content

class InsertTextCommand(Command):
    def __init__(self, editor: DocumentEditor, text: str) -> None:
        self.editor = editor
        self.text = text

    def execute(self) -> None:
        self.editor.insert(self.text)

    def undo(self) -> None:
        self.editor.remove_last(len(self.text))

class CommandHistory:
    def __init__(self) -> None:
        self.history: list[Command] = []

    def execute_command(self, command: Command) -> None:
        command.execute()
        self.history.append(command)

    def undo_last(self) -> None:
        if self.history:
            command = self.history.pop()
            command.undo()

editor = DocumentEditor()
history = CommandHistory()

history.execute_command(InsertTextCommand(editor, "Hello "))
history.execute_command(InsertTextCommand(editor, "World"))

print(editor.get_content())

history.undo_last()
print(editor.get_content())`,
    explanation:
      "The history object can execute and undo commands because each command carries the information needed to perform and reverse the operation.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


  abstract class Command {
    abstract execute(): void;
    abstract undo(): void;
  }


  @Injectable({ providedIn: 'root' })
  class DocumentEditor {
    private content = '';


    insert(text: string): void {
      this.content += text;
    }


    removeLast(length: number): void {
      this.content = this.content.slice(0, -length);
    }


    getContent(): string {
      return this.content;
    }
  }


  class InsertTextCommand extends Command {
    constructor(
      private editor: DocumentEditor,
      private text: string,
    ) {
      super();
    }


    execute(): void {
      this.editor.insert(this.text);
    }


    undo(): void {
      this.editor.removeLast(this.text.length);
    }
  }


  @Injectable({ providedIn: 'root' })
  class CommandHistory {
    private history: Command[] = [];


    executeCommand(command: Command): void {
      command.execute();
      this.history.push(command);
    }


    undoLast(): void {
      const command = this.history.pop();
      command?.undo();
    }
  }`,
    explanation:
      "The Angular history service can execute and undo command objects, while the editor service stays focused on document state changes.",
  },
  {
    language: "React",
    code: `import React, { useMemo, useState } from "react";

interface Command {
  execute(): void;
  undo(): void;
}

class DocumentEditor {
  private content = "";

  insert(text: string): void {
    this.content += text;
  }

  removeLast(length: number): void {
    this.content = this.content.slice(0, -length);
  }

  getContent(): string {
    return this.content;
  }
}

class InsertTextCommand implements Command {
  constructor(
    private editor: DocumentEditor,
    private text: string,
  ) {}

  execute(): void {
    this.editor.insert(this.text);
  }

  undo(): void {
    this.editor.removeLast(this.text.length);
  }
}

class CommandHistory {
  private history: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undoLast(): void {
    const command = this.history.pop();
    command?.undo();
  }

  size(): number {
    return this.history.length;
  }
}

export function App() {
  const editor = useMemo(() => new DocumentEditor(), []);
  const history = useMemo(() => new CommandHistory(), []);
  const [content, setContent] = useState("");
  const [count, setCount] = useState(0);

  const refresh = () => {
    setContent(editor.getContent());
    setCount(history.size());
  };

  const insertHello = () => {
    history.executeCommand(new InsertTextCommand(editor, "Hello "));
    refresh();
  };

  const insertWorld = () => {
    history.executeCommand(new InsertTextCommand(editor, "World"));
    refresh();
  };

  const undo = () => {
    history.undoLast();
    refresh();
  };

  return (
    <main>
      <h1>Text Editor Undo</h1>
      <p>Content: {content || "(empty)"}</p>
      <p>History size: {count}</p>
      <button onClick={insertHello}>Insert Hello</button>
      <button onClick={insertWorld}>Insert World</button>
      <button onClick={undo}>Undo</button>
    </main>
  );
}`,
    explanation:
      "The React example keeps undo logic inside command objects, while the component acts as a simple controller for executing and reversing editor actions.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface Command {
  execute(): void;
  undo(): void;
}

class DocumentEditor {
  private content = "";

  insert(text: string): void {
    this.content += text;
  }

  removeLast(length: number): void {
    this.content = this.content.slice(0, -length);
  }

  getContent(): string {
    return this.content;
  }
}

class InsertTextCommand implements Command {
  constructor(
    private editor: DocumentEditor,
    private text: string,
  ) {}

  execute(): void {
    this.editor.insert(this.text);
  }

  undo(): void {
    this.editor.removeLast(this.text.length);
  }
}

class CommandHistory {
  private history: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undoLast(): void {
    const command = this.history.pop();
    command?.undo();
  }

  size(): number {
    return this.history.length;
  }
}

function ActionButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>{label}</Text>
    </Pressable>
  );
}

export function App() {
  const editor = useMemo(() => new DocumentEditor(), []);
  const history = useMemo(() => new CommandHistory(), []);
  const [content, setContent] = useState("");
  const [count, setCount] = useState(0);

  const refresh = () => {
    setContent(editor.getContent());
    setCount(history.size());
  };

  const insertHello = () => {
    history.executeCommand(new InsertTextCommand(editor, "Hello "));
    refresh();
  };

  const insertWorld = () => {
    history.executeCommand(new InsertTextCommand(editor, "World"));
    refresh();
  };

  const undo = () => {
    history.undoLast();
    refresh();
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Text Editor Undo</Text>
        <Text>Content: {content || "(empty)"}</Text>
        <Text>History size: {count}</Text>
        <ActionButton label="Insert Hello" onPress={insertHello} />
        <ActionButton label="Insert World" onPress={insertWorld} />
        <ActionButton label="Undo" onPress={undo} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same command and undo structure, but presents the editor actions through mobile-friendly controls.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;

public interface ICommand
{
    void Execute();
    void Undo();
}

public class DocumentEditor
{
    private string _content = string.Empty;

    public void Insert(string text)
    {
        _content += text;
    }

    public void RemoveLast(int length)
    {
        _content = _content.Substring(0, _content.Length - length);
    }

    public string GetContent()
    {
        return _content;
    }
}

public class InsertTextCommand : ICommand
{
    private readonly DocumentEditor _editor;
    private readonly string _text;

    public InsertTextCommand(DocumentEditor editor, string text)
    {
        _editor = editor;
        _text = text;
    }

    public void Execute()
    {
        _editor.Insert(_text);
    }

    public void Undo()
    {
        _editor.RemoveLast(_text.Length);
    }
}

public class CommandHistory
{
    private readonly List<ICommand> _history = new();

    public void ExecuteCommand(ICommand command)
    {
        command.Execute();
        _history.Add(command);
    }

    public void UndoLast()
    {
        if (_history.Count > 0)
        {
            var command = _history[^1];
            _history.RemoveAt(_history.Count - 1);
            command.Undo();
        }
    }
}

var editor = new DocumentEditor();
var history = new CommandHistory();

history.ExecuteCommand(new InsertTextCommand(editor, "Hello "));
history.ExecuteCommand(new InsertTextCommand(editor, "World"));

Console.WriteLine(editor.GetContent());

history.UndoLast();
Console.WriteLine(editor.GetContent());`,
    explanation:
      "The C# example stores each text insertion as a command, allowing the history object to undo the most recent editor action without knowing how the editor works internally.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;

public interface ICommand
{
    void Execute();
    void Undo();
}

public class DocumentEditor
{
    private string _content = string.Empty;

    public void Insert(string text)
    {
        _content += text;
    }

    public void RemoveLast(int length)
    {
        _content = _content.Substring(0, _content.Length - length);
    }

    public string GetContent()
    {
        return _content;
    }
}

public class InsertTextCommand : ICommand
{
    private readonly DocumentEditor _editor;
    private readonly string _text;

    public InsertTextCommand(DocumentEditor editor, string text)
    {
        _editor = editor;
        _text = text;
    }

    public void Execute()
    {
        _editor.Insert(_text);
    }

    public void Undo()
    {
        _editor.RemoveLast(_text.Length);
    }
}

public class CommandHistory
{
    private readonly List<ICommand> _history = new();

    public void ExecuteCommand(ICommand command)
    {
        command.Execute();
        _history.Add(command);
    }

    public void UndoLast()
    {
        if (_history.Count > 0)
        {
            var command = _history[^1];
            _history.RemoveAt(_history.Count - 1);
            command.Undo();
        }
    }
}

var services = new ServiceCollection();
services.AddSingleton<DocumentEditor>();
services.AddSingleton<CommandHistory>();

var provider = services.BuildServiceProvider();
var editor = provider.GetRequiredService<DocumentEditor>();
var history = provider.GetRequiredService<CommandHistory>();

history.ExecuteCommand(new InsertTextCommand(editor, "Hello "));
history.ExecuteCommand(new InsertTextCommand(editor, "World"));

Console.WriteLine(editor.GetContent());

history.UndoLast();
Console.WriteLine(editor.GetContent());`,
    explanation:
      "The .NET version shows the same undoable command structure with dependency injection, keeping the history and editor concerns separated.",
  },
];

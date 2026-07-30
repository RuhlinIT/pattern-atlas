import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const textEditorMementoExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class TextEditorMemento {
  constructor(public readonly content: string) {}
}


class TextEditor {
  private content = "";


  type(text: string): void {
    this.content += text;
  }


  save(): TextEditorMemento {
    return new TextEditorMemento(this.content);
  }


  restore(memento: TextEditorMemento): void {
    this.content = memento.content;
  }


  getContent(): string {
    return this.content;
  }
}


class History {
  private snapshots: TextEditorMemento[] = [];


  save(memento: TextEditorMemento): void {
    this.snapshots.push(memento);
  }


  undo(): TextEditorMemento | null {
    return this.snapshots.pop() ?? null;
  }
}


const editor = new TextEditor();
const history = new History();


editor.type("Hello");
history.save(editor.save());


editor.type(" World");
history.save(editor.save());


editor.type("!");
console.log(editor.getContent());


const previous = history.undo();
if (previous) {
  editor.restore(previous);
}


console.log(editor.getContent());`,
    explanation:
      "The text editor memento stores snapshots of content so the editor can restore earlier versions without exposing its internal state.",
  },
  {
    language: "Java",
    code: `class TextEditorMemento {
    private final String content;


    public TextEditorMemento(String content) {
        this.content = content;
    }


    public String getContent() {
        return content;
    }
}


class TextEditor {
    private String content = "";


    public void type(String text) {
        content += text;
    }


    public TextEditorMemento save() {
        return new TextEditorMemento(content);
    }


    public void restore(TextEditorMemento memento) {
        content = memento.getContent();
    }


    public String getContent() {
        return content;
    }
}


class History {
    private final java.util.Stack<TextEditorMemento> snapshots = new java.util.Stack<>();


    public void save(TextEditorMemento memento) {
        snapshots.push(memento);
    }


    public TextEditorMemento undo() {
        return snapshots.isEmpty() ? null : snapshots.pop();
    }
}


TextEditor editor = new TextEditor();
History history = new History();


editor.type("Hello");
history.save(editor.save());


editor.type(" World");
history.save(editor.save());


editor.type("!");
System.out.println(editor.getContent());


TextEditorMemento previous = history.undo();
if (previous != null) {
    editor.restore(previous);
}


System.out.println(editor.getContent());`,
    explanation:
      "The Java text editor uses a memento class to snapshot content and a history object to manage undo steps.",
  },
  {
    language: "Python",
    code: `class TextEditorMemento:
    def __init__(self, content: str) -> None:
        self.content = content


class TextEditor:
    def __init__(self) -> None:
        self.content = ""


    def type(self, text: str) -> None:
        self.content += text


    def save(self) -> TextEditorMemento:
        return TextEditorMemento(self.content)


    def restore(self, memento: TextEditorMemento) -> None:
        self.content = memento.content


    def get_content(self) -> str:
        return self.content


class History:
    def __init__(self) -> None:
        self.snapshots: list[TextEditorMemento] = []


    def save(self, memento: TextEditorMemento) -> None:
        self.snapshots.append(memento)


    def undo(self) -> TextEditorMemento | None:
        return self.snapshots.pop() if self.snapshots else None


editor = TextEditor()
history = History()


editor.type("Hello")
history.save(editor.save())


editor.type(" World")
history.save(editor.save())


editor.type("!")
print(editor.get_content())


previous = history.undo()
if previous:
    editor.restore(previous)


print(editor.get_content())`,
    explanation:
      "The Python text editor captures content snapshots with a memento and restores the editor from saved history.",
  },
  {
    language: "Angular",
    code: `class TextEditorMemento {
  constructor(public readonly content: string) {}
}


class TextEditor {
  private content = "";


  type(text: string): void {
    this.content += text;
  }


  save(): TextEditorMemento {
    return new TextEditorMemento(this.content);
  }


  restore(memento: TextEditorMemento): void {
    this.content = memento.content;
  }


  getContent(): string {
    return this.content;
  }
}


class History {
  private snapshots: TextEditorMemento[] = [];


  save(memento: TextEditorMemento): void {
    this.snapshots.push(memento);
  }


  undo(): TextEditorMemento | null {
    return this.snapshots.pop() ?? null;
  }
}


const editor = new TextEditor();
const history = new History();


editor.type("Hello");
history.save(editor.save());


editor.type(" World");
history.save(editor.save());


editor.type("!");
console.log(editor.getContent());


const previous = history.undo();
if (previous) {
  editor.restore(previous);
}


console.log(editor.getContent());`,
    explanation:
      "The Angular example keeps editor state snapshots in mementos so earlier content can be restored cleanly.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


class TextEditorMemento {
  constructor(public readonly content: string) {}
}


class TextEditor {
  private content = "";


  type(text: string): void {
    this.content += text;
  }


  save(): TextEditorMemento {
    return new TextEditorMemento(this.content);
  }


  restore(memento: TextEditorMemento): void {
    this.content = memento.content;
  }


  getContent(): string {
    return this.content;
  }
}


class History {
  private snapshots: TextEditorMemento[] = [];


  save(memento: TextEditorMemento): void {
    this.snapshots.push(memento);
  }


  undo(): TextEditorMemento | null {
    return this.snapshots.pop() ?? null;
  }
}


function EditorPreview({ editor }: { editor: TextEditor }) {
  return <p>{editor.getContent()}</p>;
}


export function App() {
  const editor = useMemo(() => new TextEditor(), []);


  useMemo(() => {
    editor.type("Hello");
    editor.type(" World");
  }, [editor]);


  return (
    <main>
      <h1>Text Editor Memento</h1>
      <EditorPreview editor={editor} />
    </main>
  );
}`,
    explanation:
      "The React example treats the editor as the originator and uses mementos to preserve content history for undo support.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


class TextEditorMemento {
  constructor(public readonly content: string) {}
}


class TextEditor {
  private content = "";


  type(text: string): void {
    this.content += text;
  }


  save(): TextEditorMemento {
    return new TextEditorMemento(this.content);
  }


  restore(memento: TextEditorMemento): void {
    this.content = memento.content;
  }


  getContent(): string {
    return this.content;
  }
}


class History {
  private snapshots: TextEditorMemento[] = [];


  save(memento: TextEditorMemento): void {
    this.snapshots.push(memento);
  }


  undo(): TextEditorMemento | null {
    return this.snapshots.pop() ?? null;
  }
}


function EditorPreview({ editor }: { editor: TextEditor }) {
  return (
    <View>
      <Text>{editor.getContent()}</Text>
    </View>
  );
}


export function App() {
  const editor = useMemo(() => new TextEditor(), []);


  useMemo(() => {
    editor.type("Hello");
    editor.type(" World");
  }, [editor]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Text Editor Memento</Text>
        <EditorPreview editor={editor} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example shows the current editor content while the saved mementos handle restoration behind the scenes.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public class TextEditorMemento
{
    public string Content { get; }


    public TextEditorMemento(string content)
    {
        Content = content;
    }
}


public class TextEditor
{
    private string _content = "";


    public void Type(string text)
    {
        _content += text;
    }


    public TextEditorMemento Save()
    {
        return new TextEditorMemento(_content);
    }


    public void Restore(TextEditorMemento memento)
    {
        _content = memento.Content;
    }


    public string GetContent()
    {
        return _content;
    }
}


public class History
{
    private readonly Stack<TextEditorMemento> _snapshots = new Stack<TextEditorMemento>();


    public void Save(TextEditorMemento memento)
    {
        _snapshots.Push(memento);
    }


    public TextEditorMemento Undo()
    {
        return _snapshots.Count > 0 ? _snapshots.Pop() : null;
    }
}


var editor = new TextEditor();
var history = new History();


editor.Type("Hello");
history.Save(editor.Save());


editor.Type(" World");
history.Save(editor.Save());


editor.Type("!");
Console.WriteLine(editor.GetContent());


var previous = history.Undo();
if (previous != null)
{
    editor.Restore(previous);
}


Console.WriteLine(editor.GetContent());`,
    explanation:
      "The C# text editor example stores snapshots in immutable mementos and uses a caretaker to manage undo history.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public class TextEditorMemento
{
    public string Content { get; }


    public TextEditorMemento(string content)
    {
        Content = content;
    }
}


public class TextEditor
{
    private string _content = "";


    public void Type(string text)
    {
        _content += text;
    }


    public TextEditorMemento Save()
    {
        return new TextEditorMemento(_content);
    }


    public void Restore(TextEditorMemento memento)
    {
        _content = memento.Content;
    }


    public string GetContent()
    {
        return _content;
    }
}


public class History
{
    private readonly Stack<TextEditorMemento> _snapshots = new Stack<TextEditorMemento>();


    public void Save(TextEditorMemento memento)
    {
        _snapshots.Push(memento);
    }


    public TextEditorMemento Undo()
    {
        return _snapshots.Count > 0 ? _snapshots.Pop() : null;
    }
}


var services = new ServiceCollection();
services.AddSingleton<TextEditor>();
services.AddSingleton<History>();

var provider = services.BuildServiceProvider();
var editor = provider.GetRequiredService<TextEditor>();
var history = provider.GetRequiredService<History>();


editor.Type("Hello");
history.Save(editor.Save());


editor.Type(" World");
history.Save(editor.Save());


editor.Type("!");
Console.WriteLine(editor.GetContent());


var previous = history.Undo();
if (previous != null)
{
    editor.Restore(previous);
}


Console.WriteLine(editor.GetContent());`,
    explanation:
      "The .NET text editor example wires the originator and caretaker through dependency injection while preserving encapsulated state snapshots.",
  },
];

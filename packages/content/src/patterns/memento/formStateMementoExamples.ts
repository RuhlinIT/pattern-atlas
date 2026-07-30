import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const formStateMementoExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class FormMemento {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly step: number
  ) {}
}


class FormWizard {
  private name = "";
  private email = "";
  private step = 1;


  setName(name: string): void {
    this.name = name;
  }


  setEmail(email: string): void {
    this.email = email;
  }


  nextStep(): void {
    this.step += 1;
  }


  save(): FormMemento {
    return new FormMemento(this.name, this.email, this.step);
  }


  restore(memento: FormMemento): void {
    this.name = memento.name;
    this.email = memento.email;
    this.step = memento.step;
  }


  summary(): string {
    return \`Name: \${this.name}, Email: \${this.email}, Step: \${this.step}\`;
  }
}


class DraftStore {
  private drafts: FormMemento[] = [];


  save(draft: FormMemento): void {
    this.drafts.push(draft);
  }


  load(index: number): FormMemento | null {
    return this.drafts[index] ?? null;
  }
}


const wizard = new FormWizard();
const store = new DraftStore();


wizard.setName("Ava");
wizard.setEmail("ava@example.com");
wizard.nextStep();
store.save(wizard.save());


wizard.setEmail("ava.smith@example.com");
wizard.nextStep();
store.save(wizard.save());


console.log(wizard.summary());


const draft = store.load(0);
if (draft) {
  wizard.restore(draft);
}


console.log(wizard.summary());`,
    explanation:
      "The form state memento preserves draft data and the current step so a multi-step form can be restored later.",
  },
  {
    language: "Java",
    code: `class FormMemento {
    private final String name;
    private final String email;
    private final int step;


    public FormMemento(String name, String email, int step) {
        this.name = name;
        this.email = email;
        this.step = step;
    }


    public String getName() {
        return name;
    }


    public String getEmail() {
        return email;
    }


    public int getStep() {
        return step;
    }
}


class FormWizard {
    private String name = "";
    private String email = "";
    private int step = 1;


    public void setName(String name) {
        this.name = name;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public void nextStep() {
        step += 1;
    }


    public FormMemento save() {
        return new FormMemento(name, email, step);
    }


    public void restore(FormMemento memento) {
        name = memento.getName();
        email = memento.getEmail();
        step = memento.getStep();
    }


    public String summary() {
        return "Name: " + name + ", Email: " + email + ", Step: " + step;
    }
}


class DraftStore {
    private final java.util.List<FormMemento> drafts = new java.util.ArrayList<>();


    public void save(FormMemento draft) {
        drafts.add(draft);
    }


    public FormMemento load(int index) {
        return index >= 0 && index < drafts.size() ? drafts.get(index) : null;
    }
}


FormWizard wizard = new FormWizard();
DraftStore store = new DraftStore();


wizard.setName("Ava");
wizard.setEmail("ava@example.com");
wizard.nextStep();
store.save(wizard.save());


wizard.setEmail("ava.smith@example.com");
wizard.nextStep();
store.save(wizard.save());


System.out.println(wizard.summary());


FormMemento draft = store.load(0);
if (draft != null) {
    wizard.restore(draft);
}


System.out.println(wizard.summary());`,
    explanation:
      "The Java form wizard uses mementos to keep draft data and step progress safe for later restoration.",
  },
  {
    language: "Python",
    code: `class FormMemento:
    def __init__(self, name: str, email: str, step: int) -> None:
        self.name = name
        self.email = email
        self.step = step


class FormWizard:
    def __init__(self) -> None:
        self.name = ""
        self.email = ""
        self.step = 1


    def set_name(self, name: str) -> None:
        self.name = name


    def set_email(self, email: str) -> None:
        self.email = email


    def next_step(self) -> None:
        self.step += 1


    def save(self) -> FormMemento:
        return FormMemento(self.name, self.email, self.step)


    def restore(self, memento: FormMemento) -> None:
        self.name = memento.name
        self.email = memento.email
        self.step = memento.step


    def summary(self) -> str:
        return f"Name: {self.name}, Email: {self.email}, Step: {self.step}"


class DraftStore:
    def __init__(self) -> None:
        self.drafts: list[FormMemento] = []


    def save(self, draft: FormMemento) -> None:
        self.drafts.append(draft)


    def load(self, index: int) -> FormMemento | None:
        return self.drafts[index] if 0 <= index < len(self.drafts) else None


wizard = FormWizard()
store = DraftStore()


wizard.set_name("Ava")
wizard.set_email("ava@example.com")
wizard.next_step()
store.save(wizard.save())


wizard.set_email("ava.smith@example.com")
wizard.next_step()
store.save(wizard.save())


print(wizard.summary())


draft = store.load(0)
if draft:
    wizard.restore(draft)


print(wizard.summary())`,
    explanation:
      "The Python form wizard saves each draft as a memento so interrupted work can be restored later.",
  },
  {
    language: "Angular",
    code: `class FormMemento {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly step: number
  ) {}
}


class FormWizard {
  private name = "";
  private email = "";
  private step = 1;


  setName(name: string): void {
    this.name = name;
  }


  setEmail(email: string): void {
    this.email = email;
  }


  nextStep(): void {
    this.step += 1;
  }


  save(): FormMemento {
    return new FormMemento(this.name, this.email, this.step);
  }


  restore(memento: FormMemento): void {
    this.name = memento.name;
    this.email = memento.email;
    this.step = memento.step;
  }


  summary(): string {
    return \`Name: \${this.name}, Email: \${this.email}, Step: \${this.step}\`;
  }
}


class DraftStore {
  private drafts: FormMemento[] = [];


  save(draft: FormMemento): void {
    this.drafts.push(draft);
  }


  load(index: number): FormMemento | null {
    return this.drafts[index] ?? null;
  }
}


const wizard = new FormWizard();
const store = new DraftStore();


wizard.setName("Ava");
wizard.setEmail("ava@example.com");
wizard.nextStep();
store.save(wizard.save());


wizard.setEmail("ava.smith@example.com");
wizard.nextStep();
store.save(wizard.save());


console.log(wizard.summary());


const draft = store.load(0);
if (draft) {
  wizard.restore(draft);
}


console.log(wizard.summary());`,
    explanation:
      "The Angular example stores multi-step form drafts as mementos so the wizard can be restored safely.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


class FormMemento {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly step: number
  ) {}
}


class FormWizard {
  private name = "";
  private email = "";
  private step = 1;


  setName(name: string): void {
    this.name = name;
  }


  setEmail(email: string): void {
    this.email = email;
  }


  nextStep(): void {
    this.step += 1;
  }


  save(): FormMemento {
    return new FormMemento(this.name, this.email, this.step);
  }


  restore(memento: FormMemento): void {
    this.name = memento.name;
    this.email = memento.email;
    this.step = memento.step;
  }


  summary(): string {
    return \`Name: \${this.name}, Email: \${this.email}, Step: \${this.step}\`;
  }
}


function FormPreview({ wizard }: { wizard: FormWizard }) {
  return <p>{wizard.summary()}</p>;
}


export function App() {
  const wizard = useMemo(() => new FormWizard(), []);


  useMemo(() => {
    wizard.setName("Ava");
    wizard.setEmail("ava@example.com");
    wizard.nextStep();
  }, [wizard]);


  return (
    <main>
      <h1>Form State Memento</h1>
      <FormPreview wizard={wizard} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the wizard state in the originator and uses mementos to support draft recovery.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


class FormMemento {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly step: number
  ) {}
}


class FormWizard {
  private name = "";
  private email = "";
  private step = 1;


  setName(name: string): void {
    this.name = name;
  }


  setEmail(email: string): void {
    this.email = email;
  }


  nextStep(): void {
    this.step += 1;
  }


  save(): FormMemento {
    return new FormMemento(this.name, this.email, this.step);
  }


  restore(memento: FormMemento): void {
    this.name = memento.name;
    this.email = memento.email;
    this.step = memento.step;
  }


  summary(): string {
    return \`Name: \${this.name}, Email: \${this.email}, Step: \${this.step}\`;
  }
}


function FormPreview({ wizard }: { wizard: FormWizard }) {
  return (
    <View>
      <Text>{wizard.summary()}</Text>
    </View>
  );
}


export function App() {
  const wizard = useMemo(() => new FormWizard(), []);


  useMemo(() => {
    wizard.setName("Ava");
    wizard.setEmail("ava@example.com");
    wizard.nextStep();
  }, [wizard]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Form State Memento</Text>
        <FormPreview wizard={wizard} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example preserves multi-step form progress with mementos and renders the current draft state in the UI.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public class FormMemento
{
    public string Name { get; }
    public string Email { get; }
    public int Step { get; }


    public FormMemento(string name, string email, int step)
    {
        Name = name;
        Email = email;
        Step = step;
    }
}


public class FormWizard
{
    private string _name = "";
    private string _email = "";
    private int _step = 1;


    public void SetName(string name)
    {
        _name = name;
    }


    public void SetEmail(string email)
    {
        _email = email;
    }


    public void NextStep()
    {
        _step += 1;
    }


    public FormMemento Save()
    {
        return new FormMemento(_name, _email, _step);
    }


    public void Restore(FormMemento memento)
    {
        _name = memento.Name;
        _email = memento.Email;
        _step = memento.Step;
    }


    public string Summary()
    {
        return $"Name: {_name}, Email: {_email}, Step: {_step}";
    }
}


public class DraftStore
{
    private readonly List<FormMemento> _drafts = new List<FormMemento>();


    public void Save(FormMemento draft)
    {
        _drafts.Add(draft);
    }


    public FormMemento Load(int index)
    {
        return index >= 0 && index < _drafts.Count ? _drafts[index] : null;
    }
}


var wizard = new FormWizard();
var store = new DraftStore();


wizard.SetName("Ava");
wizard.SetEmail("ava@example.com");
wizard.NextStep();
store.Save(wizard.Save());


wizard.SetEmail("ava.smith@example.com");
wizard.NextStep();
store.Save(wizard.Save());


Console.WriteLine(wizard.Summary());


var draft = store.Load(0);
if (draft != null)
{
    wizard.Restore(draft);
}


Console.WriteLine(wizard.Summary());`,
    explanation:
      "The C# form wizard uses mementos to preserve draft progress and restore it later without exposing internal state.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public class FormMemento
{
    public string Name { get; }
    public string Email { get; }
    public int Step { get; }


    public FormMemento(string name, string email, int step)
    {
        Name = name;
        Email = email;
        Step = step;
    }
}


public class FormWizard
{
    private string _name = "";
    private string _email = "";
    private int _step = 1;


    public void SetName(string name)
    {
        _name = name;
    }


    public void SetEmail(string email)
    {
        _email = email;
    }


    public void NextStep()
    {
        _step += 1;
    }


    public FormMemento Save()
    {
        return new FormMemento(_name, _email, _step);
    }


    public void Restore(FormMemento memento)
    {
        _name = memento.Name;
        _email = memento.Email;
        _step = memento.Step;
    }


    public string Summary()
    {
        return $"Name: {_name}, Email: {_email}, Step: {_step}";
    }
}


public class DraftStore
{
    private readonly List<FormMemento> _drafts = new List<FormMemento>();


    public void Save(FormMemento draft)
    {
        _drafts.Add(draft);
    }


    public FormMemento Load(int index)
    {
        return index >= 0 && index < _drafts.Count ? _drafts[index] : null;
    }
}


var services = new ServiceCollection();
services.AddSingleton<FormWizard>();
services.AddSingleton<DraftStore>();

var provider = services.BuildServiceProvider();
var wizard = provider.GetRequiredService<FormWizard>();
var store = provider.GetRequiredService<DraftStore>();


wizard.SetName("Ava");
wizard.SetEmail("ava@example.com");
wizard.NextStep();
store.Save(wizard.Save());


wizard.SetEmail("ava.smith@example.com");
wizard.NextStep();
store.Save(wizard.Save());


Console.WriteLine(wizard.Summary());


var draft = store.Load(0);
if (draft != null)
{
    wizard.Restore(draft);
}


Console.WriteLine(wizard.Summary());`,
    explanation:
      "The .NET example wires the form wizard and draft store through dependency injection while keeping snapshots encapsulated.",
  },
];

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Form state memento",
  code: "import React, { useMemo } from \"react\";\n\n\nclass FormMemento {\n  constructor(\n    public readonly name: string,\n    public readonly email: string,\n    public readonly step: number\n  ) {}\n}\n\n\nclass FormWizard {\n  private name = \"\";\n  private email = \"\";\n  private step = 1;\n\n\n  setName(name: string): void {\n    this.name = name;\n  }\n\n\n  setEmail(email: string): void {\n    this.email = email;\n  }\n\n\n  nextStep(): void {\n    this.step += 1;\n  }\n\n\n  save(): FormMemento {\n    return new FormMemento(this.name, this.email, this.step);\n  }\n\n\n  restore(memento: FormMemento): void {\n    this.name = memento.name;\n    this.email = memento.email;\n    this.step = memento.step;\n  }\n\n\n  summary(): string {\n    return `Name: ${this.name}, Email: ${this.email}, Step: ${this.step}`;\n  }\n}\n\n\nfunction FormPreview({ wizard }: { wizard: FormWizard }) {\n  return <p>{wizard.summary()}</p>;\n}\n\n\nexport function App() {\n  const wizard = useMemo(() => new FormWizard(), []);\n\n\n  useMemo(() => {\n    wizard.setName(\"Ava\");\n    wizard.setEmail(\"ava@example.com\");\n    wizard.nextStep();\n  }, [wizard]);\n\n\n  return (\n    <main>\n      <h1>Form State Memento</h1>\n      <FormPreview wizard={wizard} />\n    </main>\n  );\n}",
  explanation: "The React example keeps the wizard state in the originator and uses mementos to support draft recovery.",
};

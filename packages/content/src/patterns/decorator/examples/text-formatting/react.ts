import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Text formatting",
  code: "import React, { useMemo } from \"react\";\n\ninterface Text {\n  render(): string;\n}\n\nclass PlainText implements Text {\n  constructor(private value: string) {}\n\n  render(): string {\n    return this.value;\n  }\n}\n\nabstract class TextDecorator implements Text {\n  constructor(protected text: Text) {}\n\n  render(): string {\n    return this.text.render();\n  }\n}\n\nclass BoldDecorator extends TextDecorator {\n  render(): string {\n    return `<b>${super.render()}</b>`;\n  }\n}\n\nclass ItalicDecorator extends TextDecorator {\n  render(): string {\n    return `<i>${super.render()}</i>`;\n  }\n}\n\nclass UnderlineDecorator extends TextDecorator {\n  render(): string {\n    return `<u>${super.render()}</u>`;\n  }\n}\n\nfunction Preview({ text }: { text: Text }) {\n  return <div dangerouslySetInnerHTML={{ __html: text.render() }} />;\n}\n\nexport function App() {\n  const formatted = useMemo(\n    () => new UnderlineDecorator(new ItalicDecorator(new BoldDecorator(new PlainText(\"Pattern Atlas\")))),\n    []\n  );\n\n  return (\n    <main>\n      <h1>Text Formatting</h1>\n      <Preview text={formatted} />\n    </main>\n  );\n}",
  explanation: "The React example layers formatting decorators around the same text object, so the UI can render combined styles without baking every combination into one component.",
};

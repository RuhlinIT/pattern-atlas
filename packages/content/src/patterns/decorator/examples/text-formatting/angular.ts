import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Text formatting",
  code: "interface Text {\n  render(): string;\n}\n\n\nclass PlainText implements Text {\n  constructor(private value: string) {}\n\n\n  render(): string {\n    return this.value;\n  }\n}\n\n\nabstract class TextDecorator implements Text {\n  constructor(protected text: Text) {}\n\n\n  render(): string {\n    return this.text.render();\n  }\n}\n\n\nclass BoldDecorator extends TextDecorator {\n  render(): string {\n    return `<b>${super.render()}</b>`;\n  }\n}\n\n\nclass ItalicDecorator extends TextDecorator {\n  render(): string {\n    return `<i>${super.render()}</i>`;\n  }\n}\n\n\nclass UnderlineDecorator extends TextDecorator {\n  render(): string {\n    return `<u>${super.render()}</u>`;\n  }\n}\n\n\nconst formatted = new UnderlineDecorator(\n  new ItalicDecorator(new BoldDecorator(new PlainText('Pattern Atlas'))),\n);\n\n\nconsole.log(formatted.render());",
  explanation: "Formatting decorators wrap the same Text contract, so Angular code can combine styles dynamically without hardcoding every rendering combination.",
};

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface TextNode {
  render(): string;
}

class PlainText implements TextNode {
  constructor(private text: string) {}
  render() {
    return this.text;
  }
}

class BoldText implements TextNode {
  constructor(private wrapped: TextNode) {}
  render() {
    return `<strong>${this.wrapped.render()}</strong>`;
  }
}

class ItalicText implements TextNode {
  constructor(private wrapped: TextNode) {}
  render() {
    return `<em>${this.wrapped.render()}</em>`;
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Text formatting",
  code: `interface TextNode {
  render(): string;
}

class PlainText implements TextNode {
  constructor(private text: string) {}
  render() {
    return this.text;
  }
}

class BoldText implements TextNode {
  constructor(private wrapped: TextNode) {}
  render() {
    return \`<strong>\${this.wrapped.render()}</strong>\`;
  }
}

class ItalicText implements TextNode {
  constructor(private wrapped: TextNode) {}
  render() {
    return \`<em>\${this.wrapped.render()}</em>\`;
  }
}

const text = new BoldText(new ItalicText(new PlainText("Hello")));
text.render();`,
  explanation:
    "Wrap text with formatting layers while preserving the same render contract.",
};
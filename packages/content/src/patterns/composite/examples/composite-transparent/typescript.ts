import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface Node {
  add?(child: Node): void;
  render(): string;
}

class Leaf implements Node {
  constructor(private label: string) {}
  render() { return this.label; }
}

class Branch implements Node {
  private children: Node[] = [];
  add(child: Node) { this.children.push(child); }
  render() { return this.children.map(child => child.render()).join(","); }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Transparent composite",
  code: `interface Node {
  add?(child: Node): void;
  render(): string;
}

class Leaf implements Node {
  constructor(private label: string) {}
  render() { return this.label; }
}

class Branch implements Node {
  private children: Node[] = [];
  add(child: Node) { this.children.push(child); }
  render() { return this.children.map(child => child.render()).join(","); }
}
`,
  explanation: "Expose a uniform interface so leaves and branches can be handled the same way by client code.",
};
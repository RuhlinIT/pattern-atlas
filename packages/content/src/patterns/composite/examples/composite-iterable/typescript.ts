import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface Node {
  walk(): Iterable<Node>;
}

class Leaf implements Node {
  constructor(public name: string) {}
  *walk() { yield this; }
}

class Branch implements Node {
  constructor(private children: Node[] = []) {}
  add(child: Node) { this.children.push(child); }
  *walk(): Iterable<Node> {
    yield this;
    for (const child of this.children) yield* child.walk();
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Iterable composite",
  code: `interface Node {
  walk(): Iterable<Node>;
}

class Leaf implements Node {
  constructor(public name: string) {}
  *walk() { yield this; }
}

class Branch implements Node {
  constructor(private children: Node[] = []) {}
  add(child: Node) { this.children.push(child); }
  *walk(): Iterable<Node> {
    yield this;
    for (const child of this.children) yield* child.walk();
  }
}
`,
  explanation: "Provide iteration over the tree so callers can traverse composite structures without writing recursion.",
};
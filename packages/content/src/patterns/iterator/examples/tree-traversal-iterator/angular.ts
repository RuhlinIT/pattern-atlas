import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Tree traversal iterator",
  code: "class TreeNode {\n  constructor(\n    public value: string,\n    public left: TreeNode | null = null,\n    public right: TreeNode | null = null\n  ) {}\n}\n\n\nclass InOrderIterator {\n  private stack: TreeNode[] = [];\n\n\n  constructor(root: TreeNode | null) {\n    this.pushLeft(root);\n  }\n\n\n  private pushLeft(node: TreeNode | null): void {\n    while (node) {\n      this.stack.push(node);\n      node = node.left;\n    }\n  }\n\n\n  next(): string | null {\n    if (!this.hasNext()) {\n      return null;\n    }\n\n\n    const node = this.stack.pop()!;\n    this.pushLeft(node.right);\n    return node.value;\n  }\n\n\n  hasNext(): boolean {\n    return this.stack.length > 0;\n  }\n}\n\n\nconst root = new TreeNode(\n  \"A\",\n  new TreeNode(\"B\", new TreeNode(\"D\"), new TreeNode(\"E\")),\n  new TreeNode(\"C\", null, new TreeNode(\"F\"))\n);\n\n\nconst iterator = new InOrderIterator(root);\n\n\nwhile (iterator.hasNext()) {\n  console.log(iterator.next());\n}",
  explanation: "The Angular example provides a clean tree iterator that walks nodes in order without leaking tree internals.",
};

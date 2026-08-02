import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface FileSystemNode {
  getName(): string;
  getSize(): number;
}

class File implements FileSystemNode {
  constructor(private name: string, private size: number) {}
  getName() { return this.name; }
  getSize() { return this.size; }
}

class Folder implements FileSystemNode {
  constructor(private name: string, private children: FileSystemNode[] = []) {}
  add(child: FileSystemNode) { this.children.push(child); }
  getName() { return this.name; }
  getSize() { return this.children.reduce((sum, child) => sum + child.getSize(), 0); }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "File system composite",
  code: `interface FileSystemNode {
  getName(): string;
  getSize(): number;
}

class File implements FileSystemNode {
  constructor(private name: string, private size: number) {}
  getName() { return this.name; }
  getSize() { return this.size; }
}

class Folder implements FileSystemNode {
  constructor(private name: string, private children: FileSystemNode[] = []) {}
  add(child: FileSystemNode) { this.children.push(child); }
  getName() { return this.name; }
  getSize() { return this.children.reduce((sum, child) => sum + child.getSize(), 0); }
}

const root = new Folder("root");
root.add(new File("readme.md", 1200));
const docs = new Folder("docs");
docs.add(new File("guide.pdf", 2500));
root.add(docs);
root.getSize();`,
  explanation: "Treat files and folders through the same interface so nested file trees can be traversed uniformly.",
};
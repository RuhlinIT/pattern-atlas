import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "File system composite",
  code: "interface FileSystemNode {\n  getSize(): number;\n  describe(): string;\n}\n\n\nclass FileNode implements FileSystemNode {\n  constructor(\n    private name: string,\n    private size: number,\n  ) {}\n\n\n  getSize(): number {\n    return this.size;\n  }\n\n\n  describe(): string {\n    return `${this.name} (${this.size} KB)`;\n  }\n}\n\n\nclass FolderNode implements FileSystemNode {\n  private children: FileSystemNode[] = [];\n\n\n  constructor(private name: string) {}\n\n\n  add(node: FileSystemNode): void {\n    this.children.push(node);\n  }\n\n\n  getSize(): number {\n    return this.children.reduce((total, child) => total + child.getSize(), 0);\n  }\n\n\n  describe(): string {\n    return `${this.name} folder with ${this.children.length} items`;\n  }\n}\n\n\nconst root = new FolderNode(\"Documents\");\nroot.add(new FileNode(\"resume.pdf\", 120));\nroot.add(new FileNode(\"invoice.xlsx\", 80));\n\n\nconst archive = new FolderNode(\"Archive\");\narchive.add(new FileNode(\"old-notes.txt\", 30));\nroot.add(archive);\n\n\nconsole.log(root.describe());\nconsole.log(root.getSize());",
  explanation: "The file system composite treats files and folders through one interface, so nested folders can be handled recursively like leaf files.",
};

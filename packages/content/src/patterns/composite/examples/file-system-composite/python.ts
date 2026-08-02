import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "File system composite",
  code: `class File:
    def __init__(self, name, size):
        self.name = name
        self.size = size

    def get_name(self):
        return self.name

    def get_size(self):
        return self.size

class Folder:
    def __init__(self, name):
        self.name = name
        self.children = []

    def add(self, child):
        self.children.append(child)

    def get_name(self):
        return self.name

    def get_size(self):
        return sum(child.get_size() for child in self.children)

root = Folder("root")
root.add(File("readme.md", 1200))
docs = Folder("docs")
docs.add(File("guide.pdf", 2500))
root.add(docs)
root.get_size()`,
  explanation: "Treat files and folders through the same interface so nested file trees can be traversed uniformly.",
};
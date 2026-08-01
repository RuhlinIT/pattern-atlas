import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "File system composite",
  code: "from abc import ABC, abstractmethod\n\n\nclass FileSystemNode(ABC):\n    @abstractmethod\n    def get_size(self) -> int:\n        pass\n\n\n    @abstractmethod\n    def describe(self) -> str:\n        pass\n\n\nclass FileNode(FileSystemNode):\n    def __init__(self, name: str, size: int) -> None:\n        self.name = name\n        self.size = size\n\n\n    def get_size(self) -> int:\n        return self.size\n\n\n    def describe(self) -> str:\n        return f\"{self.name} ({self.size} KB)\"\n\n\nclass FolderNode(FileSystemNode):\n    def __init__(self, name: str) -> None:\n        self.name = name\n        self.children: list[FileSystemNode] = []\n\n\n    def add(self, node: FileSystemNode) -> None:\n        self.children.append(node)\n\n\n    def get_size(self) -> int:\n        return sum(child.get_size() for child in self.children)\n\n\n    def describe(self) -> str:\n        return f\"{self.name} folder with {len(self.children)} items\"\n\n\nroot = FolderNode(\"Documents\")\nroot.add(FileNode(\"resume.pdf\", 120))\nroot.add(FileNode(\"invoice.xlsx\", 80))\n\n\narchive = FolderNode(\"Archive\")\narchive.add(FileNode(\"old-notes.txt\", 30))\nroot.add(archive)\n\n\nprint(root.describe())\nprint(root.get_size())",
  explanation: "The file system composite keeps files and folders interchangeable from the client’s perspective while still supporting nested hierarchies.",
};

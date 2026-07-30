import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const fileSystemCompositeExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface FileSystemNode {
  getSize(): number;
  describe(): string;
}


class FileNode implements FileSystemNode {
  constructor(
    private name: string,
    private size: number,
  ) {}


  getSize(): number {
    return this.size;
  }


  describe(): string {
    return \`\${this.name} (\${this.size} KB)\`;
  }
}


class FolderNode implements FileSystemNode {
  private children: FileSystemNode[] = [];


  constructor(private name: string) {}


  add(node: FileSystemNode): void {
    this.children.push(node);
  }


  getSize(): number {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }


  describe(): string {
    return \`\${this.name} folder with \${this.children.length} items\`;
  }
}


const root = new FolderNode("Documents");
root.add(new FileNode("resume.pdf", 120));
root.add(new FileNode("invoice.xlsx", 80));


const archive = new FolderNode("Archive");
archive.add(new FileNode("old-notes.txt", 30));
root.add(archive);


console.log(root.describe());
console.log(root.getSize());`,
    explanation:
      "The file system composite treats files and folders through one interface, so nested folders can be handled recursively like leaf files.",
  },
  {
    language: "Java",
    code: `interface FileSystemNode {
    int getSize();
    String describe();
}


class FileNode implements FileSystemNode {
    private final String name;
    private final int size;


    public FileNode(String name, int size) {
        this.name = name;
        this.size = size;
    }


    public int getSize() {
        return size;
    }


    public String describe() {
        return name + " (" + size + " KB)";
    }
}


class FolderNode implements FileSystemNode {
    private final String name;
    private final java.util.List<FileSystemNode> children = new java.util.ArrayList<>();


    public FolderNode(String name) {
        this.name = name;
    }


    public void add(FileSystemNode node) {
        children.add(node);
    }


    public int getSize() {
        return children.stream().mapToInt(FileSystemNode::getSize).sum();
    }


    public String describe() {
        return name + " folder with " + children.size() + " items";
    }
}


FolderNode root = new FolderNode("Documents");
root.add(new FileNode("resume.pdf", 120));
root.add(new FileNode("invoice.xlsx", 80));


FolderNode archive = new FolderNode("Archive");
archive.add(new FileNode("old-notes.txt", 30));
root.add(archive);


System.out.println(root.describe());
System.out.println(root.getSize());`,
    explanation:
      "The file system composite lets both files and folders share the same contract, which makes recursive aggregation straightforward.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class FileSystemNode(ABC):
    @abstractmethod
    def get_size(self) -> int:
        pass


    @abstractmethod
    def describe(self) -> str:
        pass


class FileNode(FileSystemNode):
    def __init__(self, name: str, size: int) -> None:
        self.name = name
        self.size = size


    def get_size(self) -> int:
        return self.size


    def describe(self) -> str:
        return f"{self.name} ({self.size} KB)"


class FolderNode(FileSystemNode):
    def __init__(self, name: str) -> None:
        self.name = name
        self.children: list[FileSystemNode] = []


    def add(self, node: FileSystemNode) -> None:
        self.children.append(node)


    def get_size(self) -> int:
        return sum(child.get_size() for child in self.children)


    def describe(self) -> str:
        return f"{self.name} folder with {len(self.children)} items"


root = FolderNode("Documents")
root.add(FileNode("resume.pdf", 120))
root.add(FileNode("invoice.xlsx", 80))


archive = FolderNode("Archive")
archive.add(FileNode("old-notes.txt", 30))
root.add(archive)


print(root.describe())
print(root.get_size())`,
    explanation:
      "The file system composite keeps files and folders interchangeable from the client’s perspective while still supporting nested hierarchies.",
  },
  {
    language: "Angular",
    code: `interface FileSystemNode {
  getSize(): number;
  describe(): string;
}


class FileNode implements FileSystemNode {
  constructor(
    private name: string,
    private size: number,
  ) {}


  getSize(): number {
    return this.size;
  }


  describe(): string {
    return \`\${this.name} (\${this.size} KB)\`;
  }
}


class FolderNode implements FileSystemNode {
  private children: FileSystemNode[] = [];


  constructor(private name: string) {}


  add(node: FileSystemNode): void {
    this.children.push(node);
  }


  getSize(): number {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }


  describe(): string {
    return \`\${this.name} folder with \${this.children.length} items\`;
  }
}


const root = new FolderNode("Documents");
root.add(new FileNode("resume.pdf", 120));
root.add(new FileNode("invoice.xlsx", 80));


const archive = new FolderNode("Archive");
archive.add(new FileNode("old-notes.txt", 30));
root.add(archive);


console.log(root.describe());
console.log(root.getSize());`,
    explanation:
      "The Angular example uses a composite file system model so nested folders and leaf files can be treated uniformly.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface FileSystemNode {
  getSize(): number;
  describe(): string;
}


class FileNode implements FileSystemNode {
  constructor(
    private name: string,
    private size: number,
  ) {}


  getSize(): number {
    return this.size;
  }


  describe(): string {
    return \`\${this.name} (\${this.size} KB)\`;
  }
}


class FolderNode implements FileSystemNode {
  private children: FileSystemNode[] = [];


  constructor(private name: string) {}


  add(node: FileSystemNode): void {
    this.children.push(node);
  }


  getSize(): number {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }


  describe(): string {
    return \`\${this.name} folder with \${this.children.length} items\`;
  }
}


function FileSystemPreview({ node }: { node: FileSystemNode }) {
  return (
    <div>
      <p>{node.describe()}</p>
      <p>{node.getSize()} KB</p>
    </div>
  );
}


export function App() {
  const root = useMemo(() => {
    const folder = new FolderNode("Documents");
    folder.add(new FileNode("resume.pdf", 120));
    folder.add(new FileNode("invoice.xlsx", 80));


    const archive = new FolderNode("Archive");
    archive.add(new FileNode("old-notes.txt", 30));
    folder.add(archive);


    return folder;
  }, []);


  return (
    <main>
      <h1>File System Composite</h1>
      <FileSystemPreview node={root} />
    </main>
  );
}`,
    explanation:
      "The React example treats folders and files through the same composite interface so the UI can render the hierarchy recursively.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface FileSystemNode {
  getSize(): number;
  describe(): string;
}


class FileNode implements FileSystemNode {
  constructor(
    private name: string,
    private size: number,
  ) {}


  getSize(): number {
    return this.size;
  }


  describe(): string {
    return \`\${this.name} (\${this.size} KB)\`;
  }
}


class FolderNode implements FileSystemNode {
  private children: FileSystemNode[] = [];


  constructor(private name: string) {}


  add(node: FileSystemNode): void {
    this.children.push(node);
  }


  getSize(): number {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }


  describe(): string {
    return \`\${this.name} folder with \${this.children.length} items\`;
  }
}


function FileSystemPreview({ node }: { node: FileSystemNode }) {
  return (
    <View>
      <Text>{node.describe()}</Text>
      <Text>{node.getSize()} KB</Text>
    </View>
  );
}


export function App() {
  const root = useMemo(() => {
    const folder = new FolderNode("Documents");
    folder.add(new FileNode("resume.pdf", 120));
    folder.add(new FileNode("invoice.xlsx", 80));


    const archive = new FolderNode("Archive");
    archive.add(new FileNode("old-notes.txt", 30));
    folder.add(archive);


    return folder;
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>File System Composite</Text>
        <FileSystemPreview node={root} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the same composite hierarchy to display a file tree with both files and nested folders.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;
using System.Linq;


public interface IFileSystemNode
{
    int GetSize();
    string Describe();
}


public class FileNode : IFileSystemNode
{
    private readonly string _name;
    private readonly int _size;


    public FileNode(string name, int size)
    {
        _name = name;
        _size = size;
    }


    public int GetSize()
    {
        return _size;
    }


    public string Describe()
    {
        return $"{_name} ({_size} KB)";
    }
}


public class FolderNode : IFileSystemNode
{
    private readonly string _name;
    private readonly List<IFileSystemNode> _children = new List<IFileSystemNode>();


    public FolderNode(string name)
    {
        _name = name;
    }


    public void Add(IFileSystemNode node)
    {
        _children.Add(node);
    }


    public int GetSize()
    {
        return _children.Sum(child => child.GetSize());
    }


    public string Describe()
    {
        return $"{_name} folder with {_children.Count} items";
    }
}


var root = new FolderNode("Documents");
root.Add(new FileNode("resume.pdf", 120));
root.Add(new FileNode("invoice.xlsx", 80));


var archive = new FolderNode("Archive");
archive.Add(new FileNode("old-notes.txt", 30));
root.Add(archive);


Console.WriteLine(root.Describe());
Console.WriteLine(root.GetSize());`,
    explanation:
      "The C# file system composite treats files and folders through one interface, which makes recursive tree operations simple.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;


public interface IFileSystemNode
{
    int GetSize();
    string Describe();
}


public class FileNode : IFileSystemNode
{
    private readonly string _name;
    private readonly int _size;


    public FileNode(string name, int size)
    {
        _name = name;
        _size = size;
    }


    public int GetSize()
    {
        return _size;
    }


    public string Describe()
    {
        return $"{_name} ({_size} KB)";
    }
}


public class FolderNode : IFileSystemNode
{
    private readonly string _name;
    private readonly List<IFileSystemNode> _children = new List<IFileSystemNode>();


    public FolderNode(string name)
    {
        _name = name;
    }


    public void Add(IFileSystemNode node)
    {
        _children.Add(node);
    }


    public int GetSize()
    {
        return _children.Sum(child => child.GetSize());
    }


    public string Describe()
    {
        return $"{_name} folder with {_children.Count} items";
    }
}


var services = new ServiceCollection();
services.AddSingleton(new FolderNode("Documents"));


var provider = services.BuildServiceProvider();
var root = provider.GetRequiredService<FolderNode>();
root.Add(new FileNode("resume.pdf", 120));
root.Add(new FileNode("invoice.xlsx", 80));


var archive = new FolderNode("Archive");
archive.Add(new FileNode("old-notes.txt", 30));
root.Add(archive);


Console.WriteLine(root.Describe());
Console.WriteLine(root.GetSize());`,
    explanation:
      "The .NET file system composite uses a tree of shared node types so folders and files can be traversed in the same way.",
  },
];

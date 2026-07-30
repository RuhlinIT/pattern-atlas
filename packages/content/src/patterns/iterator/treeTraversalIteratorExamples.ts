import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const treeTraversalIteratorExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class TreeNode {
  constructor(
    public value: string,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}


class InOrderIterator {
  private stack: TreeNode[] = [];


  constructor(root: TreeNode | null) {
    this.pushLeft(root);
  }


  private pushLeft(node: TreeNode | null): void {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }


  next(): string | null {
    if (!this.hasNext()) {
      return null;
    }


    const node = this.stack.pop()!;
    this.pushLeft(node.right);
    return node.value;
  }


  hasNext(): boolean {
    return this.stack.length > 0;
  }
}


const root = new TreeNode(
  "A",
  new TreeNode("B", new TreeNode("D"), new TreeNode("E")),
  new TreeNode("C", null, new TreeNode("F"))
);


const iterator = new InOrderIterator(root);


while (iterator.hasNext()) {
  console.log(iterator.next());
}`,
    explanation:
      "The tree traversal iterator performs an in-order walk without exposing the tree's internal node structure.",
  },
  {
    language: "Java",
    code: `class TreeNode {
    String value;
    TreeNode left;
    TreeNode right;


    TreeNode(String value, TreeNode left, TreeNode right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class InOrderIterator {
    private final java.util.Deque<TreeNode> stack = new java.util.ArrayDeque<>();


    public InOrderIterator(TreeNode root) {
        pushLeft(root);
    }


    private void pushLeft(TreeNode node) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
    }


    public String next() {
        if (!hasNext()) {
            return null;
        }


        TreeNode node = stack.pop();
        pushLeft(node.right);
        return node.value;
    }


    public boolean hasNext() {
        return !stack.isEmpty();
    }
}


TreeNode root = new TreeNode(
    "A",
    new TreeNode("B", new TreeNode("D"), new TreeNode("E")),
    new TreeNode("C", null, new TreeNode("F"))
);


InOrderIterator iterator = new InOrderIterator(root);


while (iterator.hasNext()) {
    System.out.println(iterator.next());
}`,
    explanation:
      "The Java example traverses a binary tree in order by keeping the traversal state inside the iterator.",
  },
  {
    language: "Python",
    code: `class TreeNode:
    def __init__(self, value: str, left: "TreeNode | None" = None, right: "TreeNode | None" = None) -> None:
        self.value = value
        self.left = left
        self.right = right


class InOrderIterator:
    def __init__(self, root: TreeNode | None) -> None:
        self.stack: list[TreeNode] = []
        self._push_left(root)


    def _push_left(self, node: TreeNode | None) -> None:
        while node:
            self.stack.append(node)
            node = node.left


    def next(self) -> str | None:
        if not self.has_next():
            return None


        node = self.stack.pop()
        self._push_left(node.right)
        return node.value


    def has_next(self) -> bool:
        return len(self.stack) > 0


root = TreeNode(
    "A",
    TreeNode("B", TreeNode("D"), TreeNode("E")),
    TreeNode("C", None, TreeNode("F"))
)


iterator = InOrderIterator(root)


while iterator.has_next():
    print(iterator.next())`,
    explanation:
      "The Python tree iterator stores the traversal path internally so the caller only sees the next node value.",
  },
  {
    language: "Angular",
    code: `class TreeNode {
  constructor(
    public value: string,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}


class InOrderIterator {
  private stack: TreeNode[] = [];


  constructor(root: TreeNode | null) {
    this.pushLeft(root);
  }


  private pushLeft(node: TreeNode | null): void {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }


  next(): string | null {
    if (!this.hasNext()) {
      return null;
    }


    const node = this.stack.pop()!;
    this.pushLeft(node.right);
    return node.value;
  }


  hasNext(): boolean {
    return this.stack.length > 0;
  }
}


const root = new TreeNode(
  "A",
  new TreeNode("B", new TreeNode("D"), new TreeNode("E")),
  new TreeNode("C", null, new TreeNode("F"))
);


const iterator = new InOrderIterator(root);


while (iterator.hasNext()) {
  console.log(iterator.next());
}`,
    explanation:
      "The Angular example provides a clean tree iterator that walks nodes in order without leaking tree internals.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


class TreeNode {
  constructor(
    public value: string,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}


class InOrderIterator {
  private stack: TreeNode[] = [];


  constructor(root: TreeNode | null) {
    this.pushLeft(root);
  }


  private pushLeft(node: TreeNode | null): void {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }


  next(): string | null {
    if (!this.hasNext()) {
      return null;
    }


    const node = this.stack.pop()!;
    this.pushLeft(node.right);
    return node.value;
  }


  hasNext(): boolean {
    return this.stack.length > 0;
  }
}


function TreeView({ iterator }: { iterator: InOrderIterator }) {
  const values: string[] = [];
  while (iterator.hasNext()) {
    const value = iterator.next();
    if (value) values.push(value);
  }


  return <p>{values.join(", ")}</p>;
}


export function App() {
  const iterator = useMemo(() => {
    const root = new TreeNode(
      "A",
      new TreeNode("B", new TreeNode("D"), new TreeNode("E")),
      new TreeNode("C", null, new TreeNode("F"))
    );
    return new InOrderIterator(root);
  }, []);


  return (
    <main>
      <h1>Tree Traversal Iterator</h1>
      <TreeView iterator={iterator} />
    </main>
  );
}`,
    explanation:
      "The React example uses an in-order iterator so the UI can render tree values without knowing how traversal works.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


class TreeNode {
  constructor(
    public value: string,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}


class InOrderIterator {
  private stack: TreeNode[] = [];


  constructor(root: TreeNode | null) {
    this.pushLeft(root);
  }


  private pushLeft(node: TreeNode | null): void {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }


  next(): string | null {
    if (!this.hasNext()) {
      return null;
    }


    const node = this.stack.pop()!;
    this.pushLeft(node.right);
    return node.value;
  }


  hasNext(): boolean {
    return this.stack.length > 0;
  }
}


function TreeView({ iterator }: { iterator: InOrderIterator }) {
  const values: string[] = [];
  while (iterator.hasNext()) {
    const value = iterator.next();
    if (value) values.push(value);
  }


  return (
    <View>
      <Text>{values.join(", ")}</Text>
    </View>
  );
}


export function App() {
  const iterator = useMemo(() => {
    const root = new TreeNode(
      "A",
      new TreeNode("B", new TreeNode("D"), new TreeNode("E")),
      new TreeNode("C", null, new TreeNode("F"))
    );
    return new InOrderIterator(root);
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Tree Traversal Iterator</Text>
        <TreeView iterator={iterator} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version walks the tree in order and presents the visited values in a simple mobile layout.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public class TreeNode
{
    public string Value { get; }
    public TreeNode Left { get; }
    public TreeNode Right { get; }


    public TreeNode(string value, TreeNode left = null, TreeNode right = null)
    {
        Value = value;
        Left = left;
        Right = right;
    }
}


public class InOrderIterator
{
    private readonly Stack<TreeNode> _stack = new Stack<TreeNode>();


    public InOrderIterator(TreeNode root)
    {
        PushLeft(root);
    }


    private void PushLeft(TreeNode node)
    {
        while (node != null)
        {
            _stack.Push(node);
            node = node.Left;
        }
    }


    public string Next()
    {
        if (!HasNext())
        {
            return null;
        }


        var node = _stack.Pop();
        PushLeft(node.Right);
        return node.Value;
    }


    public bool HasNext()
    {
        return _stack.Count > 0;
    }
}


var root = new TreeNode(
    "A",
    new TreeNode("B", new TreeNode("D"), new TreeNode("E")),
    new TreeNode("C", null, new TreeNode("F"))
);


var iterator = new InOrderIterator(root);


while (iterator.HasNext())
{
    Console.WriteLine(iterator.Next());
}`,
    explanation:
      "The C# example encapsulates in-order tree traversal in an iterator so client code does not need to know the tree's structure.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public class TreeNode
{
    public string Value { get; }
    public TreeNode Left { get; }
    public TreeNode Right { get; }


    public TreeNode(string value, TreeNode left = null, TreeNode right = null)
    {
        Value = value;
        Left = left;
        Right = right;
    }
}


public class InOrderIterator
{
    private readonly Stack<TreeNode> _stack = new Stack<TreeNode>();


    public InOrderIterator(TreeNode root)
    {
        PushLeft(root);
    }


    private void PushLeft(TreeNode node)
    {
        while (node != null)
        {
            _stack.Push(node);
            node = node.Left;
        }
    }


    public string Next()
    {
        if (!HasNext())
        {
            return null;
        }


        var node = _stack.Pop();
        PushLeft(node.Right);
        return node.Value;
    }


    public bool HasNext()
    {
        return _stack.Count > 0;
    }
}


var services = new ServiceCollection();
services.AddSingleton(new TreeNode(
    "A",
    new TreeNode("B", new TreeNode("D"), new TreeNode("E")),
    new TreeNode("C", null, new TreeNode("F"))
));


var provider = services.BuildServiceProvider();
var iterator = new InOrderIterator(provider.GetRequiredService<TreeNode>());


while (iterator.HasNext())
{
    Console.WriteLine(iterator.Next());
}`,
    explanation:
      "The .NET example uses dependency injection to provide the tree, then iterates through it without exposing traversal internals.",
  },
];

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const treeRenderingFlyweightExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface TreeType {
  render(x: number, y: number): string;
}


class SharedTreeType implements TreeType {
  constructor(
    private name: string,
    private color: string,
    private texture: string,
  ) {}


  render(x: number, y: number): string {
    return \`Tree \${this.name} at (\${x}, \${y}) with \${this.color} leaves and \${this.texture} texture\`;
  }
}


class TreeTypeFactory {
  private types = new Map<string, SharedTreeType>();


  getTreeType(name: string, color: string, texture: string): SharedTreeType {
    const key = \`\${name}|\${color}|\${texture}\`;
    if (!this.types.has(key)) {
      this.types.set(key, new SharedTreeType(name, color, texture));
    }


    return this.types.get(key)!;
  }
}


class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType,
  ) {}


  draw(): string {
    return this.type.render(this.x, this.y);
  }
}


const factory = new TreeTypeFactory();
const pine = factory.getTreeType("Pine", "green", "rough");
const oak = factory.getTreeType("Oak", "dark green", "bark");


const forest = [
  new Tree(10, 20, pine),
  new Tree(15, 22, pine),
  new Tree(30, 40, oak),
];


console.log(forest.map((tree) => tree.draw()).join("\\n"));`,
    explanation:
      "The tree flyweight shares tree type data like color and texture, while each tree instance stores only its position in the forest.",
  },
  {
    language: "Java",
    code: `interface TreeType {
    String render(int x, int y);
}


class SharedTreeType implements TreeType {
    private final String name;
    private final String color;
    private final String texture;


    public SharedTreeType(String name, String color, String texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }


    public String render(int x, int y) {
        return "Tree " + name + " at (" + x + ", " + y + ") with " + color + " leaves and " + texture + " texture";
    }
}


class TreeTypeFactory {
    private final java.util.Map<String, SharedTreeType> types = new java.util.HashMap<>();


    public SharedTreeType getTreeType(String name, String color, String texture) {
        String key = name + "|" + color + "|" + texture;
        if (!types.containsKey(key)) {
            types.put(key, new SharedTreeType(name, color, texture));
        }


        return types.get(key);
    }
}


class Tree {
    private final int x;
    private final int y;
    private final TreeType type;


    public Tree(int x, int y, TreeType type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }


    public String draw() {
        return type.render(x, y);
    }
}


TreeTypeFactory factory = new TreeTypeFactory();
SharedTreeType pine = factory.getTreeType("Pine", "green", "rough");
SharedTreeType oak = factory.getTreeType("Oak", "dark green", "bark");


java.util.List<Tree> forest = java.util.List.of(
    new Tree(10, 20, pine),
    new Tree(15, 22, pine),
    new Tree(30, 40, oak)
);


forest.forEach(tree -> System.out.println(tree.draw()));`,
    explanation:
      "The tree flyweight keeps shared tree characteristics in one reusable object, reducing duplication across a large forest.",
  },
  {
    language: "Python",
    code: `class SharedTreeType:
    def __init__(self, name: str, color: str, texture: str) -> None:
        self.name = name
        self.color = color
        self.texture = texture


    def render(self, x: int, y: int) -> str:
        return f"Tree {self.name} at ({x}, {y}) with {self.color} leaves and {self.texture} texture"


class TreeTypeFactory:
    def __init__(self) -> None:
        self.types: dict[str, SharedTreeType] = {}


    def get_tree_type(self, name: str, color: str, texture: str) -> SharedTreeType:
        key = f"{name}|{color}|{texture}"
        if key not in self.types:
            self.types[key] = SharedTreeType(name, color, texture)
        return self.types[key]


class Tree:
    def __init__(self, x: int, y: int, tree_type: SharedTreeType) -> None:
        self.x = x
        self.y = y
        self.tree_type = tree_type


    def draw(self) -> str:
        return self.tree_type.render(self.x, self.y)


factory = TreeTypeFactory()
pine = factory.get_tree_type("Pine", "green", "rough")
oak = factory.get_tree_type("Oak", "dark green", "bark")


forest = [
    Tree(10, 20, pine),
    Tree(15, 22, pine),
    Tree(30, 40, oak),
]


for tree in forest:
    print(tree.draw())`,
    explanation:
      "The tree flyweight shares the common tree model so each tree instance only stores coordinates and other unique context.",
  },
  {
    language: "Angular",
    code: `interface TreeType {
  render(x: number, y: number): string;
}


class SharedTreeType implements TreeType {
  constructor(
    private name: string,
    private color: string,
    private texture: string,
  ) {}


  render(x: number, y: number): string {
    return \`Tree \${this.name} at (\${x}, \${y}) with \${this.color} leaves and \${this.texture} texture\`;
  }
}


class TreeTypeFactory {
  private types = new Map<string, SharedTreeType>();


  getTreeType(name: string, color: string, texture: string): SharedTreeType {
    const key = \`\${name}|\${color}|\${texture}\`;
    if (!this.types.has(key)) {
      this.types.set(key, new SharedTreeType(name, color, texture));
    }


    return this.types.get(key)!;
  }
}


class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType,
  ) {}


  draw(): string {
    return this.type.render(this.x, this.y);
  }
}


const factory = new TreeTypeFactory();
const pine = factory.getTreeType("Pine", "green", "rough");
const oak = factory.getTreeType("Oak", "dark green", "bark");


const forest = [
  new Tree(10, 20, pine),
  new Tree(15, 22, pine),
  new Tree(30, 40, oak),
];


console.log(forest.map((tree) => tree.draw()).join("\\n"));`,
    explanation:
      "The Angular example uses flyweight tree types to keep the repeated rendering data shared across many tree instances.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface TreeType {
  render(x: number, y: number): string;
}


class SharedTreeType implements TreeType {
  constructor(
    private name: string,
    private color: string,
    private texture: string,
  ) {}


  render(x: number, y: number): string {
    return \`Tree \${this.name} at (\${x}, \${y}) with \${this.color} leaves and \${this.texture} texture\`;
  }
}


class TreeTypeFactory {
  private types = new Map<string, SharedTreeType>();


  getTreeType(name: string, color: string, texture: string): SharedTreeType {
    const key = \`\${name}|\${color}|\${texture}\`;
    if (!this.types.has(key)) {
      this.types.set(key, new SharedTreeType(name, color, texture));
    }


    return this.types.get(key)!;
  }
}


class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType,
  ) {}


  draw(): string {
    return this.type.render(this.x, this.y);
  }
}


function ForestPreview({ trees }: { trees: Tree[] }) {
  return <pre>{trees.map((tree) => tree.draw()).join("\\n")}</pre>;
}


export function App() {
  const trees = useMemo(() => {
    const factory = new TreeTypeFactory();
    const pine = factory.getTreeType("Pine", "green", "rough");
    const oak = factory.getTreeType("Oak", "dark green", "bark");


    return [
      new Tree(10, 20, pine),
      new Tree(15, 22, pine),
      new Tree(30, 40, oak),
    ];
  }, []);


  return (
    <main>
      <h1>Tree Rendering Flyweight</h1>
      <ForestPreview trees={trees} />
    </main>
  );
}`,
    explanation:
      "The React example shares tree type objects across many rendered trees so the forest stays lightweight.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface TreeType {
  render(x: number, y: number): string;
}


class SharedTreeType implements TreeType {
  constructor(
    private name: string,
    private color: string,
    private texture: string,
  ) {}


  render(x: number, y: number): string {
    return \`Tree \${this.name} at (\${x}, \${y}) with \${this.color} leaves and \${this.texture} texture\`;
  }
}


class TreeTypeFactory {
  private types = new Map<string, SharedTreeType>();


  getTreeType(name: string, color: string, texture: string): SharedTreeType {
    const key = \`\${name}|\${color}|\${texture}\`;
    if (!this.types.has(key)) {
      this.types.set(key, new SharedTreeType(name, color, texture));
    }


    return this.types.get(key)!;
  }
}


class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType,
  ) {}


  draw(): string {
    return this.type.render(this.x, this.y);
  }
}


function ForestPreview({ trees }: { trees: Tree[] }) {
  return (
    <View>
      {trees.map((tree, index) => (
        <Text key={index}>{tree.draw()}</Text>
      ))}
    </View>
  );
}


export function App() {
  const trees = useMemo(() => {
    const factory = new TreeTypeFactory();
    const pine = factory.getTreeType("Pine", "green", "rough");
    const oak = factory.getTreeType("Oak", "dark green", "bark");


    return [
      new Tree(10, 20, pine),
      new Tree(15, 22, pine),
      new Tree(30, 40, oak),
    ];
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Tree Rendering Flyweight</Text>
        <ForestPreview trees={trees} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example reuses shared tree types so many tree instances can be displayed without duplicating intrinsic state.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;
using System.Linq;


public interface ITreeType
{
    string Render(int x, int y);
}


public class SharedTreeType : ITreeType
{
    private readonly string _name;
    private readonly string _color;
    private readonly string _texture;


    public SharedTreeType(string name, string color, string texture)
    {
        _name = name;
        _color = color;
        _texture = texture;
    }


    public string Render(int x, int y)
    {
        return $"Tree {_name} at ({x}, {y}) with {_color} leaves and {_texture} texture";
    }
}


public class TreeTypeFactory
{
    private readonly Dictionary<string, SharedTreeType> _types = new Dictionary<string, SharedTreeType>();


    public SharedTreeType GetTreeType(string name, string color, string texture)
    {
        var key = $"{name}|{color}|{texture}";
        if (!_types.ContainsKey(key))
        {
            _types[key] = new SharedTreeType(name, color, texture);
        }


        return _types[key];
    }
}


public class Tree
{
    private readonly int _x;
    private readonly int _y;
    private readonly ITreeType _type;


    public Tree(int x, int y, ITreeType type)
    {
        _x = x;
        _y = y;
        _type = type;
    }


    public string Draw()
    {
        return _type.Render(_x, _y);
    }
}


var factory = new TreeTypeFactory();
var pine = factory.GetTreeType("Pine", "green", "rough");
var oak = factory.GetTreeType("Oak", "dark green", "bark");


var forest = new List<Tree>
{
    new Tree(10, 20, pine),
    new Tree(15, 22, pine),
    new Tree(30, 40, oak)
};


Console.WriteLine(string.Join(Environment.NewLine, forest.Select(tree => tree.Draw())));`,
    explanation:
      "The C# flyweight keeps shared tree characteristics in reusable objects so each tree instance only stores unique position data.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;


public interface ITreeType
{
    string Render(int x, int y);
}


public class SharedTreeType : ITreeType
{
    private readonly string _name;
    private readonly string _color;
    private readonly string _texture;


    public SharedTreeType(string name, string color, string texture)
    {
        _name = name;
        _color = color;
        _texture = texture;
    }


    public string Render(int x, int y)
    {
        return $"Tree {_name} at ({x}, {y}) with {_color} leaves and {_texture} texture";
    }
}


public class TreeTypeFactory
{
    private readonly Dictionary<string, SharedTreeType> _types = new Dictionary<string, SharedTreeType>();


    public SharedTreeType GetTreeType(string name, string color, string texture)
    {
        var key = $"{name}|{color}|{texture}";
        if (!_types.ContainsKey(key))
        {
            _types[key] = new SharedTreeType(name, color, texture);
        }


        return _types[key];
    }
}


public class Tree
{
    private readonly int _x;
    private readonly int _y;
    private readonly ITreeType _type;


    public Tree(int x, int y, ITreeType type)
    {
        _x = x;
        _y = y;
        _type = type;
    }


    public string Draw()
    {
        return _type.Render(_x, _y);
    }
}


var services = new ServiceCollection();
services.AddSingleton<TreeTypeFactory>();

var provider = services.BuildServiceProvider();
var factory = provider.GetRequiredService<TreeTypeFactory>();
var pine = factory.GetTreeType("Pine", "green", "rough");
var oak = factory.GetTreeType("Oak", "dark green", "bark");


var forest = new List<Tree>
{
    new Tree(10, 20, pine),
    new Tree(15, 22, pine),
    new Tree(30, 40, oak)
};


Console.WriteLine(string.Join(Environment.NewLine, forest.Select(tree => tree.Draw())));`,
    explanation:
      "The .NET example uses a shared tree type factory so rendering many trees only requires a few reusable flyweight objects.",
  },
];

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const gameTileFlyweightExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface TileType {
  render(x: number, y: number): string;
}


class SharedTileType implements TileType {
  constructor(
    private terrain: string,
    private movementCost: number,
    private texture: string,
  ) {}


  render(x: number, y: number): string {
    return \`Tile \${this.terrain} at (\${x}, \${y}) with cost \${this.movementCost} and \${this.texture} texture\`;
  }
}


class TileTypeFactory {
  private types = new Map<string, SharedTileType>();


  getTileType(terrain: string, movementCost: number, texture: string): SharedTileType {
    const key = \`\${terrain}|\${movementCost}|\${texture}\`;
    if (!this.types.has(key)) {
      this.types.set(key, new SharedTileType(terrain, movementCost, texture));
    }


    return this.types.get(key)!;
  }
}


class Tile {
  constructor(
    private x: number,
    private y: number,
    private type: TileType,
  ) {}


  draw(): string {
    return this.type.render(this.x, this.y);
  }
}


const factory = new TileTypeFactory();
const grass = factory.getTileType("Grass", 1, "green");
const water = factory.getTileType("Water", 5, "blue");


const map = [
  new Tile(0, 0, grass),
  new Tile(1, 0, grass),
  new Tile(2, 0, water),
];


console.log(map.map((tile) => tile.draw()).join("\\n"));`,
    explanation:
      "The game tile flyweight shares terrain data like movement cost and texture, while each tile stores only its coordinates.",
  },
  {
    language: "Java",
    code: `interface TileType {
    String render(int x, int y);
}


class SharedTileType implements TileType {
    private final String terrain;
    private final int movementCost;
    private final String texture;


    public SharedTileType(String terrain, int movementCost, String texture) {
        this.terrain = terrain;
        this.movementCost = movementCost;
        this.texture = texture;
    }


    public String render(int x, int y) {
        return "Tile " + terrain + " at (" + x + ", " + y + ") with cost " + movementCost + " and " + texture + " texture";
    }
}


class TileTypeFactory {
    private final java.util.Map<String, SharedTileType> types = new java.util.HashMap<>();


    public SharedTileType getTileType(String terrain, int movementCost, String texture) {
        String key = terrain + "|" + movementCost + "|" + texture;
        if (!types.containsKey(key)) {
            types.put(key, new SharedTileType(terrain, movementCost, texture));
        }


        return types.get(key);
    }
}


class Tile {
    private final int x;
    private final int y;
    private final TileType type;


    public Tile(int x, int y, TileType type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }


    public String draw() {
        return type.render(x, y);
    }
}


TileTypeFactory factory = new TileTypeFactory();
SharedTileType grass = factory.getTileType("Grass", 1, "green");
SharedTileType water = factory.getTileType("Water", 5, "blue");


java.util.List<Tile> map = java.util.List.of(
    new Tile(0, 0, grass),
    new Tile(1, 0, grass),
    new Tile(2, 0, water)
);


map.forEach(tile -> System.out.println(tile.draw()));`,
    explanation:
      "The game tile flyweight keeps shared terrain data in reusable objects, reducing duplication across a large map.",
  },
  {
    language: "Python",
    code: `class SharedTileType:
    def __init__(self, terrain: str, movement_cost: int, texture: str) -> None:
        self.terrain = terrain
        self.movement_cost = movement_cost
        self.texture = texture


    def render(self, x: int, y: int) -> str:
        return f"Tile {self.terrain} at ({x}, {y}) with cost {self.movement_cost} and {self.texture} texture"


class TileTypeFactory:
    def __init__(self) -> None:
        self.types: dict[str, SharedTileType] = {}


    def get_tile_type(self, terrain: str, movement_cost: int, texture: str) -> SharedTileType:
        key = f"{terrain}|{movement_cost}|{texture}"
        if key not in self.types:
            self.types[key] = SharedTileType(terrain, movement_cost, texture)
        return self.types[key]


class Tile:
    def __init__(self, x: int, y: int, tile_type: SharedTileType) -> None:
        self.x = x
        self.y = y
        self.tile_type = tile_type


    def draw(self) -> str:
        return self.tile_type.render(self.x, self.y)


factory = TileTypeFactory()
grass = factory.get_tile_type("Grass", 1, "green")
water = factory.get_tile_type("Water", 5, "blue")


map_tiles = [
    Tile(0, 0, grass),
    Tile(1, 0, grass),
    Tile(2, 0, water),
]


for tile in map_tiles:
    print(tile.draw())`,
    explanation:
      "The game tile flyweight reuses shared terrain definitions so a large map can be represented without duplicating tile metadata.",
  },
  {
    language: "Angular",
    code: `interface TileType {
  render(x: number, y: number): string;
}


class SharedTileType implements TileType {
  constructor(
    private terrain: string,
    private movementCost: number,
    private texture: string,
  ) {}


  render(x: number, y: number): string {
    return \`Tile \${this.terrain} at (\${x}, \${y}) with cost \${this.movementCost} and \${this.texture} texture\`;
  }
}


class TileTypeFactory {
  private types = new Map<string, SharedTileType>();


  getTileType(terrain: string, movementCost: number, texture: string): SharedTileType {
    const key = \`\${terrain}|\${movementCost}|\${texture}\`;
    if (!this.types.has(key)) {
      this.types.set(key, new SharedTileType(terrain, movementCost, texture));
    }


    return this.types.get(key)!;
  }
}


class Tile {
  constructor(
    private x: number,
    private y: number,
    private type: TileType,
  ) {}


  draw(): string {
    return this.type.render(this.x, this.y);
  }
}


const factory = new TileTypeFactory();
const grass = factory.getTileType("Grass", 1, "green");
const water = factory.getTileType("Water", 5, "blue");


const map = [
  new Tile(0, 0, grass),
  new Tile(1, 0, grass),
  new Tile(2, 0, water),
];


console.log(map.map((tile) => tile.draw()).join("\\n"));`,
    explanation:
      "The Angular example shares tile types so large maps can be built from a small number of reusable terrain flyweights.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface TileType {
  render(x: number, y: number): string;
}


class SharedTileType implements TileType {
  constructor(
    private terrain: string,
    private movementCost: number,
    private texture: string,
  ) {}


  render(x: number, y: number): string {
    return \`Tile \${this.terrain} at (\${x}, \${y}) with cost \${this.movementCost} and \${this.texture} texture\`;
  }
}


class TileTypeFactory {
  private types = new Map<string, SharedTileType>();


  getTileType(terrain: string, movementCost: number, texture: string): SharedTileType {
    const key = \`\${terrain}|\${movementCost}|\${texture}\`;
    if (!this.types.has(key)) {
      this.types.set(key, new SharedTileType(terrain, movementCost, texture));
    }


    return this.types.get(key)!;
  }
}


class Tile {
  constructor(
    private x: number,
    private y: number,
    private type: TileType,
  ) {}


  draw(): string {
    return this.type.render(this.x, this.y);
  }
}


function MapPreview({ tiles }: { tiles: Tile[] }) {
  return <pre>{tiles.map((tile) => tile.draw()).join("\\n")}</pre>;
}


export function App() {
  const tiles = useMemo(() => {
    const factory = new TileTypeFactory();
    const grass = factory.getTileType("Grass", 1, "green");
    const water = factory.getTileType("Water", 5, "blue");


    return [
      new Tile(0, 0, grass),
      new Tile(1, 0, grass),
      new Tile(2, 0, water),
    ];
  }, []);


  return (
    <main>
      <h1>Game Tile Flyweight</h1>
      <MapPreview tiles={tiles} />
    </main>
  );
}`,
    explanation:
      "The React example shares tile types across the map so the app can render many game tiles efficiently.",
  },

  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface TileType {
  render(x: number, y: number): string;
}


class SharedTileType implements TileType {
  constructor(
    private terrain: string,
    private movementCost: number,
    private texture: string,
  ) {}


  render(x: number, y: number): string {
    return \`Tile \${this.terrain} at (\${x}, \${y}) with cost \${this.movementCost} and \${this.texture} texture\`;
  }
}


class TileTypeFactory {
  private types = new Map<string, SharedTileType>();


  getTileType(terrain: string, movementCost: number, texture: string): SharedTileType {
    const key = \`\${terrain}|\${movementCost}|\${texture}\`;
    if (!this.types.has(key)) {
      this.types.set(key, new SharedTileType(terrain, movementCost, texture));
    }


    return this.types.get(key)!;
  }
}


class Tile {
  constructor(
    private x: number,
    private y: number,
    private type: TileType,
  ) {}


  draw(): string {
    return this.type.render(this.x, this.y);
  }
}


function MapPreview({ tiles }: { tiles: Tile[] }) {
  return (
    <View>
      {tiles.map((tile, index) => (
        <Text key={index}>{tile.draw()}</Text>
      ))}
    </View>
  );
}


export function App() {
  const tiles = useMemo(() => {
    const factory = new TileTypeFactory();
    const grass = factory.getTileType("Grass", 1, "green");
    const water = factory.getTileType("Water", 5, "blue");


    return [
      new Tile(0, 0, grass),
      new Tile(1, 0, grass),
      new Tile(2, 0, water),
    ];
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Game Tile Flyweight</Text>
        <MapPreview tiles={tiles} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example shares tile definitions so the map can render lots of tiles without duplicating terrain data.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;
using System.Linq;


public interface ITileType
{
    string Render(int x, int y);
}


public class SharedTileType : ITileType
{
    private readonly string _terrain;
    private readonly int _movementCost;
    private readonly string _texture;


    public SharedTileType(string terrain, int movementCost, string texture)
    {
        _terrain = terrain;
        _movementCost = movementCost;
        _texture = texture;
    }


    public string Render(int x, int y)
    {
        return $"Tile {_terrain} at ({x}, {y}) with cost {_movementCost} and {_texture} texture";
    }
}


public class TileTypeFactory
{
    private readonly Dictionary<string, SharedTileType> _types = new Dictionary<string, SharedTileType>();


    public SharedTileType GetTileType(string terrain, int movementCost, string texture)
    {
        var key = $"{terrain}|{movementCost}|{texture}";
        if (!_types.ContainsKey(key))
        {
            _types[key] = new SharedTileType(terrain, movementCost, texture);
        }


        return _types[key];
    }
}


public class Tile
{
    private readonly int _x;
    private readonly int _y;
    private readonly ITileType _type;


    public Tile(int x, int y, ITileType type)
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


var factory = new TileTypeFactory();
var grass = factory.GetTileType("Grass", 1, "green");
var water = factory.GetTileType("Water", 5, "blue");


var map = new List<Tile>
{
    new Tile(0, 0, grass),
    new Tile(1, 0, grass),
    new Tile(2, 0, water)
};


Console.WriteLine(string.Join(Environment.NewLine, map.Select(tile => tile.Draw())));`,
    explanation:
      "The C# example stores shared terrain data in flyweight objects, which lets the game represent large tile maps efficiently.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;


public interface ITileType
{
    string Render(int x, int y);
}


public class SharedTileType : ITileType
{
    private readonly string _terrain;
    private readonly int _movementCost;
    private readonly string _texture;


    public SharedTileType(string terrain, int movementCost, string texture)
    {
        _terrain = terrain;
        _movementCost = movementCost;
        _texture = texture;
    }


    public string Render(int x, int y)
    {
        return $"Tile {_terrain} at ({x}, {y}) with cost {_movementCost} and {_texture} texture";
    }
}


public class TileTypeFactory
{
    private readonly Dictionary<string, SharedTileType> _types = new Dictionary<string, SharedTileType>();


    public SharedTileType GetTileType(string terrain, int movementCost, string texture)
    {
        var key = $"{terrain}|{movementCost}|{texture}";
        if (!_types.ContainsKey(key))
        {
            _types[key] = new SharedTileType(terrain, movementCost, texture);
        }


        return _types[key];
    }
}


public class Tile
{
    private readonly int _x;
    private readonly int _y;
    private readonly ITileType _type;


    public Tile(int x, int y, ITileType type)
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
services.AddSingleton<TileTypeFactory>();

var provider = services.BuildServiceProvider();
var factory = provider.GetRequiredService<TileTypeFactory>();
var grass = factory.GetTileType("Grass", 1, "green");
var water = factory.GetTileType("Water", 5, "blue");


var map = new List<Tile>
{
    new Tile(0, 0, grass),
    new Tile(1, 0, grass),
    new Tile(2, 0, water)
};


Console.WriteLine(string.Join(Environment.NewLine, map.Select(tile => tile.Draw())));`,
    explanation:
      "The .NET version uses a shared tile type factory to keep terrain data centralized while each tile stores only its coordinates.",
  },
];

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const gameCharacterCloneExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface CharacterPrototype {
  clone(): CharacterPrototype;
  describe(): string;
}


class EnemyCharacter implements CharacterPrototype {
  constructor(
    public name: string,
    public health: number,
    public abilities: string[],
  ) {}


  clone(): CharacterPrototype {
    return new EnemyCharacter(this.name, this.health, [...this.abilities]);
  }


  describe(): string {
    return \`\${this.name} with \${this.health} health and abilities: \${this.abilities.join(", ")}\`;
  }
}


const baseEnemy = new EnemyCharacter("Guardian", 100, ["Slash", "Block"]);
const eliteEnemy = baseEnemy.clone() as EnemyCharacter;
eliteEnemy.name = "Elite Guardian";
eliteEnemy.health = 150;
eliteEnemy.abilities.push("Counter");


console.log(baseEnemy.describe());
console.log(eliteEnemy.describe());`,
    explanation:
      "The game character prototype lets the engine clone a base enemy and then tweak the copy for harder encounters.",
  },
  {
    language: "Java",
    code: `interface CharacterPrototype {
    CharacterPrototype clone();
    String describe();
}


class EnemyCharacter implements CharacterPrototype {
    private String name;
    private int health;
    private String[] abilities;


    public EnemyCharacter(String name, int health, String[] abilities) {
        this.name = name;
        this.health = health;
        this.abilities = abilities;
    }


    public CharacterPrototype clone() {
        return new EnemyCharacter(name, health, abilities.clone());
    }


    public String describe() {
        return name + " with " + health + " health and abilities: " + String.join(", ", abilities);
    }
}


EnemyCharacter baseEnemy = new EnemyCharacter("Guardian", 100, new String[] { "Slash", "Block" });
EnemyCharacter eliteEnemy = (EnemyCharacter) baseEnemy.clone();
eliteEnemy = new EnemyCharacter("Elite Guardian", 150, new String[] { "Slash", "Block", "Counter" });


System.out.println(baseEnemy.describe());
System.out.println(eliteEnemy.describe());`,
    explanation:
      "The character prototype lets the game build new enemies from a base configuration instead of redefining each stat block manually.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod
from copy import deepcopy


class CharacterPrototype(ABC):
    @abstractmethod
    def clone(self):
        pass


    @abstractmethod
    def describe(self) -> str:
        pass


class EnemyCharacter(CharacterPrototype):
    def __init__(self, name: str, health: int, abilities: list[str]) -> None:
        self.name = name
        self.health = health
        self.abilities = abilities


    def clone(self):
        return deepcopy(self)


    def describe(self) -> str:
        return f"{self.name} with {self.health} health and abilities: {', '.join(self.abilities)}"


base_enemy = EnemyCharacter("Guardian", 100, ["Slash", "Block"])
elite_enemy = base_enemy.clone()
elite_enemy.name = "Elite Guardian"
elite_enemy.health = 150
elite_enemy.abilities.append("Counter")


print(base_enemy.describe())
print(elite_enemy.describe())`,
    explanation:
      "The game character prototype makes it easy to duplicate an enemy template and then customize the clone for a different difficulty level.",
  },
  {
    language: "Angular",
    code: `interface CharacterPrototype {
  clone(): CharacterPrototype;
  describe(): string;
}


class EnemyCharacter implements CharacterPrototype {
  constructor(
    public name: string,
    public health: number,
    public abilities: string[],
  ) {}


  clone(): CharacterPrototype {
    return new EnemyCharacter(this.name, this.health, [...this.abilities]);
  }


  describe(): string {
    return \`\${this.name} with \${this.health} health and abilities: \${this.abilities.join(", ")}\`;
  }
}


const baseEnemy = new EnemyCharacter("Guardian", 100, ["Slash", "Block"]);
const eliteEnemy = baseEnemy.clone() as EnemyCharacter;
eliteEnemy.name = "Elite Guardian";
eliteEnemy.health = 150;
eliteEnemy.abilities.push("Counter");


console.log(baseEnemy.describe());
console.log(eliteEnemy.describe());`,
    explanation:
      "The Angular example clones a character prototype so the game can generate variant enemies that all start from the same base setup.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface CharacterPrototype {
  clone(): CharacterPrototype;
  describe(): string;
}


class EnemyCharacter implements CharacterPrototype {
  constructor(
    public name: string,
    public health: number,
    public abilities: string[],
  ) {}


  clone(): CharacterPrototype {
    return new EnemyCharacter(this.name, this.health, [...this.abilities]);
  }


  describe(): string {
    return \`\${this.name} with \${this.health} health and abilities: \${this.abilities.join(", ")}\`;
  }
}


function CharacterPreview({ character }: { character: CharacterPrototype }) {
  return <p>{character.describe()}</p>;
}


export function App() {
  const baseEnemy = useMemo(
    () => new EnemyCharacter("Guardian", 100, ["Slash", "Block"]),
    [],
  );


  const eliteEnemy = useMemo(() => {
    const cloned = baseEnemy.clone() as EnemyCharacter;
    cloned.name = "Elite Guardian";
    cloned.health = 150;
    cloned.abilities.push("Counter");
    return cloned;
  }, [baseEnemy]);


  return (
    <main>
      <h1>Game Character Clone</h1>
      <CharacterPreview character={baseEnemy} />
      <CharacterPreview character={eliteEnemy} />
    </main>
  );
}`,
    explanation:
      "The React example clones a base enemy prototype so the UI can display both the original and a customized variant without rebuilding the object graph.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface CharacterPrototype {
  clone(): CharacterPrototype;
  describe(): string;
}


class EnemyCharacter implements CharacterPrototype {
  constructor(
    public name: string,
    public health: number,
    public abilities: string[],
  ) {}


  clone(): CharacterPrototype {
    return new EnemyCharacter(this.name, this.health, [...this.abilities]);
  }


  describe(): string {
    return \`\${this.name} with \${this.health} health and abilities: \${this.abilities.join(", ")}\`;
  }
}


function CharacterPreview({ character }: { character: CharacterPrototype }) {
  return (
    <View>
      <Text>{character.describe()}</Text>
    </View>
  );
}


export function App() {
  const baseEnemy = useMemo(
    () => new EnemyCharacter("Guardian", 100, ["Slash", "Block"]),
    [],
  );


  const eliteEnemy = useMemo(() => {
    const cloned = baseEnemy.clone() as EnemyCharacter;
    cloned.name = "Elite Guardian";
    cloned.health = 150;
    cloned.abilities.push("Counter");
    return cloned;
  }, [baseEnemy]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Game Character Clone</Text>
        <CharacterPreview character={baseEnemy} />
        <CharacterPreview character={eliteEnemy} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version clones the same base character prototype, then presents the original and customized copy in a mobile layout.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public interface ICharacterPrototype
{
    ICharacterPrototype Clone();
    string Describe();
}


public class EnemyCharacter : ICharacterPrototype
{
    public string Name { get; set; }
    public int Health { get; set; }
    public List<string> Abilities { get; set; }


    public EnemyCharacter(string name, int health, List<string> abilities)
    {
        Name = name;
        Health = health;
        Abilities = abilities;
    }


    public ICharacterPrototype Clone()
    {
        return new EnemyCharacter(Name, Health, new List<string>(Abilities));
    }


    public string Describe()
    {
        return $"{Name} with {Health} health and abilities: {string.Join(", ", Abilities)}";
    }
}


var baseEnemy = new EnemyCharacter("Guardian", 100, new List<string> { "Slash", "Block" });
var eliteEnemy = (EnemyCharacter)baseEnemy.Clone();
eliteEnemy.Name = "Elite Guardian";
eliteEnemy.Health = 150;
eliteEnemy.Abilities.Add("Counter");


Console.WriteLine(baseEnemy.Describe());
Console.WriteLine(eliteEnemy.Describe());`,
    explanation:
      "The C# prototype pattern makes it easy to clone a reusable enemy template and then adjust the clone for a new encounter.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public interface ICharacterPrototype
{
    ICharacterPrototype Clone();
    string Describe();
}


public class EnemyCharacter : ICharacterPrototype
{
    public string Name { get; set; }
    public int Health { get; set; }
    public List<string> Abilities { get; set; }


    public EnemyCharacter(string name, int health, List<string> abilities)
    {
        Name = name;
        Health = health;
        Abilities = abilities;
    }


    public ICharacterPrototype Clone()
    {
        return new EnemyCharacter(Name, Health, new List<string>(Abilities));
    }


    public string Describe()
    {
        return $"{Name} with {Health} health and abilities: {string.Join(", ", Abilities)}";
    }
}


var services = new ServiceCollection();
services.AddSingleton(new EnemyCharacter("Guardian", 100, new List<string> { "Slash", "Block" }));

var provider = services.BuildServiceProvider();
var baseEnemy = provider.GetRequiredService<EnemyCharacter>();
var eliteEnemy = (EnemyCharacter)baseEnemy.Clone();
eliteEnemy.Name = "Elite Guardian";
eliteEnemy.Health = 150;
eliteEnemy.Abilities.Add("Counter");


Console.WriteLine(baseEnemy.Describe());
Console.WriteLine(eliteEnemy.Describe());`,
    explanation:
      "The .NET version registers a prototype in dependency injection so the app can clone and adapt a base character cleanly.",
  },
];

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const characterBuilderExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class Character {
  constructor(
    public name: string,
    public classType: string,
    public strength: number,
    public agility: number,
    public intelligence: number,
  ) {}
}

class CharacterBuilder {
  private name = "Unnamed";
  private classType = "Adventurer";
  private strength = 5;
  private agility = 5;
  private intelligence = 5;

  withName(name: string): this {
    this.name = name;
    return this;
  }

  withClassType(classType: string): this {
    this.classType = classType;
    return this;
  }

  withStrength(strength: number): this {
    this.strength = strength;
    return this;
  }

  withAgility(agility: number): this {
    this.agility = agility;
    return this;
  }

  withIntelligence(intelligence: number): this {
    this.intelligence = intelligence;
    return this;
  }

  build(): Character {
    return new Character(
      this.name,
      this.classType,
      this.strength,
      this.agility,
      this.intelligence,
    );
  }
}

const character = new CharacterBuilder()
  .withName("Aria")
  .withClassType("Mage")
  .withStrength(3)
  .withAgility(7)
  .withIntelligence(10)
  .build();

console.log(character);`,
    explanation:
      "The builder lets game or profile setup happen in a readable sequence, which is useful when many character traits are optional.",
  },
  {
    language: "Java",
    code: `class Character {
    public final String name;
    public final String classType;
    public final int strength;
    public final int agility;
    public final int intelligence;

    public Character(String name, String classType, int strength, int agility, int intelligence) {
        this.name = name;
        this.classType = classType;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
    }
}

class CharacterBuilder {
    private String name = "Unnamed";
    private String classType = "Adventurer";
    private int strength = 5;
    private int agility = 5;
    private int intelligence = 5;

    public CharacterBuilder withName(String name) {
        this.name = name;
        return this;
    }

    public CharacterBuilder withClassType(String classType) {
        this.classType = classType;
        return this;
    }

    public CharacterBuilder withStrength(int strength) {
        this.strength = strength;
        return this;
    }

    public CharacterBuilder withAgility(int agility) {
        this.agility = agility;
        return this;
    }

    public CharacterBuilder withIntelligence(int intelligence) {
        this.intelligence = intelligence;
        return this;
    }

    public Character build() {
        return new Character(name, classType, strength, agility, intelligence);
    }
}

Character character = new CharacterBuilder()
    .withName("Aria")
    .withClassType("Mage")
    .withStrength(3)
    .withAgility(7)
    .withIntelligence(10)
    .build();

System.out.println(character.name);`,
    explanation:
      "The character builder keeps object creation flexible by separating trait selection from object instantiation.",
  },
  {
    language: "Python",
    code: `class Character:
    def __init__(
        self,
        name: str,
        class_type: str,
        strength: int,
        agility: int,
        intelligence: int,
    ) -> None:
        self.name = name
        self.class_type = class_type
        self.strength = strength
        self.agility = agility
        self.intelligence = intelligence


class CharacterBuilder:
    def __init__(self) -> None:
        self.name = "Unnamed"
        self.class_type = "Adventurer"
        self.strength = 5
        self.agility = 5
        self.intelligence = 5

    def with_name(self, name: str) -> "CharacterBuilder":
        self.name = name
        return self

    def with_class_type(self, class_type: str) -> "CharacterBuilder":
        self.class_type = class_type
        return self

    def with_strength(self, strength: int) -> "CharacterBuilder":
        self.strength = strength
        return self

    def with_agility(self, agility: int) -> "CharacterBuilder":
        self.agility = agility
        return self

    def with_intelligence(self, intelligence: int) -> "CharacterBuilder":
        self.intelligence = intelligence
        return self

    def build(self) -> Character:
        return Character(
            self.name,
            self.class_type,
            self.strength,
            self.agility,
            self.intelligence,
        )


character = (
    CharacterBuilder()
    .with_name("Aria")
    .with_class_type("Mage")
    .with_strength(3)
    .with_agility(7)
    .with_intelligence(10)
    .build()
)

print(character.__dict__)`,
    explanation:
      "The builder gives a clear path for assembling a character with optional stats and class selection.",
  },
  {
    language: "Angular",
    code: `class Character {
  constructor(
    public name: string,
    public classType: string,
    public strength: number,
    public agility: number,
    public intelligence: number,
  ) {}
}

class CharacterBuilder {
  private name = "Unnamed";
  private classType = "Adventurer";
  private strength = 5;
  private agility = 5;
  private intelligence = 5;

  withName(name: string): this {
    this.name = name;
    return this;
  }

  withClassType(classType: string): this {
    this.classType = classType;
    return this;
  }

  withStrength(strength: number): this {
    this.strength = strength;
    return this;
  }

  withAgility(agility: number): this {
    this.agility = agility;
    return this;
  }

  withIntelligence(intelligence: number): this {
    this.intelligence = intelligence;
    return this;
  }

  build(): Character {
    return new Character(
      this.name,
      this.classType,
      this.strength,
      this.agility,
      this.intelligence,
    );
  }
}

const character = new CharacterBuilder()
  .withName("Aria")
  .withClassType("Mage")
  .withStrength(3)
  .withAgility(7)
  .withIntelligence(10)
  .build();

console.log(character);`,
    explanation:
      "The Angular example uses the same builder pattern, making character setup readable while keeping creation logic separate from the model itself.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

class Character {
  constructor(
    public name: string,
    public classType: string,
    public strength: number,
    public agility: number,
    public intelligence: number,
  ) {}
}

class CharacterBuilder {
  private name = "Unnamed";
  private classType = "Adventurer";
  private strength = 5;
  private agility = 5;
  private intelligence = 5;

  withName(name: string): this {
    this.name = name;
    return this;
  }

  withClassType(classType: string): this {
    this.classType = classType;
    return this;
  }

  withStrength(strength: number): this {
    this.strength = strength;
    return this;
  }

  withAgility(agility: number): this {
    this.agility = agility;
    return this;
  }

  withIntelligence(intelligence: number): this {
    this.intelligence = intelligence;
    return this;
  }

  build(): Character {
    return new Character(
      this.name,
      this.classType,
      this.strength,
      this.agility,
      this.intelligence,
    );
  }
}

function CharacterCard({ character }: { character: Character }) {
  return (
    <div>
      <p>{character.name}</p>
      <p>{character.classType}</p>
      <p>STR: {character.strength}</p>
      <p>AGI: {character.agility}</p>
      <p>INT: {character.intelligence}</p>
    </div>
  );
}

export function App() {
  const character = useMemo(
    () =>
      new CharacterBuilder()
        .withName("Aria")
        .withClassType("Mage")
        .withStrength(3)
        .withAgility(7)
        .withIntelligence(10)
        .build(),
    [],
  );

  return (
    <main>
      <h1>Character Builder</h1>
      <CharacterCard character={character} />
    </main>
  );
}`,
    explanation:
      "The React example builds the character before rendering it, which keeps optional setup out of the component tree.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";

class Character {
  constructor(
    public name: string,
    public classType: string,
    public strength: number,
    public agility: number,
    public intelligence: number,
  ) {}
}

class CharacterBuilder {
  private name = "Unnamed";
  private classType = "Adventurer";
  private strength = 5;
  private agility = 5;
  private intelligence = 5;

  withName(name: string): this {
    this.name = name;
    return this;
  }

  withClassType(classType: string): this {
    this.classType = classType;
    return this;
  }

  withStrength(strength: number): this {
    this.strength = strength;
    return this;
  }

  withAgility(agility: number): this {
    this.agility = agility;
    return this;
  }

  withIntelligence(intelligence: number): this {
    this.intelligence = intelligence;
    return this;
  }

  build(): Character {
    return new Character(
      this.name,
      this.classType,
      this.strength,
      this.agility,
      this.intelligence,
    );
  }
}

function CharacterCard({ character }: { character: Character }) {
  return (
    <View>
      <Text>{character.name}</Text>
      <Text>{character.classType}</Text>
      <Text>STR: {character.strength}</Text>
      <Text>AGI: {character.agility}</Text>
      <Text>INT: {character.intelligence}</Text>
    </View>
  );
}

export function App() {
  const character = useMemo(
    () =>
      new CharacterBuilder()
        .withName("Aria")
        .withClassType("Mage")
        .withStrength(3)
        .withAgility(7)
        .withIntelligence(10)
        .build(),
    [],
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Character Builder</Text>
        <CharacterCard character={character} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the builder to prepare the character object first, then displays it in a mobile-friendly layout.",
  },
  {
    language: "C#",
    code: `using System;

public class Character
{
    public string Name { get; }
    public string ClassType { get; }
    public int Strength { get; }
    public int Agility { get; }
    public int Intelligence { get; }

    public Character(string name, string classType, int strength, int agility, int intelligence)
    {
        Name = name;
        ClassType = classType;
        Strength = strength;
        Agility = agility;
        Intelligence = intelligence;
    }
}

public class CharacterBuilder
{
    private string _name = "Unnamed";
    private string _classType = "Adventurer";
    private int _strength = 5;
    private int _agility = 5;
    private int _intelligence = 5;

    public CharacterBuilder WithName(string name)
    {
        _name = name;
        return this;
    }

    public CharacterBuilder WithClassType(string classType)
    {
        _classType = classType;
        return this;
    }

    public CharacterBuilder WithStrength(int strength)
    {
        _strength = strength;
        return this;
    }

    public CharacterBuilder WithAgility(int agility)
    {
        _agility = agility;
        return this;
    }

    public CharacterBuilder WithIntelligence(int intelligence)
    {
        _intelligence = intelligence;
        return this;
    }

    public Character Build()
    {
        return new Character(_name, _classType, _strength, _agility, _intelligence);
    }
}

var character = new CharacterBuilder()
    .WithName("Aria")
    .WithClassType("Mage")
    .WithStrength(3)
    .WithAgility(7)
    .WithIntelligence(10)
    .Build();

Console.WriteLine(character.Name);`,
    explanation:
      "The C# character builder separates object setup from the final constructed result, which keeps creation code easy to read and maintain.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public class Character
{
    public string Name { get; }
    public string ClassType { get; }
    public int Strength { get; }
    public int Agility { get; }
    public int Intelligence { get; }

    public Character(string name, string classType, int strength, int agility, int intelligence)
    {
        Name = name;
        ClassType = classType;
        Strength = strength;
        Agility = agility;
        Intelligence = intelligence;
    }
}

public class CharacterBuilder
{
    private string _name = "Unnamed";
    private string _classType = "Adventurer";
    private int _strength = 5;
    private int _agility = 5;
    private int _intelligence = 5;

    public CharacterBuilder WithName(string name)
    {
        _name = name;
        return this;
    }

    public CharacterBuilder WithClassType(string classType)
    {
        _classType = classType;
        return this;
    }

    public CharacterBuilder WithStrength(int strength)
    {
        _strength = strength;
        return this;
    }

    public CharacterBuilder WithAgility(int agility)
    {
        _agility = agility;
        return this;
    }

    public CharacterBuilder WithIntelligence(int intelligence)
    {
        _intelligence = intelligence;
        return this;
    }

    public Character Build()
    {
        return new Character(_name, _classType, _strength, _agility, _intelligence);
    }
}

var services = new ServiceCollection();
services.AddSingleton<CharacterBuilder>();
var provider = services.BuildServiceProvider();

var character = provider.GetRequiredService<CharacterBuilder>()
    .WithName("Aria")
    .WithClassType("Mage")
    .WithStrength(3)
    .WithAgility(7)
    .WithIntelligence(10)
    .Build();

Console.WriteLine(character.Name);`,
    explanation:
      "The .NET version shows the same builder pattern with dependency injection available, so character creation stays readable and flexible.",
  },
]

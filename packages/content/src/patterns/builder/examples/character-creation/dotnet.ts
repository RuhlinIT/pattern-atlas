import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: "Character creation",
  code: `public class Stats
{
    public int Strength { get; set; }
    public int Agility { get; set; }
    public int Intelligence { get; set; }
}

public class Character
{
    public string Name { get; set; } = "";
    public string ClassName { get; set; } = "";
    public Stats Stats { get; set; } = new Stats();
}

public class CharacterBuilder
{
    private readonly Character character = new Character();

    public CharacterBuilder Name(string name)
    {
        character.Name = name;
        return this;
    }

    public CharacterBuilder ClassName(string className)
    {
        character.ClassName = className;
        return this;
    }

    public CharacterBuilder Strength(int value)
    {
        character.Stats.Strength = value;
        return this;
    }

    public CharacterBuilder Agility(int value)
    {
        character.Stats.Agility = value;
        return this;
    }

    public CharacterBuilder Intelligence(int value)
    {
        character.Stats.Intelligence = value;
        return this;
    }

    public Character Build() => character;
}

var hero = new CharacterBuilder()
    .Name("Astra")
    .ClassName("Mage")
    .Strength(4)
    .Agility(7)
    .Intelligence(12)
    .Build();`,
  explanation:
    "Builder is useful for character creation when the final object is built from several related steps.",
};
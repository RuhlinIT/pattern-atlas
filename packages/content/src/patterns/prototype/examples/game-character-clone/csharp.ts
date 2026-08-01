import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Game character clone",
  code: "using System;\nusing System.Collections.Generic;\n\n\npublic interface ICharacterPrototype\n{\n    ICharacterPrototype Clone();\n    string Describe();\n}\n\n\npublic class EnemyCharacter : ICharacterPrototype\n{\n    public string Name { get; set; }\n    public int Health { get; set; }\n    public List<string> Abilities { get; set; }\n\n\n    public EnemyCharacter(string name, int health, List<string> abilities)\n    {\n        Name = name;\n        Health = health;\n        Abilities = abilities;\n    }\n\n\n    public ICharacterPrototype Clone()\n    {\n        return new EnemyCharacter(Name, Health, new List<string>(Abilities));\n    }\n\n\n    public string Describe()\n    {\n        return $\"{Name} with {Health} health and abilities: {string.Join(\", \", Abilities)}\";\n    }\n}\n\n\nvar baseEnemy = new EnemyCharacter(\"Guardian\", 100, new List<string> { \"Slash\", \"Block\" });\nvar eliteEnemy = (EnemyCharacter)baseEnemy.Clone();\neliteEnemy.Name = \"Elite Guardian\";\neliteEnemy.Health = 150;\neliteEnemy.Abilities.Add(\"Counter\");\n\n\nConsole.WriteLine(baseEnemy.Describe());\nConsole.WriteLine(eliteEnemy.Describe());",
  explanation: "The C# prototype pattern makes it easy to clone a reusable enemy template and then adjust the clone for a new encounter.",
};

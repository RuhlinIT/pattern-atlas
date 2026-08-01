import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Game character clone",
  code: "interface CharacterPrototype {\n  clone(): CharacterPrototype;\n  describe(): string;\n}\n\n\nclass EnemyCharacter implements CharacterPrototype {\n  constructor(\n    public name: string,\n    public health: number,\n    public abilities: string[],\n  ) {}\n\n\n  clone(): CharacterPrototype {\n    return new EnemyCharacter(this.name, this.health, [...this.abilities]);\n  }\n\n\n  describe(): string {\n    return `${this.name} with ${this.health} health and abilities: ${this.abilities.join(\", \")}`;\n  }\n}\n\n\nconst baseEnemy = new EnemyCharacter(\"Guardian\", 100, [\"Slash\", \"Block\"]);\nconst eliteEnemy = baseEnemy.clone() as EnemyCharacter;\neliteEnemy.name = \"Elite Guardian\";\neliteEnemy.health = 150;\neliteEnemy.abilities.push(\"Counter\");\n\n\nconsole.log(baseEnemy.describe());\nconsole.log(eliteEnemy.describe());",
  explanation: "The game character prototype lets the engine clone a base enemy and then tweak the copy for harder encounters.",
};

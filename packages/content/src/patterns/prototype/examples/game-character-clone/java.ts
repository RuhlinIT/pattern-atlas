import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Game character clone",
  code: "interface CharacterPrototype {\n    CharacterPrototype clone();\n    String describe();\n}\n\n\nclass EnemyCharacter implements CharacterPrototype {\n    private String name;\n    private int health;\n    private String[] abilities;\n\n\n    public EnemyCharacter(String name, int health, String[] abilities) {\n        this.name = name;\n        this.health = health;\n        this.abilities = abilities;\n    }\n\n\n    public CharacterPrototype clone() {\n        return new EnemyCharacter(name, health, abilities.clone());\n    }\n\n\n    public String describe() {\n        return name + \" with \" + health + \" health and abilities: \" + String.join(\", \", abilities);\n    }\n}\n\n\nEnemyCharacter baseEnemy = new EnemyCharacter(\"Guardian\", 100, new String[] { \"Slash\", \"Block\" });\nEnemyCharacter eliteEnemy = (EnemyCharacter) baseEnemy.clone();\neliteEnemy = new EnemyCharacter(\"Elite Guardian\", 150, new String[] { \"Slash\", \"Block\", \"Counter\" });\n\n\nSystem.out.println(baseEnemy.describe());\nSystem.out.println(eliteEnemy.describe());",
  explanation: "The character prototype lets the game build new enemies from a base configuration instead of redefining each stat block manually.",
};

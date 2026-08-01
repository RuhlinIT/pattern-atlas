import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Character creation",
  code: "class Character {\n  constructor(\n    public name: string,\n    public classType: string,\n    public strength: number,\n    public agility: number,\n    public intelligence: number,\n  ) {}\n}\n\nclass CharacterBuilder {\n  private name = \"Unnamed\";\n  private classType = \"Adventurer\";\n  private strength = 5;\n  private agility = 5;\n  private intelligence = 5;\n\n  withName(name: string): this {\n    this.name = name;\n    return this;\n  }\n\n  withClassType(classType: string): this {\n    this.classType = classType;\n    return this;\n  }\n\n  withStrength(strength: number): this {\n    this.strength = strength;\n    return this;\n  }\n\n  withAgility(agility: number): this {\n    this.agility = agility;\n    return this;\n  }\n\n  withIntelligence(intelligence: number): this {\n    this.intelligence = intelligence;\n    return this;\n  }\n\n  build(): Character {\n    return new Character(\n      this.name,\n      this.classType,\n      this.strength,\n      this.agility,\n      this.intelligence,\n    );\n  }\n}\n\nconst character = new CharacterBuilder()\n  .withName(\"Aria\")\n  .withClassType(\"Mage\")\n  .withStrength(3)\n  .withAgility(7)\n  .withIntelligence(10)\n  .build();\n\nconsole.log(character);",
  explanation: "The builder lets game or profile setup happen in a readable sequence, which is useful when many character traits are optional.",
};

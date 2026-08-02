import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Character creation",
  code: `type Character = {
  name: string;
  class: string;
  stats: {
    strength: number;
    agility: number;
    intelligence: number;
  };
};

class CharacterBuilder {
  private character: Character = {
    name: "",
    class: "",
    stats: {
      strength: 0,
      agility: 0,
      intelligence: 0,
    },
  };

  name(name: string) {
    this.character.name = name;
    return this;
  }

  class(className: string) {
    this.character.class = className;
    return this;
  }

  strength(value: number) {
    this.character.stats.strength = value;
    return this;
  }

  agility(value: number) {
    this.character.stats.agility = value;
    return this;
  }

  intelligence(value: number) {
    this.character.stats.intelligence = value;
    return this;
  }

  build() {
    return this.character;
  }
}

const hero = new CharacterBuilder()
  .name("Astra")
  .class("Mage")
  .strength(4)
  .agility(7)
  .intelligence(12)
  .build();`,
  explanation:
    "Builder fits character creation because the object is assembled in steps and may have optional or class-dependent fields.",
};
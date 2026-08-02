import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Character creation",
  code: `class Stats {
    int strength;
    int agility;
    int intelligence;
}

class Character {
    String name;
    String className;
    Stats stats = new Stats();
}

class CharacterBuilder {
    private final Character character = new Character();

    CharacterBuilder name(String name) {
        character.name = name;
        return this;
    }

    CharacterBuilder className(String className) {
        character.className = className;
        return this;
    }

    CharacterBuilder strength(int value) {
        character.stats.strength = value;
        return this;
    }

    CharacterBuilder agility(int value) {
        character.stats.agility = value;
        return this;
    }

    CharacterBuilder intelligence(int value) {
        character.stats.intelligence = value;
        return this;
    }

    Character build() {
        return character;
    }
}

Character hero = new CharacterBuilder()
    .name("Astra")
    .className("Mage")
    .strength(4)
    .agility(7)
    .intelligence(12)
    .build();`,
  explanation:
    "Builder is a good fit when a game character is assembled step by step and different classes need different stat combinations.",
};
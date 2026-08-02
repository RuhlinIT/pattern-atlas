import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Character creation",
  code: `from dataclasses import dataclass, field

@dataclass
class Stats:
    strength: int = 0
    agility: int = 0
    intelligence: int = 0

@dataclass
class Character:
    name: str = ""
    class_name: str = ""
    stats: Stats = field(default_factory=Stats)

class CharacterBuilder:
    def __init__(self):
        self._character = Character()

    def name(self, name: str):
        self._character.name = name
        return self

    def class_name(self, class_name: str):
        self._character.class_name = class_name
        return self

    def strength(self, value: int):
        self._character.stats.strength = value
        return self

    def agility(self, value: int):
        self._character.stats.agility = value
        return self

    def intelligence(self, value: int):
        self._character.stats.intelligence = value
        return self

    def build(self):
        return self._character

hero = (
    CharacterBuilder()
    .name("Astra")
    .class_name("Mage")
    .strength(4)
    .agility(7)
    .intelligence(12)
    .build()
)`,
  explanation:
    "Builder fits character creation because the character can be assembled in controlled steps with class-specific stats.",
};
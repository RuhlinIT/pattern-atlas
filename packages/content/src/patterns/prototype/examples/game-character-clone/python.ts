import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Game character clone",
  code: "from abc import ABC, abstractmethod\nfrom copy import deepcopy\n\n\nclass CharacterPrototype(ABC):\n    @abstractmethod\n    def clone(self):\n        pass\n\n\n    @abstractmethod\n    def describe(self) -> str:\n        pass\n\n\nclass EnemyCharacter(CharacterPrototype):\n    def __init__(self, name: str, health: int, abilities: list[str]) -> None:\n        self.name = name\n        self.health = health\n        self.abilities = abilities\n\n\n    def clone(self):\n        return deepcopy(self)\n\n\n    def describe(self) -> str:\n        return f\"{self.name} with {self.health} health and abilities: {', '.join(self.abilities)}\"\n\n\nbase_enemy = EnemyCharacter(\"Guardian\", 100, [\"Slash\", \"Block\"])\nelite_enemy = base_enemy.clone()\nelite_enemy.name = \"Elite Guardian\"\nelite_enemy.health = 150\nelite_enemy.abilities.append(\"Counter\")\n\n\nprint(base_enemy.describe())\nprint(elite_enemy.describe())",
  explanation: "The game character prototype makes it easy to duplicate an enemy template and then customize the clone for a different difficulty level.",
};

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python = {
  language: "python",
  code: `from abc import ABC, abstractmethod


class Terrain(ABC):
    @abstractmethod
    def describe(self) -> str:
        pass


class Enemy(ABC):
    @abstractmethod
    def spawn(self) -> str:
        pass


class Prop(ABC):
    @abstractmethod
    def place(self) -> str:
        pass


class EnvironmentFactory(ABC):
    @abstractmethod
    def create_terrain(self) -> Terrain:
        pass

    @abstractmethod
    def create_enemy(self) -> Enemy:
        pass

    @abstractmethod
    def create_prop(self) -> Prop:
        pass


class ForestTerrain(Terrain):
    def describe(self) -> str:
        return "Loaded mossy forest terrain"


class ForestEnemy(Enemy):
    def spawn(self) -> str:
        return "Spawned wolf pack in the forest"


class ForestProp(Prop):
    def place(self) -> str:
        return "Placed fallen logs and ferns"


class DesertTerrain(Terrain):
    def describe(self) -> str:
        return "Loaded sandy desert terrain"


class DesertEnemy(Enemy):
    def spawn(self) -> str:
        return "Spawned scorpion swarm in the desert"


class DesertProp(Prop):
    def place(self) -> str:
        return "Placed dunes and sandstone ruins"


class ForestEnvironmentFactory(EnvironmentFactory):
    def create_terrain(self) -> Terrain:
        return ForestTerrain()

    def create_enemy(self) -> Enemy:
        return ForestEnemy()

    def create_prop(self) -> Prop:
        return ForestProp()


class DesertEnvironmentFactory(EnvironmentFactory):
    def create_terrain(self) -> Terrain:
        return DesertTerrain()

    def create_enemy(self) -> Enemy:
        return DesertEnemy()

    def create_prop(self) -> Prop:
        return DesertProp()


class LevelBuilder:
    def __init__(self, factory: EnvironmentFactory) -> None:
        self.factory = factory

    def build_level(self) -> str:
        terrain = self.factory.create_terrain()
        enemy = self.factory.create_enemy()
        prop = self.factory.create_prop()

        return "\\n".join([
            terrain.describe(),
            enemy.spawn(),
            prop.place(),
        ])


factory: EnvironmentFactory = ForestEnvironmentFactory()
level = LevelBuilder(factory)

print(level.build_level())
`,
} satisfies PatternLanguageExample;
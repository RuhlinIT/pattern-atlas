import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `interface Terrain {
  describe(): string;
}

interface Enemy {
  spawn(): string;
}

interface Prop {
  place(): string;
}

interface EnvironmentFactory {
  createTerrain(): Terrain;
  createEnemy(): Enemy;
  createProp(): Prop;
}

class ForestTerrain implements Terrain {
  describe(): string {
    return "Loaded mossy forest terrain";
  }
}

class ForestEnemy implements Enemy {
  spawn(): string {
    return "Spawned wolf pack in the forest";
  }
}

class ForestProp implements Prop {
  place(): string {
    return "Placed fallen logs and ferns";
  }
}

class DesertTerrain implements Terrain {
  describe(): string {
    return "Loaded sandy desert terrain";
  }
}

class DesertEnemy implements Enemy {
  spawn(): string {
    return "Spawned scorpion swarm in the desert";
  }
}

class DesertProp implements Prop {
  place(): string {
    return "Placed dunes and sandstone ruins";
  }
}

class ForestEnvironmentFactory implements EnvironmentFactory {
  createTerrain(): Terrain {
    return new ForestTerrain();
  }

  createEnemy(): Enemy {
    return new ForestEnemy();
  }

  createProp(): Prop {
    return new ForestProp();
  }
}

class DesertEnvironmentFactory implements EnvironmentFactory {
  createTerrain(): Terrain {
    return new DesertTerrain();
  }

  createEnemy(): Enemy {
    return new DesertEnemy();
  }

  createProp(): Prop {
    return new DesertProp();
  }
}

class LevelBuilder {
  constructor(private readonly factory: EnvironmentFactory) {}

  buildLevel(): string {
    const terrain = this.factory.createTerrain();
    const enemy = this.factory.createEnemy();
    const prop = this.factory.createProp();

    return [
      terrain.describe(),
      enemy.spawn(),
      prop.place(),
    ].join("\\n");
  }
}

const factory: EnvironmentFactory = new ForestEnvironmentFactory();
const level = new LevelBuilder(factory);

console.log(level.buildLevel());
`,
} satisfies PatternLanguageExample;
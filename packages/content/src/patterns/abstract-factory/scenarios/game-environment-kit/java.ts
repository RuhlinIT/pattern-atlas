import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java = {
  language: "java",
  code: `interface Terrain {
  String describe();
}

interface Enemy {
  String spawn();
}

interface Prop {
  String place();
}

interface EnvironmentFactory {
  Terrain createTerrain();
  Enemy createEnemy();
  Prop createProp();
}

class ForestTerrain implements Terrain {
  @Override
  public String describe() {
    return "Loaded mossy forest terrain";
  }
}

class ForestEnemy implements Enemy {
  @Override
  public String spawn() {
    return "Spawned wolf pack in the forest";
  }
}

class ForestProp implements Prop {
  @Override
  public String place() {
    return "Placed fallen logs and ferns";
  }
}

class DesertTerrain implements Terrain {
  @Override
  public String describe() {
    return "Loaded sandy desert terrain";
  }
}

class DesertEnemy implements Enemy {
  @Override
  public String spawn() {
    return "Spawned scorpion swarm in the desert";
  }
}

class DesertProp implements Prop {
  @Override
  public String place() {
    return "Placed dunes and sandstone ruins";
  }
}

class ForestEnvironmentFactory implements EnvironmentFactory {
  @Override
  public Terrain createTerrain() {
    return new ForestTerrain();
  }

  @Override
  public Enemy createEnemy() {
    return new ForestEnemy();
  }

  @Override
  public Prop createProp() {
    return new ForestProp();
  }
}

class DesertEnvironmentFactory implements EnvironmentFactory {
  @Override
  public Terrain createTerrain() {
    return new DesertTerrain();
  }

  @Override
  public Enemy createEnemy() {
    return new DesertEnemy();
  }

  @Override
  public Prop createProp() {
    return new DesertProp();
  }
}

class LevelBuilder {
  private final EnvironmentFactory factory;

  LevelBuilder(EnvironmentFactory factory) {
    this.factory = factory;
  }

  String buildLevel() {
    Terrain terrain = factory.createTerrain();
    Enemy enemy = factory.createEnemy();
    Prop prop = factory.createProp();

    return String.join(
      "\\n",
      terrain.describe(),
      enemy.spawn(),
      prop.place()
    );
  }
}

public class Main {
  public static void main(String[] args) {
    EnvironmentFactory factory = new ForestEnvironmentFactory();
    LevelBuilder level = new LevelBuilder(factory);

    System.out.println(level.buildLevel());
  }
}
`,
} satisfies PatternLanguageExample;
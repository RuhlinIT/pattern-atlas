import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Modern office setup",
  code: `interface Desk {
  sitAt(): string;
}

interface Chair {
  sitOn(): string;
}

interface Cabinet {
  store(): string;
}

interface OfficeFactory {
  createDesk(): Desk;
  createChair(): Chair;
  createCabinet(): Cabinet;
}

class ModernDesk implements Desk {
  sitAt(): string {
    return "Sitting at a glass desk";
  }
}

class ModernChair implements Chair {
  sitOn(): string {
    return "Sitting on an ergonomic mesh chair";
  }
}

class ModernCabinet implements Cabinet {
  store(): string {
    return "Storing files in a minimalist cabinet";
  }
}

class ClassicDesk implements Desk {
  sitAt(): string {
    return "Sitting at a wooden desk";
  }
}

class ClassicChair implements Chair {
  sitOn(): string {
    return "Sitting on a cushioned wooden chair";
  }
}

class ClassicCabinet implements Cabinet {
  store(): string {
    return "Storing files in a traditional cabinet";
  }
}

class ModernOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return new ModernDesk();
  }

  createChair(): Chair {
    return new ModernChair();
  }

  createCabinet(): Cabinet {
    return new ModernCabinet();
  }
}

class ClassicOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return new ClassicDesk();
  }

  createChair(): Chair {
    return new ClassicChair();
  }

  createCabinet(): Cabinet {
    return new ClassicCabinet();
  }
}

class OfficeSetup {
  constructor(private factory: OfficeFactory) {}

  describe(): string {
    const desk = this.factory.createDesk();
    const chair = this.factory.createChair();
    const cabinet = this.factory.createCabinet();

    return [desk.sitAt(), chair.sitOn(), cabinet.store()].join(" | ");
  }
}

const office = new OfficeSetup(new ModernOfficeFactory());
console.log(office.describe());`,
  explanation:
    "The Angular example uses a factory abstraction to keep a matching office furniture family together while still allowing the application to switch styles cleanly.",
};

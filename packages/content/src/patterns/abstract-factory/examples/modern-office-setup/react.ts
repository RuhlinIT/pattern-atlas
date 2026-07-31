import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Modern office setup",
  code: `import React, { useMemo } from "react";

interface Desk {
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

function OfficePreview({ factory }: { factory: OfficeFactory }) {
  const desk = factory.createDesk();
  const chair = factory.createChair();
  const cabinet = factory.createCabinet();

  return <p>{[desk.sitAt(), chair.sitOn(), cabinet.store()].join(" | ")}</p>;
}

export function App() {
  const factory = useMemo(() => new ModernOfficeFactory(), []);

  return (
    <main>
      <h1>Modern Office Setup</h1>
      <OfficePreview factory={factory} />
    </main>
  );
}`,
  explanation:
    "The React example uses the abstract factory to build a consistent office furniture family before rendering the result in the UI.",
};

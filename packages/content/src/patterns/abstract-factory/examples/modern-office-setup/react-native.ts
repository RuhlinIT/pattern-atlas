import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "Modern office setup",
  code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";

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

  return (
    <View>
      <Text>{desk.sitAt()}</Text>
      <Text>{chair.sitOn()}</Text>
      <Text>{cabinet.store()}</Text>
    </View>
  );
}

export function App() {
  const factory = useMemo(() => new ModernOfficeFactory(), []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Modern Office Setup</Text>
        <OfficePreview factory={factory} />
      </View>
    </SafeAreaView>
  );
}`,
  explanation:
    "The React Native version uses the same abstract factory to create a matching office furniture family, then displays the selected setup in a mobile-friendly layout.",
};

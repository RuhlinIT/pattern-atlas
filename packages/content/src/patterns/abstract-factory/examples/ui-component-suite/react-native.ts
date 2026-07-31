import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "UI component suite",
  code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";

interface Button {
  render(): string;
}

interface Input {
  render(): string;
}

interface Card {
  render(): string;
}

interface UIComponentFactory {
  createButton(): Button;
  createInput(): Input;
  createCard(): Card;
}

class LightButton implements Button {
  render(): string {
    return "Rendering a light theme button";
  }
}

class LightInput implements Input {
  render(): string {
    return "Rendering a light theme input";
  }
}

class LightCard implements Card {
  render(): string {
    return "Rendering a light theme card";
  }
}

class DarkButton implements Button {
  render(): string {
    return "Rendering a dark theme button";
  }
}

class DarkInput implements Input {
  render(): string {
    return "Rendering a dark theme input";
  }
}

class DarkCard implements Card {
  render(): string {
    return "Rendering a dark theme card";
  }
}

class LightUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new LightButton();
  }

  createInput(): Input {
    return new LightInput();
  }

  createCard(): Card {
    return new LightCard();
  }
}

class DarkUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createInput(): Input {
    return new DarkInput();
  }

  createCard(): Card {
    return new DarkCard();
  }
}

function ThemePreview({ factory }: { factory: UIComponentFactory }) {
  const button = factory.createButton();
  const input = factory.createInput();
  const card = factory.createCard();

  return (
    <View>
      <Text>{button.render()}</Text>
      <Text>{input.render()}</Text>
      <Text>{card.render()}</Text>
    </View>
  );
}

export function App() {
  const factory = useMemo(() => new DarkUIComponentFactory(), []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Dark Theme Preview</Text>
        <ThemePreview factory={factory} />
      </View>
    </SafeAreaView>
  );
}`,
  explanation:
    "The React Native version uses the same abstract factory to create a matching set of theme components and display them in a mobile layout.",
};

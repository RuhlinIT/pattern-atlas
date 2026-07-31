import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "UI component suite",
  code: `import React, { useMemo } from "react";

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

  return <p>{[button.render(), input.render(), card.render()].join(" | ")}</p>;
}

export function App() {
  const factory = useMemo(() => new DarkUIComponentFactory(), []);

  return (
    <main>
      <h1>Dark Theme Preview</h1>
      <ThemePreview factory={factory} />
    </main>
  );
}`,
  explanation:
    "The React example uses an abstract factory to assemble themed controls before rendering the UI, so the component family stays visually aligned.",
};

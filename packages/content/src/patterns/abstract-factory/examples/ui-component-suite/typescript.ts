import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "UI component suite",
  code: `interface Button {
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

class Dashboard {
  constructor(private factory: UIComponentFactory) {}

  render(): string {
    const button = this.factory.createButton();
    const input = this.factory.createInput();
    const card = this.factory.createCard();

    return [button.render(), input.render(), card.render()].join(" | ");
  }
}

const dashboard = new Dashboard(new DarkUIComponentFactory());
console.log(dashboard.render());`,
  explanation:
    "The UI component factory creates a consistent family of themed controls, so the application can switch between light and dark designs without changing component construction logic.",
};

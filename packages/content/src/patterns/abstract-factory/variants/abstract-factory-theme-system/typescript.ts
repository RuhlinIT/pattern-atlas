import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `interface ThemeButton {
  render(): string;
}

interface ThemeCheckbox {
  render(): string;
}

interface ThemeModal {
  render(): string;
}

interface ThemeFactory {
  createButton(): ThemeButton;
  createCheckbox(): ThemeCheckbox;
  createModal(): ThemeModal;
}

class LightButton implements ThemeButton {
  render(): string {
    return "Rendered light button";
  }
}

class LightCheckbox implements ThemeCheckbox {
  render(): string {
    return "Rendered light checkbox";
  }
}

class LightModal implements ThemeModal {
  render(): string {
    return "Rendered light modal";
  }
}

class DarkButton implements ThemeButton {
  render(): string {
    return "Rendered dark button";
  }
}

class DarkCheckbox implements ThemeCheckbox {
  render(): string {
    return "Rendered dark checkbox";
  }
}

class DarkModal implements ThemeModal {
  render(): string {
    return "Rendered dark modal";
  }
}

class LightThemeFactory implements ThemeFactory {
  createButton(): ThemeButton {
    return new LightButton();
  }

  createCheckbox(): ThemeCheckbox {
    return new LightCheckbox();
  }

  createModal(): ThemeModal {
    return new LightModal();
  }
}

class DarkThemeFactory implements ThemeFactory {
  createButton(): ThemeButton {
    return new DarkButton();
  }

  createCheckbox(): ThemeCheckbox {
    return new DarkCheckbox();
  }

  createModal(): ThemeModal {
    return new DarkModal();
  }
}

class SettingsScreen {
  private readonly button: ThemeButton;
  private readonly checkbox: ThemeCheckbox;
  private readonly modal: ThemeModal;

  constructor(factory: ThemeFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
    this.modal = factory.createModal();
  }

  render(): string {
    return [
      this.button.render(),
      this.checkbox.render(),
      this.modal.render(),
    ].join("\\n");
  }
}

const factory: ThemeFactory = new DarkThemeFactory();
const screen = new SettingsScreen(factory);

console.log(screen.render());
`,
} satisfies PatternLanguageExample;
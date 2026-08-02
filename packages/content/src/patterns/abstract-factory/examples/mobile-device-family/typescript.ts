import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Mobile device family",
  code: `interface Button {
  render(): string;
}

interface Modal {
  open(): string;
}

interface MobileUIFactory {
  createButton(): Button;
  createModal(): Modal;
}

class IOSButton implements Button {
  render() {
    return "Render iOS button";
  }
}

class IOSModal implements Modal {
  open() {
    return "Open iOS modal";
  }
}

class IOSFactory implements MobileUIFactory {
  createButton() {
    return new IOSButton();
  }

  createModal() {
    return new IOSModal();
  }
}

class AndroidButton implements Button {
  render() {
    return "Render Android button";
  }
}

class AndroidModal implements Modal {
  open() {
    return "Open Android modal";
  }
}

class AndroidFactory implements MobileUIFactory {
  createButton() {
    return new AndroidButton();
  }

  createModal() {
    return new AndroidModal();
  }
}
`,
  explanation:
    "The factory creates a coordinated family of mobile UI objects so iOS and Android implementations stay consistent.",
};
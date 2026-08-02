import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Mobile device family",
  code: `interface Button {
    String render();
}

interface Modal {
    String open();
}

interface MobileUIFactory {
    Button createButton();
    Modal createModal();
}

class IOSButton implements Button {
    public String render() {
        return "Render iOS button";
    }
}

class IOSModal implements Modal {
    public String open() {
        return "Open iOS modal";
    }
}

class IOSFactory implements MobileUIFactory {
    public Button createButton() {
        return new IOSButton();
    }

    public Modal createModal() {
        return new IOSModal();
    }
}

class AndroidButton implements Button {
    public String render() {
        return "Render Android button";
    }
}

class AndroidModal implements Modal {
    public String open() {
        return "Open Android modal";
    }
}

class AndroidFactory implements MobileUIFactory {
    public Button createButton() {
        return new AndroidButton();
    }

    public Modal createModal() {
        return new AndroidModal();
    }
}
`,
  explanation:
    "Java keeps the mobile product family consistent by letting each concrete factory produce matching objects.",
};
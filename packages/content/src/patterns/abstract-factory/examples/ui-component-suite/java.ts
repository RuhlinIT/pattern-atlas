import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "UI component suite",
  code: `interface Button {
    String render();
}

interface Input {
    String render();
}

interface Card {
    String render();
}

interface UIComponentFactory {
    Button createButton();
    Input createInput();
    Card createCard();
}

class LightButton implements Button {
    public String render() {
        return "Rendering a light theme button";
    }
}

class LightInput implements Input {
    public String render() {
        return "Rendering a light theme input";
    }
}

class LightCard implements Card {
    public String render() {
        return "Rendering a light theme card";
    }
}

class DarkButton implements Button {
    public String render() {
        return "Rendering a dark theme button";
    }
}

class DarkInput implements Input {
    public String render() {
        return "Rendering a dark theme input";
    }
}

class DarkCard implements Card {
    public String render() {
        return "Rendering a dark theme card";
    }
}

class LightUIComponentFactory implements UIComponentFactory {
    public Button createButton() {
        return new LightButton();
    }

    public Input createInput() {
        return new LightInput();
    }

    public Card createCard() {
        return new LightCard();
    }
}

class DarkUIComponentFactory implements UIComponentFactory {
    public Button createButton() {
        return new DarkButton();
    }

    public Input createInput() {
        return new DarkInput();
    }

    public Card createCard() {
        return new DarkCard();
    }
}

class Dashboard {
    private final UIComponentFactory factory;

    public Dashboard(UIComponentFactory factory) {
        this.factory = factory;
    }

    public String render() {
        Button button = factory.createButton();
        Input input = factory.createInput();
        Card card = factory.createCard();

        return button.render() + " | " + input.render() + " | " + card.render();
    }
}

Dashboard dashboard = new Dashboard(new DarkUIComponentFactory());
System.out.println(dashboard.render());`,
  explanation:
    "The abstract factory ensures all UI controls come from the same theme family, which keeps the interface visually consistent.",
};

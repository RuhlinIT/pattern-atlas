import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "UI component suite",
  code: `from abc import ABC, abstractmethod

class Button(ABC):
    @abstractmethod
    def render(self) -> str:
        pass

class Input(ABC):
    @abstractmethod
    def render(self) -> str:
        pass

class Card(ABC):
    @abstractmethod
    def render(self) -> str:
        pass

class UIComponentFactory(ABC):
    @abstractmethod
    def create_button(self) -> Button:
        pass

    @abstractmethod
    def create_input(self) -> Input:
        pass

    @abstractmethod
    def create_card(self) -> Card:
        pass

class LightButton(Button):
    def render(self) -> str:
        return "Rendering a light theme button"

class LightInput(Input):
    def render(self) -> str:
        return "Rendering a light theme input"

class LightCard(Card):
    def render(self) -> str:
        return "Rendering a light theme card"

class DarkButton(Button):
    def render(self) -> str:
        return "Rendering a dark theme button"

class DarkInput(Input):
    def render(self) -> str:
        return "Rendering a dark theme input"

class DarkCard(Card):
    def render(self) -> str:
        return "Rendering a dark theme card"

class LightUIComponentFactory(UIComponentFactory):
    def create_button(self) -> Button:
        return LightButton()

    def create_input(self) -> Input:
        return LightInput()

    def create_card(self) -> Card:
        return LightCard()

class DarkUIComponentFactory(UIComponentFactory):
    def create_button(self) -> Button:
        return DarkButton()

    def create_input(self) -> Input:
        return DarkInput()

    def create_card(self) -> Card:
        return DarkCard()

class Dashboard:
    def __init__(self, factory: UIComponentFactory) -> None:
        self.factory = factory

    def render(self) -> str:
        button = self.factory.create_button()
        input = self.factory.create_input()
        card = self.factory.create_card()
        return " | ".join([button.render(), input.render(), card.render()])

dashboard = Dashboard(DarkUIComponentFactory())
print(dashboard.render())`,
  explanation:
    "The UI component factory creates a related family of controls, which lets the theme change without affecting the dashboard logic.",
};

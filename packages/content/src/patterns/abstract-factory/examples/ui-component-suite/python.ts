import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Python UI factory",
  code: `class Button:
    def __init__(self, theme):
        self.theme = theme

class Input:
    def __init__(self, theme):
        self.theme = theme

class Card:
    def __init__(self, theme):
        self.theme = theme

class Alert:
    def __init__(self, theme):
        self.theme = theme

class ThemeFactory:
    def __init__(self, theme):
        self.theme = theme

    def create_button(self):
        return Button(self.theme)

    def create_input(self):
        return Input(self.theme)

    def create_card(self):
        return Card(self.theme)

    def create_alert(self):
        return Alert(self.theme)`,
  explanation:
    "Python can generate the full UI family from one theme-aware factory.",
};
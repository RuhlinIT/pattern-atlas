import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Mobile device family",
  code: `class Button:
    def render(self):
        raise NotImplementedError()

class Modal:
    def open(self):
        raise NotImplementedError()

class MobileUIFactory:
    def create_button(self):
        raise NotImplementedError()

    def create_modal(self):
        raise NotImplementedError()

class IOSButton(Button):
    def render(self):
        return "Render iOS button"

class IOSModal(Modal):
    def open(self):
        return "Open iOS modal"

class IOSFactory(MobileUIFactory):
    def create_button(self):
        return IOSButton()

    def create_modal(self):
        return IOSModal()

class AndroidButton(Button):
    def render(self):
        return "Render Android button"

class AndroidModal(Modal):
    def open(self):
        return "Open Android modal"

class AndroidFactory(MobileUIFactory):
    def create_button(self):
        return AndroidButton()

    def create_modal(self):
        return AndroidModal()
`,
  explanation:
    "Python keeps the abstract factory simple while still showing a family of platform-specific mobile objects.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Password validation chain",
  code: `class PasswordValidator:
    def __init__(self):
        self._next = None

    def set_next(self, handler):
        self._next = handler
        return handler

    def handle(self, password):
        if self._next:
            return self._next.handle(password)
        return None

class LengthValidator(PasswordValidator):
    def handle(self, password):
        if len(password) < 12:
            return "Password must be at least 12 characters."
        return super().handle(password)

class NumberValidator(PasswordValidator):
    def handle(self, password):
        if not any(ch.isdigit() for ch in password):
            return "Password must include a number."
        return super().handle(password)

class SpecialCharValidator(PasswordValidator):
    def handle(self, password):
        if not any(ch in "!@#$%^&*" for ch in password):
            return "Password must include a special character."
        return super().handle(password)

chain = LengthValidator()
chain.set_next(NumberValidator()).set_next(SpecialCharValidator())
result = chain.handle("example")`,
  explanation:
    "A chain lets each password rule check the input independently before passing it along.",
};
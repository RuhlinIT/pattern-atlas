import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Notification delivery",
  code: "from abc import ABC, abstractmethod\n\nclass Notifier(ABC):\n    @abstractmethod\n    def send(self, message: str) -> None:\n        pass\n\nclass EmailNotifier(Notifier):\n    def send(self, message: str) -> None:\n        print(f\"Email sent: {message}\")\n\nclass NotifierDecorator(Notifier):\n    def __init__(self, wrappee: Notifier) -> None:\n        self.wrappee = wrappee\n\n    def send(self, message: str) -> None:\n        self.wrappee.send(message)\n\nclass LoggingNotifier(NotifierDecorator):\n    def send(self, message: str) -> None:\n        print(\"Logging notification\")\n        super().send(message)\n\nclass RetryNotifier(NotifierDecorator):\n    def send(self, message: str) -> None:\n        print(\"Retry policy applied\")\n        super().send(message)\n\nnotifier = RetryNotifier(LoggingNotifier(EmailNotifier()))\nnotifier.send(\"Deployment completed\")",
  explanation: "The core notifier remains simple while logging and retry are added as interchangeable wrapper layers.",
};

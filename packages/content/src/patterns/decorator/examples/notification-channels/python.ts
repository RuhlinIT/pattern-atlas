import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Notification channels",
  code: "from abc import ABC, abstractmethod\n\nclass Notifier(ABC):\n    @abstractmethod\n    def send(self, message: str) -> str:\n        pass\n\nclass BasicNotifier(Notifier):\n    def send(self, message: str) -> str:\n        return f\"In-app: {message}\"\n\nclass NotifierDecorator(Notifier):\n    def __init__(self, notifier: Notifier) -> None:\n        self.notifier = notifier\n\n    def send(self, message: str) -> str:\n        return self.notifier.send(message)\n\nclass EmailDecorator(NotifierDecorator):\n    def send(self, message: str) -> str:\n        return f\"{super().send(message)} | Email: {message}\"\n\nclass SmsDecorator(NotifierDecorator):\n    def send(self, message: str) -> str:\n        return f\"{super().send(message)} | SMS: {message}\"\n\nclass SlackDecorator(NotifierDecorator):\n    def send(self, message: str) -> str:\n        return f\"{super().send(message)} | Slack: {message}\"\n\nnotifier = SlackDecorator(\n    SmsDecorator(\n        EmailDecorator(BasicNotifier())\n    )\n)\n\nprint(notifier.send(\"Build completed\"))",
  explanation: "The same message can be delivered through multiple channels by composing decorators around a single base notifier.",
};

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Notification delivery",
  code: "from abc import ABC, abstractmethod\n\nclass NotificationStrategy(ABC):\n    @abstractmethod\n    def send(self, message: str) -> None:\n        pass\n\nclass EmailNotification(NotificationStrategy):\n    def send(self, message: str) -> None:\n        print(f\"Email: {message}\")\n\nclass SmsNotification(NotificationStrategy):\n    def send(self, message: str) -> None:\n        print(f\"SMS: {message}\")\n\nclass NotificationService:\n    def __init__(self, strategy: NotificationStrategy) -> None:\n        self.strategy = strategy\n\n    def notify(self, message: str) -> None:\n        self.strategy.send(message)\n\nnotifier = NotificationService(SmsNotification())\nnotifier.notify(\"Deployment completed\")",
  explanation: "The caller delegates channel behavior to the selected strategy, which keeps notification expansion simpler and safer.",
};

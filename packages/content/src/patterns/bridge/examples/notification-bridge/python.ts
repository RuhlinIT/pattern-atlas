import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Notification bridge",
  code: "from abc import ABC, abstractmethod\n\n\nclass NotificationSender(ABC):\n    @abstractmethod\n    def send(self, message: str) -> str:\n        pass\n\n\nclass EmailSender(NotificationSender):\n    def send(self, message: str) -> str:\n        return f\"Email sent: {message}\"\n\n\nclass SmsSender(NotificationSender):\n    def send(self, message: str) -> str:\n        return f\"SMS sent: {message}\"\n\n\nclass Notification(ABC):\n    def __init__(self, sender: NotificationSender) -> None:\n        self.sender = sender\n\n\n    @abstractmethod\n    def notify(self, message: str) -> str:\n        pass\n\n\nclass AlertNotification(Notification):\n    def notify(self, message: str) -> str:\n        return self.sender.send(f\"ALERT: {message}\")\n\n\nalert = AlertNotification(EmailSender())\nprint(alert.notify(\"Server is down\"))",
  explanation: "The notification bridge separates the alert abstraction from the sender implementation so either delivery channel can be used.",
};

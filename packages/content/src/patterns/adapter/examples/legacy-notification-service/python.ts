import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Legacy notification service",
  code: "from abc import ABC, abstractmethod\n\nclass Notifier(ABC):\n    @abstractmethod\n    def send(self, message: str) -> None:\n        pass\n\nclass LegacyMessenger:\n    def deliver(self, payload: dict[str, str]) -> None:\n        print(f\"Legacy messenger sent: {payload['body']}\")\n\nclass NotificationAdapter(Notifier):\n    def __init__(self, messenger: LegacyMessenger) -> None:\n        self.messenger = messenger\n\n    def send(self, message: str) -> None:\n        self.messenger.deliver({\"body\": message})\n\nclass AlertService:\n    def __init__(self, notifier: Notifier) -> None:\n        self.notifier = notifier\n\n    def trigger_alert(self, message: str) -> None:\n        self.notifier.send(message)\n\nnotifier = NotificationAdapter(LegacyMessenger())\nalerts = AlertService(notifier)\nalerts.trigger_alert(\"CPU threshold exceeded\")",
  explanation: "The adapter makes an incompatible legacy messaging API look like the notifier interface expected by the rest of the application.",
};

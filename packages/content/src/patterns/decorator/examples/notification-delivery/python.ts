import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Notification delivery",
  code: `class EmailNotifier:
    def send(self, message):
        print(f"email: {message}")

class LoggingNotifier:
    def __init__(self, wrapped):
        self.wrapped = wrapped

    def send(self, message):
        print(f"log: {message}")
        self.wrapped.send(message)

notifier = LoggingNotifier(EmailNotifier())
notifier.send("Hello")`,
  explanation: "Layer retry and logging around a base notifier while keeping the same send interface.",
};
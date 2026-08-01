import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Legacy notification adapter",
  code: "class LegacyNotificationAdapter:\n    def __init__(self, legacy_service):\n        self.legacy_service = legacy_service\n\n\n    def send(self, message):\n        self.legacy_service.deliver({\n            \"recipient\": message[\"to\"],\n            \"headline\": message[\"subject\"],\n            \"content\": message[\"body\"],\n        })",
  explanation:
    "The adapter keeps the rest of the codebase independent from the old notification system.",
};
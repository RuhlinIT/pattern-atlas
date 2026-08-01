import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Logger singleton",
  code: "class Logger:\n    _instance = None\n\n\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\n\n    def log(self, message: str) -> None:\n        print(f\"LOG: {message}\")\n\n\nlogger_a = Logger()\nlogger_b = Logger()\n\n\nlogger_a.log(\"Application started\")\nprint(logger_a is logger_b)",
  explanation: "The logger singleton keeps logging centralized so the application does not create separate logger objects in each module.",
};

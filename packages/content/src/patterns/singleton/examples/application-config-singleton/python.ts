import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Application config singleton",
  code: "class AppConfig:\n    _instance = None\n\n\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n            cls._instance.app_name = \"Atlas App\"\n            cls._instance.environment = \"production\"\n        return cls._instance\n\n\nconfig_a = AppConfig()\nconfig_b = AppConfig()\n\n\nprint(config_a is config_b)\nprint(config_a.app_name)",
  explanation: "The config singleton provides one shared settings instance so the app does not repeatedly rebuild configuration state.",
};

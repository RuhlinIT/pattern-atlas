import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Application config singleton",
  code: "class AppConfig {\n  private static instance: AppConfig;\n\n\n  private constructor(\n    public readonly appName: string,\n    public readonly environment: string,\n  ) {}\n\n\n  static getInstance(): AppConfig {\n    if (!AppConfig.instance) {\n      AppConfig.instance = new AppConfig(\"Atlas App\", \"production\");\n    }\n\n\n    return AppConfig.instance;\n  }\n}\n\n\nconst configA = AppConfig.getInstance();\nconst configB = AppConfig.getInstance();\n\n\nconsole.log(configA === configB);\nconsole.log(configA.appName);",
  explanation: "The Angular example uses a singleton configuration object so the same settings are shared consistently across the app.",
};

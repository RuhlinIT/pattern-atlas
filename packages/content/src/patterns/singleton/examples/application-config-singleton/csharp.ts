import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Application config singleton",
  code: "using System;\n\n\npublic class AppConfig\n{\n    private static AppConfig _instance;\n\n\n    public string AppName { get; }\n    public string Environment { get; }\n\n\n    private AppConfig(string appName, string environment)\n    {\n        AppName = appName;\n        Environment = environment;\n    }\n\n\n    public static AppConfig GetInstance()\n    {\n        if (_instance == null)\n        {\n            _instance = new AppConfig(\"Atlas App\", \"production\");\n        }\n\n\n        return _instance;\n    }\n}\n\n\nvar configA = AppConfig.GetInstance();\nvar configB = AppConfig.GetInstance();\n\n\nConsole.WriteLine(configA == configB);\nConsole.WriteLine(configA.AppName);",
  explanation: "The config singleton ensures the application only has one shared settings instance at a time.",
};

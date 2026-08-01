import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: "Application config singleton",
  code: "using System;\nusing Microsoft.Extensions.DependencyInjection;\n\n\npublic class AppConfig\n{\n    private static AppConfig _instance;\n\n\n    public string AppName { get; }\n    public string Environment { get; }\n\n\n    private AppConfig(string appName, string environment)\n    {\n        AppName = appName;\n        Environment = environment;\n    }\n\n\n    public static AppConfig GetInstance()\n    {\n        if (_instance == null)\n        {\n            _instance = new AppConfig(\"Atlas App\", \"production\");\n        }\n\n\n        return _instance;\n    }\n}\n\n\nvar services = new ServiceCollection();\nservices.AddSingleton(AppConfig.GetInstance());\n\n\nvar provider = services.BuildServiceProvider();\nvar configA = provider.GetRequiredService<AppConfig>();\nvar configB = provider.GetRequiredService<AppConfig>();\n\n\nConsole.WriteLine(configA == configB);\nConsole.WriteLine(configA.AppName);",
  explanation: "The .NET example uses one shared configuration object so the runtime resolves the same instance wherever it is needed.",
};

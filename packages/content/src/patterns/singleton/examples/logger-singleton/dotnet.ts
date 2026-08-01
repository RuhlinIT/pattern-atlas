import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: "Logger singleton",
  code: "using System;\nusing Microsoft.Extensions.DependencyInjection;\n\n\npublic class Logger\n{\n    private static Logger _instance;\n\n\n    private Logger() {}\n\n\n    public static Logger GetInstance()\n    {\n        if (_instance == null)\n        {\n            _instance = new Logger();\n        }\n\n\n        return _instance;\n    }\n\n\n    public void Log(string message)\n    {\n        Console.WriteLine($\"LOG: {message}\");\n    }\n}\n\n\nvar services = new ServiceCollection();\nservices.AddSingleton(Logger.GetInstance());\n\n\nvar provider = services.BuildServiceProvider();\nvar loggerA = provider.GetRequiredService<Logger>();\nvar loggerB = provider.GetRequiredService<Logger>();\n\n\nloggerA.Log(\"Application started\");\nConsole.WriteLine(loggerA == loggerB);",
  explanation: "The .NET example resolves a single logger instance from dependency injection so the whole application shares one logging pipeline.",
};

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Logger singleton",
  code: "using System;\n\n\npublic class Logger\n{\n    private static Logger _instance;\n\n\n    private Logger() {}\n\n\n    public static Logger GetInstance()\n    {\n        if (_instance == null)\n        {\n            _instance = new Logger();\n        }\n\n\n        return _instance;\n    }\n\n\n    public void Log(string message)\n    {\n        Console.WriteLine($\"LOG: {message}\");\n    }\n}\n\n\nvar loggerA = Logger.GetInstance();\nvar loggerB = Logger.GetInstance();\n\n\nloggerA.Log(\"Application started\");\nConsole.WriteLine(loggerA == loggerB);",
  explanation: "The logger singleton centralizes output so one shared instance handles all log messages.",
};

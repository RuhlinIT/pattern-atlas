import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Logger transport",
  code: "using System;\n\npublic interface ILoggerTransport\n{\n    void Write(string message);\n}\n\npublic class ConsoleTransport : ILoggerTransport\n{\n    public void Write(string message)\n    {\n        Console.WriteLine($\"[console] {message}\");\n    }\n}\n\npublic class FileTransport : ILoggerTransport\n{\n    public void Write(string message)\n    {\n        Console.WriteLine($\"[file] {message}\");\n    }\n}\n\npublic abstract class Logger\n{\n    public abstract ILoggerTransport CreateTransport();\n\n    public void Log(string message)\n    {\n        var transport = CreateTransport();\n        transport.Write(message);\n    }\n}\n\npublic class DevelopmentLogger : Logger\n{\n    public override ILoggerTransport CreateTransport()\n    {\n        return new ConsoleTransport();\n    }\n}\n\npublic class BatchJobLogger : Logger\n{\n    public override ILoggerTransport CreateTransport()\n    {\n        return new FileTransport();\n    }\n}\n\nLogger logger = new DevelopmentLogger();\nlogger.Log(\"Application started\");",
  explanation: "The C# example keeps the logging process stable while subclasses decide whether the factory method returns console or file transport.",
};

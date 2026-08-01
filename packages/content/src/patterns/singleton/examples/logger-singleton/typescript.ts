import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Logger singleton",
  code: "class Logger {\n  private static instance: Logger;\n\n\n  private constructor() {}\n\n\n  static getInstance(): Logger {\n    if (!Logger.instance) {\n      Logger.instance = new Logger();\n    }\n\n\n    return Logger.instance;\n  }\n\n\n  log(message: string): void {\n    console.log(`LOG: ${message}`);\n  }\n}\n\n\nconst loggerA = Logger.getInstance();\nconst loggerB = Logger.getInstance();\n\n\nloggerA.log(\"Application started\");\nconsole.log(loggerA === loggerB);",
  explanation: "The logger singleton provides one shared logging instance so every part of the app writes through the same output path.",
};

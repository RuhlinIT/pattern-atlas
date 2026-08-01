import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Logger singleton",
  code: "class Logger {\n  private static instance: Logger;\n\n\n  private constructor() {}\n\n\n  static getInstance(): Logger {\n    if (!Logger.instance) {\n      Logger.instance = new Logger();\n    }\n\n\n    return Logger.instance;\n  }\n\n\n  log(message: string): void {\n    console.log(`LOG: ${message}`);\n  }\n}\n\n\nconst loggerA = Logger.getInstance();\nconst loggerB = Logger.getInstance();\n\n\nloggerA.log(\"Application started\");\nconsole.log(loggerA === loggerB);",
  explanation: "The Angular example uses a singleton logger so all features emit messages through one shared service-like object.",
};

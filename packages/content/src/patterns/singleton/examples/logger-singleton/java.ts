import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Logger singleton",
  code: "class Logger {\n    private static Logger instance;\n\n\n    private Logger() {}\n\n\n    public static Logger getInstance() {\n        if (instance == null) {\n            instance = new Logger();\n        }\n\n\n        return instance;\n    }\n\n\n    public void log(String message) {\n        System.out.println(\"LOG: \" + message);\n    }\n}\n\n\nLogger loggerA = Logger.getInstance();\nLogger loggerB = Logger.getInstance();\n\n\nloggerA.log(\"Application started\");\nSystem.out.println(loggerA == loggerB);",
  explanation: "The logger singleton ensures every component uses the same logging object and formatting behavior.",
};

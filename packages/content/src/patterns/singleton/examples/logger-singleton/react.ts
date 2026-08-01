import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Logger singleton",
  code: "import React, { useMemo } from \"react\";\n\n\nclass Logger {\n  private static instance: Logger;\n\n\n  private constructor() {}\n\n\n  static getInstance(): Logger {\n    if (!Logger.instance) {\n      Logger.instance = new Logger();\n    }\n\n\n    return Logger.instance;\n  }\n\n\n  log(message: string): void {\n    console.log(`LOG: ${message}`);\n  }\n}\n\n\nfunction LoggerPreview() {\n  const logger = useMemo(() => Logger.getInstance(), []);\n\n\n  return <button onClick={() => logger.log(\"Button clicked\")}>Log Event</button>;\n}\n\n\nexport function App() {\n  return (\n    <main>\n      <h1>Logger</h1>\n      <LoggerPreview />\n    </main>\n  );\n}",
  explanation: "The React example uses one shared logger instance so UI events can be recorded consistently.",
};

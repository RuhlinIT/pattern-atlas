import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Logger transport",
  code: "import React, { useMemo } from \"react\";\n\ninterface LoggerTransport {\n  write(message: string): void;\n}\n\nclass ConsoleTransport implements LoggerTransport {\n  write(message: string): void {\n    console.log(`[console] ${message}`);\n  }\n}\n\nclass FileTransport implements LoggerTransport {\n  write(message: string): void {\n    console.log(`[file] ${message}`);\n  }\n}\n\nabstract class Logger {\n  abstract createTransport(): LoggerTransport;\n\n  log(message: string): void {\n    const transport = this.createTransport();\n    transport.write(message);\n  }\n}\n\nclass DevelopmentLogger extends Logger {\n  createTransport(): LoggerTransport {\n    return new ConsoleTransport();\n  }\n}\n\nclass BatchJobLogger extends Logger {\n  createTransport(): LoggerTransport {\n    return new FileTransport();\n  }\n}\n\nfunction LogButton({ logger }: { logger: Logger }) {\n  return <button onClick={() => logger.log(\"Application started\")}>Log event</button>;\n}\n\nexport function App() {\n  const logger = useMemo(() => new DevelopmentLogger(), []);\n\n  return (\n    <main>\n      <h1>Logger Transport</h1>\n      <LogButton logger={logger} />\n    </main>\n  );\n}",
  explanation: "The React example keeps the logging workflow in the base class while the concrete logger selects the transport through the factory method.",
};

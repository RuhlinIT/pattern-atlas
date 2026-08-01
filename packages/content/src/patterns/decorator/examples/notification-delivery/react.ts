import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Notification delivery",
  code: "import React, { useMemo } from \"react\";\n\ninterface Notifier {\n  send(message: string): void;\n}\n\nclass EmailNotifier implements Notifier {\n  send(message: string): void {\n    console.log(`Email sent: ${message}`);\n  }\n}\n\nabstract class NotifierDecorator implements Notifier {\n  constructor(protected wrappee: Notifier) {}\n\n  send(message: string): void {\n    this.wrappee.send(message);\n  }\n}\n\nclass LoggingNotifier extends NotifierDecorator {\n  send(message: string): void {\n    console.log(\"Logging notification\");\n    super.send(message);\n  }\n}\n\nclass RetryNotifier extends NotifierDecorator {\n  send(message: string): void {\n    console.log(\"Retry policy applied\");\n    super.send(message);\n  }\n}\n\nfunction NotificationPanel({ notifier }: { notifier: Notifier }) {\n  return (\n    <button onClick={() => notifier.send(\"Deployment completed\")}>\n      Send notification\n    </button>\n  );\n}\n\nexport function App() {\n  const notifier = useMemo(\n    () => new RetryNotifier(new LoggingNotifier(new EmailNotifier())),\n    []\n  );\n\n  return (\n    <main>\n      <h1>Notification Delivery</h1>\n      <NotificationPanel notifier={notifier} />\n    </main>\n  );\n}",
  explanation: "The React example stacks logging and retry decorators around the same notifier contract, so the UI can trigger delivery without knowing about the added behaviors.",
};

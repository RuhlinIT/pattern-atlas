import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Notification delivery",
  code: "interface Notifier {\n  send(message: string): void;\n}\n\nclass EmailNotifier implements Notifier {\n  send(message: string): void {\n    console.log(`Email sent: ${message}`);\n  }\n}\n\nabstract class NotifierDecorator implements Notifier {\n  constructor(protected wrappee: Notifier) {}\n\n  send(message: string): void {\n    this.wrappee.send(message);\n  }\n}\n\nclass LoggingNotifier extends NotifierDecorator {\n  send(message: string): void {\n    console.log(\"Logging notification\");\n    super.send(message);\n  }\n}\n\nclass RetryNotifier extends NotifierDecorator {\n  send(message: string): void {\n    console.log(\"Retry policy applied\");\n    super.send(message);\n  }\n}\n\nconst notifier = new RetryNotifier(\n  new LoggingNotifier(new EmailNotifier()),\n);\n\nnotifier.send(\"Deployment completed\");",
  explanation: "The base notifier handles delivery, while logging and retry are layered as decorators that preserve the same interface.",
};

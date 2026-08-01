import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Notification delivery",
  code: "interface Notifier {\n  send(message: string): void;\n}\n\n\nclass EmailNotifier implements Notifier {\n  send(message: string): void {\n    console.log(`Email sent: ${message}`);\n  }\n}\n\n\nabstract class NotifierDecorator implements Notifier {\n  constructor(protected wrappee: Notifier) {}\n\n\n  send(message: string): void {\n    this.wrappee.send(message);\n  }\n}\n\n\nclass LoggingNotifier extends NotifierDecorator {\n  send(message: string): void {\n    console.log('Logging notification');\n    super.send(message);\n  }\n}\n\n\nclass RetryNotifier extends NotifierDecorator {\n  send(message: string): void {\n    console.log('Retry policy applied');\n    super.send(message);\n  }\n}\n\n\nconst notifier = new RetryNotifier(\n  new LoggingNotifier(new EmailNotifier()),\n);\n\n\nnotifier.send('Deployment completed');",
  explanation: "Logging and retry wrap the same Notifier contract, so Angular code can stack delivery behavior without changing the core notifier implementation.",
};

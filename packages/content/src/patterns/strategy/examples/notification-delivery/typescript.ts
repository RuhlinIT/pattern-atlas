import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Notification delivery",
  code: "interface NotificationStrategy {\n  send(message: string): void;\n}\n\nclass EmailNotification implements NotificationStrategy {\n  send(message: string): void {\n    console.log(`Email: ${message}`);\n  }\n}\n\nclass SmsNotification implements NotificationStrategy {\n  send(message: string): void {\n    console.log(`SMS: ${message}`);\n  }\n}\n\nclass NotificationService {\n  constructor(private strategy: NotificationStrategy) {}\n\n  notify(message: string): void {\n    this.strategy.send(message);\n  }\n}\n\nconst notifier = new NotificationService(new SmsNotification());\nnotifier.notify(\"Deployment completed\");",
  explanation: "The service stays focused on sending a notification while the chosen strategy handles channel-specific behavior.",
};

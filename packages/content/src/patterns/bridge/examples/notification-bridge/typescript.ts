import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Notification bridge",
  code: "interface NotificationSender {\n  send(message: string): string;\n}\n\n\nclass EmailSender implements NotificationSender {\n  send(message: string): string {\n    return `Email sent: ${message}`;\n  }\n}\n\n\nclass SmsSender implements NotificationSender {\n  send(message: string): string {\n    return `SMS sent: ${message}`;\n  }\n}\n\n\nabstract class Notification {\n  constructor(protected sender: NotificationSender) {}\n\n\n  abstract notify(message: string): string;\n}\n\n\nclass AlertNotification extends Notification {\n  notify(message: string): string {\n    return this.sender.send(`ALERT: ${message}`);\n  }\n}\n\n\nconst alert = new AlertNotification(new EmailSender());\nconsole.log(alert.notify(\"Server is down\"));",
  explanation: "The notification abstraction bridges message handling to different delivery channels, so the same alert logic can use email or SMS.",
};

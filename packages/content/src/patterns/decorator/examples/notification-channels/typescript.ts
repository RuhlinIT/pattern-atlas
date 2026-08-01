import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Notification channels",
  code: "interface Notifier {\n  send(message: string): string;\n}\n\nclass BasicNotifier implements Notifier {\n  send(message: string): string {\n    return `In-app: ${message}`;\n  }\n}\n\nabstract class NotifierDecorator implements Notifier {\n  constructor(protected notifier: Notifier) {}\n\n  send(message: string): string {\n    return this.notifier.send(message);\n  }\n}\n\nclass EmailDecorator extends NotifierDecorator {\n  send(message: string): string {\n    return `${super.send(message)} | Email: ${message}`;\n  }\n}\n\nclass SmsDecorator extends NotifierDecorator {\n  send(message: string): string {\n    return `${super.send(message)} | SMS: ${message}`;\n  }\n}\n\nclass SlackDecorator extends NotifierDecorator {\n  send(message: string): string {\n    return `${super.send(message)} | Slack: ${message}`;\n  }\n}\n\nconst notifier = new SlackDecorator(\n  new SmsDecorator(new EmailDecorator(new BasicNotifier())),\n);\n\nconsole.log(notifier.send(\"Build completed\"));",
  explanation: "Each delivery channel is added by wrapping the base notifier, so channels can be combined dynamically without changing the original notifier class.",
};

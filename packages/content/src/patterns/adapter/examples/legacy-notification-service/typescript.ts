import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Legacy notification adapter",
  code: "type NotificationMessage = {\n  to: string;\n  subject: string;\n  body: string;\n};\n\n\nexport interface Notifier {\n  send(message: NotificationMessage): Promise<void>;\n}\n\n\nexport class LegacyNotificationAdapter implements Notifier {\n  constructor(private readonly legacyService: LegacyMailService) {}\n\n\n  async send(message: NotificationMessage): Promise<void> {\n    await this.legacyService.deliver({\n      recipient: message.to,\n      headline: message.subject,\n      content: message.body,\n    });\n  }\n}",
  explanation:
    "The adapter hides the legacy notification payload shape behind a modern notifier interface.",
};
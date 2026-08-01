import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Legacy notification service",
  code: "interface Notifier {\n  send(message: string): void;\n}\n\nclass LegacyMessenger {\n  deliver(payload: { body: string }): void {\n    console.log(`Legacy messenger sent: ${payload.body}`);\n  }\n}\n\nclass NotificationAdapter implements Notifier {\n  constructor(private messenger: LegacyMessenger) {}\n\n  send(message: string): void {\n    this.messenger.deliver({ body: message });\n  }\n}\n\nclass AlertService {\n  constructor(private notifier: Notifier) {}\n\n  triggerAlert(message: string): void {\n    this.notifier.send(message);\n  }\n}\n\nconst notifier = new NotificationAdapter(new LegacyMessenger());\nconst alerts = new AlertService(notifier);\nalerts.triggerAlert(\"CPU threshold exceeded\");",
  explanation: "The adapter converts the app's simple send contract into the older service's payload-based deliver call.",
};

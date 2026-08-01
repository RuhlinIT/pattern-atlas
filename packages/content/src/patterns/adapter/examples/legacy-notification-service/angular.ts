import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Legacy notification service",
  code: "import { Injectable } from '@angular/core';\n\n\nclass MessagePayload {\n  constructor(public body: string) {}\n}\n\n\nabstract class Notifier {\n  abstract send(message: string): void;\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass LegacyMessenger {\n  deliver(payload: MessagePayload): void {\n    console.log(`Legacy messenger sent: ${payload.body}`);\n  }\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass NotificationAdapter extends Notifier {\n  constructor(private messenger: LegacyMessenger) {\n    super();\n  }\n\n\n  send(message: string): void {\n    this.messenger.deliver(new MessagePayload(message));\n  }\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass AlertService {\n  constructor(private notifier: NotificationAdapter) {}\n\n\n  triggerAlert(message: string): void {\n    this.notifier.send(message);\n  }\n}",
  explanation: "The Angular adapter service translates the app's notifier contract into the legacy messenger's payload-based API while keeping alert logic unchanged.",
};

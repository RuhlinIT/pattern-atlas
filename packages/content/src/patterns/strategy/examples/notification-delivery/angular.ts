import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Notification delivery",
  code: "import { Injectable } from '@angular/core';\n\n\nabstract class NotificationStrategy {\n  abstract send(message: string): void;\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass EmailNotification extends NotificationStrategy {\n  send(message: string): void {\n    console.log(`Email: ${message}`);\n  }\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass SmsNotification extends NotificationStrategy {\n  send(message: string): void {\n    console.log(`SMS: ${message}`);\n  }\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass NotificationService {\n  private strategy: NotificationStrategy;\n\n\n  constructor(\n    private emailNotification: EmailNotification,\n    private smsNotification: SmsNotification,\n  ) {\n    this.strategy = this.smsNotification;\n  }\n\n\n  setStrategy(channel: 'email' | 'sms'): void {\n    this.strategy =\n      channel === 'email' ? this.emailNotification : this.smsNotification;\n  }\n\n\n  notify(message: string): void {\n    this.strategy.send(message);\n  }\n}",
  explanation: "The Angular service acts as the strategy context, while injectable channel services provide interchangeable notification behaviors selected at runtime.",
};

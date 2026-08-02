import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Notification bridge",
  code: `type Channel = "email" | "sms" | "push";

interface DeliveryBridge {
  send(message: string): void;
}

class NotificationService {
  constructor(private delivery: DeliveryBridge) {}

  send(message: string) {
    this.delivery.send(message);
  }
}`,
  explanation:
    "The notification abstraction stays stable while delivery channels vary independently.",
};
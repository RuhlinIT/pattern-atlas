import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Angular notification bridge",
  code: `export interface DeliveryBridge {
  send(message: string): void;
}

export class NotificationService {
  constructor(private delivery: DeliveryBridge) {}

  send(message: string) {
    this.delivery.send(message);
  }
}`,
  explanation:
    "Angular services can bridge message composition and delivery implementation.",
};
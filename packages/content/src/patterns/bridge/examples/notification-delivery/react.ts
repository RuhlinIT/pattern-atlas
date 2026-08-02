import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "React notification bridge",
  code: `type DeliveryBridge = {
  send(message: string): void;
};

function createNotificationService(delivery: DeliveryBridge) {
  return {
    send: (message: string) => delivery.send(message),
  };
}`,
  explanation:
    "React can keep notification logic separate from the delivery bridge.",
};
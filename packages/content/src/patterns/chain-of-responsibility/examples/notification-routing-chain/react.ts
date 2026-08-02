import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Notification routing chain",
  code: `type Message = { userId: string; preferredChannel?: string };

function routeMessage(message: Message) {
  if (message.preferredChannel === "email") return "Send email";
  if (message.preferredChannel === "sms") return "Send sms";
  return "Send push notification";
}

export function NotificationDemo() {
  const route = routeMessage({ userId: "u1", preferredChannel: "email" });
  return <p>{route}</p>;
}`,
  explanation:
    "A notification chain keeps channel selection separate from message composition.",
};
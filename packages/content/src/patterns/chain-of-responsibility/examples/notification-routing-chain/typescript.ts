import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Notification routing chain",
  code: `type Message = { userId: string; preferredChannel?: string };

abstract class Router {
  protected next: Router | null = null;

  setNext(next: Router) {
    this.next = next;
    return next;
  }

  handle(message: Message): string | null {
    return this.next ? this.next.handle(message) : null;
  }
}

class PreferenceRouter extends Router {
  handle(message: Message) {
    if (message.preferredChannel === "email") return "Send email";
    if (message.preferredChannel === "sms") return "Send sms";
    return super.handle(message);
  }
}

class FallbackRouter extends Router {
  handle(message: Message) {
    return "Send push notification";
  }
}

const chain = new PreferenceRouter();
chain.setNext(new FallbackRouter());`,
  explanation:
    "A routing chain lets notification decisions flow through preference and fallback handlers.",
};
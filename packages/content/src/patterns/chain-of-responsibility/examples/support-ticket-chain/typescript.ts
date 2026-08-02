import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Support ticket chain",
  code: `type Ticket = {
  priority: "low" | "medium" | "high";
  issue: string;
};

abstract class TicketHandler {
  protected next: TicketHandler | null = null;

  setNext(handler: TicketHandler) {
    this.next = handler;
    return handler;
  }

  handle(ticket: Ticket): string | null {
    return this.next ? this.next.handle(ticket) : null;
  }
}

class TierOneHandler extends TicketHandler {
  handle(ticket: Ticket): string | null {
    if (ticket.priority === "low") return "Tier 1 resolves the ticket.";
    return super.handle(ticket);
  }
}

class TierTwoHandler extends TicketHandler {
  handle(ticket: Ticket): string | null {
    if (ticket.priority === "medium") return "Tier 2 resolves the ticket.";
    return super.handle(ticket);
  }
}

class EscalationHandler extends TicketHandler {
  handle(ticket: Ticket): string | null {
    return "Escalated: " + ticket.issue;
  }
}

const chain = new TierOneHandler();
chain.setNext(new TierTwoHandler()).setNext(new EscalationHandler());

const result = chain.handle({ priority: "high", issue: "Login is broken" });`,
  explanation:
    "A support chain routes tickets through tiers until one handler can resolve the issue or escalate it.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Escalation chain",
  code: `class Ticket {
    String priority;
    String issue;
    Ticket(String priority, String issue) {
        this.priority = priority;
        this.issue = issue;
    }
}

abstract class EscalationHandler {
    private EscalationHandler next;
    public EscalationHandler setNext(EscalationHandler next) {
        this.next = next;
        return next;
    }
    public String handle(Ticket ticket) {
        return next == null ? null : next.handle(ticket);
    }
}

class TierOne extends EscalationHandler {
    @Override
    public String handle(Ticket ticket) {
        if ("low".equals(ticket.priority)) return "Tier 1 resolved.";
        return super.handle(ticket);
    }
}

class TierTwo extends EscalationHandler {
    @Override
    public String handle(Ticket ticket) {
        if ("medium".equals(ticket.priority)) return "Tier 2 resolved.";
        return super.handle(ticket);
    }
}

class TierThree extends EscalationHandler {
    @Override
    public String handle(Ticket ticket) {
        return "Escalated to specialist: " + ticket.issue;
    }
}

EscalationHandler chain = new TierOne();
chain.setNext(new TierTwo()).setNext(new TierThree());`,
  explanation:
    "This variant focuses on support escalation where each tier either resolves the issue or forwards it.",
};
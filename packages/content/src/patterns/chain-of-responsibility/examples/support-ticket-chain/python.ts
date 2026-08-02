import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Support ticket chain",
  code: `class TicketHandler:
    def __init__(self):
        self._next = None

    def set_next(self, handler):
        self._next = handler
        return handler

    def handle(self, ticket):
        return self._next.handle(ticket) if self._next else None

class TierOneHandler(TicketHandler):
    def handle(self, ticket):
        if ticket["priority"] == "low":
            return "Tier 1 resolves the ticket."
        return super().handle(ticket)

class TierTwoHandler(TicketHandler):
    def handle(self, ticket):
        if ticket["priority"] == "medium":
            return "Tier 2 resolves the ticket."
        return super().handle(ticket)

class EscalationHandler(TicketHandler):
    def handle(self, ticket):
        return f"Escalated: {ticket['issue']}"

chain = TierOneHandler()
chain.set_next(TierTwoHandler()).set_next(EscalationHandler())`,
  explanation:
    "A support ticket chain lets each tier decide whether to resolve the issue or pass it on.",
};
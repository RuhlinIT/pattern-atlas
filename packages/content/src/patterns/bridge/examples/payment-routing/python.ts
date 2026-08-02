import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Python payment bridge",
  code: `class PaymentGateway:
    def charge(self, amount):
        raise NotImplementedError()

class CheckoutService:
    def __init__(self, gateway):
        self.gateway = gateway

    def pay(self, amount):
        self.gateway.charge(amount)`,
  explanation:
    "Python can use Bridge to keep checkout logic independent from payment providers.",
};
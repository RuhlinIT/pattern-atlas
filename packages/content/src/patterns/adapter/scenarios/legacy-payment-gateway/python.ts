import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python = {
  language: "python",
  code: `from dataclasses import dataclass


class PaymentProcessor:
    def charge(self, amount: float) -> dict:
        raise NotImplementedError


class LegacyPaymentGateway:
    def make_payment(self, amount_in_cents: int) -> dict:
        return {
            "ok": 1,
            "reference": f"LEGACY-{amount_in_cents}-{id(self) % 100000}",
        }


@dataclass
class PaymentResult:
    success: bool
    transaction_id: str


class LegacyPaymentAdapter(PaymentProcessor):
    def __init__(self, legacy_gateway: LegacyPaymentGateway) -> None:
        self.legacy_gateway = legacy_gateway

    def charge(self, amount: float) -> dict:
        amount_in_cents = round(amount * 100)
        result = self.legacy_gateway.make_payment(amount_in_cents)

        return {
            "success": result["ok"] == 1,
            "transactionId": result["reference"],
        }


class CheckoutService:
    def __init__(self, processor: PaymentProcessor) -> None:
        self.processor = processor

    def place_order(self, total: float) -> str:
        payment = self.processor.charge(total)

        if not payment["success"]:
            return "Payment failed"

        return f"Order confirmed with transaction {payment['transactionId']}"


processor: PaymentProcessor = LegacyPaymentAdapter(LegacyPaymentGateway())
checkout = CheckoutService(processor)

print(checkout.place_order(49.99))
`,
} satisfies PatternLanguageExample;
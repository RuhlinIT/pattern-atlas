import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Payment processing",
  code: "interface PaymentStrategy {\n  pay(amount: number): void;\n}\n\nclass CreditCardPayment implements PaymentStrategy {\n  pay(amount: number): void {\n    console.log(`Paid $${amount} with credit card`);\n  }\n}\n\nclass PayPalPayment implements PaymentStrategy {\n  pay(amount: number): void {\n    console.log(`Paid $${amount} with PayPal`);\n  }\n}\n\nclass CheckoutService {\n  constructor(private strategy: PaymentStrategy) {}\n\n  checkout(amount: number): void {\n    this.strategy.pay(amount);\n  }\n}\n\nconst checkout = new CheckoutService(new PayPalPayment());\ncheckout.checkout(250);",
  explanation: "The checkout service depends on a payment contract instead of concrete payment logic, so payment methods can vary without changing the caller.",
};

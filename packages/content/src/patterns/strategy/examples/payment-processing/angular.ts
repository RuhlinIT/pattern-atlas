import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Payment processing",
  code: "import { Injectable } from '@angular/core';\n\n\nabstract class PaymentStrategy {\n  abstract pay(amount: number): void;\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass CreditCardPayment extends PaymentStrategy {\n  pay(amount: number): void {\n    console.log(`Paid $${amount} with credit card`);\n  }\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass PayPalPayment extends PaymentStrategy {\n  pay(amount: number): void {\n    console.log(`Paid $${amount} with PayPal`);\n  }\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass CheckoutService {\n  private strategy: PaymentStrategy;\n\n\n  constructor(\n    private creditCardPayment: CreditCardPayment,\n    private payPalPayment: PayPalPayment,\n  ) {\n    this.strategy = this.payPalPayment;\n  }\n\n\n  setStrategy(method: 'credit-card' | 'paypal'): void {\n    this.strategy =\n      method === 'credit-card' ? this.creditCardPayment : this.payPalPayment;\n  }\n\n\n  checkout(amount: number): void {\n    this.strategy.pay(amount);\n  }\n}",
  explanation: "The Angular checkout service acts as the strategy context, while injectable payment services provide interchangeable payment behaviors selected at runtime.",
};

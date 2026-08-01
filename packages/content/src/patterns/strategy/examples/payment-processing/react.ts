import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Payment processing",
  code: "import React, { useMemo } from \"react\";\n\ninterface PaymentStrategy {\n  pay(amount: number): void;\n}\n\nclass CreditCardPayment implements PaymentStrategy {\n  pay(amount: number): void {\n    console.log(`Paid $${amount} with credit card`);\n  }\n}\n\nclass PayPalPayment implements PaymentStrategy {\n  pay(amount: number): void {\n    console.log(`Paid $${amount} with PayPal`);\n  }\n}\n\nclass CheckoutService {\n  constructor(private strategy: PaymentStrategy) {}\n\n  checkout(amount: number): void {\n    this.strategy.pay(amount);\n  }\n}\n\nfunction CheckoutButton({ checkout }: { checkout: CheckoutService }) {\n  return <button onClick={() => checkout.checkout(250)}>Pay $250</button>;\n}\n\nexport function App() {\n  const checkout = useMemo(() => new CheckoutService(new PayPalPayment()), []);\n\n  return (\n    <main>\n      <h1>Payment Processing</h1>\n      <CheckoutButton checkout={checkout} />\n    </main>\n  );\n}",
  explanation: "The React example keeps checkout logic separate from payment implementation, so the selected strategy can change without affecting the caller.",
};

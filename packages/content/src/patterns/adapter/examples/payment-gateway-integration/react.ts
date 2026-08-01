import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Payment gateway integration",
  code: "import React, { useMemo } from \"react\";\n\ninterface PaymentProcessor {\n  pay(amount: number): void;\n}\n\nclass LegacyPaymentGateway {\n  makePayment(totalInCents: number): void {\n    console.log(`Legacy gateway charged ${totalInCents} cents`);\n  }\n}\n\nclass PaymentGatewayAdapter implements PaymentProcessor {\n  constructor(private gateway: LegacyPaymentGateway) {}\n\n  pay(amount: number): void {\n    const totalInCents = Math.round(amount * 100);\n    this.gateway.makePayment(totalInCents);\n  }\n}\n\nclass CheckoutService {\n  constructor(private processor: PaymentProcessor) {}\n\n  checkout(amount: number): void {\n    this.processor.pay(amount);\n  }\n}\n\nfunction CheckoutButton({ checkout }: { checkout: CheckoutService }) {\n  return (\n    <button onClick={() => checkout.checkout(49.99)}>\n      Pay $49.99\n    </button>\n  );\n}\n\nexport function App() {\n  const processor = useMemo(() => new PaymentGatewayAdapter(new LegacyPaymentGateway()), []);\n  const checkout = useMemo(() => new CheckoutService(processor), [processor]);\n\n  return (\n    <main>\n      <h1>Checkout</h1>\n      <CheckoutButton checkout={checkout} />\n    </main>\n  );\n}",
  explanation: "The React example keeps checkout code dependent on a payment processor interface, while the adapter converts dollars into the legacy gateway's cents-based payment call.",
};

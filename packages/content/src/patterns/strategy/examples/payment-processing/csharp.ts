import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Payment processing",
  code: "using System;\n\npublic interface IPaymentStrategy\n{\n    void Pay(decimal amount);\n}\n\npublic class CreditCardPayment : IPaymentStrategy\n{\n    public void Pay(decimal amount)\n    {\n        Console.WriteLine($\"Paid {amount} with credit card\");\n    }\n}\n\npublic class PayPalPayment : IPaymentStrategy\n{\n    public void Pay(decimal amount)\n    {\n        Console.WriteLine($\"Paid {amount} with PayPal\");\n    }\n}\n\npublic class CheckoutService\n{\n    private readonly IPaymentStrategy _strategy;\n\n    public CheckoutService(IPaymentStrategy strategy)\n    {\n        _strategy = strategy;\n    }\n\n    public void Checkout(decimal amount)\n    {\n        _strategy.Pay(amount);\n    }\n}\n\nvar checkout = new CheckoutService(new PayPalPayment());\ncheckout.Checkout(250m);",
  explanation: "The C# example keeps the checkout service dependent on a payment contract, allowing the payment algorithm to vary without changing the client code.",
};

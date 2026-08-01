import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Payment gateway integration",
  code: "using System;\n\npublic interface IPaymentProcessor\n{\n    void Pay(double amount);\n}\n\npublic class LegacyPaymentGateway\n{\n    public void MakePayment(int totalInCents)\n    {\n        Console.WriteLine($\"Legacy gateway charged {totalInCents} cents\");\n    }\n}\n\npublic class PaymentGatewayAdapter : IPaymentProcessor\n{\n    private readonly LegacyPaymentGateway _gateway;\n\n    public PaymentGatewayAdapter(LegacyPaymentGateway gateway)\n    {\n        _gateway = gateway;\n    }\n\n    public void Pay(double amount)\n    {\n        var totalInCents = (int)Math.Round(amount * 100);\n        _gateway.MakePayment(totalInCents);\n    }\n}\n\npublic class CheckoutService\n{\n    private readonly IPaymentProcessor _processor;\n\n    public CheckoutService(IPaymentProcessor processor)\n    {\n        _processor = processor;\n    }\n\n    public void Checkout(double amount)\n    {\n        _processor.Pay(amount);\n    }\n}\n\nvar processor = new PaymentGatewayAdapter(new LegacyPaymentGateway());\nvar checkout = new CheckoutService(processor);\ncheckout.Checkout(49.99);",
  explanation: "The C# adapter translates the app's payment contract into the legacy gateway's cents-based MakePayment call.",
};

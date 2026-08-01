import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Payment gateway integration",
  code: "interface PaymentProcessor {\n      void pay(double amount);\n  }\n  \n  class LegacyPaymentGateway {\n      public void makePayment(int totalInCents) {\n          System.out.println(\"Legacy gateway charged \" + totalInCents + \" cents\");\n      }\n  }\n  \n  class PaymentGatewayAdapter implements PaymentProcessor {\n      private final LegacyPaymentGateway gateway;\n  \n      public PaymentGatewayAdapter(LegacyPaymentGateway gateway) {\n          this.gateway = gateway;\n      }\n  \n      public void pay(double amount) {\n          int totalInCents = (int) Math.round(amount * 100);\n          gateway.makePayment(totalInCents);\n      }\n  }\n  \n  class CheckoutService {\n      private final PaymentProcessor processor;\n  \n      public CheckoutService(PaymentProcessor processor) {\n          this.processor = processor;\n      }\n  \n      public void checkout(double amount) {\n          processor.pay(amount);\n      }\n  }\n  \n  PaymentProcessor processor =\n      new PaymentGatewayAdapter(new LegacyPaymentGateway());\n  CheckoutService checkout = new CheckoutService(processor);\n  checkout.checkout(49.99);",
  explanation: "The checkout service depends on the application interface, while the adapter handles the method and data conversion for the legacy gateway.",
};

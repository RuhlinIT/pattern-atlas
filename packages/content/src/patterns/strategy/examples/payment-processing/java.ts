import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Payment processing",
  code: "interface PaymentStrategy {\n    void pay(double amount);\n}\n\nclass CreditCardPayment implements PaymentStrategy {\n    public void pay(double amount) {\n        System.out.println(\"Paid \" + amount + \" with credit card\");\n    }\n}\n\nclass PayPalPayment implements PaymentStrategy {\n    public void pay(double amount) {\n        System.out.println(\"Paid \" + amount + \" with PayPal\");\n    }\n}\n\nclass CheckoutService {\n    private final PaymentStrategy strategy;\n\n    public CheckoutService(PaymentStrategy strategy) {\n        this.strategy = strategy;\n    }\n\n    public void checkout(double amount) {\n        strategy.pay(amount);\n    }\n}\n\nCheckoutService checkout = new CheckoutService(new PayPalPayment());\ncheckout.checkout(250.00);",
  explanation: "The payment algorithm is selected through a shared interface, which keeps checkout stable while provider behavior changes.",
};

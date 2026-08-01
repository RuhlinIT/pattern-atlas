import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Legacy billing adapter",
  code: "public interface BillingGateway {\n    Invoice charge(Order order);\n}\n\n\npublic class LegacyBillingAdapter implements BillingGateway {\n    private final LegacyBillingClient legacyClient;\n\n\n    public LegacyBillingAdapter(LegacyBillingClient legacyClient) {\n        this.legacyClient = legacyClient;\n    }\n\n\n    @Override\n    public Invoice charge(Order order) {\n        LegacyInvoiceResponse response = legacyClient.submit(order.getId(), order.getTotalCents());\n        return new Invoice(response.getInvoiceId(), response.getStatus());\n    }\n}",
  explanation:
    "The adapter hides the legacy client behind a domain-friendly gateway.",
};
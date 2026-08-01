import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Payment gateway integration",
  code: "public class PaymentGatewayAdapter implements BillingGateway {\n    private final ThirdPartyPaymentClient client;\n\n\n    public PaymentGatewayAdapter(ThirdPartyPaymentClient client) {\n        this.client = client;\n    }\n\n\n    @Override\n    public PaymentResult charge(ChargeCommand command) {\n        ThirdPartyChargeResponse response = client.charge(\n            command.getOrderId(),\n            command.getAmountCents(),\n            command.getCurrency()\n        );\n\n\n        return new PaymentResult(response.getId(), response.isApproved() ? \"approved\" : \"declined\");\n    }\n}",
  explanation:
    "Java adapters are useful when wrapping vendor SDKs behind an application gateway interface.",
};
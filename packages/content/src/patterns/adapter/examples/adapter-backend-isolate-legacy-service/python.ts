import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Python adapter for external service",
  code: "class LegacyBillingAdapter:\n    def __init__(self, legacy_client):\n        self.legacy_client = legacy_client\n\n\n    def charge(self, order):\n        response = self.legacy_client.submit(order.id, order.total_cents)\n        return {\n            \"id\": response[\"invoice_id\"],\n            \"status\": response[\"status\"],\n        }",
  explanation:
    "Python service boundaries often benefit from a thin adapter over a third-party SDK.",
};
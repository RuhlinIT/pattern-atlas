import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Order processing template",
  code: "from abc import ABC, abstractmethod\n\n\nclass OrderProcessor(ABC):\n    def process(self) -> None:\n        self.validate_order()\n        self.charge_payment()\n        self.fulfill_order()\n        self.send_confirmation()\n\n\n    def validate_order(self) -> None:\n        print(\"Validating order\")\n\n\n    @abstractmethod\n    def charge_payment(self) -> None:\n        pass\n\n\n    @abstractmethod\n    def fulfill_order(self) -> None:\n        pass\n\n\n    def send_confirmation(self) -> None:\n        print(\"Sending confirmation\")\n\n\nclass PhysicalOrderProcessor(OrderProcessor):\n    def charge_payment(self) -> None:\n        print(\"Charging payment for physical order\")\n\n\n    def fulfill_order(self) -> None:\n        print(\"Shipping physical order\")\n\n\nclass DigitalOrderProcessor(OrderProcessor):\n    def charge_payment(self) -> None:\n        print(\"Charging payment for digital order\")\n\n\n    def fulfill_order(self) -> None:\n        print(\"Delivering digital product\")\n\n\nphysical = PhysicalOrderProcessor()\nphysical.process()\n\n\ndigital = DigitalOrderProcessor()\ndigital.process()",
  explanation: "The Python template method keeps the order flow fixed while subclasses supply the variant steps.",
};

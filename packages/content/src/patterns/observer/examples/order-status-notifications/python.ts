import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Order status notifications",
  code: "from abc import ABC, abstractmethod\n\nclass OrderObserver(ABC):\n    @abstractmethod\n    def update(self, status: str) -> None:\n        pass\n\nclass Order:\n    def __init__(self, status: str) -> None:\n        self.status = status\n        self.observers: list[OrderObserver] = []\n\n    def subscribe(self, observer: OrderObserver) -> None:\n        self.observers.append(observer)\n\n    def set_status(self, status: str) -> None:\n        self.status = status\n        self.notify()\n\n    def notify(self) -> None:\n        for observer in self.observers:\n            observer.update(self.status)\n\nclass EmailNotifier(OrderObserver):\n    def update(self, status: str) -> None:\n        print(f\"Email sent for status: {status}\")\n\nclass WarehouseUpdater(OrderObserver):\n    def update(self, status: str) -> None:\n        print(f\"Warehouse updated for status: {status}\")\n\nclass AnalyticsTracker(OrderObserver):\n    def update(self, status: str) -> None:\n        print(f\"Analytics tracked: {status}\")\n\norder = Order(\"created\")\norder.subscribe(EmailNotifier())\norder.subscribe(WarehouseUpdater())\norder.subscribe(AnalyticsTracker())\norder.set_status(\"shipped\")",
  explanation: "The order broadcasts status updates once, and each observer handles its own side effect independently.",
};

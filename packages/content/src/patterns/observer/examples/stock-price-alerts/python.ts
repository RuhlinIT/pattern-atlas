import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Stock price alerts",
  code: "from abc import ABC, abstractmethod\n\nclass Observer(ABC):\n    @abstractmethod\n    def update(self, price: float) -> None:\n        pass\n\nclass Stock:\n    def __init__(self, price: float) -> None:\n        self.price = price\n        self.observers: list[Observer] = []\n\n    def subscribe(self, observer: Observer) -> None:\n        self.observers.append(observer)\n\n    def unsubscribe(self, observer: Observer) -> None:\n        self.observers.remove(observer)\n\n    def set_price(self, price: float) -> None:\n        self.price = price\n        self.notify()\n\n    def notify(self) -> None:\n        for observer in self.observers:\n            observer.update(self.price)\n\nclass PriceDisplay(Observer):\n    def update(self, price: float) -> None:\n        print(f\"Display updated: {price}\")\n\nclass PriceAlert(Observer):\n    def update(self, price: float) -> None:\n        if price > 100:\n            print(f\"Alert: stock price is {price}\")\n\nstock = Stock(95)\nstock.subscribe(PriceDisplay())\nstock.subscribe(PriceAlert())\nstock.set_price(105)",
  explanation: "The stock pushes price updates to any subscribed observers, while each observer decides how to respond.",
};

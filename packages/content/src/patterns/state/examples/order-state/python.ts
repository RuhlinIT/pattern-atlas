import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Order state",
  code: "from abc import ABC, abstractmethod\n\n\nclass OrderState(ABC):\n    @abstractmethod\n    def next(self, order: \"Order\") -> None:\n        pass\n\n\n    @abstractmethod\n    def name(self) -> str:\n        pass\n\n\nclass Order:\n    def __init__(self) -> None:\n        self.state: OrderState = PendingState()\n\n\n    def set_state(self, state: OrderState) -> None:\n        self.state = state\n\n\n    def proceed(self) -> None:\n        self.state.next(self)\n\n\n    def get_state_name(self) -> str:\n        return self.state.name()\n\n\nclass PendingState(OrderState):\n    def next(self, order: Order) -> None:\n        order.set_state(ProcessingState())\n\n\n    def name(self) -> str:\n        return \"Pending\"\n\n\nclass ProcessingState(OrderState):\n    def next(self, order: Order) -> None:\n        order.set_state(ShippedState())\n\n\n    def name(self) -> str:\n        return \"Processing\"\n\n\nclass ShippedState(OrderState):\n    def next(self, order: Order) -> None:\n        print(\"Order already shipped\")\n\n\n    def name(self) -> str:\n        return \"Shipped\"\n\n\norder = Order()\nprint(order.get_state_name())\norder.proceed()\nprint(order.get_state_name())\norder.proceed()\nprint(order.get_state_name())\norder.proceed()",
  explanation: "The Python order example lets each state decide what happens next, which keeps the order workflow clean and modular.",
};

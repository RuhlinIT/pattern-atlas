import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Order state",
  code: "interface OrderState {\n  next(order: Order): void;\n  name(): string;\n}\n\n\nclass Order {\n  private state: OrderState;\n\n\n  constructor() {\n    this.state = new PendingState();\n  }\n\n\n  setState(state: OrderState): void {\n    this.state = state;\n  }\n\n\n  proceed(): void {\n    this.state.next(this);\n  }\n\n\n  getStateName(): string {\n    return this.state.name();\n  }\n}\n\n\nclass PendingState implements OrderState {\n  next(order: Order): void {\n    order.setState(new ProcessingState());\n  }\n\n\n  name(): string {\n    return \"Pending\";\n  }\n}\n\n\nclass ProcessingState implements OrderState {\n  next(order: Order): void {\n    order.setState(new ShippedState());\n  }\n\n\n  name(): string {\n    return \"Processing\";\n  }\n}\n\n\nclass ShippedState implements OrderState {\n  next(order: Order): void {\n    console.log(\"Order already shipped\");\n  }\n\n\n  name(): string {\n    return \"Shipped\";\n  }\n}\n\n\nconst order = new Order();\nconsole.log(order.getStateName());\norder.proceed();\nconsole.log(order.getStateName());\norder.proceed();\nconsole.log(order.getStateName());\norder.proceed();",
  explanation: "The order object delegates state-dependent behavior to separate state classes, which makes lifecycle transitions easier to extend.",
};

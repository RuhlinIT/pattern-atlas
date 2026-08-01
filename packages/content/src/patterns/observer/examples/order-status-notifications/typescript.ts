import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Order status notifications",
  code: "interface OrderObserver {\n  update(status: string): void;\n}\n\nclass Order {\n  private observers: OrderObserver[] = [];\n\n  constructor(private status: string) {}\n\n  subscribe(observer: OrderObserver): void {\n    this.observers.push(observer);\n  }\n\n  setStatus(status: string): void {\n    this.status = status;\n    this.notify();\n  }\n\n  private notify(): void {\n    this.observers.forEach((observer) => observer.update(this.status));\n  }\n}\n\nclass EmailNotifier implements OrderObserver {\n  update(status: string): void {\n    console.log(`Email sent for status: ${status}`);\n  }\n}\n\nclass WarehouseUpdater implements OrderObserver {\n  update(status: string): void {\n    console.log(`Warehouse updated for status: ${status}`);\n  }\n}\n\nclass AnalyticsTracker implements OrderObserver {\n  update(status: string): void {\n    console.log(`Analytics tracked: ${status}`);\n  }\n}\n\nconst order = new Order(\"created\");\norder.subscribe(new EmailNotifier());\norder.subscribe(new WarehouseUpdater());\norder.subscribe(new AnalyticsTracker());\norder.setStatus(\"shipped\");",
  explanation: "The order does not know who is listening beyond the observer contract, which keeps notification consumers loosely coupled.",
};

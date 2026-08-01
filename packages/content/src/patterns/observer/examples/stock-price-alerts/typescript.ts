import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Stock price alerts",
  code: "interface Observer {\n  update(price: number): void;\n}\n\nclass Stock {\n  private observers: Observer[] = [];\n\n  constructor(private price: number) {}\n\n  subscribe(observer: Observer): void {\n    this.observers.push(observer);\n  }\n\n  unsubscribe(observer: Observer): void {\n    this.observers = this.observers.filter((item) => item !== observer);\n  }\n\n  setPrice(price: number): void {\n    this.price = price;\n    this.notify();\n  }\n\n  private notify(): void {\n    this.observers.forEach((observer) => observer.update(this.price));\n  }\n}\n\nclass PriceDisplay implements Observer {\n  update(price: number): void {\n    console.log(`Display updated: ${price}`);\n  }\n}\n\nclass PriceAlert implements Observer {\n  update(price: number): void {\n    if (price > 100) {\n      console.log(`Alert: stock price is ${price}`);\n    }\n  }\n}\n\nconst stock = new Stock(95);\nstock.subscribe(new PriceDisplay());\nstock.subscribe(new PriceAlert());\nstock.setPrice(105);",
  explanation: "The stock acts as the subject, while displays and alerts subscribe independently and react when the price changes.",
};

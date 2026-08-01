import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "News publisher",
  code: "interface Subscriber {\n  update(headline: string): void;\n}\n\nclass NewsPublisher {\n  private subscribers: Subscriber[] = [];\n\n  subscribe(subscriber: Subscriber): void {\n    this.subscribers.push(subscriber);\n  }\n\n  publish(headline: string): void {\n    this.subscribers.forEach((subscriber) => subscriber.update(headline));\n  }\n}\n\nclass MobileAppSubscriber implements Subscriber {\n  update(headline: string): void {\n    console.log(`Mobile app received: ${headline}`);\n  }\n}\n\nclass EmailSubscriber implements Subscriber {\n  update(headline: string): void {\n    console.log(`Email subscriber received: ${headline}`);\n  }\n}\n\nclass WebSubscriber implements Subscriber {\n  update(headline: string): void {\n    console.log(`Web subscriber received: ${headline}`);\n  }\n}\n\nconst publisher = new NewsPublisher();\npublisher.subscribe(new MobileAppSubscriber());\npublisher.subscribe(new EmailSubscriber());\npublisher.subscribe(new WebSubscriber());\npublisher.publish(\"New design patterns article is live\");",
  explanation: "The publisher broadcasts one event, while multiple subscribers update their own delivery channels in response.",
};

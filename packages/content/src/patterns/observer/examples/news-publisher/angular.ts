import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "News publisher",
  code: "import { Injectable } from '@angular/core';\nimport { Subject, Subscription } from 'rxjs';\n\n\n@Injectable({ providedIn: 'root' })\nclass NewsPublisher {\n  private headlines = new Subject<string>();\n\n\n  subscribe(subscriber: Subscriber): Subscription {\n    return this.headlines.subscribe((headline) => subscriber.update(headline));\n  }\n\n\n  publish(headline: string): void {\n    this.headlines.next(headline);\n  }\n}\n\n\ninterface Subscriber {\n  update(headline: string): void;\n}\n\n\nclass MobileAppSubscriber implements Subscriber {\n  update(headline: string): void {\n    console.log(`Mobile app received: ${headline}`);\n  }\n}\n\n\nclass EmailSubscriber implements Subscriber {\n  update(headline: string): void {\n    console.log(`Email subscriber received: ${headline}`);\n  }\n}\n\n\nclass WebSubscriber implements Subscriber {\n  update(headline: string): void {\n    console.log(`Web subscriber received: ${headline}`);\n  }\n}\n\n\nconst publisher = new NewsPublisher();\npublisher.subscribe(new MobileAppSubscriber());\npublisher.subscribe(new EmailSubscriber());\npublisher.subscribe(new WebSubscriber());\npublisher.publish('New design patterns article is live');",
  explanation: "The Angular publisher service emits one headline stream, and each subscriber reacts independently by subscribing to the published updates.",
};

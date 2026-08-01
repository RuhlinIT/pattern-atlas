import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Stock price alerts",
  code: "import { Injectable } from '@angular/core';\nimport { BehaviorSubject, Subscription } from 'rxjs';\n\n\ninterface Observer {\n  update(price: number): void;\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass Stock {\n  private price$ = new BehaviorSubject<number>(95);\n\n\n  subscribe(observer: Observer): Subscription {\n    return this.price$.subscribe((price) => observer.update(price));\n  }\n\n\n  setPrice(price: number): void {\n    this.price$.next(price);\n  }\n}\n\n\nclass PriceDisplay implements Observer {\n  update(price: number): void {\n    console.log(`Display updated: ${price}`);\n  }\n}\n\n\nclass PriceAlert implements Observer {\n  update(price: number): void {\n    if (price > 100) {\n      console.log(`Alert: stock price is ${price}`);\n    }\n  }\n}\n\n\nconst stock = new Stock();\nconst displaySubscription = stock.subscribe(new PriceDisplay());\nstock.subscribe(new PriceAlert());\nstock.setPrice(105);\ndisplaySubscription.unsubscribe();",
  explanation: "The Angular stock service publishes each price change through a shared stream, while display and alert observers subscribe independently and react to the same update.",
};

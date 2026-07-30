import type { PatternRecord } from "@atlas-patterns/schemas";
import { newsPublisherExamples } from "./observer/newsPublisherExamples";
import { orderStatusNotificationsExamples } from "./observer/orderStatusNotificationsExamples";
import { stockPriceAlertsExamples } from "./observer/stockPriceAlertsExamples";

export const ObserverPattern: PatternRecord = {
  slug: "observer",
  name: "Observer",
  category: "Behavioral",
  problem:
    "A system needs to notify multiple dependent objects when state changes occur, but hardcoding those dependencies makes the design rigid and tightly coupled.",
  intent:
    "Define a subscription mechanism so multiple observers can react to subject events without the subject knowing concrete subscriber details.",
  tradeoffs: [
    "Notification flows can become hard to trace when many observers react to the same event",
    "Observers may receive updates they do not need unless subscriptions are carefully designed",
  ],
  languages: ["TypeScript", "Java", "Python", "Angular", "React", "React_Native", "C#", ".NET"],
  platforms: ["Web", "Backend", "Event-driven systems"],
  integrationNotes:
    "Observers work well inside a single application boundary for UI events, domain events, and in-process notifications where subscribers change dynamically.",
  scenarios: [
    {
      slug: "stock-price-alerts",
      title: "Stock price alerts",
      summary:
        "A stock subject notifies dashboards and alert services whenever the tracked price changes.",
      languageExamples: stockPriceAlertsExamples
    },
    {
      slug: "order-status-notifications",
      title: "Order status notifications",
      summary:
        "An order subject broadcasts status changes so email, warehouse, and analytics observers can react independently.",
      languageExamples: orderStatusNotificationsExamples
    },
    {
      slug: "news-publisher",
      title: "News publisher",
      summary:
        "A publisher notifies multiple subscribers when a new article is published so apps and channels update automatically.",
      languageExamples: newsPublisherExamples
    },
  ],
  realWorldExamples: [
    {
      title: "UI event listeners",
      description:
        "Buttons, forms, and state containers notify multiple listeners when user interactions or state changes occur.",
    },
    {
      title: "Order and domain events",
      description:
        "Order status changes can trigger email, analytics, inventory, and fulfillment reactions without hardcoded dependencies.",
    },
    {
      title: "Content subscriptions",
      description:
        "Newsletters, mobile apps, and web feeds can all subscribe to publication events from a shared content source.",
    },
  ],
};

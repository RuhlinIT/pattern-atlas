import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { stockPriceAlertsExamples } from "./examples/stock-price-alerts";
import { orderStatusNotificationsExamples } from "./examples/order-status-notifications";
import { newsPublisherExamples } from "./examples/news-publisher";

export const observerPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "stock-price-alerts": stockPriceAlertsExamples,
    "order-status-notifications": orderStatusNotificationsExamples,
    "news-publisher": newsPublisherExamples,
  },
  realWorldExamples: [
  {
    "title": "UI event listeners",
    "description": "Buttons, forms, and state containers notify multiple listeners when user interactions or state changes occur."
  },
  {
    "title": "Order and domain events",
    "description": "Order status changes can trigger email, analytics, inventory, and fulfillment reactions without hardcoded dependencies."
  },
  {
    "title": "Content subscriptions",
    "description": "Newsletters, mobile apps, and web feeds can all subscribe to publication events from a shared content source."
  }
],
  tradeoffs: [
  "Notification flows can become hard to trace when many observers react to the same event",
  "Observers may receive updates they do not need unless subscriptions are carefully designed"
],
  platforms: [
  "Web",
  "Backend",
  "Event-driven systems"
],
  integrationNotes: "Observers work well inside a single application boundary for UI events, domain events, and in-process notifications where subscribers change dynamically.",
  problem: "A system needs to notify multiple dependent objects when state changes occur, but hardcoding those dependencies makes the design rigid and tightly coupled.",
};

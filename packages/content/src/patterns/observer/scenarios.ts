import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "stock-price-alerts",
    "title": "Stock price alerts",
    "summary": "A stock subject notifies dashboards and alert services whenever the tracked price changes."
  },
  {
    "slug": "order-status-notifications",
    "title": "Order status notifications",
    "summary": "An order subject broadcasts status changes so email, warehouse, and analytics observers can react independently."
  },
  {
    "slug": "news-publisher",
    "title": "News publisher",
    "summary": "A publisher notifies multiple subscribers when a new article is published so apps and channels update automatically."
  }
];

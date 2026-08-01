import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { paymentProcessingExamples } from "./examples/payment-processing";
import { shippingCostCalculationExamples } from "./examples/shipping-cost-calculation";
import { notificationDeliveryExamples } from "./examples/notification-delivery";

export const strategyPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "payment-processing": paymentProcessingExamples,
    "shipping-cost-calculation": shippingCostCalculationExamples,
    "notification-delivery": notificationDeliveryExamples,
  },
  realWorldExamples: [
  {
    "title": "Checkout payment providers",
    "description": "Choose Stripe, PayPal, or bank transfer behavior behind a stable checkout flow."
  },
  {
    "title": "Shipping rate engines",
    "description": "Switch between standard, express, and international pricing algorithms."
  },
  {
    "title": "Messaging channels",
    "description": "Select email, SMS, or push delivery based on user preference or channel availability."
  }
],
  tradeoffs: [
  "Adds more moving parts than a direct conditional approach",
  "Works best when behavior variations are real and likely to grow"
],
  platforms: [
  "Web",
  "Backend",
  "Services"
],
  integrationNotes: "Strategies can cross codebases through shared contracts, API selection rules, or runtime configuration.",
  problem: "A system needs to switch between interchangeable behaviors without hardcoding branching logic everywhere.",
};

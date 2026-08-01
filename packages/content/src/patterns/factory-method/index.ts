import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { documentExportExamples } from "./examples/document-export";
import { notificationChannelExamples } from "./examples/notification-channel";
import { loggerTransportExamples } from "./examples/logger-transport";

export const factoryMethodPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "document-export": documentExportExamples,
    "notification-channel": notificationChannelExamples,
    "logger-transport": loggerTransportExamples,
  },
  realWorldExamples: [
  {
    "title": "Report and document exporters",
    "description": "Create different file exporters such as PDF, CSV, or spreadsheet generators behind one shared export workflow."
  },
  {
    "title": "Notification delivery providers",
    "description": "Instantiate email, SMS, or push sender implementations based on delivery channel or account configuration."
  },
  {
    "title": "Framework and integration extension points",
    "description": "Let subclasses or adapters choose which transport, provider, or product implementation a workflow should create."
  }
],
  tradeoffs: [
  "Adds extra indirection and more types compared with direct construction",
  "Can feel unnecessarily abstract when object creation is simple and unlikely to vary"
],
  platforms: [
  "Applications",
  "APIs",
  "Frameworks",
  "Service layers"
],
  integrationNotes: "Factory Method is useful when framework hooks, integrations, or environment-specific workflows need to create interchangeable implementations behind a stable contract.",
  problem: "A workflow needs to create one of several related concrete objects, but constructing them directly in client code spreads creation logic and tightly couples the caller to specific implementations.",
};

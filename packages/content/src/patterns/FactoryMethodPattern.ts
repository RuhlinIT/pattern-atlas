import type { PatternRecord } from "@atlas-patterns/schemas";
import { documentExportExamples } from "./factory-method/documentExportExamples";
import { loggerTransportExamples } from "./factory-method/loggerTransportExamples";
import { notificationChannelExamples } from "./factory-method/notificationChannelExamples";

export const FactoryMethodPattern: PatternRecord = {
  slug: "factory-method",
  name: "Factory Method",
  category: "Creational",
  problem:
    "A workflow needs to create one of several related concrete objects, but constructing them directly in client code spreads creation logic and tightly couples the caller to specific implementations.",
  intent:
    "Define a creation method behind a common interface so specialized creators can decide which concrete product to instantiate without changing the surrounding workflow.",
  tradeoffs: [
    "Adds extra indirection and more types compared with direct construction",
    "Can feel unnecessarily abstract when object creation is simple and unlikely to vary",
  ],
  languages: ["TypeScript", "Java", "Python", "Angular"],
  platforms: ["Applications", "APIs", "Frameworks", "Service layers"],
  integrationNotes:
    "Factory Method is useful when framework hooks, integrations, or environment-specific workflows need to create interchangeable implementations behind a stable contract.",
  scenarios: [
    {
      slug: "document-export",
      title: "Document export",
      summary:
        "A reporting workflow uses a factory method to choose the right exporter for PDF, CSV, or other output formats while keeping the export flow consistent.",
      languageExamples: documentExportExamples,
    },
    {
      slug: "notification-channel",
      title: "Notification channel",
      summary:
        "A notification service delegates sender creation to channel-specific creators so email, SMS, and push delivery can vary without changing the notification workflow.",
      languageExamples: notificationChannelExamples,
    },
    {
      slug: "logger-transport",
      title: "Logger transport",
      summary:
        "An application selects console, file, or remote logging transports through specialized factories so environments can change the concrete logger implementation cleanly.",
      languageExamples: loggerTransportExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Report and document exporters",
      description:
        "Create different file exporters such as PDF, CSV, or spreadsheet generators behind one shared export workflow.",
    },
    {
      title: "Notification delivery providers",
      description:
        "Instantiate email, SMS, or push sender implementations based on delivery channel or account configuration.",
    },
    {
      title: "Framework and integration extension points",
      description:
        "Let subclasses or adapters choose which transport, provider, or product implementation a workflow should create.",
    },
  ],
};
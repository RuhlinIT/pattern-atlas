import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { java as dataSourceAbstractionJava } from "./examples/data-source-abstraction/java";
import { python as dataSourceAbstractionPython } from "./examples/data-source-abstraction/python";
import { react as dataSourceAbstractionReact } from "./examples/data-source-abstraction/react";
import { typescript as dataSourceAbstractionTypescript } from "./examples/data-source-abstraction/typescript";

import { angular as notificationDeliveryAngular } from "./examples/notification-delivery/angular";
import { react as notificationDeliveryReact } from "./examples/notification-delivery/react";
import { typescript as notificationDeliveryTypescript } from "./examples/notification-delivery/typescript";

import { csharp as paymentRoutingCsharp } from "./examples/payment-routing/csharp";
import { dotnet as paymentRoutingDotnet } from "./examples/payment-routing/dotnet";
import { java as paymentRoutingJava } from "./examples/payment-routing/java";
import { python as paymentRoutingPython } from "./examples/payment-routing/python";
import { typescript as paymentRoutingTypescript } from "./examples/payment-routing/typescript";

import { angular as printerDriverLayerAngular } from "./examples/printer-driver-layer/angular";
import { reactNative as printerDriverLayerReactNative } from "./examples/printer-driver-layer/react-native";
import { typescript as printerDriverLayerTypescript } from "./examples/printer-driver-layer/typescript";

import { angular as remoteControlBridgeAngular } from "./examples/remote-control-bridge/angular";
import { java as remoteControlBridgeJava } from "./examples/remote-control-bridge/java";
import { python as remoteControlBridgePython } from "./examples/remote-control-bridge/python";
import { react as remoteControlBridgeReact } from "./examples/remote-control-bridge/react";
import { typescript as remoteControlBridgeTypescript } from "./examples/remote-control-bridge/typescript";

import { angular as shapeRendererBridgeAngular } from "./examples/shape-renderer-bridge/angular";
import { java as shapeRendererBridgeJava } from "./examples/shape-renderer-bridge/java";
import { python as shapeRendererBridgePython } from "./examples/shape-renderer-bridge/python";
import { react as shapeRendererBridgeReact } from "./examples/shape-renderer-bridge/react";
import { typescript as shapeRendererBridgeTypescript } from "./examples/shape-renderer-bridge/typescript";

const dataSourceAbstractionExamples = normalizeExamples({
  java: dataSourceAbstractionJava,
  python: dataSourceAbstractionPython,
  react: dataSourceAbstractionReact,
  typescript: dataSourceAbstractionTypescript,
});

const notificationDeliveryExamples = normalizeExamples({
  angular: notificationDeliveryAngular,
  react: notificationDeliveryReact,
  typescript: notificationDeliveryTypescript,
});

const paymentRoutingExamples = normalizeExamples({
  csharp: paymentRoutingCsharp,
  dotnet: paymentRoutingDotnet,
  java: paymentRoutingJava,
  python: paymentRoutingPython,
  typescript: paymentRoutingTypescript,
});

const printerDriverLayerExamples = normalizeExamples({
  angular: printerDriverLayerAngular,
  "react-native": printerDriverLayerReactNative,
  typescript: printerDriverLayerTypescript,
});

const remoteControlBridgeExamples = normalizeExamples({
  angular: remoteControlBridgeAngular,
  java: remoteControlBridgeJava,
  python: remoteControlBridgePython,
  react: remoteControlBridgeReact,
  typescript: remoteControlBridgeTypescript,
});

const shapeRendererBridgeExamples = normalizeExamples({
  angular: shapeRendererBridgeAngular,
  java: shapeRendererBridgeJava,
  python: shapeRendererBridgePython,
  react: shapeRendererBridgeReact,
  typescript: shapeRendererBridgeTypescript,
});

export const bridgePattern: PatternRecord = {
  ...meta,
  problem:
    "When an abstraction is tightly coupled to its implementation, changing one side forces changes in the other and makes the system harder to evolve.",
  tradeoffs: [
    "Adds an extra layer of indirection.",
    "Can increase the number of moving parts.",
    "Makes abstractions and implementations easier to evolve independently.",
  ],
  platforms: ["web", "backend", "mobile", "integration", "ui"],
  integrationNotes:
    "Bridge is useful when you want one stable abstraction while swapping implementations for providers, environments, or device targets.",
  scenarios,
  scenarioExamples: {
    "data-source-abstraction": dataSourceAbstractionExamples,
    "notification-delivery": notificationDeliveryExamples,
    "payment-routing": paymentRoutingExamples,
    "printer-driver-layer": printerDriverLayerExamples,
    "remote-control-bridge": remoteControlBridgeExamples,
    "shape-renderer-bridge": shapeRendererBridgeExamples,
  },
  variants: [
    {
      slug: "data-source-abstraction",
      title: "Data source abstraction",
      layer: "backend",
      language: "typescript",
      summary:
        "A reporting layer reads from SQL, API, or file-based sources without changing the reporting logic.",
      intent:
        "Keep reporting logic stable while changing the data-source implementation.",
      solution:
        "Use Bridge to separate the reporting abstraction from data-source access.",
      examplePatternSlugs: ["bridge"],
    },
    {
      slug: "notification-delivery",
      title: "Notification delivery",
      layer: "integration",
      language: "typescript",
      summary:
        "A notification system sends the same message via email, SMS, or push without changing the sending flow.",
      intent:
        "Keep notification content separate from channel delivery.",
      solution:
        "Use Bridge to decouple notification behavior from delivery providers.",
      examplePatternSlugs: ["bridge"],
    },
    {
      slug: "payment-routing",
      title: "Payment routing",
      layer: "integration",
      language: "typescript",
      summary:
        "A checkout flow routes payments through Stripe, Adyen, or PayPal while keeping the checkout API stable.",
      intent:
        "Keep checkout behavior stable while swapping payment providers.",
      solution:
        "Use Bridge to separate checkout logic from provider-specific payment handling.",
      examplePatternSlugs: ["bridge"],
    },
    {
      slug: "printer-driver-layer",
      title: "Printer driver layer",
      layer: "backend",
      language: "typescript",
      summary:
        "A document app prints to local, network, or cloud printers through interchangeable driver implementations.",
      intent:
        "Keep document rendering separate from printer backend behavior.",
      solution:
        "Use Bridge to decouple document rendering from printer drivers.",
      examplePatternSlugs: ["bridge"],
    },
    {
      slug: "remote-control-bridge",
      title: "Remote control bridge",
      layer: "frontend",
      language: "typescript",
      summary:
        "A remote control triggers TVs, speakers, and streaming devices through interchangeable device implementations.",
      intent:
        "Keep remote commands independent from device behavior.",
      solution:
        "Use Bridge to separate remote control actions from device implementations.",
      examplePatternSlugs: ["bridge"],
    },
    {
      slug: "shape-renderer-bridge",
      title: "Shape renderer bridge",
      layer: "frontend",
      language: "typescript",
      summary:
        "Shapes like circles and rectangles can be drawn on screens, canvases, or SVG backends without changing the shape logic.",
      intent:
        "Keep shape behavior independent from rendering APIs.",
      solution:
        "Use Bridge to separate shape abstraction from rendering implementation.",
      examplePatternSlugs: ["bridge"],
    },
  ],
  realWorldExamples: [
    {
      title: "Cross-database reporting",
      description:
        "Reporting systems often need one query abstraction while switching between SQL engines and data providers.",
    },
    {
      title: "Multi-channel messaging",
      description:
        "Notification platforms need to keep message composition separate from delivery channels like email, SMS, and push.",
    },
    {
      title: "Payment processor support",
      description:
        "E-commerce systems frequently need one checkout flow while swapping payment gateways by region or merchant.",
    },
  ],
};
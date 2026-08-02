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
      slug: "bridge-backend-provider",
      title: "Backend provider bridge",
      stackArea: "backend",
      language: "typescript",
      summary:
        "Bridge a stable business abstraction to interchangeable backend providers such as databases, printers, or legacy systems.",
      intent:
        "Keep business logic independent from provider-specific implementation details.",
      problem:
        "Backend code becomes brittle when service behavior depends directly on a concrete provider.",
      solution:
        "Introduce a provider bridge that separates the abstraction from the implementation behind it.",
      dependencies: ["bridge"],
      relatedVariants: ["bridge-integration-contract", "bridge-device-control"],
      examplePatternSlugs: ["bridge"],
      notes:
        "Use this variant when the abstraction stays stable but the backend target can change by tenant, region, or vendor.",
    },
    {
      slug: "bridge-integration-contract",
      title: "Integration contract bridge",
      stackArea: "integration",
      language: "typescript",
      summary:
        "Bridge between internal workflows and external contracts such as payment gateways, message buses, or third-party APIs.",
      intent:
        "Keep internal orchestration stable while external contracts vary independently.",
      problem:
        "Integration logic becomes costly when each vendor or endpoint change leaks into the workflow layer.",
      solution:
        "Use a bridge to isolate the workflow abstraction from provider-specific contracts.",
      dependencies: ["bridge"],
      relatedVariants: ["bridge-backend-provider", "bridge-device-control"],
      examplePatternSlugs: ["bridge"],
      notes:
        "This is the right shape when you own the orchestration and swap vendors, gateways, or adapters underneath it.",
    },
    {
      slug: "bridge-device-control",
      title: "Device control bridge",
      stackArea: "frontend",
      language: "typescript",
      summary:
        "Bridge UI controls to different devices or rendering targets while preserving one control surface.",
      intent:
        "Keep the user-facing abstraction stable while device behavior varies behind it.",
      problem:
        "UI code becomes hard to evolve when controls are directly wired to specific device implementations.",
      solution:
        "Use a bridge so the control layer delegates to a replaceable device implementation.",
      dependencies: ["bridge"],
      relatedVariants: ["bridge-backend-provider", "bridge-integration-contract"],
      examplePatternSlugs: ["bridge"],
      notes:
        "This fits remotes, dashboards, canvas renderers, and any UI that needs to target multiple implementations.",
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
import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { typescript as uiThemeKitTypescript } from "./scenarios/ui-theme-kit/typescript";
import { react as uiThemeKitReact } from "./scenarios/ui-theme-kit/react";
import { angular as uiThemeKitAngular } from "./scenarios/ui-theme-kit/angular";

import { typescript as cloudProviderKitTypescript } from "./scenarios/cloud-provider-kit/typescript";
import { java as cloudProviderKitJava } from "./scenarios/cloud-provider-kit/java";
import { python as cloudProviderKitPython } from "./scenarios/cloud-provider-kit/python";

import { typescript as gameEnvironmentKitTypescript } from "./scenarios/game-environment-kit/typescript";
import { java as gameEnvironmentKitJava } from "./scenarios/game-environment-kit/java";
import { python as gameEnvironmentKitPython } from "./scenarios/game-environment-kit/python";

import { typescript as documentSuiteTypescript } from "./scenarios/document-suite/typescript";
import { java as documentSuiteJava } from "./scenarios/document-suite/java";
import { python as documentSuitePython } from "./scenarios/document-suite/python";

import { typescript as deviceOsKitTypescript } from "./scenarios/device-os-kit/typescript";
import { react as deviceOsKitReact } from "./scenarios/device-os-kit/react";
import { angular as deviceOsKitAngular } from "./scenarios/device-os-kit/angular";

import { typescript as analyticsStackKitTypescript } from "./scenarios/analytics-stack-kit/typescript";
import { java as analyticsStackKitJava } from "./scenarios/analytics-stack-kit/java";
import { python as analyticsStackKitPython } from "./scenarios/analytics-stack-kit/python";

const uiThemeKitExamples = normalizeExamples({
  typescript: uiThemeKitTypescript,
  react: uiThemeKitReact,
  angular: uiThemeKitAngular,
});

const cloudProviderKitExamples = normalizeExamples({
  typescript: cloudProviderKitTypescript,
  java: cloudProviderKitJava,
  python: cloudProviderKitPython,
});

const gameEnvironmentKitExamples = normalizeExamples({
  typescript: gameEnvironmentKitTypescript,
  java: gameEnvironmentKitJava,
  python: gameEnvironmentKitPython,
});

const documentSuiteExamples = normalizeExamples({
  typescript: documentSuiteTypescript,
  java: documentSuiteJava,
  python: documentSuitePython,
});

const deviceOsKitExamples = normalizeExamples({
  typescript: deviceOsKitTypescript,
  react: deviceOsKitReact,
  angular: deviceOsKitAngular,
});

const analyticsStackKitExamples = normalizeExamples({
  typescript: analyticsStackKitTypescript,
  java: analyticsStackKitJava,
  python: analyticsStackKitPython,
});

export const abstractFactoryPattern: PatternRecord = {
  ...meta,
  problem:
    "Client code needs to create families of related objects, but hardcoding concrete classes makes the code rigid and hard to swap.",
  tradeoffs: [
    "Adds an extra abstraction layer.",
    "Can overcomplicate simple object creation.",
    "Makes family-wide swapping and consistency much easier.",
  ],
  platforms: ["applications", "ui systems", "integration layers"],
  integrationNotes:
    "Abstract Factory is especially useful when your app must produce matching sets of related objects for a theme, provider, platform, or pipeline.",
  scenarios,
  scenarioExamples: {
    "ui-theme-kit": uiThemeKitExamples,
    "cloud-provider-kit": cloudProviderKitExamples,
    "game-environment-kit": gameEnvironmentKitExamples,
    "document-suite": documentSuiteExamples,
    "device-os-kit": deviceOsKitExamples,
    "analytics-stack-kit": analyticsStackKitExamples,
  },
  variants: [
    {
      slug: "abstract-factory-theme-system",
      title: "Theme system factory",
      stackArea: "frontend",
      language: "typescript",
      summary:
        "Create matching UI component families for a selected visual theme.",
      intent: "Keep themed UI components consistent across a screen or application.",
      problem:
        "Theme-specific components become inconsistent when each one is created independently.",
      solution:
        "Use Abstract Factory to create an aligned set of themed UI objects.",
      dependencies: ["abstract-factory"],
      relatedVariants: ["abstract-factory-provider-kit", "abstract-factory-platform-kit"],
      examplePatternSlugs: ["abstract-factory"],
      notes:
        "Useful for design systems, theming engines, and component libraries.",
    },
    {
      slug: "abstract-factory-provider-kit",
      title: "Provider kit factory",
      stackArea: "integration",
      language: "java",
      summary:
        "Create a consistent family of clients for one external vendor or service provider.",
      intent: "Hide provider-specific setup behind one factory interface.",
      problem:
        "Vendor branching spreads across the app when each client is built separately.",
      solution:
        "Use Abstract Factory to assemble the correct provider-specific client set.",
      dependencies: ["abstract-factory"],
      relatedVariants: ["abstract-factory-theme-system", "abstract-factory-platform-kit"],
      examplePatternSlugs: ["abstract-factory"],
      notes:
        "Fits payment providers, cloud providers, and third-party SDK families.",
    },
    {
      slug: "abstract-factory-platform-kit",
      title: "Platform kit factory",
      stackArea: "frontend",
      language: "react",
      summary:
        "Create a family of platform-specific UI and behavior objects for a target device class.",
      intent: "Keep platform-aware creation logic in one place.",
      problem:
        "Platform checks scattered through constructors make app logic brittle.",
      solution:
        "Use Abstract Factory to build the correct platform object family.",
      dependencies: ["abstract-factory"],
      relatedVariants: ["abstract-factory-theme-system", "abstract-factory-provider-kit"],
      examplePatternSlugs: ["abstract-factory"],
      notes:
        "Good for mobile, desktop, and responsive UI system variation.",
    },
  ],
  realWorldExamples: [
    {
      title: "Themed component kits",
      description:
        "Generate matching buttons, inputs, and dialog styles from one theme-aware factory.",
    },
    {
      title: "Cloud provider integrations",
      description:
        "Create coordinated storage, queue, and compute clients for one provider without leaking vendor logic.",
    },
    {
      title: "Platform-specific app shells",
      description:
        "Build the correct object family for mobile, tablet, or desktop from one abstract factory.",
    },
  ],
};
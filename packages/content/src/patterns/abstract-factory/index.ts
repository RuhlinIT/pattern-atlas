import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { typescript as modernOfficeSetupTypescript } from "./examples/modern-office-setup/typescript";
import { java as modernOfficeSetupJava } from "./examples/modern-office-setup/java";
import { python as modernOfficeSetupPython } from "./examples/modern-office-setup/python";

import { typescript as uiComponentSuiteTypescript } from "./examples/ui-component-suite/typescript";
import { react as uiComponentSuiteReact } from "./examples/ui-component-suite/react";
import { angular as uiComponentSuiteAngular } from "./examples/ui-component-suite/angular";

import { typescript as backendProductLineTypescript } from "./examples/backend-product-line/typescript";
import { java as backendProductLineJava } from "./examples/backend-product-line/java";
import { python as backendProductLinePython } from "./examples/backend-product-line/python";

import { typescript as integrationVendorBridgeTypescript } from "./examples/integration-vendor-bridge/typescript";
import { react as integrationVendorBridgeReact } from "./examples/integration-vendor-bridge/react";

import { typescript as mobileDeviceFamilyTypescript } from "./examples/mobile-device-family/typescript";
import { java as mobileDeviceFamilyJava } from "./examples/mobile-device-family/java";
import { python as mobileDeviceFamilyPython } from "./examples/mobile-device-family/python";
import { reactNative as mobileDeviceFamilyReactNative } from "./examples/mobile-device-family/react-native";

import { typescript as documentGenerationFamilyTypescript } from "./examples/document-generation-family/typescript";
import { java as documentGenerationFamilyJava } from "./examples/document-generation-family/java";
import { python as documentGenerationFamilyPython } from "./examples/document-generation-family/python";
import { csharp as documentGenerationFamilyCsharp } from "./examples/document-generation-family/csharp";
import { dotnet as documentGenerationFamilyDotnet } from "./examples/document-generation-family/dotnet";

const modernOfficeSetupExamples = normalizeExamples({
  typescript: modernOfficeSetupTypescript,
  java: modernOfficeSetupJava,
  python: modernOfficeSetupPython,
});

const uiComponentSuiteExamples = normalizeExamples({
  typescript: uiComponentSuiteTypescript,
  react: uiComponentSuiteReact,
  angular: uiComponentSuiteAngular,
});

const backendProductLineExamples = normalizeExamples({
  typescript: backendProductLineTypescript,
  java: backendProductLineJava,
  python: backendProductLinePython,
});

const integrationVendorBridgeExamples = normalizeExamples({
  typescript: integrationVendorBridgeTypescript,
  react: integrationVendorBridgeReact,
});

const mobileDeviceFamilyExamples = normalizeExamples({
  typescript: mobileDeviceFamilyTypescript,
  java: mobileDeviceFamilyJava,
  python: mobileDeviceFamilyPython,
  "react-native": mobileDeviceFamilyReactNative,
});

const documentGenerationFamilyExamples = normalizeExamples({
  typescript: documentGenerationFamilyTypescript,
  java: documentGenerationFamilyJava,
  python: documentGenerationFamilyPython,
  csharp: documentGenerationFamilyCsharp,
  dotnet: documentGenerationFamilyDotnet,
});

export const abstractFactoryPattern: PatternRecord = {
  ...meta,
  problem:
    "When related objects are created independently, they can drift out of sync and become hard to swap as a family.",
  tradeoffs: [
    "Adds more abstraction and more types.",
    "Can be overkill for simple object creation.",
    "Makes it easier to swap entire families of objects consistently.",
  ],
  platforms: ["frontend", "backend", "integration"],
  integrationNotes:
    "Abstract Factory is most useful when a product family must remain consistent across themes, tenants, vendors, or platforms.",
  scenarios,
  scenarioExamples: {
    "modern-office-setup": modernOfficeSetupExamples,
    "ui-component-suite": uiComponentSuiteExamples,
    "backend-product-line": backendProductLineExamples,
    "integration-vendor-bridge": integrationVendorBridgeExamples,
    "mobile-device-family": mobileDeviceFamilyExamples,
    "document-generation-family": documentGenerationFamilyExamples,
  },
  variants: [
    {
      slug: "abstract-factory-theme-family",
      title: "Theme family factory",
      stackArea: "frontend",
      language: "typescript",
      summary:
        "Create coordinated UI families such as buttons, forms, and cards for each theme.",
      intent:
        "Keep theme selection separate from component construction.",
      problem:
        "UI families drift when each control is created independently.",
      solution:
        "Use an abstract factory to build a matched set of themed UI components.",
      dependencies: ["abstract factory"],
      relatedVariants: ["abstract-factory-tenant-family", "abstract-factory-integration-family"],
      examplePatternSlugs: ["abstract-factory"],
      notes:
        "This is the best fit when the variation is primarily visual or interaction-focused.",
    },
    {
      slug: "abstract-factory-tenant-family",
      title: "Tenant family factory",
      stackArea: "backend",
      language: "java",
      summary:
        "Create tenant-specific backend object families such as repositories, services, and workflows.",
      intent:
        "Keep tenant or region selection separate from backend object creation.",
      problem:
        "Tenant-specific backend objects become inconsistent when each one is wired separately.",
      solution:
        "Use an abstract factory to produce a matched set of tenant-aware backend components.",
      dependencies: ["abstract factory"],
      relatedVariants: ["abstract-factory-theme-family", "abstract-factory-integration-family"],
      examplePatternSlugs: ["abstract-factory"],
      notes:
        "Use this when backend behavior varies by deployment target, customer, or locale.",
    },
    {
      slug: "abstract-factory-integration-family",
      title: "Integration family factory",
      stackArea: "integration",
      language: "typescript",
      summary:
        "Create vendor-specific integration families such as clients, transformers, and adapters.",
      intent:
        "Keep external vendor selection separate from integration wiring.",
      problem:
        "Integrations become hard to swap when provider-specific code leaks across the system.",
      solution:
        "Use an abstract factory to assemble a vendor-aligned integration family behind one contract.",
      dependencies: ["abstract factory"],
      relatedVariants: ["abstract-factory-theme-family", "abstract-factory-tenant-family"],
      examplePatternSlugs: ["abstract-factory"],
      notes:
        "This variant is useful when the pattern is mainly about external dependencies and provider switching.",
    },
  ],
  realWorldExamples: [
    {
      title: "Theming engines",
      description:
        "Design systems often need families of UI controls that change together for light and dark themes.",
    },
    {
      title: "Tenant-aware provisioning",
      description:
        "Backend platforms commonly create families of tenant-specific services, repositories, and workflows.",
    },
    {
      title: "Vendor integration kits",
      description:
        "Integration layers often bundle vendor-specific clients, mappers, and handlers as one unit.",
    },
  ],
};
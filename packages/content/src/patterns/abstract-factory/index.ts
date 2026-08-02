import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { angular as modernOfficeSetupAngular } from "./examples/modern-office-setup/angular";
import { csharp as modernOfficeSetupCsharp } from "./examples/modern-office-setup/csharp";
import { dotnet as modernOfficeSetupDotnet } from "./examples/modern-office-setup/dotnet";
import { java as modernOfficeSetupJava } from "./examples/modern-office-setup/java";
import { python as modernOfficeSetupPython } from "./examples/modern-office-setup/python";
import { reactNative as modernOfficeSetupReactNative } from "./examples/modern-office-setup/react-native";
import { react as modernOfficeSetupReact } from "./examples/modern-office-setup/react";
import { typescript as modernOfficeSetupTypescript } from "./examples/modern-office-setup/typescript";

import { angular as uiComponentSuiteAngular } from "./examples/ui-component-suite/angular";
import { csharp as uiComponentSuiteCsharp } from "./examples/ui-component-suite/csharp";
import { dotnet as uiComponentSuiteDotnet } from "./examples/ui-component-suite/dotnet";
import { java as uiComponentSuiteJava } from "./examples/ui-component-suite/java";
import { python as uiComponentSuitePython } from "./examples/ui-component-suite/python";
import { react as uiComponentSuiteReact } from "./examples/ui-component-suite/react";
import { typescript as uiComponentSuiteTypescript } from "./examples/ui-component-suite/typescript";

import { java as backendProductLineJava } from "./examples/backend-product-line/java";
import { python as backendProductLinePython } from "./examples/backend-product-line/python";
import { typescript as backendProductLineTypescript } from "./examples/backend-product-line/typescript";

import { angular as integrationVendorBridgeAngular } from "./examples/integration-vendor-bridge/angular";
import { react as integrationVendorBridgeReact } from "./examples/integration-vendor-bridge/react";
import { typescript as integrationVendorBridgeTypescript } from "./examples/integration-vendor-bridge/typescript";

import { csharp as mobileDeviceFamilyCsharp } from "./examples/mobile-device-family/csharp";
import { dotnet as mobileDeviceFamilyDotnet } from "./examples/mobile-device-family/dotnet";
import { reactNative as mobileDeviceFamilyReactNative } from "./examples/mobile-device-family/react-native";

import { csharp as documentGenerationFamilyCsharp } from "./examples/document-generation-family/csharp";
import { dotnet as documentGenerationFamilyDotnet } from "./examples/document-generation-family/dotnet";
import { typescript as documentGenerationFamilyTypescript } from "./examples/document-generation-family/typescript";

const modernOfficeSetupExamples = normalizeExamples({
  angular: modernOfficeSetupAngular,
  csharp: modernOfficeSetupCsharp,
  dotnet: modernOfficeSetupDotnet,
  java: modernOfficeSetupJava,
  python: modernOfficeSetupPython,
  "react-native": modernOfficeSetupReactNative,
  react: modernOfficeSetupReact,
  typescript: modernOfficeSetupTypescript,
});

const uiComponentSuiteExamples = normalizeExamples({
  angular: uiComponentSuiteAngular,
  csharp: uiComponentSuiteCsharp,
  dotnet: uiComponentSuiteDotnet,
  java: uiComponentSuiteJava,
  python: uiComponentSuitePython,
  react: uiComponentSuiteReact,
  typescript: uiComponentSuiteTypescript,
});

const backendProductLineExamples = normalizeExamples({
  java: backendProductLineJava,
  python: backendProductLinePython,
  typescript: backendProductLineTypescript,
});

const integrationVendorBridgeExamples = normalizeExamples({
  angular: integrationVendorBridgeAngular,
  react: integrationVendorBridgeReact,
  typescript: integrationVendorBridgeTypescript,
});

const mobileDeviceFamilyExamples = normalizeExamples({
  csharp: mobileDeviceFamilyCsharp,
  dotnet: mobileDeviceFamilyDotnet,
  "react-native": mobileDeviceFamilyReactNative,
});

const documentGenerationFamilyExamples = normalizeExamples({
  csharp: documentGenerationFamilyCsharp,
  dotnet: documentGenerationFamilyDotnet,
  typescript: documentGenerationFamilyTypescript,
});

export const abstractFactoryPattern: PatternRecord = {
  ...meta,
  problem:
    "A system needs families of related objects created together, but direct construction ties clients to specific concrete classes and makes switching product families difficult.",
  tradeoffs: [
    "Can introduce many interfaces and classes for each product family.",
    "May be more complex than necessary if the system only creates a few unrelated objects.",
    "Can improve consistency when whole families need to change together.",
  ],
  platforms: ["web", "backend", "mobile", "ui kits", "cross-platform systems"],
  integrationNotes:
    "Abstract Factory is useful when the application must stay consistent across themes, platforms, or vendor-specific product families, such as UI kits, backend tenant provisioning, or third-party integrations.",
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
      slug: "modern-office-setup",
      title: "Modern office setup",
      layer: "integration",
      language: "typescript",
      summary:
        "A workplace factory creates matching desks, chairs, and cabinets for a modern or classic office theme.",
      intent:
        "Create a coordinated family of office objects that switch together by theme.",
      solution:
        "Use an abstract factory to produce a theme-consistent family of office products.",
      examplePatternSlugs: ["abstract-factory"],
    },
    {
      slug: "ui-component-suite",
      title: "UI component suite",
      layer: "frontend",
      language: "typescript",
      summary:
        "A design system factory provides related buttons, inputs, cards, and alerts for light and dark themes without visual drift.",
      intent:
        "Create a coordinated family of frontend components for each theme.",
      solution:
        "Use an abstract factory to build a consistent set of frontend UI objects.",
      examplePatternSlugs: ["abstract-factory"],
    },
    {
      slug: "backend-product-line",
      title: "Backend product line",
      layer: "backend",
      language: "typescript",
      summary:
        "A backend service provisions a consistent family of resources, rules, and workflows for each tenant or region.",
      intent:
        "Create a backend family that varies by tenant, region, or deployment target.",
      solution:
        "Use an abstract factory to provision tenant-specific backend objects together.",
      examplePatternSlugs: ["abstract-factory"],
    },
    {
      slug: "integration-vendor-bridge",
      title: "Integration vendor bridge",
      layer: "integration",
      language: "typescript",
      summary:
        "An integration layer builds matching adapters, transformers, and clients for different vendors or external APIs.",
      intent:
        "Keep vendor-specific integration logic behind one stable contract.",
      solution:
        "Use an abstract factory to create a vendor-specific integration family.",
      examplePatternSlugs: ["abstract-factory"],
    },
    {
      slug: "mobile-device-family",
      title: "Mobile device family",
      layer: "frontend",
      language: "react-native",
      summary:
        "A mobile app creates coordinated UI and service objects for iOS and Android variants while keeping app behavior aligned.",
      intent:
        "Create device-specific mobile families with a consistent shape.",
      solution:
        "Use an abstract factory to build mobile objects tuned to device conventions.",
      examplePatternSlugs: ["abstract-factory"],
    },
    {
      slug: "document-generation-family",
      title: "Document generation family",
      layer: "integration",
      language: "typescript",
      summary:
        "A document system creates consistent invoices, receipts, and reports for each brand or locale.",
      intent:
        "Generate document families that share brand and locale rules.",
      solution:
        "Use an abstract factory to assemble document templates and formatting together.",
      examplePatternSlugs: ["abstract-factory"],
    },
  ],
  realWorldExamples: [
    {
      title: "Themeable design systems",
      description:
        "Applications often need a consistent family of UI controls that change together when the theme changes.",
    },
    {
      title: "Cross-platform product lines",
      description:
        "A platform might create compatible services, controls, and adapters for each vendor or deployment target.",
    },
    {
      title: "Brand-specific product kits",
      description:
        "Businesses sometimes need matching sets of documents, assets, or interface components that vary by brand family.",
    },
    {
      title: "Tenant-aware backend provisioning",
      description:
        "A SaaS backend may need to create a coherent set of tenant-specific resources and workflows per customer tier.",
    },
    {
      title: "Vendor integration packs",
      description:
        "An integration platform may need a complete set of vendor-specific adapters, transforms, and API clients.",
    },
  ],
};
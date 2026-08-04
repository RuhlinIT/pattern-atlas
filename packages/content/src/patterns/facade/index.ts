import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { typescript as checkoutWorkflowTypescript } from "./scenarios/checkout-workflow/typescript";
import { java as checkoutWorkflowJava } from "./scenarios/checkout-workflow/java";
import { python as checkoutWorkflowPython } from "./scenarios/checkout-workflow/python";

import { typescript as videoConversionPipelineTypescript } from "./scenarios/video-conversion-pipeline/typescript";
import { java as videoConversionPipelineJava } from "./scenarios/video-conversion-pipeline/java";
import { python as videoConversionPipelinePython } from "./scenarios/video-conversion-pipeline/python";

import { typescript as homeTheaterStartupTypescript } from "./scenarios/home-theater-startup/typescript";
import { react as homeTheaterStartupReact } from "./scenarios/home-theater-startup/react";
import { angular as homeTheaterStartupAngular } from "./scenarios/home-theater-startup/angular";

import { typescript as accountOnboardingTypescript } from "./scenarios/account-onboarding/typescript";
import { java as accountOnboardingJava } from "./scenarios/account-onboarding/java";

import { typescript as reportGenerationTypescript } from "./scenarios/report-generation/typescript";
import { python as reportGenerationPython } from "./scenarios/report-generation/python";

import { typescript as deviceSetupTypescript } from "./scenarios/device-setup/typescript";
import { react as deviceSetupReact } from "./scenarios/device-setup/react";

const checkoutWorkflowExamples = normalizeExamples({
  typescript: checkoutWorkflowTypescript,
  java: checkoutWorkflowJava,
  python: checkoutWorkflowPython,
});

const videoConversionPipelineExamples = normalizeExamples({
  typescript: videoConversionPipelineTypescript,
  java: videoConversionPipelineJava,
  python: videoConversionPipelinePython,
});

const homeTheaterStartupExamples = normalizeExamples({
  typescript: homeTheaterStartupTypescript,
  react: homeTheaterStartupReact,
  angular: homeTheaterStartupAngular,
});

const accountOnboardingExamples = normalizeExamples({
  typescript: accountOnboardingTypescript,
  java: accountOnboardingJava,
});

const reportGenerationExamples = normalizeExamples({
  typescript: reportGenerationTypescript,
  python: reportGenerationPython,
});

const deviceSetupExamples = normalizeExamples({
  typescript: deviceSetupTypescript,
  react: deviceSetupReact,
});

import { typescript as facadeCoordinatorTypescript } from "./variants/facade-coordinator/typescript";
import { java as facadeCoordinatorJava } from "./variants/facade-coordinator/java";
import { python as facadeCoordinatorPython } from "./variants/facade-coordinator/python";

import { typescript as facadeBootstrapTypescript } from "./variants/facade-bootstrap/typescript";
import { java as facadeBootstrapJava } from "./variants/facade-bootstrap/java";
import { python as facadeBootstrapPython } from "./variants/facade-bootstrap/python";

import { typescript as facadeAdapterLayerTypescript } from "./variants/facade-adapter-layer/typescript";
import { java as facadeAdapterLayerJava } from "./variants/facade-adapter-layer/java";
import { python as facadeAdapterLayerPython } from "./variants/facade-adapter-layer/python";

import { typescript as facadeUiShellTypescript } from "./variants/facade-ui-shell/typescript";
import { react as facadeUiShellReact } from "./variants/facade-ui-shell/react";
import { angular as facadeUiShellAngular } from "./variants/facade-ui-shell/angular";

const facadeCoordinatorExamples = normalizeExamples({
  typescript: facadeCoordinatorTypescript,
  java: facadeCoordinatorJava,
  python: facadeCoordinatorPython,
});

const facadeBootstrapExamples = normalizeExamples({
  typescript: facadeBootstrapTypescript,
  java: facadeBootstrapJava,
  python: facadeBootstrapPython,
});

const facadeAdapterLayerExamples = normalizeExamples({
  typescript: facadeAdapterLayerTypescript,
  java: facadeAdapterLayerJava,
  python: facadeAdapterLayerPython,
});

const facadeUiShellExamples = normalizeExamples({
  typescript: facadeUiShellTypescript,
  react: facadeUiShellReact,
  angular: facadeUiShellAngular,
});

export const facadePattern: PatternRecord = {
  ...meta,
  problem:
    "A client needs to perform a recurring workflow that spans several subsystem classes, but direct coordination makes the code noisy and tightly coupled.",
  tradeoffs: [
    "Can become a dumping ground if boundaries are unclear.",
    "May obscure useful lower-level capabilities from advanced consumers.",
    "Simplifies the most common entry points for the system.",
  ],
  platforms: ["applications", "apis", "service layers"],
  integrationNotes:
    "Facades are useful when exposing a stable boundary over a multi-service or mixed-language backend, or when presenting a consistent UI entry point over multiple readiness checks.",
  scenarios,
  scenarioExamples: {
    "checkout-workflow": checkoutWorkflowExamples,
    "video-conversion-pipeline": videoConversionPipelineExamples,
    "home-theater-startup": homeTheaterStartupExamples,
    "account-onboarding": accountOnboardingExamples,
    "report-generation": reportGenerationExamples,
    "device-setup": deviceSetupExamples,
  },
  variants: [
    {
      slug: "facade-coordinator",
      title: "Coordinator facade",
      stackArea: "backend",
      language: "typescript",
      summary:
        "Expose one method that coordinates several internal services in a predictable order.",
      intent: "Hide workflow orchestration behind a stable API.",
      problem:
        "Callers should not need to understand the order of subsystem calls.",
      solution:
        "Use a facade that coordinates the internal steps and returns one result.",
      dependencies: ["facade"],
      relatedVariants: ["facade-bootstrap", "facade-adapter-layer", "facade-ui-shell"],
      examplePatternSlugs: ["facade"],
      notes:
        "Best for checkout flows, onboarding flows, and other multi-step business processes.",
    },
    {
      slug: "facade-bootstrap",
      title: "Bootstrap facade",
      stackArea: "backend",
      language: "java",
      summary:
        "Wrap initialization and startup dependencies behind a single boot method.",
      intent: "Make complex startup sequences easy to call.",
      problem:
        "Initialization code becomes hard to reuse when it is scattered across callers.",
      solution:
        "Use a facade that centralizes setup, dependency wiring, and health checks.",
      dependencies: ["facade"],
      relatedVariants: ["facade-coordinator", "facade-adapter-layer", "facade-ui-shell"],
      examplePatternSlugs: ["facade"],
      notes:
        "Fits application startup, device setup, and environment boot flows.",
    },
    {
      slug: "facade-adapter-layer",
      title: "Integration facade",
      stackArea: "integration",
      language: "typescript",
      summary:
        "Expose a clean API over external or uneven internal systems by adapting several contracts into one.",
      intent: "Present one stable boundary over integration complexity.",
      problem:
        "External services and legacy systems often have mismatched contracts that leak into client code.",
      solution:
        "Use a facade to normalize the subsystem behind a small set of operations.",
      dependencies: ["facade"],
      relatedVariants: ["facade-coordinator", "facade-bootstrap", "facade-ui-shell"],
      examplePatternSlugs: ["facade"],
      notes:
        "Useful for payment gateways, storage providers, media-processing services, and legacy integrations.",
    },
    {
      slug: "facade-ui-shell",
      title: "UI shell facade",
      stackArea: "frontend",
      language: "react",
      summary:
        "Wrap multiple readiness checks and workflow steps behind one component-friendly interaction surface.",
      intent: "Keep presentation code simple while coordinating app or device readiness.",
      problem:
        "Screens become noisy when they each orchestrate multiple readiness checks and actions.",
      solution:
        "Use a facade component or controller to centralize UI-triggered workflow steps.",
      dependencies: ["facade"],
      relatedVariants: ["facade-coordinator", "facade-bootstrap", "facade-adapter-layer"],
      examplePatternSlugs: ["facade"],
      notes:
        "Good for dashboards, setup screens, and UI entry points that trigger multi-step flows.",
    },
  ],
  realWorldExamples: [
    {
      title: "Checkout orchestration",
      description:
        "Expose a single order placement API while coordinating identity, inventory, payment, and customer messaging services.",
    },
    {
      title: "Media processing services",
      description:
        "Wrap decoding, transcoding, packaging, and storage steps behind one simpler conversion interface.",
    },
    {
      title: "Application startup flows",
      description:
        "Hide multi-step subsystem initialization behind a single boot or setup method.",
    },
    {
      title: "UI entry points",
      description:
        "Centralize screen-level readiness and workflow coordination behind one component or controller.",
    },
  ],
};
import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { typescript as checkoutWorkflowTypescript } from "./examples/checkout-workflow/typescript";
import { java as checkoutWorkflowJava } from "./examples/checkout-workflow/java";
import { python as checkoutWorkflowPython } from "./examples/checkout-workflow/python";

import { typescript as videoConversionPipelineTypescript } from "./examples/video-conversion-pipeline/typescript";
import { java as videoConversionPipelineJava } from "./examples/video-conversion-pipeline/java";
import { python as videoConversionPipelinePython } from "./examples/video-conversion-pipeline/python";

import { typescript as homeTheaterStartupTypescript } from "./examples/home-theater-startup/typescript";
import { react as homeTheaterStartupReact } from "./examples/home-theater-startup/react";
import { angular as homeTheaterStartupAngular } from "./examples/home-theater-startup/angular";

import { typescript as accountOnboardingTypescript } from "./examples/account-onboarding/typescript";
import { java as accountOnboardingJava } from "./examples/account-onboarding/java";

import { typescript as reportGenerationTypescript } from "./examples/report-generation/typescript";
import { python as reportGenerationPython } from "./examples/report-generation/python";

import { typescript as deviceSetupTypescript } from "./examples/device-setup/typescript";
import { react as deviceSetupReact } from "./examples/device-setup/react";

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
    "Facades are useful when exposing a stable boundary over a multi-service or mixed-language backend.",
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
        "Expose a single method that coordinates several subsystems in a predictable order.",
      intent:
        "Hide workflow orchestration behind a stable API.",
      problem:
        "Callers should not need to understand the order of subsystem calls.",
      solution:
        "Use a facade that coordinates the internal steps and returns one result.",
      dependencies: ["facade"],
      relatedVariants: ["facade-bootstrap", "facade-adapter-layer"],
      examplePatternSlugs: ["facade"],
      notes:
        "Good for checkout flows, onboarding flows, and any multi-step business process.",
    },
    {
      slug: "facade-bootstrap",
      title: "Bootstrap facade",
      stackArea: "backend",
      language: "java",
      summary:
        "Wrap initialization and startup dependencies behind a single boot method.",
      intent:
        "Make complex startup sequences easy to call.",
      problem:
        "Initialization code becomes hard to reuse when it is scattered across callers.",
      solution:
        "Use a facade that centralizes setup, dependency wiring, and health checks.",
      dependencies: ["facade"],
      relatedVariants: ["facade-coordinator", "facade-adapter-layer"],
      examplePatternSlugs: ["facade"],
      notes:
        "Fits application startup, device setup, and environment boot flows.",
    },
    {
      slug: "facade-adapter-layer",
      title: "Adapter-backed facade",
      stackArea: "backend",
      language: "typescript",
      summary:
        "Expose a simple API over a subsystem while adapting multiple internal services to that API.",
      intent:
        "Present a clean boundary over uneven internal interfaces.",
      problem:
        "Internal services often have mismatched contracts that leak into client code.",
      solution:
        "Use a facade to normalize the subsystem behind a small set of operations.",
      dependencies: ["facade"],
      relatedVariants: ["facade-coordinator", "facade-bootstrap"],
      examplePatternSlugs: ["facade"],
      notes:
        "Useful when integrating payment, storage, or media-processing services.",
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
  ],
};
import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { typescript as apiRequestConstructionTypescript } from "./examples/api-request-construction/typescript";
import { python as apiRequestConstructionPython } from "./examples/api-request-construction/python";

import { typescript as reportGenerationTypescript } from "./examples/report-generation/typescript";
import { java as reportGenerationJava } from "./examples/report-generation/java";
import { python as reportGenerationPython } from "./examples/report-generation/python";

import { typescript as uiFormAssemblyTypescript } from "./examples/ui-form-assembly/typescript";
import { react as uiFormAssemblyReact } from "./examples/ui-form-assembly/react";

import { typescript as configurationAssemblyTypescript } from "./examples/configuration-assembly/typescript";
import { java as configurationAssemblyJava } from "./examples/configuration-assembly/java";

import { typescript as documentCompositionTypescript } from "./examples/document-composition/typescript";
import { dotnet as documentCompositionDotnet } from "./examples/document-composition/dotnet";

import { typescript as characterCreationTypescript } from "./examples/character-creation/typescript";
import { python as characterCreationPython } from "./examples/character-creation/python";
import { java as characterCreationJava } from "./examples/character-creation/java";
import { react as characterCreationReact } from "./examples/character-creation/react";
import { angular as characterCreationAngular } from "./examples/character-creation/angular";
import { go as characterCreationGo } from "./examples/character-creation/go";
import { csharp as characterCreationCsharp } from "./examples/character-creation/csharp";
import { dotnet as characterCreationDotnet } from "./examples/character-creation/dotnet";

import { typescript as pizzaOrderConstructionTypescript } from "./examples/pizza-order-construction/typescript";
import { python as pizzaOrderConstructionPython } from "./examples/pizza-order-construction/python";
import { java as pizzaOrderConstructionJava } from "./examples/pizza-order-construction/java";
import { react as pizzaOrderConstructionReact } from "./examples/pizza-order-construction/react";
import { angular as pizzaOrderConstructionAngular } from "./examples/pizza-order-construction/angular";
import { go as pizzaOrderConstructionGo } from "./examples/pizza-order-construction/go";
import { csharp as pizzaOrderConstructionCsharp } from "./examples/pizza-order-construction/csharp";
import { dotnet as pizzaOrderConstructionDotnet } from "./examples/pizza-order-construction/dotnet";

const apiRequestConstructionExamples = normalizeExamples({
  typescript: apiRequestConstructionTypescript,
  python: apiRequestConstructionPython,
});

const reportGenerationExamples = normalizeExamples({
  typescript: reportGenerationTypescript,
  java: reportGenerationJava,
  python: reportGenerationPython,
});

const uiFormAssemblyExamples = normalizeExamples({
  typescript: uiFormAssemblyTypescript,
  react: uiFormAssemblyReact,
});

const configurationAssemblyExamples = normalizeExamples({
  typescript: configurationAssemblyTypescript,
  java: configurationAssemblyJava,
});

const documentCompositionExamples = normalizeExamples({
  typescript: documentCompositionTypescript,
  dotnet: documentCompositionDotnet,
});

const characterCreationExamples = normalizeExamples({
  typescript: characterCreationTypescript,
  python: characterCreationPython,
  java: characterCreationJava,
  react: characterCreationReact,
  angular: characterCreationAngular,
  go: characterCreationGo,
  csharp: characterCreationCsharp,
  dotnet: characterCreationDotnet,
});

const pizzaOrderConstructionExamples = normalizeExamples({
  typescript: pizzaOrderConstructionTypescript,
  python: pizzaOrderConstructionPython,
  java: pizzaOrderConstructionJava,
  react: pizzaOrderConstructionReact,
  angular: pizzaOrderConstructionAngular,
  go: pizzaOrderConstructionGo,
  csharp: pizzaOrderConstructionCsharp,
  dotnet: pizzaOrderConstructionDotnet,
});

export const builderPattern: PatternRecord = {
  ...meta,
  problem:
    "Constructing complex objects directly can make required steps, optional values, and validation hard to manage.",
  tradeoffs: [
    "Adds more classes or steps to the construction process.",
    "Can be overkill for simple objects.",
    "Improves clarity when object construction is complex or incremental.",
  ],
  platforms: ["frontend", "backend", "integration"],
  integrationNotes:
    "Builder is most useful when construction must happen in controlled steps and the final object has many optional or ordered parts.",
  scenarios,
  scenarioExamples: {
    "api-request-construction": apiRequestConstructionExamples,
    "report-generation": reportGenerationExamples,
    "ui-form-assembly": uiFormAssemblyExamples,
    "configuration-assembly": configurationAssemblyExamples,
    "document-composition": documentCompositionExamples,
    "character-creation": characterCreationExamples,
    "pizza-order-construction": pizzaOrderConstructionExamples,
  },
  variants: [
    {
      slug: "builder-fluent-request",
      title: "Fluent request builder",
      stackArea: "integration",
      language: "typescript",
      summary:
        "Build API requests with a fluent chain that adds headers, params, and body data step by step.",
      intent:
        "Make request construction readable and easy to compose.",
      problem:
        "Request creation becomes noisy when every optional field is set in a single object literal.",
      solution:
        "Use a fluent builder to incrementally configure the request before sending it.",
      dependencies: ["builder"],
      relatedVariants: ["builder-director-driven", "builder-staged"],
      examplePatternSlugs: ["builder"],
      notes:
        "Best when construction order is flexible and readability matters more than strict type enforcement.",
    },
    {
      slug: "builder-director-driven",
      title: "Director-driven assembly",
      stackArea: "backend",
      language: "java",
      summary:
        "Use a director to coordinate the steps for building a report, document, or configuration object.",
      intent:
        "Centralize multi-step assembly logic in one place.",
      problem:
        "Complex builds become duplicated when every caller repeats the same construction sequence.",
      solution:
        "Use a director to control the order and reuse the same builder steps across outputs.",
      dependencies: ["builder"],
      relatedVariants: ["builder-fluent-request", "builder-staged"],
      examplePatternSlugs: ["builder"],
      notes:
        "Good when the build process has a canonical sequence that should not be repeated everywhere.",
    },
    {
      slug: "builder-staged",
      title: "Staged typed builder",
      stackArea: "frontend",
      language: "typescript",
      summary:
        "Use a staged builder so required steps must be completed before the final object can be created.",
      intent:
        "Enforce construction order and required fields at compile time.",
      problem:
        "Optional and required fields are easy to mix up when object creation is too flexible.",
      solution:
        "Use staged types to guide the caller through the construction steps in the correct order.",
      dependencies: ["builder"],
      relatedVariants: ["builder-fluent-request", "builder-director-driven"],
      examplePatternSlugs: ["builder"],
      notes:
        "This is the best choice when the final object must never be partially built or invalid.",
    },
  ],
  realWorldExamples: [
    {
      title: "REST request builders",
      description:
        "HTTP clients often expose builder APIs to assemble headers, query parameters, and payloads step by step.",
    },
    {
      title: "Report pipelines",
      description:
        "Reporting systems often use a builder-like assembly process to add sections, charts, and metadata in stages.",
    },
    {
      title: "Form wizards",
      description:
        "Multi-step UI flows often build up forms progressively before the final submission step.",
    },
  ],
};
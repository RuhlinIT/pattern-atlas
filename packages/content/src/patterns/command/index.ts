import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { typescript as textEditorUndoTypescript } from "./examples/text-editor-undo/typescript";
import { java as textEditorUndoJava } from "./examples/text-editor-undo/java";
import { python as textEditorUndoPython } from "./examples/text-editor-undo/python";

import { typescript as jobQueueProcessingTypescript } from "./examples/job-queue-processing/typescript";
import { java as jobQueueProcessingJava } from "./examples/job-queue-processing/java";
import { python as jobQueueProcessingPython } from "./examples/job-queue-processing/python";

import { typescript as remoteControlActionsTypescript } from "./examples/remote-control-actions/typescript";
import { react as remoteControlActionsReact } from "./examples/remote-control-actions/react";
import { angular as remoteControlActionsAngular } from "./examples/remote-control-actions/angular";

import { typescript as adminActionQueueTypescript } from "./examples/admin-action-queue/typescript";
import { react as adminActionQueueReact } from "./examples/admin-action-queue/react";

import { typescript as workflowStepCommandTypescript } from "./examples/workflow-step-command/typescript";
import { java as workflowStepCommandJava } from "./examples/workflow-step-command/java";

import { typescript as macroCommandSequenceTypescript } from "./examples/macro-command-sequence/typescript";
import { react as macroCommandSequenceReact } from "./examples/macro-command-sequence/react";

const textEditorUndoExamples = normalizeExamples({
  typescript: textEditorUndoTypescript,
  java: textEditorUndoJava,
  python: textEditorUndoPython,
});

const jobQueueProcessingExamples = normalizeExamples({
  typescript: jobQueueProcessingTypescript,
  java: jobQueueProcessingJava,
  python: jobQueueProcessingPython,
});

const remoteControlActionsExamples = normalizeExamples({
  typescript: remoteControlActionsTypescript,
  react: remoteControlActionsReact,
  angular: remoteControlActionsAngular,
});

const adminActionQueueExamples = normalizeExamples({
  typescript: adminActionQueueTypescript,
  react: adminActionQueueReact,
});

const workflowStepCommandExamples = normalizeExamples({
  typescript: workflowStepCommandTypescript,
  java: workflowStepCommandJava,
});

const macroCommandSequenceExamples = normalizeExamples({
  typescript: macroCommandSequenceTypescript,
  react: macroCommandSequenceReact,
});

export const commandPattern: PatternRecord = {
  ...meta,
  problem:
    "A system needs to trigger actions without tightly coupling the code that requests an operation to the code that performs it, and it may also need queuing, history, or undo support.",
  tradeoffs: [
    "Introduces extra classes or objects for each action.",
    "Can feel heavier than direct method calls when the workflow is simple.",
    "Makes requests more flexible, loggable, and replayable.",
  ],
  platforms: ["frontend", "backend", "integration"],
  integrationNotes:
    "Commands work well for UI actions, background jobs, workflow steps, and undoable operations because invokers can trigger commands without depending on receiver details.",
  scenarios,
  scenarioExamples: {
    "text-editor-undo": textEditorUndoExamples,
    "job-queue-processing": jobQueueProcessingExamples,
    "remote-control-actions": remoteControlActionsExamples,
    "admin-action-queue": adminActionQueueExamples,
    "workflow-step-command": workflowStepCommandExamples,
    "macro-command-sequence": macroCommandSequenceExamples,
  },
  variants: [
    {
      slug: "command-undoable",
      title: "Undoable command",
      stackArea: "frontend",
      language: "typescript",
      summary:
        "Model user actions as reversible commands so they can be executed, undone, and redone.",
      intent:
        "Support edit history and reversible user interaction.",
      problem:
        "Undo logic becomes tangled when state changes happen directly in UI handlers.",
      solution:
        "Wrap each action in a command object that knows how to execute and undo itself.",
      dependencies: ["command"],
      relatedVariants: ["command-queued", "command-macro"],
      examplePatternSlugs: ["command"],
      notes:
        "Best for editors, design tools, and any interactive surface with history controls.",
    },
    {
      slug: "command-queued",
      title: "Queued command",
      stackArea: "backend",
      language: "java",
      summary:
        "Package work as commands so a queue or worker can execute them later.",
      intent:
        "Separate submission time from execution time.",
      problem:
        "Immediate execution makes retries, batching, and scheduling harder.",
      solution:
        "Store commands in a queue and run them asynchronously in a worker process.",
      dependencies: ["command"],
      relatedVariants: ["command-undoable", "command-macro"],
      examplePatternSlugs: ["command"],
      notes:
        "Good for jobs, notifications, reports, and deferred processing.",
    },
    {
      slug: "command-macro",
      title: "Macro command",
      stackArea: "integration",
      language: "typescript",
      summary:
        "Combine several commands into a single macro that can be triggered once.",
      intent:
        "Bundle multiple actions behind one request.",
      problem:
        "Repeated action sequences are tedious and error-prone when invoked manually.",
      solution:
        "Compose a macro command from smaller commands and execute them in order.",
      dependencies: ["command"],
      relatedVariants: ["command-undoable", "command-queued"],
      examplePatternSlugs: ["command"],
      notes:
        "Useful for automation, workflows, and one-click productivity features.",
    },
  ],
  realWorldExamples: [
    {
      title: "Undo and redo systems",
      description:
        "Editors and design tools often wrap changes as commands so actions can be reversed from command history.",
    },
    {
      title: "Background job queues",
      description:
        "Applications can enqueue commands for email, reporting, or deployment tasks and execute them later in workers.",
    },
    {
      title: "UI and device controls",
      description:
        "Buttons, menu actions, and remote controls can trigger commands without depending directly on the receivers they control.",
    },
  ],
};
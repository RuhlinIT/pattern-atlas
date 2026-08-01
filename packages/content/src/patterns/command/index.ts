import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { textEditorUndoExamples } from "./examples/text-editor-undo";
import { jobQueueProcessingExamples } from "./examples/job-queue-processing";
import { remoteControlActionsExamples } from "./examples/remote-control-actions";

export const commandPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "text-editor-undo": textEditorUndoExamples,
    "job-queue-processing": jobQueueProcessingExamples,
    "remote-control-actions": remoteControlActionsExamples,
  },
  realWorldExamples: [
  {
    "title": "Undo and redo systems",
    "description": "Editors and design tools often wrap changes as commands so actions can be reversed from command history."
  },
  {
    "title": "Background job queues",
    "description": "Applications can enqueue commands for email, reporting, or deployment tasks and execute them later in workers."
  },
  {
    "title": "UI and device controls",
    "description": "Buttons, menu actions, and remote controls can trigger commands without depending directly on the receivers they control."
  }
],
  tradeoffs: [
  "Introduces extra classes or objects for each action",
  "Can feel heavier than direct method calls when the workflow is simple"
],
  platforms: [
  "Web",
  "Backend",
  "Applications"
],
  integrationNotes: "Commands work well for UI actions, background jobs, workflow steps, and undoable operations because invokers can trigger commands without depending on receiver details.",
  problem: "A system needs to trigger actions without tightly coupling the code that requests an operation to the code that performs it, and it may also need queuing, history, or undo support.",
};

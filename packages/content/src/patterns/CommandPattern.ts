import type { PatternRecord } from "@atlas-patterns/schemas";
import { textEditorUndoExamples } from "./command/textEditorUndoExamples";
import { jobQueueProcessingExamples } from "./command/jobQueueProcessingExamples";
import { remoteControlActionsExamples } from "./command/remoteControlActionsExamples";

export const CommandPattern: PatternRecord = {
  slug: "command",
  name: "Command",
  category: "Behavioral",
  problem:
    "A system needs to trigger actions without tightly coupling the code that requests an operation to the code that performs it, and it may also need queuing, history, or undo support.",
  intent:
    "Encapsulate a request as an object so it can be invoked, queued, logged, or undone independently of the receiver that performs the work.",
  tradeoffs: [
    "Introduces extra classes or objects for each action",
    "Can feel heavier than direct method calls when the workflow is simple",
  ],
  languages: ["TypeScript", "Java", "Python", "Angular", "React", "React_Native", "C#", ".NET"],
  platforms: ["Web", "Backend", "Applications"],
  integrationNotes:
    "Commands work well for UI actions, background jobs, workflow steps, and undoable operations because invokers can trigger commands without depending on receiver details.",
  scenarios: [
    {
      slug: "text-editor-undo",
      title: "Text editor undo",
      summary:
        "A text editor wraps insert operations in command objects so actions can be executed and later undone from command history.",
      languageExamples: textEditorUndoExamples
    },
    {
      slug: "job-queue-processing",
      title: "Job queue processing",
      summary:
        "A task runner stores commands in a queue so jobs can be submitted now and executed later by a worker.",
      languageExamples: jobQueueProcessingExamples
    },
    {
      slug: "remote-control-actions",
      title: "Remote control actions",
      summary:
        "A remote control binds buttons to command objects so the invoker can trigger different device actions without knowing device-specific APIs.",
      languageExamples: remoteControlActionsExamples
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

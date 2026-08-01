import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "text-editor-undo",
    "title": "Text editor undo",
    "summary": "A text editor wraps insert operations in command objects so actions can be executed and later undone from command history."
  },
  {
    "slug": "job-queue-processing",
    "title": "Job queue processing",
    "summary": "A task runner stores commands in a queue so jobs can be submitted now and executed later by a worker."
  },
  {
    "slug": "remote-control-actions",
    "title": "Remote control actions",
    "summary": "A remote control binds buttons to command objects so the invoker can trigger different device actions without knowing device-specific APIs."
  }
];

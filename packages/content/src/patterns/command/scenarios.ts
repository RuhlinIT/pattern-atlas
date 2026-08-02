import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "text-editor-undo",
    title: "Text editor undo",
    summary:
      "A text editor wraps insert operations in command objects so actions can be executed and later undone from command history.",
    context:
      "An editing tool needs a reliable way to reverse user actions and replay them in order.",
    problem:
      "Direct method calls make undo and redo logic tangled with the editor state.",
    solution:
      "Use Command to wrap each edit as an object that can be executed and reversed.",
    stackArea: "frontend",
  },
  {
    slug: "job-queue-processing",
    title: "Job queue processing",
    summary:
      "A task runner stores commands in a queue so jobs can be submitted now and executed later by a worker.",
    context:
      "A backend system needs to accept work immediately and process it asynchronously.",
    problem:
      "Execution logic becomes hard to manage when job submission and job processing are tightly coupled.",
    solution:
      "Use Command to package a task for later execution by a worker or scheduler.",
    stackArea: "backend",
  },
  {
    slug: "remote-control-actions",
    title: "Remote control actions",
    summary:
      "A remote control binds buttons to command objects so the invoker can trigger different device actions without knowing device-specific APIs.",
    context:
      "A UI or device controller needs one action surface for many receivers.",
    problem:
      "Direct coupling between buttons and receiver APIs makes the controller hard to extend.",
    solution:
      "Use Command to keep the invoker separate from the device-specific receiver.",
    stackArea: "frontend",
  },
  {
    slug: "admin-action-queue",
    title: "Admin action queue",
    summary:
      "An admin console records actions like exports, notifications, and recalculations as commands that can run later.",
    context:
      "The system needs to defer expensive operations and keep an audit trail of requested actions.",
    problem:
      "Immediate execution makes it hard to batch work, log intent, or retry failures.",
    solution:
      "Use Command so actions can be queued, logged, and executed by background workers.",
    stackArea: "integration",
  },
  {
    slug: "workflow-step-command",
    title: "Workflow step command",
    summary:
      "A process engine models each step of a business flow as a command that can be invoked by a coordinator.",
    context:
      "A workflow system needs to trigger steps without embedding the step logic into the scheduler.",
    problem:
      "One large orchestrator becomes difficult to evolve when each step has different behavior.",
    solution:
      "Use Command to isolate each workflow step behind a uniform interface.",
    stackArea: "integration",
  },
  {
    slug: "macro-command-sequence",
    title: "Macro command sequence",
    summary:
      "A productivity tool bundles multiple actions into one reusable macro that can run with a single trigger.",
    context:
      "Users want to replay a common sequence of actions across editing, formatting, or navigation.",
    problem:
      "Manually triggering the same series of actions is tedious and error-prone.",
    solution:
      "Use Command to compose several actions into one reusable macro command.",
    stackArea: "frontend",
  },
];
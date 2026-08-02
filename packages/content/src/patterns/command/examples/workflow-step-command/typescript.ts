import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Workflow step command",
  code: `interface Command {
  execute(): void;
}

class ApproveInvoiceCommand implements Command {
  execute() {
    console.log("Invoice approved");
  }
}

class WorkflowEngine {
  run(step: Command) {
    step.execute();
  }
}
`,
  explanation:
    "Model workflow steps as commands so orchestration stays separate from step logic.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Workflow step command",
  code: `interface Command {
    void execute();
}

class ApproveInvoiceCommand implements Command {
    public void execute() {
        System.out.println("Invoice approved");
    }
}
`,
  explanation:
    "Model workflow steps as commands so orchestration stays separate from step logic.",
};
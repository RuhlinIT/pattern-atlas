import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Job queue processing",
  code: `interface Command {
  execute(): Promise<void>;
}

class SendEmailCommand implements Command {
  constructor(private recipient: string, private subject: string) {}

  async execute() {
    console.log(
      
toString();
  }
}

class Worker {
  async process(queue: Command[]) {
    for (const command of queue) {
      await command.execute();
    }
  }
}

const queue: Command[] = [
  new SendEmailCommand("a@example.com", "Welcome"),
  new GenerateReportCommand("weekly"),
];

new Worker().process(queue);`,
  explanation:
    "Package jobs as commands so workers can execute them later, independent of submission time.",
};
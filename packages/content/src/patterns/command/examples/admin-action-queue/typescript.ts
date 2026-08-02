import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Admin action queue",
  code: `interface Command {
  execute(): Promise<void>;
}

class ExportUsersCommand implements Command {
  async execute() {
    console.log("Exporting users");
  }
}

class ActionQueue {
  constructor(private queue: Command[]) {}
  async run() {
    for (const command of this.queue) {
      await command.execute();
    }
  }
}
`,
  explanation:
    "Record admin operations as commands so they can be queued, logged, and retried later.",
};
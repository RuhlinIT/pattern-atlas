import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Job queue processing",
  code: `class SendEmailCommand:
    def __init__(self, recipient):
        self.recipient = recipient

    def execute(self):
        print(f"Sending email to {self.recipient}")

class Worker:
    def process(self, queue):
        for command in queue:
            command.execute()

queue = [SendEmailCommand("a@example.com")]
Worker().process(queue)`,
  explanation:
    "Package jobs as commands so workers can execute them later, independent of submission time.",
};

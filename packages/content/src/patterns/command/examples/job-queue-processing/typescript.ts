import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Job queue processing",
  code: "interface Command {\n  execute(): void;\n}\n\nclass EmailService {\n  send(to: string, body: string): void {\n    console.log(`Email sent to ${to}: ${body}`);\n  }\n}\n\nclass SendEmailCommand implements Command {\n  constructor(\n    private emailService: EmailService,\n    private to: string,\n    private body: string,\n  ) {}\n\n  execute(): void {\n    this.emailService.send(this.to, this.body);\n  }\n}\n\nclass JobQueue {\n  private queue: Command[] = [];\n\n  add(command: Command): void {\n    this.queue.push(command);\n  }\n\n  runNext(): void {\n    const command = this.queue.shift();\n    command?.execute();\n  }\n}\n\nconst queue = new JobQueue();\nconst emailService = new EmailService();\n\nqueue.add(new SendEmailCommand(emailService, \"team@example.com\", \"Build passed\"));\nqueue.add(new SendEmailCommand(emailService, \"ops@example.com\", \"Deploy started\"));\n\nqueue.runNext();\nqueue.runNext();",
  explanation: "The queue acts as the invoker and can store commands for later execution, while the email service remains the receiver that performs the actual work.",
};

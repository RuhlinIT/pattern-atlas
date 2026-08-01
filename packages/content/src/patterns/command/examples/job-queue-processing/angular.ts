import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Job queue processing",
  code: "import { Injectable } from '@angular/core';\n\n\n  abstract class Command {\n    abstract execute(): void;\n  }\n\n\n  @Injectable({ providedIn: 'root' })\n  class EmailService {\n    send(to: string, body: string): void {\n      console.log(`Email sent to ${to}: ${body}`);\n    }\n  }\n\n\n  class SendEmailCommand extends Command {\n    constructor(\n      private emailService: EmailService,\n      private to: string,\n      private body: string,\n    ) {\n      super();\n    }\n\n\n    execute(): void {\n      this.emailService.send(this.to, this.body);\n    }\n  }\n\n\n  @Injectable({ providedIn: 'root' })\n  class JobQueue {\n    private queue: Command[] = [];\n\n\n    add(command: Command): void {\n      this.queue.push(command);\n    }\n\n\n    runNext(): void {\n      const command = this.queue.shift();\n      command?.execute();\n    }\n  }",
  explanation: "The Angular queue service stores command objects for deferred execution, while the email service remains the receiver that performs the actual work.",
};

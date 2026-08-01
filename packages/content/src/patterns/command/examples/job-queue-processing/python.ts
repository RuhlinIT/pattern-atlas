import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Job queue processing",
  code: "from abc import ABC, abstractmethod\n\nclass Command(ABC):\n    @abstractmethod\n    def execute(self) -> None:\n        pass\n\nclass EmailService:\n    def send(self, to: str, body: str) -> None:\n        print(f\"Email sent to {to}: {body}\")\n\nclass SendEmailCommand(Command):\n    def __init__(self, email_service: EmailService, to: str, body: str) -> None:\n        self.email_service = email_service\n        self.to = to\n        self.body = body\n\n    def execute(self) -> None:\n        self.email_service.send(self.to, self.body)\n\nclass JobQueue:\n    def __init__(self) -> None:\n        self.queue: list[Command] = []\n\n    def add(self, command: Command) -> None:\n        self.queue.append(command)\n\n    def run_next(self) -> None:\n        if self.queue:\n            command = self.queue.pop(0)\n            command.execute()\n\nqueue = JobQueue()\nemail_service = EmailService()\n\nqueue.add(SendEmailCommand(email_service, \"team@example.com\", \"Build passed\"))\nqueue.add(SendEmailCommand(email_service, \"ops@example.com\", \"Deploy started\"))\n\nqueue.run_next()\nqueue.run_next()",
  explanation: "The job queue stores executable commands rather than direct function calls, which makes scheduling and orchestration cleaner.",
};

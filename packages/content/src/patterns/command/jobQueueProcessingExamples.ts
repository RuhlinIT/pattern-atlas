import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const jobQueueProcessingExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Command {
  execute(): void;
}

class EmailService {
  send(to: string, body: string): void {
    console.log(\`Email sent to \${to}: \${body}\`);
  }
}

class SendEmailCommand implements Command {
  constructor(
    private emailService: EmailService,
    private to: string,
    private body: string,
  ) {}

  execute(): void {
    this.emailService.send(this.to, this.body);
  }
}

class JobQueue {
  private queue: Command[] = [];

  add(command: Command): void {
    this.queue.push(command);
  }

  runNext(): void {
    const command = this.queue.shift();
    command?.execute();
  }
}

const queue = new JobQueue();
const emailService = new EmailService();

queue.add(new SendEmailCommand(emailService, "team@example.com", "Build passed"));
queue.add(new SendEmailCommand(emailService, "ops@example.com", "Deploy started"));

queue.runNext();
queue.runNext();`,
    explanation:
      "The queue acts as the invoker and can store commands for later execution, while the email service remains the receiver that performs the actual work.",
  },
  {
    language: "Java",
    code: `import java.util.LinkedList;
import java.util.Queue;

interface Command {
    void execute();
}

class EmailService {
    public void send(String to, String body) {
        System.out.println("Email sent to " + to + ": " + body);
    }
}

class SendEmailCommand implements Command {
    private final EmailService emailService;
    private final String to;
    private final String body;

    public SendEmailCommand(EmailService emailService, String to, String body) {
        this.emailService = emailService;
        this.to = to;
        this.body = body;
    }

    public void execute() {
        emailService.send(to, body);
    }
}

class JobQueue {
    private final Queue<Command> queue = new LinkedList<>();

    public void add(Command command) {
        queue.add(command);
    }

    public void runNext() {
        Command command = queue.poll();
        if (command != null) {
            command.execute();
        }
    }
}

JobQueue queue = new JobQueue();
EmailService emailService = new EmailService();

queue.add(new SendEmailCommand(emailService, "team@example.com", "Build passed"));
queue.add(new SendEmailCommand(emailService, "ops@example.com", "Deploy started"));

queue.runNext();
queue.runNext();`,
    explanation:
      "The queued command objects decouple job submission from job execution, which is one of the pattern's primary benefits.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class Command(ABC):
    @abstractmethod
    def execute(self) -> None:
        pass

class EmailService:
    def send(self, to: str, body: str) -> None:
        print(f"Email sent to {to}: {body}")

class SendEmailCommand(Command):
    def __init__(self, email_service: EmailService, to: str, body: str) -> None:
        self.email_service = email_service
        self.to = to
        self.body = body

    def execute(self) -> None:
        self.email_service.send(self.to, self.body)

class JobQueue:
    def __init__(self) -> None:
        self.queue: list[Command] = []

    def add(self, command: Command) -> None:
        self.queue.append(command)

    def run_next(self) -> None:
        if self.queue:
            command = self.queue.pop(0)
            command.execute()

queue = JobQueue()
email_service = EmailService()

queue.add(SendEmailCommand(email_service, "team@example.com", "Build passed"))
queue.add(SendEmailCommand(email_service, "ops@example.com", "Deploy started"))

queue.run_next()
queue.run_next()`,
    explanation:
      "The job queue stores executable commands rather than direct function calls, which makes scheduling and orchestration cleaner.",
  },
];
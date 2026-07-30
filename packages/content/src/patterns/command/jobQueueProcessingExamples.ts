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
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


  abstract class Command {
    abstract execute(): void;
  }


  @Injectable({ providedIn: 'root' })
  class EmailService {
    send(to: string, body: string): void {
      console.log(\`Email sent to \${to}: \${body}\`);
    }
  }


  class SendEmailCommand extends Command {
    constructor(
      private emailService: EmailService,
      private to: string,
      private body: string,
    ) {
      super();
    }


    execute(): void {
      this.emailService.send(this.to, this.body);
    }
  }


  @Injectable({ providedIn: 'root' })
  class JobQueue {
    private queue: Command[] = [];


    add(command: Command): void {
      this.queue.push(command);
    }


    runNext(): void {
      const command = this.queue.shift();
      command?.execute();
    }
  }`,
    explanation:
      "The Angular queue service stores command objects for deferred execution, while the email service remains the receiver that performs the actual work.",
  },
  {
    language: "React",
    code: `import React, { useMemo, useState } from "react";

interface Command {
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

  getSize(): number {
    return this.queue.length;
  }
}

export function App() {
  const queue = useMemo(() => new JobQueue(), []);
  const emailService = useMemo(() => new EmailService(), []);
  const [queuedCount, setQueuedCount] = useState(0);

  const addJobs = () => {
    queue.add(new SendEmailCommand(emailService, "team@example.com", "Build passed"));
    queue.add(new SendEmailCommand(emailService, "ops@example.com", "Deploy started"));
    setQueuedCount(queue.getSize());
  };

  const runNext = () => {
    queue.runNext();
    setQueuedCount(queue.getSize());
  };

  return (
    <main>
      <h1>Job Queue</h1>
      <p>Queued jobs: {queuedCount}</p>
      <button onClick={addJobs}>Add jobs</button>
      <button onClick={runNext}>Run next</button>
    </main>
  );
}`,
    explanation:
      "The React example treats commands as queueable objects, so the UI can submit work now and execute it later without coupling to the email service directly.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface Command {
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

  getSize(): number {
    return this.queue.length;
  }
}

function ActionButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>{label}</Text>
    </Pressable>
  );
}

export function App() {
  const queue = useMemo(() => new JobQueue(), []);
  const emailService = useMemo(() => new EmailService(), []);
  const [queuedCount, setQueuedCount] = useState(0);

  const addJobs = () => {
    queue.add(new SendEmailCommand(emailService, "team@example.com", "Build passed"));
    queue.add(new SendEmailCommand(emailService, "ops@example.com", "Deploy started"));
    setQueuedCount(queue.getSize());
  };

  const runNext = () => {
    queue.runNext();
    setQueuedCount(queue.getSize());
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Job Queue</Text>
        <Text>Queued jobs: {queuedCount}</Text>
        <ActionButton label="Add jobs" onPress={addJobs} />
        <ActionButton label="Run next" onPress={runNext} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same command objects, but exposes queue actions through mobile-friendly pressable controls instead of web buttons.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;

public interface ICommand
{
    void Execute();
}

public class EmailService
{
    public void Send(string to, string body)
    {
        Console.WriteLine($"Email sent to {to}: {body}");
    }
}

public class SendEmailCommand : ICommand
{
    private readonly EmailService _emailService;
    private readonly string _to;
    private readonly string _body;

    public SendEmailCommand(EmailService emailService, string to, string body)
    {
        _emailService = emailService;
        _to = to;
        _body = body;
    }

    public void Execute()
    {
        _emailService.Send(_to, _body);
    }
}

public class JobQueue
{
    private readonly Queue<ICommand> _queue = new();

    public void Add(ICommand command)
    {
        _queue.Enqueue(command);
    }

    public void RunNext()
    {
        if (_queue.Count > 0)
        {
            var command = _queue.Dequeue();
            command.Execute();
        }
    }
}

var queue = new JobQueue();
var emailService = new EmailService();

queue.Add(new SendEmailCommand(emailService, "team@example.com", "Build passed"));
queue.Add(new SendEmailCommand(emailService, "ops@example.com", "Deploy started"));

queue.RunNext();
queue.RunNext();`,
    explanation:
      "The C# version stores command objects in a queue so work can be invoked later, keeping scheduling separate from the email-sending logic.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;

public interface ICommand
{
    void Execute();
}

public class EmailService
{
    public void Send(string to, string body)
    {
        Console.WriteLine($"Email sent to {to}: {body}");
    }
}

public class SendEmailCommand : ICommand
{
    private readonly EmailService _emailService;
    private readonly string _to;
    private readonly string _body;

    public SendEmailCommand(EmailService emailService, string to, string body)
    {
        _emailService = emailService;
        _to = to;
        _body = body;
    }

    public void Execute()
    {
        _emailService.Send(_to, _body);
    }
}

public class JobQueue
{
    private readonly Queue<ICommand> _queue = new();

    public void Add(ICommand command)
    {
        _queue.Enqueue(command);
    }

    public void RunNext()
    {
        if (_queue.Count > 0)
        {
            var command = _queue.Dequeue();
            command.Execute();
        }
    }
}

var services = new ServiceCollection();
services.AddSingleton<EmailService>();
services.AddSingleton<JobQueue>();

var provider = services.BuildServiceProvider();
var queue = provider.GetRequiredService<JobQueue>();
var emailService = provider.GetRequiredService<EmailService>();

queue.Add(new SendEmailCommand(emailService, "team@example.com", "Build passed"));
queue.Add(new SendEmailCommand(emailService, "ops@example.com", "Deploy started"));

queue.RunNext();
queue.RunNext();`,
    explanation:
      "The .NET version uses dependency injection with command objects in a queue, letting the application defer execution while keeping the receiver isolated.",
  },
];

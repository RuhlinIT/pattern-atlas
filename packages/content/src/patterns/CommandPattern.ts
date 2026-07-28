import type { PatternRecord } from "@atlas-patterns/schemas";

export const CommandPattern: PatternRecord = {
  slug: "command",
  name: "Command",
  category: "Behavioral",
  problem:
    "A system needs to trigger actions without tightly coupling the code that requests an operation to the code that performs it, and it may also need queuing, history, or undo support.",
  intent:
    "Encapsulate a request as an object so it can be invoked, queued, logged, or undone independently of the receiver that performs the work.",
  tradeoffs: [
    "Introduces extra classes or objects for each action",
    "Can feel heavier than direct method calls when the workflow is simple",
  ],
  languages: ["TypeScript", "Java", "Python"],
  platforms: ["Web", "Backend", "Applications"],
  integrationNotes:
    "Commands work well for UI actions, background jobs, workflow steps, and undoable operations because invokers can trigger commands without depending on receiver details.",
  scenarios: [
    {
      slug: "text-editor-undo",
      title: "Text editor undo",
      summary:
        "A text editor wraps insert operations in command objects so actions can be executed and later undone from command history.",
      languageExamples: [
        {
          language: "TypeScript",
          code: `interface Command {
  execute(): void;
  undo(): void;
}

class DocumentEditor {
  private content = "";

  insert(text: string): void {
    this.content += text;
  }

  removeLast(length: number): void {
    this.content = this.content.slice(0, -length);
  }

  getContent(): string {
    return this.content;
  }
}

class InsertTextCommand implements Command {
  constructor(
    private editor: DocumentEditor,
    private text: string,
  ) {}

  execute(): void {
    this.editor.insert(this.text);
  }

  undo(): void {
    this.editor.removeLast(this.text.length);
  }
}

class CommandHistory {
  private history: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undoLast(): void {
    const command = this.history.pop();
    command?.undo();
  }
}

const editor = new DocumentEditor();
const history = new CommandHistory();

history.executeCommand(new InsertTextCommand(editor, "Hello "));
history.executeCommand(new InsertTextCommand(editor, "World"));

console.log(editor.getContent());

history.undoLast();
console.log(editor.getContent());`,
          explanation:
            "The editor is the receiver, the insert action is wrapped as a command, and the history invoker can replay or undo commands without knowing document details.",
        },
        {
          language: "Java",
          code: `import java.util.ArrayList;
import java.util.List;

interface Command {
    void execute();
    void undo();
}

class DocumentEditor {
    private String content = "";

    public void insert(String text) {
        content += text;
    }

    public void removeLast(int length) {
        content = content.substring(0, content.length() - length);
    }

    public String getContent() {
        return content;
    }
}

class InsertTextCommand implements Command {
    private final DocumentEditor editor;
    private final String text;

    public InsertTextCommand(DocumentEditor editor, String text) {
        this.editor = editor;
        this.text = text;
    }

    public void execute() {
        editor.insert(text);
    }

    public void undo() {
        editor.removeLast(text.length());
    }
}

class CommandHistory {
    private final List<Command> history = new ArrayList<>();

    public void executeCommand(Command command) {
        command.execute();
        history.add(command);
    }

    public void undoLast() {
        if (!history.isEmpty()) {
            Command command = history.remove(history.size() - 1);
            command.undo();
        }
    }
}

DocumentEditor editor = new DocumentEditor();
CommandHistory history = new CommandHistory();

history.executeCommand(new InsertTextCommand(editor, "Hello "));
history.executeCommand(new InsertTextCommand(editor, "World"));

System.out.println(editor.getContent());

history.undoLast();
System.out.println(editor.getContent());`,
          explanation:
            "The command object stores what action to run and how to reverse it, which makes undo support straightforward.",
        },
        {
          language: "Python",
          code: `from abc import ABC, abstractmethod

class Command(ABC):
    @abstractmethod
    def execute(self) -> None:
        pass

    @abstractmethod
    def undo(self) -> None:
        pass

class DocumentEditor:
    def __init__(self) -> None:
        self.content = ""

    def insert(self, text: str) -> None:
        self.content += text

    def remove_last(self, length: int) -> None:
        self.content = self.content[:-length]

    def get_content(self) -> str:
        return self.content

class InsertTextCommand(Command):
    def __init__(self, editor: DocumentEditor, text: str) -> None:
        self.editor = editor
        self.text = text

    def execute(self) -> None:
        self.editor.insert(self.text)

    def undo(self) -> None:
        self.editor.remove_last(len(self.text))

class CommandHistory:
    def __init__(self) -> None:
        self.history: list[Command] = []

    def execute_command(self, command: Command) -> None:
        command.execute()
        self.history.append(command)

    def undo_last(self) -> None:
        if self.history:
            command = self.history.pop()
            command.undo()

editor = DocumentEditor()
history = CommandHistory()

history.execute_command(InsertTextCommand(editor, "Hello "))
history.execute_command(InsertTextCommand(editor, "World"))

print(editor.get_content())

history.undo_last()
print(editor.get_content())`,
          explanation:
            "The history object can execute and undo commands because each command carries the information needed to perform and reverse the operation.",
        },
      ],
    },
    {
      slug: "job-queue-processing",
      title: "Job queue processing",
      summary:
        "A task runner stores commands in a queue so jobs can be submitted now and executed later by a worker.",
      languageExamples: [
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
      ],
    },
    {
      slug: "remote-control-actions",
      title: "Remote control actions",
      summary:
        "A remote control binds buttons to command objects so the invoker can trigger different device actions without knowing device-specific APIs.",
      languageExamples: [
        {
          language: "TypeScript",
          code: `interface Command {
  execute(): void;
}

class Light {
  on(): void {
    console.log("Light turned on");
  }

  off(): void {
    console.log("Light turned off");
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }
}

class RemoteControl {
  constructor(private command: Command) {}

  pressButton(): void {
    this.command.execute();
  }
}

const light = new Light();

const onRemote = new RemoteControl(new LightOnCommand(light));
onRemote.pressButton();

const offRemote = new RemoteControl(new LightOffCommand(light));
offRemote.pressButton();`,
          explanation:
            "The remote is the invoker, the light is the receiver, and each button action is represented by a command object between them.",
        },
        {
          language: "Java",
          code: `interface Command {
    void execute();
}

class Light {
    public void on() {
        System.out.println("Light turned on");
    }

    public void off() {
        System.out.println("Light turned off");
    }
}

class LightOnCommand implements Command {
    private final Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.on();
    }
}

class LightOffCommand implements Command {
    private final Light light;

    public LightOffCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.off();
    }
}

class RemoteControl {
    private final Command command;

    public RemoteControl(Command command) {
        this.command = command;
    }

    public void pressButton() {
        command.execute();
    }
}

Light light = new Light();

RemoteControl onRemote = new RemoteControl(new LightOnCommand(light));
onRemote.pressButton();

RemoteControl offRemote = new RemoteControl(new LightOffCommand(light));
offRemote.pressButton();`,
          explanation:
            "The invoker triggers commands through a common interface, so it does not need to know anything about the device APIs it is controlling.",
        },
        {
          language: "Python",
          code: `from abc import ABC, abstractmethod

class Command(ABC):
    @abstractmethod
    def execute(self) -> None:
        pass

class Light:
    def on(self) -> None:
        print("Light turned on")

    def off(self) -> None:
        print("Light turned off")

class LightOnCommand(Command):
    def __init__(self, light: Light) -> None:
        self.light = light

    def execute(self) -> None:
        self.light.on()

class LightOffCommand(Command):
    def __init__(self, light: Light) -> None:
        self.light = light

    def execute(self) -> None:
        self.light.off()

class RemoteControl:
    def __init__(self, command: Command) -> None:
        self.command = command

    def press_button(self) -> None:
        self.command.execute()

light = Light()

on_remote = RemoteControl(LightOnCommand(light))
on_remote.press_button()

off_remote = RemoteControl(LightOffCommand(light))
off_remote.press_button()`,
          explanation:
            "The remote can trigger different actions through interchangeable command objects while the light stays focused on device behavior.",
        },
      ],
    },
  ],
  realWorldExamples: [
    {
      title: "Undo and redo systems",
      description:
        "Editors and design tools often wrap changes as commands so actions can be reversed from command history.",
    },
    {
      title: "Background job queues",
      description:
        "Applications can enqueue commands for email, reporting, or deployment tasks and execute them later in workers.",
    },
    {
      title: "UI and device controls",
      description:
        "Buttons, menu actions, and remote controls can trigger commands without depending directly on the receivers they control.",
    },
  ],
};

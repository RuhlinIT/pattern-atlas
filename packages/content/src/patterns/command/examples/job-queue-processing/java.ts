import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Job queue processing",
  code: `import java.util.List;

interface Command {
    void execute();
}

class SendEmailCommand implements Command {
    private final String recipient;

    SendEmailCommand(String recipient) {
        this.recipient = recipient;
    }

    public void execute() {
        System.out.println("Sending email to " + recipient);
    }
}

class Worker {
    void process(List<Command> queue) {
        for (Command command : queue) {
            command.execute();
        }
    }
}
`,
  explanation:
    "Package jobs as commands so workers can execute them later, independent of submission time.",
};

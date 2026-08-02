import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Remote control actions",
  code: `interface Command {
  execute(): void;
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}
  execute() {
    this.light.on();
  }
}

class Light {
  on() {
    console.log("Light on");
  }
}

class RemoteControl {
  private slot: Command | null = null;
  setCommand(command: Command) {
    this.slot = command;
  }
  pressButton() {
    this.slot?.execute();
  }
}

const remote = new RemoteControl();
remote.setCommand(new LightOnCommand(new Light()));
remote.pressButton();`,
  explanation:
    "Bind buttons to commands so the invoker can trigger device actions without knowing receiver details.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const remoteControlActionsExamples: PatternLanguageExample[] = [
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
];
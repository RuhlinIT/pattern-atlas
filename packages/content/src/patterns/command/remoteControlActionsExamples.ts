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
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


  abstract class Command {
    abstract execute(): void;
  }


  @Injectable({ providedIn: 'root' })
  class Light {
    on(): void {
      console.log('Light turned on');
    }


    off(): void {
      console.log('Light turned off');
    }
  }


  class LightOnCommand extends Command {
    constructor(private light: Light) {
      super();
    }


    execute(): void {
      this.light.on();
    }
  }


  class LightOffCommand extends Command {
    constructor(private light: Light) {
      super();
    }


    execute(): void {
      this.light.off();
    }
  }


  class RemoteControl {
    constructor(private command: Command) {}


    pressButton(): void {
      this.command.execute();
    }
  }`,
    explanation:
      "The Angular receiver service handles device behavior, while the remote invoker triggers interchangeable command objects through one shared interface.",
  },
  {
    language: "React",
    code: `import React, { useMemo, useState } from "react";

interface Command {
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

function RemoteControl({ command }: { command: Command }) {
  return <button onClick={() => command.execute()}>Press button</button>;
}

export function App() {
  const light = useMemo(() => new Light(), []);
  const [isOn, setIsOn] = useState(true);

  const command = useMemo(
    () => (isOn ? new LightOnCommand(light) : new LightOffCommand(light)),
    [isOn, light]
  );

  return (
    <main>
      <h1>Remote Control</h1>
      <label>
        <input
          type="checkbox"
          checked={isOn}
          onChange={(e) => setIsOn(e.target.checked)}
        />
        Use ON command
      </label>
      <RemoteControl command={command} />
    </main>
  );
}`,
    explanation:
      "The React example treats the button as the invoker, the light as the receiver, and each action as a command object that can be swapped at runtime.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo, useState } from "react";
import { Pressable, SafeAreaView, Switch, Text, View } from "react-native";

interface Command {
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

function RemoteControl({ command }: { command: Command }) {
  return (
    <Pressable
      onPress={() => command.execute()}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Press button</Text>
    </Pressable>
  );
}

export function App() {
  const light = useMemo(() => new Light(), []);
  const [isOn, setIsOn] = useState(true);

  const command = useMemo(
    () => (isOn ? new LightOnCommand(light) : new LightOffCommand(light)),
    [isOn, light]
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Remote Control</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Text>Use ON command</Text>
          <Switch value={isOn} onValueChange={setIsOn} />
        </View>
        <RemoteControl command={command} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same command pattern, but exposes the invoker through a mobile pressable control and a switch to swap commands.",
  },
  {
    language: "C#",
    code: `using System;

public interface ICommand
{
    void Execute();
}

public class Light
{
    public void On()
    {
        Console.WriteLine("Light turned on");
    }

    public void Off()
    {
        Console.WriteLine("Light turned off");
    }
}

public class LightOnCommand : ICommand
{
    private readonly Light _light;

    public LightOnCommand(Light light)
    {
        _light = light;
    }

    public void Execute()
    {
        _light.On();
    }
}

public class LightOffCommand : ICommand
{
    private readonly Light _light;

    public LightOffCommand(Light light)
    {
        _light = light;
    }

    public void Execute()
    {
        _light.Off();
    }
}

public class RemoteControl
{
    private readonly ICommand _command;

    public RemoteControl(ICommand command)
    {
        _command = command;
    }

    public void PressButton()
    {
        _command.Execute();
    }
}

var light = new Light();

var onRemote = new RemoteControl(new LightOnCommand(light));
onRemote.PressButton();

var offRemote = new RemoteControl(new LightOffCommand(light));
offRemote.PressButton();`,
    explanation:
      "The C# example keeps the remote as the invoker and the light as the receiver, with command objects in between to encapsulate each action.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface ICommand
{
    void Execute();
}

public class Light
{
    public void On()
    {
        Console.WriteLine("Light turned on");
    }

    public void Off()
    {
        Console.WriteLine("Light turned off");
    }
}

public class LightOnCommand : ICommand
{
    private readonly Light _light;

    public LightOnCommand(Light light)
    {
        _light = light;
    }

    public void Execute()
    {
        _light.On();
    }
}

public class LightOffCommand : ICommand
{
    private readonly Light _light;

    public LightOffCommand(Light light)
    {
        _light = light;
    }

    public void Execute()
    {
        _light.Off();
    }
}

public class RemoteControl
{
    private readonly ICommand _command;

    public RemoteControl(ICommand command)
    {
        _command = command;
    }

    public void PressButton()
    {
        _command.Execute();
    }
}

var services = new ServiceCollection();
services.AddSingleton<Light>();
services.AddTransient<LightOnCommand>();
services.AddTransient<LightOffCommand>();

var provider = services.BuildServiceProvider();

var light = provider.GetRequiredService<Light>();

var onRemote = new RemoteControl(new LightOnCommand(light));
onRemote.PressButton();

var offRemote = new RemoteControl(new LightOffCommand(light));
offRemote.PressButton();`,
    explanation:
      "The .NET version demonstrates the same command structure with dependency injection support, keeping the invoker decoupled from the receiver's implementation.",
  },
];

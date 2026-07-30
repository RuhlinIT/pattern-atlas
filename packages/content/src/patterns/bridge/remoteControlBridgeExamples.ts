import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const remoteControlBridgeExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Device {
  power(): string;
  setChannel(channel: number): string;
}


class Tv implements Device {
  power(): string {
    return "TV power toggled";
  }


  setChannel(channel: number): string {
    return \`TV channel set to \${channel}\`;
  }
}


class Radio implements Device {
  power(): string {
    return "Radio power toggled";
  }


  setChannel(channel: number): string {
    return \`Radio station set to \${channel}\`;
  }
}


abstract class RemoteControl {
  constructor(protected device: Device) {}


  togglePower(): string {
    return this.device.power();
  }


  setChannel(channel: number): string {
    return this.device.setChannel(channel);
  }
}


class BasicRemote extends RemoteControl {}


const tvRemote = new BasicRemote(new Tv());
console.log(tvRemote.togglePower());
console.log(tvRemote.setChannel(5));`,
    explanation:
      "The remote control bridges the control abstraction to different devices, so the same remote can work with either a TV or a radio.",
  },
  {
    language: "Java",
    code: `interface Device {
    String power();
    String setChannel(int channel);
}


class Tv implements Device {
    public String power() {
        return "TV power toggled";
    }


    public String setChannel(int channel) {
        return "TV channel set to " + channel;
    }
}


class Radio implements Device {
    public String power() {
        return "Radio power toggled";
    }


    public String setChannel(int channel) {
        return "Radio station set to " + channel;
    }
}


abstract class RemoteControl {
    protected Device device;


    public RemoteControl(Device device) {
        this.device = device;
    }


    public String togglePower() {
        return device.power();
    }


    public String setChannel(int channel) {
        return device.setChannel(channel);
    }
}


class BasicRemote extends RemoteControl {
    public BasicRemote(Device device) {
        super(device);
    }
}


BasicRemote tvRemote = new BasicRemote(new Tv());
System.out.println(tvRemote.togglePower());
System.out.println(tvRemote.setChannel(5));`,
    explanation:
      "The bridge separates the remote control API from the underlying device implementation so both can evolve independently.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class Device(ABC):
    @abstractmethod
    def power(self) -> str:
        pass


    @abstractmethod
    def set_channel(self, channel: int) -> str:
        pass


class Tv(Device):
    def power(self) -> str:
        return "TV power toggled"


    def set_channel(self, channel: int) -> str:
        return f"TV channel set to {channel}"


class Radio(Device):
    def power(self) -> str:
        return "Radio power toggled"


    def set_channel(self, channel: int) -> str:
        return f"Radio station set to {channel}"


class RemoteControl:
    def __init__(self, device: Device) -> None:
        self.device = device


    def toggle_power(self) -> str:
        return self.device.power()


    def set_channel(self, channel: int) -> str:
        return self.device.set_channel(channel)


remote = RemoteControl(Tv())
print(remote.toggle_power())
print(remote.set_channel(5))`,
    explanation:
      "The remote control uses a bridge to call different device implementations without changing the control abstraction.",
  },
  {
    language: "Angular",
    code: `interface Device {
  power(): string;
  setChannel(channel: number): string;
}


class Tv implements Device {
  power(): string {
    return "TV power toggled";
  }


  setChannel(channel: number): string {
    return \`TV channel set to \${channel}\`;
  }
}


class Radio implements Device {
  power(): string {
    return "Radio power toggled";
  }


  setChannel(channel: number): string {
    return \`Radio station set to \${channel}\`;
  }
}


abstract class RemoteControl {
  constructor(protected device: Device) {}


  togglePower(): string {
    return this.device.power();
  }


  setChannel(channel: number): string {
    return this.device.setChannel(channel);
  }
}


class BasicRemote extends RemoteControl {}


const remote = new BasicRemote(new Tv());
console.log(remote.togglePower());
console.log(remote.setChannel(5));`,
    explanation:
      "The Angular example bridges the remote control abstraction to its device implementation so the UI logic stays stable across hardware types.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface Device {
  power(): string;
  setChannel(channel: number): string;
}


class Tv implements Device {
  power(): string {
    return "TV power toggled";
  }


  setChannel(channel: number): string {
    return \`TV channel set to \${channel}\`;
  }
}


class Radio implements Device {
  power(): string {
    return "Radio power toggled";
  }


  setChannel(channel: number): string {
    return \`Radio station set to \${channel}\`;
  }
}


abstract class RemoteControl {
  constructor(protected device: Device) {}


  togglePower(): string {
    return this.device.power();
  }


  setChannel(channel: number): string {
    return this.device.setChannel(channel);
  }
}


class BasicRemote extends RemoteControl {}


function RemotePreview({ remote }: { remote: RemoteControl }) {
  return (
    <div>
      <p>{remote.togglePower()}</p>
      <p>{remote.setChannel(5)}</p>
    </div>
  );
}


export function App() {
  const remote = useMemo(() => new BasicRemote(new Tv()), []);


  return (
    <main>
      <h1>Remote Control</h1>
      <RemotePreview remote={remote} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the remote abstraction separate from the device implementation, which makes it easy to swap devices in the UI.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface Device {
  power(): string;
  setChannel(channel: number): string;
}


class Tv implements Device {
  power(): string {
    return "TV power toggled";
  }


  setChannel(channel: number): string {
    return \`TV channel set to \${channel}\`;
  }
}


class Radio implements Device {
  power(): string {
    return "Radio power toggled";
  }


  setChannel(channel: number): string {
    return \`Radio station set to \${channel}\`;
  }
}


abstract class RemoteControl {
  constructor(protected device: Device) {}


  togglePower(): string {
    return this.device.power();
  }


  setChannel(channel: number): string {
    return this.device.setChannel(channel);
  }
}


class BasicRemote extends RemoteControl {}


function RemotePreview({ remote }: { remote: RemoteControl }) {
  return (
    <View>
      <Text>{remote.togglePower()}</Text>
      <Text>{remote.setChannel(5)}</Text>
    </View>
  );
}


export function App() {
  const remote = useMemo(() => new BasicRemote(new Tv()), []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Remote Control</Text>
        <RemotePreview remote={remote} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example bridges the remote interface to the device implementation so the same controls can target different devices.",
  },
  {
    language: "C#",
    code: `using System;


public interface IDevice
{
    string Power();
    string SetChannel(int channel);
}


public class Tv : IDevice
{
    public string Power()
    {
        return "TV power toggled";
    }


    public string SetChannel(int channel)
    {
        return $"TV channel set to {channel}";
    }
}


public class Radio : IDevice
{
    public string Power()
    {
        return "Radio power toggled";
    }


    public string SetChannel(int channel)
    {
        return $"Radio station set to {channel}";
    }
}


public abstract class RemoteControl
{
    protected readonly IDevice Device;


    protected RemoteControl(IDevice device)
    {
        Device = device;
    }


    public string TogglePower()
    {
        return Device.Power();
    }


    public string SetChannel(int channel)
    {
        return Device.SetChannel(channel);
    }
}


public class BasicRemote : RemoteControl
{
    public BasicRemote(IDevice device) : base(device) { }
}


var remote = new BasicRemote(new Tv());
Console.WriteLine(remote.TogglePower());
Console.WriteLine(remote.SetChannel(5));`,
    explanation:
      "The bridge lets the remote control abstraction work with multiple device implementations without hardcoding them into the class hierarchy.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface IDevice
{
    string Power();
    string SetChannel(int channel);
}


public class Tv : IDevice
{
    public string Power()
    {
        return "TV power toggled";
    }


    public string SetChannel(int channel)
    {
        return $"TV channel set to {channel}";
    }
}


public class Radio : IDevice
{
    public string Power()
    {
        return "Radio power toggled";
    }


    public string SetChannel(int channel)
    {
        return $"Radio station set to {channel}";
    }
}


public abstract class RemoteControl
{
    protected readonly IDevice Device;


    protected RemoteControl(IDevice device)
    {
        Device = device;
    }


    public string TogglePower()
    {
        return Device.Power();
    }


    public string SetChannel(int channel)
    {
        return Device.SetChannel(channel);
    }
}


public class BasicRemote : RemoteControl
{
    public BasicRemote(IDevice device) : base(device) { }
}


var services = new ServiceCollection();
services.AddSingleton<IDevice, Tv>();
services.AddTransient<BasicRemote>(provider => new BasicRemote(provider.GetRequiredService<IDevice>()));


var provider = services.BuildServiceProvider();
var remote = provider.GetRequiredService<BasicRemote>();

Console.WriteLine(remote.TogglePower());
Console.WriteLine(remote.SetChannel(5));`,
    explanation:
      "The .NET example uses dependency injection to bridge the remote control abstraction to a specific device implementation.",
  },
];

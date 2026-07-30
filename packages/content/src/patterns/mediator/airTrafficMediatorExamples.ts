import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const airTrafficMediatorExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface AirTrafficMediator {
  registerAircraft(aircraft: Aircraft): void;
  requestLanding(aircraft: Aircraft): void;
  requestTakeoff(aircraft: Aircraft): void;
}


class Aircraft {
  constructor(
    public callSign: string,
    private mediator: AirTrafficMediator
  ) {}


  land(): void {
    this.mediator.requestLanding(this);
  }


  takeOff(): void {
    this.mediator.requestTakeoff(this);
  }


  receive(message: string): void {
    console.log(\`\${this.callSign} received: \${message}\`);
  }
}


class AirTrafficControl implements AirTrafficMediator {
  private aircraft: Aircraft[] = [];


  registerAircraft(aircraft: Aircraft): void {
    this.aircraft.push(aircraft);
  }


  requestLanding(aircraft: Aircraft): void {
    for (const other of this.aircraft) {
      if (other !== aircraft) {
        other.receive(\`\${aircraft.callSign} requests landing clearance\`);
      }
    }
    console.log(\`ATC approved landing for \${aircraft.callSign}\`);
  }


  requestTakeoff(aircraft: Aircraft): void {
    for (const other of this.aircraft) {
      if (other !== aircraft) {
        other.receive(\`\${aircraft.callSign} requests takeoff clearance\`);
      }
    }
    console.log(\`ATC approved takeoff for \${aircraft.callSign}\`);
  }
}


const atc = new AirTrafficControl();
const flightA = new Aircraft("FL-100", atc);
const flightB = new Aircraft("FL-200", atc);
const flightC = new Aircraft("FL-300", atc);


atc.registerAircraft(flightA);
atc.registerAircraft(flightB);
atc.registerAircraft(flightC);


flightA.land();
flightB.takeOff();`,
    explanation:
      "The air traffic mediator coordinates landing and takeoff requests through one control object instead of aircraft talking directly.",
  },
  {
    language: "Java",
    code: `interface AirTrafficMediator {
    void registerAircraft(Aircraft aircraft);
    void requestLanding(Aircraft aircraft);
    void requestTakeoff(Aircraft aircraft);
}


class Aircraft {
    private final String callSign;
    private final AirTrafficMediator mediator;


    public Aircraft(String callSign, AirTrafficMediator mediator) {
        this.callSign = callSign;
        this.mediator = mediator;
    }


    public String getCallSign() {
        return callSign;
    }


    public void land() {
        mediator.requestLanding(this);
    }


    public void takeOff() {
        mediator.requestTakeoff(this);
    }


    public void receive(String message) {
        System.out.println(callSign + " received: " + message);
    }
}


class AirTrafficControl implements AirTrafficMediator {
    private final java.util.List<Aircraft> aircraft = new java.util.ArrayList<>();


    public void registerAircraft(Aircraft aircraft) {
        this.aircraft.add(aircraft);
    }


    public void requestLanding(Aircraft aircraft) {
        for (Aircraft other : this.aircraft) {
            if (other != aircraft) {
                other.receive(aircraft.getCallSign() + " requests landing clearance");
            }
        }
        System.out.println("ATC approved landing for " + aircraft.getCallSign());
    }


    public void requestTakeoff(Aircraft aircraft) {
        for (Aircraft other : this.aircraft) {
            if (other != aircraft) {
                other.receive(aircraft.getCallSign() + " requests takeoff clearance");
            }
        }
        System.out.println("ATC approved takeoff for " + aircraft.getCallSign());
    }
}


AirTrafficControl atc = new AirTrafficControl();
Aircraft flightA = new Aircraft("FL-100", atc);
Aircraft flightB = new Aircraft("FL-200", atc);
Aircraft flightC = new Aircraft("FL-300", atc);


atc.registerAircraft(flightA);
atc.registerAircraft(flightB);
atc.registerAircraft(flightC);


flightA.land();
flightB.takeOff();`,
    explanation:
      "The Java example models air traffic control as the mediator that coordinates aircraft requests and notifications.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class AirTrafficMediator(ABC):
    @abstractmethod
    def register_aircraft(self, aircraft: "Aircraft") -> None:
        pass


    @abstractmethod
    def request_landing(self, aircraft: "Aircraft") -> None:
        pass


    @abstractmethod
    def request_takeoff(self, aircraft: "Aircraft") -> None:
        pass


class Aircraft:
    def __init__(self, call_sign: str, mediator: AirTrafficMediator) -> None:
        self.call_sign = call_sign
        self.mediator = mediator


    def land(self) -> None:
        self.mediator.request_landing(self)


    def takeoff(self) -> None:
        self.mediator.request_takeoff(self)


    def receive(self, message: str) -> None:
        print(f"{self.call_sign} received: {message}")


class AirTrafficControl(AirTrafficMediator):
    def __init__(self) -> None:
        self.aircraft: list[Aircraft] = []


    def register_aircraft(self, aircraft: Aircraft) -> None:
        self.aircraft.append(aircraft)


    def request_landing(self, aircraft: Aircraft) -> None:
        for other in self.aircraft:
            if other != aircraft:
                other.receive(f"{aircraft.call_sign} requests landing clearance")
        print(f"ATC approved landing for {aircraft.call_sign}")


    def request_takeoff(self, aircraft: Aircraft) -> None:
        for other in self.aircraft:
            if other != aircraft:
                other.receive(f"{aircraft.call_sign} requests takeoff clearance")
        print(f"ATC approved takeoff for {aircraft.call_sign}")


atc = AirTrafficControl()
flight_a = Aircraft("FL-100", atc)
flight_b = Aircraft("FL-200", atc)
flight_c = Aircraft("FL-300", atc)


atc.register_aircraft(flight_a)
atc.register_aircraft(flight_b)
atc.register_aircraft(flight_c)


flight_a.land()
flight_b.takeoff()`,
    explanation:
      "The Python air traffic control mediator keeps aircraft from coordinating directly and handles all clearance logic centrally.",
  },
  {
    language: "Angular",
    code: `interface AirTrafficMediator {
  registerAircraft(aircraft: Aircraft): void;
  requestLanding(aircraft: Aircraft): void;
  requestTakeoff(aircraft: Aircraft): void;
}


class Aircraft {
  constructor(
    public callSign: string,
    private mediator: AirTrafficMediator
  ) {}


  land(): void {
    this.mediator.requestLanding(this);
  }


  takeOff(): void {
    this.mediator.requestTakeoff(this);
  }


  receive(message: string): void {
    console.log(\`\${this.callSign} received: \${message}\`);
  }
}


class AirTrafficControl implements AirTrafficMediator {
  private aircraft: Aircraft[] = [];


  registerAircraft(aircraft: Aircraft): void {
    this.aircraft.push(aircraft);
  }


  requestLanding(aircraft: Aircraft): void {
    for (const other of this.aircraft) {
      if (other !== aircraft) {
        other.receive(\`\${aircraft.callSign} requests landing clearance\`);
      }
    }
    console.log(\`ATC approved landing for \${aircraft.callSign}\`);
  }


  requestTakeoff(aircraft: Aircraft): void {
    for (const other of this.aircraft) {
      if (other !== aircraft) {
        other.receive(\`\${aircraft.callSign} requests takeoff clearance\`);
      }
    }
    console.log(\`ATC approved takeoff for \${aircraft.callSign}\`);
  }
}


const atc = new AirTrafficControl();
const flightA = new Aircraft("FL-100", atc);
const flightB = new Aircraft("FL-200", atc);
const flightC = new Aircraft("FL-300", atc);


atc.registerAircraft(flightA);
atc.registerAircraft(flightB);
atc.registerAircraft(flightC);


flightA.land();
flightB.takeOff();`,
    explanation:
      "The Angular example uses the mediator to coordinate aircraft movement and message flow in one centralized class.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface AirTrafficMediator {
  registerAircraft(aircraft: Aircraft): void;
  requestLanding(aircraft: Aircraft): void;
  requestTakeoff(aircraft: Aircraft): void;
}


class Aircraft {
  constructor(
    public callSign: string,
    private mediator: AirTrafficMediator
  ) {}


  land(): void {
    this.mediator.requestLanding(this);
  }


  takeOff(): void {
    this.mediator.requestTakeoff(this);
  }


  receive(message: string): void {
    console.log(\`\${this.callSign} received: \${message}\`);
  }
}


class AirTrafficControl implements AirTrafficMediator {
  private aircraft: Aircraft[] = [];


  registerAircraft(aircraft: Aircraft): void {
    this.aircraft.push(aircraft);
  }


  requestLanding(aircraft: Aircraft): void {
    for (const other of this.aircraft) {
      if (other !== aircraft) {
        other.receive(\`\${aircraft.callSign} requests landing clearance\`);
      }
    }
    console.log(\`ATC approved landing for \${aircraft.callSign}\`);
  }


  requestTakeoff(aircraft: Aircraft): void {
    for (const other of this.aircraft) {
      if (other !== aircraft) {
        other.receive(\`\${aircraft.callSign} requests takeoff clearance\`);
      }
    }
    console.log(\`ATC approved takeoff for \${aircraft.callSign}\`);
  }
}


function AirportPreview() {
  return <p>Air traffic control is coordinating flights</p>;
}


export function App() {
  const atc = useMemo(() => new AirTrafficControl(), []);
  const flightA = useMemo(() => new Aircraft("FL-100", atc), [atc]);
  const flightB = useMemo(() => new Aircraft("FL-200", atc), [atc]);
  const flightC = useMemo(() => new Aircraft("FL-300", atc), [atc]);


  useMemo(() => {
    atc.registerAircraft(flightA);
    atc.registerAircraft(flightB);
    atc.registerAircraft(flightC);
  }, [atc, flightA, flightB, flightC]);


  return (
    <main>
      <h1>Air Traffic Mediator</h1>
      <AirportPreview />
    </main>
  );
}`,
    explanation:
      "The React example models the air traffic control tower as the mediator and keeps aircraft coordination out of the UI layer.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface AirTrafficMediator {
  registerAircraft(aircraft: Aircraft): void;
  requestLanding(aircraft: Aircraft): void;
  requestTakeoff(aircraft: Aircraft): void;
}


class Aircraft {
  constructor(
    public callSign: string,
    private mediator: AirTrafficMediator
  ) {}


  land(): void {
    this.mediator.requestLanding(this);
  }


  takeOff(): void {
    this.mediator.requestTakeoff(this);
  }


  receive(message: string): void {
    console.log(\`\${this.callSign} received: \${message}\`);
  }
}


class AirTrafficControl implements AirTrafficMediator {
  private aircraft: Aircraft[] = [];


  registerAircraft(aircraft: Aircraft): void {
    this.aircraft.push(aircraft);
  }


  requestLanding(aircraft: Aircraft): void {
    for (const other of this.aircraft) {
      if (other !== aircraft) {
        other.receive(\`\${aircraft.callSign} requests landing clearance\`);
      }
    }
    console.log(\`ATC approved landing for \${aircraft.callSign}\`);
  }


  requestTakeoff(aircraft: Aircraft): void {
    for (const other of this.aircraft) {
      if (other !== aircraft) {
        other.receive(\`\${aircraft.callSign} requests takeoff clearance\`);
      }
    }
    console.log(\`ATC approved takeoff for \${aircraft.callSign}\`);
  }
}


function AirportPreview() {
  return (
    <View>
      <Text>Air traffic control is coordinating flights</Text>
    </View>
  );
}


export function App() {
  const atc = useMemo(() => new AirTrafficControl(), []);
  const flightA = useMemo(() => new Aircraft("FL-100", atc), [atc]);
  const flightB = useMemo(() => new Aircraft("FL-200", atc), [atc]);
  const flightC = useMemo(() => new Aircraft("FL-300", atc), [atc]);


  useMemo(() => {
    atc.registerAircraft(flightA);
    atc.registerAircraft(flightB);
    atc.registerAircraft(flightC);
  }, [atc, flightA, flightB, flightC]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Air Traffic Mediator</Text>
        <AirportPreview />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the same mediator-based coordination for aircraft request handling and display.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public interface IAirTrafficMediator
{
    void RegisterAircraft(Aircraft aircraft);
    void RequestLanding(Aircraft aircraft);
    void RequestTakeoff(Aircraft aircraft);
}


public class Aircraft
{
    public string CallSign { get; }
    private readonly IAirTrafficMediator _mediator;


    public Aircraft(string callSign, IAirTrafficMediator mediator)
    {
        CallSign = callSign;
        _mediator = mediator;
    }


    public void Land()
    {
        _mediator.RequestLanding(this);
    }


    public void TakeOff()
    {
        _mediator.RequestTakeoff(this);
    }


    public void Receive(string message)
    {
        Console.WriteLine($"{CallSign} received: {message}");
    }
}


public class AirTrafficControl : IAirTrafficMediator
{
    private readonly List<Aircraft> _aircraft = new List<Aircraft>();


    public void RegisterAircraft(Aircraft aircraft)
    {
        _aircraft.Add(aircraft);
    }


    public void RequestLanding(Aircraft aircraft)
    {
        foreach (var other in _aircraft)
        {
            if (other != aircraft)
            {
                other.Receive($"{aircraft.CallSign} requests landing clearance");
            }
        }
        Console.WriteLine($"ATC approved landing for {aircraft.CallSign}");
    }


    public void RequestTakeoff(Aircraft aircraft)
    {
        foreach (var other in _aircraft)
        {
            if (other != aircraft)
            {
                other.Receive($"{aircraft.CallSign} requests takeoff clearance");
            }
        }
        Console.WriteLine($"ATC approved takeoff for {aircraft.CallSign}");
    }
}


var atc = new AirTrafficControl();
var flightA = new Aircraft("FL-100", atc);
var flightB = new Aircraft("FL-200", atc);
var flightC = new Aircraft("FL-300", atc);


atc.RegisterAircraft(flightA);
atc.RegisterAircraft(flightB);
atc.RegisterAircraft(flightC);


flightA.Land();
flightB.TakeOff();`,
    explanation:
      "The C# version uses an air traffic control mediator to coordinate aircraft safely without direct coupling.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public interface IAirTrafficMediator
{
    void RegisterAircraft(Aircraft aircraft);
    void RequestLanding(Aircraft aircraft);
    void RequestTakeoff(Aircraft aircraft);
}


public class Aircraft
{
    public string CallSign { get; }
    private readonly IAirTrafficMediator _mediator;


    public Aircraft(string callSign, IAirTrafficMediator mediator)
    {
        CallSign = callSign;
        _mediator = mediator;
    }


    public void Land()
    {
        _mediator.RequestLanding(this);
    }


    public void TakeOff()
    {
        _mediator.RequestTakeoff(this);
    }


    public void Receive(string message)
    {
        Console.WriteLine($"{CallSign} received: {message}");
    }
}


public class AirTrafficControl : IAirTrafficMediator
{
    private readonly List<Aircraft> _aircraft = new List<Aircraft>();


    public void RegisterAircraft(Aircraft aircraft)
    {
        _aircraft.Add(aircraft);
    }


    public void RequestLanding(Aircraft aircraft)
    {
        foreach (var other in _aircraft)
        {
            if (other != aircraft)
            {
                other.Receive($"{aircraft.CallSign} requests landing clearance");
            }
        }
        Console.WriteLine($"ATC approved landing for {aircraft.CallSign}");
    }


    public void RequestTakeoff(Aircraft aircraft)
    {
        foreach (var other in _aircraft)
        {
            if (other != aircraft)
            {
                other.Receive($"{aircraft.CallSign} requests takeoff clearance");
            }
        }
        Console.WriteLine($"ATC approved takeoff for {aircraft.CallSign}");
    }
}


var services = new ServiceCollection();
services.AddSingleton<IAirTrafficMediator, AirTrafficControl>();

var provider = services.BuildServiceProvider();
var atc = provider.GetRequiredService<IAirTrafficMediator>();

var flightA = new Aircraft("FL-100", atc);
var flightB = new Aircraft("FL-200", atc);
var flightC = new Aircraft("FL-300", atc);


atc.RegisterAircraft(flightA);
atc.RegisterAircraft(flightB);
atc.RegisterAircraft(flightC);


flightA.Land();
flightB.TakeOff();`,
    explanation:
      "The .NET example registers the air traffic mediator as a service, keeping aircraft coordination centralized and reusable.",
  },
];

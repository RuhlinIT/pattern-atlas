import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const modernOfficeExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Desk {
  sitAt(): string;
}


interface Chair {
  sitOn(): string;
}


interface Cabinet {
  store(): string;
}


interface OfficeFactory {
  createDesk(): Desk;
  createChair(): Chair;
  createCabinet(): Cabinet;
}


class ModernDesk implements Desk {
  sitAt(): string {
    return "Sitting at a glass desk";
  }
}


class ModernChair implements Chair {
  sitOn(): string {
    return "Sitting on an ergonomic mesh chair";
  }
}


class ModernCabinet implements Cabinet {
  store(): string {
    return "Storing files in a minimalist cabinet";
  }
}


class ClassicDesk implements Desk {
  sitAt(): string {
    return "Sitting at a wooden desk";
  }
}


class ClassicChair implements Chair {
  sitOn(): string {
    return "Sitting on a cushioned wooden chair";
  }
}


class ClassicCabinet implements Cabinet {
  store(): string {
    return "Storing files in a traditional cabinet";
  }
}


class ModernOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return new ModernDesk();
  }


  createChair(): Chair {
    return new ModernChair();
  }


  createCabinet(): Cabinet {
    return new ModernCabinet();
  }
}


class ClassicOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return new ClassicDesk();
  }


  createChair(): Chair {
    return new ClassicChair();
  }


  createCabinet(): Cabinet {
    return new ClassicCabinet();
  }
}


class OfficeSetup {
  constructor(private factory: OfficeFactory) {}


  describe(): string {
    const desk = this.factory.createDesk();
    const chair = this.factory.createChair();
    const cabinet = this.factory.createCabinet();


    return [desk.sitAt(), chair.sitOn(), cabinet.store()].join(" | ");
  }
}


const office = new OfficeSetup(new ModernOfficeFactory());
console.log(office.describe());`,
    explanation:
      "The office setup uses one factory to create a matching family of desk, chair, and cabinet objects, so the client can switch between modern and classic styles without changing construction logic.",
  },
  {
    language: "Java",
    code: `interface Desk {
    String sitAt();
}


interface Chair {
    String sitOn();
}


interface Cabinet {
    String store();
}


interface OfficeFactory {
    Desk createDesk();
    Chair createChair();
    Cabinet createCabinet();
}


class ModernDesk implements Desk {
    public String sitAt() {
        return "Sitting at a glass desk";
    }
}


class ModernChair implements Chair {
    public String sitOn() {
        return "Sitting on an ergonomic mesh chair";
    }
}


class ModernCabinet implements Cabinet {
    public String store() {
        return "Storing files in a minimalist cabinet";
    }
}


class ClassicDesk implements Desk {
    public String sitAt() {
        return "Sitting at a wooden desk";
    }
}


class ClassicChair implements Chair {
    public String sitOn() {
        return "Sitting on a cushioned wooden chair";
    }
}


class ClassicCabinet implements Cabinet {
    public String store() {
        return "Storing files in a traditional cabinet";
    }
}


class ModernOfficeFactory implements OfficeFactory {
    public Desk createDesk() {
        return new ModernDesk();
    }


    public Chair createChair() {
        return new ModernChair();
    }


    public Cabinet createCabinet() {
        return new ModernCabinet();
    }
}


class ClassicOfficeFactory implements OfficeFactory {
    public Desk createDesk() {
        return new ClassicDesk();
    }


    public Chair createChair() {
        return new ClassicChair();
    }


    public Cabinet createCabinet() {
        return new ClassicCabinet();
    }
}


class OfficeSetup {
    private final OfficeFactory factory;


    public OfficeSetup(OfficeFactory factory) {
        this.factory = factory;
    }


    public String describe() {
        Desk desk = factory.createDesk();
        Chair chair = factory.createChair();
        Cabinet cabinet = factory.createCabinet();


        return desk.sitAt() + " | " + chair.sitOn() + " | " + cabinet.store();
    }
}


OfficeSetup office = new OfficeSetup(new ModernOfficeFactory());
System.out.println(office.describe());`,
    explanation:
      "The abstract factory keeps all office furniture consistent within the selected style, so the client does not need to know which concrete classes are being created.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod



class Desk(ABC):
    @abstractmethod
    def sit_at(self) -> str:
        pass



class Chair(ABC):
    @abstractmethod
    def sit_on(self) -> str:
        pass



class Cabinet(ABC):
    @abstractmethod
    def store(self) -> str:
        pass



class OfficeFactory(ABC):
    @abstractmethod
    def create_desk(self) -> Desk:
        pass


    @abstractmethod
    def create_chair(self) -> Chair:
        pass


    @abstractmethod
    def create_cabinet(self) -> Cabinet:
        pass



class ModernDesk(Desk):
    def sit_at(self) -> str:
        return "Sitting at a glass desk"



class ModernChair(Chair):
    def sit_on(self) -> str:
        return "Sitting on an ergonomic mesh chair"



class ModernCabinet(Cabinet):
    def store(self) -> str:
        return "Storing files in a minimalist cabinet"



class ClassicDesk(Desk):
    def sit_at(self) -> str:
        return "Sitting at a wooden desk"



class ClassicChair(Chair):
    def sit_on(self) -> str:
        return "Sitting on a cushioned wooden chair"



class ClassicCabinet(Cabinet):
    def store(self) -> str:
        return "Storing files in a traditional cabinet"



class ModernOfficeFactory(OfficeFactory):
    def create_desk(self) -> Desk:
        return ModernDesk()


    def create_chair(self) -> Chair:
        return ModernChair()


    def create_cabinet(self) -> Cabinet:
        return ModernCabinet()



class ClassicOfficeFactory(OfficeFactory):
    def create_desk(self) -> Desk:
        return ClassicDesk()


    def create_chair(self) -> Chair:
        return ClassicChair()


    def create_cabinet(self) -> Cabinet:
        return ClassicCabinet()



class OfficeSetup:
    def __init__(self, factory: OfficeFactory) -> None:
        self.factory = factory


    def describe(self) -> str:
        desk = self.factory.create_desk()
        chair = self.factory.create_chair()
        cabinet = self.factory.create_cabinet()
        return " | ".join([desk.sit_at(), chair.sit_on(), cabinet.store()])



office = OfficeSetup(ModernOfficeFactory())
print(office.describe())`,
    explanation:
      "The modern office factory creates a related family of furniture objects, keeping the selected style consistent across the entire setup.",
  },
  {
    language: "Angular",
    code: `interface Desk {
  sitAt(): string;
}


interface Chair {
  sitOn(): string;
}


interface Cabinet {
  store(): string;
}


interface OfficeFactory {
  createDesk(): Desk;
  createChair(): Chair;
  createCabinet(): Cabinet;
}


class ModernDesk implements Desk {
  sitAt(): string {
    return "Sitting at a glass desk";
  }
}


class ModernChair implements Chair {
  sitOn(): string {
    return "Sitting on an ergonomic mesh chair";
  }
}


class ModernCabinet implements Cabinet {
  store(): string {
    return "Storing files in a minimalist cabinet";
  }
}


class ClassicDesk implements Desk {
  sitAt(): string {
    return "Sitting at a wooden desk";
  }
}


class ClassicChair implements Chair {
  sitOn(): string {
    return "Sitting on a cushioned wooden chair";
  }
}


class ClassicCabinet implements Cabinet {
  store(): string {
    return "Storing files in a traditional cabinet";
  }
}


class ModernOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return new ModernDesk();
  }


  createChair(): Chair {
    return new ModernChair();
  }


  createCabinet(): Cabinet {
    return new ModernCabinet();
  }
}


class ClassicOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return new ClassicDesk();
  }


  createChair(): Chair {
    return new ClassicChair();
  }


  createCabinet(): Cabinet {
    return new ClassicCabinet();
  }
}


class OfficeSetup {
  constructor(private factory: OfficeFactory) {}


  describe(): string {
    const desk = this.factory.createDesk();
    const chair = this.factory.createChair();
    const cabinet = this.factory.createCabinet();


    return [desk.sitAt(), chair.sitOn(), cabinet.store()].join(" | ");
  }
}


const office = new OfficeSetup(new ModernOfficeFactory());
console.log(office.describe());`,
    explanation:
      "The Angular example uses a factory abstraction to keep a matching office furniture family together while still allowing the application to switch styles cleanly.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface Desk {
  sitAt(): string;
}


interface Chair {
  sitOn(): string;
}


interface Cabinet {
  store(): string;
}


interface OfficeFactory {
  createDesk(): Desk;
  createChair(): Chair;
  createCabinet(): Cabinet;
}


class ModernDesk implements Desk {
  sitAt(): string {
    return "Sitting at a glass desk";
  }
}


class ModernChair implements Chair {
  sitOn(): string {
    return "Sitting on an ergonomic mesh chair";
  }
}


class ModernCabinet implements Cabinet {
  store(): string {
    return "Storing files in a minimalist cabinet";
  }
}


class ClassicDesk implements Desk {
  sitAt(): string {
    return "Sitting at a wooden desk";
  }
}


class ClassicChair implements Chair {
  sitOn(): string {
    return "Sitting on a cushioned wooden chair";
  }
}


class ClassicCabinet implements Cabinet {
  store(): string {
    return "Storing files in a traditional cabinet";
  }
}


class ModernOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return new ModernDesk();
  }


  createChair(): Chair {
    return new ModernChair();
  }


  createCabinet(): Cabinet {
    return new ModernCabinet();
  }
}


class ClassicOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return new ClassicDesk();
  }


  createChair(): Chair {
    return new ClassicChair();
  }


  createCabinet(): Cabinet {
    return new ClassicCabinet();
  }
}


function OfficePreview({ factory }: { factory: OfficeFactory }) {
  const desk = factory.createDesk();
  const chair = factory.createChair();
  const cabinet = factory.createCabinet();


  return <p>{[desk.sitAt(), chair.sitOn(), cabinet.store()].join(" | ")}</p>;
}


export function App() {
  const factory = useMemo(() => new ModernOfficeFactory(), []);


  return (
    <main>
      <h1>Modern Office Setup</h1>
      <OfficePreview factory={factory} />
    </main>
  );
}`,
    explanation:
      "The React example uses the abstract factory to build a consistent office furniture family before rendering the result in the UI.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface Desk {
  sitAt(): string;
}


interface Chair {
  sitOn(): string;
}


interface Cabinet {
  store(): string;
}


interface OfficeFactory {
  createDesk(): Desk;
  createChair(): Chair;
  createCabinet(): Cabinet;
}


class ModernDesk implements Desk {
  sitAt(): string {
    return "Sitting at a glass desk";
  }
}


class ModernChair implements Chair {
  sitOn(): string {
    return "Sitting on an ergonomic mesh chair";
  }
}


class ModernCabinet implements Cabinet {
  store(): string {
    return "Storing files in a minimalist cabinet";
  }
}


class ClassicDesk implements Desk {
  sitAt(): string {
    return "Sitting at a wooden desk";
  }
}


class ClassicChair implements Chair {
  sitOn(): string {
    return "Sitting on a cushioned wooden chair";
  }
}


class ClassicCabinet implements Cabinet {
  store(): string {
    return "Storing files in a traditional cabinet";
  }
}


class ModernOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return new ModernDesk();
  }


  createChair(): Chair {
    return new ModernChair();
  }


  createCabinet(): Cabinet {
    return new ModernCabinet();
  }
}


class ClassicOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return new ClassicDesk();
  }


  createChair(): Chair {
    return new ClassicChair();
  }


  createCabinet(): Cabinet {
    return new ClassicCabinet();
  }
}


function OfficePreview({ factory }: { factory: OfficeFactory }) {
  const desk = factory.createDesk();
  const chair = factory.createChair();
  const cabinet = factory.createCabinet();


  return (
    <View>
      <Text>{desk.sitAt()}</Text>
      <Text>{chair.sitOn()}</Text>
      <Text>{cabinet.store()}</Text>
    </View>
  );
}


export function App() {
  const factory = useMemo(() => new ModernOfficeFactory(), []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Modern Office Setup</Text>
        <OfficePreview factory={factory} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same abstract factory to create a matching office furniture family, then displays the selected setup in a mobile-friendly layout.",
  },
  {
    language: "C#",
    code: `using System;


public interface IDesk
{
    string SitAt();
}


public interface IChair
{
    string SitOn();
}


public interface ICabinet
{
    string Store();
}


public interface IOfficeFactory
{
    IDesk CreateDesk();
    IChair CreateChair();
    ICabinet CreateCabinet();
}


public class ModernDesk : IDesk
{
    public string SitAt()
    {
        return "Sitting at a glass desk";
    }
}


public class ModernChair : IChair
{
    public string SitOn()
    {
        return "Sitting on an ergonomic mesh chair";
    }
}


public class ModernCabinet : ICabinet
{
    public string Store()
    {
        return "Storing files in a minimalist cabinet";
    }
}


public class ClassicDesk : IDesk
{
    public string SitAt()
    {
        return "Sitting at a wooden desk";
    }
}


public class ClassicChair : IChair
{
    public string SitOn()
    {
        return "Sitting on a cushioned wooden chair";
    }
}


public class ClassicCabinet : ICabinet
{
    public string Store()
    {
        return "Storing files in a traditional cabinet";
    }
}


public class ModernOfficeFactory : IOfficeFactory
{
    public IDesk CreateDesk()
    {
        return new ModernDesk();
    }


    public IChair CreateChair()
    {
        return new ModernChair();
    }


    public ICabinet CreateCabinet()
    {
        return new ModernCabinet();
    }
}


public class ClassicOfficeFactory : IOfficeFactory
{
    public IDesk CreateDesk()
    {
        return new ClassicDesk();
    }


    public IChair CreateChair()
    {
        return new ClassicChair();
    }


    public ICabinet CreateCabinet()
    {
        return new ClassicCabinet();
    }
}


public class OfficeSetup
{
    private readonly IOfficeFactory _factory;


    public OfficeSetup(IOfficeFactory factory)
    {
        _factory = factory;
    }


    public string Describe()
    {
        var desk = _factory.CreateDesk();
        var chair = _factory.CreateChair();
        var cabinet = _factory.CreateCabinet();


        return string.Join(" | ", desk.SitAt(), chair.SitOn(), cabinet.Store());
    }
}


var office = new OfficeSetup(new ModernOfficeFactory());
Console.WriteLine(office.Describe());`,
    explanation:
      "The C# example keeps the office furniture family consistent by relying on a single abstract factory to create matching products.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface IDesk
{
    string SitAt();
}


public interface IChair
{
    string SitOn();
}


public interface ICabinet
{
    string Store();
}


public interface IOfficeFactory
{
    IDesk CreateDesk();
    IChair CreateChair();
    ICabinet CreateCabinet();
}


public class ModernDesk : IDesk
{
    public string SitAt()
    {
        return "Sitting at a glass desk";
    }
}


public class ModernChair : IChair
{
    public string SitOn()
    {
        return "Sitting on an ergonomic mesh chair";
    }
}


public class ModernCabinet : ICabinet
{
    public string Store()
    {
        return "Storing files in a minimalist cabinet";
    }
}


public class ClassicDesk : IDesk
{
    public string SitAt()
    {
        return "Sitting at a wooden desk";
    }
}


public class ClassicChair : IChair
{
    public string SitOn()
    {
        return "Sitting on a cushioned wooden chair";
    }
}


public class ClassicCabinet : ICabinet
{
    public string Store()
    {
        return "Storing files in a traditional cabinet";
    }
}


public class ModernOfficeFactory : IOfficeFactory
{
    public IDesk CreateDesk()
    {
        return new ModernDesk();
    }


    public IChair CreateChair()
    {
        return new ModernChair();
    }


    public ICabinet CreateCabinet()
    {
        return new ModernCabinet();
    }
}


public class ClassicOfficeFactory : IOfficeFactory
{
    public IDesk CreateDesk()
    {
        return new ClassicDesk();
    }


    public IChair CreateChair()
    {
        return new ClassicChair();
    }


    public ICabinet CreateCabinet()
    {
        return new ClassicCabinet();
    }
}


public class OfficeSetup
{
    private readonly IOfficeFactory _factory;


    public OfficeSetup(IOfficeFactory factory)
    {
        _factory = factory;
    }


    public string Describe()
    {
        var desk = _factory.CreateDesk();
        var chair = _factory.CreateChair();
        var cabinet = _factory.CreateCabinet();


        return string.Join(" | ", desk.SitAt(), chair.SitOn(), cabinet.Store());
    }
}


var services = new ServiceCollection();
services.AddSingleton<IOfficeFactory, ModernOfficeFactory>();
services.AddTransient<OfficeSetup>();

var provider = services.BuildServiceProvider();
var office = provider.GetRequiredService<OfficeSetup>();

Console.WriteLine(office.Describe());`,
    explanation:
      "The .NET example uses dependency injection to resolve the abstract factory and create a consistent family of office products without tying the client to concrete classes.",
  },
];

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const vehicleFactoryExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Car {
  drive(): string;
}


interface Truck {
  haul(): string;
}


interface Bike {
  pedal(): string;
}


interface VehicleFactory {
  createCar(): Car;
  createTruck(): Truck;
  createBike(): Bike;
}


class GasCar implements Car {
  drive(): string {
    return "Driving a gasoline car";
  }
}


class GasTruck implements Truck {
  haul(): string {
    return "Hauling cargo with a gasoline truck";
  }
}


class GasBike implements Bike {
  pedal(): string {
    return "Pedaling a gasoline-assisted bike";
  }
}


class ElectricCar implements Car {
  drive(): string {
    return "Driving an electric car";
  }
}


class ElectricTruck implements Truck {
  haul(): string {
    return "Hauling cargo with an electric truck";
  }
}


class ElectricBike implements Bike {
  pedal(): string {
    return "Pedaling an electric bike";
  }
}


class GasVehicleFactory implements VehicleFactory {
  createCar(): Car {
    return new GasCar();
  }


  createTruck(): Truck {
    return new GasTruck();
  }


  createBike(): Bike {
    return new GasBike();
  }
}


class ElectricVehicleFactory implements VehicleFactory {
  createCar(): Car {
    return new ElectricCar();
  }


  createTruck(): Truck {
    return new ElectricTruck();
  }


  createBike(): Bike {
    return new ElectricBike();
  }
}


class FleetManager {
  constructor(private factory: VehicleFactory) {}


  describe(): string {
    const car = this.factory.createCar();
    const truck = this.factory.createTruck();
    const bike = this.factory.createBike();


    return [car.drive(), truck.haul(), bike.pedal()].join(" | ");
  }
}


const fleet = new FleetManager(new ElectricVehicleFactory());
console.log(fleet.describe());`,
    explanation:
      "The vehicle factory creates a compatible family of transport objects, so the system can switch between gas and electric fleets without changing the client code.",
  },
  {
    language: "Java",
    code: `interface Car {
    String drive();
}


interface Truck {
    String haul();
}


interface Bike {
    String pedal();
}


interface VehicleFactory {
    Car createCar();
    Truck createTruck();
    Bike createBike();
}


class GasCar implements Car {
    public String drive() {
        return "Driving a gasoline car";
    }
}


class GasTruck implements Truck {
    public String haul() {
        return "Hauling cargo with a gasoline truck";
    }
}


class GasBike implements Bike {
    public String pedal() {
        return "Pedaling a gasoline-assisted bike";
    }
}


class ElectricCar implements Car {
    public String drive() {
        return "Driving an electric car";
    }
}


class ElectricTruck implements Truck {
    public String haul() {
        return "Hauling cargo with an electric truck";
    }
}


class ElectricBike implements Bike {
    public String pedal() {
        return "Pedaling an electric bike";
    }
}


class GasVehicleFactory implements VehicleFactory {
    public Car createCar() {
        return new GasCar();
    }


    public Truck createTruck() {
        return new GasTruck();
    }


    public Bike createBike() {
        return new GasBike();
    }
}


class ElectricVehicleFactory implements VehicleFactory {
    public Car createCar() {
        return new ElectricCar();
    }


    public Truck createTruck() {
        return new ElectricTruck();
    }


    public Bike createBike() {
        return new ElectricBike();
    }
}


class FleetManager {
    private final VehicleFactory factory;


    public FleetManager(VehicleFactory factory) {
        this.factory = factory;
    }


    public String describe() {
        Car car = factory.createCar();
        Truck truck = factory.createTruck();
        Bike bike = factory.createBike();


        return car.drive() + " | " + truck.haul() + " | " + bike.pedal();
    }
}


FleetManager fleet = new FleetManager(new ElectricVehicleFactory());
System.out.println(fleet.describe());`,
    explanation:
      "The abstract factory ensures every vehicle in the family follows the same power source, keeping the fleet consistent when the deployment changes.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod



class Car(ABC):
    @abstractmethod
    def drive(self) -> str:
        pass



class Truck(ABC):
    @abstractmethod
    def haul(self) -> str:
        pass



class Bike(ABC):
    @abstractmethod
    def pedal(self) -> str:
        pass



class VehicleFactory(ABC):
    @abstractmethod
    def create_car(self) -> Car:
        pass


    @abstractmethod
    def create_truck(self) -> Truck:
        pass


    @abstractmethod
    def create_bike(self) -> Bike:
        pass



class GasCar(Car):
    def drive(self) -> str:
        return "Driving a gasoline car"



class GasTruck(Truck):
    def haul(self) -> str:
        return "Hauling cargo with a gasoline truck"



class GasBike(Bike):
    def pedal(self) -> str:
        return "Pedaling a gasoline-assisted bike"



class ElectricCar(Car):
    def drive(self) -> str:
        return "Driving an electric car"



class ElectricTruck(Truck):
    def haul(self) -> str:
        return "Hauling cargo with an electric truck"



class ElectricBike(Bike):
    def pedal(self) -> str:
        return "Pedaling an electric bike"



class GasVehicleFactory(VehicleFactory):
    def create_car(self) -> Car:
        return GasCar()


    def create_truck(self) -> Truck:
        return GasTruck()


    def create_bike(self) -> Bike:
        return GasBike()



class ElectricVehicleFactory(VehicleFactory):
    def create_car(self) -> Car:
        return ElectricCar()


    def create_truck(self) -> Truck:
        return ElectricTruck()


    def create_bike(self) -> Bike:
        return ElectricBike()



class FleetManager:
    def __init__(self, factory: VehicleFactory) -> None:
        self.factory = factory


    def describe(self) -> str:
        car = self.factory.create_car()
        truck = self.factory.create_truck()
        bike = self.factory.create_bike()
        return " | ".join([car.drive(), truck.haul(), bike.pedal()])



fleet = FleetManager(ElectricVehicleFactory())
print(fleet.describe())`,
    explanation:
      "The vehicle factory creates a related family of transport objects, so the application can swap between gas and electric systems without altering the client.",
  },
  {
    language: "Angular",
    code: `interface Car {
  drive(): string;
}


interface Truck {
  haul(): string;
}


interface Bike {
  pedal(): string;
}


interface VehicleFactory {
  createCar(): Car;
  createTruck(): Truck;
  createBike(): Bike;
}


class GasCar implements Car {
  drive(): string {
    return "Driving a gasoline car";
  }
}


class GasTruck implements Truck {
  haul(): string {
    return "Hauling cargo with a gasoline truck";
  }
}


class GasBike implements Bike {
  pedal(): string {
    return "Pedaling a gasoline-assisted bike";
  }
}


class ElectricCar implements Car {
  drive(): string {
    return "Driving an electric car";
  }
}


class ElectricTruck implements Truck {
  haul(): string {
    return "Hauling cargo with an electric truck";
  }
}


class ElectricBike implements Bike {
  pedal(): string {
    return "Pedaling an electric bike";
  }
}


class GasVehicleFactory implements VehicleFactory {
  createCar(): Car {
    return new GasCar();
  }


  createTruck(): Truck {
    return new GasTruck();
  }


  createBike(): Bike {
    return new GasBike();
  }
}


class ElectricVehicleFactory implements VehicleFactory {
  createCar(): Car {
    return new ElectricCar();
  }


  createTruck(): Truck {
    return new ElectricTruck();
  }


  createBike(): Bike {
    return new ElectricBike();
  }
}


class FleetManager {
  constructor(private factory: VehicleFactory) {}


  describe(): string {
    const car = this.factory.createCar();
    const truck = this.factory.createTruck();
    const bike = this.factory.createBike();


    return [car.drive(), truck.haul(), bike.pedal()].join(" | ");
  }
}


const fleet = new FleetManager(new ElectricVehicleFactory());
console.log(fleet.describe());`,
    explanation:
      "The Angular example uses an abstract factory to keep the vehicle family aligned, so a gas or electric fleet can be selected without changing the rest of the app.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface Car {
  drive(): string;
}


interface Truck {
  haul(): string;
}


interface Bike {
  pedal(): string;
}


interface VehicleFactory {
  createCar(): Car;
  createTruck(): Truck;
  createBike(): Bike;
}


class GasCar implements Car {
  drive(): string {
    return "Driving a gasoline car";
  }
}


class GasTruck implements Truck {
  haul(): string {
    return "Hauling cargo with a gasoline truck";
  }
}


class GasBike implements Bike {
  pedal(): string {
    return "Pedaling a gasoline-assisted bike";
  }
}


class ElectricCar implements Car {
  drive(): string {
    return "Driving an electric car";
  }
}


class ElectricTruck implements Truck {
  haul(): string {
    return "Hauling cargo with an electric truck";
  }
}


class ElectricBike implements Bike {
  pedal(): string {
    return "Pedaling an electric bike";
  }
}


class GasVehicleFactory implements VehicleFactory {
  createCar(): Car {
    return new GasCar();
  }


  createTruck(): Truck {
    return new GasTruck();
  }


  createBike(): Bike {
    return new GasBike();
  }
}


class ElectricVehicleFactory implements VehicleFactory {
  createCar(): Car {
    return new ElectricCar();
  }


  createTruck(): Truck {
    return new ElectricTruck();
  }


  createBike(): Bike {
    return new ElectricBike();
  }
}


function FleetPreview({ factory }: { factory: VehicleFactory }) {
  const car = factory.createCar();
  const truck = factory.createTruck();
  const bike = factory.createBike();


  return <p>{[car.drive(), truck.haul(), bike.pedal()].join(" | ")}</p>;
}


export function App() {
  const factory = useMemo(() => new ElectricVehicleFactory(), []);


  return (
    <main>
      <h1>Electric Fleet Preview</h1>
      <FleetPreview factory={factory} />
    </main>
  );
}`,
    explanation:
      "The React example uses the abstract factory to construct a consistent vehicle family before rendering it in the interface.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface Car {
  drive(): string;
}


interface Truck {
  haul(): string;
}


interface Bike {
  pedal(): string;
}


interface VehicleFactory {
  createCar(): Car;
  createTruck(): Truck;
  createBike(): Bike;
}


class GasCar implements Car {
  drive(): string {
    return "Driving a gasoline car";
  }
}


class GasTruck implements Truck {
  haul(): string {
    return "Hauling cargo with a gasoline truck";
  }
}


class GasBike implements Bike {
  pedal(): string {
    return "Pedaling a gasoline-assisted bike";
  }
}


class ElectricCar implements Car {
  drive(): string {
    return "Driving an electric car";
  }
}


class ElectricTruck implements Truck {
  haul(): string {
    return "Hauling cargo with an electric truck";
  }
}


class ElectricBike implements Bike {
  pedal(): string {
    return "Pedaling an electric bike";
  }
}


class GasVehicleFactory implements VehicleFactory {
  createCar(): Car {
    return new GasCar();
  }


  createTruck(): Truck {
    return new GasTruck();
  }


  createBike(): Bike {
    return new GasBike();
  }
}


class ElectricVehicleFactory implements VehicleFactory {
  createCar(): Car {
    return new ElectricCar();
  }


  createTruck(): Truck {
    return new ElectricTruck();
  }


  createBike(): Bike {
    return new ElectricBike();
  }
}


function FleetPreview({ factory }: { factory: VehicleFactory }) {
  const car = factory.createCar();
  const truck = factory.createTruck();
  const bike = factory.createBike();


  return (
    <View>
      <Text>{car.drive()}</Text>
      <Text>{truck.haul()}</Text>
      <Text>{bike.pedal()}</Text>
    </View>
  );
}


export function App() {
  const factory = useMemo(() => new ElectricVehicleFactory(), []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Electric Fleet Preview</Text>
        <FleetPreview factory={factory} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version applies the same abstract factory approach to create a matching vehicle family and present it in a mobile-friendly layout.",
  },
  {
    language: "C#",
    code: `using System;


public interface ICar
{
    string Drive();
}


public interface ITruck
{
    string Haul();
}


public interface IBike
{
    string Pedal();
}


public interface IVehicleFactory
{
    ICar CreateCar();
    ITruck CreateTruck();
    IBike CreateBike();
}


public class GasCar : ICar
{
    public string Drive()
    {
        return "Driving a gasoline car";
    }
}


public class GasTruck : ITruck
{
    public string Haul()
    {
        return "Hauling cargo with a gasoline truck";
    }
}


public class GasBike : IBike
{
    public string Pedal()
    {
        return "Pedaling a gasoline-assisted bike";
    }
}


public class ElectricCar : ICar
{
    public string Drive()
    {
        return "Driving an electric car";
    }
}


public class ElectricTruck : ITruck
{
    public string Haul()
    {
        return "Hauling cargo with an electric truck";
    }
}


public class ElectricBike : IBike
{
    public string Pedal()
    {
        return "Pedaling an electric bike";
    }
}


public class GasVehicleFactory : IVehicleFactory
{
    public ICar CreateCar()
    {
        return new GasCar();
    }


    public ITruck CreateTruck()
    {
        return new GasTruck();
    }


    public IBike CreateBike()
    {
        return new GasBike();
    }
}


public class ElectricVehicleFactory : IVehicleFactory
{
    public ICar CreateCar()
    {
        return new ElectricCar();
    }


    public ITruck CreateTruck()
    {
        return new ElectricTruck();
    }


    public IBike CreateBike()
    {
        return new ElectricBike();
    }
}


public class FleetManager
{
    private readonly IVehicleFactory _factory;


    public FleetManager(IVehicleFactory factory)
    {
        _factory = factory;
    }


    public string Describe()
    {
        var car = _factory.CreateCar();
        var truck = _factory.CreateTruck();
        var bike = _factory.CreateBike();


        return string.Join(" | ", car.Drive(), truck.Haul(), bike.Pedal());
    }
}


var fleet = new FleetManager(new ElectricVehicleFactory());
Console.WriteLine(fleet.Describe());`,
    explanation:
      "The C# example uses an abstract factory to keep the vehicle family aligned, so the fleet can switch between gas and electric variants cleanly.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface ICar
{
    string Drive();
}


public interface ITruck
{
    string Haul();
}


public interface IBike
{
    string Pedal();
}


public interface IVehicleFactory
{
    ICar CreateCar();
    ITruck CreateTruck();
    IBike CreateBike();
}


public class GasCar : ICar
{
    public string Drive()
    {
        return "Driving a gasoline car";
    }
}


public class GasTruck : ITruck
{
    public string Haul()
    {
        return "Hauling cargo with a gasoline truck";
    }
}


public class GasBike : IBike
{
    public string Pedal()
    {
        return "Pedaling a gasoline-assisted bike";
    }
}


public class ElectricCar : ICar
{
    public string Drive()
    {
        return "Driving an electric car";
    }
}


public class ElectricTruck : ITruck
{
    public string Haul()
    {
        return "Hauling cargo with an electric truck";
    }
}


public class ElectricBike : IBike
{
    public string Pedal()
    {
        return "Pedaling an electric bike";
    }
}


public class GasVehicleFactory : IVehicleFactory
{
    public ICar CreateCar()
    {
        return new GasCar();
    }


    public ITruck CreateTruck()
    {
        return new GasTruck();
    }


    public IBike CreateBike()
    {
        return new GasBike();
    }
}


public class ElectricVehicleFactory : IVehicleFactory
{
    public ICar CreateCar()
    {
        return new ElectricCar();
    }


    public ITruck CreateTruck()
    {
        return new ElectricTruck();
    }


    public IBike CreateBike()
    {
        return new ElectricBike();
    }
}


public class FleetManager
{
    private readonly IVehicleFactory _factory;


    public FleetManager(IVehicleFactory factory)
    {
        _factory = factory;
    }


    public string Describe()
    {
        var car = _factory.CreateCar();
        var truck = _factory.CreateTruck();
        var bike = _factory.CreateBike();


        return string.Join(" | ", car.Drive(), truck.Haul(), bike.Pedal());
    }
}


var services = new ServiceCollection();
services.AddSingleton<IVehicleFactory, ElectricVehicleFactory>();
services.AddTransient<FleetManager>();

var provider = services.BuildServiceProvider();
var fleet = provider.GetRequiredService<FleetManager>();

Console.WriteLine(fleet.Describe());`,
    explanation:
      "The .NET example uses dependency injection to resolve the abstract factory and build a consistent vehicle family without coupling the client to concrete transport types.",
  },
];
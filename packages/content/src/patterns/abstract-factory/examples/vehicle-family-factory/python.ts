import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Vehicle family factory",
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
};

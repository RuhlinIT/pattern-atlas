import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Vehicle family factory",
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
};

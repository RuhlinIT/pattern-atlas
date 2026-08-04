import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Vehicle family factory",
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
};

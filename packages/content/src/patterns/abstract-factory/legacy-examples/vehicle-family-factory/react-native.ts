import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "Vehicle family factory",
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
};

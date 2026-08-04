import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Vehicle family factory",
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
};

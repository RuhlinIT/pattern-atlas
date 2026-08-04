import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Vehicle family factory",
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
};

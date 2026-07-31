import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Modern office setup",
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
};

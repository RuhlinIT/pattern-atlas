import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const remoteServiceProxyExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface WeatherService {
  getForecast(city: string): string;
}


class RemoteWeatherService implements WeatherService {
  getForecast(city: string): string {
    return \`Fetching weather forecast for \${city} from remote service\`;
  }
}


class WeatherServiceProxy implements WeatherService {
  constructor(private service: RemoteWeatherService) {}


  getForecast(city: string): string {
    return this.service.getForecast(city);
  }
}


const weather = new WeatherServiceProxy(new RemoteWeatherService());
console.log(weather.getForecast("Richmond"));`,
    explanation:
      "The remote service proxy wraps the actual service call so the client can use the same interface without knowing the networking details.",
  },
  {
    language: "Java",
    code: `interface WeatherService {
    String getForecast(String city);
}


class RemoteWeatherService implements WeatherService {
    public String getForecast(String city) {
        return "Fetching weather forecast for " + city + " from remote service";
    }
}


class WeatherServiceProxy implements WeatherService {
    private final RemoteWeatherService service;


    public WeatherServiceProxy(RemoteWeatherService service) {
        this.service = service;
    }


    public String getForecast(String city) {
        return service.getForecast(city);
    }
}


WeatherService weather = new WeatherServiceProxy(new RemoteWeatherService());
System.out.println(weather.getForecast("Richmond"));`,
    explanation:
      "The proxy shields the client from the remote call implementation, keeping the service usable through the same interface.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class WeatherService(ABC):
    @abstractmethod
    def get_forecast(self, city: str) -> str:
        pass


class RemoteWeatherService(WeatherService):
    def get_forecast(self, city: str) -> str:
        return f"Fetching weather forecast for {city} from remote service"


class WeatherServiceProxy(WeatherService):
    def __init__(self, service: RemoteWeatherService) -> None:
        self.service = service


    def get_forecast(self, city: str) -> str:
        return self.service.get_forecast(city)


weather = WeatherServiceProxy(RemoteWeatherService())
print(weather.get_forecast("Richmond"))`,
    explanation:
      "The remote service proxy lets the app call a weather service as if it were local while hiding the remote access details.",
  },
  {
    language: "Angular",
    code: `interface WeatherService {
  getForecast(city: string): string;
}


class RemoteWeatherService implements WeatherService {
  getForecast(city: string): string {
    return \`Fetching weather forecast for \${city} from remote service\`;
  }
}


class WeatherServiceProxy implements WeatherService {
  constructor(private service: RemoteWeatherService) {}


  getForecast(city: string): string {
    return this.service.getForecast(city);
  }
}


const weather = new WeatherServiceProxy(new RemoteWeatherService());
console.log(weather.getForecast("Richmond"));`,
    explanation:
      "The Angular example uses a proxy around the remote weather service so the client can keep the same service contract.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface WeatherService {
  getForecast(city: string): string;
}


class RemoteWeatherService implements WeatherService {
  getForecast(city: string): string {
    return \`Fetching weather forecast for \${city} from remote service\`;
  }
}


class WeatherServiceProxy implements WeatherService {
  constructor(private service: RemoteWeatherService) {}


  getForecast(city: string): string {
    return this.service.getForecast(city);
  }
}


function WeatherPreview({ service }: { service: WeatherService }) {
  return <p>{service.getForecast("Richmond")}</p>;
}


export function App() {
  const service = useMemo(() => new WeatherServiceProxy(new RemoteWeatherService()), []);


  return (
    <main>
      <h1>Remote Service Proxy</h1>
      <WeatherPreview service={service} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the remote call behind a proxy so the UI can interact with the weather service through a local abstraction.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface WeatherService {
  getForecast(city: string): string;
}


class RemoteWeatherService implements WeatherService {
  getForecast(city: string): string {
    return \`Fetching weather forecast for \${city} from remote service\`;
  }
}


class WeatherServiceProxy implements WeatherService {
  constructor(private service: RemoteWeatherService) {}


  getForecast(city: string): string {
    return this.service.getForecast(city);
  }
}


function WeatherPreview({ service }: { service: WeatherService }) {
  return (
    <View>
      <Text>{service.getForecast("Richmond")}</Text>
    </View>
  );
}


export function App() {
  const service = useMemo(() => new WeatherServiceProxy(new RemoteWeatherService()), []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Remote Service Proxy</Text>
        <WeatherPreview service={service} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version keeps the remote weather service access behind a proxy so the mobile UI stays simple.",
  },
  {
    language: "C#",
    code: `using System;


public interface IWeatherService
{
    string GetForecast(string city);
}


public class RemoteWeatherService : IWeatherService
{
    public string GetForecast(string city)
    {
        return $"Fetching weather forecast for {city} from remote service";
    }
}


public class WeatherServiceProxy : IWeatherService
{
    private readonly RemoteWeatherService _service;


    public WeatherServiceProxy(RemoteWeatherService service)
    {
        _service = service;
    }


    public string GetForecast(string city)
    {
        return _service.GetForecast(city);
    }
}


IWeatherService weather = new WeatherServiceProxy(new RemoteWeatherService());
Console.WriteLine(weather.GetForecast("Richmond"));`,
    explanation:
      "The C# remote service proxy hides the underlying service access so the client can use the same interface locally.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface IWeatherService
{
    string GetForecast(string city);
}


public class RemoteWeatherService : IWeatherService
{
    public string GetForecast(string city)
    {
        return $"Fetching weather forecast for {city} from remote service";
    }
}


public class WeatherServiceProxy : IWeatherService
{
    private readonly RemoteWeatherService _service;


    public WeatherServiceProxy(RemoteWeatherService service)
    {
        _service = service;
    }


    public string GetForecast(string city)
    {
        return _service.GetForecast(city);
    }
}


var services = new ServiceCollection();
services.AddSingleton<IWeatherService>(new WeatherServiceProxy(new RemoteWeatherService()));


var provider = services.BuildServiceProvider();
var weather = provider.GetRequiredService<IWeatherService>();

Console.WriteLine(weather.GetForecast("Richmond"));`,
    explanation:
      "The .NET example uses a proxy in dependency injection so the app can resolve a weather service without knowing the remote implementation.",
  },
];

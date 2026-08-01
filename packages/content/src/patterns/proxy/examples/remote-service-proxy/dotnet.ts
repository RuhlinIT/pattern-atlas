import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: "Remote service proxy",
  code: "using System;\nusing Microsoft.Extensions.DependencyInjection;\n\n\npublic interface IWeatherService\n{\n    string GetForecast(string city);\n}\n\n\npublic class RemoteWeatherService : IWeatherService\n{\n    public string GetForecast(string city)\n    {\n        return $\"Fetching weather forecast for {city} from remote service\";\n    }\n}\n\n\npublic class WeatherServiceProxy : IWeatherService\n{\n    private readonly RemoteWeatherService _service;\n\n\n    public WeatherServiceProxy(RemoteWeatherService service)\n    {\n        _service = service;\n    }\n\n\n    public string GetForecast(string city)\n    {\n        return _service.GetForecast(city);\n    }\n}\n\n\nvar services = new ServiceCollection();\nservices.AddSingleton<IWeatherService>(new WeatherServiceProxy(new RemoteWeatherService()));\n\n\nvar provider = services.BuildServiceProvider();\nvar weather = provider.GetRequiredService<IWeatherService>();\n\nConsole.WriteLine(weather.GetForecast(\"Richmond\"));",
  explanation: "The .NET example uses a proxy in dependency injection so the app can resolve a weather service without knowing the remote implementation.",
};

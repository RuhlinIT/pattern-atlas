import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Remote service proxy",
  code: "using System;\n\n\npublic interface IWeatherService\n{\n    string GetForecast(string city);\n}\n\n\npublic class RemoteWeatherService : IWeatherService\n{\n    public string GetForecast(string city)\n    {\n        return $\"Fetching weather forecast for {city} from remote service\";\n    }\n}\n\n\npublic class WeatherServiceProxy : IWeatherService\n{\n    private readonly RemoteWeatherService _service;\n\n\n    public WeatherServiceProxy(RemoteWeatherService service)\n    {\n        _service = service;\n    }\n\n\n    public string GetForecast(string city)\n    {\n        return _service.GetForecast(city);\n    }\n}\n\n\nIWeatherService weather = new WeatherServiceProxy(new RemoteWeatherService());\nConsole.WriteLine(weather.GetForecast(\"Richmond\"));",
  explanation: "The C# remote service proxy hides the underlying service access so the client can use the same interface locally.",
};

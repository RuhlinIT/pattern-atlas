import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Remote service proxy",
  code: "from abc import ABC, abstractmethod\n\n\nclass WeatherService(ABC):\n    @abstractmethod\n    def get_forecast(self, city: str) -> str:\n        pass\n\n\nclass RemoteWeatherService(WeatherService):\n    def get_forecast(self, city: str) -> str:\n        return f\"Fetching weather forecast for {city} from remote service\"\n\n\nclass WeatherServiceProxy(WeatherService):\n    def __init__(self, service: RemoteWeatherService) -> None:\n        self.service = service\n\n\n    def get_forecast(self, city: str) -> str:\n        return self.service.get_forecast(city)\n\n\nweather = WeatherServiceProxy(RemoteWeatherService())\nprint(weather.get_forecast(\"Richmond\"))",
  explanation: "The remote service proxy lets the app call a weather service as if it were local while hiding the remote access details.",
};

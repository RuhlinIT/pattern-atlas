import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Remote service proxy",
  code: "interface WeatherService {\n  getForecast(city: string): string;\n}\n\n\nclass RemoteWeatherService implements WeatherService {\n  getForecast(city: string): string {\n    return `Fetching weather forecast for ${city} from remote service`;\n  }\n}\n\n\nclass WeatherServiceProxy implements WeatherService {\n  constructor(private service: RemoteWeatherService) {}\n\n\n  getForecast(city: string): string {\n    return this.service.getForecast(city);\n  }\n}\n\n\nconst weather = new WeatherServiceProxy(new RemoteWeatherService());\nconsole.log(weather.getForecast(\"Richmond\"));",
  explanation: "The Angular example uses a proxy around the remote weather service so the client can keep the same service contract.",
};

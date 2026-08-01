import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Remote service proxy",
  code: "interface WeatherService {\n    String getForecast(String city);\n}\n\n\nclass RemoteWeatherService implements WeatherService {\n    public String getForecast(String city) {\n        return \"Fetching weather forecast for \" + city + \" from remote service\";\n    }\n}\n\n\nclass WeatherServiceProxy implements WeatherService {\n    private final RemoteWeatherService service;\n\n\n    public WeatherServiceProxy(RemoteWeatherService service) {\n        this.service = service;\n    }\n\n\n    public String getForecast(String city) {\n        return service.getForecast(city);\n    }\n}\n\n\nWeatherService weather = new WeatherServiceProxy(new RemoteWeatherService());\nSystem.out.println(weather.getForecast(\"Richmond\"));",
  explanation: "The proxy shields the client from the remote call implementation, keeping the service usable through the same interface.",
};

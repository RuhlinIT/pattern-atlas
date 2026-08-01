import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Remote service proxy",
  code: "import React, { useMemo } from \"react\";\n\n\ninterface WeatherService {\n  getForecast(city: string): string;\n}\n\n\nclass RemoteWeatherService implements WeatherService {\n  getForecast(city: string): string {\n    return `Fetching weather forecast for ${city} from remote service`;\n  }\n}\n\n\nclass WeatherServiceProxy implements WeatherService {\n  constructor(private service: RemoteWeatherService) {}\n\n\n  getForecast(city: string): string {\n    return this.service.getForecast(city);\n  }\n}\n\n\nfunction WeatherPreview({ service }: { service: WeatherService }) {\n  return <p>{service.getForecast(\"Richmond\")}</p>;\n}\n\n\nexport function App() {\n  const service = useMemo(() => new WeatherServiceProxy(new RemoteWeatherService()), []);\n\n\n  return (\n    <main>\n      <h1>Remote Service Proxy</h1>\n      <WeatherPreview service={service} />\n    </main>\n  );\n}",
  explanation: "The React example keeps the remote call behind a proxy so the UI can interact with the weather service through a local abstraction.",
};

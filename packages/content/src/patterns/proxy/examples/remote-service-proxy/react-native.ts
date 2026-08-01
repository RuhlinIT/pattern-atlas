import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "Remote service proxy",
  code: "import React, { useMemo } from \"react\";\nimport { SafeAreaView, Text, View } from \"react-native\";\n\n\ninterface WeatherService {\n  getForecast(city: string): string;\n}\n\n\nclass RemoteWeatherService implements WeatherService {\n  getForecast(city: string): string {\n    return `Fetching weather forecast for ${city} from remote service`;\n  }\n}\n\n\nclass WeatherServiceProxy implements WeatherService {\n  constructor(private service: RemoteWeatherService) {}\n\n\n  getForecast(city: string): string {\n    return this.service.getForecast(city);\n  }\n}\n\n\nfunction WeatherPreview({ service }: { service: WeatherService }) {\n  return (\n    <View>\n      <Text>{service.getForecast(\"Richmond\")}</Text>\n    </View>\n  );\n}\n\n\nexport function App() {\n  const service = useMemo(() => new WeatherServiceProxy(new RemoteWeatherService()), []);\n\n\n  return (\n    <SafeAreaView style={{ flex: 1, justifyContent: \"center\", padding: 24 }}>\n      <View style={{ gap: 16 }}>\n        <Text style={{ fontSize: 24, fontWeight: \"600\" }}>Remote Service Proxy</Text>\n        <WeatherPreview service={service} />\n      </View>\n    </SafeAreaView>\n  );\n}",
  explanation: "The React Native version keeps the remote weather service access behind a proxy so the mobile UI stays simple.",
};

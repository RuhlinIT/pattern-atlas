import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "Application config singleton",
  code: "import React, { useMemo } from \"react\";\nimport { SafeAreaView, Text, View } from \"react-native\";\n\n\nclass AppConfig {\n  private static instance: AppConfig;\n\n\n  private constructor(\n    public readonly appName: string,\n    public readonly environment: string,\n  ) {}\n\n\n  static getInstance(): AppConfig {\n    if (!AppConfig.instance) {\n      AppConfig.instance = new AppConfig(\"Atlas App\", \"production\");\n    }\n\n\n    return AppConfig.instance;\n  }\n}\n\n\nfunction ConfigPreview() {\n  const config = useMemo(() => AppConfig.getInstance(), []);\n\n\n  return (\n    <View>\n      <Text>{config.appName}</Text>\n      <Text>{config.environment}</Text>\n    </View>\n  );\n}\n\n\nexport function App() {\n  return (\n    <SafeAreaView style={{ flex: 1, justifyContent: \"center\", padding: 24 }}>\n      <View style={{ gap: 16 }}>\n        <Text style={{ fontSize: 24, fontWeight: \"600\" }}>Application Config</Text>\n        <ConfigPreview />\n      </View>\n    </SafeAreaView>\n  );\n}",
  explanation: "The React Native example uses a singleton configuration object to keep shared settings available throughout the app.",
};

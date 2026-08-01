import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "Logger singleton",
  code: "import React, { useMemo } from \"react\";\nimport { SafeAreaView, Text, TouchableOpacity, View } from \"react-native\";\n\n\nclass Logger {\n  private static instance: Logger;\n\n\n  private constructor() {}\n\n\n  static getInstance(): Logger {\n    if (!Logger.instance) {\n      Logger.instance = new Logger();\n    }\n\n\n    return Logger.instance;\n  }\n\n\n  log(message: string): void {\n    console.log(`LOG: ${message}`);\n  }\n}\n\n\nfunction LoggerPreview() {\n  const logger = useMemo(() => Logger.getInstance(), []);\n\n\n  return (\n    <TouchableOpacity onPress={() => logger.log(\"Mobile button tapped\")}>\n      <Text>Log Event</Text>\n    </TouchableOpacity>\n  );\n}\n\n\nexport function App() {\n  return (\n    <SafeAreaView style={{ flex: 1, justifyContent: \"center\", padding: 24 }}>\n      <View style={{ gap: 16 }}>\n        <Text style={{ fontSize: 24, fontWeight: \"600\" }}>Logger</Text>\n        <LoggerPreview />\n      </View>\n    </SafeAreaView>\n  );\n}",
  explanation: "The React Native example routes events through one shared logger instance so the mobile app keeps logging behavior consistent.",
};

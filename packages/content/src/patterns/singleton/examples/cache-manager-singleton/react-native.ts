import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "Cache manager singleton",
  code: "import React, { useMemo } from \"react\";\nimport { SafeAreaView, Text, View } from \"react-native\";\n\n\nclass CacheManager {\n  private static instance: CacheManager;\n  private store = new Map<string, string>();\n\n\n  private constructor() {}\n\n\n  static getInstance(): CacheManager {\n    if (!CacheManager.instance) {\n      CacheManager.instance = new CacheManager();\n    }\n\n\n    return CacheManager.instance;\n  }\n\n\n  set(key: string, value: string): void {\n    this.store.set(key, value);\n  }\n\n\n  get(key: string): string | undefined {\n    return this.store.get(key);\n  }\n}\n\n\nfunction CachePreview() {\n  const cache = useMemo(() => CacheManager.getInstance(), []);\n\n\n  cache.set(\"theme\", \"dark\");\n\n\n  return (\n    <View>\n      <Text>{cache.get(\"theme\")}</Text>\n    </View>\n  );\n}\n\n\nexport function App() {\n  return (\n    <SafeAreaView style={{ flex: 1, justifyContent: \"center\", padding: 24 }}>\n      <View style={{ gap: 16 }}>\n        <Text style={{ fontSize: 24, fontWeight: \"600\" }}>Cache Manager</Text>\n        <CachePreview />\n      </View>\n    </SafeAreaView>\n  );\n}",
  explanation: "The React Native example keeps one shared cache instance so mobile screens can reuse the same stored values.",
};

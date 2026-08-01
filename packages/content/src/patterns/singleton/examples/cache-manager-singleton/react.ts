import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Cache manager singleton",
  code: "import React, { useMemo } from \"react\";\n\n\nclass CacheManager {\n  private static instance: CacheManager;\n  private store = new Map<string, string>();\n\n\n  private constructor() {}\n\n\n  static getInstance(): CacheManager {\n    if (!CacheManager.instance) {\n      CacheManager.instance = new CacheManager();\n    }\n\n\n    return CacheManager.instance;\n  }\n\n\n  set(key: string, value: string): void {\n    this.store.set(key, value);\n  }\n\n\n  get(key: string): string | undefined {\n    return this.store.get(key);\n  }\n}\n\n\nfunction CachePreview() {\n  const cache = useMemo(() => CacheManager.getInstance(), []);\n\n\n  cache.set(\"theme\", \"dark\");\n\n\n  return <p>{cache.get(\"theme\")}</p>;\n}\n\n\nexport function App() {\n  return (\n    <main>\n      <h1>Cache Manager</h1>\n      <CachePreview />\n    </main>\n  );\n}",
  explanation: "The React example uses one shared cache instance so components can read and write the same cached values.",
};

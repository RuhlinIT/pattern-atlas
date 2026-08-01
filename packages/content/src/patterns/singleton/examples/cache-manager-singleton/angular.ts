import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Cache manager singleton",
  code: "class CacheManager {\n  private static instance: CacheManager;\n  private store = new Map<string, string>();\n\n\n  private constructor() {}\n\n\n  static getInstance(): CacheManager {\n    if (!CacheManager.instance) {\n      CacheManager.instance = new CacheManager();\n    }\n\n\n    return CacheManager.instance;\n  }\n\n\n  set(key: string, value: string): void {\n    this.store.set(key, value);\n  }\n\n\n  get(key: string): string | undefined {\n    return this.store.get(key);\n  }\n}\n\n\nconst cacheA = CacheManager.getInstance();\nconst cacheB = CacheManager.getInstance();\n\n\ncacheA.set(\"theme\", \"dark\");\nconsole.log(cacheB.get(\"theme\"));",
  explanation: "The Angular example uses a singleton cache so the same shared data store is available throughout the app.",
};

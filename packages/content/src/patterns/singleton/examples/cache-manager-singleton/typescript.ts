import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Cache manager singleton",
  code: "class CacheManager {\n  private static instance: CacheManager;\n  private store = new Map<string, string>();\n\n\n  private constructor() {}\n\n\n  static getInstance(): CacheManager {\n    if (!CacheManager.instance) {\n      CacheManager.instance = new CacheManager();\n    }\n\n\n    return CacheManager.instance;\n  }\n\n\n  set(key: string, value: string): void {\n    this.store.set(key, value);\n  }\n\n\n  get(key: string): string | undefined {\n    return this.store.get(key);\n  }\n}\n\n\nconst cacheA = CacheManager.getInstance();\nconst cacheB = CacheManager.getInstance();\n\n\ncacheA.set(\"theme\", \"dark\");\nconsole.log(cacheB.get(\"theme\"));",
  explanation: "The cache singleton keeps one shared in-memory store so all parts of the app reuse the same cached values.",
};

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Cache manager singleton",
  code: "class CacheManager:\n    _instance = None\n\n\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n            cls._instance.store = {}\n        return cls._instance\n\n\n    def set(self, key: str, value: str) -> None:\n        self.store[key] = value\n\n\n    def get(self, key: str):\n        return self.store.get(key)\n\n\ncache_a = CacheManager()\ncache_b = CacheManager()\n\n\ncache_a.set(\"theme\", \"dark\")\nprint(cache_b.get(\"theme\"))",
  explanation: "The cache singleton makes it easy to share one in-memory store across the application without passing it everywhere.",
};

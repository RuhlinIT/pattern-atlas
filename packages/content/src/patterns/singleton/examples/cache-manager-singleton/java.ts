import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Cache manager singleton",
  code: "import java.util.HashMap;\nimport java.util.Map;\n\n\nclass CacheManager {\n    private static CacheManager instance;\n    private final Map<String, String> store = new HashMap<>();\n\n\n    private CacheManager() {}\n\n\n    public static CacheManager getInstance() {\n        if (instance == null) {\n            instance = new CacheManager();\n        }\n\n\n        return instance;\n    }\n\n\n    public void set(String key, String value) {\n        store.put(key, value);\n    }\n\n\n    public String get(String key) {\n        return store.get(key);\n    }\n}\n\n\nCacheManager cacheA = CacheManager.getInstance();\nCacheManager cacheB = CacheManager.getInstance();\n\n\ncacheA.set(\"theme\", \"dark\");\nSystem.out.println(cacheB.get(\"theme\"));",
  explanation: "The cache singleton keeps one shared store so different callers can reuse the same cached data.",
};

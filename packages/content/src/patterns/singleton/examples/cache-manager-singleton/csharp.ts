import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Cache manager singleton",
  code: "using System;\nusing System.Collections.Generic;\n\n\npublic class CacheManager\n{\n    private static CacheManager _instance;\n    private readonly Dictionary<string, string> _store = new Dictionary<string, string>();\n\n\n    private CacheManager() {}\n\n\n    public static CacheManager GetInstance()\n    {\n        if (_instance == null)\n        {\n            _instance = new CacheManager();\n        }\n\n\n        return _instance;\n    }\n\n\n    public void Set(string key, string value)\n    {\n        _store[key] = value;\n    }\n\n\n    public string Get(string key)\n    {\n        return _store.ContainsKey(key) ? _store[key] : null;\n    }\n}\n\n\nvar cacheA = CacheManager.GetInstance();\nvar cacheB = CacheManager.GetInstance();\n\n\ncacheA.Set(\"theme\", \"dark\");\nConsole.WriteLine(cacheB.Get(\"theme\"));",
  explanation: "The cache singleton ensures one shared in-memory dictionary is reused wherever the application accesses cached data.",
};

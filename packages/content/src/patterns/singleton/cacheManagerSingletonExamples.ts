import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const cacheManagerSingletonExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class CacheManager {
  private static instance: CacheManager;
  private store = new Map<string, string>();


  private constructor() {}


  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }


    return CacheManager.instance;
  }


  set(key: string, value: string): void {
    this.store.set(key, value);
  }


  get(key: string): string | undefined {
    return this.store.get(key);
  }
}


const cacheA = CacheManager.getInstance();
const cacheB = CacheManager.getInstance();


cacheA.set("theme", "dark");
console.log(cacheB.get("theme"));`,
    explanation:
      "The cache singleton keeps one shared in-memory store so all parts of the app reuse the same cached values.",
  },
  {
    language: "Java",
    code: `import java.util.HashMap;
import java.util.Map;


class CacheManager {
    private static CacheManager instance;
    private final Map<String, String> store = new HashMap<>();


    private CacheManager() {}


    public static CacheManager getInstance() {
        if (instance == null) {
            instance = new CacheManager();
        }


        return instance;
    }


    public void set(String key, String value) {
        store.put(key, value);
    }


    public String get(String key) {
        return store.get(key);
    }
}


CacheManager cacheA = CacheManager.getInstance();
CacheManager cacheB = CacheManager.getInstance();


cacheA.set("theme", "dark");
System.out.println(cacheB.get("theme"));`,
    explanation:
      "The cache singleton keeps one shared store so different callers can reuse the same cached data.",
  },
  {
    language: "Python",
    code: `class CacheManager:
    _instance = None


    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.store = {}
        return cls._instance


    def set(self, key: str, value: str) -> None:
        self.store[key] = value


    def get(self, key: str):
        return self.store.get(key)


cache_a = CacheManager()
cache_b = CacheManager()


cache_a.set("theme", "dark")
print(cache_b.get("theme"))`,
    explanation:
      "The cache singleton makes it easy to share one in-memory store across the application without passing it everywhere.",
  },
  {
    language: "Angular",
    code: `class CacheManager {
  private static instance: CacheManager;
  private store = new Map<string, string>();


  private constructor() {}


  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }


    return CacheManager.instance;
  }


  set(key: string, value: string): void {
    this.store.set(key, value);
  }


  get(key: string): string | undefined {
    return this.store.get(key);
  }
}


const cacheA = CacheManager.getInstance();
const cacheB = CacheManager.getInstance();


cacheA.set("theme", "dark");
console.log(cacheB.get("theme"));`,
    explanation:
      "The Angular example uses a singleton cache so the same shared data store is available throughout the app.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


class CacheManager {
  private static instance: CacheManager;
  private store = new Map<string, string>();


  private constructor() {}


  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }


    return CacheManager.instance;
  }


  set(key: string, value: string): void {
    this.store.set(key, value);
  }


  get(key: string): string | undefined {
    return this.store.get(key);
  }
}


function CachePreview() {
  const cache = useMemo(() => CacheManager.getInstance(), []);


  cache.set("theme", "dark");


  return <p>{cache.get("theme")}</p>;
}


export function App() {
  return (
    <main>
      <h1>Cache Manager</h1>
      <CachePreview />
    </main>
  );
}`,
    explanation:
      "The React example uses one shared cache instance so components can read and write the same cached values.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


class CacheManager {
  private static instance: CacheManager;
  private store = new Map<string, string>();


  private constructor() {}


  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }


    return CacheManager.instance;
  }


  set(key: string, value: string): void {
    this.store.set(key, value);
  }


  get(key: string): string | undefined {
    return this.store.get(key);
  }
}


function CachePreview() {
  const cache = useMemo(() => CacheManager.getInstance(), []);


  cache.set("theme", "dark");


  return (
    <View>
      <Text>{cache.get("theme")}</Text>
    </View>
  );
}


export function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Cache Manager</Text>
        <CachePreview />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example keeps one shared cache instance so mobile screens can reuse the same stored values.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public class CacheManager
{
    private static CacheManager _instance;
    private readonly Dictionary<string, string> _store = new Dictionary<string, string>();


    private CacheManager() {}


    public static CacheManager GetInstance()
    {
        if (_instance == null)
        {
            _instance = new CacheManager();
        }


        return _instance;
    }


    public void Set(string key, string value)
    {
        _store[key] = value;
    }


    public string Get(string key)
    {
        return _store.ContainsKey(key) ? _store[key] : null;
    }
}


var cacheA = CacheManager.GetInstance();
var cacheB = CacheManager.GetInstance();


cacheA.Set("theme", "dark");
Console.WriteLine(cacheB.Get("theme"));`,
    explanation:
      "The cache singleton ensures one shared in-memory dictionary is reused wherever the application accesses cached data.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public class CacheManager
{
    private static CacheManager _instance;
    private readonly Dictionary<string, string> _store = new Dictionary<string, string>();


    private CacheManager() {}


    public static CacheManager GetInstance()
    {
        if (_instance == null)
        {
            _instance = new CacheManager();
        }


        return _instance;
    }


    public void Set(string key, string value)
    {
        _store[key] = value;
    }


    public string Get(string key)
    {
        return _store.ContainsKey(key) ? _store[key] : null;
    }
}


var services = new ServiceCollection();
services.AddSingleton(CacheManager.GetInstance());


var provider = services.BuildServiceProvider();
var cacheA = provider.GetRequiredService<CacheManager>();
var cacheB = provider.GetRequiredService<CacheManager>();


cacheA.Set("theme", "dark");
Console.WriteLine(cacheB.Get("theme"));`,
    explanation:
      "The .NET example registers one shared cache manager through dependency injection so every consumer gets the same instance.",
  },
];

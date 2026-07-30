import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const httpClientExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface HttpClient {
  get(url: string): string;
}

class BaseHttpClient implements HttpClient {
  get(url: string): string {
    return \`response from \${url}\`;
  }
}

abstract class HttpClientDecorator implements HttpClient {
  constructor(protected wrappee: HttpClient) {}

  get(url: string): string {
    return this.wrappee.get(url);
  }
}

class MetricsHttpClient extends HttpClientDecorator {
  get(url: string): string {
    console.log(\`Measuring request to \${url}\`);
    return super.get(url);
  }
}

class CachingHttpClient extends HttpClientDecorator {
  private cache = new Map<string, string>();

  get(url: string): string {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    const response = super.get(url);
    this.cache.set(url, response);
    return response;
  }
}

const client = new CachingHttpClient(
  new MetricsHttpClient(new BaseHttpClient()),
);

console.log(client.get("/users"));
console.log(client.get("/users"));`,
    explanation:
      "Caching and metrics are independent concerns layered around the same client contract, so they can be combined or removed easily.",
  },
  {
    language: "Java",
    code: `import java.util.HashMap;
import java.util.Map;

interface HttpClient {
    String get(String url);
}

class BaseHttpClient implements HttpClient {
    public String get(String url) {
        return "response from " + url;
    }
}

abstract class HttpClientDecorator implements HttpClient {
    protected final HttpClient wrappee;

    public HttpClientDecorator(HttpClient wrappee) {
        this.wrappee = wrappee;
    }

    public String get(String url) {
        return wrappee.get(url);
    }
}

class MetricsHttpClient extends HttpClientDecorator {
    public MetricsHttpClient(HttpClient wrappee) {
        super(wrappee);
    }

    public String get(String url) {
        System.out.println("Measuring request to " + url);
        return super.get(url);
    }
}

class CachingHttpClient extends HttpClientDecorator {
    private final Map<String, String> cache = new HashMap<>();

    public CachingHttpClient(HttpClient wrappee) {
        super(wrappee);
    }

    public String get(String url) {
        if (cache.containsKey(url)) {
            return cache.get(url);
        }

        String response = super.get(url);
        cache.put(url, response);
        return response;
    }
}

HttpClient client =
    new CachingHttpClient(new MetricsHttpClient(new BaseHttpClient()));

System.out.println(client.get("/users"));
System.out.println(client.get("/users"));`,
    explanation:
      "The client interface stays constant while metrics and caching act as composable wrappers around the base implementation.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class HttpClient(ABC):
    @abstractmethod
    def get(self, url: str) -> str:
        pass

class BaseHttpClient(HttpClient):
    def get(self, url: str) -> str:
        return f"response from {url}"

class HttpClientDecorator(HttpClient):
    def __init__(self, wrappee: HttpClient) -> None:
        self.wrappee = wrappee

    def get(self, url: str) -> str:
        return self.wrappee.get(url)

class MetricsHttpClient(HttpClientDecorator):
    def get(self, url: str) -> str:
        print(f"Measuring request to {url}")
        return super().get(url)

class CachingHttpClient(HttpClientDecorator):
    def __init__(self, wrappee: HttpClient) -> None:
        super().__init__(wrappee)
        self.cache: dict[str, str] = {}

    def get(self, url: str) -> str:
        if url in self.cache:
            return self.cache[url]

        response = super().get(url)
        self.cache[url] = response
        return response

client = CachingHttpClient(MetricsHttpClient(BaseHttpClient()))
print(client.get("/users"))
print(client.get("/users"))`,
    explanation:
      "The decorators keep the same get contract, which makes it easy to add caching and metrics without changing consumers.",
  },
  {
    language: "Angular",
    code: `interface HttpClient {
  get(url: string): string;
}


class BaseHttpClient implements HttpClient {
  get(url: string): string {
    return \`response from \${url}\`;
  }
}


abstract class HttpClientDecorator implements HttpClient {
  constructor(protected wrappee: HttpClient) {}


  get(url: string): string {
    return this.wrappee.get(url);
  }
}


class MetricsHttpClient extends HttpClientDecorator {
  get(url: string): string {
    console.log(\`Measuring request to \${url}\`);
    return super.get(url);
  }
}


class CachingHttpClient extends HttpClientDecorator {
  private cache = new Map<string, string>();


  get(url: string): string {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }


    const response = super.get(url);
    this.cache.set(url, response);
    return response;
  }
}


const client = new CachingHttpClient(
  new MetricsHttpClient(new BaseHttpClient()),
);


console.log(client.get('/users'));
console.log(client.get('/users'));`,
    explanation:
      "Caching and metrics remain independent wrapper layers around the same HttpClient contract, so Angular code can compose or remove them without changing callers.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface HttpClient {
  get(url: string): string;
}

class BaseHttpClient implements HttpClient {
  get(url: string): string {
    return \`response from \${url}\`;
  }
}

abstract class HttpClientDecorator implements HttpClient {
  constructor(protected wrappee: HttpClient) {}

  get(url: string): string {
    return this.wrappee.get(url);
  }
}

class MetricsHttpClient extends HttpClientDecorator {
  get(url: string): string {
    console.log(\`Measuring request to \${url}\`);
    return super.get(url);
  }
}

class CachingHttpClient extends HttpClientDecorator {
  private cache = new Map<string, string>();

  get(url: string): string {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    const response = super.get(url);
    this.cache.set(url, response);
    return response;
  }
}

function ClientDemo({ client }: { client: HttpClient }) {
  const first = client.get("/users");
  const second = client.get("/users");

  return (
    <section>
      <p>First: {first}</p>
      <p>Second: {second}</p>
    </section>
  );
}

export function App() {
  const client = useMemo(
    () => new CachingHttpClient(new MetricsHttpClient(new BaseHttpClient())),
    []
  );

  return (
    <main>
      <h1>HTTP Client</h1>
      <ClientDemo client={client} />
    </main>
  );
}`,
    explanation:
      "The React example layers caching and metrics around the same client interface, so the UI can call get without knowing which cross-cutting behaviors are attached.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";

interface HttpClient {
  get(url: string): string;
}

class BaseHttpClient implements HttpClient {
  get(url: string): string {
    return \`response from \${url}\`;
  }
}

abstract class HttpClientDecorator implements HttpClient {
  constructor(protected wrappee: HttpClient) {}

  get(url: string): string {
    return this.wrappee.get(url);
  }
}

class MetricsHttpClient extends HttpClientDecorator {
  get(url: string): string {
    console.log(\`Measuring request to \${url}\`);
    return super.get(url);
  }
}

class CachingHttpClient extends HttpClientDecorator {
  private cache = new Map<string, string>();

  get(url: string): string {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    const response = super.get(url);
    this.cache.set(url, response);
    return response;
  }
}

function ClientDemo({ client }: { client: HttpClient }) {
  const first = client.get("/users");
  const second = client.get("/users");

  return (
    <View style={{ gap: 8 }}>
      <Text>First: {first}</Text>
      <Text>Second: {second}</Text>
    </View>
  );
}

export function App() {
  const client = useMemo(
    () => new CachingHttpClient(new MetricsHttpClient(new BaseHttpClient())),
    []
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>HTTP Client</Text>
        <ClientDemo client={client} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same stacked decorators, but demonstrates the client behavior in a mobile-friendly layout.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;

public interface IHttpClient
{
    string Get(string url);
}

public class BaseHttpClient : IHttpClient
{
    public string Get(string url)
    {
        return $"response from {url}";
    }
}

public abstract class HttpClientDecorator : IHttpClient
{
    protected readonly IHttpClient Wrappee;

    protected HttpClientDecorator(IHttpClient wrappee)
    {
        Wrappee = wrappee;
    }

    public virtual string Get(string url)
    {
        return Wrappee.Get(url);
    }
}

public class MetricsHttpClient : HttpClientDecorator
{
    public MetricsHttpClient(IHttpClient wrappee) : base(wrappee) { }

    public override string Get(string url)
    {
        Console.WriteLine($"Measuring request to {url}");
        return base.Get(url);
    }
}

public class CachingHttpClient : HttpClientDecorator
{
    private readonly Dictionary<string, string> _cache = new();

    public CachingHttpClient(IHttpClient wrappee) : base(wrappee) { }

    public override string Get(string url)
    {
        if (_cache.TryGetValue(url, out var cached))
        {
            return cached;
        }

        var response = base.Get(url);
        _cache[url] = response;
        return response;
    }
}

IHttpClient client = new CachingHttpClient(
    new MetricsHttpClient(new BaseHttpClient())
);

Console.WriteLine(client.Get("/users"));
Console.WriteLine(client.Get("/users"));`,
    explanation:
      "The C# example preserves the same IHttpClient contract while decorators add caching and metrics behavior without changing consumers.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;

public interface IHttpClient
{
    string Get(string url);
}

public class BaseHttpClient : IHttpClient
{
    public string Get(string url)
    {
        return $"response from {url}";
    }
}

public abstract class HttpClientDecorator : IHttpClient
{
    protected readonly IHttpClient Wrappee;

    protected HttpClientDecorator(IHttpClient wrappee)
    {
        Wrappee = wrappee;
    }

    public virtual string Get(string url)
    {
        return Wrappee.Get(url);
    }
}

public class MetricsHttpClient : HttpClientDecorator
{
    public MetricsHttpClient(IHttpClient wrappee) : base(wrappee) { }

    public override string Get(string url)
    {
        Console.WriteLine($"Measuring request to {url}");
        return base.Get(url);
    }
}

public class CachingHttpClient : HttpClientDecorator
{
    private readonly Dictionary<string, string> _cache = new();

    public CachingHttpClient(IHttpClient wrappee) : base(wrappee) { }

    public override string Get(string url)
    {
        if (_cache.TryGetValue(url, out var cached))
        {
            return cached;
        }

        var response = base.Get(url);
        _cache[url] = response;
        return response;
    }
}

var services = new ServiceCollection();
services.AddSingleton<IHttpClient>(_ =>
    new CachingHttpClient(new MetricsHttpClient(new BaseHttpClient()))
);

var provider = services.BuildServiceProvider();
var client = provider.GetRequiredService<IHttpClient>();

Console.WriteLine(client.Get("/users"));
Console.WriteLine(client.Get("/users"));`,
    explanation:
      "The .NET version shows the same decorator stack assembled through dependency injection, so caching and metrics remain pluggable around the base client.",
  },
];

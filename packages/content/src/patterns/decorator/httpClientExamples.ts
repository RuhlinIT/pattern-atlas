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
];

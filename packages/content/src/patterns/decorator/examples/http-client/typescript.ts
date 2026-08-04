import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface HttpClient {
  get(url: string): Promise<string>;
}

class BasicHttpClient implements HttpClient {
  async get(url: string) {
    return `response from ${url}`;
  }
}

class MetricsClient implements HttpClient {
  constructor(private wrapped: HttpClient) {}
  async get(url: string) {
    const started = Date.now();
    const result = await this.wrapped.get(url);
    console.log(`duration=${Date.now() - started}`);
    return result;
  }
}

class CachingClient implements HttpClient {
  private cache = new Map<string, string>();
  constructor(private wrapped: HttpClient) {}
  async get(url: string) {
    if (this.cache.has(url)) return this.cache.get(url)!;
    const result = await this.wrapped.get(url);
    this.cache.set(url, result);
    return result;
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "HTTP client",
  code: `interface HttpClient {
  get(url: string): Promise<string>;
}

class BasicHttpClient implements HttpClient {
  async get(url: string) {
    return \`response from \${url}\`;
  }
}

class MetricsClient implements HttpClient {
  constructor(private wrapped: HttpClient) {}
  async get(url: string) {
    const started = Date.now();
    const result = await this.wrapped.get(url);
    console.log(\`duration=\${Date.now() - started}\`);
    return result;
  }
}

class CachingClient implements HttpClient {
  private cache = new Map<string, string>();
  constructor(private wrapped: HttpClient) {}
  async get(url: string) {
    const cached = this.cache.get(url);
    if (cached !== undefined) return cached;
    const result = await this.wrapped.get(url);
    this.cache.set(url, result);
    return result;
  }
}

const client = new MetricsClient(new CachingClient(new BasicHttpClient()));
client.get("/users");`,
  explanation:
    "Wrap a client to add caching, tracing, or metrics without changing the request interface.",
};
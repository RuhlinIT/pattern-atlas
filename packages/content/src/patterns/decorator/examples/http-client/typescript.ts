import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "HTTP client",
  code: "interface HttpClient {\n  get(url: string): string;\n}\n\nclass BaseHttpClient implements HttpClient {\n  get(url: string): string {\n    return `response from ${url}`;\n  }\n}\n\nabstract class HttpClientDecorator implements HttpClient {\n  constructor(protected wrappee: HttpClient) {}\n\n  get(url: string): string {\n    return this.wrappee.get(url);\n  }\n}\n\nclass MetricsHttpClient extends HttpClientDecorator {\n  get(url: string): string {\n    console.log(`Measuring request to ${url}`);\n    return super.get(url);\n  }\n}\n\nclass CachingHttpClient extends HttpClientDecorator {\n  private cache = new Map<string, string>();\n\n  get(url: string): string {\n    if (this.cache.has(url)) {\n      return this.cache.get(url)!;\n    }\n\n    const response = super.get(url);\n    this.cache.set(url, response);\n    return response;\n  }\n}\n\nconst client = new CachingHttpClient(\n  new MetricsHttpClient(new BaseHttpClient()),\n);\n\nconsole.log(client.get(\"/users\"));\nconsole.log(client.get(\"/users\"));",
  explanation: "Caching and metrics are independent concerns layered around the same client contract, so they can be combined or removed easily.",
};

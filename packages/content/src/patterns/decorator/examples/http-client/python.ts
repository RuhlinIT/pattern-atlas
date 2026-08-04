import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "HTTP client",
  code: `class BasicHttpClient:
    def get(self, url):
        return f"response from {url}"

class MetricsClient:
    def __init__(self, wrapped):
        self.wrapped = wrapped

    def get(self, url):
        result = self.wrapped.get(url)
        print("metrics recorded")
        return result
`,
  explanation: "Wrap a client to add caching, tracing, or metrics without changing the request interface.",
};
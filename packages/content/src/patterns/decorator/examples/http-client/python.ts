import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "HTTP client",
  code: "from abc import ABC, abstractmethod\n\nclass HttpClient(ABC):\n    @abstractmethod\n    def get(self, url: str) -> str:\n        pass\n\nclass BaseHttpClient(HttpClient):\n    def get(self, url: str) -> str:\n        return f\"response from {url}\"\n\nclass HttpClientDecorator(HttpClient):\n    def __init__(self, wrappee: HttpClient) -> None:\n        self.wrappee = wrappee\n\n    def get(self, url: str) -> str:\n        return self.wrappee.get(url)\n\nclass MetricsHttpClient(HttpClientDecorator):\n    def get(self, url: str) -> str:\n        print(f\"Measuring request to {url}\")\n        return super().get(url)\n\nclass CachingHttpClient(HttpClientDecorator):\n    def __init__(self, wrappee: HttpClient) -> None:\n        super().__init__(wrappee)\n        self.cache: dict[str, str] = {}\n\n    def get(self, url: str) -> str:\n        if url in self.cache:\n            return self.cache[url]\n\n        response = super().get(url)\n        self.cache[url] = response\n        return response\n\nclient = CachingHttpClient(MetricsHttpClient(BaseHttpClient()))\nprint(client.get(\"/users\"))\nprint(client.get(\"/users\"))",
  explanation: "The decorators keep the same get contract, which makes it easy to add caching and metrics without changing consumers.",
};

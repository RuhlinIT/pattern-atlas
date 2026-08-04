import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "HTTP client",
  code: `interface HttpClient {
    String get(String url);
}

class BasicHttpClient implements HttpClient {
    public String get(String url) {
        return "response from " + url;
    }
}
`,
  explanation: "Wrap a client to add caching, tracing, or metrics without changing the request interface.",
};
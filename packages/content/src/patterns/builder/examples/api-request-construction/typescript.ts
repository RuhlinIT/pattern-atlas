import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "API request construction",
  code: `type ApiRequest = {
  method: "GET" | "POST";
  url: string;
  headers: Record<string, string>;
  query: Record<string, string>;
  body?: unknown;
};

class ApiRequestBuilder {
  private request: ApiRequest = {
    method: "GET",
    url: "",
    headers: {},
    query: {},
  };

  method(method: "GET" | "POST") {
    this.request.method = method;
    return this;
  }

  url(url: string) {
    this.request.url = url;
    return this;
  }

  header(key: string, value: string) {
    this.request.headers[key] = value;
    return this;
  }

  queryParam(key: string, value: string) {
    this.request.query[key] = value;
    return this;
  }

  body(body: unknown) {
    this.request.body = body;
    return this;
  }

  build() {
    return this.request;
  }
}

const request = new ApiRequestBuilder()
  .method("POST")
  .url("/payments")
  .header("Authorization", "Bearer token")
  .queryParam("expand", "customer")
  .body({ amount: 1000 })
  .build();`,
  explanation:
    "A builder is useful here because the request is assembled in steps and may include optional headers, query parameters, and a body.",
};
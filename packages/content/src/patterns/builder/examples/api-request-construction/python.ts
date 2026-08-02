import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "API request construction",
  code: `from dataclasses import dataclass, field
from typing import Any, Dict, Optional

@dataclass
class ApiRequest:
    method: str = "GET"
    url: str = ""
    headers: Dict[str, str] = field(default_factory=dict)
    query: Dict[str, str] = field(default_factory=dict)
    body: Optional[Any] = None

class ApiRequestBuilder:
    def __init__(self):
        self._request = ApiRequest()

    def method(self, method: str):
        self._request.method = method
        return self

    def url(self, url: str):
        self._request.url = url
        return self

    def header(self, key: str, value: str):
        self._request.headers[key] = value
        return self

    def query_param(self, key: str, value: str):
        self._request.query[key] = value
        return self

    def body(self, body: Any):
        self._request.body = body
        return self

    def build(self):
        if not self._request.url:
            raise ValueError("url is required")
        return self._request

request = (
    ApiRequestBuilder()
    .method("POST")
    .url("/payments")
    .header("Authorization", "Bearer token")
    .query_param("expand", "customer")
    .body({"amount": 1000})
    .build()
)`,
  explanation:
    "A builder is useful here because the request is assembled in steps and may include optional headers, query parameters, and a body.",
};
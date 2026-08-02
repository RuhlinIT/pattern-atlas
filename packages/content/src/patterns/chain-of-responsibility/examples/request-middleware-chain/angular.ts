import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Request middleware chain",
  code: `type Request = { path: string; user?: string };

class RequestService {
  handleRequest(request: Request) {
    if (!request.user) {
      throw new Error("Unauthorized");
    }

    console.log("request", request.path);
    return request;
  }
}

export class RequestComponent {
  request = new RequestService().handleRequest({ path: "/dashboard", user: "alice" });
}`,
  explanation:
    "Angular services can model middleware-style request handling in a staged sequence.",
};
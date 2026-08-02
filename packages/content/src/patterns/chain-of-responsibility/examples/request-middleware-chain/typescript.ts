import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Request middleware chain",
  code: `type Request = { path: string; user?: string };

type Middleware = {
  setNext(next: Middleware): Middleware;
  handle(request: Request): Request;
};

abstract class BaseMiddleware implements Middleware {
  protected next: Middleware | null = null;

  setNext(next: Middleware) {
    this.next = next;
    return next;
  }

  handle(request: Request): Request {
    return this.next ? this.next.handle(request) : request;
  }
}

class LoggingMiddleware extends BaseMiddleware {
  handle(request: Request) {
    console.log("request", request.path);
    return super.handle(request);
  }
}

class AuthMiddleware extends BaseMiddleware {
  handle(request: Request) {
    if (!request.user) throw new Error("Unauthorized");
    return super.handle(request);
  }
}

class RateLimitMiddleware extends BaseMiddleware {
  handle(request: Request) {
    return super.handle(request);
  }
}

const chain = new LoggingMiddleware();
chain.setNext(new AuthMiddleware()).setNext(new RateLimitMiddleware());`,
  explanation:
    "A middleware chain is a practical Chain of Responsibility form for web requests and cross-cutting concerns.",
};
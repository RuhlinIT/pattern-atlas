import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface Service {
  handle(input: string): string;
}

class BaseService implements Service {
  handle(input: string) {
    return input.toUpperCase();
  }
}

class LoggingService implements Service {
  constructor(private wrapped: Service) {}
  handle(input: string) {
    console.log(`input=${input}`);
    return this.wrapped.handle(input);
  }
}

class MetricsService implements Service {
  constructor(private wrapped: Service) {}
  handle(input: string) {
    const started = Date.now();
    const result = this.wrapped.handle(input);
    console.log(`duration=${Date.now() - started}`);
    return result;
  }
}

class TracingService implements Service {
  constructor(private wrapped: Service) {}
  handle(input: string) {
    console.log("trace start");
    const result = this.wrapped.handle(input);
    console.log("trace end");
    return result;
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Logging, metrics, and tracing",
  code: `interface Service {
  handle(input: string): string;
}

class BaseService implements Service {
  handle(input: string) {
    return input.toUpperCase();
  }
}

class LoggingService implements Service {
  constructor(private wrapped: Service) {}
  handle(input: string) {
    console.log(\`input=\${input}\`);
    return this.wrapped.handle(input);
  }
}

class MetricsService implements Service {
  constructor(private wrapped: Service) {}
  handle(input: string) {
    const started = Date.now();
    const result = this.wrapped.handle(input);
    console.log(\`duration=\${Date.now() - started}\`);
    return result;
  }
}

class TracingService implements Service {
  constructor(private wrapped: Service) {}
  handle(input: string) {
    console.log("trace start");
    const result = this.wrapped.handle(input);
    console.log("trace end");
    return result;
  }
}

new TracingService(new MetricsService(new LoggingService(new BaseService()))).handle("hello");`,
  explanation:
    "Wrap service calls with observability concerns without changing business logic.",
};
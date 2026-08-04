import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface Service {
  handle(input: string): string;
}

class BaseService implements Service {
  handle(input: string) {
    return input.toUpperCase();
  }
}

class TransparentDecorator implements Service {
  constructor(private wrapped: Service) {}
  handle(input: string) {
    return this.wrapped.handle(input);
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Transparent decorator",
  code: `interface Service {
  handle(input: string): string;
}

class BaseService implements Service {
  handle(input: string) {
    return input.toUpperCase();
  }
}

class TransparentDecorator implements Service {
  constructor(private wrapped: Service) {}
  handle(input: string) {
    return this.wrapped.handle(input);
  }
}
`,
  explanation: "Keep the same interface while forwarding behavior through a wrapper.",
};
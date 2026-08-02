import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Validation chain",
  code: `type Request = { value: string };

abstract class Validator {
  protected next: Validator | null = null;
  setNext(next: Validator) {
    this.next = next;
    return next;
  }
  handle(request: Request): string | null {
    return this.next ? this.next.handle(request) : null;
  }
}

class RequiredValidator extends Validator {
  handle(request: Request) {
    if (!request.value.trim()) return "Value is required.";
    return super.handle(request);
  }
}

class LengthValidator extends Validator {
  handle(request: Request) {
    if (request.value.length < 8) return "Value is too short.";
    return super.handle(request);
  }
}

class FinalValidator extends Validator {
  handle(request: Request) {
    return null;
  }
}

const chain = new RequiredValidator();
chain.setNext(new LengthValidator()).setNext(new FinalValidator());`,
  explanation:
    "This variant emphasizes a simple validation pipeline where each rule can stop or pass the request forward.",
};
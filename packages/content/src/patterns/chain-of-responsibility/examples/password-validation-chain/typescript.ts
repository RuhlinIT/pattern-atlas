import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Password validation chain",
  code: `type PasswordRequest = {
  password: string;
};

type Handler = {
  setNext(handler: Handler): Handler;
  handle(request: PasswordRequest): string | null;
};

abstract class PasswordValidator implements Handler {
  protected next: Handler | null = null;

  setNext(handler: Handler) {
    this.next = handler;
    return handler;
  }

  handle(request: PasswordRequest): string | null {
    if (this.next) return this.next.handle(request);
    return null;
  }
}

class LengthValidator extends PasswordValidator {
  handle(request: PasswordRequest) {
    if (request.password.length < 12) return "Password must be at least 12 characters.";
    return super.handle(request);
  }
}

class NumberValidator extends PasswordValidator {
  handle(request: PasswordRequest) {
    if (!/[0-9]/.test(request.password)) return "Password must include a number.";
    return super.handle(request);
  }
}

class SpecialCharValidator extends PasswordValidator {
  handle(request: PasswordRequest) {
    if (!/[!@#$%^&*]/.test(request.password)) return "Password must include a special character.";
    return super.handle(request);
  }
}

const chain = new LengthValidator();
chain.setNext(new NumberValidator()).setNext(new SpecialCharValidator());

const result = chain.handle({ password: "example" });`,
  explanation:
    "A validation chain keeps each rule isolated so the password can pass through multiple checks in order.",
};
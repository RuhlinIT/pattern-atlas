import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Approval chain",
  code: `type Request = { amount: number };

abstract class Approver {
  protected next: Approver | null = null;
  setNext(next: Approver) {
    this.next = next;
    return next;
  }
  handle(request: Request): string | null {
    return this.next ? this.next.handle(request) : null;
  }
}

class Manager extends Approver {
  handle(request: Request) {
    if (request.amount <= 500) return "Manager approved.";
    return super.handle(request);
  }
}

class Finance extends Approver {
  handle(request: Request) {
    if (request.amount <= 5000) return "Finance approved.";
    return super.handle(request);
  }
}

class Executive extends Approver {
  handle(request: Request) {
    return "Executive approved.";
  }
}

const chain = new Manager();
chain.setNext(new Finance()).setNext(new Executive());`,
  explanation:
    "This variant emphasizes ordered approval thresholds where requests move upward until someone signs off.",
};
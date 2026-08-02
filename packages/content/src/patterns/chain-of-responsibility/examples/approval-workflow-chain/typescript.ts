import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Approval workflow chain",
  code: `type ApprovalRequest = {
  amount: number;
  department: string;
};

abstract class Approver {
  protected next: Approver | null = null;

  setNext(handler: Approver) {
    this.next = handler;
    return handler;
  }

  handle(request: ApprovalRequest): string | null {
    return this.next ? this.next.handle(request) : null;
  }
}

class ManagerApproval extends Approver {
  handle(request: ApprovalRequest) {
    if (request.amount <= 500) return "Manager approved the request.";
    return super.handle(request);
  }
}

class FinanceApproval extends Approver {
  handle(request: ApprovalRequest) {
    if (request.amount <= 5000) return "Finance approved the request.";
    return super.handle(request);
  }
}

class ExecutiveApproval extends Approver {
  handle(request: ApprovalRequest) {
    return "Executive approved the request.";
  }
}

const chain = new ManagerApproval();
chain.setNext(new FinanceApproval()).setNext(new ExecutiveApproval());`,
  explanation:
    "An approval chain lets each approver either sign off or move the request to the next level.",
};
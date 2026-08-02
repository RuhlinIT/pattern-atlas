import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Approval workflow chain",
  code: `class ApprovalRequest {
    double amount;
    String department;
    ApprovalRequest(double amount, String department) {
        this.amount = amount;
        this.department = department;
    }
}

abstract class Approver {
    private Approver next;

    public Approver setNext(Approver next) {
        this.next = next;
        return next;
    }

    public String handle(ApprovalRequest request) {
        return next == null ? null : next.handle(request);
    }
}

class ManagerApproval extends Approver {
    @Override
    public String handle(ApprovalRequest request) {
        if (request.amount <= 500) return "Manager approved the request.";
        return super.handle(request);
    }
}

class FinanceApproval extends Approver {
    @Override
    public String handle(ApprovalRequest request) {
        if (request.amount <= 5000) return "Finance approved the request.";
        return super.handle(request);
    }
}

class ExecutiveApproval extends Approver {
    @Override
    public String handle(ApprovalRequest request) {
        return "Executive approved the request.";
    }
}

Approver chain = new ManagerApproval();
chain.setNext(new FinanceApproval()).setNext(new ExecutiveApproval());`,
  explanation:
    "A chain is useful for approvals because each level can approve, reject, or pass the request onward.",
};
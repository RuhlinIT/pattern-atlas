import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Form command chain",
  code: `type Submission = { email: string; value: string };

abstract class FormStep {
  protected next: FormStep | null = null;

  setNext(next: FormStep) {
    this.next = next;
    return next;
  }

  handle(submission: Submission): string | null {
    return this.next ? this.next.handle(submission) : null;
  }
}

class SanitizeStep extends FormStep {
  handle(submission: Submission) {
    if (!submission.email.trim()) return "Email is required.";
    return super.handle(submission);
  }
}

class ValidateStep extends FormStep {
  handle(submission: Submission) {
    if (!submission.email.includes("@")) return "Email is invalid.";
    return super.handle(submission);
  }
}

class PolicyStep extends FormStep {
  handle(submission: Submission) {
    return "Submission accepted.";
  }
}

const chain = new SanitizeStep();
chain.setNext(new ValidateStep()).setNext(new PolicyStep());`,
  explanation:
    "A form-command chain lets sanitization, validation, and policy checks stay separate.",
};
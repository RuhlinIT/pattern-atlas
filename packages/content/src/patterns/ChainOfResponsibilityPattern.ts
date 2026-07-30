import type { PatternRecord } from "@atlas-patterns/schemas";
import { passwordValidationChainExamples } from "./chain-of-responsibility/passwordValidationChainExamples";
import { supportTicketChainExamples } from "./chain-of-responsibility/supportTicketChainExamples";
import { approvalWorkflowChainExamples } from "./chain-of-responsibility/approvalWorkflowChainExamples";

export const ChainOfResponsibilityPattern: PatternRecord = {
  slug: "chain-of-responsibility",
  name: "Chain of Responsibility",
  category: "Behavioral",
  problem:
    "A request must pass through multiple possible handlers, but the sender should not need to know which handler will process it.",
  intent:
    "Pass requests along a chain of handlers until one of them handles the request or the request reaches the end of the chain.",
  tradeoffs: [
    "Requests can become harder to trace because control flows through multiple handlers",
    "A long chain may add overhead if many handlers are checked on every request",
  ],
  languages: [
    "TypeScript",
    "Java",
    "Python",
    "Angular",
    "React",
    "React_Native",
    "C#",
    ".NET",
  ],
  platforms: ["Web", "Backend", "Mobile", "UI kits", "Cross-platform systems"],
  integrationNotes:
    "Chain of Responsibility is useful for validation pipelines, support routing, approval flows, and any system where requests may be processed by different handlers in sequence.",
  scenarios: [
    {
      slug: "password-validation-chain",
      title: "Password validation chain",
      summary:
        "A password must pass through several validation rules before it is accepted.",
      languageExamples: passwordValidationChainExamples,
    },
    {
      slug: "support-ticket-chain",
      title: "Support ticket chain",
      summary:
        "A support ticket is routed through a chain of handlers until the right support level processes it.",
      languageExamples: supportTicketChainExamples,
    },
    {
      slug: "approval-workflow-chain",
      title: "Approval workflow chain",
      summary:
        "An expense request passes through a chain of approvers based on amount and policy constraints.",
      languageExamples: approvalWorkflowChainExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Validation pipelines",
      description:
        "Form inputs often pass through multiple validation rules before a submission is accepted.",
    },
    {
      title: "Support routing",
      description:
        "Help desks frequently forward tickets through escalating tiers until someone can resolve the issue.",
    },
    {
      title: "Approval workflows",
      description:
        "Business requests often move through managers, finance, and executives until the appropriate approver signs off.",
    },
  ],
};

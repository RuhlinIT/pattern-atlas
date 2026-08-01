import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "password-validation-chain",
    "title": "Password validation chain",
    "summary": "A password must pass through several validation rules before it is accepted."
  },
  {
    "slug": "support-ticket-chain",
    "title": "Support ticket chain",
    "summary": "A support ticket is routed through a chain of handlers until the right support level processes it."
  },
  {
    "slug": "approval-workflow-chain",
    "title": "Approval workflow chain",
    "summary": "An expense request passes through a chain of approvers based on amount and policy constraints."
  }
];

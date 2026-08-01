import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { passwordValidationChainExamples } from "./examples/password-validation-chain";
import { supportTicketChainExamples } from "./examples/support-ticket-chain";
import { approvalWorkflowChainExamples } from "./examples/approval-workflow-chain";

export const chainOfResponsibilityPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "password-validation-chain": passwordValidationChainExamples,
    "support-ticket-chain": supportTicketChainExamples,
    "approval-workflow-chain": approvalWorkflowChainExamples,
  },
  realWorldExamples: [
  {
    "title": "Validation pipelines",
    "description": "Form inputs often pass through multiple validation rules before a submission is accepted."
  },
  {
    "title": "Support routing",
    "description": "Help desks frequently forward tickets through escalating tiers until someone can resolve the issue."
  },
  {
    "title": "Approval workflows",
    "description": "Business requests often move through managers, finance, and executives until the appropriate approver signs off."
  }
],
  tradeoffs: [
  "Requests can become harder to trace because control flows through multiple handlers",
  "A long chain may add overhead if many handlers are checked on every request"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Chain of Responsibility is useful for validation pipelines, support routing, approval flows, and any system where requests may be processed by different handlers in sequence.",
  problem: "A request must pass through multiple possible handlers, but the sender should not need to know which handler will process it.",
};

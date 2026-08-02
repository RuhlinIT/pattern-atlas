import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { typescript as passwordValidationChainTypescript } from "./examples/password-validation-chain/typescript";
import { java as passwordValidationChainJava } from "./examples/password-validation-chain/java";
import { python as passwordValidationChainPython } from "./examples/password-validation-chain/python";

import { typescript as supportTicketChainTypescript } from "./examples/support-ticket-chain/typescript";
import { java as supportTicketChainJava } from "./examples/support-ticket-chain/java";
import { python as supportTicketChainPython } from "./examples/support-ticket-chain/python";

import { typescript as approvalWorkflowChainTypescript } from "./examples/approval-workflow-chain/typescript";
import { java as approvalWorkflowChainJava } from "./examples/approval-workflow-chain/java";
import { python as approvalWorkflowChainPython } from "./examples/approval-workflow-chain/python";

import { typescript as requestMiddlewareChainTypescript } from "./examples/request-middleware-chain/typescript";
import { react as requestMiddlewareChainReact } from "./examples/request-middleware-chain/react";
import { angular as requestMiddlewareChainAngular } from "./examples/request-middleware-chain/angular";

import { typescript as notificationRoutingChainTypescript } from "./examples/notification-routing-chain/typescript";
import { react as notificationRoutingChainReact } from "./examples/notification-routing-chain/react";

import { typescript as formCommandChainTypescript } from "./examples/form-command-chain/typescript";
import { react as formCommandChainReact } from "./examples/form-command-chain/react";

const passwordValidationChainExamples = normalizeExamples({
  typescript: passwordValidationChainTypescript,
  java: passwordValidationChainJava,
  python: passwordValidationChainPython,
});

const supportTicketChainExamples = normalizeExamples({
  typescript: supportTicketChainTypescript,
  java: supportTicketChainJava,
  python: supportTicketChainPython,
});

const approvalWorkflowChainExamples = normalizeExamples({
  typescript: approvalWorkflowChainTypescript,
  java: approvalWorkflowChainJava,
  python: approvalWorkflowChainPython,
});

const requestMiddlewareChainExamples = normalizeExamples({
  typescript: requestMiddlewareChainTypescript,
  react: requestMiddlewareChainReact,
  angular: requestMiddlewareChainAngular,
});

const notificationRoutingChainExamples = normalizeExamples({
  typescript: notificationRoutingChainTypescript,
  react: notificationRoutingChainReact,
});

const formCommandChainExamples = normalizeExamples({
  typescript: formCommandChainTypescript,
  react: formCommandChainReact,
});

export const chainOfResponsibilityPattern: PatternRecord = {
  ...meta,
  problem:
    "A request must pass through multiple possible handlers, but the sender should not need to know which handler will process it.",
  tradeoffs: [
    "Requests can become harder to trace because control flows through multiple handlers.",
    "A long chain may add overhead if many handlers are checked on every request.",
    "It keeps handler logic isolated and easier to extend.",
  ],
  platforms: ["frontend", "backend", "integration"],
  integrationNotes:
    "Chain of Responsibility is useful for validation pipelines, support routing, approval flows, and any system where requests may be processed by different handlers in sequence.",
  scenarios,
  scenarioExamples: {
    "password-validation-chain": passwordValidationChainExamples,
    "support-ticket-chain": supportTicketChainExamples,
    "approval-workflow-chain": approvalWorkflowChainExamples,
    "request-middleware-chain": requestMiddlewareChainExamples,
    "notification-routing-chain": notificationRoutingChainExamples,
    "form-command-chain": formCommandChainExamples,
  },
  variants: [
    {
      slug: "cor-validation-chain",
      title: "Validation chain",
      stackArea: "backend",
      language: "typescript",
      summary:
        "Process inputs through a sequence of validation handlers that can approve or reject the request.",
      intent:
        "Keep validation rules isolated and composable.",
      problem:
        "Validation becomes hard to change when all rules are packed into one function.",
      solution:
        "Use a chain so each validator can inspect the request and decide whether processing should continue.",
      dependencies: ["chain of responsibility"],
      relatedVariants: ["cor-escalation-chain", "cor-workflow-approval-chain"],
      examplePatternSlugs: ["chain-of-responsibility"],
      notes:
        "Good for password checks, form validation, and request sanitization.",
    },
    {
      slug: "cor-escalation-chain",
      title: "Escalation chain",
      stackArea: "integration",
      language: "java",
      summary:
        "Route tickets, alerts, or messages through handlers that escalate until someone can resolve them.",
      intent:
        "Let each handler decide whether to resolve, escalate, or forward.",
      problem:
        "Routing logic becomes brittle when escalation rules are duplicated across systems.",
      solution:
        "Use a chain so each escalation tier can handle only the requests it understands.",
      dependencies: ["chain of responsibility"],
      relatedVariants: ["cor-validation-chain", "cor-workflow-approval-chain"],
      examplePatternSlugs: ["chain-of-responsibility"],
      notes:
        "Use this for support queues, notification routing, and triage systems.",
    },
    {
      slug: "cor-workflow-approval-chain",
      title: "Approval chain",
      stackArea: "integration",
      language: "typescript",
      summary:
        "Pass business requests through approvers until the request is accepted, rejected, or escalated.",
      intent:
        "Separate approval policy from request submission.",
      problem:
        "Approval logic is hard to modify when it lives in one large workflow function.",
      solution:
        "Use a chain so managers, finance, and executives can each decide whether to approve or forward.",
      dependencies: ["chain of responsibility"],
      relatedVariants: ["cor-validation-chain", "cor-escalation-chain"],
      examplePatternSlugs: ["chain-of-responsibility"],
      notes:
        "Fits expense approvals, purchase requests, and policy-based signoff flows.",
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
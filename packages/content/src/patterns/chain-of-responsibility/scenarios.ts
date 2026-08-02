import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "password-validation-chain",
    title: "Password validation chain",
    summary:
      "A password must pass through several validation rules before it is accepted.",
    context:
      "A signup flow needs to check password length, complexity, banned words, and breach history.",
    problem:
      "Validation logic becomes hard to maintain when each rule is mixed into one large function.",
    solution:
      "Use Chain of Responsibility so each rule can evaluate the request in sequence.",
    stackArea: "backend",
  },
  {
    slug: "support-ticket-chain",
    title: "Support ticket chain",
    summary:
      "A support ticket is routed through a chain of handlers until the right support level processes it.",
    context:
      "A help desk needs triage, escalation, and specialist routing without a single giant dispatcher.",
    problem:
      "Ticket routing becomes brittle when every classification rule lives in one place.",
    solution:
      "Use Chain of Responsibility so handlers can inspect and escalate the ticket in order.",
    stackArea: "backend",
  },
  {
    slug: "approval-workflow-chain",
    title: "Approval workflow chain",
    summary:
      "An expense request passes through a chain of approvers based on amount and policy constraints.",
    context:
      "A business needs manager, finance, and executive approvals depending on request size.",
    problem:
      "Hardcoding approval logic into one workflow makes policy changes expensive.",
    solution:
      "Use Chain of Responsibility so each approver can accept, reject, or pass along the request.",
    stackArea: "integration",
  },
  {
    slug: "request-middleware-chain",
    title: "Request middleware chain",
    summary:
      "A web request flows through logging, auth, rate limiting, and transformation handlers.",
    context:
      "An application needs a predictable sequence of middleware before a controller handles the request.",
    problem:
      "Embedding cross-cutting concerns directly in controllers creates duplication and coupling.",
    solution:
      "Use Chain of Responsibility to process the request through reusable middleware handlers.",
    stackArea: "frontend",
  },
  {
    slug: "notification-routing-chain",
    title: "Notification routing chain",
    summary:
      "A message is routed through preference checks, channel selection, and fallback handlers.",
    context:
      "A messaging platform needs to choose between email, SMS, push, or fallback delivery paths.",
    problem:
      "Notification rules are hard to evolve when routing is duplicated across services.",
    solution:
      "Use Chain of Responsibility so each router can decide whether to handle or forward the message.",
    stackArea: "integration",
  },
  {
    slug: "form-command-chain",
    title: "Form command chain",
    summary:
      "A form submission is checked by sanitization, validation, and policy handlers before it is saved.",
    context:
      "A UI-driven workflow needs multiple checks before accepting a sensitive user action.",
    problem:
      "One large submit handler becomes difficult to test when multiple concerns are mixed together.",
    solution:
      "Use Chain of Responsibility so each check can decide whether the submission should continue.",
    stackArea: "frontend",
  },
];
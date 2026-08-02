import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Form command chain",
  code: `type Submission = { email: string; value: string };

function submitForm(submission: Submission) {
  if (!submission.email.trim()) return "Email is required.";
  if (!submission.email.includes("@")) return "Email is invalid.";
  return "Submission accepted.";
}

export function FormDemo() {
  const result = submitForm({ email: "a@example.com", value: "ok" });
  return <p>{result}</p>;
}`,
  explanation:
    "Form flows often benefit from a chain so checks can be staged without one giant submit handler.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "UI accessibility enhancement",
  code: `export function AccessibleButton({ label }: { label: string }) {
  return <button aria-label={label}>{label}</button>;
}
`,
  explanation: "Add accessibility metadata and behavior without changing the underlying UI component.",
};
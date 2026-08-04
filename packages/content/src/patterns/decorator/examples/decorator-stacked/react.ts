import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Stacked decorators",
  code: `export function StackedLabel({ children }: { children: React.ReactNode }) {
  return <strong><em>{children}</em></strong>;
}
`,
  explanation: "Stack multiple wrappers so each one adds a separate concern.",
};
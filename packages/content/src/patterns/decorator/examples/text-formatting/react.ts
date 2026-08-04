import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Text formatting",
  code: `export function Bold({ children }: { children: React.ReactNode }) {
  return <strong>{children}</strong>;
}
`,
  explanation: "Wrap text with formatting layers while preserving the same render contract.",
};
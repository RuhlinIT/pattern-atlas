import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Admin action queue",
  code: `export function AdminActions({ onExport }: { onExport: () => void }) {
  return <button onClick={onExport}>Export users</button>;
}
`,
  explanation:
    "Record admin operations as commands so they can be queued, logged, and retried later.",
};
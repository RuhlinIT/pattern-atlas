import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Macro command sequence",
  code: `export function MacroButton({ onRun }: { onRun: () => void }) {
  return <button onClick={onRun}>Run macro</button>;
}
`,
  explanation:
    "Bundle several commands into one macro so a single trigger can run a whole sequence.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Remote control actions",
  code: `export function RemoteControl({ onPower }: { onPower: () => void }) {
  return <button onClick={onPower}>Power</button>;
}
`,
  explanation:
    "Bind buttons to commands so the invoker can trigger device actions without knowing receiver details.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react = {
  language: "react",
  code: `import { useEffect, useState } from "react";

export function UiShellFacade() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    Promise.resolve().then(() => (active ? setStatus("ready") : undefined));
    return () => {
      active = false;
    };
  }, []);

  return <div>{status}</div>;
}
`,
} satisfies PatternLanguageExample;
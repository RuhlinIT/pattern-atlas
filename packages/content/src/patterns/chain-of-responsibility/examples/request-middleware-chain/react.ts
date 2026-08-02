import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Request middleware chain",
  code: `type Request = { path: string; user?: string };

function handleRequest(request: Request) {
  if (!request.user) {
    throw new Error("Unauthorized");
  }

  console.log("request", request.path);
  return request;
}

export function RequestDemo() {
  const request = handleRequest({ path: "/dashboard", user: "alice" });

  return <pre>{JSON.stringify(request, null, 2)}</pre>;
}`,
  explanation:
    "React apps often use middleware-style chains to keep request checks separate from UI rendering.",
};
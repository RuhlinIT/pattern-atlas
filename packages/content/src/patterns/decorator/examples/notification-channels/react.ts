import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Notification channels",
  code: `export function ChannelList() {
  return <div>Email + SMS + Slack</div>;
}
`,
  explanation: "Combine delivery channels by wrapping a base notifier with channel-specific decorators.",
};
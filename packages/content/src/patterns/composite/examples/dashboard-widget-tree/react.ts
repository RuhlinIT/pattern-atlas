import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Dashboard widget tree",
  code: `type WidgetNode = { name: string; children?: WidgetNode[] };

function Widget({ node }: { node: WidgetNode }) {
  return (
    <div>
      <strong>{node.name}</strong>
      {node.children?.map((child) => (
        <Widget key={child.name} node={child} />
      ))}
    </div>
  );
}
`,
  explanation: "Treat widgets and widget groups the same way so dashboards can nest layouts recursively.",
};
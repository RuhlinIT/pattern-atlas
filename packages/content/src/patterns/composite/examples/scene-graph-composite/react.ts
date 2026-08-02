import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Scene graph composite",
  code: `type SceneNode = { name: string; children?: SceneNode[] };

function Scene({ node }: { node: SceneNode }) {
  return (
    <div>
      <span>{node.name}</span>
      {node.children?.map((child) => (
        <Scene key={child.name} node={child} />
      ))}
    </div>
  );
}
`,
  explanation: "Represent shapes and grouped containers in one tree so transforms and rendering can recurse through the scene.",
};
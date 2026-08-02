import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Menu composite",
  code: `type MenuNode = {
  label: string;
  children?: MenuNode[];
};

function MenuView({ node }: { node: MenuNode }) {
  return (
    <div>
      <div>{node.label}</div>
      {node.children?.map((child) => (
        <MenuView key={child.label} node={child} />
      ))}
    </div>
  );
}
`,
  explanation: "Represent menu items and submenus with one interface so the UI can render nested menus uniformly.",
};
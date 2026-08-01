import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Menu composite",
  code: "import React, { useMemo } from \"react\";\n\n\ninterface MenuItem {\n  render(): string;\n}\n\n\nclass LeafMenuItem implements MenuItem {\n  constructor(private label: string) {}\n\n\n  render(): string {\n    return this.label;\n  }\n}\n\n\nclass MenuGroup implements MenuItem {\n  private children: MenuItem[] = [];\n\n\n  constructor(private label: string) {}\n\n\n  add(item: MenuItem): void {\n    this.children.push(item);\n  }\n\n\n  render(): string {\n    return `${this.label}: [${this.children.map((child) => child.render()).join(\", \")}]`;\n  }\n}\n\n\nfunction MenuPreview({ menu }: { menu: MenuItem }) {\n  return <p>{menu.render()}</p>;\n}\n\n\nexport function App() {\n  const menu = useMemo(() => {\n    const fileMenu = new MenuGroup(\"File\");\n    fileMenu.add(new LeafMenuItem(\"New\"));\n    fileMenu.add(new LeafMenuItem(\"Open\"));\n\n\n    const recentMenu = new MenuGroup(\"Recent\");\n    recentMenu.add(new LeafMenuItem(\"Project A\"));\n    recentMenu.add(new LeafMenuItem(\"Project B\"));\n    fileMenu.add(recentMenu);\n\n\n    return fileMenu;\n  }, []);\n\n\n  return (\n    <main>\n      <h1>Menu Composite</h1>\n      <MenuPreview menu={menu} />\n    </main>\n  );\n}",
  explanation: "The React example treats menu items and submenus through one composite interface, which makes recursive UI rendering straightforward.",
};

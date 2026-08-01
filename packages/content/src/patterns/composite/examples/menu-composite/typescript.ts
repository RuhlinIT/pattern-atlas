import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Menu composite",
  code: "interface MenuItem {\n  render(): string;\n}\n\n\nclass LeafMenuItem implements MenuItem {\n  constructor(private label: string) {}\n\n\n  render(): string {\n    return this.label;\n  }\n}\n\n\nclass MenuGroup implements MenuItem {\n  private children: MenuItem[] = [];\n\n\n  constructor(private label: string) {}\n\n\n  add(item: MenuItem): void {\n    this.children.push(item);\n  }\n\n\n  render(): string {\n    return `${this.label}: [${this.children.map((child) => child.render()).join(\", \")}]`;\n  }\n}\n\n\nconst fileMenu = new MenuGroup(\"File\");\nfileMenu.add(new LeafMenuItem(\"New\"));\nfileMenu.add(new LeafMenuItem(\"Open\"));\n\n\nconst recentMenu = new MenuGroup(\"Recent\");\nrecentMenu.add(new LeafMenuItem(\"Project A\"));\nrecentMenu.add(new LeafMenuItem(\"Project B\"));\nfileMenu.add(recentMenu);\n\n\nconsole.log(fileMenu.render());",
  explanation: "The menu composite lets menu items and submenus share one interface so the UI can render nested menus consistently.",
};

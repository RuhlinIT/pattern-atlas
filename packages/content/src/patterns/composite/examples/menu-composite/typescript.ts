import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface MenuComponent {
  render(): string;
}

class MenuItem implements MenuComponent {
  constructor(private label: string) {}
  render() {
    return this.label;
  }
}

class MenuGroup implements MenuComponent {
  constructor(private label: string, private children: MenuComponent[] = []) {}
  add(item: MenuComponent) {
    this.children.push(item);
  }
  render() {
    return `${this.label}: ${this.children.map((child) => child.render()).join(", ")}`;
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Menu composite",
  code: `interface MenuComponent {
  render(): string;
}

class MenuItem implements MenuComponent {
  constructor(private label: string) {}
  render() {
    return this.label;
  }
}

class MenuGroup implements MenuComponent {
  constructor(private label: string, private children: MenuComponent[] = []) {}
  add(item: MenuComponent) {
    this.children.push(item);
  }
  render() {
    return \`\${this.label}: \${this.children.map((child) => child.render()).join(", ")}\`;
  }
}

const fileMenu = new MenuGroup("File");
fileMenu.add(new MenuItem("New"));
fileMenu.add(new MenuItem("Open"));
const recent = new MenuGroup("Recent");
recent.add(new MenuItem("Report.docx"));
fileMenu.add(recent);
fileMenu.render();`,
  explanation:
    "Represent menu items and submenus with one interface so the UI can render nested menus uniformly.",
};
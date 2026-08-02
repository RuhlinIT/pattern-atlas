import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface WidgetNode {
  render(): string;
}

class LeafWidget implements WidgetNode {
  constructor(private name: string) {}
  render() {
    return `widget:${this.name}`;
  }
}

class WidgetGroup implements WidgetNode {
  constructor(private name: string, private children: WidgetNode[] = []) {}
  add(child: WidgetNode) {
    this.children.push(child);
  }
  render() {
    return `${this.name}(${this.children.map((c) => c.render()).join("|")})`;
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Dashboard widget tree",
  code: `interface WidgetNode {
  render(): string;
}

class LeafWidget implements WidgetNode {
  constructor(private name: string) {}
  render() {
    return \`widget:\${this.name}\`;
  }
}

class WidgetGroup implements WidgetNode {
  constructor(private name: string, private children: WidgetNode[] = []) {}
  add(child: WidgetNode) {
    this.children.push(child);
  }
  render() {
    return \`\${this.name}(\${this.children.map((c) => c.render()).join("|")})\`;
  }
}

const dashboard = new WidgetGroup("dashboard");
dashboard.add(new LeafWidget("sales"));
const panel = new WidgetGroup("panel");
panel.add(new LeafWidget("chart"));
dashboard.add(panel);
dashboard.render();`,
  explanation:
    "Treat widgets and widget groups the same way so dashboards can nest layouts recursively.",
};
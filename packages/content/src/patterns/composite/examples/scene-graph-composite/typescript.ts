import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface SceneNode {
  render(): void;
}

class ShapeNode implements SceneNode {
  constructor(private name: string) {}
  render() { console.log(`render ${this.name}`); }
}

class GroupNode implements SceneNode {
  private children: SceneNode[] = [];
  add(child: SceneNode) { this.children.push(child); }
  render() { this.children.forEach(child => child.render()); }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Scene graph composite",
  code: `interface SceneNode {
  render(): void;
}

class ShapeNode implements SceneNode {
  constructor(private name: string) {}
  render() { console.log('render ' + this.name); }
}

class GroupNode implements SceneNode {
  constructor(private children: SceneNode[] = []) {}
  add(child: SceneNode) { this.children.push(child); }
  render() { this.children.forEach(child => child.render()); }
}

const scene = new GroupNode();
scene.add(new ShapeNode("circle"));
const group = new GroupNode();
group.add(new ShapeNode("square"));
scene.add(group);
scene.render();`,
  explanation: "Represent shapes and grouped containers in one tree so transforms and rendering can recurse through the scene.",
};
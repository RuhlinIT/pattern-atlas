import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface PermissionNode {
  includes(permission: string): boolean;
}

class LeafPermission implements PermissionNode {
  constructor(private name: string) {}
  includes(permission: string) { return this.name === permission; }
}

class PermissionGroup implements PermissionNode {
  constructor(private children: PermissionNode[] = []) {}
  add(child: PermissionNode) { this.children.push(child); }
  includes(permission: string) { return this.children.some(child => child.includes(permission)); }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Permission group hierarchy",
  code: `interface PermissionNode {
  includes(permission: string): boolean;
}

class LeafPermission implements PermissionNode {
  constructor(private name: string) {}
  includes(permission: string) { return this.name === permission; }
}

class PermissionGroup implements PermissionNode {
  constructor(private children: PermissionNode[] = []) {}
  add(child: PermissionNode) { this.children.push(child); }
  includes(permission: string) { return this.children.some(child => child.includes(permission)); }
}

const admin = new PermissionGroup();
admin.add(new LeafPermission("read"));
admin.add(new LeafPermission("write"));
admin.includes("write");`,
  explanation: "Model nested permissions with a shared interface so permission checks can recurse through groups.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Organization chart composite",
  code: "interface OrgComponent {\n  describe(indent?: number): string;\n}\n\n\nclass Employee implements OrgComponent {\n  constructor(private name: string, private role: string) {}\n\n\n  describe(indent = 0): string {\n    return `${\" \".repeat(indent)}${this.name} - ${this.role}`;\n  }\n}\n\n\nclass Manager implements OrgComponent {\n  private children: OrgComponent[] = [];\n\n\n  constructor(private name: string, private role: string) {}\n\n\n  add(component: OrgComponent): void {\n    this.children.push(component);\n  }\n\n\n  describe(indent = 0): string {\n    const lines = [`${\" \".repeat(indent)}${this.name} - ${this.role}`];\n    for (const child of this.children) {\n      lines.push(child.describe(indent + 2));\n    }\n    return lines.join(\"\\n\");\n  }\n}\n\n\nconst director = new Manager(\"Ava\", \"Director\");\ndirector.add(new Employee(\"Ben\", \"Developer\"));\ndirector.add(new Employee(\"Cara\", \"Designer\"));\n\n\nconst lead = new Manager(\"Dana\", \"Team Lead\");\nlead.add(new Employee(\"Eli\", \"QA Engineer\"));\ndirector.add(lead);\n\n\nconsole.log(director.describe());",
  explanation: "The Angular example uses a composite organization chart so managers and employees can be represented through one recursive structure.",
};

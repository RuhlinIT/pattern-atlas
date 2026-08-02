import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface OrgNode {
  getLabel(): string;
  getReports(): OrgNode[];
}

class Employee implements OrgNode {
  constructor(private name: string) {}
  getLabel() { return this.name; }
  getReports() { return []; }
}

class Manager implements OrgNode {
  constructor(private name: string, private reports: OrgNode[] = []) {}
  add(report: OrgNode) { this.reports.push(report); }
  getLabel() { return this.name; }
  getReports() { return this.reports; }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Organization chart composite",
  code: `interface OrgNode {
  getLabel(): string;
  getReports(): OrgNode[];
}

class Employee implements OrgNode {
  constructor(private name: string) {}
  getLabel() { return this.name; }
  getReports() { return []; }
}

class Manager implements OrgNode {
  constructor(private name: string, private reports: OrgNode[] = []) {}
  add(report: OrgNode) { this.reports.push(report); }
  getLabel() { return this.name; }
  getReports() { return this.reports; }
}

const ceo = new Manager("CEO");
const eng = new Manager("Engineering");
eng.add(new Employee("Alice"));
eng.add(new Employee("Bob"));
ceo.add(eng);
ceo.getReports();`,
  explanation: "Model employees and managers through the same interface so org hierarchies can be traversed recursively.",
};
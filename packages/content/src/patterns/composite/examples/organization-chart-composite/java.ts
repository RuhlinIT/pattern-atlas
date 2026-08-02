import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Organization chart composite",
  code: `import java.util.ArrayList;
import java.util.List;

interface OrgNode {
    String getLabel();
    List<OrgNode> getReports();
}

class Employee implements OrgNode {
    private final String name;
    Employee(String name) { this.name = name; }
    public String getLabel() { return name; }
    public List<OrgNode> getReports() { return List.of(); }
}

class Manager implements OrgNode {
    private final String name;
    private final List<OrgNode> reports = new ArrayList<>();
    Manager(String name) { this.name = name; }
    void add(OrgNode report) { reports.add(report); }
    public String getLabel() { return name; }
    public List<OrgNode> getReports() { return reports; }
}
`,
  explanation: "Model employees and managers through the same interface so org hierarchies can be traversed recursively.",
};
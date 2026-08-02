import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Safe composite",
  code: `import java.util.ArrayList;
import java.util.List;

interface Node {
    String render();
}

class Leaf implements Node {
    private final String label;
    Leaf(String label) { this.label = label; }
    public String render() { return label; }
}

class Branch implements Node {
    private final List<Node> children = new ArrayList<>();
    void add(Node child) { children.add(child); }
    public String render() { return children.stream().map(Node::render).reduce("", (a, b) -> a + b); }
}
`,
  explanation: "Keep child-management on composite nodes only so leaf nodes stay simple and safe.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Permission group hierarchy",
  code: `import java.util.ArrayList;
import java.util.List;

interface PermissionNode {
    boolean includes(String permission);
}

class LeafPermission implements PermissionNode {
    private final String name;
    LeafPermission(String name) { this.name = name; }
    public boolean includes(String permission) { return name.equals(permission); }
}

class PermissionGroup implements PermissionNode {
    private final List<PermissionNode> children = new ArrayList<>();
    void add(PermissionNode child) { children.add(child); }
    public boolean includes(String permission) {
        return children.stream().anyMatch(child -> child.includes(permission));
    }
}
`,
  explanation: "Model nested permissions with a shared interface so permission checks can recurse through groups.",
};
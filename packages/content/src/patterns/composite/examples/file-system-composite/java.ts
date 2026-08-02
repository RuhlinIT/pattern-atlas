import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "File system composite",
  code: `import java.util.ArrayList;
import java.util.List;

interface FileSystemNode {
    String getName();
    int getSize();
}

class File implements FileSystemNode {
    private final String name;
    private final int size;

    File(String name, int size) {
        this.name = name;
        this.size = size;
    }

    public String getName() { return name; }
    public int getSize() { return size; }
}

class Folder implements FileSystemNode {
    private final String name;
    private final List<FileSystemNode> children = new ArrayList<>();

    Folder(String name) {
        this.name = name;
    }

    void add(FileSystemNode child) {
        children.add(child);
    }

    public String getName() { return name; }
    public int getSize() {
        return children.stream().mapToInt(FileSystemNode::getSize).sum();
    }
}
`,
  explanation: "Treat files and folders through the same interface so nested file trees can be traversed uniformly.",
};
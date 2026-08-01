import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Tree traversal iterator",
  code: "class TreeNode {\n    String value;\n    TreeNode left;\n    TreeNode right;\n\n\n    TreeNode(String value, TreeNode left, TreeNode right) {\n        this.value = value;\n        this.left = left;\n        this.right = right;\n    }\n}\n\n\nclass InOrderIterator {\n    private final java.util.Deque<TreeNode> stack = new java.util.ArrayDeque<>();\n\n\n    public InOrderIterator(TreeNode root) {\n        pushLeft(root);\n    }\n\n\n    private void pushLeft(TreeNode node) {\n        while (node != null) {\n            stack.push(node);\n            node = node.left;\n        }\n    }\n\n\n    public String next() {\n        if (!hasNext()) {\n            return null;\n        }\n\n\n        TreeNode node = stack.pop();\n        pushLeft(node.right);\n        return node.value;\n    }\n\n\n    public boolean hasNext() {\n        return !stack.isEmpty();\n    }\n}\n\n\nTreeNode root = new TreeNode(\n    \"A\",\n    new TreeNode(\"B\", new TreeNode(\"D\"), new TreeNode(\"E\")),\n    new TreeNode(\"C\", null, new TreeNode(\"F\"))\n);\n\n\nInOrderIterator iterator = new InOrderIterator(root);\n\n\nwhile (iterator.hasNext()) {\n    System.out.println(iterator.next());\n}",
  explanation: "The Java example traverses a binary tree in order by keeping the traversal state inside the iterator.",
};

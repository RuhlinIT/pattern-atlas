import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Tree traversal iterator",
  code: "class TreeNode:\n    def __init__(self, value: str, left: \"TreeNode | None\" = None, right: \"TreeNode | None\" = None) -> None:\n        self.value = value\n        self.left = left\n        self.right = right\n\n\nclass InOrderIterator:\n    def __init__(self, root: TreeNode | None) -> None:\n        self.stack: list[TreeNode] = []\n        self._push_left(root)\n\n\n    def _push_left(self, node: TreeNode | None) -> None:\n        while node:\n            self.stack.append(node)\n            node = node.left\n\n\n    def next(self) -> str | None:\n        if not self.has_next():\n            return None\n\n\n        node = self.stack.pop()\n        self._push_left(node.right)\n        return node.value\n\n\n    def has_next(self) -> bool:\n        return len(self.stack) > 0\n\n\nroot = TreeNode(\n    \"A\",\n    TreeNode(\"B\", TreeNode(\"D\"), TreeNode(\"E\")),\n    TreeNode(\"C\", None, TreeNode(\"F\"))\n)\n\n\niterator = InOrderIterator(root)\n\n\nwhile iterator.has_next():\n    print(iterator.next())",
  explanation: "The Python tree iterator stores the traversal path internally so the caller only sees the next node value.",
};

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Access control proxy",
  code: "from abc import ABC, abstractmethod\n\n\nclass SecureResource(ABC):\n    @abstractmethod\n    def access(self, user_role: str) -> str:\n        pass\n\n\nclass SensitiveDocument(SecureResource):\n    def access(self, user_role: str) -> str:\n        return f\"Sensitive document opened for {user_role}\"\n\n\nclass AccessControlProxy(SecureResource):\n    def __init__(self, document: SensitiveDocument) -> None:\n        self.document = document\n\n\n    def access(self, user_role: str) -> str:\n        if user_role != \"admin\":\n            return \"Access denied\"\n        return self.document.access(user_role)\n\n\ndocument = AccessControlProxy(SensitiveDocument())\nprint(document.access(\"guest\"))\nprint(document.access(\"admin\"))",
  explanation: "The access control proxy prevents unauthorized users from reaching the sensitive resource directly.",
};

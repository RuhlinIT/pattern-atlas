import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Access control proxy",
  code: "interface SecureResource {\n    String access(String userRole);\n}\n\n\nclass SensitiveDocument implements SecureResource {\n    public String access(String userRole) {\n        return \"Sensitive document opened for \" + userRole;\n    }\n}\n\n\nclass AccessControlProxy implements SecureResource {\n    private final SensitiveDocument document;\n\n\n    public AccessControlProxy(SensitiveDocument document) {\n        this.document = document;\n    }\n\n\n    public String access(String userRole) {\n        if (!\"admin\".equals(userRole)) {\n            return \"Access denied\";\n        }\n\n\n        return document.access(userRole);\n    }\n}\n\n\nSecureResource document = new AccessControlProxy(new SensitiveDocument());\nSystem.out.println(document.access(\"guest\"));\nSystem.out.println(document.access(\"admin\"));",
  explanation: "The access control proxy verifies the caller role before allowing the sensitive document to be used.",
};

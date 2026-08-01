import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Access control proxy",
  code: "interface SecureResource {\n  access(userRole: string): string;\n}\n\n\nclass SensitiveDocument implements SecureResource {\n  access(userRole: string): string {\n    return `Sensitive document opened for ${userRole}`;\n  }\n}\n\n\nclass AccessControlProxy implements SecureResource {\n  constructor(private document: SensitiveDocument) {}\n\n\n  access(userRole: string): string {\n    if (userRole !== \"admin\") {\n      return \"Access denied\";\n    }\n\n\n    return this.document.access(userRole);\n  }\n}\n\n\nconst document = new AccessControlProxy(new SensitiveDocument());\nconsole.log(document.access(\"guest\"));\nconsole.log(document.access(\"admin\"));",
  explanation: "The Angular example uses a proxy to apply permission checks before sensitive data is exposed to the user.",
};

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Access control proxy",
  code: "import React, { useMemo } from \"react\";\n\n\ninterface SecureResource {\n  access(userRole: string): string;\n}\n\n\nclass SensitiveDocument implements SecureResource {\n  access(userRole: string): string {\n    return `Sensitive document opened for ${userRole}`;\n  }\n}\n\n\nclass AccessControlProxy implements SecureResource {\n  constructor(private document: SensitiveDocument) {}\n\n\n  access(userRole: string): string {\n    if (userRole !== \"admin\") {\n      return \"Access denied\";\n    }\n\n\n    return this.document.access(userRole);\n  }\n}\n\n\nfunction DocumentPreview({ resource }: { resource: SecureResource }) {\n  return <p>{resource.access(\"admin\")}</p>;\n}\n\n\nexport function App() {\n  const resource = useMemo(() => new AccessControlProxy(new SensitiveDocument()), []);\n\n\n  return (\n    <main>\n      <h1>Access Control Proxy</h1>\n      <DocumentPreview resource={resource} />\n    </main>\n  );\n}",
  explanation: "The React example keeps access control inside the proxy so the UI can request protected content without handling authorization directly.",
};

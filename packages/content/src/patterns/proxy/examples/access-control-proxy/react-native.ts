import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "Access control proxy",
  code: "import React, { useMemo } from \"react\";\nimport { SafeAreaView, Text, View } from \"react-native\";\n\n\ninterface SecureResource {\n  access(userRole: string): string;\n}\n\n\nclass SensitiveDocument implements SecureResource {\n  access(userRole: string): string {\n    return `Sensitive document opened for ${userRole}`;\n  }\n}\n\n\nclass AccessControlProxy implements SecureResource {\n  constructor(private document: SensitiveDocument) {}\n\n\n  access(userRole: string): string {\n    if (userRole !== \"admin\") {\n      return \"Access denied\";\n    }\n\n\n    return this.document.access(userRole);\n  }\n}\n\n\nfunction DocumentPreview({ resource }: { resource: SecureResource }) {\n  return (\n    <View>\n      <Text>{resource.access(\"admin\")}</Text>\n    </View>\n  );\n}\n\n\nexport function App() {\n  const resource = useMemo(() => new AccessControlProxy(new SensitiveDocument()), []);\n\n\n  return (\n    <SafeAreaView style={{ flex: 1, justifyContent: \"center\", padding: 24 }}>\n      <View style={{ gap: 16 }}>\n        <Text style={{ fontSize: 24, fontWeight: \"600\" }}>Access Control Proxy</Text>\n        <DocumentPreview resource={resource} />\n      </View>\n    </SafeAreaView>\n  );\n}",
  explanation: "The React Native example uses the proxy to guard sensitive content before the mobile UI displays it.",
};

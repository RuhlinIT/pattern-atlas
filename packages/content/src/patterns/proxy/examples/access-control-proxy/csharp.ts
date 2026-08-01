import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Access control proxy",
  code: "using System;\n\n\npublic interface ISecureResource\n{\n    string Access(string userRole);\n}\n\n\npublic class SensitiveDocument : ISecureResource\n{\n    public string Access(string userRole)\n    {\n        return $\"Sensitive document opened for {userRole}\";\n    }\n}\n\n\npublic class AccessControlProxy : ISecureResource\n{\n    private readonly SensitiveDocument _document;\n\n\n    public AccessControlProxy(SensitiveDocument document)\n    {\n        _document = document;\n    }\n\n\n    public string Access(string userRole)\n    {\n        if (userRole != \"admin\")\n        {\n            return \"Access denied\";\n        }\n\n\n        return _document.Access(userRole);\n    }\n}\n\n\nvar document = new AccessControlProxy(new SensitiveDocument());\nConsole.WriteLine(document.Access(\"guest\"));\nConsole.WriteLine(document.Access(\"admin\"));",
  explanation: "The C# access control proxy checks authorization before the protected document is reached.",
};

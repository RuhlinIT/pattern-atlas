import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: "Access control proxy",
  code: "using System;\nusing Microsoft.Extensions.DependencyInjection;\n\n\npublic interface ISecureResource\n{\n    string Access(string userRole);\n}\n\n\npublic class SensitiveDocument : ISecureResource\n{\n    public string Access(string userRole)\n    {\n        return $\"Sensitive document opened for {userRole}\";\n    }\n}\n\n\npublic class AccessControlProxy : ISecureResource\n{\n    private readonly SensitiveDocument _document;\n\n\n    public AccessControlProxy(SensitiveDocument document)\n    {\n        _document = document;\n    }\n\n\n    public string Access(string userRole)\n    {\n        if (userRole != \"admin\")\n        {\n            return \"Access denied\";\n        }\n\n\n        return _document.Access(userRole);\n    }\n}\n\n\nvar services = new ServiceCollection();\nservices.AddSingleton<ISecureResource>(new AccessControlProxy(new SensitiveDocument()));\n\n\nvar provider = services.BuildServiceProvider();\nvar resource = provider.GetRequiredService<ISecureResource>();\n\nConsole.WriteLine(resource.Access(\"guest\"));\nConsole.WriteLine(resource.Access(\"admin\"));",
  explanation: "The .NET example uses a proxy registered in dependency injection to enforce access control before the real object is used.",
};

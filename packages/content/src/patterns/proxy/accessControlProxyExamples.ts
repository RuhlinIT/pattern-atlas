import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const accessControlProxyExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface SecureResource {
  access(userRole: string): string;
}


class SensitiveDocument implements SecureResource {
  access(userRole: string): string {
    return \`Sensitive document opened for \${userRole}\`;
  }
}


class AccessControlProxy implements SecureResource {
  constructor(private document: SensitiveDocument) {}


  access(userRole: string): string {
    if (userRole !== "admin") {
      return "Access denied";
    }


    return this.document.access(userRole);
  }
}


const document = new AccessControlProxy(new SensitiveDocument());
console.log(document.access("guest"));
console.log(document.access("admin"));`,
    explanation:
      "The access control proxy checks permissions before delegating to the protected document, so only authorized users can open it.",
  },
  {
    language: "Java",
    code: `interface SecureResource {
    String access(String userRole);
}


class SensitiveDocument implements SecureResource {
    public String access(String userRole) {
        return "Sensitive document opened for " + userRole;
    }
}


class AccessControlProxy implements SecureResource {
    private final SensitiveDocument document;


    public AccessControlProxy(SensitiveDocument document) {
        this.document = document;
    }


    public String access(String userRole) {
        if (!"admin".equals(userRole)) {
            return "Access denied";
        }


        return document.access(userRole);
    }
}


SecureResource document = new AccessControlProxy(new SensitiveDocument());
System.out.println(document.access("guest"));
System.out.println(document.access("admin"));`,
    explanation:
      "The access control proxy verifies the caller role before allowing the sensitive document to be used.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class SecureResource(ABC):
    @abstractmethod
    def access(self, user_role: str) -> str:
        pass


class SensitiveDocument(SecureResource):
    def access(self, user_role: str) -> str:
        return f"Sensitive document opened for {user_role}"


class AccessControlProxy(SecureResource):
    def __init__(self, document: SensitiveDocument) -> None:
        self.document = document


    def access(self, user_role: str) -> str:
        if user_role != "admin":
            return "Access denied"
        return self.document.access(user_role)


document = AccessControlProxy(SensitiveDocument())
print(document.access("guest"))
print(document.access("admin"))`,
    explanation:
      "The access control proxy prevents unauthorized users from reaching the sensitive resource directly.",
  },
  {
    language: "Angular",
    code: `interface SecureResource {
  access(userRole: string): string;
}


class SensitiveDocument implements SecureResource {
  access(userRole: string): string {
    return \`Sensitive document opened for \${userRole}\`;
  }
}


class AccessControlProxy implements SecureResource {
  constructor(private document: SensitiveDocument) {}


  access(userRole: string): string {
    if (userRole !== "admin") {
      return "Access denied";
    }


    return this.document.access(userRole);
  }
}


const document = new AccessControlProxy(new SensitiveDocument());
console.log(document.access("guest"));
console.log(document.access("admin"));`,
    explanation:
      "The Angular example uses a proxy to apply permission checks before sensitive data is exposed to the user.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface SecureResource {
  access(userRole: string): string;
}


class SensitiveDocument implements SecureResource {
  access(userRole: string): string {
    return \`Sensitive document opened for \${userRole}\`;
  }
}


class AccessControlProxy implements SecureResource {
  constructor(private document: SensitiveDocument) {}


  access(userRole: string): string {
    if (userRole !== "admin") {
      return "Access denied";
    }


    return this.document.access(userRole);
  }
}


function DocumentPreview({ resource }: { resource: SecureResource }) {
  return <p>{resource.access("admin")}</p>;
}


export function App() {
  const resource = useMemo(() => new AccessControlProxy(new SensitiveDocument()), []);


  return (
    <main>
      <h1>Access Control Proxy</h1>
      <DocumentPreview resource={resource} />
    </main>
  );
}`,
    explanation:
      "The React example keeps access control inside the proxy so the UI can request protected content without handling authorization directly.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface SecureResource {
  access(userRole: string): string;
}


class SensitiveDocument implements SecureResource {
  access(userRole: string): string {
    return \`Sensitive document opened for \${userRole}\`;
  }
}


class AccessControlProxy implements SecureResource {
  constructor(private document: SensitiveDocument) {}


  access(userRole: string): string {
    if (userRole !== "admin") {
      return "Access denied";
    }


    return this.document.access(userRole);
  }
}


function DocumentPreview({ resource }: { resource: SecureResource }) {
  return (
    <View>
      <Text>{resource.access("admin")}</Text>
    </View>
  );
}


export function App() {
  const resource = useMemo(() => new AccessControlProxy(new SensitiveDocument()), []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Access Control Proxy</Text>
        <DocumentPreview resource={resource} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the proxy to guard sensitive content before the mobile UI displays it.",
  },
  {
    language: "C#",
    code: `using System;


public interface ISecureResource
{
    string Access(string userRole);
}


public class SensitiveDocument : ISecureResource
{
    public string Access(string userRole)
    {
        return $"Sensitive document opened for {userRole}";
    }
}


public class AccessControlProxy : ISecureResource
{
    private readonly SensitiveDocument _document;


    public AccessControlProxy(SensitiveDocument document)
    {
        _document = document;
    }


    public string Access(string userRole)
    {
        if (userRole != "admin")
        {
            return "Access denied";
        }


        return _document.Access(userRole);
    }
}


var document = new AccessControlProxy(new SensitiveDocument());
Console.WriteLine(document.Access("guest"));
Console.WriteLine(document.Access("admin"));`,
    explanation:
      "The C# access control proxy checks authorization before the protected document is reached.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface ISecureResource
{
    string Access(string userRole);
}


public class SensitiveDocument : ISecureResource
{
    public string Access(string userRole)
    {
        return $"Sensitive document opened for {userRole}";
    }
}


public class AccessControlProxy : ISecureResource
{
    private readonly SensitiveDocument _document;


    public AccessControlProxy(SensitiveDocument document)
    {
        _document = document;
    }


    public string Access(string userRole)
    {
        if (userRole != "admin")
        {
            return "Access denied";
        }


        return _document.Access(userRole);
    }
}


var services = new ServiceCollection();
services.AddSingleton<ISecureResource>(new AccessControlProxy(new SensitiveDocument()));


var provider = services.BuildServiceProvider();
var resource = provider.GetRequiredService<ISecureResource>();

Console.WriteLine(resource.Access("guest"));
Console.WriteLine(resource.Access("admin"));`,
    explanation:
      "The .NET example uses a proxy registered in dependency injection to enforce access control before the real object is used.",
  },
];

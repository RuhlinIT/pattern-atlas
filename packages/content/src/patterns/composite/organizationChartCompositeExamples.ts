import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const organizationChartCompositeExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface OrgComponent {
  describe(indent?: number): string;
}


class Employee implements OrgComponent {
  constructor(private name: string, private role: string) {}


  describe(indent = 0): string {
    return \`\${" ".repeat(indent)}\${this.name} - \${this.role}\`;
  }
}


class Manager implements OrgComponent {
  private children: OrgComponent[] = [];


  constructor(private name: string, private role: string) {}


  add(component: OrgComponent): void {
    this.children.push(component);
  }


  describe(indent = 0): string {
    const lines = [\`\${" ".repeat(indent)}\${this.name} - \${this.role}\`];
    for (const child of this.children) {
      lines.push(child.describe(indent + 2));
    }
    return lines.join("\\n");
  }
}


const director = new Manager("Ava", "Director");
director.add(new Employee("Ben", "Developer"));
director.add(new Employee("Cara", "Designer"));


const lead = new Manager("Dana", "Team Lead");
lead.add(new Employee("Eli", "QA Engineer"));
director.add(lead);


console.log(director.describe());`,
    explanation:
      "The organization chart composite treats employees and managers through one interface so the hierarchy can be traversed recursively.",
  },
  {
    language: "Java",
    code: `interface OrgComponent {
    String describe(int indent);
}


class Employee implements OrgComponent {
    private final String name;
    private final String role;


    public Employee(String name, String role) {
        this.name = name;
        this.role = role;
    }


    public String describe(int indent) {
        return " ".repeat(indent) + name + " - " + role;
    }
}


class Manager implements OrgComponent {
    private final String name;
    private final String role;
    private final java.util.List<OrgComponent> children = new java.util.ArrayList<>();


    public Manager(String name, String role) {
        this.name = name;
        this.role = role;
    }


    public void add(OrgComponent component) {
        children.add(component);
    }


    public String describe(int indent) {
        StringBuilder builder = new StringBuilder();
        builder.append(" ".repeat(indent)).append(name).append(" - ").append(role);
        for (OrgComponent child : children) {
            builder.append("\\n").append(child.describe(indent + 2));
        }
        return builder.toString();
    }
}


Manager director = new Manager("Ava", "Director");
director.add(new Employee("Ben", "Developer"));
director.add(new Employee("Cara", "Designer"));


Manager lead = new Manager("Dana", "Team Lead");
lead.add(new Employee("Eli", "QA Engineer"));
director.add(lead);


System.out.println(director.describe(0));`,
    explanation:
      "The organization chart composite lets managers contain both employees and other managers while exposing one common API.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class OrgComponent(ABC):
    @abstractmethod
    def describe(self, indent: int = 0) -> str:
        pass


class Employee(OrgComponent):
    def __init__(self, name: str, role: str) -> None:
        self.name = name
        self.role = role


    def describe(self, indent: int = 0) -> str:
        return f"{' ' * indent}{self.name} - {self.role}"


class Manager(OrgComponent):
    def __init__(self, name: str, role: str) -> None:
        self.name = name
        self.role = role
        self.children: list[OrgComponent] = []


    def add(self, component: OrgComponent) -> None:
        self.children.append(component)


    def describe(self, indent: int = 0) -> str:
        lines = [f"{' ' * indent}{self.name} - {self.role}"]
        for child in self.children:
            lines.append(child.describe(indent + 2))
        return "\\n".join(lines)


director = Manager("Ava", "Director")
director.add(Employee("Ben", "Developer"))
director.add(Employee("Cara", "Designer"))


lead = Manager("Dana", "Team Lead")
lead.add(Employee("Eli", "QA Engineer"))
director.add(lead)


print(director.describe())`,
    explanation:
      "The organization chart composite handles nested managers and employees with the same interface, which makes tree traversal natural.",
  },
  {
    language: "Angular",
    code: `interface OrgComponent {
  describe(indent?: number): string;
}


class Employee implements OrgComponent {
  constructor(private name: string, private role: string) {}


  describe(indent = 0): string {
    return \`\${" ".repeat(indent)}\${this.name} - \${this.role}\`;
  }
}


class Manager implements OrgComponent {
  private children: OrgComponent[] = [];


  constructor(private name: string, private role: string) {}


  add(component: OrgComponent): void {
    this.children.push(component);
  }


  describe(indent = 0): string {
    const lines = [\`\${" ".repeat(indent)}\${this.name} - \${this.role}\`];
    for (const child of this.children) {
      lines.push(child.describe(indent + 2));
    }
    return lines.join("\\n");
  }
}


const director = new Manager("Ava", "Director");
director.add(new Employee("Ben", "Developer"));
director.add(new Employee("Cara", "Designer"));


const lead = new Manager("Dana", "Team Lead");
lead.add(new Employee("Eli", "QA Engineer"));
director.add(lead);


console.log(director.describe());`,
    explanation:
      "The Angular example uses a composite organization chart so managers and employees can be represented through one recursive structure.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface OrgComponent {
  describe(indent?: number): string;
}


class Employee implements OrgComponent {
  constructor(private name: string, private role: string) {}


  describe(indent = 0): string {
    return \`\${" ".repeat(indent)}\${this.name} - \${this.role}\`;
  }
}


class Manager implements OrgComponent {
  private children: OrgComponent[] = [];


  constructor(private name: string, private role: string) {}


  add(component: OrgComponent): void {
    this.children.push(component);
  }


  describe(indent = 0): string {
    const lines = [\`\${" ".repeat(indent)}\${this.name} - \${this.role}\`];
    for (const child of this.children) {
      lines.push(child.describe(indent + 2));
    }
    return lines.join("\\n");
  }
}


function OrgPreview({ component }: { component: OrgComponent }) {
  return <pre>{component.describe()}</pre>;
}


export function App() {
  const org = useMemo(() => {
    const director = new Manager("Ava", "Director");
    director.add(new Employee("Ben", "Developer"));
    director.add(new Employee("Cara", "Designer"));


    const lead = new Manager("Dana", "Team Lead");
    lead.add(new Employee("Eli", "QA Engineer"));
    director.add(lead);


    return director;
  }, []);


  return (
    <main>
      <h1>Organization Chart Composite</h1>
      <OrgPreview component={org} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the organization chart recursive so the UI can render the hierarchy using the same component contract.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface OrgComponent {
  describe(indent?: number): string;
}


class Employee implements OrgComponent {
  constructor(private name: string, private role: string) {}


  describe(indent = 0): string {
    return \`\${" ".repeat(indent)}\${this.name} - \${this.role}\`;
  }
}


class Manager implements OrgComponent {
  private children: OrgComponent[] = [];


  constructor(private name: string, private role: string) {}


  add(component: OrgComponent): void {
    this.children.push(component);
  }


  describe(indent = 0): string {
    const lines = [\`\${" ".repeat(indent)}\${this.name} - \${this.role}\`];
    for (const child of this.children) {
      lines.push(child.describe(indent + 2));
    }
    return lines.join("\\n");
  }
}


function OrgPreview({ component }: { component: OrgComponent }) {
  return (
    <View>
      <Text style={{ fontFamily: "Courier" }}>{component.describe()}</Text>
    </View>
  );
}


export function App() {
  const org = useMemo(() => {
    const director = new Manager("Ava", "Director");
    director.add(new Employee("Ben", "Developer"));
    director.add(new Employee("Cara", "Designer"));


    const lead = new Manager("Dana", "Team Lead");
    lead.add(new Employee("Eli", "QA Engineer"));
    director.add(lead);


    return director;
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Organization Chart Composite</Text>
        <OrgPreview component={org} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example renders the same recursive organization chart structure in a mobile-friendly layout.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;
using System.Linq;


public interface IOrgComponent
{
    string Describe(int indent = 0);
}


public class Employee : IOrgComponent
{
    private readonly string _name;
    private readonly string _role;


    public Employee(string name, string role)
    {
        _name = name;
        _role = role;
    }


    public string Describe(int indent = 0)
    {
        return $"{new string(' ', indent)}{_name} - {_role}";
    }
}


public class Manager : IOrgComponent
{
    private readonly string _name;
    private readonly string _role;
    private readonly List<IOrgComponent> _children = new List<IOrgComponent>();


    public Manager(string name, string role)
    {
        _name = name;
        _role = role;
    }


    public void Add(IOrgComponent component)
    {
        _children.Add(component);
    }


    public string Describe(int indent = 0)
    {
        var lines = new List<string> { $"{new string(' ', indent)}{_name} - {_role}" };
        foreach (var child in _children)
        {
            lines.Add(child.Describe(indent + 2));
        }
        return string.Join(Environment.NewLine, lines);
    }
}


var director = new Manager("Ava", "Director");
director.Add(new Employee("Ben", "Developer"));
director.Add(new Employee("Cara", "Designer"));


var lead = new Manager("Dana", "Team Lead");
lead.Add(new Employee("Eli", "QA Engineer"));
director.Add(lead);


Console.WriteLine(director.Describe());`,
    explanation:
      "The C# organization chart composite keeps managers and employees under one recursive interface so the hierarchy is easy to traverse.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public interface IOrgComponent
{
    string Describe(int indent = 0);
}


public class Employee : IOrgComponent
{
    private readonly string _name;
    private readonly string _role;


    public Employee(string name, string role)
    {
        _name = name;
        _role = role;
    }


    public string Describe(int indent = 0)
    {
        return $"{new string(' ', indent)}{_name} - {_role}";
    }
}


public class Manager : IOrgComponent
{
    private readonly string _name;
    private readonly string _role;
    private readonly List<IOrgComponent> _children = new List<IOrgComponent>();


    public Manager(string name, string role)
    {
        _name = name;
        _role = role;
    }


    public void Add(IOrgComponent component)
    {
        _children.Add(component);
    }


    public string Describe(int indent = 0)
    {
        var lines = new List<string> { $"{new string(' ', indent)}{_name} - {_role}" };
        foreach (var child in _children)
        {
            lines.Add(child.Describe(indent + 2));
        }
        return string.Join(Environment.NewLine, lines);
    }
}


var services = new ServiceCollection();
services.AddSingleton(new Manager("Ava", "Director"));


var provider = services.BuildServiceProvider();
var director = provider.GetRequiredService<Manager>();
director.Add(new Employee("Ben", "Developer"));
director.Add(new Employee("Cara", "Designer"));


var lead = new Manager("Dana", "Team Lead");
lead.Add(new Employee("Eli", "QA Engineer"));
director.Add(lead);


Console.WriteLine(director.Describe());`,
    explanation:
      "The .NET example uses the same composite structure so an organization tree can be built and traversed consistently.",
  },
];

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const menuCompositeExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface MenuItem {
  render(): string;
}


class LeafMenuItem implements MenuItem {
  constructor(private label: string) {}


  render(): string {
    return this.label;
  }
}


class MenuGroup implements MenuItem {
  private children: MenuItem[] = [];


  constructor(private label: string) {}


  add(item: MenuItem): void {
    this.children.push(item);
  }


  render(): string {
    return \`\${this.label}: [\${this.children.map((child) => child.render()).join(", ")}]\`;
  }
}


const fileMenu = new MenuGroup("File");
fileMenu.add(new LeafMenuItem("New"));
fileMenu.add(new LeafMenuItem("Open"));


const recentMenu = new MenuGroup("Recent");
recentMenu.add(new LeafMenuItem("Project A"));
recentMenu.add(new LeafMenuItem("Project B"));
fileMenu.add(recentMenu);


console.log(fileMenu.render());`,
    explanation:
      "The menu composite lets menu items and submenus share one interface so the UI can render nested menus consistently.",
  },
  {
    language: "Java",
    code: `interface MenuItem {
    String render();
}


class LeafMenuItem implements MenuItem {
    private final String label;


    public LeafMenuItem(String label) {
        this.label = label;
    }


    public String render() {
        return label;
    }
}


class MenuGroup implements MenuItem {
    private final String label;
    private final java.util.List<MenuItem> children = new java.util.ArrayList<>();


    public MenuGroup(String label) {
        this.label = label;
    }


    public void add(MenuItem item) {
        children.add(item);
    }


    public String render() {
        java.util.List<String> rendered = children.stream().map(MenuItem::render).toList();
        return label + ": [" + String.join(", ", rendered) + "]";
    }
}


MenuGroup fileMenu = new MenuGroup("File");
fileMenu.add(new LeafMenuItem("New"));
fileMenu.add(new LeafMenuItem("Open"));


MenuGroup recentMenu = new MenuGroup("Recent");
recentMenu.add(new LeafMenuItem("Project A"));
recentMenu.add(new LeafMenuItem("Project B"));
fileMenu.add(recentMenu);


System.out.println(fileMenu.render());`,
    explanation:
      "The menu composite handles submenus and leaf items through the same contract, which keeps nested menu rendering simple.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class MenuItem(ABC):
    @abstractmethod
    def render(self) -> str:
        pass


class LeafMenuItem(MenuItem):
    def __init__(self, label: str) -> None:
        self.label = label


    def render(self) -> str:
        return self.label


class MenuGroup(MenuItem):
    def __init__(self, label: str) -> None:
        self.label = label
        self.children: list[MenuItem] = []


    def add(self, item: MenuItem) -> None:
        self.children.append(item)


    def render(self) -> str:
        return f"{self.label}: [{', '.join(child.render() for child in self.children)}]"


file_menu = MenuGroup("File")
file_menu.add(LeafMenuItem("New"))
file_menu.add(LeafMenuItem("Open"))


recent_menu = MenuGroup("Recent")
recent_menu.add(LeafMenuItem("Project A"))
recent_menu.add(LeafMenuItem("Project B"))
file_menu.add(recent_menu)


print(file_menu.render())`,
    explanation:
      "The menu composite lets the app treat single items and grouped submenus the same way while still supporting nesting.",
  },
  {
    language: "Angular",
    code: `interface MenuItem {
  render(): string;
}


class LeafMenuItem implements MenuItem {
  constructor(private label: string) {}


  render(): string {
    return this.label;
  }
}


class MenuGroup implements MenuItem {
  private children: MenuItem[] = [];


  constructor(private label: string) {}


  add(item: MenuItem): void {
    this.children.push(item);
  }


  render(): string {
    return \`\${this.label}: [\${this.children.map((child) => child.render()).join(", ")}]\`;
  }
}


const fileMenu = new MenuGroup("File");
fileMenu.add(new LeafMenuItem("New"));
fileMenu.add(new LeafMenuItem("Open"));


const recentMenu = new MenuGroup("Recent");
recentMenu.add(new LeafMenuItem("Project A"));
recentMenu.add(new LeafMenuItem("Project B"));
fileMenu.add(recentMenu);


console.log(fileMenu.render());`,
    explanation:
      "The Angular example uses the composite pattern so nested menus can be built and rendered with the same interface.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface MenuItem {
  render(): string;
}


class LeafMenuItem implements MenuItem {
  constructor(private label: string) {}


  render(): string {
    return this.label;
  }
}


class MenuGroup implements MenuItem {
  private children: MenuItem[] = [];


  constructor(private label: string) {}


  add(item: MenuItem): void {
    this.children.push(item);
  }


  render(): string {
    return \`\${this.label}: [\${this.children.map((child) => child.render()).join(", ")}]\`;
  }
}


function MenuPreview({ menu }: { menu: MenuItem }) {
  return <p>{menu.render()}</p>;
}


export function App() {
  const menu = useMemo(() => {
    const fileMenu = new MenuGroup("File");
    fileMenu.add(new LeafMenuItem("New"));
    fileMenu.add(new LeafMenuItem("Open"));


    const recentMenu = new MenuGroup("Recent");
    recentMenu.add(new LeafMenuItem("Project A"));
    recentMenu.add(new LeafMenuItem("Project B"));
    fileMenu.add(recentMenu);


    return fileMenu;
  }, []);


  return (
    <main>
      <h1>Menu Composite</h1>
      <MenuPreview menu={menu} />
    </main>
  );
}`,
    explanation:
      "The React example treats menu items and submenus through one composite interface, which makes recursive UI rendering straightforward.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface MenuItem {
  render(): string;
}


class LeafMenuItem implements MenuItem {
  constructor(private label: string) {}


  render(): string {
    return this.label;
  }
}


class MenuGroup implements MenuItem {
  private children: MenuItem[] = [];


  constructor(private label: string) {}


  add(item: MenuItem): void {
    this.children.push(item);
  }


  render(): string {
    return \`\${this.label}: [\${this.children.map((child) => child.render()).join(", ")}]\`;
  }
}


function MenuPreview({ menu }: { menu: MenuItem }) {
  return (
    <View>
      <Text>{menu.render()}</Text>
    </View>
  );
}


export function App() {
  const menu = useMemo(() => {
    const fileMenu = new MenuGroup("File");
    fileMenu.add(new LeafMenuItem("New"));
    fileMenu.add(new LeafMenuItem("Open"));


    const recentMenu = new MenuGroup("Recent");
    recentMenu.add(new LeafMenuItem("Project A"));
    recentMenu.add(new LeafMenuItem("Project B"));
    fileMenu.add(recentMenu);


    return fileMenu;
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Menu Composite</Text>
        <MenuPreview menu={menu} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same composite structure so nested menus can be represented and displayed cleanly on mobile.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;
using System.Linq;


public interface IMenuItem
{
    string Render();
}


public class LeafMenuItem : IMenuItem
{
    private readonly string _label;


    public LeafMenuItem(string label)
    {
        _label = label;
    }


    public string Render()
    {
        return _label;
    }
}


public class MenuGroup : IMenuItem
{
    private readonly string _label;
    private readonly List<IMenuItem> _children = new List<IMenuItem>();


    public MenuGroup(string label)
    {
        _label = label;
    }


    public void Add(IMenuItem item)
    {
        _children.Add(item);
    }


    public string Render()
    {
        return $"{_label}: [{string.Join(", ", _children.Select(child => child.Render()))}]";
    }
}


var fileMenu = new MenuGroup("File");
fileMenu.Add(new LeafMenuItem("New"));
fileMenu.Add(new LeafMenuItem("Open"));


var recentMenu = new MenuGroup("Recent");
recentMenu.Add(new LeafMenuItem("Project A"));
recentMenu.Add(new LeafMenuItem("Project B"));
fileMenu.Add(recentMenu);


Console.WriteLine(fileMenu.Render());`,
    explanation:
      "The C# menu composite lets the app work with submenu groups and leaf items through the same interface.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;


public interface IMenuItem
{
    string Render();
}


public class LeafMenuItem : IMenuItem
{
    private readonly string _label;


    public LeafMenuItem(string label)
    {
        _label = label;
    }


    public string Render()
    {
        return _label;
    }
}


public class MenuGroup : IMenuItem
{
    private readonly string _label;
    private readonly List<IMenuItem> _children = new List<IMenuItem>();


    public MenuGroup(string label)
    {
        _label = label;
    }


    public void Add(IMenuItem item)
    {
        _children.Add(item);
    }


    public string Render()
    {
        return $"{_label}: [{string.Join(", ", _children.Select(child => child.Render()))}]";
    }
}


var services = new ServiceCollection();
services.AddSingleton(new MenuGroup("File"));


var provider = services.BuildServiceProvider();
var fileMenu = provider.GetRequiredService<MenuGroup>();
fileMenu.Add(new LeafMenuItem("New"));
fileMenu.Add(new LeafMenuItem("Open"));


var recentMenu = new MenuGroup("Recent");
recentMenu.Add(new LeafMenuItem("Project A"));
recentMenu.Add(new LeafMenuItem("Project B"));
fileMenu.Add(recentMenu);


Console.WriteLine(fileMenu.Render());`,
    explanation:
      "The .NET example uses a composite menu structure so nested menus can be managed and rendered uniformly.",
  },
];

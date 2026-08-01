import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Menu composite",
  code: "interface MenuItem {\n    String render();\n}\n\n\nclass LeafMenuItem implements MenuItem {\n    private final String label;\n\n\n    public LeafMenuItem(String label) {\n        this.label = label;\n    }\n\n\n    public String render() {\n        return label;\n    }\n}\n\n\nclass MenuGroup implements MenuItem {\n    private final String label;\n    private final java.util.List<MenuItem> children = new java.util.ArrayList<>();\n\n\n    public MenuGroup(String label) {\n        this.label = label;\n    }\n\n\n    public void add(MenuItem item) {\n        children.add(item);\n    }\n\n\n    public String render() {\n        java.util.List<String> rendered = children.stream().map(MenuItem::render).toList();\n        return label + \": [\" + String.join(\", \", rendered) + \"]\";\n    }\n}\n\n\nMenuGroup fileMenu = new MenuGroup(\"File\");\nfileMenu.add(new LeafMenuItem(\"New\"));\nfileMenu.add(new LeafMenuItem(\"Open\"));\n\n\nMenuGroup recentMenu = new MenuGroup(\"Recent\");\nrecentMenu.add(new LeafMenuItem(\"Project A\"));\nrecentMenu.add(new LeafMenuItem(\"Project B\"));\nfileMenu.add(recentMenu);\n\n\nSystem.out.println(fileMenu.render());",
  explanation: "The menu composite handles submenus and leaf items through the same contract, which keeps nested menu rendering simple.",
};

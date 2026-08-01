import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Application config singleton",
  code: "import React, { useMemo } from \"react\";\n\n\nclass AppConfig {\n  private static instance: AppConfig;\n\n\n  private constructor(\n    public readonly appName: string,\n    public readonly environment: string,\n  ) {}\n\n\n  static getInstance(): AppConfig {\n    if (!AppConfig.instance) {\n      AppConfig.instance = new AppConfig(\"Atlas App\", \"production\");\n    }\n\n\n    return AppConfig.instance;\n  }\n}\n\n\nfunction ConfigPreview() {\n  const config = useMemo(() => AppConfig.getInstance(), []);\n\n\n  return (\n    <div>\n      <p>{config.appName}</p>\n      <p>{config.environment}</p>\n    </div>\n  );\n}\n\n\nexport function App() {\n  return (\n    <main>\n      <h1>Application Config</h1>\n      <ConfigPreview />\n    </main>\n  );\n}",
  explanation: "The React example accesses one shared config instance so components can read the same environment values without re-creating the object.",
};

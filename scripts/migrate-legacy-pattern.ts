import fs from "node:fs";
import path from "node:path";
import { readLegacyExport } from "./read-legacy-export";

type LegacyScenarioExample = {
  language: string;
  code: string;
  explanation?: string;
};

type LegacyScenario = {
  slug: string;
  title: string;
  summary: string;
  languageExamples?: LegacyScenarioExample[];
};

type LegacyPattern = {
  slug: string;
  name: string;
  category: string;
  summary?: string;
  intent?: string;
  problem?: string;
  tradeoffs?: string[];
  languages?: string[];
  platforms?: string[];
  integrationNotes?: string;
  scenarios?: LegacyScenario[];
  realWorldExamples?: { title: string; description: string }[];
};

function normalizeLanguage(language: string): string {
  const map: Record<string, string> = {
    TypeScript: "typescript",
    JavaScript: "javascript",
    JSX: "jsx",
    TSX: "tsx",
    Python: "python",
    Java: "java",
    "C#": "csharp",
    ".NET": "dotnet",
    Angular: "angular",
    React: "react",
    React_Native: "react-native",
    "React Native": "react-native",
  };
  return map[language] ?? language.toLowerCase();
}

function pascalCase(input: string) {
  return input
    .split(/[-_\s]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function camelCase(input: string) {
  const p = pascalCase(input);
  return p.charAt(0).toLowerCase() + p.slice(1);
}

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFileIfMissing(filePath: string, content: string) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, "utf8");
  }
}

const rootDir = process.cwd();
const legacyFile = process.argv[2];
const exportNameArg = process.argv[3];

if (!legacyFile) {
  console.error(
    "Usage: pnpm migrate:pattern <path-to-legacy-pattern-file> [exportName]",
  );
  process.exit(1);
}

const legacyPath = path.isAbsolute(legacyFile)
  ? legacyFile
  : path.join(rootDir, legacyFile);

if (!fs.existsSync(legacyPath)) {
  throw new Error(`Legacy file not found: ${legacyPath}`);
}

const fileStem = path.basename(legacyPath, path.extname(legacyPath));
const legacy = readLegacyExport(legacyPath, [
  exportNameArg ?? "",
  "legacyPattern",
  "pattern",
  fileStem,
].filter(Boolean)) as LegacyPattern;

if (!legacy.slug || !legacy.name || !legacy.category) {
  throw new Error("Legacy pattern is missing required fields");
}

const patternDir = path.join(
  rootDir,
  "packages/content/src/patterns",
  legacy.slug,
);

ensureDir(patternDir);
ensureDir(path.join(patternDir, "examples"));

const scenarioExportNames = new Map<string, string>();

for (const scenario of legacy.scenarios ?? []) {
  const scenarioDir = path.join(patternDir, "examples", scenario.slug);
  ensureDir(scenarioDir);

  const examples = scenario.languageExamples ?? [];
  const normalized = examples.map((example) => ({
    ...example,
    language: normalizeLanguage(example.language),
  }));

  for (const ex of normalized) {
    const fileName = `${ex.language}.ts`;
    const exportConst = ex.language === "react-native" ? "reactNative" : ex.language;
    writeFileIfMissing(
      path.join(scenarioDir, fileName),
      `import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const ${exportConst}: PatternLanguageExample = {
  language: ${JSON.stringify(ex.language)},
  title: ${JSON.stringify(scenario.title)},
  code: ${JSON.stringify(ex.code, null, 2)},
  explanation: ${JSON.stringify(ex.explanation ?? "")},
};
`,
    );
  }

  const scenarioExportName = `${camelCase(scenario.slug)}Examples`;
  scenarioExportNames.set(scenario.slug, scenarioExportName);

  writeFileIfMissing(
    path.join(scenarioDir, "index.ts"),
    `import { normalizeExamples } from "../../normalize-examples";

${normalized
  .map((ex) => {
    const importConst = ex.language === "react-native" ? "reactNative" : ex.language;
    return `import { ${importConst} } from "./${ex.language}";`;
  })
  .join("\n")}

export const ${scenarioExportName} = normalizeExamples({
${normalized
  .map((ex) => {
    const importConst = ex.language === "react-native" ? "reactNative" : ex.language;
    return `  ${JSON.stringify(ex.language)}: ${importConst},`;
  })
  .join("\n")}
});
`,
  );
}

writeFileIfMissing(
  path.join(patternDir, "meta.ts"),
  `import type { PatternMeta } from "@atlas-patterns/schemas";

export const meta: PatternMeta = {
  slug: ${JSON.stringify(legacy.slug)},
  name: ${JSON.stringify(legacy.name)},
  category: ${JSON.stringify(String(legacy.category).toLowerCase())},
  summary: ${JSON.stringify(legacy.summary ?? "")},
  intent: ${JSON.stringify(legacy.intent ?? "")},
  difficulty: "intermediate",
  tags: [],
  languages: ${JSON.stringify(
    Array.from(
      new Set((legacy.languages ?? []).map((l) => normalizeLanguage(l))),
    ),
    null,
    2,
  )},
};
`,
);

writeFileIfMissing(
  path.join(patternDir, "scenarios.ts"),
  `import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = ${JSON.stringify(
    (legacy.scenarios ?? []).map((scenario) => ({
      slug: scenario.slug,
      title: scenario.title,
      summary: scenario.summary,
    })),
    null,
    2,
  )};
`,
);

writeFileIfMissing(
  path.join(patternDir, "index.ts"),
  `import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

${[...scenarioExportNames.entries()]
  .map(
    ([slug, exportName]) =>
      `import { ${exportName} } from "./examples/${slug}";`,
  )
  .join("\n")}

export const ${camelCase(legacy.slug)}Pattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
${[...scenarioExportNames.entries()]
  .map(([slug, exportName]) => `    ${JSON.stringify(slug)}: ${exportName},`)
  .join("\n")}
  },
  realWorldExamples: ${JSON.stringify(legacy.realWorldExamples ?? [], null, 2)},
  tradeoffs: ${JSON.stringify(legacy.tradeoffs ?? [], null, 2)},
  platforms: ${JSON.stringify(legacy.platforms ?? [], null, 2)},
  integrationNotes: ${JSON.stringify(legacy.integrationNotes ?? "")},
  problem: ${JSON.stringify(legacy.problem ?? "")},
};
`,
);

console.log(`Migrated ${legacy.slug} from ${legacyPath}`);
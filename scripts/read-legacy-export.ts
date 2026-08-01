import path from "node:path";
import ts from "typescript";
import { parseJsonLikeNode, type JsonValue } from "./parse-json-like-node";

function createProgramForFile(filePath: string) {
  const configPath = ts.findConfigFile(
    path.dirname(filePath),
    ts.sys.fileExists,
    "tsconfig.json",
  );

  if (!configPath) {
    throw new Error(`Could not find tsconfig.json for ${filePath}`);
  }

  const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
  if (configFile.error) {
    throw new Error(ts.flattenDiagnosticMessageText(configFile.error.messageText, "\n"));
  }

  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(configPath),
  );

  const rootNames = Array.from(new Set([...parsed.fileNames, path.resolve(filePath)]));

  return ts.createProgram({
    rootNames,
    options: parsed.options,
  });
}

export function readLegacyExport(
  filePath: string,
  exportNames: string[],
): JsonValue {
  const program = createProgramForFile(filePath);
  const sourceFile = program.getSourceFile(path.resolve(filePath));

  if (!sourceFile) {
    throw new Error(`Could not load source file: ${filePath}`);
  }

  const checker = program.getTypeChecker();

  for (const exportName of exportNames) {
    for (const stmt of sourceFile.statements) {
      if (!ts.isVariableStatement(stmt)) continue;
      if (!stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) {
        continue;
      }

      for (const decl of stmt.declarationList.declarations) {
        if (
          ts.isIdentifier(decl.name) &&
          decl.name.text === exportName &&
          decl.initializer
        ) {
          return parseJsonLikeNode(decl.initializer, sourceFile, checker, new Set());
        }
      }
    }
  }

  throw new Error(
    `Could not find any of these exports in ${filePath}: ${exportNames.join(", ")}`,
  );
}
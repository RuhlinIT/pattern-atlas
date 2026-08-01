import path from "node:path";
import ts from "typescript";
import { parseJsonLikeNode, type JsonValue } from "./parse-json-like-node";

function getProjectConfig(filePath: string) {
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
    throw new Error(
      ts.flattenDiagnosticMessageText(configFile.error.messageText, "\n"),
    );
  }

  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(configPath),
  );

  return {
    configPath,
    options: parsed.options,
    fileNames: parsed.fileNames,
  };
}

function createProgramForFile(filePath: string) {
  const { options, fileNames } = getProjectConfig(filePath);

  const rootNames = Array.from(
    new Set([...fileNames, path.resolve(filePath)]),
  );

  return ts.createProgram({
    rootNames,
    options,
  });
}

function findExportedVariableInitializer(
  sourceFile: ts.SourceFile,
  exportNames: string[],
): ts.Expression | undefined {
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
          return decl.initializer;
        }
      }
    }
  }

  return undefined;
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
  const initializer = findExportedVariableInitializer(sourceFile, exportNames);

  if (!initializer) {
    throw new Error(
      `Could not find any of these exports in ${filePath}: ${exportNames.join(", ")}`,
    );
  }

  return parseJsonLikeNode(initializer, sourceFile, checker, new Set());
}
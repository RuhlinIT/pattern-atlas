import ts from "typescript";

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

function resolveDeclarationInitializer(
  symbol: ts.Symbol,
  checker: ts.TypeChecker,
  visited = new Set<string>(),
): ts.Expression | undefined {
  const key = checker.getFullyQualifiedName(symbol);
  if (visited.has(key)) return undefined;
  visited.add(key);

  const target =
    symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;

  for (const decl of target.declarations ?? []) {
    if (ts.isVariableDeclaration(decl) && decl.initializer) {
      return decl.initializer;
    }

    if (ts.isBindingElement(decl) && decl.name && ts.isIdentifier(decl.name)) {
      const nested = checker.getSymbolAtLocation(decl.name);
      if (nested) {
        const init = resolveDeclarationInitializer(nested, checker, visited);
        if (init) return init;
      }
    }

    if (ts.isExportSpecifier(decl)) {
      const local = checker.getSymbolAtLocation(decl.propertyName ?? decl.name);
      if (local) {
        const init = resolveDeclarationInitializer(local, checker, visited);
        if (init) return init;
      }
    }

    if (ts.isImportSpecifier(decl) || ts.isNamespaceImport(decl) || ts.isImportClause(decl)) {
      const importId =
        ts.isImportSpecifier(decl)
          ? decl.name
          : ts.isNamespaceImport(decl)
            ? decl.name
            : decl.name;
      if (importId) {
        const imported = checker.getSymbolAtLocation(importId);
        if (imported) {
          const init = resolveDeclarationInitializer(imported, checker, visited);
          if (init) return init;
        }
      }
    }
  }

  return undefined;
}

function getInitializerFromIdentifier(
  id: ts.Identifier,
  checker: ts.TypeChecker,
): ts.Expression | undefined {
  const symbol = checker.getSymbolAtLocation(id);
  if (!symbol) return undefined;
  return resolveDeclarationInitializer(symbol, checker);
}

export function parseJsonLikeNode(
  node: ts.Node,
  sourceFile: ts.SourceFile,
  checker: ts.TypeChecker,
  seen = new Set<string>(),
): JsonValue {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }

  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;

  if (ts.isParenthesizedExpression(node)) {
    return parseJsonLikeNode(node.expression, sourceFile, checker, seen);
  }

  if (ts.isAsExpression(node) || ts.isTypeAssertionExpression(node)) {
    return parseJsonLikeNode(node.expression, sourceFile, checker, seen);
  }

  if (ts.isIdentifier(node)) {
    const key = `${sourceFile.fileName}:${node.text}`;
    if (seen.has(key)) {
      throw new Error(`Circular reference detected for ${node.text}`);
    }

    const initializer = getInitializerFromIdentifier(node, checker);
    if (!initializer) {
      throw new Error(
        `Unsupported identifier reference in ${sourceFile.fileName}: ${node.text}`,
      );
    }

    seen.add(key);
    return parseJsonLikeNode(initializer, sourceFile, checker, seen);
  }

  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.map((element) =>
      parseJsonLikeNode(element, sourceFile, checker, seen),
    );
  }

  if (ts.isObjectLiteralExpression(node)) {
    const result: Record<string, JsonValue> = {};

    for (const prop of node.properties) {
      if (!ts.isPropertyAssignment(prop)) {
        throw new Error(
          `Unsupported property kind in ${sourceFile.fileName}: ${ts.SyntaxKind[prop.kind]}`,
        );
      }

      const key =
        ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name)
          ? prop.name.text
          : undefined;

      if (!key) {
        throw new Error(
          `Unsupported object key in ${sourceFile.fileName}: ${prop.getText(sourceFile)}`,
        );
      }

      result[key] = parseJsonLikeNode(prop.initializer, sourceFile, checker, seen);
    }

    return result;
  }

  throw new Error(
    `Unsupported syntax in ${sourceFile.fileName}: ${ts.SyntaxKind[node.kind]}`,
  );
}
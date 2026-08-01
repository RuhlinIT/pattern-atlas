"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { prettyLanguageLabels } from "../../constants/languageLabels";
import styles from "./CodeBlock.module.css";

type CodeBlockProps = {
  code: string;
  language: string;
};

const syntaxLanguageMap: Record<string, string> = {
  typescript: "typescript",
  javascript: "javascript",
  tsx: "tsx",
  jsx: "jsx",
  python: "python",
  java: "java",
  go: "go",
  php: "php",
  csharp: "csharp",
  dotnet: "csharp",
  kotlin: "kotlin",
  react: "tsx",
  "react-native": "tsx",
  angular: "typescript",
};

function getDisplayLabel(language: string) {
  return prettyLanguageLabels[language as keyof typeof prettyLanguageLabels] ?? language;
}

function getSyntaxLanguage(language: string) {
  return syntaxLanguageMap[language] ?? "text";
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const displayLabel = getDisplayLabel(language);
  const syntaxLanguage = getSyntaxLanguage(language);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>{displayLabel}</span>
      </div>

      <SyntaxHighlighter
        language={syntaxLanguage}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "16px",
          background: "transparent",
          fontSize: "14px",
          lineHeight: 1.6,
          overflowX: "auto",
        }}
        codeTagProps={{
          className: styles.code,
        }}
        className={styles.pre}
        wrapLongLines={false}
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
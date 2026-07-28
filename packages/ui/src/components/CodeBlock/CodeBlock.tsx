"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./CodeBlock.module.css";

type CodeBlockProps = {
  code: string;
  language: string;
};

const languageMap: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  Python: "python",
  Java: "java",
  "C#": "csharp",
  PHP: "php",
  Go: "go",
  Kotlin: "kotlin",
};

function getSyntaxLanguage(language: string) {
  return languageMap[language] ?? "text";
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const syntaxLanguage = getSyntaxLanguage(language);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>{language}</span>
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
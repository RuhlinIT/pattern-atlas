"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { prettyLanguageLabels } from "../../constants/language-labels";
import styles from "./CodeBlock.module.css";

type CodeBlockProps = {
  code: string;
  language: string;
};

const syntaxLanguageMap: Record<string, string> = {
  // Core languages.
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

  // UI frameworks.
  react: "tsx",
  "react-native": "tsx",
  angular: "typescript",

  // JavaScript and TypeScript libraries.
  apollo: "graphql",
  graphql: "graphql",
  typeorm: "typescript",
  "d3-js": "typescript",
  "chart-js": "typescript",
  "apache-echarts": "typescript",
  tableau: "typescript",
  "microsoft-power-bi": "typescript",
  serverless: "typescript",
  "lang-chain": "typescript",
  "kafka-streams": "typescript",
  redpanda: "typescript",

  // Python libraries and platforms.
  matplotlib: "python",
  seaborn: "python",
  bokeh: "python",
  tensorflow: "python",
  pytorch: "python",
  "scikit-learn": "python",
  "hugging-face-transformers": "python",
  "apache-beam": "python",
  "google-cloud-dataflow": "python",

  // R libraries.
  r: "r",
  ggplot2: "r",
  plotly: "r",

  // Java platforms and libraries.
  "apache-kafka": "java",
  "apache-flink": "java",
  "apache-samza": "java",
  "apache-storm": "java",
  hibernate: "java",
  "amazon-kinesis-data-analytics": "java",
  salesforce: "java",


  // ColdFusion and Railo
  coldfusion: "cfscript",
  railo: "cfscript",

  // VBScript uses the Visual Basic grammar.
  activescript: "visual-basic",
  vbscript: "visual-basic",

  // Other languages and frameworks.
  cobol: "cobol",
  flash: "actionscript",
  actionscript: "actionscript",
  coffeescript: "coffeescript",
  livescript: "javascript",

  // Streaming and cloud platforms.
  jenkins: "text",
  "apache-spark-structured-streaming": "python",
  "azure-stream-analytics": "javascript",
  "apache-superset": "typescript",

  // Existing language support.
  cpp: "cpp",
  crystal: "crystal",
  dart: "dart",
  elixir: "elixir",
  erlang: "erlang",
  fortran: "fortran",
  groovy: "groovy",
  haskell: "haskell",
};

function getDisplayLabel(language: string): string {
  return (
    prettyLanguageLabels[
      language as keyof typeof prettyLanguageLabels
    ] ?? formatFallbackLabel(language)
  );
}

function formatFallbackLabel(language: string): string {
  return language
    .split("-")
    .map((part) =>
      part.length > 0
        ? part.charAt(0).toUpperCase() + part.slice(1)
        : part,
    )
    .join(" ");
}

function getSyntaxLanguage(language: string): string {
  return syntaxLanguageMap[language] ?? "text";
}

export function CodeBlock({
  code,
  language,
}: CodeBlockProps) {
  const displayLabel = getDisplayLabel(language);
  const syntaxLanguage = getSyntaxLanguage(language);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>
          {displayLabel}
        </span>
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
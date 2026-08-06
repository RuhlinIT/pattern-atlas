export type PatternLanguage =
  | "typescript"
  | "javascript"
  | "tsx"
  | "jsx"
  | "go"
  | "php"
  | "kotlin"
  | "python"
  | "java"
  | "csharp"
  | "dotnet"
  | "angular"
  | "react"
  | "react-native"
  | "apollo"
  | "graphql"
  | "typeorm"
  | "d3-js"
  | "chart-js"
  | "apache-echarts"
  | "tableau"
  | "microsoft-power-bi"
  | "serverless"
  | "lang-chain"
  | "kafka-streams"
  | "redpanda"
  | "matplotlib"
  | "seaborn"
  | "bokeh"
  | "tensorflow"
  | "pytorch"
  | "scikit-learn"
  | "hugging-face-transformers"
  | "apache-beam"
  | "google-cloud-dataflow"
  | "r"
  | "ggplot2"
  | "plotly"
  | "apache-kafka"
  | "apache-flink"
  | "apache-samza"
  | "apache-storm"
  | "hibernate"
  | "amazon-kinesis-data-analytics"
  | "coldfusion"
  | "railo"
  | "cobol"
  | "salesforce"
  | "flash"
  | "actionscript"
  | "activescript"
  | "vbscript"
  | "coffeescript"
  | "livescript"
  | "jenkins"
  | "apache-spark-structured-streaming"
  | "azure-stream-analytics"
  | "apache-superset"
  | "cpp"
  | "crystal"
  | "dart"
  | "elixir"
  | "erlang"
  | "fortran"
  | "groovy"
  | "haskell";

export type PrettyLanguageLabels = Partial<
  Record<PatternLanguage, string>
>;

export const prettyLanguageLabels: PrettyLanguageLabels =
  {
    typescript: "TypeScript",
    javascript: "JavaScript",
    tsx: "TSX",
    jsx: "JSX",
    python: "Python",
    java: "Java",
    go: "Go",
    php: "PHP",
    csharp: "C#",
    dotnet: ".NET",
    kotlin: "Kotlin",
    angular: "Angular",
    react: "React",
    "react-native": "React Native",

    apollo: "Apollo",
    graphql: "GraphQL",
    typeorm: "TypeORM",
    "d3-js": "D3.js",
    "chart-js": "Chart.js",
    "apache-echarts": "Apache ECharts",
    tableau: "Tableau",
    "microsoft-power-bi": "Microsoft Power BI",
    serverless: "Serverless",
    "lang-chain": "LangChain",
    "kafka-streams": "Kafka Streams",
    redpanda: "Redpanda",

    matplotlib: "Matplotlib",
    seaborn: "Seaborn",
    bokeh: "Bokeh",
    tensorflow: "TensorFlow",
    pytorch: "PyTorch",
    "scikit-learn": "scikit-learn",
    "hugging-face-transformers":
      "Hugging Face Transformers",
    "apache-beam": "Apache Beam",
    "google-cloud-dataflow":
      "Google Cloud Dataflow",

    r: "R",
    ggplot2: "ggplot2",
    plotly: "Plotly",

    "apache-kafka": "Apache Kafka",
    "apache-flink": "Apache Flink",
    "apache-samza": "Apache Samza",
    "apache-storm": "Apache Storm",
    hibernate: "Hibernate",
    "amazon-kinesis-data-analytics":
      "Amazon Kinesis Data Analytics",

    coldfusion: "ColdFusion",
    railo: "Railo",
    cobol: "COBOL",
    salesforce: "Salesforce Apex",
    flash: "Flash",
    actionscript: "ActionScript",
    activescript: "ActiveScript",
    vbscript: "VBScript",
    coffeescript: "CoffeeScript",
    livescript: "LiveScript",
    jenkins: "Jenkins",

    "apache-spark-structured-streaming":
      "Apache Spark Structured Streaming",
    "azure-stream-analytics":
      "Azure Stream Analytics",
    "apache-superset": "Apache Superset",

    cpp: "C++",
    crystal: "Crystal",
    dart: "Dart",
    elixir: "Elixir",
    erlang: "Erlang",
    fortran: "Fortran",
    groovy: "Groovy",
    haskell: "Haskell",
  } as const;

export type CoreLanguage =
  | "typescript"
  | "javascript"
  | "graphql"
  | "python"
  | "java"
  | "apex"
  | "r"
  | "csharp"
  | "php"
  | "kotlin"
  | "go"
  | "cobol"
  | "vbscript"
  | "coldfusion"
  | "actionscript"
  | "text";

export const coreLanguageLabels: Record<
  CoreLanguage,
  string
> = {
  typescript: "TypeScript",
  javascript: "JavaScript",
  graphql: "GraphQL",
  python: "Python",
  java: "Java",
  apex: "Apex",
  r: "R",
  csharp: "C#",
  php: "PHP",
  kotlin: "Kotlin",
  go: "Go",
  cobol: "COBOL",
  vbscript: "VBScript",
  coldfusion: "ColdFusion",
  actionscript: "ActionScript",
  text: "Other",
};

export const coreLanguageMap: Record<
  string,
  CoreLanguage
> = {
  typescript: "typescript",
  tsx: "typescript",
  react: "typescript",
  "react-native": "typescript",
  angular: "typescript",
  typeorm: "typescript",
  "d3-js": "typescript",
  "chart-js": "typescript",
  "apache-echarts": "typescript",
  tableau: "typescript",
  "microsoft-power-bi": "typescript",
  serverless: "typescript",
  "lang-chain": "typescript",
  "kafka-streams": "typescript",
  "apache-superset": "typescript",
  redpanda: "typescript",

  javascript: "javascript",
  jsx: "javascript",
  livescript: "javascript",
  "azure-stream-analytics": "javascript",

  apollo: "graphql",
  graphql: "graphql",

  python: "python",
  matplotlib: "python",
  seaborn: "python",
  bokeh: "python",
  tensorflow: "python",
  pytorch: "python",
  "scikit-learn": "python",
  "hugging-face-transformers": "python",
  "apache-beam": "python",
  "google-cloud-dataflow": "python",
  "apache-spark-structured-streaming":
    "python",

  java: "java",
  "apache-kafka": "java",
  "apache-flink": "java",
  "apache-samza": "java",
  "apache-storm": "java",
  hibernate: "java",
  "amazon-kinesis-data-analytics": "java",

  r: "r",
  ggplot2: "r",
  plotly: "r",

  csharp: "csharp",
  dotnet: "csharp",
  php: "php",
  kotlin: "kotlin",
  go: "go",
  cobol: "cobol",

  activescript: "vbscript",
  vbscript: "vbscript",
  coldfusion: "coldfusion",
  railo: "coldfusion",
  flash: "actionscript",
  actionscript: "actionscript",

  jenkins: "text",
  cpp: "text",
  crystal: "text",
  dart: "text",
  elixir: "text",
  erlang: "text",
  fortran: "text",
  groovy: "text",
  haskell: "text",

  salesforce: "apex",
};

export function getCoreLanguage(
  language: string,
): CoreLanguage {
  return coreLanguageMap[language] ?? "text";
}
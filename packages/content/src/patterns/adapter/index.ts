import type { PatternRecord } from "@atlas-patterns/schemas";
import { adapterMeta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { typescript as legacyPaymentGatewayTypescript } from "./scenarios/legacy-payment-gateway/typescript";
import { java as legacyPaymentGatewayJava } from "./scenarios/legacy-payment-gateway/java";
import { python as legacyPaymentGatewayPython } from "./scenarios/legacy-payment-gateway/python";

import { typescript as thirdPartyTaskApiTypescript } from "./scenarios/third-party-task-api/typescript";
import { react as thirdPartyTaskApiReact } from "./scenarios/third-party-task-api/react";
import { angular as thirdPartyTaskApiAngular } from "./scenarios/third-party-task-api/angular";
import { apollo as thirdPartyTaskApiApollo } from "./scenarios/third-party-task-api/apollo";
import { graphql as thirdPartyTaskApiGraphql } from "./scenarios/third-party-task-api/graphql";
import { coldfusion as thirdPartyTaskApiColdfusion } from "./scenarios/third-party-task-api/coldfusion";
import { cobol as thirdPartyTaskApiCobol } from "./scenarios/third-party-task-api/cobol";
import { railo as thirdPartyTaskApiRailo } from "./scenarios/third-party-task-api/railo";
import { salesforce as thirdPartyTaskApiSalesforce } from "./scenarios/third-party-task-api/salesforce";
import { flash as thirdPartyTaskApiFlash } from "./scenarios/third-party-task-api/flash";
import { activescript as thirdPartyTaskApiActivescript } from "./scenarios/third-party-task-api/activescript";
import { coffeescript as thirdPartyTaskApiCoffeescript } from "./scenarios/third-party-task-api/coffeescript";
import { livescript as thirdPartyTaskApiLivescript } from "./scenarios/third-party-task-api/livescript";
import { matplotlib as thirdPartyTaskApiMatplotlib } from "./scenarios/third-party-task-api/matplotlib";
import { typeorm as thirdPartyTaskApiTypeorm } from "./scenarios/third-party-task-api/typeorm";
import { seaborn as thirdPartyTaskApiSeaborn } from "./scenarios/third-party-task-api/seaborn";
import { d3Js as thirdPartyTaskApiD3Js } from "./scenarios/third-party-task-api/d3-js";
import { microsoftPowerBi as thirdPartyTaskApiMicrosoftPowerBi } from "./scenarios/third-party-task-api/microsoft-power-bi";
import { tableau as thirdPartyTaskApiTableau } from "./scenarios/third-party-task-api/tableau";
import { ggplot2 as thirdPartyTaskApiGgplot2 } from "./scenarios/third-party-task-api/ggplot2";
import { plotly as thirdPartyTaskApiPlotly } from "./scenarios/third-party-task-api/plotly";
import { chartJs as thirdPartyTaskApiChartJs } from "./scenarios/third-party-task-api/chart-js";
import { apacheEcharts as thirdPartyTaskApiApacheEcharts } from "./scenarios/third-party-task-api/apache-echarts";
import { bokeh as thirdPartyTaskApiBokeh } from "./scenarios/third-party-task-api/bokeh";
import { apacheSuperset as thirdPartyTaskApiApacheSuperset } from "./scenarios/third-party-task-api/apache-superset";
import { jenkins as thirdPartyTaskApiJenkins } from "./scenarios/third-party-task-api/jenkins";
import { googleCharts as thirdPartyTaskApiGoogleCharts } from "./scenarios/third-party-task-api/google-charts";
import { tensorflow as thirdPartyTaskApiTensorflow } from "./scenarios/third-party-task-api/tensorflow";
import { pytorch as thirdPartyTaskApiPytorch } from "./scenarios/third-party-task-api/pytorch";
import { serverless as thirdPartyTaskApiServerless } from "./scenarios/third-party-task-api/serverless";
import { langChain as thirdPartyTaskApiLangChain } from "./scenarios/third-party-task-api/lang-chain";
import { kafkaStreams as thirdPartyTaskApiKafkaStreams } from "./scenarios/third-party-task-api/kafka-streams";
import { apacheKafka as thirdPartyTaskApiApacheKafka } from "./scenarios/third-party-task-api/apache-kafka";
import { apacheSparkStructuredStreaming as thirdPartyTaskApiApacheSparkStructuredStreaming } from "./scenarios/third-party-task-api/apache-spark-structured-streaming";
import { apacheFlink as thirdPartyTaskApiApacheFlink } from "./scenarios/third-party-task-api/apache-flink";
import { amazonKinesisDataAnalytics as thirdPartyTaskApiAmazonKinesisDataAnalytics } from "./scenarios/third-party-task-api/amazon-kinesis-data-analytics";
import { googleCloudDataflow as thirdPartyTaskApiGoogleCloudDataflow } from "./scenarios/third-party-task-api/google-cloud-dataflow";
import { apacheBeam as thirdPartyTaskApiApacheBeam } from "./scenarios/third-party-task-api/apache-beam";
import { azureStreamAnalytics as thirdPartyTaskApiAzureStreamAnalytics } from "./scenarios/third-party-task-api/azure-stream-analytics";
import { apacheSamza as thirdPartyTaskApiApacheSamza } from "./scenarios/third-party-task-api/apache-samza";
import { apacheStorm as thirdPartyTaskApiApacheStorm } from "./scenarios/third-party-task-api/apache-storm";
import { hibernate as thirdPartyTaskApiHibernate } from "./scenarios/third-party-task-api/hibernate";
import { redpanda as thirdPartyTaskApiRedpanda } from "./scenarios/third-party-task-api/redpanda";

import { typescript as eventPayloadMapperTypescript } from "./scenarios/event-payload-mapper/typescript";
import { java as eventPayloadMapperJava } from "./scenarios/event-payload-mapper/java";
import { python as eventPayloadMapperPython } from "./scenarios/event-payload-mapper/python";

const legacyPaymentGatewayExamples = normalizeExamples({
  typescript: legacyPaymentGatewayTypescript,
  java: legacyPaymentGatewayJava,
  python: legacyPaymentGatewayPython,
});

const thirdPartyTaskApiExamples = normalizeExamples({
  typescript: thirdPartyTaskApiTypescript,
  react: thirdPartyTaskApiReact,
  angular: thirdPartyTaskApiAngular,

  apollo: thirdPartyTaskApiApollo,
  graphql: thirdPartyTaskApiGraphql,
  coldfusion: thirdPartyTaskApiColdfusion,
  cobol: thirdPartyTaskApiCobol,
  railo: thirdPartyTaskApiRailo,
  salesforce: thirdPartyTaskApiSalesforce,
  flash: thirdPartyTaskApiFlash,
  activescript: thirdPartyTaskApiActivescript,
  coffeescript: thirdPartyTaskApiCoffeescript,
  livescript: thirdPartyTaskApiLivescript,
  matplotlib: thirdPartyTaskApiMatplotlib,
  typeorm: thirdPartyTaskApiTypeorm,
  seaborn: thirdPartyTaskApiSeaborn,
  "d3-js": thirdPartyTaskApiD3Js,
  "microsoft-power-bi": thirdPartyTaskApiMicrosoftPowerBi,
  tableau: thirdPartyTaskApiTableau,
  ggplot2: thirdPartyTaskApiGgplot2,
  plotly: thirdPartyTaskApiPlotly,
  "chart-js": thirdPartyTaskApiChartJs,
  "apache-echarts": thirdPartyTaskApiApacheEcharts,
  bokeh: thirdPartyTaskApiBokeh,
  "apache-superset": thirdPartyTaskApiApacheSuperset,
  jenkins: thirdPartyTaskApiJenkins,
  "google-charts": thirdPartyTaskApiGoogleCharts,
  tensorflow: thirdPartyTaskApiTensorflow,
  pytorch: thirdPartyTaskApiPytorch,
  serverless: thirdPartyTaskApiServerless,
  "lang-chain": thirdPartyTaskApiLangChain,
  "kafka-streams": thirdPartyTaskApiKafkaStreams,
  "apache-kafka": thirdPartyTaskApiApacheKafka,
  "apache-spark-structured-streaming":
    thirdPartyTaskApiApacheSparkStructuredStreaming,
  "apache-flink": thirdPartyTaskApiApacheFlink,
  "amazon-kinesis-data-analytics":
    thirdPartyTaskApiAmazonKinesisDataAnalytics,
  "google-cloud-dataflow":
    thirdPartyTaskApiGoogleCloudDataflow,
  "apache-beam": thirdPartyTaskApiApacheBeam,
  "azure-stream-analytics":
    thirdPartyTaskApiAzureStreamAnalytics,
  "apache-samza": thirdPartyTaskApiApacheSamza,
  "apache-storm": thirdPartyTaskApiApacheStorm,
  hibernate: thirdPartyTaskApiHibernate,
  redpanda: thirdPartyTaskApiRedpanda,
});

const eventPayloadMapperExamples = normalizeExamples({
  typescript: eventPayloadMapperTypescript,
  java: eventPayloadMapperJava,
  python: eventPayloadMapperPython,
});

export const adapterPattern: PatternRecord = {
  ...adapterMeta,
  problem:
    "A client needs to talk to a legacy class or external service whose interface does not match the rest of the codebase.",
  tradeoffs: [
    "Adds an extra layer of indirection.",
    "Can hide useful vendor-specific capabilities if overused.",
    "Keeps integration code isolated from core domain logic.",
  ],
  platforms: ["applications", "apis", "service layers", "integrations"],
  integrationNotes:
    "Adapters are useful when exposing a stable boundary over a legacy API, vendor SDK, or payload format mismatch.",
  scenarios,
  scenarioExamples: {
    "legacy-payment-gateway": legacyPaymentGatewayExamples,
    "third-party-task-api": thirdPartyTaskApiExamples,
    "event-payload-mapper": eventPayloadMapperExamples,
  },
  variants: [
    {
      slug: "adapter-payment-wrapper",
      title: "Payment wrapper",
      stackArea: "integration",
      language: "typescript",
      summary:
        "Wrap a legacy payment service behind the app's modern checkout contract.",
      intent: "Normalize old payment APIs without changing checkout code.",
      problem:
        "The checkout flow expects modern method names and fields that the old provider does not expose.",
      solution:
        "Use an adapter that translates the modern interface into calls on the legacy payment system.",
      dependencies: ["adapter"],
      relatedVariants: ["adapter-api-normalizer", "adapter-event-translator"],
      examplePatternSlugs: ["adapter"],
      notes:
        "Great for gateways, payment SDKs, and provider migrations.",
    },
    {
      slug: "adapter-api-normalizer",
      title: "API normalizer",
      stackArea: "frontend",
      language: "react",
      summary:
        "Convert mismatched third-party payloads into a consistent UI-friendly shape.",
      intent: "Keep UI code clean when data sources disagree.",
      problem:
        "Components should not know vendor-specific field names or response quirks.",
      solution:
        "Use an adapter layer to return one consistent model to the UI.",
      dependencies: ["adapter"],
      relatedVariants: ["adapter-payment-wrapper", "adapter-event-translator"],
      examplePatternSlugs: ["adapter"],
      notes:
        "Useful for task boards, dashboards, and data-rich React apps.",
    },
    {
      slug: "adapter-event-translator",
      title: "Event translator",
      stackArea: "backend",
      language: "python",
      summary:
        "Translate source-specific event payloads into one canonical event contract.",
      intent: "Decouple consumers from upstream message formats.",
      problem:
        "Multiple producers emit payloads with incompatible shapes and naming conventions.",
      solution:
        "Use an adapter to transform each incoming payload into the normalized event model.",
      dependencies: ["adapter"],
      relatedVariants: ["adapter-payment-wrapper", "adapter-api-normalizer"],
      examplePatternSlugs: ["adapter"],
      notes:
        "Works well for analytics, ETL, and event-driven backend pipelines.",
    },
  ],
  realWorldExamples: [
    {
      title: "Legacy payment wrapper",
      description:
        "Translate a provider's old charge API into the app's checkout service interface.",
    },
    {
      title: "Third-party API normalization",
      description:
        "Map inconsistent vendor payloads into one internal model before they reach the UI.",
    },
    {
      title: "Analytics event translation",
      description:
        "Convert several producer-specific event shapes into one canonical analytics schema.",
    },
  ],
};

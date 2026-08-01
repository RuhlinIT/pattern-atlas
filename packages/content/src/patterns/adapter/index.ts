import { adapterMeta } from "./meta";
import {
  adapterAntiPatterns,
  adapterIntegrationNotes,
  adapterPlatforms,
  adapterProblem,
  adapterRealWorldExamples,
  adapterScenarioExamples,
  adapterScenarios,
  adapterTradeoffs,
  adapterVariants,
  adapterWhenToUse,
} from "./scenarios";
import type { PatternRecord } from "@atlas-patterns/schemas";

export const adapterPattern: PatternRecord = {
  ...adapterMeta,
  problem: adapterProblem,
  tradeoffs: adapterTradeoffs,
  platforms: adapterPlatforms,
  integrationNotes: adapterIntegrationNotes,
  scenarios: adapterScenarios,
  scenarioExamples: adapterScenarioExamples,
  realWorldExamples: adapterRealWorldExamples,
  whenToUse: adapterWhenToUse,
  flexibility: "intermediate",
  antiPatterns: adapterAntiPatterns,
  variants: adapterVariants,
};

export { adapterMeta };
export {
  adapterAntiPatterns,
  adapterIntegrationNotes,
  adapterPlatforms,
  adapterProblem,
  adapterRealWorldExamples,
  adapterScenarioExamples,
  adapterScenarios,
  adapterTradeoffs,
  adapterVariants,
  adapterWhenToUse,
};
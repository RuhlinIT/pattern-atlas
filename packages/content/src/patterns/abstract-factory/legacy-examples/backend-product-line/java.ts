import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Java backend factory",
  code: `interface Queue {}
interface Policy {}
interface Workflow {}

interface ProvisioningFactory {
    Queue createQueue();
    Policy createPolicy();
    Workflow createWorkflow();
}`,
  explanation:
    "Java backend factories can keep tenant-specific infrastructure objects consistent.",
};
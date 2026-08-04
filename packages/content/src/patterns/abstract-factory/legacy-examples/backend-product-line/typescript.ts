import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Tenant provisioning factory",
  code: `type Region = "us" | "eu";

type Queue = { region: Region };
type Policy = { region: Region };
type Workflow = { region: Region };

interface ProvisioningFactory {
  createQueue(): Queue;
  createPolicy(): Policy;
  createWorkflow(): Workflow;
}

class RegionFactory implements ProvisioningFactory {
  constructor(private region: Region) {}

  createQueue(): Queue {
    return { region: this.region };
  }

  createPolicy(): Policy {
    return { region: this.region };
  }

  createWorkflow(): Workflow {
    return { region: this.region };
  }
}`,
  explanation:
    "A backend factory can provision queues, policies, and workflows as one tenant-aware family.",
};
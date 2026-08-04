import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `interface StorageService {
  store(objectName: string): string;
}

interface ComputeService {
  runJob(jobName: string): string;
}

interface QueueService {
  publish(topic: string, payload: string): string;
}

interface CloudProviderFactory {
  createStorageService(): StorageService;
  createComputeService(): ComputeService;
  createQueueService(): QueueService;
}

class AwsStorageService implements StorageService {
  store(objectName: string): string {
    return \`Stored \${objectName} in S3\`;
  }
}

class AwsComputeService implements ComputeService {
  runJob(jobName: string): string {
    return \`Ran \${jobName} on ECS\`;
  }
}

class AwsQueueService implements QueueService {
  publish(topic: string, payload: string): string {
    return \`Published \${payload} to SNS topic \${topic}\`;
  }
}

class AzureStorageService implements StorageService {
  store(objectName: string): string {
    return \`Stored \${objectName} in Blob Storage\`;
  }
}

class AzureComputeService implements ComputeService {
  runJob(jobName: string): string {
    return \`Ran \${jobName} on Container Apps\`;
  }
}

class AzureQueueService implements QueueService {
  publish(topic: string, payload: string): string {
    return \`Published \${payload} to Service Bus topic \${topic}\`;
  }
}

class AwsCloudProviderFactory implements CloudProviderFactory {
  createStorageService(): StorageService {
    return new AwsStorageService();
  }

  createComputeService(): ComputeService {
    return new AwsComputeService();
  }

  createQueueService(): QueueService {
    return new AwsQueueService();
  }
}

class AzureCloudProviderFactory implements CloudProviderFactory {
  createStorageService(): StorageService {
    return new AzureStorageService();
  }

  createComputeService(): ComputeService {
    return new AzureComputeService();
  }

  createQueueService(): QueueService {
    return new AzureQueueService();
  }
}

class DeploymentWorkflow {
  private readonly storage: StorageService;
  private readonly compute: ComputeService;
  private readonly queue: QueueService;

  constructor(factory: CloudProviderFactory) {
    this.storage = factory.createStorageService();
    this.compute = factory.createComputeService();
    this.queue = factory.createQueueService();
  }

  deploy(artifactName: string): string {
    const stored = this.storage.store(artifactName);
    const executed = this.compute.runJob(\`deploy-\${artifactName}\`);
    const published = this.queue.publish("deployments", \`\${artifactName} ready\`);

    return [stored, executed, published].join("\\n");
  }
}

const factory: CloudProviderFactory = new AwsCloudProviderFactory();
const workflow = new DeploymentWorkflow(factory);

console.log(workflow.deploy("billing-service"));
`,
} satisfies PatternLanguageExample;
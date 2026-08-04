import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java = {
  language: "java",
  code: `interface StorageService {
  String store(String objectName);
}

interface ComputeService {
  String runJob(String jobName);
}

interface QueueService {
  String publish(String topic, String payload);
}

interface CloudProviderFactory {
  StorageService createStorageService();
  ComputeService createComputeService();
  QueueService createQueueService();
}

class AwsStorageService implements StorageService {
  @Override
  public String store(String objectName) {
    return "Stored " + objectName + " in S3";
  }
}

class AwsComputeService implements ComputeService {
  @Override
  public String runJob(String jobName) {
    return "Ran " + jobName + " on ECS";
  }
}

class AwsQueueService implements QueueService {
  @Override
  public String publish(String topic, String payload) {
    return "Published " + payload + " to SNS topic " + topic;
  }
}

class AzureStorageService implements StorageService {
  @Override
  public String store(String objectName) {
    return "Stored " + objectName + " in Blob Storage";
  }
}

class AzureComputeService implements ComputeService {
  @Override
  public String runJob(String jobName) {
    return "Ran " + jobName + " on Container Apps";
  }
}

class AzureQueueService implements QueueService {
  @Override
  public String publish(String topic, String payload) {
    return "Published " + payload + " to Service Bus topic " + topic;
  }
}

class AwsCloudProviderFactory implements CloudProviderFactory {
  @Override
  public StorageService createStorageService() {
    return new AwsStorageService();
  }

  @Override
  public ComputeService createComputeService() {
    return new AwsComputeService();
  }

  @Override
  public QueueService createQueueService() {
    return new AwsQueueService();
  }
}

class AzureCloudProviderFactory implements CloudProviderFactory {
  @Override
  public StorageService createStorageService() {
    return new AzureStorageService();
  }

  @Override
  public ComputeService createComputeService() {
    return new AzureComputeService();
  }

  @Override
  public QueueService createQueueService() {
    return new AzureQueueService();
  }
}

class DeploymentWorkflow {
  private final StorageService storage;
  private final ComputeService compute;
  private final QueueService queue;

  DeploymentWorkflow(CloudProviderFactory factory) {
    this.storage = factory.createStorageService();
    this.compute = factory.createComputeService();
    this.queue = factory.createQueueService();
  }

  String deploy(String artifactName) {
    String stored = storage.store(artifactName);
    String executed = compute.runJob("deploy-" + artifactName);
    String published = queue.publish("deployments", artifactName + " ready");

    return String.join("\\n", stored, executed, published);
  }
}

public class Main {
  public static void main(String[] args) {
    CloudProviderFactory factory = new AwsCloudProviderFactory();
    DeploymentWorkflow workflow = new DeploymentWorkflow(factory);

    System.out.println(workflow.deploy("billing-service"));
  }
}
`,
} satisfies PatternLanguageExample;
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python = {
  language: "python",
  code: `from abc import ABC, abstractmethod


class StorageService(ABC):
    @abstractmethod
    def store(self, object_name: str) -> str:
        pass


class ComputeService(ABC):
    @abstractmethod
    def run_job(self, job_name: str) -> str:
        pass


class QueueService(ABC):
    @abstractmethod
    def publish(self, topic: str, payload: str) -> str:
        pass


class CloudProviderFactory(ABC):
    @abstractmethod
    def create_storage_service(self) -> StorageService:
        pass

    @abstractmethod
    def create_compute_service(self) -> ComputeService:
        pass

    @abstractmethod
    def create_queue_service(self) -> QueueService:
        pass


class AwsStorageService(StorageService):
    def store(self, object_name: str) -> str:
        return f"Stored {object_name} in S3"


class AwsComputeService(ComputeService):
    def run_job(self, job_name: str) -> str:
        return f"Ran {job_name} on ECS"


class AwsQueueService(QueueService):
    def publish(self, topic: str, payload: str) -> str:
        return f"Published {payload} to SNS topic {topic}"


class AzureStorageService(StorageService):
    def store(self, object_name: str) -> str:
        return f"Stored {object_name} in Blob Storage"


class AzureComputeService(ComputeService):
    def run_job(self, job_name: str) -> str:
        return f"Ran {job_name} on Container Apps"


class AzureQueueService(QueueService):
    def publish(self, topic: str, payload: str) -> str:
        return f"Published {payload} to Service Bus topic {topic}"


class AwsCloudProviderFactory(CloudProviderFactory):
    def create_storage_service(self) -> StorageService:
        return AwsStorageService()

    def create_compute_service(self) -> ComputeService:
        return AwsComputeService()

    def create_queue_service(self) -> QueueService:
        return AwsQueueService()


class AzureCloudProviderFactory(CloudProviderFactory):
    def create_storage_service(self) -> StorageService:
        return AzureStorageService()

    def create_compute_service(self) -> ComputeService:
        return AzureComputeService()

    def create_queue_service(self) -> QueueService:
        return AzureQueueService()


class DeploymentWorkflow:
    def __init__(self, factory: CloudProviderFactory) -> None:
        self.storage = factory.create_storage_service()
        self.compute = factory.create_compute_service()
        self.queue = factory.create_queue_service()

    def deploy(self, artifact_name: str) -> str:
        stored = self.storage.store(artifact_name)
        executed = self.compute.run_job(f"deploy-{artifact_name}")
        published = self.queue.publish("deployments", f"{artifact_name} ready")

        return "\\n".join([stored, executed, published])


factory: CloudProviderFactory = AwsCloudProviderFactory()
workflow = DeploymentWorkflow(factory)

print(workflow.deploy("billing-service"))
`,
} satisfies PatternLanguageExample;
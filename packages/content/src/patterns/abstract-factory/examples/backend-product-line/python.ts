import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Python backend factory",
  code: `class Queue:
    pass

class Policy:
    pass

class Workflow:
    pass

class ProvisioningFactory:
    def create_queue(self):
        return Queue()

    def create_policy(self):
        return Policy()

    def create_workflow(self):
        return Workflow()`,
  explanation:
    "Python can use an abstract factory to keep backend provisioning cohesive.",
};
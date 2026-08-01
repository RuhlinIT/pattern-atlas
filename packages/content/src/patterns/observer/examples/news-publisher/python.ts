import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "News publisher",
  code: "from abc import ABC, abstractmethod\n\nclass Subscriber(ABC):\n    @abstractmethod\n    def update(self, headline: str) -> None:\n        pass\n\nclass NewsPublisher:\n    def __init__(self) -> None:\n        self.subscribers: list[Subscriber] = []\n\n    def subscribe(self, subscriber: Subscriber) -> None:\n        self.subscribers.append(subscriber)\n\n    def publish(self, headline: str) -> None:\n        for subscriber in self.subscribers:\n            subscriber.update(headline)\n\nclass MobileAppSubscriber(Subscriber):\n    def update(self, headline: str) -> None:\n        print(f\"Mobile app received: {headline}\")\n\nclass EmailSubscriber(Subscriber):\n    def update(self, headline: str) -> None:\n        print(f\"Email subscriber received: {headline}\")\n\nclass WebSubscriber(Subscriber):\n    def update(self, headline: str) -> None:\n        print(f\"Web subscriber received: {headline}\")\n\npublisher = NewsPublisher()\npublisher.subscribe(MobileAppSubscriber())\npublisher.subscribe(EmailSubscriber())\npublisher.subscribe(WebSubscriber())\npublisher.publish(\"New design patterns article is live\")",
  explanation: "Subscribers register dynamically, and the publisher notifies all of them when a new article appears.",
};

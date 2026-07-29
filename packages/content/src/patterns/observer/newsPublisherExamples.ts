import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const newsPublisherExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Subscriber {
  update(headline: string): void;
}

class NewsPublisher {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }

  publish(headline: string): void {
    this.subscribers.forEach((subscriber) => subscriber.update(headline));
  }
}

class MobileAppSubscriber implements Subscriber {
  update(headline: string): void {
    console.log(\`Mobile app received: \${headline}\`);
  }
}

class EmailSubscriber implements Subscriber {
  update(headline: string): void {
    console.log(\`Email subscriber received: \${headline}\`);
  }
}

class WebSubscriber implements Subscriber {
  update(headline: string): void {
    console.log(\`Web subscriber received: \${headline}\`);
  }
}

const publisher = new NewsPublisher();
publisher.subscribe(new MobileAppSubscriber());
publisher.subscribe(new EmailSubscriber());
publisher.subscribe(new WebSubscriber());
publisher.publish("New design patterns article is live");`,
    explanation:
      "The publisher broadcasts one event, while multiple subscribers update their own delivery channels in response.",
  },
  {
    language: "Java",
    code: `import java.util.ArrayList;
import java.util.List;

interface Subscriber {
    void update(String headline);
}

class NewsPublisher {
    private final List<Subscriber> subscribers = new ArrayList<>();

    public void subscribe(Subscriber subscriber) {
        subscribers.add(subscriber);
    }

    public void publish(String headline) {
        for (Subscriber subscriber : subscribers) {
            subscriber.update(headline);
        }
    }
}

class MobileAppSubscriber implements Subscriber {
    public void update(String headline) {
        System.out.println("Mobile app received: " + headline);
    }
}

class EmailSubscriber implements Subscriber {
    public void update(String headline) {
        System.out.println("Email subscriber received: " + headline);
    }
}

class WebSubscriber implements Subscriber {
    public void update(String headline) {
        System.out.println("Web subscriber received: " + headline);
    }
}

NewsPublisher publisher = new NewsPublisher();
publisher.subscribe(new MobileAppSubscriber());
publisher.subscribe(new EmailSubscriber());
publisher.subscribe(new WebSubscriber());
publisher.publish("New design patterns article is live");`,
    explanation:
      "The publishing logic stays simple because subscriber-specific behavior lives in observer implementations rather than inside the publisher.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class Subscriber(ABC):
    @abstractmethod
    def update(self, headline: str) -> None:
        pass

class NewsPublisher:
    def __init__(self) -> None:
        self.subscribers: list[Subscriber] = []

    def subscribe(self, subscriber: Subscriber) -> None:
        self.subscribers.append(subscriber)

    def publish(self, headline: str) -> None:
        for subscriber in self.subscribers:
            subscriber.update(headline)

class MobileAppSubscriber(Subscriber):
    def update(self, headline: str) -> None:
        print(f"Mobile app received: {headline}")

class EmailSubscriber(Subscriber):
    def update(self, headline: str) -> None:
        print(f"Email subscriber received: {headline}")

class WebSubscriber(Subscriber):
    def update(self, headline: str) -> None:
        print(f"Web subscriber received: {headline}")

publisher = NewsPublisher()
publisher.subscribe(MobileAppSubscriber())
publisher.subscribe(EmailSubscriber())
publisher.subscribe(WebSubscriber())
publisher.publish("New design patterns article is live")`,
    explanation:
      "Subscribers register dynamically, and the publisher notifies all of them when a new article appears.",
  },
];

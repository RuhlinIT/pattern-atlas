import type { PatternRecord } from "@atlas-patterns/schemas";

export const ObserverPattern: PatternRecord = {
  slug: "observer",
  name: "Observer",
  category: "Behavioral",
  problem:
    "A system needs to notify multiple dependent objects when state changes occur, but hardcoding those dependencies makes the design rigid and tightly coupled.",
  intent:
    "Define a subscription mechanism so multiple observers can react to subject events without the subject knowing concrete subscriber details.",
  tradeoffs: [
    "Notification flows can become hard to trace when many observers react to the same event",
    "Observers may receive updates they do not need unless subscriptions are carefully designed",
  ],
  languages: ["TypeScript", "Java", "Python"],
  platforms: ["Web", "Backend", "Event-driven systems"],
  integrationNotes:
    "Observers work well inside a single application boundary for UI events, domain events, and in-process notifications where subscribers change dynamically.",
  scenarios: [
    {
      slug: "stock-price-alerts",
      title: "Stock price alerts",
      summary:
        "A stock subject notifies dashboards and alert services whenever the tracked price changes.",
      languageExamples: [
        {
          language: "TypeScript",
          code: `interface Observer {
  update(price: number): void;
}

class Stock {
  private observers: Observer[] = [];

  constructor(private price: number) {}

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  setPrice(price: number): void {
    this.price = price;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.update(this.price));
  }
}

class PriceDisplay implements Observer {
  update(price: number): void {
    console.log(\`Display updated: \${price}\`);
  }
}

class PriceAlert implements Observer {
  update(price: number): void {
    if (price > 100) {
      console.log(\`Alert: stock price is \${price}\`);
    }
  }
}

const stock = new Stock(95);
stock.subscribe(new PriceDisplay());
stock.subscribe(new PriceAlert());
stock.setPrice(105);`,
          explanation:
            "The stock acts as the subject, while displays and alerts subscribe independently and react when the price changes.",
        },
        {
          language: "Java",
          code: `import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(double price);
}

class Stock {
    private final List<Observer> observers = new ArrayList<>();
    private double price;

    public Stock(double price) {
        this.price = price;
    }

    public void subscribe(Observer observer) {
        observers.add(observer);
    }

    public void unsubscribe(Observer observer) {
        observers.remove(observer);
    }

    public void setPrice(double price) {
        this.price = price;
        notifyObservers();
    }

    private void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(price);
        }
    }
}

class PriceDisplay implements Observer {
    public void update(double price) {
        System.out.println("Display updated: " + price);
    }
}

class PriceAlert implements Observer {
    public void update(double price) {
        if (price > 100) {
            System.out.println("Alert: stock price is " + price);
        }
    }
}

Stock stock = new Stock(95);
stock.subscribe(new PriceDisplay());
stock.subscribe(new PriceAlert());
stock.setPrice(105);`,
          explanation:
            "The subject keeps a dynamic list of observers and pushes updates to each one when its state changes.",
        },
        {
          language: "Python",
          code: `from abc import ABC, abstractmethod

class Observer(ABC):
    @abstractmethod
    def update(self, price: float) -> None:
        pass

class Stock:
    def __init__(self, price: float) -> None:
        self.price = price
        self.observers: list[Observer] = []

    def subscribe(self, observer: Observer) -> None:
        self.observers.append(observer)

    def unsubscribe(self, observer: Observer) -> None:
        self.observers.remove(observer)

    def set_price(self, price: float) -> None:
        self.price = price
        self.notify()

    def notify(self) -> None:
        for observer in self.observers:
            observer.update(self.price)

class PriceDisplay(Observer):
    def update(self, price: float) -> None:
        print(f"Display updated: {price}")

class PriceAlert(Observer):
    def update(self, price: float) -> None:
        if price > 100:
            print(f"Alert: stock price is {price}")

stock = Stock(95)
stock.subscribe(PriceDisplay())
stock.subscribe(PriceAlert())
stock.set_price(105)`,
          explanation:
            "The stock pushes price updates to any subscribed observers, while each observer decides how to respond.",
        },
      ],
    },
    {
      slug: "order-status-notifications",
      title: "Order status notifications",
      summary:
        "An order subject broadcasts status changes so email, warehouse, and analytics observers can react independently.",
      languageExamples: [
        {
          language: "TypeScript",
          code: `interface OrderObserver {
  update(status: string): void;
}

class Order {
  private observers: OrderObserver[] = [];

  constructor(private status: string) {}

  subscribe(observer: OrderObserver): void {
    this.observers.push(observer);
  }

  setStatus(status: string): void {
    this.status = status;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.update(this.status));
  }
}

class EmailNotifier implements OrderObserver {
  update(status: string): void {
    console.log(\`Email sent for status: \${status}\`);
  }
}

class WarehouseUpdater implements OrderObserver {
  update(status: string): void {
    console.log(\`Warehouse updated for status: \${status}\`);
  }
}

class AnalyticsTracker implements OrderObserver {
  update(status: string): void {
    console.log(\`Analytics tracked: \${status}\`);
  }
}

const order = new Order("created");
order.subscribe(new EmailNotifier());
order.subscribe(new WarehouseUpdater());
order.subscribe(new AnalyticsTracker());
order.setStatus("shipped");`,
          explanation:
            "The order does not know who is listening beyond the observer contract, which keeps notification consumers loosely coupled.",
        },
        {
          language: "Java",
          code: `import java.util.ArrayList;
import java.util.List;

interface OrderObserver {
    void update(String status);
}

class Order {
    private final List<OrderObserver> observers = new ArrayList<>();
    private String status;

    public Order(String status) {
        this.status = status;
    }

    public void subscribe(OrderObserver observer) {
        observers.add(observer);
    }

    public void setStatus(String status) {
        this.status = status;
        notifyObservers();
    }

    private void notifyObservers() {
        for (OrderObserver observer : observers) {
            observer.update(status);
        }
    }
}

class EmailNotifier implements OrderObserver {
    public void update(String status) {
        System.out.println("Email sent for status: " + status);
    }
}

class WarehouseUpdater implements OrderObserver {
    public void update(String status) {
        System.out.println("Warehouse updated for status: " + status);
    }
}

class AnalyticsTracker implements OrderObserver {
    public void update(String status) {
        System.out.println("Analytics tracked: " + status);
    }
}

Order order = new Order("created");
order.subscribe(new EmailNotifier());
order.subscribe(new WarehouseUpdater());
order.subscribe(new AnalyticsTracker());
order.setStatus("shipped");`,
          explanation:
            "Each subscriber reacts to the same order event in its own way without the order object coordinating concrete downstream logic.",
        },
        {
          language: "Python",
          code: `from abc import ABC, abstractmethod

class OrderObserver(ABC):
    @abstractmethod
    def update(self, status: str) -> None:
        pass

class Order:
    def __init__(self, status: str) -> None:
        self.status = status
        self.observers: list[OrderObserver] = []

    def subscribe(self, observer: OrderObserver) -> None:
        self.observers.append(observer)

    def set_status(self, status: str) -> None:
        self.status = status
        self.notify()

    def notify(self) -> None:
        for observer in self.observers:
            observer.update(self.status)

class EmailNotifier(OrderObserver):
    def update(self, status: str) -> None:
        print(f"Email sent for status: {status}")

class WarehouseUpdater(OrderObserver):
    def update(self, status: str) -> None:
        print(f"Warehouse updated for status: {status}")

class AnalyticsTracker(OrderObserver):
    def update(self, status: str) -> None:
        print(f"Analytics tracked: {status}")

order = Order("created")
order.subscribe(EmailNotifier())
order.subscribe(WarehouseUpdater())
order.subscribe(AnalyticsTracker())
order.set_status("shipped")`,
          explanation:
            "The order broadcasts status updates once, and each observer handles its own side effect independently.",
        },
      ],
    },
    {
      slug: "news-publisher",
      title: "News publisher",
      summary:
        "A publisher notifies multiple subscribers when a new article is published so apps and channels update automatically.",
      languageExamples: [
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
      ],
    },
  ],
  realWorldExamples: [
    {
      title: "UI event listeners",
      description:
        "Buttons, forms, and state containers notify multiple listeners when user interactions or state changes occur.",
    },
    {
      title: "Order and domain events",
      description:
        "Order status changes can trigger email, analytics, inventory, and fulfillment reactions without hardcoded dependencies.",
    },
    {
      title: "Content subscriptions",
      description:
        "Newsletters, mobile apps, and web feeds can all subscribe to publication events from a shared content source.",
    },
  ],
};

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const orderStatusNotificationsExamples: PatternLanguageExample[] = [
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
];

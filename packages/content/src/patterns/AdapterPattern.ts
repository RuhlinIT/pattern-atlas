import type { PatternRecord } from "@atlas-patterns/schemas";

export const AdapterPattern: PatternRecord = {
  slug: "adapter",
  name: "Adapter",
  category: "Structural",
  problem:
    "A client needs to use an existing class or external service, but its interface does not match what the application expects.",
  intent:
    "Convert the interface of an existing class into one that the client can use without changing the original implementation.",
  tradeoffs: [
    "Adds an extra layer that can hide important service-specific behavior",
    "Too many adapters can make integration code harder to navigate",
  ],
  languages: ["TypeScript", "Java", "Python"],
  platforms: ["Web", "Backend", "Integrations"],
  integrationNotes:
    "Adapters are especially useful when integrating legacy services, vendor SDKs, or mixed data formats behind a stable internal contract.",
  scenarios: [
    {
      slug: "payment-gateway-integration",
      title: "Payment gateway integration",
      summary:
        "A checkout flow expects one payment interface, while a third-party gateway exposes a different SDK method and payload shape.",
      languageExamples: [
        {
          language: "TypeScript",
          code: `interface PaymentProcessor {
  pay(amount: number): void;
}

class LegacyPaymentGateway {
  makePayment(totalInCents: number): void {
    console.log(\`Legacy gateway charged \${totalInCents} cents\`);
  }
}

class PaymentGatewayAdapter implements PaymentProcessor {
  constructor(private gateway: LegacyPaymentGateway) {}

  pay(amount: number): void {
    const totalInCents = Math.round(amount * 100);
    this.gateway.makePayment(totalInCents);
  }
}

class CheckoutService {
  constructor(private processor: PaymentProcessor) {}

  checkout(amount: number): void {
    this.processor.pay(amount);
  }
}

const processor = new PaymentGatewayAdapter(new LegacyPaymentGateway());
const checkout = new CheckoutService(processor);
checkout.checkout(49.99);`,
          explanation:
            "The adapter translates the app's pay contract into the legacy gateway's makePayment method and expected cents-based input.",
        },
        {
          language: "Java",
          code: `interface PaymentProcessor {
    void pay(double amount);
}

class LegacyPaymentGateway {
    public void makePayment(int totalInCents) {
        System.out.println("Legacy gateway charged " + totalInCents + " cents");
    }
}

class PaymentGatewayAdapter implements PaymentProcessor {
    private final LegacyPaymentGateway gateway;

    public PaymentGatewayAdapter(LegacyPaymentGateway gateway) {
        this.gateway = gateway;
    }

    public void pay(double amount) {
        int totalInCents = (int) Math.round(amount * 100);
        gateway.makePayment(totalInCents);
    }
}

class CheckoutService {
    private final PaymentProcessor processor;

    public CheckoutService(PaymentProcessor processor) {
        this.processor = processor;
    }

    public void checkout(double amount) {
        processor.pay(amount);
    }
}

PaymentProcessor processor =
    new PaymentGatewayAdapter(new LegacyPaymentGateway());
CheckoutService checkout = new CheckoutService(processor);
checkout.checkout(49.99);`,
          explanation:
            "The checkout service depends on the application interface, while the adapter handles the method and data conversion for the legacy gateway.",
        },
        {
          language: "Python",
          code: `from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    @abstractmethod
    def pay(self, amount: float) -> None:
        pass

class LegacyPaymentGateway:
    def make_payment(self, total_in_cents: int) -> None:
        print(f"Legacy gateway charged {total_in_cents} cents")

class PaymentGatewayAdapter(PaymentProcessor):
    def __init__(self, gateway: LegacyPaymentGateway) -> None:
        self.gateway = gateway

    def pay(self, amount: float) -> None:
        total_in_cents = round(amount * 100)
        self.gateway.make_payment(total_in_cents)

class CheckoutService:
    def __init__(self, processor: PaymentProcessor) -> None:
        self.processor = processor

    def checkout(self, amount: float) -> None:
        self.processor.pay(amount)

processor = PaymentGatewayAdapter(LegacyPaymentGateway())
checkout = CheckoutService(processor)
checkout.checkout(49.99)`,
          explanation:
            "The adapter lets checkout code remain stable even though the integrated gateway uses a different method name and value format.",
        },
      ],
    },
    {
      slug: "legacy-notification-service",
      title: "Legacy notification service",
      summary:
        "An application expects a notifier interface, but an older messaging service exposes a different send API.",
      languageExamples: [
        {
          language: "TypeScript",
          code: `interface Notifier {
  send(message: string): void;
}

class LegacyMessenger {
  deliver(payload: { body: string }): void {
    console.log(\`Legacy messenger sent: \${payload.body}\`);
  }
}

class NotificationAdapter implements Notifier {
  constructor(private messenger: LegacyMessenger) {}

  send(message: string): void {
    this.messenger.deliver({ body: message });
  }
}

class AlertService {
  constructor(private notifier: Notifier) {}

  triggerAlert(message: string): void {
    this.notifier.send(message);
  }
}

const notifier = new NotificationAdapter(new LegacyMessenger());
const alerts = new AlertService(notifier);
alerts.triggerAlert("CPU threshold exceeded");`,
          explanation:
            "The adapter converts the app's simple send contract into the older service's payload-based deliver call.",
        },
        {
          language: "Java",
          code: `interface Notifier {
    void send(String message);
}

class LegacyMessenger {
    public void deliver(MessagePayload payload) {
        System.out.println("Legacy messenger sent: " + payload.body);
    }
}

class MessagePayload {
    public final String body;

    public MessagePayload(String body) {
        this.body = body;
    }
}

class NotificationAdapter implements Notifier {
    private final LegacyMessenger messenger;

    public NotificationAdapter(LegacyMessenger messenger) {
        this.messenger = messenger;
    }

    public void send(String message) {
        messenger.deliver(new MessagePayload(message));
    }
}

class AlertService {
    private final Notifier notifier;

    public AlertService(Notifier notifier) {
        this.notifier = notifier;
    }

    public void triggerAlert(String message) {
        notifier.send(message);
    }
}

Notifier notifier = new NotificationAdapter(new LegacyMessenger());
AlertService alerts = new AlertService(notifier);
alerts.triggerAlert("CPU threshold exceeded");`,
          explanation:
            "The alert service works with its own expected interface while the adapter handles the legacy payload object required by the messenger.",
        },
        {
          language: "Python",
          code: `from abc import ABC, abstractmethod

class Notifier(ABC):
    @abstractmethod
    def send(self, message: str) -> None:
        pass

class LegacyMessenger:
    def deliver(self, payload: dict[str, str]) -> None:
        print(f"Legacy messenger sent: {payload['body']}")

class NotificationAdapter(Notifier):
    def __init__(self, messenger: LegacyMessenger) -> None:
        self.messenger = messenger

    def send(self, message: str) -> None:
        self.messenger.deliver({"body": message})

class AlertService:
    def __init__(self, notifier: Notifier) -> None:
        self.notifier = notifier

    def trigger_alert(self, message: str) -> None:
        self.notifier.send(message)

notifier = NotificationAdapter(LegacyMessenger())
alerts = AlertService(notifier)
alerts.trigger_alert("CPU threshold exceeded")`,
          explanation:
            "The adapter makes an incompatible legacy messaging API look like the notifier interface expected by the rest of the application.",
        },
      ],
    },
    {
      slug: "file-format-conversion",
      title: "File format conversion",
      summary:
        "An application expects structured user records, but a legacy data source returns rows in a different format that must be translated.",
      languageExamples: [
        {
          language: "TypeScript",
          code: `interface UserDirectory {
  listUsers(): { id: number; name: string }[];
}

class CsvUserSource {
  fetchRows(): string[] {
    return ["1,Ada Lovelace", "2,Grace Hopper"];
  }
}

class CsvUserAdapter implements UserDirectory {
  constructor(private source: CsvUserSource) {}

  listUsers(): { id: number; name: string }[] {
    return this.source.fetchRows().map((row) => {
      const [id, name] = row.split(",");
      return { id: Number(id), name };
    });
  }
}

const directory = new CsvUserAdapter(new CsvUserSource());
console.log(directory.listUsers());`,
          explanation:
            "The adapter converts raw CSV rows into the structured user records expected by the application.",
        },
        {
          language: "Java",
          code: `import java.util.ArrayList;
import java.util.List;

interface UserDirectory {
    List<UserRecord> listUsers();
}

class CsvUserSource {
    public List<String> fetchRows() {
        return List.of("1,Ada Lovelace", "2,Grace Hopper");
    }
}

class UserRecord {
    public final int id;
    public final String name;

    public UserRecord(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

class CsvUserAdapter implements UserDirectory {
    private final CsvUserSource source;

    public CsvUserAdapter(CsvUserSource source) {
        this.source = source;
    }

    public List<UserRecord> listUsers() {
        List<UserRecord> users = new ArrayList<>();

        for (String row : source.fetchRows()) {
            String[] parts = row.split(",");
            users.add(new UserRecord(Integer.parseInt(parts[0]), parts[1]));
        }

        return users;
    }
}

UserDirectory directory = new CsvUserAdapter(new CsvUserSource());
System.out.println(directory.listUsers().size());`,
          explanation:
            "The adapter shields the rest of the app from raw CSV parsing by exposing the structured directory interface it already expects.",
        },
        {
          language: "Python",
          code: `from abc import ABC, abstractmethod

class UserDirectory(ABC):
    @abstractmethod
    def list_users(self) -> list[dict[str, object]]:
        pass

class CsvUserSource:
    def fetch_rows(self) -> list[str]:
        return ["1,Ada Lovelace", "2,Grace Hopper"]

class CsvUserAdapter(UserDirectory):
    def __init__(self, source: CsvUserSource) -> None:
        self.source = source

    def list_users(self) -> list[dict[str, object]]:
        users = []

        for row in self.source.fetch_rows():
            user_id, name = row.split(",")
            users.append({"id": int(user_id), "name": name})

        return users

directory = CsvUserAdapter(CsvUserSource())
print(directory.list_users())`,
          explanation:
            "The adapter translates legacy row data into the structured records that client code can consume consistently.",
        },
      ],
    },
  ],
  realWorldExamples: [
    {
      title: "Third-party payment gateways",
      description:
        "Wrap each payment provider SDK behind a common payment interface so checkout code does not depend on vendor-specific APIs.",
    },
    {
      title: "Legacy service modernization",
      description:
        "Keep older services in place while exposing newer application-facing contracts through adapters.",
    },
    {
      title: "File and data format translation",
      description:
        "Convert XML, CSV, or vendor-specific payloads into the internal models expected by the rest of the application.",
    },
  ],
};

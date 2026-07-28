import type { PatternRecord } from "@atlas-patterns/schemas";

export const DecoratorPattern: PatternRecord = {
  slug: "decorator",
  name: "Decorator",
  category: "Structural",
  problem:
    "A system needs to add optional behaviors to an object without creating many subclasses for every feature combination.",
  intent:
    "Wrap an object with other objects that implement the same contract so responsibilities can be layered dynamically.",
  tradeoffs: [
    "Can introduce many small wrapper classes that are harder to trace in debugging",
    "Ordering of decorators matters, so composition needs to be deliberate",
  ],
  languages: ["TypeScript", "Java", "Python"],
  platforms: ["Frontend", "Backend", "Services"],
  integrationNotes:
    "Decorators work well for cross-cutting concerns such as logging, retry, caching, compression, and telemetry because each layer keeps the same interface while adding one concern.",
  scenarios: [
    {
      slug: "notification-delivery",
      title: "Notification delivery",
      summary:
        "A notification service sends a message, while decorators add logging and retry behavior around the same send contract.",
      languageExamples: [
        {
          language: "TypeScript",
          code: `interface Notifier {
  send(message: string): void;
}

class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(\`Email sent: \${message}\`);
  }
}

abstract class NotifierDecorator implements Notifier {
  constructor(protected wrappee: Notifier) {}

  send(message: string): void {
    this.wrappee.send(message);
  }
}

class LoggingNotifier extends NotifierDecorator {
  send(message: string): void {
    console.log("Logging notification");
    super.send(message);
  }
}

class RetryNotifier extends NotifierDecorator {
  send(message: string): void {
    console.log("Retry policy applied");
    super.send(message);
  }
}

const notifier = new RetryNotifier(
  new LoggingNotifier(new EmailNotifier()),
);

notifier.send("Deployment completed");`,
          explanation:
            "The base notifier handles delivery, while logging and retry are layered as decorators that preserve the same interface.",
        },
        {
          language: "Java",
          code: `interface Notifier {
    void send(String message);
}

class EmailNotifier implements Notifier {
    public void send(String message) {
        System.out.println("Email sent: " + message);
    }
}

abstract class NotifierDecorator implements Notifier {
    protected final Notifier wrappee;

    public NotifierDecorator(Notifier wrappee) {
        this.wrappee = wrappee;
    }

    public void send(String message) {
        wrappee.send(message);
    }
}

class LoggingNotifier extends NotifierDecorator {
    public LoggingNotifier(Notifier wrappee) {
        super(wrappee);
    }

    public void send(String message) {
        System.out.println("Logging notification");
        super.send(message);
    }
}

class RetryNotifier extends NotifierDecorator {
    public RetryNotifier(Notifier wrappee) {
        super(wrappee);
    }

    public void send(String message) {
        System.out.println("Retry policy applied");
        super.send(message);
    }
}

Notifier notifier =
    new RetryNotifier(new LoggingNotifier(new EmailNotifier()));

notifier.send("Deployment completed");`,
          explanation:
            "Each decorator wraps the same Notifier interface, so behavior can be stacked without changing the calling code.",
        },
        {
          language: "Python",
          code: `from abc import ABC, abstractmethod

class Notifier(ABC):
    @abstractmethod
    def send(self, message: str) -> None:
        pass

class EmailNotifier(Notifier):
    def send(self, message: str) -> None:
        print(f"Email sent: {message}")

class NotifierDecorator(Notifier):
    def __init__(self, wrappee: Notifier) -> None:
        self.wrappee = wrappee

    def send(self, message: str) -> None:
        self.wrappee.send(message)

class LoggingNotifier(NotifierDecorator):
    def send(self, message: str) -> None:
        print("Logging notification")
        super().send(message)

class RetryNotifier(NotifierDecorator):
    def send(self, message: str) -> None:
        print("Retry policy applied")
        super().send(message)

notifier = RetryNotifier(LoggingNotifier(EmailNotifier()))
notifier.send("Deployment completed")`,
          explanation:
            "The core notifier remains simple while logging and retry are added as interchangeable wrapper layers.",
        },
      ],
    },
    {
      slug: "http-client",
      title: "HTTP client",
      summary:
        "A basic HTTP client performs requests, while decorators add caching and metrics without changing the request interface.",
      languageExamples: [
        {
          language: "TypeScript",
          code: `interface HttpClient {
  get(url: string): string;
}

class BaseHttpClient implements HttpClient {
  get(url: string): string {
    return \`response from \${url}\`;
  }
}

abstract class HttpClientDecorator implements HttpClient {
  constructor(protected wrappee: HttpClient) {}

  get(url: string): string {
    return this.wrappee.get(url);
  }
}

class MetricsHttpClient extends HttpClientDecorator {
  get(url: string): string {
    console.log(\`Measuring request to \${url}\`);
    return super.get(url);
  }
}

class CachingHttpClient extends HttpClientDecorator {
  private cache = new Map<string, string>();

  get(url: string): string {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    const response = super.get(url);
    this.cache.set(url, response);
    return response;
  }
}

const client = new CachingHttpClient(
  new MetricsHttpClient(new BaseHttpClient()),
);

console.log(client.get("/users"));
console.log(client.get("/users"));`,
          explanation:
            "Caching and metrics are independent concerns layered around the same client contract, so they can be combined or removed easily.",
        },
        {
          language: "Java",
          code: `import java.util.HashMap;
import java.util.Map;

interface HttpClient {
    String get(String url);
}

class BaseHttpClient implements HttpClient {
    public String get(String url) {
        return "response from " + url;
    }
}

abstract class HttpClientDecorator implements HttpClient {
    protected final HttpClient wrappee;

    public HttpClientDecorator(HttpClient wrappee) {
        this.wrappee = wrappee;
    }

    public String get(String url) {
        return wrappee.get(url);
    }
}

class MetricsHttpClient extends HttpClientDecorator {
    public MetricsHttpClient(HttpClient wrappee) {
        super(wrappee);
    }

    public String get(String url) {
        System.out.println("Measuring request to " + url);
        return super.get(url);
    }
}

class CachingHttpClient extends HttpClientDecorator {
    private final Map<String, String> cache = new HashMap<>();

    public CachingHttpClient(HttpClient wrappee) {
        super(wrappee);
    }

    public String get(String url) {
        if (cache.containsKey(url)) {
            return cache.get(url);
        }

        String response = super.get(url);
        cache.put(url, response);
        return response;
    }
}

HttpClient client =
    new CachingHttpClient(new MetricsHttpClient(new BaseHttpClient()));

System.out.println(client.get("/users"));
System.out.println(client.get("/users"));`,
          explanation:
            "The client interface stays constant while metrics and caching act as composable wrappers around the base implementation.",
        },
        {
          language: "Python",
          code: `from abc import ABC, abstractmethod

class HttpClient(ABC):
    @abstractmethod
    def get(self, url: str) -> str:
        pass

class BaseHttpClient(HttpClient):
    def get(self, url: str) -> str:
        return f"response from {url}"

class HttpClientDecorator(HttpClient):
    def __init__(self, wrappee: HttpClient) -> None:
        self.wrappee = wrappee

    def get(self, url: str) -> str:
        return self.wrappee.get(url)

class MetricsHttpClient(HttpClientDecorator):
    def get(self, url: str) -> str:
        print(f"Measuring request to {url}")
        return super().get(url)

class CachingHttpClient(HttpClientDecorator):
    def __init__(self, wrappee: HttpClient) -> None:
        super().__init__(wrappee)
        self.cache: dict[str, str] = {}

    def get(self, url: str) -> str:
        if url in self.cache:
            return self.cache[url]

        response = super().get(url)
        self.cache[url] = response
        return response

client = CachingHttpClient(MetricsHttpClient(BaseHttpClient()))
print(client.get("/users"))
print(client.get("/users"))`,
          explanation:
            "The decorators keep the same get contract, which makes it easy to add caching and metrics without changing consumers.",
        },
      ],
    },
    {
      slug: "file-storage",
      title: "File storage",
      summary:
        "A file storage component writes data, while decorators add compression and encryption as optional layers before persistence.",
      languageExamples: [
        {
          language: "TypeScript",
          code: `interface DataSource {
  writeData(data: string): void;
}

class FileDataSource implements DataSource {
  writeData(data: string): void {
    console.log(\`Writing file: \${data}\`);
  }
}

abstract class DataSourceDecorator implements DataSource {
  constructor(protected wrappee: DataSource) {}

  writeData(data: string): void {
    this.wrappee.writeData(data);
  }
}

class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const compressed = \`compressed(\${data})\`;
    super.writeData(compressed);
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const encrypted = \`encrypted(\${data})\`;
    super.writeData(encrypted);
  }
}

const source = new EncryptionDecorator(
  new CompressionDecorator(new FileDataSource()),
);

source.writeData("Quarterly report");`,
          explanation:
            "Compression and encryption are layered independently around the file writer, so storage behavior is extended without altering the base class.",
        },
        {
          language: "Java",
          code: `interface DataSource {
    void writeData(String data);
}

class FileDataSource implements DataSource {
    public void writeData(String data) {
        System.out.println("Writing file: " + data);
    }
}

abstract class DataSourceDecorator implements DataSource {
    protected final DataSource wrappee;

    public DataSourceDecorator(DataSource wrappee) {
        this.wrappee = wrappee;
    }

    public void writeData(String data) {
        wrappee.writeData(data);
    }
}

class CompressionDecorator extends DataSourceDecorator {
    public CompressionDecorator(DataSource wrappee) {
        super(wrappee);
    }

    public void writeData(String data) {
        String compressed = "compressed(" + data + ")";
        super.writeData(compressed);
    }
}

class EncryptionDecorator extends DataSourceDecorator {
    public EncryptionDecorator(DataSource wrappee) {
        super(wrappee);
    }

    public void writeData(String data) {
        String encrypted = "encrypted(" + data + ")";
        super.writeData(encrypted);
    }
}

DataSource source =
    new EncryptionDecorator(new CompressionDecorator(new FileDataSource()));

source.writeData("Quarterly report");`,
          explanation:
            "The base writer focuses on persistence, while decorators add optional transformation steps before writing.",
        },
        {
          language: "Python",
          code: `from abc import ABC, abstractmethod

class DataSource(ABC):
    @abstractmethod
    def write_data(self, data: str) -> None:
        pass

class FileDataSource(DataSource):
    def write_data(self, data: str) -> None:
        print(f"Writing file: {data}")

class DataSourceDecorator(DataSource):
    def __init__(self, wrappee: DataSource) -> None:
        self.wrappee = wrappee

    def write_data(self, data: str) -> None:
        self.wrappee.write_data(data)

class CompressionDecorator(DataSourceDecorator):
    def write_data(self, data: str) -> None:
        compressed = f"compressed({data})"
        super().write_data(compressed)

class EncryptionDecorator(DataSourceDecorator):
    def write_data(self, data: str) -> None:
        encrypted = f"encrypted({data})"
        super().write_data(encrypted)

source = EncryptionDecorator(CompressionDecorator(FileDataSource()))
source.write_data("Quarterly report")`,
          explanation:
            "The writer contract stays unchanged while compression and encryption are added as separate reusable layers.",
        },
      ],
    },
  ],
  realWorldExamples: [
    {
      title: "Service-layer cross-cutting behavior",
      description:
        "Wrap application services with logging, retry, metrics, or authorization without rewriting the core service implementation.",
    },
    {
      title: "HTTP client middleware",
      description:
        "Add caching, telemetry, tracing, or circuit-breaking around a base client while preserving the same request interface.",
    },
    {
      title: "I/O transformation pipelines",
      description:
        "Layer compression and encryption around streams or file writers so data processing concerns remain modular.",
    },
  ],
};
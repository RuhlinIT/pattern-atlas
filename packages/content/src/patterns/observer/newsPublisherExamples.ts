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
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';


@Injectable({ providedIn: 'root' })
class NewsPublisher {
  private headlines = new Subject<string>();


  subscribe(subscriber: Subscriber): Subscription {
    return this.headlines.subscribe((headline) => subscriber.update(headline));
  }


  publish(headline: string): void {
    this.headlines.next(headline);
  }
}


interface Subscriber {
  update(headline: string): void;
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
publisher.publish('New design patterns article is live');`,
    explanation:
      "The Angular publisher service emits one headline stream, and each subscriber reacts independently by subscribing to the published updates.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface Subscriber {
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

function PublishButton({ publisher }: { publisher: NewsPublisher }) {
  return (
    <button onClick={() => publisher.publish("New design patterns article is live")}>
      Publish headline
    </button>
  );
}

export function App() {
  const publisher = useMemo(() => {
    const instance = new NewsPublisher();
    instance.subscribe(new MobileAppSubscriber());
    instance.subscribe(new EmailSubscriber());
    instance.subscribe(new WebSubscriber());
    return instance;
  }, []);

  return (
    <main>
      <h1>News Publisher</h1>
      <PublishButton publisher={publisher} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the publisher in charge of broadcasting while each subscriber updates its own channel independently when a headline is published.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface Subscriber {
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

function PublishButton({ publisher }: { publisher: NewsPublisher }) {
  return (
    <Pressable
      onPress={() => publisher.publish("New design patterns article is live")}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Publish headline</Text>
    </Pressable>
  );
}

export function App() {
  const publisher = useMemo(() => {
    const instance = new NewsPublisher();
    instance.subscribe(new MobileAppSubscriber());
    instance.subscribe(new EmailSubscriber());
    instance.subscribe(new WebSubscriber());
    return instance;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>News Publisher</Text>
        <PublishButton publisher={publisher} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same observer setup, but triggers publication through a mobile-friendly pressable control instead of a web button.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;

public interface ISubscriber
{
    void Update(string headline);
}

public class NewsPublisher
{
    private readonly List<ISubscriber> _subscribers = new();

    public void Subscribe(ISubscriber subscriber)
    {
        _subscribers.Add(subscriber);
    }

    public void Publish(string headline)
    {
        foreach (var subscriber in _subscribers)
        {
            subscriber.Update(headline);
        }
    }
}

public class MobileAppSubscriber : ISubscriber
{
    public void Update(string headline)
    {
        Console.WriteLine($"Mobile app received: {headline}");
    }
}

public class EmailSubscriber : ISubscriber
{
    public void Update(string headline)
    {
        Console.WriteLine($"Email subscriber received: {headline}");
    }
}

public class WebSubscriber : ISubscriber
{
    public void Update(string headline)
    {
        Console.WriteLine($"Web subscriber received: {headline}");
    }
}

var publisher = new NewsPublisher();
publisher.Subscribe(new MobileAppSubscriber());
publisher.Subscribe(new EmailSubscriber());
publisher.Subscribe(new WebSubscriber());
publisher.Publish("New design patterns article is live");`,
    explanation:
      "The C# example models the publisher as the subject and the subscribers as observers, so each channel reacts when a new headline is broadcast.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;

public interface ISubscriber
{
    void Update(string headline);
}

public class NewsPublisher
{
    private readonly List<ISubscriber> _subscribers = new();

    public void Subscribe(ISubscriber subscriber)
    {
        _subscribers.Add(subscriber);
    }

    public void Publish(string headline)
    {
        foreach (var subscriber in _subscribers)
        {
            subscriber.Update(headline);
        }
    }
}

public class MobileAppSubscriber : ISubscriber
{
    public void Update(string headline)
    {
        Console.WriteLine($"Mobile app received: {headline}");
    }
}

public class EmailSubscriber : ISubscriber
{
    public void Update(string headline)
    {
        Console.WriteLine($"Email subscriber received: {headline}");
    }
}

public class WebSubscriber : ISubscriber
{
    public void Update(string headline)
    {
        Console.WriteLine($"Web subscriber received: {headline}");
    }
}

var services = new ServiceCollection();
services.AddSingleton<NewsPublisher>();

var provider = services.BuildServiceProvider();
var publisher = provider.GetRequiredService<NewsPublisher>();
publisher.Subscribe(new MobileAppSubscriber());
publisher.Subscribe(new EmailSubscriber());
publisher.Subscribe(new WebSubscriber());
publisher.Publish("New design patterns article is live");`,
    explanation:
      "The .NET version shows the same observer pattern with dependency injection available for the publisher, while subscribers remain decoupled from the broadcast logic.",
  },
];

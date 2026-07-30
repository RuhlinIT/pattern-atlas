import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const supportTicketChainExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface SupportHandler {
  setNext(handler: SupportHandler): SupportHandler;
  handle(ticket: SupportTicket): string;
}


type SupportTicket = {
  id: string;
  priority: number;
  description: string;
};


abstract class BaseSupportHandler implements SupportHandler {
  protected next: SupportHandler | null = null;


  setNext(handler: SupportHandler): SupportHandler {
    this.next = handler;
    return handler;
  }


  handle(ticket: SupportTicket): string {
    const response = this.process(ticket);
    if (response) {
      return response;
    }


    if (this.next) {
      return this.next.handle(ticket);
    }


    return \`Ticket \${ticket.id} could not be handled\`;
  }


  protected abstract process(ticket: SupportTicket): string | null;
}


class Tier1SupportHandler extends BaseSupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return ticket.priority <= 1
      ? \`Tier 1 resolved ticket \${ticket.id}: \${ticket.description}\`
      : null;
  }
}


class Tier2SupportHandler extends BaseSupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return ticket.priority === 2
      ? \`Tier 2 resolved ticket \${ticket.id}: \${ticket.description}\`
      : null;
  }
}


class Tier3SupportHandler extends BaseSupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return \`Tier 3 resolved ticket \${ticket.id}: \${ticket.description}\`;
  }
}


const chain = new Tier1SupportHandler();
chain.setNext(new Tier2SupportHandler()).setNext(new Tier3SupportHandler());


console.log(chain.handle({ id: "T-1001", priority: 1, description: "Password reset" }));
console.log(chain.handle({ id: "T-1002", priority: 2, description: "Billing issue" }));
console.log(chain.handle({ id: "T-1003", priority: 5, description: "System outage" }));`,
    explanation:
      "The support ticket chain routes each request through tiered handlers, letting lower levels resolve simple tickets and escalating more complex ones automatically.",
  },
  {
    language: "Java",
    code: `interface SupportHandler {
    SupportHandler setNext(SupportHandler handler);
    String handle(SupportTicket ticket);
}


class SupportTicket {
    public final String id;
    public final int priority;
    public final String description;


    public SupportTicket(String id, int priority, String description) {
        this.id = id;
        this.priority = priority;
        this.description = description;
    }
}


abstract class BaseSupportHandler implements SupportHandler {
    protected SupportHandler next;


    public SupportHandler setNext(SupportHandler handler) {
        this.next = handler;
        return handler;
    }


    public String handle(SupportTicket ticket) {
        String response = process(ticket);
        if (response != null) {
            return response;
        }


        if (next != null) {
            return next.handle(ticket);
        }


        return "Ticket " + ticket.id + " could not be handled";
    }


    protected abstract String process(SupportTicket ticket);
}


class Tier1SupportHandler extends BaseSupportHandler {
    protected String process(SupportTicket ticket) {
        return ticket.priority <= 1
            ? "Tier 1 resolved ticket " + ticket.id + ": " + ticket.description
            : null;
    }
}


class Tier2SupportHandler extends BaseSupportHandler {
    protected String process(SupportTicket ticket) {
        return ticket.priority == 2
            ? "Tier 2 resolved ticket " + ticket.id + ": " + ticket.description
            : null;
    }
}


class Tier3SupportHandler extends BaseSupportHandler {
    protected String process(SupportTicket ticket) {
        return "Tier 3 resolved ticket " + ticket.id + ": " + ticket.description;
    }
}


SupportHandler chain = new Tier1SupportHandler();
chain.setNext(new Tier2SupportHandler()).setNext(new Tier3SupportHandler());


System.out.println(chain.handle(new SupportTicket("T-1001", 1, "Password reset")));
System.out.println(chain.handle(new SupportTicket("T-1002", 2, "Billing issue")));
System.out.println(chain.handle(new SupportTicket("T-1003", 5, "System outage")));`,
    explanation:
      "The support ticket chain lets each tier decide whether it can solve the issue or pass it to the next handler in line.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod
from dataclasses import dataclass


@dataclass
class SupportTicket:
    id: str
    priority: int
    description: str


class SupportHandler(ABC):
    def __init__(self) -> None:
        self.next: SupportHandler | None = None


    def set_next(self, handler: "SupportHandler") -> "SupportHandler":
        self.next = handler
        return handler


    def handle(self, ticket: SupportTicket) -> str:
        response = self.process(ticket)
        if response:
            return response


        if self.next:
            return self.next.handle(ticket)


        return f"Ticket {ticket.id} could not be handled"


    @abstractmethod
    def process(self, ticket: SupportTicket) -> str | None:
        pass


class Tier1SupportHandler(SupportHandler):
    def process(self, ticket: SupportTicket) -> str | None:
        return (
            f"Tier 1 resolved ticket {ticket.id}: {ticket.description}"
            if ticket.priority <= 1
            else None
        )


class Tier2SupportHandler(SupportHandler):
    def process(self, ticket: SupportTicket) -> str | None:
        return (
            f"Tier 2 resolved ticket {ticket.id}: {ticket.description}"
            if ticket.priority == 2
            else None
        )


class Tier3SupportHandler(SupportHandler):
    def process(self, ticket: SupportTicket) -> str | None:
        return f"Tier 3 resolved ticket {ticket.id}: {ticket.description}"


chain = Tier1SupportHandler()
chain.set_next(Tier2SupportHandler()).set_next(Tier3SupportHandler())


print(chain.handle(SupportTicket("T-1001", 1, "Password reset")))
print(chain.handle(SupportTicket("T-1002", 2, "Billing issue")))
print(chain.handle(SupportTicket("T-1003", 5, "System outage")))`,
    explanation:
      "The support ticket chain moves each ticket through a sequence of handlers until one tier resolves it.",
  },
  {
    language: "Angular",
    code: `interface SupportTicket {
  id: string;
  priority: number;
  description: string;
}


abstract class SupportHandler {
  protected next: SupportHandler | null = null;


  setNext(handler: SupportHandler): SupportHandler {
    this.next = handler;
    return handler;
  }


  handle(ticket: SupportTicket): string {
    const response = this.process(ticket);
    if (response) {
      return response;
    }


    if (this.next) {
      return this.next.handle(ticket);
    }


    return \`Ticket \${ticket.id} could not be handled\`;
  }


  protected abstract process(ticket: SupportTicket): string | null;
}


class Tier1SupportHandler extends SupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return ticket.priority <= 1
      ? \`Tier 1 resolved ticket \${ticket.id}: \${ticket.description}\`
      : null;
  }
}


class Tier2SupportHandler extends SupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return ticket.priority === 2
      ? \`Tier 2 resolved ticket \${ticket.id}: \${ticket.description}\`
      : null;
  }
}


class Tier3SupportHandler extends SupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return \`Tier 3 resolved ticket \${ticket.id}: \${ticket.description}\`;
  }
}


const chain = new Tier1SupportHandler();
chain.setNext(new Tier2SupportHandler()).setNext(new Tier3SupportHandler());


console.log(chain.handle({ id: "T-1001", priority: 1, description: "Password reset" }));
console.log(chain.handle({ id: "T-1002", priority: 2, description: "Billing issue" }));
console.log(chain.handle({ id: "T-1003", priority: 5, description: "System outage" }));`,
    explanation:
      "The Angular example keeps support routing rules separate and chains them to handle tickets in order.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface SupportTicket {
  id: string;
  priority: number;
  description: string;
}


abstract class SupportHandler {
  protected next: SupportHandler | null = null;


  setNext(handler: SupportHandler): SupportHandler {
    this.next = handler;
    return handler;
  }


  handle(ticket: SupportTicket): string {
    const response = this.process(ticket);
    if (response) {
      return response;
    }


    if (this.next) {
      return this.next.handle(ticket);
    }


    return \`Ticket \${ticket.id} could not be handled\`;
  }


  protected abstract process(ticket: SupportTicket): string | null;
}


class Tier1SupportHandler extends SupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return ticket.priority <= 1
      ? \`Tier 1 resolved ticket \${ticket.id}: \${ticket.description}\`
      : null;
  }
}


class Tier2SupportHandler extends SupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return ticket.priority === 2
      ? \`Tier 2 resolved ticket \${ticket.id}: \${ticket.description}\`
      : null;
  }
}


class Tier3SupportHandler extends SupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return \`Tier 3 resolved ticket \${ticket.id}: \${ticket.description}\`;
  }
}


function TicketPreview({ handler }: { handler: SupportHandler }) {
  return <p>{handler.handle({ id: "T-1002", priority: 2, description: "Billing issue" })}</p>;
}


export function App() {
  const handler = useMemo(() => {
    const chain = new Tier1SupportHandler();
    chain.setNext(new Tier2SupportHandler()).setNext(new Tier3SupportHandler());
    return chain;
  }, []);


  return (
    <main>
      <h1>Support Ticket Chain</h1>
      <TicketPreview handler={handler} />
    </main>
  );
}`,
    explanation:
      "The React example shows how a support ticket can be passed through chained handlers before a response is returned to the UI.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface SupportTicket {
  id: string;
  priority: number;
  description: string;
}


abstract class SupportHandler {
  protected next: SupportHandler | null = null;


  setNext(handler: SupportHandler): SupportHandler {
    this.next = handler;
    return handler;
  }


  handle(ticket: SupportTicket): string {
    const response = this.process(ticket);
    if (response) {
      return response;
    }


    if (this.next) {
      return this.next.handle(ticket);
    }


    return \`Ticket \${ticket.id} could not be handled\`;
  }


  protected abstract process(ticket: SupportTicket): string | null;
}


class Tier1SupportHandler extends SupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return ticket.priority <= 1
      ? \`Tier 1 resolved ticket \${ticket.id}: \${ticket.description}\`
      : null;
  }
}


class Tier2SupportHandler extends SupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return ticket.priority === 2
      ? \`Tier 2 resolved ticket \${ticket.id}: \${ticket.description}\`
      : null;
  }
}


class Tier3SupportHandler extends SupportHandler {
  protected process(ticket: SupportTicket): string | null {
    return \`Tier 3 resolved ticket \${ticket.id}: \${ticket.description}\`;
  }
}


function TicketPreview({ handler }: { handler: SupportHandler }) {
  return (
    <View>
      <Text>{handler.handle({ id: "T-1002", priority: 2, description: "Billing issue" })}</Text>
    </View>
  );
}


export function App() {
  const handler = useMemo(() => {
    const chain = new Tier1SupportHandler();
    chain.setNext(new Tier2SupportHandler()).setNext(new Tier3SupportHandler());
    return chain;
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Support Ticket Chain</Text>
        <TicketPreview handler={handler} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the same support escalation chain and displays the result in a mobile UI.",
  },
  {
    language: "C#",
    code: `using System;


public class SupportTicket
{
    public string Id { get; }
    public int Priority { get; }
    public string Description { get; }


    public SupportTicket(string id, int priority, string description)
    {
        Id = id;
        Priority = priority;
        Description = description;
    }
}


public abstract class SupportHandler
{
    protected SupportHandler Next;


    public SupportHandler SetNext(SupportHandler handler)
    {
        Next = handler;
        return handler;
    }


    public string Handle(SupportTicket ticket)
    {
        var response = Process(ticket);
        if (response != null)
        {
            return response;
        }


        return Next != null ? Next.Handle(ticket) : $"Ticket {ticket.Id} could not be handled";
    }


    protected abstract string Process(SupportTicket ticket);
}


public class Tier1SupportHandler : SupportHandler
{
    protected override string Process(SupportTicket ticket)
    {
        return ticket.Priority <= 1
            ? $"Tier 1 resolved ticket {ticket.Id}: {ticket.Description}"
            : null;
    }
}


public class Tier2SupportHandler : SupportHandler
{
    protected override string Process(SupportTicket ticket)
    {
        return ticket.Priority == 2
            ? $"Tier 2 resolved ticket {ticket.Id}: {ticket.Description}"
            : null;
    }
}


public class Tier3SupportHandler : SupportHandler
{
    protected override string Process(SupportTicket ticket)
    {
        return $"Tier 3 resolved ticket {ticket.Id}: {ticket.Description}";
    }
}


var chain = new Tier1SupportHandler();
chain.SetNext(new Tier2SupportHandler()).SetNext(new Tier3SupportHandler());


Console.WriteLine(chain.Handle(new SupportTicket("T-1001", 1, "Password reset")));
Console.WriteLine(chain.Handle(new SupportTicket("T-1002", 2, "Billing issue")));
Console.WriteLine(chain.Handle(new SupportTicket("T-1003", 5, "System outage")));`,
    explanation:
      "The C# support ticket chain forwards the request through support tiers until the right handler resolves it.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public class SupportTicket
{
    public string Id { get; }
    public int Priority { get; }
    public string Description { get; }


    public SupportTicket(string id, int priority, string description)
    {
        Id = id;
        Priority = priority;
        Description = description;
    }
}


public abstract class SupportHandler
{
    protected SupportHandler Next;


    public SupportHandler SetNext(SupportHandler handler)
    {
        Next = handler;
        return handler;
    }


    public string Handle(SupportTicket ticket)
    {
        var response = Process(ticket);
        if (response != null)
        {
            return response;
        }


        return Next != null ? Next.Handle(ticket) : $"Ticket {ticket.Id} could not be handled";
    }


    protected abstract string Process(SupportTicket ticket);
}


public class Tier1SupportHandler : SupportHandler
{
    protected override string Process(SupportTicket ticket)
    {
        return ticket.Priority <= 1
            ? $"Tier 1 resolved ticket {ticket.Id}: {ticket.Description}"
            : null;
    }
}


public class Tier2SupportHandler : SupportHandler
{
    protected override string Process(SupportTicket ticket)
    {
        return ticket.Priority == 2
            ? $"Tier 2 resolved ticket {ticket.Id}: {ticket.Description}"
            : null;
    }
}


public class Tier3SupportHandler : SupportHandler
{
    protected override string Process(SupportTicket ticket)
    {
        return $"Tier 3 resolved ticket {ticket.Id}: {ticket.Description}";
    }
}


var services = new ServiceCollection();
services.AddSingleton<Tier1SupportHandler>();
services.AddSingleton<Tier2SupportHandler>();
services.AddSingleton<Tier3SupportHandler>();

var provider = services.BuildServiceProvider();
var chain = provider.GetRequiredService<Tier1SupportHandler>();
chain.SetNext(provider.GetRequiredService<Tier2SupportHandler>())
     .SetNext(provider.GetRequiredService<Tier3SupportHandler>());


Console.WriteLine(chain.Handle(new SupportTicket("T-1001", 1, "Password reset")));
Console.WriteLine(chain.Handle(new SupportTicket("T-1002", 2, "Billing issue")));
Console.WriteLine(chain.Handle(new SupportTicket("T-1003", 5, "System outage")));`,
    explanation:
      "The .NET example wires the support chain through dependency injection so each support level stays decoupled and reusable.",
  },
];

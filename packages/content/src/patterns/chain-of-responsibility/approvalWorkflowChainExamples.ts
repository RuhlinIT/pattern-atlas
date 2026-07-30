import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const approvalWorkflowChainExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface ExpenseRequest {
  id: string;
  amount: number;
  description: string;
}


abstract class ApprovalHandler {
  protected next: ApprovalHandler | null = null;


  setNext(handler: ApprovalHandler): ApprovalHandler {
    this.next = handler;
    return handler;
  }


  approve(request: ExpenseRequest): string {
    const result = this.handle(request);
    if (result) {
      return result;
    }


    if (this.next) {
      return this.next.approve(request);
    }


    return \`Expense \${request.id} was not approved\`;
  }


  protected abstract handle(request: ExpenseRequest): string | null;
}


class ManagerApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 500
      ? \`Manager approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


class DirectorApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 2000
      ? \`Director approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


class CEOApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 10000
      ? \`CEO approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


const approvals = new ManagerApprovalHandler();
approvals.setNext(new DirectorApprovalHandler()).setNext(new CEOApprovalHandler());


console.log(approvals.approve({ id: "E-1001", amount: 150, description: "Team lunch" }));
console.log(approvals.approve({ id: "E-1002", amount: 1500, description: "Conference tickets" }));
console.log(approvals.approve({ id: "E-1003", amount: 7000, description: "New laptops" }));`,
    explanation:
      "The approval workflow chain sends expense requests through increasingly senior approvers until one of them can approve the request.",
  },
  {
    language: "Java",
    code: `interface ApprovalHandler {
    ApprovalHandler setNext(ApprovalHandler handler);
    String approve(ExpenseRequest request);
}


class ExpenseRequest {
    public final String id;
    public final double amount;
    public final String description;


    public ExpenseRequest(String id, double amount, String description) {
        this.id = id;
        this.amount = amount;
        this.description = description;
    }
}


abstract class BaseApprovalHandler implements ApprovalHandler {
    protected ApprovalHandler next;


    public ApprovalHandler setNext(ApprovalHandler handler) {
        this.next = handler;
        return handler;
    }


    public String approve(ExpenseRequest request) {
        String result = handle(request);
        if (result != null) {
            return result;
        }


        if (next != null) {
            return next.approve(request);
        }


        return "Expense " + request.id + " was not approved";
    }


    protected abstract String handle(ExpenseRequest request);
}


class ManagerApprovalHandler extends BaseApprovalHandler {
    protected String handle(ExpenseRequest request) {
        return request.amount <= 500
            ? "Manager approved expense " + request.id + ": " + request.description
            : null;
    }
}


class DirectorApprovalHandler extends BaseApprovalHandler {
    protected String handle(ExpenseRequest request) {
        return request.amount <= 2000
            ? "Director approved expense " + request.id + ": " + request.description
            : null;
    }
}


class CEOApprovalHandler extends BaseApprovalHandler {
    protected String handle(ExpenseRequest request) {
        return request.amount <= 10000
            ? "CEO approved expense " + request.id + ": " + request.description
            : null;
    }
}


ApprovalHandler approvals = new ManagerApprovalHandler();
approvals.setNext(new DirectorApprovalHandler()).setNext(new CEOApprovalHandler());


System.out.println(approvals.approve(new ExpenseRequest("E-1001", 150, "Team lunch")));
System.out.println(approvals.approve(new ExpenseRequest("E-1002", 1500, "Conference tickets")));
System.out.println(approvals.approve(new ExpenseRequest("E-1003", 7000, "New laptops")));`,
    explanation:
      "The approval workflow chain keeps approval limits isolated by role while letting requests move forward until the right approver handles them.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod
from dataclasses import dataclass


@dataclass
class ExpenseRequest:
    id: str
    amount: float
    description: str


class ApprovalHandler(ABC):
    def __init__(self) -> None:
        self.next: ApprovalHandler | None = None


    def set_next(self, handler: "ApprovalHandler") -> "ApprovalHandler":
        self.next = handler
        return handler


    def approve(self, request: ExpenseRequest) -> str:
        result = self.handle(request)
        if result:
            return result


        if self.next:
            return self.next.approve(request)


        return f"Expense {request.id} was not approved"


    @abstractmethod
    def handle(self, request: ExpenseRequest) -> str | None:
        pass


class ManagerApprovalHandler(ApprovalHandler):
    def handle(self, request: ExpenseRequest) -> str | None:
        return (
            f"Manager approved expense {request.id}: {request.description}"
            if request.amount <= 500
            else None
        )


class DirectorApprovalHandler(ApprovalHandler):
    def handle(self, request: ExpenseRequest) -> str | None:
        return (
            f"Director approved expense {request.id}: {request.description}"
            if request.amount <= 2000
            else None
        )


class CEOApprovalHandler(ApprovalHandler):
    def handle(self, request: ExpenseRequest) -> str | None:
        return (
            f"CEO approved expense {request.id}: {request.description}"
            if request.amount <= 10000
            else None
        )


approvals = ManagerApprovalHandler()
approvals.set_next(DirectorApprovalHandler()).set_next(CEOApprovalHandler())


print(approvals.approve(ExpenseRequest("E-1001", 150, "Team lunch")))
print(approvals.approve(ExpenseRequest("E-1002", 1500, "Conference tickets")))
print(approvals.approve(ExpenseRequest("E-1003", 7000, "New laptops")))`,
    explanation:
      "The approval workflow chain lets each approver decide whether the expense fits their limit or should be escalated upward.",
  },
  {
    language: "Angular",
    code: `interface ExpenseRequest {
  id: string;
  amount: number;
  description: string;
}


abstract class ApprovalHandler {
  protected next: ApprovalHandler | null = null;


  setNext(handler: ApprovalHandler): ApprovalHandler {
    this.next = handler;
    return handler;
  }


  approve(request: ExpenseRequest): string {
    const result = this.handle(request);
    if (result) {
      return result;
    }


    if (this.next) {
      return this.next.approve(request);
    }


    return \`Expense \${request.id} was not approved\`;
  }


  protected abstract handle(request: ExpenseRequest): string | null;
}


class ManagerApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 500
      ? \`Manager approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


class DirectorApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 2000
      ? \`Director approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


class CEOApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 10000
      ? \`CEO approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


const approvals = new ManagerApprovalHandler();
approvals.setNext(new DirectorApprovalHandler()).setNext(new CEOApprovalHandler());


console.log(approvals.approve({ id: "E-1001", amount: 150, description: "Team lunch" }));
console.log(approvals.approve({ id: "E-1002", amount: 1500, description: "Conference tickets" }));
console.log(approvals.approve({ id: "E-1003", amount: 7000, description: "New laptops" }));`,
    explanation:
      "The Angular version models the approval path as a chain of handlers, each with a different limit and responsibility.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface ExpenseRequest {
  id: string;
  amount: number;
  description: string;
}


abstract class ApprovalHandler {
  protected next: ApprovalHandler | null = null;


  setNext(handler: ApprovalHandler): ApprovalHandler {
    this.next = handler;
    return handler;
  }


  approve(request: ExpenseRequest): string {
    const result = this.handle(request);
    if (result) {
      return result;
    }


    if (this.next) {
      return this.next.approve(request);
    }


    return \`Expense \${request.id} was not approved\`;
  }


  protected abstract handle(request: ExpenseRequest): string | null;
}


class ManagerApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 500
      ? \`Manager approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


class DirectorApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 2000
      ? \`Director approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


class CEOApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 10000
      ? \`CEO approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


function ApprovalPreview({ handler }: { handler: ApprovalHandler }) {
  return <p>{handler.approve({ id: "E-1002", amount: 1500, description: "Conference tickets" })}</p>;
}


export function App() {
  const handler = useMemo(() => {
    const approvals = new ManagerApprovalHandler();
    approvals.setNext(new DirectorApprovalHandler()).setNext(new CEOApprovalHandler());
    return approvals;
  }, []);


  return (
    <main>
      <h1>Approval Workflow Chain</h1>
      <ApprovalPreview handler={handler} />
    </main>
  );
}`,
    explanation:
      "The React example shows approval routing as a reusable chain that determines who can approve an expense request.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface ExpenseRequest {
  id: string;
  amount: number;
  description: string;
}


abstract class ApprovalHandler {
  protected next: ApprovalHandler | null = null;


  setNext(handler: ApprovalHandler): ApprovalHandler {
    this.next = handler;
    return handler;
  }


  approve(request: ExpenseRequest): string {
    const result = this.handle(request);
    if (result) {
      return result;
    }


    if (this.next) {
      return this.next.approve(request);
    }


    return \`Expense \${request.id} was not approved\`;
  }


  protected abstract handle(request: ExpenseRequest): string | null;
}


class ManagerApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 500
      ? \`Manager approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


class DirectorApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 2000
      ? \`Director approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


class CEOApprovalHandler extends ApprovalHandler {
  protected handle(request: ExpenseRequest): string | null {
    return request.amount <= 10000
      ? \`CEO approved expense \${request.id}: \${request.description}\`
      : null;
  }
}


function ApprovalPreview({ handler }: { handler: ApprovalHandler }) {
  return (
    <View>
      <Text>{handler.approve({ id: "E-1002", amount: 1500, description: "Conference tickets" })}</Text>
    </View>
  );
}


export function App() {
  const handler = useMemo(() => {
    const approvals = new ManagerApprovalHandler();
    approvals.setNext(new DirectorApprovalHandler()).setNext(new CEOApprovalHandler());
    return approvals;
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Approval Workflow Chain</Text>
        <ApprovalPreview handler={handler} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same approval chain and presents the outcome in a simple mobile interface.",
  },
  {
    language: "C#",
    code: `using System;


public class ExpenseRequest
{
    public string Id { get; }
    public decimal Amount { get; }
    public string Description { get; }


    public ExpenseRequest(string id, decimal amount, string description)
    {
        Id = id;
        Amount = amount;
        Description = description;
    }
}


public abstract class ApprovalHandler
{
    protected ApprovalHandler Next;


    public ApprovalHandler SetNext(ApprovalHandler handler)
    {
        Next = handler;
        return handler;
    }


    public string Approve(ExpenseRequest request)
    {
        var result = Handle(request);
        if (result != null)
        {
            return result;
        }


        return Next != null ? Next.Approve(request) : $"Expense {request.Id} was not approved";
    }


    protected abstract string Handle(ExpenseRequest request);
}


public class ManagerApprovalHandler : ApprovalHandler
{
    protected override string Handle(ExpenseRequest request)
    {
        return request.Amount <= 500
            ? $"Manager approved expense {request.Id}: {request.Description}"
            : null;
    }
}


public class DirectorApprovalHandler : ApprovalHandler
{
    protected override string Handle(ExpenseRequest request)
    {
        return request.Amount <= 2000
            ? $"Director approved expense {request.Id}: {request.Description}"
            : null;
    }
}


public class CEOApprovalHandler : ApprovalHandler
{
    protected override string Handle(ExpenseRequest request)
    {
        return request.Amount <= 10000
            ? $"CEO approved expense {request.Id}: {request.Description}"
            : null;
    }
}


var approvals = new ManagerApprovalHandler();
approvals.SetNext(new DirectorApprovalHandler()).SetNext(new CEOApprovalHandler());


Console.WriteLine(approvals.Approve(new ExpenseRequest("E-1001", 150, "Team lunch")));
Console.WriteLine(approvals.Approve(new ExpenseRequest("E-1002", 1500, "Conference tickets")));
Console.WriteLine(approvals.Approve(new ExpenseRequest("E-1003", 7000, "New laptops")));`,
    explanation:
      "The C# approval workflow chain routes expense requests through approval levels until one handler can sign off.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public class ExpenseRequest
{
    public string Id { get; }
    public decimal Amount { get; }
    public string Description { get; }


    public ExpenseRequest(string id, decimal amount, string description)
    {
        Id = id;
        Amount = amount;
        Description = description;
    }
}


public abstract class ApprovalHandler
{
    protected ApprovalHandler Next;


    public ApprovalHandler SetNext(ApprovalHandler handler)
    {
        Next = handler;
        return handler;
    }


    public string Approve(ExpenseRequest request)
    {
        var result = Handle(request);
        if (result != null)
        {
            return result;
        }


        return Next != null ? Next.Approve(request) : $"Expense {request.Id} was not approved";
    }


    protected abstract string Handle(ExpenseRequest request);
}


public class ManagerApprovalHandler : ApprovalHandler
{
    protected override string Handle(ExpenseRequest request)
    {
        return request.Amount <= 500
            ? $"Manager approved expense {request.Id}: {request.Description}"
            : null;
    }
}


public class DirectorApprovalHandler : ApprovalHandler
{
    protected override string Handle(ExpenseRequest request)
    {
        return request.Amount <= 2000
            ? $"Director approved expense {request.Id}: {request.Description}"
            : null;
    }
}


public class CEOApprovalHandler : ApprovalHandler
{
    protected override string Handle(ExpenseRequest request)
    {
        return request.Amount <= 10000
            ? $"CEO approved expense {request.Id}: {request.Description}"
            : null;
    }
}


var services = new ServiceCollection();
services.AddSingleton<ManagerApprovalHandler>();
services.AddSingleton<DirectorApprovalHandler>();
services.AddSingleton<CEOApprovalHandler>();

var provider = services.BuildServiceProvider();
var approvals = provider.GetRequiredService<ManagerApprovalHandler>();
approvals.SetNext(provider.GetRequiredService<DirectorApprovalHandler>())
         .SetNext(provider.GetRequiredService<CEOApprovalHandler>());


Console.WriteLine(approvals.Approve(new ExpenseRequest("E-1001", 150, "Team lunch")));
Console.WriteLine(approvals.Approve(new ExpenseRequest("E-1002", 1500, "Conference tickets")));
Console.WriteLine(approvals.Approve(new ExpenseRequest("E-1003", 7000, "New laptops")));`,
    explanation:
      "The .NET example connects the approval chain through dependency injection so each approver stays independent and reusable.",
  },
];

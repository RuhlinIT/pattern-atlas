import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const booleanRuleInterpreterExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Context {
  role: string;
  active: boolean;
  premium: boolean;
}


interface BooleanExpression {
  interpret(context: Context): boolean;
}


class RoleExpression implements BooleanExpression {
  constructor(private expectedRole: string) {}


  interpret(context: Context): boolean {
    return context.role === this.expectedRole;
  }
}


class ActiveExpression implements BooleanExpression {
  interpret(context: Context): boolean {
    return context.active;
  }
}


class PremiumExpression implements BooleanExpression {
  interpret(context: Context): boolean {
    return context.premium;
  }
}


class AndExpression implements BooleanExpression {
  constructor(private left: BooleanExpression, private right: BooleanExpression) {}


  interpret(context: Context): boolean {
    return this.left.interpret(context) && this.right.interpret(context);
  }
}


class OrExpression implements BooleanExpression {
  constructor(private left: BooleanExpression, private right: BooleanExpression) {}


  interpret(context: Context): boolean {
    return this.left.interpret(context) || this.right.interpret(context);
  }
}


const isEligible = new AndExpression(
  new OrExpression(new RoleExpression("admin"), new PremiumExpression()),
  new ActiveExpression()
);


console.log(isEligible.interpret({ role: "admin", active: true, premium: false }));
console.log(isEligible.interpret({ role: "user", active: true, premium: true }));
console.log(isEligible.interpret({ role: "user", active: false, premium: true }));`,
    explanation:
      "The boolean rule interpreter evaluates a small access-control language by combining simple expressions with AND and OR nodes.",
  },
  {
    language: "Java",
    code: `interface Context {
    String role();
    boolean active();
    boolean premium();
}


interface BooleanExpression {
    boolean interpret(Context context);
}


class RoleExpression implements BooleanExpression {
    private final String expectedRole;


    public RoleExpression(String expectedRole) {
        this.expectedRole = expectedRole;
    }


    public boolean interpret(Context context) {
        return context.role().equals(expectedRole);
    }
}


class ActiveExpression implements BooleanExpression {
    public boolean interpret(Context context) {
        return context.active();
    }
}


class PremiumExpression implements BooleanExpression {
    public boolean interpret(Context context) {
        return context.premium();
    }
}


class AndExpression implements BooleanExpression {
    private final BooleanExpression left;
    private final BooleanExpression right;


    public AndExpression(BooleanExpression left, BooleanExpression right) {
        this.left = left;
        this.right = right;
    }


    public boolean interpret(Context context) {
        return left.interpret(context) && right.interpret(context);
    }
}


class OrExpression implements BooleanExpression {
    private final BooleanExpression left;
    private final BooleanExpression right;


    public OrExpression(BooleanExpression left, BooleanExpression right) {
        this.left = left;
        this.right = right;
    }


    public boolean interpret(Context context) {
        return left.interpret(context) || right.interpret(context);
    }
}


BooleanExpression isEligible = new AndExpression(
    new OrExpression(new RoleExpression("admin"), new PremiumExpression()),
    new ActiveExpression()
);


System.out.println(isEligible.interpret(new Context() {
    public String role() { return "admin"; }
    public boolean active() { return true; }
    public boolean premium() { return false; }
}));

System.out.println(isEligible.interpret(new Context() {
    public String role() { return "user"; }
    public boolean active() { return true; }
    public boolean premium() { return true; }
}));

System.out.println(isEligible.interpret(new Context() {
    public String role() { return "user"; }
    public boolean active() { return false; }
    public boolean premium() { return true; }
}));`,
    explanation:
      "The Java version interprets a simple boolean grammar for eligibility checks using composable expression objects.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod
from dataclasses import dataclass


@dataclass
class Context:
    role: str
    active: bool
    premium: bool


class BooleanExpression(ABC):
    @abstractmethod
    def interpret(self, context: Context) -> bool:
        pass


class RoleExpression(BooleanExpression):
    def __init__(self, expected_role: str) -> None:
        self.expected_role = expected_role


    def interpret(self, context: Context) -> bool:
        return context.role == self.expected_role


class ActiveExpression(BooleanExpression):
    def interpret(self, context: Context) -> bool:
        return context.active


class PremiumExpression(BooleanExpression):
    def interpret(self, context: Context) -> bool:
        return context.premium


class AndExpression(BooleanExpression):
    def __init__(self, left: BooleanExpression, right: BooleanExpression) -> None:
        self.left = left
        self.right = right


    def interpret(self, context: Context) -> bool:
        return self.left.interpret(context) and self.right.interpret(context)


class OrExpression(BooleanExpression):
    def __init__(self, left: BooleanExpression, right: BooleanExpression) -> None:
        self.left = left
        self.right = right


    def interpret(self, context: Context) -> bool:
        return self.left.interpret(context) or self.right.interpret(context)


is_eligible = AndExpression(
    OrExpression(RoleExpression("admin"), PremiumExpression()),
    ActiveExpression()
)


print(is_eligible.interpret(Context("admin", True, False)))
print(is_eligible.interpret(Context("user", True, True)))
print(is_eligible.interpret(Context("user", False, True)))`,
    explanation:
      "The Python example interprets a small access rule language by combining terminal and non-terminal expressions.",
  },
  {
    language: "Angular",
    code: `interface Context {
  role: string;
  active: boolean;
  premium: boolean;
}


interface BooleanExpression {
  interpret(context: Context): boolean;
}


class RoleExpression implements BooleanExpression {
  constructor(private expectedRole: string) {}


  interpret(context: Context): boolean {
    return context.role === this.expectedRole;
  }
}


class ActiveExpression implements BooleanExpression {
  interpret(context: Context): boolean {
    return context.active;
  }
}


class PremiumExpression implements BooleanExpression {
  interpret(context: Context): boolean {
    return context.premium;
  }
}


class AndExpression implements BooleanExpression {
  constructor(private left: BooleanExpression, private right: BooleanExpression) {}


  interpret(context: Context): boolean {
    return this.left.interpret(context) && this.right.interpret(context);
  }
}


class OrExpression implements BooleanExpression {
  constructor(private left: BooleanExpression, private right: BooleanExpression) {}


  interpret(context: Context): boolean {
    return this.left.interpret(context) || this.right.interpret(context);
  }
}


const isEligible = new AndExpression(
  new OrExpression(new RoleExpression("admin"), new PremiumExpression()),
  new ActiveExpression()
);


console.log(isEligible.interpret({ role: "admin", active: true, premium: false }));
console.log(isEligible.interpret({ role: "user", active: true, premium: true }));
console.log(isEligible.interpret({ role: "user", active: false, premium: true }));`,
    explanation:
      "The Angular example treats each rule as an expression object and evaluates the rule tree against a context.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface Context {
  role: string;
  active: boolean;
  premium: boolean;
}


interface BooleanExpression {
  interpret(context: Context): boolean;
}


class RoleExpression implements BooleanExpression {
  constructor(private expectedRole: string) {}


  interpret(context: Context): boolean {
    return context.role === this.expectedRole;
  }
}


class ActiveExpression implements BooleanExpression {
  interpret(context: Context): boolean {
    return context.active;
  }
}


class PremiumExpression implements BooleanExpression {
  interpret(context: Context): boolean {
    return context.premium;
  }
}


class AndExpression implements BooleanExpression {
  constructor(private left: BooleanExpression, private right: BooleanExpression) {}


  interpret(context: Context): boolean {
    return this.left.interpret(context) && this.right.interpret(context);
  }
}


class OrExpression implements BooleanExpression {
  constructor(private left: BooleanExpression, private right: BooleanExpression) {}


  interpret(context: Context): boolean {
    return this.left.interpret(context) || this.right.interpret(context);
  }
}


function EligibilityPreview({ rule }: { rule: BooleanExpression }) {
  return <p>{String(rule.interpret({ role: "user", active: true, premium: true }))}</p>;
}


export function App() {
  const rule = useMemo(
    () =>
      new AndExpression(
        new OrExpression(new RoleExpression("admin"), new PremiumExpression()),
        new ActiveExpression()
      ),
    []
  );


  return (
    <main>
      <h1>Boolean Rule Interpreter</h1>
      <EligibilityPreview rule={rule} />
    </main>
  );
}`,
    explanation:
      "The React example evaluates eligibility rules through a composed interpreter tree while the UI displays the final boolean result.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface Context {
  role: string;
  active: boolean;
  premium: boolean;
}


interface BooleanExpression {
  interpret(context: Context): boolean;
}


class RoleExpression implements BooleanExpression {
  constructor(private expectedRole: string) {}


  interpret(context: Context): boolean {
    return context.role === this.expectedRole;
  }
}


class ActiveExpression implements BooleanExpression {
  interpret(context: Context): boolean {
    return context.active;
  }
}


class PremiumExpression implements BooleanExpression {
  interpret(context: Context): boolean {
    return context.premium;
  }
}


class AndExpression implements BooleanExpression {
  constructor(private left: BooleanExpression, private right: BooleanExpression) {}


  interpret(context: Context): boolean {
    return this.left.interpret(context) && this.right.interpret(context);
  }
}


class OrExpression implements BooleanExpression {
  constructor(private left: BooleanExpression, private right: BooleanExpression) {}


  interpret(context: Context): boolean {
    return this.left.interpret(context) || this.right.interpret(context);
  }
}


function EligibilityPreview({ rule }: { rule: BooleanExpression }) {
  return (
    <View>
      <Text>{String(rule.interpret({ role: "user", active: true, premium: true }))}</Text>
    </View>
  );
}


export function App() {
  const rule = useMemo(
    () =>
      new AndExpression(
        new OrExpression(new RoleExpression("admin"), new PremiumExpression()),
        new ActiveExpression()
      ),
    []
  );


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Boolean Rule Interpreter</Text>
        <EligibilityPreview rule={rule} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the same interpreter tree to evaluate access rules and display the result on mobile.",
  },
  {
    language: "C#",
    code: `using System;


public class Context
{
    public string Role { get; }
    public bool Active { get; }
    public bool Premium { get; }


    public Context(string role, bool active, bool premium)
    {
        Role = role;
        Active = active;
        Premium = premium;
    }
}


public interface IBooleanExpression
{
    bool Interpret(Context context);
}


public class RoleExpression : IBooleanExpression
{
    private readonly string _expectedRole;


    public RoleExpression(string expectedRole)
    {
        _expectedRole = expectedRole;
    }


    public bool Interpret(Context context)
    {
        return context.Role == _expectedRole;
    }
}


public class ActiveExpression : IBooleanExpression
{
    public bool Interpret(Context context)
    {
        return context.Active;
    }
}


public class PremiumExpression : IBooleanExpression
{
    public bool Interpret(Context context)
    {
        return context.Premium;
    }
}


public class AndExpression : IBooleanExpression
{
    private readonly IBooleanExpression _left;
    private readonly IBooleanExpression _right;


    public AndExpression(IBooleanExpression left, IBooleanExpression right)
    {
        _left = left;
        _right = right;
    }


    public bool Interpret(Context context)
    {
        return _left.Interpret(context) && _right.Interpret(context);
    }
}


public class OrExpression : IBooleanExpression
{
    private readonly IBooleanExpression _left;
    private readonly IBooleanExpression _right;


    public OrExpression(IBooleanExpression left, IBooleanExpression right)
    {
        _left = left;
        _right = right;
    }


    public bool Interpret(Context context)
    {
        return _left.Interpret(context) || _right.Interpret(context);
    }
}


var rule = new AndExpression(
    new OrExpression(new RoleExpression("admin"), new PremiumExpression()),
    new ActiveExpression()
);


Console.WriteLine(rule.Interpret(new Context("admin", true, false)));
Console.WriteLine(rule.Interpret(new Context("user", true, true)));
Console.WriteLine(rule.Interpret(new Context("user", false, true)));`,
    explanation:
      "The C# example interprets a boolean grammar for eligibility checks using composable expression objects.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public class Context
{
    public string Role { get; }
    public bool Active { get; }
    public bool Premium { get; }


    public Context(string role, bool active, bool premium)
    {
        Role = role;
        Active = active;
        Premium = premium;
    }
}


public interface IBooleanExpression
{
    bool Interpret(Context context);
}


public class RoleExpression : IBooleanExpression
{
    private readonly string _expectedRole;


    public RoleExpression(string expectedRole)
    {
        _expectedRole = expectedRole;
    }


    public bool Interpret(Context context)
    {
        return context.Role == _expectedRole;
    }
}


public class ActiveExpression : IBooleanExpression
{
    public bool Interpret(Context context)
    {
        return context.Active;
    }
}


public class PremiumExpression : IBooleanExpression
{
    public bool Interpret(Context context)
    {
        return context.Premium;
    }
}


public class AndExpression : IBooleanExpression
{
    private readonly IBooleanExpression _left;
    private readonly IBooleanExpression _right;


    public AndExpression(IBooleanExpression left, IBooleanExpression right)
    {
        _left = left;
        _right = right;
    }


    public bool Interpret(Context context)
    {
        return _left.Interpret(context) && _right.Interpret(context);
    }
}


public class OrExpression : IBooleanExpression
{
    private readonly IBooleanExpression _left;
    private readonly IBooleanExpression _right;


    public OrExpression(IBooleanExpression left, IBooleanExpression right)
    {
        _left = left;
        _right = right;
    }


    public bool Interpret(Context context)
    {
        return _left.Interpret(context) || _right.Interpret(context);
    }
}


var services = new ServiceCollection();
services.AddSingleton<IBooleanExpression>(
    new AndExpression(
        new OrExpression(new RoleExpression("admin"), new PremiumExpression()),
        new ActiveExpression()
    )
);


var provider = services.BuildServiceProvider();
var rule = provider.GetRequiredService<IBooleanExpression>();

Console.WriteLine(rule.Interpret(new Context("admin", true, false)));
Console.WriteLine(rule.Interpret(new Context("user", true, true)));
Console.WriteLine(rule.Interpret(new Context("user", false, true)));`,
    explanation:
      "The .NET example registers the boolean interpreter as a service so the rule can be reused anywhere in the application.",
  },
];

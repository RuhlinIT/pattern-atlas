import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const passwordValidationChainExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `abstract class PasswordRule {
  protected next: PasswordRule | null = null;


  setNext(rule: PasswordRule): PasswordRule {
    this.next = rule;
    return rule;
  }


  validate(password: string): string | null {
    const error = this.check(password);
    if (error) {
      return error;
    }


    if (this.next) {
      return this.next.validate(password);
    }


    return null;
  }


  protected abstract check(password: string): string | null;
}


class MinLengthRule extends PasswordRule {
  constructor(private minLength: number) {
    super();
  }


  protected check(password: string): string | null {
    return password.length < this.minLength
      ? \`Password must be at least \${this.minLength} characters\`
      : null;
  }
}


class HasNumberRule extends PasswordRule {
  protected check(password: string): string | null {
    return /[0-9]/.test(password) ? null : "Password must contain a number";
  }
}


class HasSymbolRule extends PasswordRule {
  protected check(password: string): string | null {
    return /[^a-zA-Z0-9]/.test(password) ? null : "Password must contain a symbol";
  }
}


const rules = new MinLengthRule(8);
rules.setNext(new HasNumberRule()).setNext(new HasSymbolRule());


console.log(rules.validate("abc"));
console.log(rules.validate("abc123!"));`,
    explanation:
      "The password validation chain checks each rule in order and stops when one rule fails, which keeps validation logic modular and easy to extend.",
  },
  {
    language: "Java",
    code: `abstract class PasswordRule {
    protected PasswordRule next;


    public PasswordRule setNext(PasswordRule rule) {
        this.next = rule;
        return rule;
    }


    public String validate(String password) {
        String error = check(password);
        if (error != null) {
            return error;
        }


        if (next != null) {
            return next.validate(password);
        }


        return null;
    }


    protected abstract String check(String password);
}


class MinLengthRule extends PasswordRule {
    private final int minLength;


    public MinLengthRule(int minLength) {
        this.minLength = minLength;
    }


    protected String check(String password) {
        return password.length() < minLength
            ? "Password must be at least " + minLength + " characters"
            : null;
    }
}


class HasNumberRule extends PasswordRule {
    protected String check(String password) {
        return password.matches(".*[0-9].*") ? null : "Password must contain a number";
    }
}


class HasSymbolRule extends PasswordRule {
    protected String check(String password) {
        return password.matches(".*[^a-zA-Z0-9].*") ? null : "Password must contain a symbol";
    }
}


PasswordRule rules = new MinLengthRule(8);
rules.setNext(new HasNumberRule()).setNext(new HasSymbolRule());


System.out.println(rules.validate("abc"));
System.out.println(rules.validate("abc123!"));`,
    explanation:
      "The password validation chain lets each rule decide whether to accept the password or pass it to the next validator.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class PasswordRule(ABC):
    def __init__(self) -> None:
        self.next: PasswordRule | None = None


    def set_next(self, rule: "PasswordRule") -> "PasswordRule":
        self.next = rule
        return rule


    def validate(self, password: str) -> str | None:
        error = self.check(password)
        if error:
            return error


        if self.next:
            return self.next.validate(password)


        return None


    @abstractmethod
    def check(self, password: str) -> str | None:
        pass


class MinLengthRule(PasswordRule):
    def __init__(self, min_length: int) -> None:
        super().__init__()
        self.min_length = min_length


    def check(self, password: str) -> str | None:
        if len(password) < self.min_length:
            return f"Password must be at least {self.min_length} characters"
        return None


class HasNumberRule(PasswordRule):
    def check(self, password: str) -> str | None:
        return None if any(char.isdigit() for char in password) else "Password must contain a number"


class HasSymbolRule(PasswordRule):
    def check(self, password: str) -> str | None:
        return None if any(not char.isalnum() for char in password) else "Password must contain a symbol"


rules = MinLengthRule(8)
rules.set_next(HasNumberRule()).set_next(HasSymbolRule())


print(rules.validate("abc"))
print(rules.validate("abc123!"))`,
    explanation:
      "The password validation chain lets each rule validate independently, then passes the password along only if the current rule succeeds.",
  },
  {
    language: "Angular",
    code: `abstract class PasswordRule {
  protected next: PasswordRule | null = null;


  setNext(rule: PasswordRule): PasswordRule {
    this.next = rule;
    return rule;
  }


  validate(password: string): string | null {
    const error = this.check(password);
    if (error) {
      return error;
    }


    if (this.next) {
      return this.next.validate(password);
    }


    return null;
  }


  protected abstract check(password: string): string | null;
}


class MinLengthRule extends PasswordRule {
  constructor(private minLength: number) {
    super();
  }


  protected check(password: string): string | null {
    return password.length < this.minLength
      ? \`Password must be at least \${this.minLength} characters\`
      : null;
  }
}


class HasNumberRule extends PasswordRule {
  protected check(password: string): string | null {
    return /[0-9]/.test(password) ? null : "Password must contain a number";
  }
}


class HasSymbolRule extends PasswordRule {
  protected check(password: string): string | null {
    return /[^a-zA-Z0-9]/.test(password) ? null : "Password must contain a symbol";
  }
}


const rules = new MinLengthRule(8);
rules.setNext(new HasNumberRule()).setNext(new HasSymbolRule());


console.log(rules.validate("abc"));
console.log(rules.validate("abc123!"));`,
    explanation:
      "The Angular example keeps password rules separate and chains them together so validation logic remains flexible.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


abstract class PasswordRule {
  protected next: PasswordRule | null = null;


  setNext(rule: PasswordRule): PasswordRule {
    this.next = rule;
    return rule;
  }


  validate(password: string): string | null {
    const error = this.check(password);
    if (error) {
      return error;
    }


    if (this.next) {
      return this.next.validate(password);
    }


    return null;
  }


  protected abstract check(password: string): string | null;
}


class MinLengthRule extends PasswordRule {
  constructor(private minLength: number) {
    super();
  }


  protected check(password: string): string | null {
    return password.length < this.minLength
      ? \`Password must be at least \${this.minLength} characters\`
      : null;
  }
}


class HasNumberRule extends PasswordRule {
  protected check(password: string): string | null {
    return /[0-9]/.test(password) ? null : "Password must contain a number";
  }
}


class HasSymbolRule extends PasswordRule {
  protected check(password: string): string | null {
    return /[^a-zA-Z0-9]/.test(password) ? null : "Password must contain a symbol";
  }
}


function PasswordPreview({ rule }: { rule: PasswordRule }) {
  return <p>{rule.validate("abc123!") ?? "Password accepted"}</p>;
}


export function App() {
  const rule = useMemo(() => {
    const rules = new MinLengthRule(8);
    rules.setNext(new HasNumberRule()).setNext(new HasSymbolRule());
    return rules;
  }, []);


  return (
    <main>
      <h1>Password Validation Chain</h1>
      <PasswordPreview rule={rule} />
    </main>
  );
}`,
    explanation:
      "The React example uses the validation chain to evaluate passwords step by step while keeping each rule independent.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


abstract class PasswordRule {
  protected next: PasswordRule | null = null;


  setNext(rule: PasswordRule): PasswordRule {
    this.next = rule;
    return rule;
  }


  validate(password: string): string | null {
    const error = this.check(password);
    if (error) {
      return error;
    }


    if (this.next) {
      return this.next.validate(password);
    }


    return null;
  }


  protected abstract check(password: string): string | null;
}


class MinLengthRule extends PasswordRule {
  constructor(private minLength: number) {
    super();
  }


  protected check(password: string): string | null {
    return password.length < this.minLength
      ? \`Password must be at least \${this.minLength} characters\`
      : null;
  }
}


class HasNumberRule extends PasswordRule {
  protected check(password: string): string | null {
    return /[0-9]/.test(password) ? null : "Password must contain a number";
  }
}


class HasSymbolRule extends PasswordRule {
  protected check(password: string): string | null {
    return /[^a-zA-Z0-9]/.test(password) ? null : "Password must contain a symbol";
  }
}


function PasswordPreview({ rule }: { rule: PasswordRule }) {
  return (
    <View>
      <Text>{rule.validate("abc123!") ?? "Password accepted"}</Text>
    </View>
  );
}


export function App() {
  const rule = useMemo(() => {
    const rules = new MinLengthRule(8);
    rules.setNext(new HasNumberRule()).setNext(new HasSymbolRule());
    return rules;
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Password Validation Chain</Text>
        <PasswordPreview rule={rule} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example runs the same chained password rules and displays the validation result in a mobile-friendly layout.",
  },
  {
    language: "C#",
    code: `using System;


public abstract class PasswordRule
{
    protected PasswordRule Next;


    public PasswordRule SetNext(PasswordRule rule)
    {
        Next = rule;
        return rule;
    }


    public string Validate(string password)
    {
        var error = Check(password);
        if (error != null)
        {
            return error;
        }


        return Next != null ? Next.Validate(password) : null;
    }


    protected abstract string Check(string password);
}


public class MinLengthRule : PasswordRule
{
    private readonly int _minLength;


    public MinLengthRule(int minLength)
    {
        _minLength = minLength;
    }


    protected override string Check(string password)
    {
        return password.Length < _minLength
            ? $"Password must be at least {_minLength} characters"
            : null;
    }
}


public class HasNumberRule : PasswordRule
{
    protected override string Check(string password)
    {
        return System.Text.RegularExpressions.Regex.IsMatch(password, @".*[0-9].*")
            ? null
            : "Password must contain a number";
    }
}


public class HasSymbolRule : PasswordRule
{
    protected override string Check(string password)
    {
        return System.Text.RegularExpressions.Regex.IsMatch(password, @".*[^a-zA-Z0-9].*")
            ? null
            : "Password must contain a symbol";
    }
}


var rules = new MinLengthRule(8);
rules.SetNext(new HasNumberRule()).SetNext(new HasSymbolRule());


Console.WriteLine(rules.Validate("abc"));
Console.WriteLine(rules.Validate("abc123!"));`,
    explanation:
      "The C# password validation chain keeps each rule isolated while allowing the request to move through the sequence until it fails or succeeds.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public abstract class PasswordRule
{
    protected PasswordRule Next;


    public PasswordRule SetNext(PasswordRule rule)
    {
        Next = rule;
        return rule;
    }


    public string Validate(string password)
    {
        var error = Check(password);
        if (error != null)
        {
            return error;
        }


        return Next != null ? Next.Validate(password) : null;
    }


    protected abstract string Check(string password);
}


public class MinLengthRule : PasswordRule
{
    private readonly int _minLength;


    public MinLengthRule(int minLength)
    {
        _minLength = minLength;
    }


    protected override string Check(string password)
    {
        return password.Length < _minLength
            ? $"Password must be at least {_minLength} characters"
            : null;
    }
}


public class HasNumberRule : PasswordRule
{
    protected override string Check(string password)
    {
        return System.Text.RegularExpressions.Regex.IsMatch(password, @".*[0-9].*")
            ? null
            : "Password must contain a number";
    }
}


public class HasSymbolRule : PasswordRule
{
    protected override string Check(string password)
    {
        return System.Text.RegularExpressions.Regex.IsMatch(password, @".*[^a-zA-Z0-9].*")
            ? null
            : "Password must contain a symbol";
    }
}


var services = new ServiceCollection();
services.AddSingleton<MinLengthRule>(new MinLengthRule(8));
services.AddSingleton<HasNumberRule>();
services.AddSingleton<HasSymbolRule>();

var provider = services.BuildServiceProvider();
var rules = provider.GetRequiredService<MinLengthRule>();
rules.SetNext(provider.GetRequiredService<HasNumberRule>()).SetNext(provider.GetRequiredService<HasSymbolRule>());


Console.WriteLine(rules.Validate("abc"));
Console.WriteLine(rules.Validate("abc123!"));`,
    explanation:
      "The .NET example wires the password validation chain through dependency injection so the rules stay reusable and configurable.",
  },
];

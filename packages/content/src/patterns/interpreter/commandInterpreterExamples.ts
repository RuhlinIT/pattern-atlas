import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const commandInterpreterExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface CommandExpression {
  interpret(): string;
}


class TextCommand implements CommandExpression {
  constructor(private value: string) {}


  interpret(): string {
    return this.value;
  }
}


class UppercaseCommand implements CommandExpression {
  constructor(private expression: CommandExpression) {}


  interpret(): string {
    return this.expression.interpret().toUpperCase();
  }
}


class TrimCommand implements CommandExpression {
  constructor(private expression: CommandExpression) {}


  interpret(): string {
    return this.expression.interpret().trim();
  }
}


class ReplaceCommand implements CommandExpression {
  constructor(
    private expression: CommandExpression,
    private searchValue: string,
    private replaceValue: string
  ) {}


  interpret(): string {
    return this.expression
      .interpret()
      .replaceAll(this.searchValue, this.replaceValue);
  }
}


const command = new ReplaceCommand(
  new UppercaseCommand(new TrimCommand(new TextCommand("  hello world  "))),
  "WORLD",
  "TEAM"
);


console.log(command.interpret());`,
    explanation:
      "The command interpreter chains small operations together so a command string can be transformed step by step.",
  },
  {
    language: "Java",
    code: `interface CommandExpression {
    String interpret();
}


class TextCommand implements CommandExpression {
    private final String value;


    public TextCommand(String value) {
        this.value = value;
    }


    public String interpret() {
        return value;
    }
}


class UppercaseCommand implements CommandExpression {
    private final CommandExpression expression;


    public UppercaseCommand(CommandExpression expression) {
        this.expression = expression;
    }


    public String interpret() {
        return expression.interpret().toUpperCase();
    }
}


class TrimCommand implements CommandExpression {
    private final CommandExpression expression;


    public TrimCommand(CommandExpression expression) {
        this.expression = expression;
    }


    public String interpret() {
        return expression.interpret().trim();
    }
}


class ReplaceCommand implements CommandExpression {
    private final CommandExpression expression;
    private final String searchValue;
    private final String replaceValue;


    public ReplaceCommand(CommandExpression expression, String searchValue, String replaceValue) {
        this.expression = expression;
        this.searchValue = searchValue;
        this.replaceValue = replaceValue;
    }


    public String interpret() {
        return expression.interpret().replace(searchValue, replaceValue);
    }
}


CommandExpression command = new ReplaceCommand(
    new UppercaseCommand(new TrimCommand(new TextCommand("  hello world  "))),
    "WORLD",
    "TEAM"
);


System.out.println(command.interpret());`,
    explanation:
      "The Java command interpreter wraps simple operations into expression objects that are evaluated in sequence.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class CommandExpression(ABC):
    @abstractmethod
    def interpret(self) -> str:
        pass


class TextCommand(CommandExpression):
    def __init__(self, value: str) -> None:
        self.value = value


    def interpret(self) -> str:
        return self.value


class UppercaseCommand(CommandExpression):
    def __init__(self, expression: CommandExpression) -> None:
        self.expression = expression


    def interpret(self) -> str:
        return self.expression.interpret().upper()


class TrimCommand(CommandExpression):
    def __init__(self, expression: CommandExpression) -> None:
        self.expression = expression


    def interpret(self) -> str:
        return self.expression.interpret().strip()


class ReplaceCommand(CommandExpression):
    def __init__(self, expression: CommandExpression, search_value: str, replace_value: str) -> None:
        self.expression = expression
        self.search_value = search_value
        self.replace_value = replace_value


    def interpret(self) -> str:
        return self.expression.interpret().replace(self.search_value, self.replace_value)


command = ReplaceCommand(
    UppercaseCommand(TrimCommand(TextCommand("  hello world  "))),
    "WORLD",
    "TEAM"
)


print(command.interpret())`,
    explanation:
      "The Python command interpreter treats each text transformation as an expression that can be composed with others.",
  },
  {
    language: "Angular",
    code: `interface CommandExpression {
  interpret(): string;
}


class TextCommand implements CommandExpression {
  constructor(private value: string) {}


  interpret(): string {
    return this.value;
  }
}


class UppercaseCommand implements CommandExpression {
  constructor(private expression: CommandExpression) {}


  interpret(): string {
    return this.expression.interpret().toUpperCase();
  }
}


class TrimCommand implements CommandExpression {
  constructor(private expression: CommandExpression) {}


  interpret(): string {
    return this.expression.interpret().trim();
  }
}


class ReplaceCommand implements CommandExpression {
  constructor(
    private expression: CommandExpression,
    private searchValue: string,
    private replaceValue: string
  ) {}


  interpret(): string {
    return this.expression.interpret().replaceAll(this.searchValue, this.replaceValue);
  }
}


const command = new ReplaceCommand(
  new UppercaseCommand(new TrimCommand(new TextCommand("  hello world  "))),
  "WORLD",
  "TEAM"
);


console.log(command.interpret());`,
    explanation:
      "The Angular example interprets a small command language by composing string operations as expression objects.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface CommandExpression {
  interpret(): string;
}


class TextCommand implements CommandExpression {
  constructor(private value: string) {}


  interpret(): string {
    return this.value;
  }
}


class UppercaseCommand implements CommandExpression {
  constructor(private expression: CommandExpression) {}


  interpret(): string {
    return this.expression.interpret().toUpperCase();
  }
}


class TrimCommand implements CommandExpression {
  constructor(private expression: CommandExpression) {}


  interpret(): string {
    return this.expression.interpret().trim();
  }
}


class ReplaceCommand implements CommandExpression {
  constructor(
    private expression: CommandExpression,
    private searchValue: string,
    private replaceValue: string
  ) {}


  interpret(): string {
    return this.expression.interpret().replaceAll(this.searchValue, this.replaceValue);
  }
}


function CommandPreview({ expression }: { expression: CommandExpression }) {
  return <p>{expression.interpret()}</p>;
}


export function App() {
  const expression = useMemo(
    () =>
      new ReplaceCommand(
        new UppercaseCommand(new TrimCommand(new TextCommand("  hello world  "))),
        "WORLD",
        "TEAM"
      ),
    []
  );


  return (
    <main>
      <h1>Command Interpreter</h1>
      <CommandPreview expression={expression} />
    </main>
  );
}`,
    explanation:
      "The React example keeps command parsing logic in interpreter objects while the UI displays the transformed string.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface CommandExpression {
  interpret(): string;
}


class TextCommand implements CommandExpression {
  constructor(private value: string) {}


  interpret(): string {
    return this.value;
  }
}


class UppercaseCommand implements CommandExpression {
  constructor(private expression: CommandExpression) {}


  interpret(): string {
    return this.expression.interpret().toUpperCase();
  }
}


class TrimCommand implements CommandExpression {
  constructor(private expression: CommandExpression) {}


  interpret(): string {
    return this.expression.interpret().trim();
  }
}


class ReplaceCommand implements CommandExpression {
  constructor(
    private expression: CommandExpression,
    private searchValue: string,
    private replaceValue: string
  ) {}


  interpret(): string {
    return this.expression.interpret().replaceAll(this.searchValue, this.replaceValue);
  }
}


function CommandPreview({ expression }: { expression: CommandExpression }) {
  return (
    <View>
      <Text>{expression.interpret()}</Text>
    </View>
  );
}


export function App() {
  const expression = useMemo(
    () =>
      new ReplaceCommand(
        new UppercaseCommand(new TrimCommand(new TextCommand("  hello world  "))),
        "WORLD",
        "TEAM"
      ),
    []
  );


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Command Interpreter</Text>
        <CommandPreview expression={expression} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the same chain of command expressions and shows the result in a mobile UI.",
  },
  {
    language: "C#",
    code: `using System;


public interface ICommandExpression
{
    string Interpret();
}


public class TextCommand : ICommandExpression
{
    private readonly string _value;


    public TextCommand(string value)
    {
        _value = value;
    }


    public string Interpret()
    {
        return _value;
    }
}


public class UppercaseCommand : ICommandExpression
{
    private readonly ICommandExpression _expression;


    public UppercaseCommand(ICommandExpression expression)
    {
        _expression = expression;
    }


    public string Interpret()
    {
        return _expression.Interpret().ToUpper();
    }
}


public class TrimCommand : ICommandExpression
{
    private readonly ICommandExpression _expression;


    public TrimCommand(ICommandExpression expression)
    {
        _expression = expression;
    }


    public string Interpret()
    {
        return _expression.Interpret().Trim();
    }
}


public class ReplaceCommand : ICommandExpression
{
    private readonly ICommandExpression _expression;
    private readonly string _searchValue;
    private readonly string _replaceValue;


    public ReplaceCommand(ICommandExpression expression, string searchValue, string replaceValue)
    {
        _expression = expression;
        _searchValue = searchValue;
        _replaceValue = replaceValue;
    }


    public string Interpret()
    {
        return _expression.Interpret().Replace(_searchValue, _replaceValue);
    }
}


ICommandExpression command = new ReplaceCommand(
    new UppercaseCommand(new TrimCommand(new TextCommand("  hello world  "))),
    "WORLD",
    "TEAM"
);


Console.WriteLine(command.Interpret());`,
    explanation:
      "The C# command interpreter builds a reusable expression tree of text operations and evaluates it from the root.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface ICommandExpression
{
    string Interpret();
}


public class TextCommand : ICommandExpression
{
    private readonly string _value;


    public TextCommand(string value)
    {
        _value = value;
    }


    public string Interpret()
    {
        return _value;
    }
}


public class UppercaseCommand : ICommandExpression
{
    private readonly ICommandExpression _expression;


    public UppercaseCommand(ICommandExpression expression)
    {
        _expression = expression;
    }


    public string Interpret()
    {
        return _expression.Interpret().ToUpper();
    }
}


public class TrimCommand : ICommandExpression
{
    private readonly ICommandExpression _expression;


    public TrimCommand(ICommandExpression expression)
    {
        _expression = expression;
    }


    public string Interpret()
    {
        return _expression.Interpret().Trim();
    }
}


public class ReplaceCommand : ICommandExpression
{
    private readonly ICommandExpression _expression;
    private readonly string _searchValue;
    private readonly string _replaceValue;


    public ReplaceCommand(ICommandExpression expression, string searchValue, string replaceValue)
    {
        _expression = expression;
        _searchValue = searchValue;
        _replaceValue = replaceValue;
    }


    public string Interpret()
    {
        return _expression.Interpret().Replace(_searchValue, _replaceValue);
    }
}


var services = new ServiceCollection();
services.AddSingleton<ICommandExpression>(
    new ReplaceCommand(
        new UppercaseCommand(new TrimCommand(new TextCommand("  hello world  "))),
        "WORLD",
        "TEAM"
    )
);


var provider = services.BuildServiceProvider();
var command = provider.GetRequiredService<ICommandExpression>();

Console.WriteLine(command.Interpret());`,
    explanation:
      "The .NET example registers the command interpreter as a service so the composed expression can be reused across the app.",
  },
];

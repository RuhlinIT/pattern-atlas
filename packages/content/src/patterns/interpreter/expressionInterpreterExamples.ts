import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const expressionInterpreterExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Expression {
  interpret(): number;
}


class NumberExpression implements Expression {
  constructor(private value: number) {}


  interpret(): number {
    return this.value;
  }
}


class AddExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}


class SubtractExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}


class MultiplyExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() * this.right.interpret();
  }
}


const expression = new SubtractExpression(
  new AddExpression(new NumberExpression(5), new NumberExpression(3)),
  new MultiplyExpression(new NumberExpression(2), new NumberExpression(4))
);


console.log(expression.interpret());`,
    explanation:
      "The expression interpreter builds an object tree for the grammar and evaluates it by calling interpret() from the root node.",
  },
  {
    language: "Java",
    code: `interface Expression {
    int interpret();
}


class NumberExpression implements Expression {
    private final int value;


    public NumberExpression(int value) {
        this.value = value;
    }


    public int interpret() {
        return value;
    }
}


class AddExpression implements Expression {
    private final Expression left;
    private final Expression right;


    public AddExpression(Expression left, Expression right) {
        this.left = left;
        this.right = right;
    }


    public int interpret() {
        return left.interpret() + right.interpret();
    }
}


class SubtractExpression implements Expression {
    private final Expression left;
    private final Expression right;


    public SubtractExpression(Expression left, Expression right) {
        this.left = left;
        this.right = right;
    }


    public int interpret() {
        return left.interpret() - right.interpret();
    }
}


class MultiplyExpression implements Expression {
    private final Expression left;
    private final Expression right;


    public MultiplyExpression(Expression left, Expression right) {
        this.left = left;
        this.right = right;
    }


    public int interpret() {
        return left.interpret() * right.interpret();
    }
}


Expression expression = new SubtractExpression(
    new AddExpression(new NumberExpression(5), new NumberExpression(3)),
    new MultiplyExpression(new NumberExpression(2), new NumberExpression(4))
);


System.out.println(expression.interpret());`,
    explanation:
      "The Java example models each grammar rule as an expression object, then evaluates the full tree from the top down.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class Expression(ABC):
    @abstractmethod
    def interpret(self) -> int:
        pass


class NumberExpression(Expression):
    def __init__(self, value: int) -> None:
        self.value = value


    def interpret(self) -> int:
        return self.value


class AddExpression(Expression):
    def __init__(self, left: Expression, right: Expression) -> None:
        self.left = left
        self.right = right


    def interpret(self) -> int:
        return self.left.interpret() + self.right.interpret()


class SubtractExpression(Expression):
    def __init__(self, left: Expression, right: Expression) -> None:
        self.left = left
        self.right = right


    def interpret(self) -> int:
        return self.left.interpret() - self.right.interpret()


class MultiplyExpression(Expression):
    def __init__(self, left: Expression, right: Expression) -> None:
        self.left = left
        self.right = right


    def interpret(self) -> int:
        return self.left.interpret() * self.right.interpret()


expression = SubtractExpression(
    AddExpression(NumberExpression(5), NumberExpression(3)),
    MultiplyExpression(NumberExpression(2), NumberExpression(4))
)


print(expression.interpret())`,
    explanation:
      "The Python example uses recursive interpretation, where each node evaluates itself and delegates to its children.",
  },
  {
    language: "Angular",
    code: `interface Expression {
  interpret(): number;
}


class NumberExpression implements Expression {
  constructor(private value: number) {}


  interpret(): number {
    return this.value;
  }
}


class AddExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}


class SubtractExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}


class MultiplyExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() * this.right.interpret();
  }
}


const expression = new SubtractExpression(
  new AddExpression(new NumberExpression(5), new NumberExpression(3)),
  new MultiplyExpression(new NumberExpression(2), new NumberExpression(4))
);


console.log(expression.interpret());`,
    explanation:
      "The Angular example demonstrates an expression tree where each node knows how to interpret its part of the grammar.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface Expression {
  interpret(): number;
}


class NumberExpression implements Expression {
  constructor(private value: number) {}


  interpret(): number {
    return this.value;
  }
}


class AddExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}


class SubtractExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}


class MultiplyExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() * this.right.interpret();
  }
}


function ResultPreview({ expression }: { expression: Expression }) {
  return <p>{expression.interpret()}</p>;
}


export function App() {
  const expression = useMemo(
    () =>
      new SubtractExpression(
        new AddExpression(new NumberExpression(5), new NumberExpression(3)),
        new MultiplyExpression(new NumberExpression(2), new NumberExpression(4))
      ),
    []
  );


  return (
    <main>
      <h1>Expression Interpreter</h1>
      <ResultPreview expression={expression} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the interpreter logic inside expression objects while the UI only renders the final computed result.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface Expression {
  interpret(): number;
}


class NumberExpression implements Expression {
  constructor(private value: number) {}


  interpret(): number {
    return this.value;
  }
}


class AddExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}


class SubtractExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}


class MultiplyExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}


  interpret(): number {
    return this.left.interpret() * this.right.interpret();
  }
}


function ResultPreview({ expression }: { expression: Expression }) {
  return (
    <View>
      <Text>{expression.interpret()}</Text>
    </View>
  );
}


export function App() {
  const expression = useMemo(
    () =>
      new SubtractExpression(
        new AddExpression(new NumberExpression(5), new NumberExpression(3)),
        new MultiplyExpression(new NumberExpression(2), new NumberExpression(4))
      ),
    []
  );


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Expression Interpreter</Text>
        <ResultPreview expression={expression} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example evaluates the same expression tree and shows the interpreted result in a mobile UI.",
  },
  {
    language: "C#",
    code: `using System;


public interface IExpression
{
    int Interpret();
}


public class NumberExpression : IExpression
{
    private readonly int _value;


    public NumberExpression(int value)
    {
        _value = value;
    }


    public int Interpret()
    {
        return _value;
    }
}


public class AddExpression : IExpression
{
    private readonly IExpression _left;
    private readonly IExpression _right;


    public AddExpression(IExpression left, IExpression right)
    {
        _left = left;
        _right = right;
    }


    public int Interpret()
    {
        return _left.Interpret() + _right.Interpret();
    }
}


public class SubtractExpression : IExpression
{
    private readonly IExpression _left;
    private readonly IExpression _right;


    public SubtractExpression(IExpression left, IExpression right)
    {
        _left = left;
        _right = right;
    }


    public int Interpret()
    {
        return _left.Interpret() - _right.Interpret();
    }
}


public class MultiplyExpression : IExpression
{
    private readonly IExpression _left;
    private readonly IExpression _right;


    public MultiplyExpression(IExpression left, IExpression right)
    {
        _left = left;
        _right = right;
    }


    public int Interpret()
    {
        return _left.Interpret() * _right.Interpret();
    }
}


IExpression expression = new SubtractExpression(
    new AddExpression(new NumberExpression(5), new NumberExpression(3)),
    new MultiplyExpression(new NumberExpression(2), new NumberExpression(4))
);


Console.WriteLine(expression.Interpret());`,
    explanation:
      "The C# example defines each rule as an expression object and interprets the tree recursively from the root.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface IExpression
{
    int Interpret();
}


public class NumberExpression : IExpression
{
    private readonly int _value;


    public NumberExpression(int value)
    {
        _value = value;
    }


    public int Interpret()
    {
        return _value;
    }
}


public class AddExpression : IExpression
{
    private readonly IExpression _left;
    private readonly IExpression _right;


    public AddExpression(IExpression left, IExpression right)
    {
        _left = left;
        _right = right;
    }


    public int Interpret()
    {
        return _left.Interpret() + _right.Interpret();
    }
}


public class SubtractExpression : IExpression
{
    private readonly IExpression _left;
    private readonly IExpression _right;


    public SubtractExpression(IExpression left, IExpression right)
    {
        _left = left;
        _right = right;
    }


    public int Interpret()
    {
        return _left.Interpret() - _right.Interpret();
    }
}


public class MultiplyExpression : IExpression
{
    private readonly IExpression _left;
    private readonly IExpression _right;


    public MultiplyExpression(IExpression left, IExpression right)
    {
        _left = left;
        _right = right;
    }


    public int Interpret()
    {
        return _left.Interpret() * _right.Interpret();
    }
}


var services = new ServiceCollection();
services.AddSingleton<IExpression>(
    new SubtractExpression(
        new AddExpression(new NumberExpression(5), new NumberExpression(3)),
        new MultiplyExpression(new NumberExpression(2), new NumberExpression(4))
    )
);


var provider = services.BuildServiceProvider();
var expression = provider.GetRequiredService<IExpression>();

Console.WriteLine(expression.Interpret());`,
    explanation:
      "The .NET example registers the expression tree in dependency injection so the interpreter can be resolved and evaluated like any other service.",
  },
];

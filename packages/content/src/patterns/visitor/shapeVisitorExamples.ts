import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const shapeVisitorExamples: PatternLanguageExample[] = [
  {
    title: "typescript",
    language: "typescript",
    code: `interface ShapeVisitor {
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
}


interface Shape {
  accept(visitor: ShapeVisitor): void;
}


class Circle implements Shape {
  constructor(public radius: number) {}


  accept(visitor: ShapeVisitor): void {
    visitor.visitCircle(this);
  }
}


class Rectangle implements Shape {
  constructor(
    public width: number,
    public height: number
  ) {}


  accept(visitor: ShapeVisitor): void {
    visitor.visitRectangle(this);
  }
}


class AreaVisitor implements ShapeVisitor {
  public total = 0;


  visitCircle(circle: Circle): void {
    this.total += Math.PI * circle.radius * circle.radius;
  }


  visitRectangle(rectangle: Rectangle): void {
    this.total += rectangle.width * rectangle.height;
  }
}


const shapes: Shape[] = [
  new Circle(3),
  new Rectangle(4, 5)
];


const visitor = new AreaVisitor();
for (const shape of shapes) {
  shape.accept(visitor);
}


console.log(visitor.total);`,
    explanation:
      "The shape visitor computes area across different shape types without moving that logic into the shape classes.",
  },
  {
    language: "Java",
    code: `interface ShapeVisitor {
    void visitCircle(Circle circle);
    void visitRectangle(Rectangle rectangle);
}


interface Shape {
    void accept(ShapeVisitor visitor);
}


class Circle implements Shape {
    public final double radius;


    public Circle(double radius) {
        this.radius = radius;
    }


    public void accept(ShapeVisitor visitor) {
        visitor.visitCircle(this);
    }
}


class Rectangle implements Shape {
    public final double width;
    public final double height;


    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }


    public void accept(ShapeVisitor visitor) {
        visitor.visitRectangle(this);
    }
}


class AreaVisitor implements ShapeVisitor {
    public double total = 0;


    public void visitCircle(Circle circle) {
        total += Math.PI * circle.radius * circle.radius;
    }


    public void visitRectangle(Rectangle rectangle) {
        total += rectangle.width * rectangle.height;
    }
}


Shape[] shapes = new Shape[] {
    new Circle(3),
    new Rectangle(4, 5)
};


AreaVisitor visitor = new AreaVisitor();
for (Shape shape : shapes) {
    shape.accept(visitor);
}


System.out.println(visitor.total);`,
    explanation:
      "The Java shape visitor centralizes area calculation in a visitor class while the shapes only expose accept().",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod
import math


class ShapeVisitor(ABC):
    @abstractmethod
    def visit_circle(self, circle: "Circle") -> None:
        pass


    @abstractmethod
    def visit_rectangle(self, rectangle: "Rectangle") -> None:
        pass


class Shape(ABC):
    @abstractmethod
    def accept(self, visitor: ShapeVisitor) -> None:
        pass


class Circle(Shape):
    def __init__(self, radius: float) -> None:
        self.radius = radius


    def accept(self, visitor: ShapeVisitor) -> None:
        visitor.visit_circle(self)


class Rectangle(Shape):
    def __init__(self, width: float, height: float) -> None:
        self.width = width
        self.height = height


    def accept(self, visitor: ShapeVisitor) -> None:
        visitor.visit_rectangle(self)


class AreaVisitor(ShapeVisitor):
    def __init__(self) -> None:
        self.total = 0


    def visit_circle(self, circle: Circle) -> None:
        self.total += math.pi * circle.radius * circle.radius


    def visit_rectangle(self, rectangle: Rectangle) -> None:
        self.total += rectangle.width * rectangle.height


shapes = [Circle(3), Rectangle(4, 5)]


visitor = AreaVisitor()
for shape in shapes:
    shape.accept(visitor)


print(visitor.total)`,
    explanation:
      "The Python shape visitor lets you add area computation without changing the shape classes.",
  },
  {
    language: "Angular",
    code: `interface ShapeVisitor {
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
}


interface Shape {
  accept(visitor: ShapeVisitor): void;
}


class Circle implements Shape {
  constructor(public radius: number) {}


  accept(visitor: ShapeVisitor): void {
    visitor.visitCircle(this);
  }
}


class Rectangle implements Shape {
  constructor(
    public width: number,
    public height: number
  ) {}


  accept(visitor: ShapeVisitor): void {
    visitor.visitRectangle(this);
  }
}


class AreaVisitor implements ShapeVisitor {
  public total = 0;


  visitCircle(circle: Circle): void {
    this.total += Math.PI * circle.radius * circle.radius;
  }


  visitRectangle(rectangle: Rectangle): void {
    this.total += rectangle.width * rectangle.height;
  }
}


const shapes: Shape[] = [
  new Circle(3),
  new Rectangle(4, 5)
];


const visitor = new AreaVisitor();
for (const shape of shapes) {
  shape.accept(visitor);
}


console.log(visitor.total);`,
    explanation:
      "The Angular shape visitor keeps operation logic outside the shape types and applies it through accept().",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface ShapeVisitor {
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
}


interface Shape {
  accept(visitor: ShapeVisitor): void;
}


class Circle implements Shape {
  constructor(public radius: number) {}


  accept(visitor: ShapeVisitor): void {
    visitor.visitCircle(this);
  }
}


class Rectangle implements Shape {
  constructor(
    public width: number,
    public height: number
  ) {}


  accept(visitor: ShapeVisitor): void {
    visitor.visitRectangle(this);
  }
}


class AreaVisitor implements ShapeVisitor {
  public total = 0;


  visitCircle(circle: Circle): void {
    this.total += Math.PI * circle.radius * circle.radius;
  }


  visitRectangle(rectangle: Rectangle): void {
    this.total += rectangle.width * rectangle.height;
  }
}


function ShapePreview() {
  return <p>Shape visitor ready</p>;
}


export function App() {
  const visitor = useMemo(() => new AreaVisitor(), []);


  useMemo(() => {
    [new Circle(3), new Rectangle(4, 5)].forEach((shape) => shape.accept(visitor));
  }, [visitor]);


  return (
    <main>
      <h1>Shape Visitor</h1>
      <ShapePreview />
    </main>
  );
}`,
    explanation:
      "The React example uses a visitor to perform shape analysis while the UI remains separate from the object model.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface ShapeVisitor {
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
}


interface Shape {
  accept(visitor: ShapeVisitor): void;
}


class Circle implements Shape {
  constructor(public radius: number) {}


  accept(visitor: ShapeVisitor): void {
    visitor.visitCircle(this);
  }
}


class Rectangle implements Shape {
  constructor(
    public width: number,
    public height: number
  ) {}


  accept(visitor: ShapeVisitor): void {
    visitor.visitRectangle(this);
  }
}


class AreaVisitor implements ShapeVisitor {
  public total = 0;


  visitCircle(circle: Circle): void {
    this.total += Math.PI * circle.radius * circle.radius;
  }


  visitRectangle(rectangle: Rectangle): void {
    this.total += rectangle.width * rectangle.height;
  }
}


function ShapePreview() {
  return (
    <View>
      <Text>Shape visitor ready</Text>
    </View>
  );
}


export function App() {
  const visitor = useMemo(() => new AreaVisitor(), []);


  useMemo(() => {
    [new Circle(3), new Rectangle(4, 5)].forEach((shape) => shape.accept(visitor));
  }, [visitor]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Shape Visitor</Text>
        <ShapePreview />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example performs the same visitor-based area calculation while the UI stays lightweight.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public interface IShapeVisitor
{
    void VisitCircle(Circle circle);
    void VisitRectangle(Rectangle rectangle);
}


public interface IShape
{
    void Accept(IShapeVisitor visitor);
}


public class Circle : IShape
{
    public double Radius { get; }


    public Circle(double radius)
    {
        Radius = radius;
    }


    public void Accept(IShapeVisitor visitor)
    {
        visitor.VisitCircle(this);
    }
}


public class Rectangle : IShape
{
    public double Width { get; }
    public double Height { get; }


    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
    }


    public void Accept(IShapeVisitor visitor)
    {
        visitor.VisitRectangle(this);
    }
}


public class AreaVisitor : IShapeVisitor
{
    public double Total { get; private set; }


    public void VisitCircle(Circle circle)
    {
        Total += Math.PI * circle.Radius * circle.Radius;
    }


    public void VisitRectangle(Rectangle rectangle)
    {
        Total += rectangle.Width * rectangle.Height;
    }
}


var shapes = new List<IShape>
{
    new Circle(3),
    new Rectangle(4, 5)
};


var visitor = new AreaVisitor();
foreach (var shape in shapes)
{
    shape.Accept(visitor);
}


Console.WriteLine(visitor.Total);`,
    explanation:
      "The C# shape visitor keeps the computation in a dedicated visitor and leaves the shapes focused on structure.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public interface IShapeVisitor
{
    void VisitCircle(Circle circle);
    void VisitRectangle(Rectangle rectangle);
}


public interface IShape
{
    void Accept(IShapeVisitor visitor);
}


public class Circle : IShape
{
    public double Radius { get; }


    public Circle(double radius)
    {
        Radius = radius;
    }


    public void Accept(IShapeVisitor visitor)
    {
        visitor.VisitCircle(this);
    }
}


public class Rectangle : IShape
{
    public double Width { get; }
    public double Height { get; }


    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
    }


    public void Accept(IShapeVisitor visitor)
    {
        visitor.VisitRectangle(this);
    }
}


public class AreaVisitor : IShapeVisitor
{
    public double Total { get; private set; }


    public void VisitCircle(Circle circle)
    {
        Total += Math.PI * circle.Radius * circle.Radius;
    }


    public void VisitRectangle(Rectangle rectangle)
    {
        Total += rectangle.Width * rectangle.Height;
    }
}


var services = new ServiceCollection();
services.AddSingleton<AreaVisitor>();

var provider = services.BuildServiceProvider();
var visitor = provider.GetRequiredService<AreaVisitor>();


var shapes = new List<IShape>
{
    new Circle(3),
    new Rectangle(4, 5)
};


foreach (var shape in shapes)
{
    shape.Accept(visitor);
}


Console.WriteLine(visitor.Total);`,
    explanation:
      "The .NET example resolves the visitor through dependency injection and applies it to a set of shapes.",
  },
];

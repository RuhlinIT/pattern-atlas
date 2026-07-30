import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const shapeRendererBridgeExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Renderer {
  renderCircle(radius: number): string;
  renderSquare(side: number): string;
}


class VectorRenderer implements Renderer {
  renderCircle(radius: number): string {
    return \`Drawing a vector circle with radius \${radius}\`;
  }


  renderSquare(side: number): string {
    return \`Drawing a vector square with side \${side}\`;
  }
}


class RasterRenderer implements Renderer {
  renderCircle(radius: number): string {
    return \`Drawing a raster circle with radius \${radius}\`;
  }


  renderSquare(side: number): string {
    return \`Drawing a raster square with side \${side}\`;
  }
}


abstract class Shape {
  constructor(protected renderer: Renderer) {}


  abstract draw(): string;
}


class Circle extends Shape {
  constructor(renderer: Renderer, private radius: number) {
    super(renderer);
  }


  draw(): string {
    return this.renderer.renderCircle(this.radius);
  }
}


class Square extends Shape {
  constructor(renderer: Renderer, private side: number) {
    super(renderer);
  }


  draw(): string {
    return this.renderer.renderSquare(this.side);
  }
}


const circle = new Circle(new VectorRenderer(), 10);
console.log(circle.draw());`,
    explanation:
      "The shape abstraction bridges to different renderers, so the same shape classes can be drawn with vector or raster implementations.",
  },
  {
    language: "Java",
    code: `interface Renderer {
    String renderCircle(int radius);
    String renderSquare(int side);
}


class VectorRenderer implements Renderer {
    public String renderCircle(int radius) {
        return "Drawing a vector circle with radius " + radius;
    }


    public String renderSquare(int side) {
        return "Drawing a vector square with side " + side;
    }
}


class RasterRenderer implements Renderer {
    public String renderCircle(int radius) {
        return "Drawing a raster circle with radius " + radius;
    }


    public String renderSquare(int side) {
        return "Drawing a raster square with side " + side;
    }
}


abstract class Shape {
    protected Renderer renderer;


    public Shape(Renderer renderer) {
        this.renderer = renderer;
    }


    public abstract String draw();
}


class Circle extends Shape {
    private final int radius;


    public Circle(Renderer renderer, int radius) {
        super(renderer);
        this.radius = radius;
    }


    public String draw() {
        return renderer.renderCircle(radius);
    }
}


class Square extends Shape {
    private final int side;


    public Square(Renderer renderer, int side) {
        super(renderer);
        this.side = side;
    }


    public String draw() {
        return renderer.renderSquare(side);
    }
}


Circle circle = new Circle(new VectorRenderer(), 10);
System.out.println(circle.draw());`,
    explanation:
      "The bridge keeps shape behavior separate from rendering behavior, which lets the drawing style change independently of the shape class.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class Renderer(ABC):
    @abstractmethod
    def render_circle(self, radius: int) -> str:
        pass


    @abstractmethod
    def render_square(self, side: int) -> str:
        pass


class VectorRenderer(Renderer):
    def render_circle(self, radius: int) -> str:
        return f"Drawing a vector circle with radius {radius}"


    def render_square(self, side: int) -> str:
        return f"Drawing a vector square with side {side}"


class RasterRenderer(Renderer):
    def render_circle(self, radius: int) -> str:
        return f"Drawing a raster circle with radius {radius}"


    def render_square(self, side: int) -> str:
        return f"Drawing a raster square with side {side}"


class Shape(ABC):
    def __init__(self, renderer: Renderer) -> None:
        self.renderer = renderer


    @abstractmethod
    def draw(self) -> str:
        pass


class Circle(Shape):
    def __init__(self, renderer: Renderer, radius: int) -> None:
        super().__init__(renderer)
        self.radius = radius


    def draw(self) -> str:
        return self.renderer.render_circle(self.radius)


class Square(Shape):
    def __init__(self, renderer: Renderer, side: int) -> None:
        super().__init__(renderer)
        self.side = side


    def draw(self) -> str:
        return self.renderer.render_square(self.side)


circle = Circle(VectorRenderer(), 10)
print(circle.draw())`,
    explanation:
      "The shape bridge keeps the drawing abstraction separate from the renderer implementation so the system can swap output styles easily.",
  },
  {
    language: "Angular",
    code: `interface Renderer {
  renderCircle(radius: number): string;
  renderSquare(side: number): string;
}


class VectorRenderer implements Renderer {
  renderCircle(radius: number): string {
    return \`Drawing a vector circle with radius \${radius}\`;
  }


  renderSquare(side: number): string {
    return \`Drawing a vector square with side \${side}\`;
  }
}


class RasterRenderer implements Renderer {
  renderCircle(radius: number): string {
    return \`Drawing a raster circle with radius \${radius}\`;
  }


  renderSquare(side: number): string {
    return \`Drawing a raster square with side \${side}\`;
  }
}


abstract class Shape {
  constructor(protected renderer: Renderer) {}


  abstract draw(): string;
}


class Circle extends Shape {
  constructor(renderer: Renderer, private radius: number) {
    super(renderer);
  }


  draw(): string {
    return this.renderer.renderCircle(this.radius);
  }
}


class Square extends Shape {
  constructor(renderer: Renderer, private side: number) {
    super(renderer);
  }


  draw(): string {
    return this.renderer.renderSquare(this.side);
  }
}


const circle = new Circle(new VectorRenderer(), 10);
console.log(circle.draw());`,
    explanation:
      "The Angular example bridges the shape abstraction to a renderer implementation so drawing behavior can vary without changing the shape classes.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface Renderer {
  renderCircle(radius: number): string;
  renderSquare(side: number): string;
}


class VectorRenderer implements Renderer {
  renderCircle(radius: number): string {
    return \`Drawing a vector circle with radius \${radius}\`;
  }


  renderSquare(side: number): string {
    return \`Drawing a vector square with side \${side}\`;
  }
}


class RasterRenderer implements Renderer {
  renderCircle(radius: number): string {
    return \`Drawing a raster circle with radius \${radius}\`;
  }


  renderSquare(side: number): string {
    return \`Drawing a raster square with side \${side}\`;
  }
}


abstract class Shape {
  constructor(protected renderer: Renderer) {}


  abstract draw(): string;
}


class Circle extends Shape {
  constructor(renderer: Renderer, private radius: number) {
    super(renderer);
  }


  draw(): string {
    return this.renderer.renderCircle(this.radius);
  }
}


function ShapePreview({ shape }: { shape: Shape }) {
  return <p>{shape.draw()}</p>;
}


export function App() {
  const shape = useMemo(() => new Circle(new VectorRenderer(), 10), []);


  return (
    <main>
      <h1>Shape Renderer Bridge</h1>
      <ShapePreview shape={shape} />
    </main>
  );
}`,
    explanation:
      "The React example bridges a shape object to a renderer so the UI can render the same shape with different drawing strategies.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface Renderer {
  renderCircle(radius: number): string;
  renderSquare(side: number): string;
}


class VectorRenderer implements Renderer {
  renderCircle(radius: number): string {
    return \`Drawing a vector circle with radius \${radius}\`;
  }


  renderSquare(side: number): string {
    return \`Drawing a vector square with side \${side}\`;
  }
}


class RasterRenderer implements Renderer {
  renderCircle(radius: number): string {
    return \`Drawing a raster circle with radius \${radius}\`;
  }


  renderSquare(side: number): string {
    return \`Drawing a raster square with side \${side}\`;
  }
}


abstract class Shape {
  constructor(protected renderer: Renderer) {}


  abstract draw(): string;
}


class Circle extends Shape {
  constructor(renderer: Renderer, private radius: number) {
    super(renderer);
  }


  draw(): string {
    return this.renderer.renderCircle(this.radius);
  }
}


function ShapePreview({ shape }: { shape: Shape }) {
  return (
    <View>
      <Text>{shape.draw()}</Text>
    </View>
  );
}


export function App() {
  const shape = useMemo(() => new Circle(new VectorRenderer(), 10), []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Shape Renderer Bridge</Text>
        <ShapePreview shape={shape} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example keeps the shape abstraction separate from rendering so the same shape can be drawn by different renderer implementations.",
  },
  {
    language: "C#",
    code: `using System;


public interface IRenderer
{
    string RenderCircle(int radius);
    string RenderSquare(int side);
}


public class VectorRenderer : IRenderer
{
    public string RenderCircle(int radius)
    {
        return $"Drawing a vector circle with radius {radius}";
    }


    public string RenderSquare(int side)
    {
        return $"Drawing a vector square with side {side}";
    }
}


public class RasterRenderer : IRenderer
{
    public string RenderCircle(int radius)
    {
        return $"Drawing a raster circle with radius {radius}";
    }


    public string RenderSquare(int side)
    {
        return $"Drawing a raster square with side {side}";
    }
}


public abstract class Shape
{
    protected readonly IRenderer Renderer;


    protected Shape(IRenderer renderer)
    {
        Renderer = renderer;
    }


    public abstract string Draw();
}


public class Circle : Shape
{
    private readonly int _radius;


    public Circle(IRenderer renderer, int radius) : base(renderer)
    {
        _radius = radius;
    }


    public override string Draw()
    {
        return Renderer.RenderCircle(_radius);
    }
}


var circle = new Circle(new VectorRenderer(), 10);
Console.WriteLine(circle.Draw());`,
    explanation:
      "The bridge separates shape behavior from the renderer so the same shape classes can work with multiple drawing implementations.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface IRenderer
{
    string RenderCircle(int radius);
    string RenderSquare(int side);
}


public class VectorRenderer : IRenderer
{
    public string RenderCircle(int radius)
    {
        return $"Drawing a vector circle with radius {radius}";
    }


    public string RenderSquare(int side)
    {
        return $"Drawing a vector square with side {side}";
    }
}


public class RasterRenderer : IRenderer
{
    public string RenderCircle(int radius)
    {
        return $"Drawing a raster circle with radius {radius}";
    }


    public string RenderSquare(int side)
    {
        return $"Drawing a raster square with side {side}";
    }
}


public abstract class Shape
{
    protected readonly IRenderer Renderer;


    protected Shape(IRenderer renderer)
    {
        Renderer = renderer;
    }


    public abstract string Draw();
}


public class Circle : Shape
{
    private readonly int _radius;


    public Circle(IRenderer renderer, int radius) : base(renderer)
    {
        _radius = radius;
    }


    public override string Draw()
    {
        return Renderer.RenderCircle(_radius);
    }
}


var services = new ServiceCollection();
services.AddSingleton<IRenderer, VectorRenderer>();
services.AddTransient<Circle>(provider => new Circle(provider.GetRequiredService<IRenderer>(), 10));


var provider = services.BuildServiceProvider();
var circle = provider.GetRequiredService<Circle>();

Console.WriteLine(circle.Draw());`,
    explanation:
      "The .NET example uses dependency injection to bridge the shape abstraction to a renderer implementation.",
  },
];

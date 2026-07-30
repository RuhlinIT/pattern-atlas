import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const textFormattingFlyweightExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface GlyphStyle {
  render(char: string, x: number, y: number): string;
}


class SharedGlyphStyle implements GlyphStyle {
  constructor(
    private fontFamily: string,
    private fontSize: number,
    private color: string,
    private bold: boolean,
    private italic: boolean,
  ) {}


  render(char: string, x: number, y: number): string {
    const style = [
      this.fontFamily,
      \`\${this.fontSize}px\`,
      this.color,
      this.bold ? "bold" : "",
      this.italic ? "italic" : "",
    ]
      .filter(Boolean)
      .join(" ");


    return \`Rendering '\${char}' at (\${x}, \${y}) with \${style}\`;
  }
}


class GlyphStyleFactory {
  private styles = new Map<string, SharedGlyphStyle>();


  getStyle(
    fontFamily: string,
    fontSize: number,
    color: string,
    bold: boolean,
    italic: boolean,
  ): SharedGlyphStyle {
    const key = \`\${fontFamily}|\${fontSize}|\${color}|\${bold}|\${italic}\`;
    if (!this.styles.has(key)) {
      this.styles.set(key, new SharedGlyphStyle(fontFamily, fontSize, color, bold, italic));
    }


    return this.styles.get(key)!;
  }
}


class Glyph {
  constructor(
    private char: string,
    private x: number,
    private y: number,
    private style: GlyphStyle,
  ) {}


  draw(): string {
    return this.style.render(this.char, this.x, this.y);
  }
}


const factory = new GlyphStyleFactory();
const headingStyle = factory.getStyle("Inter", 24, "#111111", true, false);
const bodyStyle = factory.getStyle("Inter", 14, "#444444", false, false);


const document = [
  new Glyph("H", 0, 0, headingStyle),
  new Glyph("i", 16, 0, headingStyle),
  new Glyph("A", 0, 40, bodyStyle),
  new Glyph("I", 10, 40, bodyStyle),
];


console.log(document.map((glyph) => glyph.draw()).join("\n"));`,
    explanation:
      "The text formatting flyweight shares glyph style data like font and color, while each glyph keeps only its own character and position.",
  },
  {
    language: "Java",
    code: `interface GlyphStyle {
    String render(char character, int x, int y);
}


class SharedGlyphStyle implements GlyphStyle {
    private final String fontFamily;
    private final int fontSize;
    private final String color;
    private final boolean bold;
    private final boolean italic;


    public SharedGlyphStyle(String fontFamily, int fontSize, String color, boolean bold, boolean italic) {
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.color = color;
        this.bold = bold;
        this.italic = italic;
    }


    public String render(char character, int x, int y) {
        StringBuilder style = new StringBuilder();
        style.append(fontFamily).append(" ").append(fontSize).append("px ").append(color);
        if (bold) {
            style.append(" bold");
        }
        if (italic) {
            style.append(" italic");
        }
        return "Rendering '" + character + "' at (" + x + ", " + y + ") with " + style;
    }
}


class GlyphStyleFactory {
    private final java.util.Map<String, SharedGlyphStyle> styles = new java.util.HashMap<>();


    public SharedGlyphStyle getStyle(
        String fontFamily,
        int fontSize,
        String color,
        boolean bold,
        boolean italic
    ) {
        String key = fontFamily + "|" + fontSize + "|" + color + "|" + bold + "|" + italic;
        if (!styles.containsKey(key)) {
            styles.put(key, new SharedGlyphStyle(fontFamily, fontSize, color, bold, italic));
        }


        return styles.get(key);
    }
}


class Glyph {
    private final char character;
    private final int x;
    private final int y;
    private final GlyphStyle style;


    public Glyph(char character, int x, int y, GlyphStyle style) {
        this.character = character;
        this.x = x;
        this.y = y;
        this.style = style;
    }


    public String draw() {
        return style.render(character, x, y);
    }
}


GlyphStyleFactory factory = new GlyphStyleFactory();
SharedGlyphStyle headingStyle = factory.getStyle("Inter", 24, "#111111", true, false);
SharedGlyphStyle bodyStyle = factory.getStyle("Inter", 14, "#444444", false, false);


java.util.List<Glyph> document = java.util.List.of(
    new Glyph('H', 0, 0, headingStyle),
    new Glyph('i', 16, 0, headingStyle),
    new Glyph('A', 0, 40, bodyStyle),
    new Glyph('I', 10, 40, bodyStyle)
);


document.forEach(glyph -> System.out.println(glyph.draw()));`,
    explanation:
      "The text formatting flyweight shares style objects so many glyphs can reuse the same font and color information efficiently.",
  },
  {
    language: "Python",
    code: `class SharedGlyphStyle:
    def __init__(self, font_family: str, font_size: int, color: str, bold: bool, italic: bool) -> None:
        self.font_family = font_family
        self.font_size = font_size
        self.color = color
        self.bold = bold
        self.italic = italic


    def render(self, character: str, x: int, y: int) -> str:
        style_parts = [
            self.font_family,
            f"{self.font_size}px",
            self.color,
            "bold" if self.bold else "",
            "italic" if self.italic else "",
        ]
        style = " ".join(part for part in style_parts if part)
        return f"Rendering '{character}' at ({x}, {y}) with {style}"


class GlyphStyleFactory:
    def __init__(self) -> None:
        self.styles: dict[str, SharedGlyphStyle] = {}


    def get_style(
        self,
        font_family: str,
        font_size: int,
        color: str,
        bold: bool,
        italic: bool,
    ) -> SharedGlyphStyle:
        key = f"{font_family}|{font_size}|{color}|{bold}|{italic}"
        if key not in self.styles:
            self.styles[key] = SharedGlyphStyle(font_family, font_size, color, bold, italic)
        return self.styles[key]


class Glyph:
    def __init__(self, character: str, x: int, y: int, style: SharedGlyphStyle) -> None:
        self.character = character
        self.x = x
        self.y = y
        self.style = style


    def draw(self) -> str:
        return self.style.render(self.character, self.x, self.y)


factory = GlyphStyleFactory()
heading_style = factory.get_style("Inter", 24, "#111111", True, False)
body_style = factory.get_style("Inter", 14, "#444444", False, False)


document = [
    Glyph("H", 0, 0, heading_style),
    Glyph("i", 16, 0, heading_style),
    Glyph("A", 0, 40, body_style),
    Glyph("I", 10, 40, body_style),
]


for glyph in document:
    print(glyph.draw())`,
    explanation:
      "The text formatting flyweight reuses one style object for many glyphs, keeping font and color data shared across the document.",
  },
  {
    language: "Angular",
    code: `interface GlyphStyle {
  render(char: string, x: number, y: number): string;
}


class SharedGlyphStyle implements GlyphStyle {
  constructor(
    private fontFamily: string,
    private fontSize: number,
    private color: string,
    private bold: boolean,
    private italic: boolean,
  ) {}


  render(char: string, x: number, y: number): string {
    const style = [
      this.fontFamily,
      \`\${this.fontSize}px\`,
      this.color,
      this.bold ? "bold" : "",
      this.italic ? "italic" : "",
    ]
      .filter(Boolean)
      .join(" ");


    return \`Rendering '\${char}' at (\${x}, \${y}) with \${style}\`;
  }
}


class GlyphStyleFactory {
  private styles = new Map<string, SharedGlyphStyle>();


  getStyle(
    fontFamily: string,
    fontSize: number,
    color: string,
    bold: boolean,
    italic: boolean,
  ): SharedGlyphStyle {
    const key = \`\${fontFamily}|\${fontSize}|\${color}|\${bold}|\${italic}\`;
    if (!this.styles.has(key)) {
      this.styles.set(key, new SharedGlyphStyle(fontFamily, fontSize, color, bold, italic));
    }


    return this.styles.get(key)!;
  }
}


class Glyph {
  constructor(
    private char: string,
    private x: number,
    private y: number,
    private style: GlyphStyle,
  ) {}


  draw(): string {
    return this.style.render(this.char, this.x, this.y);
  }
}


const factory = new GlyphStyleFactory();
const headingStyle = factory.getStyle("Inter", 24, "#111111", true, false);
const bodyStyle = factory.getStyle("Inter", 14, "#444444", false, false);


const document = [
  new Glyph("H", 0, 0, headingStyle),
  new Glyph("i", 16, 0, headingStyle),
  new Glyph("A", 0, 40, bodyStyle),
  new Glyph("I", 10, 40, bodyStyle),
];


console.log(document.map((glyph) => glyph.draw()).join("\n"));`,
    explanation:
      "The Angular example shares glyph style flyweights so the editor can format many characters without duplicating style data.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface GlyphStyle {
  render(char: string, x: number, y: number): string;
}


class SharedGlyphStyle implements GlyphStyle {
  constructor(
    private fontFamily: string,
    private fontSize: number,
    private color: string,
    private bold: boolean,
    private italic: boolean,
  ) {}


  render(char: string, x: number, y: number): string {
    const style = [
      this.fontFamily,
      \`\${this.fontSize}px\`,
      this.color,
      this.bold ? "bold" : "",
      this.italic ? "italic" : "",
    ]
      .filter(Boolean)
      .join(" ");


    return \`Rendering '\${char}' at (\${x}, \${y}) with \${style}\`;
  }
}


class GlyphStyleFactory {
  private styles = new Map<string, SharedGlyphStyle>();


  getStyle(
    fontFamily: string,
    fontSize: number,
    color: string,
    bold: boolean,
    italic: boolean,
  ): SharedGlyphStyle {
    const key = \`\${fontFamily}|\${fontSize}|\${color}|\${bold}|\${italic}\`;
    if (!this.styles.has(key)) {
      this.styles.set(key, new SharedGlyphStyle(fontFamily, fontSize, color, bold, italic));
    }


    return this.styles.get(key)!;
  }
}


class Glyph {
  constructor(
    private char: string,
    private x: number,
    private y: number,
    private style: GlyphStyle,
  ) {}


  draw(): string {
    return this.style.render(this.char, this.x, this.y);
  }
}


function DocumentPreview({ glyphs }: { glyphs: Glyph[] }) {
  return <pre>{glyphs.map((glyph) => glyph.draw()).join("\n")}</pre>;
}


export function App() {
  const glyphs = useMemo(() => {
    const factory = new GlyphStyleFactory();
    const headingStyle = factory.getStyle("Inter", 24, "#111111", true, false);
    const bodyStyle = factory.getStyle("Inter", 14, "#444444", false, false);


    return [
      new Glyph("H", 0, 0, headingStyle),
      new Glyph("i", 16, 0, headingStyle),
      new Glyph("A", 0, 40, bodyStyle),
      new Glyph("I", 10, 40, bodyStyle),
    ];
  }, []);


  return (
    <main>
      <h1>Text Formatting Flyweight</h1>
      <DocumentPreview glyphs={glyphs} />
    </main>
  );
}`,
    explanation:
      "The React example keeps text style objects shared across glyphs so the editor can render formatted text efficiently.",
  },

  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface GlyphStyle {
  render(char: string, x: number, y: number): string;
}


class SharedGlyphStyle implements GlyphStyle {
  constructor(
    private fontFamily: string,
    private fontSize: number,
    private color: string,
    private bold: boolean,
    private italic: boolean,
  ) {}


  render(char: string, x: number, y: number): string {
    const style = [
      this.fontFamily,
      \`\${this.fontSize}px\`,
      this.color,
      this.bold ? "bold" : "",
      this.italic ? "italic" : "",
    ]
      .filter(Boolean)
      .join(" ");


    return \`Rendering '\${char}' at (\${x}, \${y}) with \${style}\`;
  }
}


class GlyphStyleFactory {
  private styles = new Map<string, SharedGlyphStyle>();


  getStyle(
    fontFamily: string,
    fontSize: number,
    color: string,
    bold: boolean,
    italic: boolean,
  ): SharedGlyphStyle {
    const key = \`\${fontFamily}|\${fontSize}|\${color}|\${bold}|\${italic}\`;
    if (!this.styles.has(key)) {
      this.styles.set(key, new SharedGlyphStyle(fontFamily, fontSize, color, bold, italic));
    }


    return this.styles.get(key)!;
  }
}


class Glyph {
  constructor(
    private char: string,
    private x: number,
    private y: number,
    private style: GlyphStyle,
  ) {}


  draw(): string {
    return this.style.render(this.char, this.x, this.y);
  }
}


function DocumentPreview({ glyphs }: { glyphs: Glyph[] }) {
  return (
    <View>
      {glyphs.map((glyph, index) => (
        <Text key={index}>{glyph.draw()}</Text>
      ))}
    </View>
  );
}


export function App() {
  const glyphs = useMemo(() => {
    const factory = new GlyphStyleFactory();
    const headingStyle = factory.getStyle("Inter", 24, "#111111", true, false);
    const bodyStyle = factory.getStyle("Inter", 14, "#444444", false, false);


    return [
      new Glyph("H", 0, 0, headingStyle),
      new Glyph("i", 16, 0, headingStyle),
      new Glyph("A", 0, 40, bodyStyle),
      new Glyph("I", 10, 40, bodyStyle),
    ];
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Text Formatting Flyweight</Text>
        <DocumentPreview glyphs={glyphs} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example shares glyph styles to keep formatting data lightweight while rendering many characters.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;
using System.Linq;


public interface IGlyphStyle
{
    string Render(char character, int x, int y);
}


public class SharedGlyphStyle : IGlyphStyle
{
    private readonly string _fontFamily;
    private readonly int _fontSize;
    private readonly string _color;
    private readonly bool _bold;
    private readonly bool _italic;


    public SharedGlyphStyle(string fontFamily, int fontSize, string color, bool bold, bool italic)
    {
        _fontFamily = fontFamily;
        _fontSize = fontSize;
        _color = color;
        _bold = bold;
        _italic = italic;
    }


    public string Render(char character, int x, int y)
    {
        var style = string.Join(" ",
            new[]
            {
                _fontFamily,
                $"{_fontSize}px",
                _color,
                _bold ? "bold" : "",
                _italic ? "italic" : ""
            }.Where(part => !string.IsNullOrWhiteSpace(part))
        );


        return $"Rendering '{character}' at ({x}, {y}) with {style}";
    }
}


public class GlyphStyleFactory
{
    private readonly Dictionary<string, SharedGlyphStyle> _styles = new Dictionary<string, SharedGlyphStyle>();


    public SharedGlyphStyle GetStyle(string fontFamily, int fontSize, string color, bool bold, bool italic)
    {
        var key = $"{fontFamily}|{fontSize}|{color}|{bold}|{italic}";
        if (!_styles.ContainsKey(key))
        {
            _styles[key] = new SharedGlyphStyle(fontFamily, fontSize, color, bold, italic);
        }


        return _styles[key];
    }
}


public class Glyph
{
    private readonly char _character;
    private readonly int _x;
    private readonly int _y;
    private readonly IGlyphStyle _style;


    public Glyph(char character, int x, int y, IGlyphStyle style)
    {
        _character = character;
        _x = x;
        _y = y;
        _style = style;
    }


    public string Draw()
    {
        return _style.Render(_character, _x, _y);
    }
}


var factory = new GlyphStyleFactory();
var headingStyle = factory.GetStyle("Inter", 24, "#111111", true, false);
var bodyStyle = factory.GetStyle("Inter", 14, "#444444", false, false);


var document = new List<Glyph>
{
    new Glyph('H', 0, 0, headingStyle),
    new Glyph('i', 16, 0, headingStyle),
    new Glyph('A', 0, 40, bodyStyle),
    new Glyph('I', 10, 40, bodyStyle)
};


Console.WriteLine(string.Join(Environment.NewLine, document.Select(glyph => glyph.Draw())));`,
    explanation:
      "The C# example shares glyph style objects so many characters can reuse the same font and formatting data.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;


public interface IGlyphStyle
{
    string Render(char character, int x, int y);
}


public class SharedGlyphStyle : IGlyphStyle
{
    private readonly string _fontFamily;
    private readonly int _fontSize;
    private readonly string _color;
    private readonly bool _bold;
    private readonly bool _italic;


    public SharedGlyphStyle(string fontFamily, int fontSize, string color, bool bold, bool italic)
    {
        _fontFamily = fontFamily;
        _fontSize = fontSize;
        _color = color;
        _bold = bold;
        _italic = italic;
    }


    public string Render(char character, int x, int y)
    {
        var style = string.Join(" ",
            new[]
            {
                _fontFamily,
                $"{_fontSize}px",
                _color,
                _bold ? "bold" : "",
                _italic ? "italic" : ""
            }.Where(part => !string.IsNullOrWhiteSpace(part))
        );


        return $"Rendering '{character}' at ({x}, {y}) with {style}";
    }
}


public class GlyphStyleFactory
{
    private readonly Dictionary<string, SharedGlyphStyle> _styles = new Dictionary<string, SharedGlyphStyle>();


    public SharedGlyphStyle GetStyle(string fontFamily, int fontSize, string color, bool bold, bool italic)
    {
        var key = $"{fontFamily}|{fontSize}|{color}|{bold}|{italic}";
        if (!_styles.ContainsKey(key))
        {
            _styles[key] = new SharedGlyphStyle(fontFamily, fontSize, color, bold, italic);
        }


        return _styles[key];
    }
}


public class Glyph
{
    private readonly char _character;
    private readonly int _x;
    private readonly int _y;
    private readonly IGlyphStyle _style;


    public Glyph(char character, int x, int y, IGlyphStyle style)
    {
        _character = character;
        _x = x;
        _y = y;
        _style = style;
    }


    public string Draw()
    {
        return _style.Render(_character, _x, _y);
    }
}


var services = new ServiceCollection();
services.AddSingleton<GlyphStyleFactory>();

var provider = services.BuildServiceProvider();
var factory = provider.GetRequiredService<GlyphStyleFactory>();
var headingStyle = factory.GetStyle("Inter", 24, "#111111", true, false);
var bodyStyle = factory.GetStyle("Inter", 14, "#444444", false, false);


var document = new List<Glyph>
{
    new Glyph('H', 0, 0, headingStyle),
    new Glyph('i', 16, 0, headingStyle),
    new Glyph('A', 0, 40, bodyStyle),
    new Glyph('I', 10, 40, bodyStyle)
};


Console.WriteLine(string.Join(Environment.NewLine, document.Select(glyph => glyph.Draw())));`,
    explanation:
      "The .NET version uses a shared glyph style factory so many characters can reuse the same formatting state efficiently.",
  },
];

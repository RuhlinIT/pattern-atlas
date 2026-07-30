import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const textFormattingExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Text {
  render(): string;
}

class PlainText implements Text {
  constructor(private value: string) {}

  render(): string {
    return this.value;
  }
}

abstract class TextDecorator implements Text {
  constructor(protected text: Text) {}

  render(): string {
    return this.text.render();
  }
}

class BoldDecorator extends TextDecorator {
  render(): string {
    return \`<b>\${super.render()}</b>\`;
  }
}

class ItalicDecorator extends TextDecorator {
  render(): string {
    return \`<i>\${super.render()}</i>\`;
  }
}

class UnderlineDecorator extends TextDecorator {
  render(): string {
    return \`<u>\${super.render()}</u>\`;
  }
}

const formatted = new UnderlineDecorator(
  new ItalicDecorator(new BoldDecorator(new PlainText("Pattern Atlas"))),
);

console.log(formatted.render());`,
    explanation:
      "Formatting layers wrap the same text component, so styles can be combined dynamically instead of hardcoded into one renderer.",
  },
  {
    language: "Java",
    code: `interface Text {
    String render();
}

class PlainText implements Text {
    private final String value;

    public PlainText(String value) {
        this.value = value;
    }

    public String render() {
        return value;
    }
}

abstract class TextDecorator implements Text {
    protected final Text text;

    public TextDecorator(Text text) {
        this.text = text;
    }

    public String render() {
        return text.render();
    }
}

class BoldDecorator extends TextDecorator {
    public BoldDecorator(Text text) {
        super(text);
    }

    public String render() {
        return "<b>" + super.render() + "</b>";
    }
}

class ItalicDecorator extends TextDecorator {
    public ItalicDecorator(Text text) {
        super(text);
    }

    public String render() {
        return "<i>" + super.render() + "</i>";
    }
}

class UnderlineDecorator extends TextDecorator {
    public UnderlineDecorator(Text text) {
        super(text);
    }

    public String render() {
        return "<u>" + super.render() + "</u>";
    }
}

Text formatted =
    new UnderlineDecorator(
        new ItalicDecorator(
            new BoldDecorator(new PlainText("Pattern Atlas"))
        )
    );

System.out.println(formatted.render());`,
    explanation:
      "Each decorator adds a formatting concern while preserving the same render contract as the base text component.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class Text(ABC):
    @abstractmethod
    def render(self) -> str:
        pass

class PlainText(Text):
    def __init__(self, value: str) -> None:
        self.value = value

    def render(self) -> str:
        return self.value

class TextDecorator(Text):
    def __init__(self, text: Text) -> None:
        self.text = text

    def render(self) -> str:
        return self.text.render()

class BoldDecorator(TextDecorator):
    def render(self) -> str:
        return f"<b>{super().render()}</b>"

class ItalicDecorator(TextDecorator):
    def render(self) -> str:
        return f"<i>{super().render()}</i>"

class UnderlineDecorator(TextDecorator):
    def render(self) -> str:
        return f"<u>{super().render()}</u>"

formatted = UnderlineDecorator(
    ItalicDecorator(
        BoldDecorator(PlainText("Pattern Atlas"))
    )
)

print(formatted.render())`,
    explanation:
      "The formatter chain adds output behavior in layers, which makes combinations flexible without changing the plain text class.",
  },
  {
    language: "Angular",
    code: `interface Text {
  render(): string;
}


class PlainText implements Text {
  constructor(private value: string) {}


  render(): string {
    return this.value;
  }
}


abstract class TextDecorator implements Text {
  constructor(protected text: Text) {}


  render(): string {
    return this.text.render();
  }
}


class BoldDecorator extends TextDecorator {
  render(): string {
    return \`<b>\${super.render()}</b>\`;
  }
}


class ItalicDecorator extends TextDecorator {
  render(): string {
    return \`<i>\${super.render()}</i>\`;
  }
}


class UnderlineDecorator extends TextDecorator {
  render(): string {
    return \`<u>\${super.render()}</u>\`;
  }
}


const formatted = new UnderlineDecorator(
  new ItalicDecorator(new BoldDecorator(new PlainText('Pattern Atlas'))),
);


console.log(formatted.render());`,
    explanation:
      "Formatting decorators wrap the same Text contract, so Angular code can combine styles dynamically without hardcoding every rendering combination.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface Text {
  render(): string;
}

class PlainText implements Text {
  constructor(private value: string) {}

  render(): string {
    return this.value;
  }
}

abstract class TextDecorator implements Text {
  constructor(protected text: Text) {}

  render(): string {
    return this.text.render();
  }
}

class BoldDecorator extends TextDecorator {
  render(): string {
    return \`<b>\${super.render()}</b>\`;
  }
}

class ItalicDecorator extends TextDecorator {
  render(): string {
    return \`<i>\${super.render()}</i>\`;
  }
}

class UnderlineDecorator extends TextDecorator {
  render(): string {
    return \`<u>\${super.render()}</u>\`;
  }
}

function Preview({ text }: { text: Text }) {
  return <div dangerouslySetInnerHTML={{ __html: text.render() }} />;
}

export function App() {
  const formatted = useMemo(
    () => new UnderlineDecorator(new ItalicDecorator(new BoldDecorator(new PlainText("Pattern Atlas")))),
    []
  );

  return (
    <main>
      <h1>Text Formatting</h1>
      <Preview text={formatted} />
    </main>
  );
}`,
    explanation:
      "The React example layers formatting decorators around the same text object, so the UI can render combined styles without baking every combination into one component.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";

interface TextValue {
  render(): string;
}

class PlainText implements TextValue {
  constructor(private value: string) {}

  render(): string {
    return this.value;
  }
}

abstract class TextDecorator implements TextValue {
  constructor(protected text: TextValue) {}

  render(): string {
    return this.text.render();
  }
}

class BoldDecorator extends TextDecorator {
  render(): string {
    return \`<b>\${super.render()}</b>\`;
  }
}

class ItalicDecorator extends TextDecorator {
  render(): string {
    return \`<i>\${super.render()}</i>\`;
  }
}

class UnderlineDecorator extends TextDecorator {
  render(): string {
    return \`<u>\${super.render()}</u>\`;
  }
}

function Preview({ text }: { text: TextValue }) {
  return (
    <View>
      <Text>{text.render()}</Text>
    </View>
  );
}

export function App() {
  const formatted = useMemo(
    () => new UnderlineDecorator(new ItalicDecorator(new BoldDecorator(new PlainText("Pattern Atlas")))),
    []
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Text Formatting</Text>
        <Preview text={formatted} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same decorator chain, but displays the formatted text in a mobile-friendly layout.",
  },
  {
    language: "C#",
    code: `using System;

public interface IText
{
    string Render();
}

public class PlainText : IText
{
    private readonly string _value;

    public PlainText(string value)
    {
        _value = value;
    }

    public string Render()
    {
        return _value;
    }
}

public abstract class TextDecorator : IText
{
    protected readonly IText Text;

    protected TextDecorator(IText text)
    {
        Text = text;
    }

    public virtual string Render()
    {
        return Text.Render();
    }
}

public class BoldDecorator : TextDecorator
{
    public BoldDecorator(IText text) : base(text) { }

    public override string Render()
    {
        return $"<b>{base.Render()}</b>";
    }
}

public class ItalicDecorator : TextDecorator
{
    public ItalicDecorator(IText text) : base(text) { }

    public override string Render()
    {
        return $"<i>{base.Render()}</i>";
    }
}

public class UnderlineDecorator : TextDecorator
{
    public UnderlineDecorator(IText text) : base(text) { }

    public override string Render()
    {
        return $"<u>{base.Render()}</u>";
    }
}

IText formatted =
    new UnderlineDecorator(
        new ItalicDecorator(
            new BoldDecorator(new PlainText("Pattern Atlas"))
        )
    );

Console.WriteLine(formatted.Render());`,
    explanation:
      "The C# example keeps the render contract stable while each decorator adds one formatting layer around the base text.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface IText
{
    string Render();
}

public class PlainText : IText
{
    private readonly string _value;

    public PlainText(string value)
    {
        _value = value;
    }

    public string Render()
    {
        return _value;
    }
}

public abstract class TextDecorator : IText
{
    protected readonly IText Text;

    protected TextDecorator(IText text)
    {
        Text = text;
    }

    public virtual string Render()
    {
        return Text.Render();
    }
}

public class BoldDecorator : TextDecorator
{
    public BoldDecorator(IText text) : base(text) { }

    public override string Render()
    {
        return $"<b>{base.Render()}</b>";
    }
}

public class ItalicDecorator : TextDecorator
{
    public ItalicDecorator(IText text) : base(text) { }

    public override string Render()
    {
        return $"<i>{base.Render()}</i>";
    }
}

public class UnderlineDecorator : TextDecorator
{
    public UnderlineDecorator(IText text) : base(text) { }

    public override string Render()
    {
        return $"<u>{base.Render()}</u>";
    }
}

var services = new ServiceCollection();
services.AddSingleton<IText>(
    new UnderlineDecorator(
        new ItalicDecorator(
            new BoldDecorator(new PlainText("Pattern Atlas"))
        )
    )
);

var provider = services.BuildServiceProvider();
var formatted = provider.GetRequiredService<IText>();

Console.WriteLine(formatted.Render());`,
    explanation:
      "The .NET version shows the same layered formatter composition with dependency injection, so styles can be stacked without changing the plain text implementation.",
  },
];

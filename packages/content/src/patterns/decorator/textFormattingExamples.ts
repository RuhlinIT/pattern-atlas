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
];
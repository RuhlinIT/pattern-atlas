import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const virtualImageProxyExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Image {
  display(): string;
}


class HighResolutionImage implements Image {
  constructor(private filename: string) {}


  display(): string {
    return \`Displaying high-resolution image: \${this.filename}\`;
  }
}


class ImageProxy implements Image {
  private realImage: HighResolutionImage | null = null;


  constructor(private filename: string) {}


  display(): string {
    if (!this.realImage) {
      this.realImage = new HighResolutionImage(this.filename);
    }


    return this.realImage.display();
  }
}


const image = new ImageProxy("vacation-photo.png");
console.log("Preview loaded");
console.log(image.display());`,
    explanation:
      "The virtual image proxy delays loading the real image until it is actually needed, which saves memory and startup time.",
  },
  {
    language: "Java",
    code: `interface Image {
    String display();
}


class HighResolutionImage implements Image {
    private final String filename;


    public HighResolutionImage(String filename) {
        this.filename = filename;
    }


    public String display() {
        return "Displaying high-resolution image: " + filename;
    }
}


class ImageProxy implements Image {
    private final String filename;
    private HighResolutionImage realImage;


    public ImageProxy(String filename) {
        this.filename = filename;
    }


    public String display() {
        if (realImage == null) {
            realImage = new HighResolutionImage(filename);
        }


        return realImage.display();
    }
}


Image image = new ImageProxy("vacation-photo.png");
System.out.println("Preview loaded");
System.out.println(image.display());`,
    explanation:
      "The virtual proxy keeps the heavyweight image object out of memory until the client requests the full image.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class Image(ABC):
    @abstractmethod
    def display(self) -> str:
        pass


class HighResolutionImage(Image):
    def __init__(self, filename: str) -> None:
        self.filename = filename


    def display(self) -> str:
        return f"Displaying high-resolution image: {self.filename}"


class ImageProxy(Image):
    def __init__(self, filename: str) -> None:
        self.filename = filename
        self.real_image: HighResolutionImage | None = None


    def display(self) -> str:
        if self.real_image is None:
            self.real_image = HighResolutionImage(self.filename)
        return self.real_image.display()


image = ImageProxy("vacation-photo.png")
print("Preview loaded")
print(image.display())`,
    explanation:
      "The image proxy acts as a lightweight placeholder and creates the expensive image object only when display is called.",
  },
  {
    language: "Angular",
    code: `interface Image {
  display(): string;
}


class HighResolutionImage implements Image {
  constructor(private filename: string) {}


  display(): string {
    return \`Displaying high-resolution image: \${this.filename}\`;
  }
}


class ImageProxy implements Image {
  private realImage: HighResolutionImage | null = null;


  constructor(private filename: string) {}


  display(): string {
    if (!this.realImage) {
      this.realImage = new HighResolutionImage(this.filename);
    }


    return this.realImage.display();
  }
}


const image = new ImageProxy("vacation-photo.png");
console.log("Preview loaded");
console.log(image.display());`,
    explanation:
      "The Angular example uses a virtual proxy so the UI can show placeholders without paying the cost of loading the full image immediately.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface Image {
  display(): string;
}


class HighResolutionImage implements Image {
  constructor(private filename: string) {}


  display(): string {
    return \`Displaying high-resolution image: \${this.filename}\`;
  }
}


class ImageProxy implements Image {
  private realImage: HighResolutionImage | null = null;


  constructor(private filename: string) {}


  display(): string {
    if (!this.realImage) {
      this.realImage = new HighResolutionImage(this.filename);
    }


    return this.realImage.display();
  }
}


function ImagePreview({ image }: { image: Image }) {
  return <p>{image.display()}</p>;
}


export function App() {
  const image = useMemo(() => new ImageProxy("vacation-photo.png"), []);


  return (
    <main>
      <h1>Virtual Image Proxy</h1>
      <ImagePreview image={image} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the image loading behind a proxy so the UI can defer expensive image creation until display time.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface Image {
  display(): string;
}


class HighResolutionImage implements Image {
  constructor(private filename: string) {}


  display(): string {
    return \`Displaying high-resolution image: \${this.filename}\`;
  }
}


class ImageProxy implements Image {
  private realImage: HighResolutionImage | null = null;


  constructor(private filename: string) {}


  display(): string {
    if (!this.realImage) {
      this.realImage = new HighResolutionImage(this.filename);
    }


    return this.realImage.display();
  }
}


function ImagePreview({ image }: { image: Image }) {
  return (
    <View>
      <Text>{image.display()}</Text>
    </View>
  );
}


export function App() {
  const image = useMemo(() => new ImageProxy("vacation-photo.png"), []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Virtual Image Proxy</Text>
        <ImagePreview image={image} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the proxy to delay loading the heavy image until the mobile UI actually needs it.",
  },
  {
    language: "C#",
    code: `using System;


public interface IImage
{
    string Display();
}


public class HighResolutionImage : IImage
{
    private readonly string _filename;


    public HighResolutionImage(string filename)
    {
        _filename = filename;
    }


    public string Display()
    {
        return $"Displaying high-resolution image: {_filename}";
    }
}


public class ImageProxy : IImage
{
    private readonly string _filename;
    private HighResolutionImage _realImage;


    public ImageProxy(string filename)
    {
        _filename = filename;
    }


    public string Display()
    {
        if (_realImage == null)
        {
            _realImage = new HighResolutionImage(_filename);
        }


        return _realImage.Display();
    }
}


var image = new ImageProxy("vacation-photo.png");
Console.WriteLine("Preview loaded");
Console.WriteLine(image.Display());`,
    explanation:
      "The C# virtual proxy postpones creating the expensive image object until the client requests it.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface IImage
{
    string Display();
}


public class HighResolutionImage : IImage
{
    private readonly string _filename;


    public HighResolutionImage(string filename)
    {
        _filename = filename;
    }


    public string Display()
    {
        return $"Displaying high-resolution image: {_filename}";
    }
}


public class ImageProxy : IImage
{
    private readonly string _filename;
    private HighResolutionImage _realImage;


    public ImageProxy(string filename)
    {
        _filename = filename;
    }


    public string Display()
    {
        if (_realImage == null)
        {
            _realImage = new HighResolutionImage(_filename);
        }


        return _realImage.Display();
    }
}


var services = new ServiceCollection();
services.AddSingleton<IImage>(new ImageProxy("vacation-photo.png"));


var provider = services.BuildServiceProvider();
var image = provider.GetRequiredService<IImage>();

Console.WriteLine("Preview loaded");
Console.WriteLine(image.Display());`,
    explanation:
      "The .NET example uses a proxy registered in dependency injection to defer loading the real image until it is displayed.",
  },
];

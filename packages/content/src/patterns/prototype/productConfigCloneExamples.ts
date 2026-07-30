import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const productConfigCloneExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface ProductPrototype {
  clone(): ProductPrototype;
  summary(): string;
}


class ProductConfig implements ProductPrototype {
  constructor(
    public name: string,
    public price: number,
    public options: string[],
  ) {}


  clone(): ProductPrototype {
    return new ProductConfig(this.name, this.price, [...this.options]);
  }


  summary(): string {
    return \`\${this.name} at $\${this.price}: \${this.options.join(", ")}\`;
  }
}


const baseProduct = new ProductConfig("Starter Pack", 49, ["Basic Support", "Email Access"]);
const premiumProduct = baseProduct.clone() as ProductConfig;
premiumProduct.name = "Premium Pack";
premiumProduct.price = 99;
premiumProduct.options.push("Priority Support");


console.log(baseProduct.summary());
console.log(premiumProduct.summary());`,
    explanation:
      "The product prototype lets the commerce system clone a base catalog configuration and then adjust pricing or features for a new offer.",
  },
  {
    language: "Java",
    code: `interface ProductPrototype {
    ProductPrototype clone();
    String summary();
}


class ProductConfig implements ProductPrototype {
    private String name;
    private int price;
    private String[] options;


    public ProductConfig(String name, int price, String[] options) {
        this.name = name;
        this.price = price;
        this.options = options;
    }


    public ProductPrototype clone() {
        return new ProductConfig(name, price, options.clone());
    }


    public String summary() {
        return name + " at $" + price + ": " + String.join(", ", options);
    }
}


ProductConfig baseProduct = new ProductConfig("Starter Pack", 49, new String[] { "Basic Support", "Email Access" });
ProductConfig premiumProduct = (ProductConfig) baseProduct.clone();
premiumProduct = new ProductConfig("Premium Pack", 99, new String[] { "Basic Support", "Email Access", "Priority Support" });


System.out.println(baseProduct.summary());
System.out.println(premiumProduct.summary());`,
    explanation:
      "The product configuration prototype gives the system a reusable base offer that can be cloned and adjusted for different catalog tiers.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod
from copy import deepcopy


class ProductPrototype(ABC):
    @abstractmethod
    def clone(self):
        pass


    @abstractmethod
    def summary(self) -> str:
        pass


class ProductConfig(ProductPrototype):
    def __init__(self, name: str, price: int, options: list[str]) -> None:
        self.name = name
        self.price = price
        self.options = options


    def clone(self):
        return deepcopy(self)


    def summary(self) -> str:
        return f"{self.name} at \${self.price}: {', '.join(self.options)}"


base_product = ProductConfig("Starter Pack", 49, ["Basic Support", "Email Access"])
premium_product = base_product.clone()
premium_product.name = "Premium Pack"
premium_product.price = 99
premium_product.options.append("Priority Support")


print(base_product.summary())
print(premium_product.summary())`,
    explanation:
      "The product prototype makes it simple to duplicate a baseline configuration and then customize the cloned version for a different package.",
  },
  {
    language: "Angular",
    code: `interface ProductPrototype {
  clone(): ProductPrototype;
  summary(): string;
}


class ProductConfig implements ProductPrototype {
  constructor(
    public name: string,
    public price: number,
    public options: string[],
  ) {}


  clone(): ProductPrototype {
    return new ProductConfig(this.name, this.price, [...this.options]);
  }


  summary(): string {
    return \`\${this.name} at $\${this.price}: \${this.options.join(", ")}\`;
  }
}


const baseProduct = new ProductConfig("Starter Pack", 49, ["Basic Support", "Email Access"]);
const premiumProduct = baseProduct.clone() as ProductConfig;
premiumProduct.name = "Premium Pack";
premiumProduct.price = 99;
premiumProduct.options.push("Priority Support");


console.log(baseProduct.summary());
console.log(premiumProduct.summary());`,
    explanation:
      "The Angular example clones a product configuration so the application can reuse a shared package template and adjust each variant as needed.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface ProductPrototype {
  clone(): ProductPrototype;
  summary(): string;
}


class ProductConfig implements ProductPrototype {
  constructor(
    public name: string,
    public price: number,
    public options: string[],
  ) {}


  clone(): ProductPrototype {
    return new ProductConfig(this.name, this.price, [...this.options]);
  }


  summary(): string {
    return \`\${this.name} at $\${this.price}: \${this.options.join(", ")}\`;
  }
}


function ProductPreview({ product }: { product: ProductPrototype }) {
  return <p>{product.summary()}</p>;
}


export function App() {
  const baseProduct = useMemo(
    () => new ProductConfig("Starter Pack", 49, ["Basic Support", "Email Access"]),
    [],
  );


  const premiumProduct = useMemo(() => {
    const cloned = baseProduct.clone() as ProductConfig;
    cloned.name = "Premium Pack";
    cloned.price = 99;
    cloned.options.push("Priority Support");
    return cloned;
  }, [baseProduct]);


  return (
    <main>
      <h1>Product Config Clone</h1>
      <ProductPreview product={baseProduct} />
      <ProductPreview product={premiumProduct} />
    </main>
  );
}`,
    explanation:
      "The React example clones a product prototype so the UI can show a base offer and a modified version without rebuilding the configuration from scratch.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface ProductPrototype {
  clone(): ProductPrototype;
  summary(): string;
}


class ProductConfig implements ProductPrototype {
  constructor(
    public name: string,
    public price: number,
    public options: string[],
  ) {}


  clone(): ProductPrototype {
    return new ProductConfig(this.name, this.price, [...this.options]);
  }


  summary(): string {
    return \`\${this.name} at $\${this.price}: \${this.options.join(", ")}\`;
  }
}


function ProductPreview({ product }: { product: ProductPrototype }) {
  return (
    <View>
      <Text>{product.summary()}</Text>
    </View>
  );
}


export function App() {
  const baseProduct = useMemo(
    () => new ProductConfig("Starter Pack", 49, ["Basic Support", "Email Access"]),
    [],
  );


  const premiumProduct = useMemo(() => {
    const cloned = baseProduct.clone() as ProductConfig;
    cloned.name = "Premium Pack";
    cloned.price = 99;
    cloned.options.push("Priority Support");
    return cloned;
  }, [baseProduct]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Product Config Clone</Text>
        <ProductPreview product={baseProduct} />
        <ProductPreview product={premiumProduct} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses a cloned product configuration to present both the base offer and its customized variant in the mobile UI.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public interface IProductPrototype
{
    IProductPrototype Clone();
    string Summary();
}


public class ProductConfig : IProductPrototype
{
    public string Name { get; set; }
    public int Price { get; set; }
    public List<string> Options { get; set; }


    public ProductConfig(string name, int price, List<string> options)
    {
        Name = name;
        Price = price;
        Options = options;
    }


    public IProductPrototype Clone()
    {
        return new ProductConfig(Name, Price, new List<string>(Options));
    }


    public string Summary()
    {
        return "\${Name} at \${Price}: \${string.Join(\", \", Options)}";
    }
}


var baseProduct = new ProductConfig("Starter Pack", 49, new List<string> { "Basic Support", "Email Access" });
var premiumProduct = (ProductConfig)baseProduct.Clone();
premiumProduct.Name = "Premium Pack";
premiumProduct.Price = 99;
premiumProduct.Options.Add("Priority Support");


Console.WriteLine(baseProduct.Summary());
Console.WriteLine(premiumProduct.Summary());`,
    explanation:
      "The C# prototype pattern lets the commerce system duplicate a product configuration and then update the clone for a new pricing tier.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public interface IProductPrototype
{
    IProductPrototype Clone();
    string Summary();
}


public class ProductConfig : IProductPrototype
{
    public string Name { get; set; }
    public int Price { get; set; }
    public List<string> Options { get; set; }


    public ProductConfig(string name, int price, List<string> options)
    {
        Name = name;
        Price = price;
        Options = options;
    }


    public IProductPrototype Clone()
    {
        return new ProductConfig(Name, Price, new List<string>(Options));
    }


    public string Summary()
    {
        return "\${Name} at \${Price}: \${string.Join(\", \", Options)}";
    }
}


var services = new ServiceCollection();
services.AddSingleton(new ProductConfig("Starter Pack", 49, new List<string> { "Basic Support", "Email Access" }));

var provider = services.BuildServiceProvider();
var baseProduct = provider.GetRequiredService<ProductConfig>();
var premiumProduct = (ProductConfig)baseProduct.Clone();
premiumProduct.Name = "Premium Pack";
premiumProduct.Price = 99;
premiumProduct.Options.Add("Priority Support");


Console.WriteLine(baseProduct.Summary());
Console.WriteLine(premiumProduct.Summary());`,
    explanation:
      "The .NET version registers a product prototype in dependency injection so the app can clone and adapt a base offer for new catalog variants.",
  },
];

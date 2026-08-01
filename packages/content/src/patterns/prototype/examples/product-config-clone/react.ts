import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Product config clone",
  code: "import React, { useMemo } from \"react\";\n\n\ninterface ProductPrototype {\n  clone(): ProductPrototype;\n  summary(): string;\n}\n\n\nclass ProductConfig implements ProductPrototype {\n  constructor(\n    public name: string,\n    public price: number,\n    public options: string[],\n  ) {}\n\n\n  clone(): ProductPrototype {\n    return new ProductConfig(this.name, this.price, [...this.options]);\n  }\n\n\n  summary(): string {\n    return `${this.name} at $${this.price}: ${this.options.join(\", \")}`;\n  }\n}\n\n\nfunction ProductPreview({ product }: { product: ProductPrototype }) {\n  return <p>{product.summary()}</p>;\n}\n\n\nexport function App() {\n  const baseProduct = useMemo(\n    () => new ProductConfig(\"Starter Pack\", 49, [\"Basic Support\", \"Email Access\"]),\n    [],\n  );\n\n\n  const premiumProduct = useMemo(() => {\n    const cloned = baseProduct.clone() as ProductConfig;\n    cloned.name = \"Premium Pack\";\n    cloned.price = 99;\n    cloned.options.push(\"Priority Support\");\n    return cloned;\n  }, [baseProduct]);\n\n\n  return (\n    <main>\n      <h1>Product Config Clone</h1>\n      <ProductPreview product={baseProduct} />\n      <ProductPreview product={premiumProduct} />\n    </main>\n  );\n}",
  explanation: "The React example clones a product prototype so the UI can show a base offer and a modified version without rebuilding the configuration from scratch.",
};

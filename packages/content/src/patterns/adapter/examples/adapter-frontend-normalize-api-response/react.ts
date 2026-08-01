import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "React component consuming adapted data",
  code: "function ProductCard({ product }: { product: ProductCardModel }) {\n  return (\n    <article>\n      <img src={product.imageUrl} alt={product.title} />\n      <h3>{product.title}</h3>\n      <p>{product.price}</p>\n    </article>\n  );\n}",
  explanation:
    "The component remains simple because the adapter already normalized the data.",
};
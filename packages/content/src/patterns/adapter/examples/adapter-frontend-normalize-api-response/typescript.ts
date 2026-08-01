import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "API response to view model",
  code: "type ProductDto = {\n  name: string;\n  cost: number;\n  image_url: string;\n};\n\n\ntype ProductCardModel = {\n  title: string;\n  price: string;\n  imageUrl: string;\n};\n\n\nexport function adaptProductCard(product: ProductDto): ProductCardModel {\n  return {\n    title: product.name,\n    price: new Intl.NumberFormat(\"en-US\", {\n      style: \"currency\",\n      currency: \"USD\",\n    }).format(product.cost),\n    imageUrl: product.image_url,\n  };\n}",
  explanation:
    "The adapter converts transport fields into the exact shape the UI needs.",
};
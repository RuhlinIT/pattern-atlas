import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Angular view-model adapter",
  code: "import { Injectable } from '@angular/core';\n\n\n@Injectable({ providedIn: 'root' })\nexport class ProductAdapter {\n  adapt(dto: ProductDto): ProductCardModel {\n    return {\n      title: dto.name,\n      price: new Intl.NumberFormat('en-US', {\n        style: 'currency',\n        currency: 'USD',\n      }).format(dto.cost),\n      imageUrl: dto.image_url,\n    };\n  }\n}",
  explanation:
    "Angular services are a clean place to keep presentation adapters.",
};
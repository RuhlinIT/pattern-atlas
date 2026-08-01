import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Shared contract adapter",
  code: "export type BackendOrderDto = {\n  id: string;\n  total_cents: number;\n  item_count: number;\n};\n\n\nexport type FrontendOrderViewModel = {\n  id: string;\n  total: string;\n  itemCount: number;\n};\n\n\nexport function adaptOrder(dto: BackendOrderDto): FrontendOrderViewModel {\n  return {\n    id: dto.id,\n    total: new Intl.NumberFormat(\"en-US\", {\n      style: \"currency\",\n      currency: \"USD\",\n    }).format(dto.total_cents / 100),\n    itemCount: dto.item_count,\n  };\n}",
  explanation:
    "A shared adapter keeps frontend and backend contracts explicit and predictable.",
};
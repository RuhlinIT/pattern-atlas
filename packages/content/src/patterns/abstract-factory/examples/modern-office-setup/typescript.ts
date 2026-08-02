import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "TypeScript office factory",
  code: `type OfficeTheme = "modern" | "classic";

type Desk = { style: OfficeTheme; material: string };
type Chair = { style: OfficeTheme; material: string };
type Cabinet = { style: OfficeTheme; material: string };

interface OfficeFactory {
  createDesk(): Desk;
  createChair(): Chair;
  createCabinet(): Cabinet;
}

class ModernOfficeFactory implements OfficeFactory {
  createDesk(): Desk {
    return { style: "modern", material: "aluminum" };
  }

  createChair(): Chair {
    return { style: "modern", material: "mesh" };
  }

  createCabinet(): Cabinet {
    return { style: "modern", material: "steel" };
  }
}`,
  explanation:
    "This TypeScript factory keeps the office family aligned to one theme and material palette.",
};
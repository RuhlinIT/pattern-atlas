import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Angular office factory",
  code: `export type OfficeTheme = "modern" | "classic";

export interface Desk {
  style: OfficeTheme;
  material: string;
}

export interface Chair {
  style: OfficeTheme;
  material: string;
}

export interface Cabinet {
  style: OfficeTheme;
  material: string;
}

export abstract class OfficeFactory {
  abstract createDesk(): Desk;
  abstract createChair(): Chair;
  abstract createCabinet(): Cabinet;
}`,
  explanation:
    "Angular can model a theme-consistent family of office objects with an abstract factory.",
};
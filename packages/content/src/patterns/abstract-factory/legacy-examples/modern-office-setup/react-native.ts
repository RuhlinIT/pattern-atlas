import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "React Native office factory",
  code: `type OfficeTheme = "modern" | "classic";

type Desk = { style: OfficeTheme; material: string };
type Chair = { style: OfficeTheme; material: string };
type Cabinet = { style: OfficeTheme; material: string };

function createOfficeFamily(theme: OfficeTheme) {
  return {
    desk: { style: theme, material: theme === "modern" ? "aluminum" : "wood" } as Desk,
    chair: { style: theme, material: theme === "modern" ? "mesh" : "leather" } as Chair,
    cabinet: { style: theme, material: theme === "modern" ? "steel" : "oak" } as Cabinet,
  };
}`,
  explanation:
    "React Native can use a factory to keep device-specific UI families consistent across screens.",
};
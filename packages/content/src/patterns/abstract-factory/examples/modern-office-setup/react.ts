import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "React office factory",
  code: `type OfficeTheme = "modern" | "classic";

type Desk = { style: OfficeTheme; material: string };
type Chair = { style: OfficeTheme; material: string };
type Cabinet = { style: OfficeTheme; material: string };

function createOfficeFamily(theme: OfficeTheme) {
  const palette = theme === "modern"
    ? { desk: "aluminum", chair: "mesh", cabinet: "steel" }
    : { desk: "wood", chair: "leather", cabinet: "oak" };

  return {
    desk: { style: theme, material: palette.desk },
    chair: { style: theme, material: palette.chair },
    cabinet: { style: theme, material: palette.cabinet },
  };
}`,
  explanation:
    "React can use a factory helper to create a complete office family that stays visually aligned.",
};
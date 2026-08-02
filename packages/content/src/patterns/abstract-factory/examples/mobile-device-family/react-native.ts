import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "React Native device family",
  code: `type Platform = "ios" | "android";

type View = { platform: Platform };
type ActionSheet = { platform: Platform };
type Navigation = { platform: Platform };

function createDeviceFamily(platform: Platform) {
  return {
    view: { platform } satisfies View,
    actionSheet: { platform } satisfies ActionSheet,
    navigation: { platform } satisfies Navigation,
  };
}`,
  explanation:
    "React Native can create a coordinated family of platform-aware mobile objects.",
};
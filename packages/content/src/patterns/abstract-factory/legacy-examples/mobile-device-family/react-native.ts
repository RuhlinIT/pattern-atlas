import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "Mobile device family",
  code: `type Button = {
  render(): string;
};

type Modal = {
  open(): string;
};

type MobileUIFactory = {
  createButton(): Button;
  createModal(): Modal;
};

const createIOSFactory = (): MobileUIFactory => ({
  createButton: () => ({ render: () => "Render iOS button" }),
  createModal: () => ({ open: () => "Open iOS modal" }),
});

const createAndroidFactory = (): MobileUIFactory => ({
  createButton: () => ({ render: () => "Render Android button" }),
  createModal: () => ({ open: () => "Open Android modal" }),
});
`,
  explanation:
    "React Native can use a factory to keep platform-specific mobile UI objects consistent across iOS and Android.",
};
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react = {
  language: "react",
  code: `import React from "react";

type ThemeButtonProps = {
  children: React.ReactNode;
};

type ThemeCardProps = {
  title: string;
  children: React.ReactNode;
};

type ThemeInputProps = {
  placeholder: string;
};

interface ThemeFactory {
  createButton(): React.ComponentType<ThemeButtonProps>;
  createCard(): React.ComponentType<ThemeCardProps>;
  createInput(): React.ComponentType<ThemeInputProps>;
}

const LightButton: React.FC<ThemeButtonProps> = ({ children }) => (
  <button className="rounded bg-white px-4 py-2 text-slate-900 shadow">
    {children}
  </button>
);

const LightCard: React.FC<ThemeCardProps> = ({ title, children }) => (
  <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="mb-4 text-lg font-semibold">{title} · Light</h2>
    {children}
  </section>
);

const LightInput: React.FC<ThemeInputProps> = ({ placeholder }) => (
  <input
    className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900"
    placeholder={"Light " + placeholder}
  />
);

const DarkButton: React.FC<ThemeButtonProps> = ({ children }) => (
  <button className="rounded bg-slate-800 px-4 py-2 text-white shadow">
    {children}
  </button>
);

const DarkCard: React.FC<ThemeCardProps> = ({ title, children }) => (
  <section className="rounded-xl border border-slate-700 bg-slate-900 p-6 text-white shadow-sm">
    <h2 className="mb-4 text-lg font-semibold">{title} · Dark</h2>
    {children}
  </section>
);

const DarkInput: React.FC<ThemeInputProps> = ({ placeholder }) => (
  <input
    className="w-full rounded border border-slate-600 bg-slate-800 px-3 py-2 text-white"
    placeholder={"Dark " + placeholder}
  />
);

class LightThemeFactory implements ThemeFactory {
  createButton(): React.ComponentType<ThemeButtonProps> {
    return LightButton;
  }

  createCard(): React.ComponentType<ThemeCardProps> {
    return LightCard;
  }

  createInput(): React.ComponentType<ThemeInputProps> {
    return LightInput;
  }
}

class DarkThemeFactory implements ThemeFactory {
  createButton(): React.ComponentType<ThemeButtonProps> {
    return DarkButton;
  }

  createCard(): React.ComponentType<ThemeCardProps> {
    return DarkCard;
  }

  createInput(): React.ComponentType<ThemeInputProps> {
    return DarkInput;
  }
}

type ThemePreviewProps = {
  factory: ThemeFactory;
};

const ThemePreview: React.FC<ThemePreviewProps> = ({ factory }) => {
  const Button = factory.createButton();
  const Card = factory.createCard();
  const Input = factory.createInput();

  return (
    <Card title="Theme kit">
      <Input placeholder="Search components" />
      <div className="mt-4">
        <Button>Apply theme</Button>
      </div>
    </Card>
  );
};

export function App() {
  const factory = new DarkThemeFactory();

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <ThemePreview factory={factory} />
    </main>
  );
}
`,
} satisfies PatternLanguageExample;
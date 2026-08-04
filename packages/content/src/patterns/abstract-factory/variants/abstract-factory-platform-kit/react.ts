import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react = {
  language: "react",
  code: `import React from "react";

type PlatformButtonProps = {
  children: React.ReactNode;
};

type PlatformDialogProps = {
  title: string;
  children: React.ReactNode;
};

type PlatformNavBarProps = {
  title: string;
};

interface PlatformFactory {
  createButton(): React.ComponentType<PlatformButtonProps>;
  createDialog(): React.ComponentType<PlatformDialogProps>;
  createNavBar(): React.ComponentType<PlatformNavBarProps>;
}

const IosButton: React.FC<PlatformButtonProps> = ({ children }) => (
  <button className="rounded-full bg-slate-900 px-4 py-2 text-white shadow-sm">
    {children}
  </button>
);

const IosDialog: React.FC<PlatformDialogProps> = ({ title, children }) => (
  <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="mb-3 text-lg font-semibold text-slate-900">{title} · iOS</h2>
    <div className="text-slate-700">{children}</div>
  </section>
);

const IosNavBar: React.FC<PlatformNavBarProps> = ({ title }) => (
  <header className="mb-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
    <div className="text-center text-base font-semibold text-slate-900">{title}</div>
  </header>
);

const AndroidButton: React.FC<PlatformButtonProps> = ({ children }) => (
  <button className="rounded-md bg-emerald-600 px-4 py-2 text-white shadow-sm">
    {children}
  </button>
);

const AndroidDialog: React.FC<PlatformDialogProps> = ({ title, children }) => (
  <section className="rounded-lg border border-emerald-200 bg-white p-6 shadow-sm">
    <h2 className="mb-3 text-lg font-semibold text-slate-900">{title} · Android</h2>
    <div className="text-slate-700">{children}</div>
  </section>
);

const AndroidNavBar: React.FC<PlatformNavBarProps> = ({ title }) => (
  <header className="mb-4 rounded-lg bg-emerald-600 px-4 py-3 shadow-sm">
    <div className="text-left text-base font-semibold text-white">{title}</div>
  </header>
);

class IosPlatformFactory implements PlatformFactory {
  createButton(): React.ComponentType<PlatformButtonProps> {
    return IosButton;
  }

  createDialog(): React.ComponentType<PlatformDialogProps> {
    return IosDialog;
  }

  createNavBar(): React.ComponentType<PlatformNavBarProps> {
    return IosNavBar;
  }
}

class AndroidPlatformFactory implements PlatformFactory {
  createButton(): React.ComponentType<PlatformButtonProps> {
    return AndroidButton;
  }

  createDialog(): React.ComponentType<PlatformDialogProps> {
    return AndroidDialog;
  }

  createNavBar(): React.ComponentType<PlatformNavBarProps> {
    return AndroidNavBar;
  }
}

type AppShellProps = {
  factory: PlatformFactory;
};

const AppShell: React.FC<AppShellProps> = ({ factory }) => {
  const Button = factory.createButton();
  const Dialog = factory.createDialog();
  const NavBar = factory.createNavBar();

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-md">
        <NavBar title="Platform kit" />
        <Dialog title="Permissions">
          <p className="mb-4">
            Allow notifications so the app can send important updates.
          </p>
          <Button>Allow access</Button>
        </Dialog>
      </div>
    </main>
  );
};

export function App() {
  const factory = new IosPlatformFactory();

  return <AppShell factory={factory} />;
}
`,
} satisfies PatternLanguageExample;
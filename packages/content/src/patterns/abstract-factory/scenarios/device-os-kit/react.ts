import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react = {
  language: "react",
  code: `import React, { useMemo, useState } from "react";

interface FileService {
  save(path: string): string;
}

interface NotificationService {
  notify(message: string): string;
}

interface ShareService {
  share(content: string): string;
}

interface DeviceOsFactory {
  createFileService(): FileService;
  createNotificationService(): NotificationService;
  createShareService(): ShareService;
}

class IosFileService implements FileService {
  save(path: string): string {
    return "Saved file to iCloud path: " + path;
  }
}

class IosNotificationService implements NotificationService {
  notify(message: string): string {
    return "Sent iOS notification: " + message;
  }
}

class IosShareService implements ShareService {
  share(content: string): string {
    return "Shared via iOS share sheet: " + content;
  }
}

class AndroidFileService implements FileService {
  save(path: string): string {
    return "Saved file to Android storage path: " + path;
  }
}

class AndroidNotificationService implements NotificationService {
  notify(message: string): string {
    return "Sent Android notification: " + message;
  }
}

class AndroidShareService implements ShareService {
  share(content: string): string {
    return "Shared via Android intent: " + content;
  }
}

class IosDeviceOsFactory implements DeviceOsFactory {
  createFileService(): FileService {
    return new IosFileService();
  }

  createNotificationService(): NotificationService {
    return new IosNotificationService();
  }

  createShareService(): ShareService {
    return new IosShareService();
  }
}

class AndroidDeviceOsFactory implements DeviceOsFactory {
  createFileService(): FileService {
    return new AndroidFileService();
  }

  createNotificationService(): NotificationService {
    return new AndroidNotificationService();
  }

  createShareService(): ShareService {
    return new AndroidShareService();
  }
}

type MobileWorkspaceProps = {
  factory: DeviceOsFactory;
};

const MobileWorkspace: React.FC<MobileWorkspaceProps> = ({ factory }) => {
  const files = useMemo(() => factory.createFileService(), [factory]);
  const notifications = useMemo(() => factory.createNotificationService(), [factory]);
  const sharing = useMemo(() => factory.createShareService(), [factory]);

  const [output, setOutput] = useState("");

  const publishReport = (reportName: string) => {
    const saved = files.save("/reports/" + reportName);
    const notified = notifications.notify(reportName + " is ready");
    const shared = sharing.share(reportName);

    setOutput([saved, notified, shared].join("\\n"));
  };

  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900 p-6 text-white">
      <h2 className="mb-4 text-lg font-semibold">Device OS kit</h2>

      <button
        className="rounded bg-slate-100 px-4 py-2 text-slate-900"
        onClick={() => publishReport("weekly-summary.pdf")}
      >
        Publish report
      </button>

      <pre className="mt-4 whitespace-pre-wrap text-sm text-slate-300">{output}</pre>
    </section>
  );
};

export function App() {
  const factory = new IosDeviceOsFactory();

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <MobileWorkspace factory={factory} />
    </main>
  );
}
`,
} satisfies PatternLanguageExample;
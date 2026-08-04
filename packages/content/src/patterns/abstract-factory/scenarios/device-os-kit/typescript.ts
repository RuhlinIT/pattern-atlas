import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `interface FileService {
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
    return \`Saved file to iCloud path: \${path}\`;
  }
}

class IosNotificationService implements NotificationService {
  notify(message: string): string {
    return \`Sent iOS notification: \${message}\`;
  }
}

class IosShareService implements ShareService {
  share(content: string): string {
    return \`Shared via iOS share sheet: \${content}\`;
  }
}

class AndroidFileService implements FileService {
  save(path: string): string {
    return \`Saved file to Android storage path: \${path}\`;
  }
}

class AndroidNotificationService implements NotificationService {
  notify(message: string): string {
    return \`Sent Android notification: \${message}\`;
  }
}

class AndroidShareService implements ShareService {
  share(content: string): string {
    return \`Shared via Android intent: \${content}\`;
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

class MobileWorkspace {
  private readonly files: FileService;
  private readonly notifications: NotificationService;
  private readonly sharing: ShareService;

  constructor(factory: DeviceOsFactory) {
    this.files = factory.createFileService();
    this.notifications = factory.createNotificationService();
    this.sharing = factory.createShareService();
  }

  publishReport(reportName: string): string {
    const saved = this.files.save("/reports/" + reportName);
    const notified = this.notifications.notify(reportName + " is ready");
    const shared = this.sharing.share(reportName);

    return [saved, notified, shared].join("\\n");
  }
}

const factory: DeviceOsFactory = new IosDeviceOsFactory();
const workspace = new MobileWorkspace(factory);

console.log(workspace.publishReport("weekly-summary.pdf"));
`,
} satisfies PatternLanguageExample;
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular = {
  language: "angular",
  code: `import { Component, Injectable, InjectionToken, inject } from "@angular/core";

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

@Injectable({ providedIn: "root" })
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

@Injectable({ providedIn: "root" })
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

export const DEVICE_OS_FACTORY = new InjectionToken<DeviceOsFactory>("DEVICE_OS_FACTORY");

@Component({
  selector: "app-mobile-workspace",
  standalone: true,
  template: \`
    <section class="rounded-xl border border-slate-700 bg-slate-900 p-6 text-white">
      <h2 class="mb-4 text-lg font-semibold">Device OS kit</h2>
      <button
        class="rounded bg-slate-100 px-4 py-2 text-slate-900"
        (click)="publishReport('weekly-summary.pdf')"
      >
        Publish report
      </button>

      <pre class="mt-4 whitespace-pre-wrap text-sm text-slate-300">{{ output }}</pre>
    </section>
  \`,
})
export class MobileWorkspaceComponent {
  private readonly factory = inject(DEVICE_OS_FACTORY);
  private readonly files = this.factory.createFileService();
  private readonly notifications = this.factory.createNotificationService();
  private readonly sharing = this.factory.createShareService();

  output = "";

  publishReport(reportName: string): void {
    const saved = this.files.save("/reports/" + reportName);
    const notified = this.notifications.notify(reportName + " is ready");
    const shared = this.sharing.share(reportName);

    this.output = [saved, notified, shared].join("\\n");
  }
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [MobileWorkspaceComponent],
  providers: [
    {
      provide: DEVICE_OS_FACTORY,
      useClass: IosDeviceOsFactory,
    },
  ],
  template: \`
    <main class="min-h-screen bg-slate-950 p-8">
      <app-mobile-workspace />
    </main>
  \`,
})
export class AppComponent {}
`,
} satisfies PatternLanguageExample;
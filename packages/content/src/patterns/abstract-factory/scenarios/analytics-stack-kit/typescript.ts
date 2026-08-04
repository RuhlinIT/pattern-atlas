import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `interface EventTracker {
  track(eventName: string): string;
}

interface DashboardPublisher {
  publish(reportName: string): string;
}

interface AlertService {
  sendAlert(message: string): string;
}

interface AnalyticsStackFactory {
  createEventTracker(): EventTracker;
  createDashboardPublisher(): DashboardPublisher;
  createAlertService(): AlertService;
}

class MixpanelEventTracker implements EventTracker {
  track(eventName: string): string {
    return \`Tracked event in Mixpanel: \${eventName}\`;
  }
}

class MixpanelDashboardPublisher implements DashboardPublisher {
  publish(reportName: string): string {
    return \`Published dashboard in Mixpanel: \${reportName}\`;
  }
}

class MixpanelAlertService implements AlertService {
  sendAlert(message: string): string {
    return \`Sent Mixpanel alert: \${message}\`;
  }
}

class DatadogEventTracker implements EventTracker {
  track(eventName: string): string {
    return \`Tracked event in Datadog: \${eventName}\`;
  }
}

class DatadogDashboardPublisher implements DashboardPublisher {
  publish(reportName: string): string {
    return \`Published dashboard in Datadog: \${reportName}\`;
  }
}

class DatadogAlertService implements AlertService {
  sendAlert(message: string): string {
    return \`Sent Datadog alert: \${message}\`;
  }
}

class MixpanelAnalyticsStackFactory implements AnalyticsStackFactory {
  createEventTracker(): EventTracker {
    return new MixpanelEventTracker();
  }

  createDashboardPublisher(): DashboardPublisher {
    return new MixpanelDashboardPublisher();
  }

  createAlertService(): AlertService {
    return new MixpanelAlertService();
  }
}

class DatadogAnalyticsStackFactory implements AnalyticsStackFactory {
  createEventTracker(): EventTracker {
    return new DatadogEventTracker();
  }

  createDashboardPublisher(): DashboardPublisher {
    return new DatadogDashboardPublisher();
  }

  createAlertService(): AlertService {
    return new DatadogAlertService();
  }
}

class AnalyticsWorkspace {
  private readonly tracker: EventTracker;
  private readonly dashboards: DashboardPublisher;
  private readonly alerts: AlertService;

  constructor(factory: AnalyticsStackFactory) {
    this.tracker = factory.createEventTracker();
    this.dashboards = factory.createDashboardPublisher();
    this.alerts = factory.createAlertService();
  }

  launchWeeklyReport(): string {
    const tracked = this.tracker.track("weekly_report_requested");
    const published = this.dashboards.publish("weekly-growth");
    const alerted = this.alerts.sendAlert("Weekly growth dashboard is live");

    return [tracked, published, alerted].join("\\n");
  }
}

const factory: AnalyticsStackFactory = new DatadogAnalyticsStackFactory();
const workspace = new AnalyticsWorkspace(factory);

console.log(workspace.launchWeeklyReport());
`,
} satisfies PatternLanguageExample;
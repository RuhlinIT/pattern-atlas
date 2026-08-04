import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java = {
  language: "java",
  code: `interface EventTracker {
  String track(String eventName);
}

interface DashboardPublisher {
  String publish(String reportName);
}

interface AlertService {
  String sendAlert(String message);
}

interface AnalyticsStackFactory {
  EventTracker createEventTracker();
  DashboardPublisher createDashboardPublisher();
  AlertService createAlertService();
}

class MixpanelEventTracker implements EventTracker {
  @Override
  public String track(String eventName) {
    return "Tracked event in Mixpanel: " + eventName;
  }
}

class MixpanelDashboardPublisher implements DashboardPublisher {
  @Override
  public String publish(String reportName) {
    return "Published dashboard in Mixpanel: " + reportName;
  }
}

class MixpanelAlertService implements AlertService {
  @Override
  public String sendAlert(String message) {
    return "Sent Mixpanel alert: " + message;
  }
}

class DatadogEventTracker implements EventTracker {
  @Override
  public String track(String eventName) {
    return "Tracked event in Datadog: " + eventName;
  }
}

class DatadogDashboardPublisher implements DashboardPublisher {
  @Override
  public String publish(String reportName) {
    return "Published dashboard in Datadog: " + reportName;
  }
}

class DatadogAlertService implements AlertService {
  @Override
  public String sendAlert(String message) {
    return "Sent Datadog alert: " + message;
  }
}

class MixpanelAnalyticsStackFactory implements AnalyticsStackFactory {
  @Override
  public EventTracker createEventTracker() {
    return new MixpanelEventTracker();
  }

  @Override
  public DashboardPublisher createDashboardPublisher() {
    return new MixpanelDashboardPublisher();
  }

  @Override
  public AlertService createAlertService() {
    return new MixpanelAlertService();
  }
}

class DatadogAnalyticsStackFactory implements AnalyticsStackFactory {
  @Override
  public EventTracker createEventTracker() {
    return new DatadogEventTracker();
  }

  @Override
  public DashboardPublisher createDashboardPublisher() {
    return new DatadogDashboardPublisher();
  }

  @Override
  public AlertService createAlertService() {
    return new DatadogAlertService();
  }
}

class AnalyticsWorkspace {
  private final EventTracker tracker;
  private final DashboardPublisher dashboards;
  private final AlertService alerts;

  AnalyticsWorkspace(AnalyticsStackFactory factory) {
    this.tracker = factory.createEventTracker();
    this.dashboards = factory.createDashboardPublisher();
    this.alerts = factory.createAlertService();
  }

  String launchWeeklyReport() {
    String tracked = tracker.track("weekly_report_requested");
    String published = dashboards.publish("weekly-growth");
    String alerted = alerts.sendAlert("Weekly growth dashboard is live");

    return String.join("\\n", tracked, published, alerted);
  }
}

public class Main {
  public static void main(String[] args) {
    AnalyticsStackFactory factory = new DatadogAnalyticsStackFactory();
    AnalyticsWorkspace workspace = new AnalyticsWorkspace(factory);

    System.out.println(workspace.launchWeeklyReport());
  }
}
`,
} satisfies PatternLanguageExample;
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python = {
  language: "python",
  code: `from abc import ABC, abstractmethod


class EventTracker(ABC):
    @abstractmethod
    def track(self, event_name: str) -> str:
        pass


class DashboardPublisher(ABC):
    @abstractmethod
    def publish(self, report_name: str) -> str:
        pass


class AlertService(ABC):
    @abstractmethod
    def send_alert(self, message: str) -> str:
        pass


class AnalyticsStackFactory(ABC):
    @abstractmethod
    def create_event_tracker(self) -> EventTracker:
        pass

    @abstractmethod
    def create_dashboard_publisher(self) -> DashboardPublisher:
        pass

    @abstractmethod
    def create_alert_service(self) -> AlertService:
        pass


class MixpanelEventTracker(EventTracker):
    def track(self, event_name: str) -> str:
        return f"Tracked event in Mixpanel: {event_name}"


class MixpanelDashboardPublisher(DashboardPublisher):
    def publish(self, report_name: str) -> str:
        return f"Published dashboard in Mixpanel: {report_name}"


class MixpanelAlertService(AlertService):
    def send_alert(self, message: str) -> str:
        return f"Sent Mixpanel alert: {message}"


class DatadogEventTracker(EventTracker):
    def track(self, event_name: str) -> str:
        return f"Tracked event in Datadog: {event_name}"


class DatadogDashboardPublisher(DashboardPublisher):
    def publish(self, report_name: str) -> str:
        return f"Published dashboard in Datadog: {report_name}"


class DatadogAlertService(AlertService):
    def send_alert(self, message: str) -> str:
        return f"Sent Datadog alert: {message}"


class MixpanelAnalyticsStackFactory(AnalyticsStackFactory):
    def create_event_tracker(self) -> EventTracker:
        return MixpanelEventTracker()

    def create_dashboard_publisher(self) -> DashboardPublisher:
        return MixpanelDashboardPublisher()

    def create_alert_service(self) -> AlertService:
        return MixpanelAlertService()


class DatadogAnalyticsStackFactory(AnalyticsStackFactory):
    def create_event_tracker(self) -> EventTracker:
        return DatadogEventTracker()

    def create_dashboard_publisher(self) -> DashboardPublisher:
        return DatadogDashboardPublisher()

    def create_alert_service(self) -> AlertService:
        return DatadogAlertService()


class AnalyticsWorkspace:
    def __init__(self, factory: AnalyticsStackFactory) -> None:
        self.tracker = factory.create_event_tracker()
        self.dashboards = factory.create_dashboard_publisher()
        self.alerts = factory.create_alert_service()

    def launch_weekly_report(self) -> str:
        tracked = self.tracker.track("weekly_report_requested")
        published = self.dashboards.publish("weekly-growth")
        alerted = self.alerts.send_alert("Weekly growth dashboard is live")

        return "\\n".join([tracked, published, alerted])


factory: AnalyticsStackFactory = DatadogAnalyticsStackFactory()
workspace = AnalyticsWorkspace(factory)

print(workspace.launch_weekly_report())
`,
} satisfies PatternLanguageExample;
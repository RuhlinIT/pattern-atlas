import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const notificationChannelExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface NotificationSender {
                        send(recipient: string, message: string): void;
                    }


                    class EmailSender implements NotificationSender {
                        send(recipient: string, message: string): void {
                            console.log(\`Email to \${recipient}: \${message}\`);
                        }
                    }


                    class SmsSender implements NotificationSender {
                        send(recipient: string, message: string): void {
                            console.log(\`SMS to \${recipient}: \${message}\`);
                        }
                    }


                    abstract class NotificationService {
                        abstract createSender(): NotificationSender;


                        notify(recipient: string, message: string): void {
                            const sender = this.createSender();
                            sender.send(recipient, message);
                        }
                    }


                    class EmailNotificationService extends NotificationService {
                        createSender(): NotificationSender {
                            return new EmailSender();
                        }
                    }


                    class SmsNotificationService extends NotificationService {
                        createSender(): NotificationSender {
                            return new SmsSender();
                        }
                    }


                    const service: NotificationService = new EmailNotificationService();
                    service.notify("alex@example.com", "Your report is ready.");`,
    explanation:
      "The service owns the notification workflow, while concrete services decide which sender implementation to create.",
  },
  {
    language: "Java",
    code: `interface NotificationSender {
                        void send(String recipient, String message);
                    }


                    class EmailSender implements NotificationSender {
                        public void send(String recipient, String message) {
                            System.out.println("Email to " + recipient + ": " + message);
                        }
                    }


                    class SmsSender implements NotificationSender {
                        public void send(String recipient, String message) {
                            System.out.println("SMS to " + recipient + ": " + message);
                        }
                    }


                    abstract class NotificationService {
                        abstract NotificationSender createSender();


                        public void notify(String recipient, String message) {
                            NotificationSender sender = createSender();
                            sender.send(recipient, message);
                        }
                    }


                    class EmailNotificationService extends NotificationService {
                        NotificationSender createSender() {
                            return new EmailSender();
                        }
                    }


                    class SmsNotificationService extends NotificationService {
                        NotificationSender createSender() {
                            return new SmsSender();
                        }
                    }


                    NotificationService service = new EmailNotificationService();
                    service.notify("alex@example.com", "Your report is ready.");`,
    explanation:
      "The factory method lets subclasses choose the delivery channel without changing the shared notification process.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


                    class NotificationSender(ABC):
                        @abstractmethod
                        def send(self, recipient: str, message: str) -> None:
                            pass


                    class EmailSender(NotificationSender):
                        def send(self, recipient: str, message: str) -> None:
                            print(f"Email to {recipient}: {message}")


                    class SmsSender(NotificationSender):
                        def send(self, recipient: str, message: str) -> None:
                            print(f"SMS to {recipient}: {message}")


                    class NotificationService(ABC):
                        @abstractmethod
                        def create_sender(self) -> NotificationSender:
                            pass


                        def notify(self, recipient: str, message: str) -> None:
                            sender = self.create_sender()
                            sender.send(recipient, message)


                    class EmailNotificationService(NotificationService):
                        def create_sender(self) -> NotificationSender:
                            return EmailSender()


                    class SmsNotificationService(NotificationService):
                        def create_sender(self) -> NotificationSender:
                            return SmsSender()


                    service: NotificationService = EmailNotificationService()
                    service.notify("alex@example.com", "Your report is ready.")`,
    explanation:
      "The creator centralizes notification behavior while subclasses determine which concrete sender is created for delivery.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


                    interface NotificationSender {
                        send(recipient: string, message: string): void;
                    }


                    class EmailSender implements NotificationSender {
                        send(recipient: string, message: string): void {
                            console.log(\`Email to \${recipient}: \${message}\`);
                        }
                    }


                    class SmsSender implements NotificationSender {
                        send(recipient: string, message: string): void {
                            console.log(\`SMS to \${recipient}: \${message}\`);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    abstract class NotificationService {
                        abstract createSender(): NotificationSender;


                        notify(recipient: string, message: string): void {
                            const sender = this.createSender();
                            sender.send(recipient, message);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class EmailNotificationService extends NotificationService {
                        createSender(): NotificationSender {
                            return new EmailSender();
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class SmsNotificationService extends NotificationService {
                        createSender(): NotificationSender {
                            return new SmsSender();
                        }
                    }`,
    explanation:
      "The Angular service defines the notification workflow, while concrete services use the factory method to select the delivery implementation.",
  },
];

import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java = {
  language: "java",
  code: `interface PaymentProvider {
  String charge(int amount);
}

interface StorageProvider {
  String upload(String fileName);
}

interface NotificationProvider {
  String send(String message);
}

interface ProviderKitFactory {
  PaymentProvider createPaymentProvider();
  StorageProvider createStorageProvider();
  NotificationProvider createNotificationProvider();
}

class StripePaymentProvider implements PaymentProvider {
  @Override
  public String charge(int amount) {
    return "Charged $" + amount + " with Stripe";
  }
}

class AwsStorageProvider implements StorageProvider {
  @Override
  public String upload(String fileName) {
    return "Uploaded " + fileName + " to S3";
  }
}

class SendgridNotificationProvider implements NotificationProvider {
  @Override
  public String send(String message) {
    return "Sent email with SendGrid: " + message;
  }
}

class AdyenPaymentProvider implements PaymentProvider {
  @Override
  public String charge(int amount) {
    return "Charged $" + amount + " with Adyen";
  }
}

class AzureBlobStorageProvider implements StorageProvider {
  @Override
  public String upload(String fileName) {
    return "Uploaded " + fileName + " to Azure Blob Storage";
  }
}

class TwilioNotificationProvider implements NotificationProvider {
  @Override
  public String send(String message) {
    return "Sent message with Twilio: " + message;
  }
}

class UsProviderKitFactory implements ProviderKitFactory {
  @Override
  public PaymentProvider createPaymentProvider() {
    return new StripePaymentProvider();
  }

  @Override
  public StorageProvider createStorageProvider() {
    return new AwsStorageProvider();
  }

  @Override
  public NotificationProvider createNotificationProvider() {
    return new SendgridNotificationProvider();
  }
}

class EnterpriseProviderKitFactory implements ProviderKitFactory {
  @Override
  public PaymentProvider createPaymentProvider() {
    return new AdyenPaymentProvider();
  }

  @Override
  public StorageProvider createStorageProvider() {
    return new AzureBlobStorageProvider();
  }

  @Override
  public NotificationProvider createNotificationProvider() {
    return new TwilioNotificationProvider();
  }
}

class CheckoutPlatform {
  private final PaymentProvider payment;
  private final StorageProvider storage;
  private final NotificationProvider notifications;

  CheckoutPlatform(ProviderKitFactory factory) {
    this.payment = factory.createPaymentProvider();
    this.storage = factory.createStorageProvider();
    this.notifications = factory.createNotificationProvider();
  }

  String processOrder(int total, String invoiceFile) {
    String charged = payment.charge(total);
    String uploaded = storage.upload(invoiceFile);
    String sent = notifications.send("Your receipt is ready");

    return String.join("\\n", charged, uploaded, sent);
  }
}

public class Main {
  public static void main(String[] args) {
    ProviderKitFactory factory = new UsProviderKitFactory();
    CheckoutPlatform platform = new CheckoutPlatform(factory);

    System.out.println(platform.processOrder(125, "invoice-1042.pdf"));
  }
}
`,
} satisfies PatternLanguageExample;
import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java = {
  language: "java",
  code: `import java.util.Random;
import java.util.concurrent.CompletableFuture;

interface PaymentProcessor {
  PaymentResult charge(double amount);
}

class PaymentResult {
  private final boolean success;
  private final String transactionId;

  PaymentResult(boolean success, String transactionId) {
    this.success = success;
    this.transactionId = transactionId;
  }

  boolean isSuccess() {
    return success;
  }

  String getTransactionId() {
    return transactionId;
  }
}

class LegacyPaymentGateway {
  LegacyPaymentResponse makePayment(int amountInCents) {
    return new LegacyPaymentResponse(
      1,
      "LEGACY-" + amountInCents + "-" + Integer.toHexString(new Random().nextInt(0xFFFFFF))
    );
  }
}

class LegacyPaymentResponse {
  private final int ok;
  private final String reference;

  LegacyPaymentResponse(int ok, String reference) {
    this.ok = ok;
    this.reference = reference;
  }

  int getOk() {
    return ok;
  }

  String getReference() {
    return reference;
  }
}

class LegacyPaymentAdapter implements PaymentProcessor {
  private final LegacyPaymentGateway legacyGateway;

  LegacyPaymentAdapter(LegacyPaymentGateway legacyGateway) {
    this.legacyGateway = legacyGateway;
  }

  @Override
  public PaymentResult charge(double amount) {
    int amountInCents = (int) Math.round(amount * 100);
    LegacyPaymentResponse result = legacyGateway.makePayment(amountInCents);

    return new PaymentResult(result.getOk() == 1, result.getReference());
  }
}

class CheckoutService {
  private final PaymentProcessor processor;

  CheckoutService(PaymentProcessor processor) {
    this.processor = processor;
  }

  String placeOrder(double total) {
    PaymentResult payment = processor.charge(total);

    if (!payment.isSuccess()) {
      return "Payment failed";
    }

    return "Order confirmed with transaction " + payment.getTransactionId();
  }
}

public class Main {
  public static void main(String[] args) {
    PaymentProcessor processor = new LegacyPaymentAdapter(new LegacyPaymentGateway());
    CheckoutService checkout = new CheckoutService(processor);

    System.out.println(checkout.placeOrder(49.99));
  }
}
`,
} satisfies PatternLanguageExample;
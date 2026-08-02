import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "C# payment bridge",
  code: `public interface IPaymentGateway
{
    void Charge(decimal amount);
}

public class CheckoutService
{
    private readonly IPaymentGateway gateway;

    public CheckoutService(IPaymentGateway gateway)
    {
        gateway = gateway;
        this.gateway = gateway;
    }
}`,
  explanation:
    "C# can bridge checkout behavior with a swappable payment gateway implementation.",
};
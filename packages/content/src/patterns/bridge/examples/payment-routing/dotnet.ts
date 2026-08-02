import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: ".NET payment bridge",
  code: `public interface IPaymentGateway
{
    void Charge(decimal amount);
}

public class CheckoutService
{
    private readonly IPaymentGateway gateway;

    public CheckoutService(IPaymentGateway gateway)
    {
        this.gateway = gateway;
    }
}`,
  explanation:
    ".NET can keep the checkout abstraction independent from provider-specific payment implementations.",
};
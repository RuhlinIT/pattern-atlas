import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "Shipping cost calculation",
  code: "import React, { useMemo } from \"react\";\nimport { SafeAreaView, Text, View } from \"react-native\";\n\ninterface ShippingStrategy {\n  calculate(weight: number): number;\n}\n\nclass StandardShipping implements ShippingStrategy {\n  calculate(weight: number): number {\n    return 5 + weight * 0.5;\n  }\n}\n\nclass ExpressShipping implements ShippingStrategy {\n  calculate(weight: number): number {\n    return 15 + weight * 1.25;\n  }\n}\n\nclass ShippingService {\n  constructor(private strategy: ShippingStrategy) {}\n\n  getCost(weight: number): number {\n    return this.strategy.calculate(weight);\n  }\n}\n\nfunction ShippingQuote({ shipping }: { shipping: ShippingService }) {\n  return (\n    <Text>{\"Cost for 8 lb: $\" + shipping.getCost(8).toFixed(2)}</Text>\n  );\n}\n\nexport function App() {\n  const shipping = useMemo(() => new ShippingService(new ExpressShipping()), []);\n\n  return (\n    <SafeAreaView style={{ flex: 1, justifyContent: \"center\", padding: 24 }}>\n      <View style={{ gap: 16 }}>\n        <Text style={{ fontSize: 24, fontWeight: \"600\" }}>Shipping Cost Calculation</Text>\n        <ShippingQuote shipping={shipping} />\n      </View>\n    </SafeAreaView>\n  );\n}",
  explanation: "The React Native version uses the same strategy-based shipping calculation, but presents the quote in a mobile-friendly layout.",
};

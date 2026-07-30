import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const orderProcessingTemplateExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `abstract class OrderProcessor {
  process(): void {
    this.validateOrder();
    this.chargePayment();
    this.fulfillOrder();
    this.sendConfirmation();
  }


  protected validateOrder(): void {
    console.log("Validating order");
  }


  protected abstract chargePayment(): void;
  protected abstract fulfillOrder(): void;


  protected sendConfirmation(): void {
    console.log("Sending confirmation");
  }
}


class PhysicalOrderProcessor extends OrderProcessor {
  protected chargePayment(): void {
    console.log("Charging payment for physical order");
  }


  protected fulfillOrder(): void {
    console.log("Shipping physical order");
  }
}


class DigitalOrderProcessor extends OrderProcessor {
  protected chargePayment(): void {
    console.log("Charging payment for digital order");
  }


  protected fulfillOrder(): void {
    console.log("Delivering digital product");
  }
}


const physical = new PhysicalOrderProcessor();
physical.process();


const digital = new DigitalOrderProcessor();
digital.process();`,
    explanation:
      "The template method defines the processing sequence once, while subclasses customize payment and fulfillment steps.",
  },
  {
    language: "Java",
    code: `abstract class OrderProcessor {
    public final void process() {
        validateOrder();
        chargePayment();
        fulfillOrder();
        sendConfirmation();
    }


    protected void validateOrder() {
        System.out.println("Validating order");
    }


    protected abstract void chargePayment();
    protected abstract void fulfillOrder();


    protected void sendConfirmation() {
        System.out.println("Sending confirmation");
    }
}


class PhysicalOrderProcessor extends OrderProcessor {
    protected void chargePayment() {
        System.out.println("Charging payment for physical order");
    }


    protected void fulfillOrder() {
        System.out.println("Shipping physical order");
    }
}


class DigitalOrderProcessor extends OrderProcessor {
    protected void chargePayment() {
        System.out.println("Charging payment for digital order");
    }


    protected void fulfillOrder() {
        System.out.println("Delivering digital product");
    }
}


OrderProcessor physical = new PhysicalOrderProcessor();
physical.process();


OrderProcessor digital = new DigitalOrderProcessor();
digital.process();`,
    explanation:
      "The Java example locks in the algorithm flow while allowing subclasses to vary the important steps.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class OrderProcessor(ABC):
    def process(self) -> None:
        self.validate_order()
        self.charge_payment()
        self.fulfill_order()
        self.send_confirmation()


    def validate_order(self) -> None:
        print("Validating order")


    @abstractmethod
    def charge_payment(self) -> None:
        pass


    @abstractmethod
    def fulfill_order(self) -> None:
        pass


    def send_confirmation(self) -> None:
        print("Sending confirmation")


class PhysicalOrderProcessor(OrderProcessor):
    def charge_payment(self) -> None:
        print("Charging payment for physical order")


    def fulfill_order(self) -> None:
        print("Shipping physical order")


class DigitalOrderProcessor(OrderProcessor):
    def charge_payment(self) -> None:
        print("Charging payment for digital order")


    def fulfill_order(self) -> None:
        print("Delivering digital product")


physical = PhysicalOrderProcessor()
physical.process()


digital = DigitalOrderProcessor()
digital.process()`,
    explanation:
      "The Python template method keeps the order flow fixed while subclasses supply the variant steps.",
  },
  {
    language: "Angular",
    code: `abstract class OrderProcessor {
  process(): void {
    this.validateOrder();
    this.chargePayment();
    this.fulfillOrder();
    this.sendConfirmation();
  }


  protected validateOrder(): void {
    console.log("Validating order");
  }


  protected abstract chargePayment(): void;
  protected abstract fulfillOrder(): void;


  protected sendConfirmation(): void {
    console.log("Sending confirmation");
  }
}


class PhysicalOrderProcessor extends OrderProcessor {
  protected chargePayment(): void {
    console.log("Charging payment for physical order");
  }


  protected fulfillOrder(): void {
    console.log("Shipping physical order");
  }
}


class DigitalOrderProcessor extends OrderProcessor {
  protected chargePayment(): void {
    console.log("Charging payment for digital order");
  }


  protected fulfillOrder(): void {
    console.log("Delivering digital product");
  }
}


const physical = new PhysicalOrderProcessor();
physical.process();


const digital = new DigitalOrderProcessor();
digital.process();`,
    explanation:
      "The Angular example shares the order workflow in one base class and lets each subclass fill in its own details.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


abstract class OrderProcessor {
  process(): void {
    this.validateOrder();
    this.chargePayment();
    this.fulfillOrder();
    this.sendConfirmation();
  }


  protected validateOrder(): void {
    console.log("Validating order");
  }


  protected abstract chargePayment(): void;
  protected abstract fulfillOrder(): void;


  protected sendConfirmation(): void {
    console.log("Sending confirmation");
  }
}


class PhysicalOrderProcessor extends OrderProcessor {
  protected chargePayment(): void {
    console.log("Charging payment for physical order");
  }


  protected fulfillOrder(): void {
    console.log("Shipping physical order");
  }
}


class DigitalOrderProcessor extends OrderProcessor {
  protected chargePayment(): void {
    console.log("Charging payment for digital order");
  }


  protected fulfillOrder(): void {
    console.log("Delivering digital product");
  }
}


function OrderPreview({ processor }: { processor: OrderProcessor }) {
  return <p>Order processor ready</p>;
}


export function App() {
  const processor = useMemo(() => new PhysicalOrderProcessor(), []);


  useMemo(() => {
    processor.process();
  }, [processor]);


  return (
    <main>
      <h1>Order Processing Template</h1>
      <OrderPreview processor={processor} />
    </main>
  );
}`,
    explanation:
      "The React example preserves the algorithm structure in the base class while the concrete processor subclasses customize the steps.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


abstract class OrderProcessor {
  process(): void {
    this.validateOrder();
    this.chargePayment();
    this.fulfillOrder();
    this.sendConfirmation();
  }


  protected validateOrder(): void {
    console.log("Validating order");
  }


  protected abstract chargePayment(): void;
  protected abstract fulfillOrder(): void;


  protected sendConfirmation(): void {
    console.log("Sending confirmation");
  }
}


class PhysicalOrderProcessor extends OrderProcessor {
  protected chargePayment(): void {
    console.log("Charging payment for physical order");
  }


  protected fulfillOrder(): void {
    console.log("Shipping physical order");
  }
}


class DigitalOrderProcessor extends OrderProcessor {
  protected chargePayment(): void {
    console.log("Charging payment for digital order");
  }


  protected fulfillOrder(): void {
    console.log("Delivering digital product");
  }
}


function OrderPreview() {
  return (
    <View>
      <Text>Order processor ready</Text>
    </View>
  );
}


export function App() {
  const processor = useMemo(() => new PhysicalOrderProcessor(), []);


  useMemo(() => {
    processor.process();
  }, [processor]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Order Processing Template</Text>
        <OrderPreview />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example demonstrates a fixed processing sequence with customizable steps in subclasses.",
  },
  {
    language: "C#",
    code: `using System;


public abstract class OrderProcessor
{
    public void Process()
    {
        ValidateOrder();
        ChargePayment();
        FulfillOrder();
        SendConfirmation();
    }


    protected virtual void ValidateOrder()
    {
        Console.WriteLine("Validating order");
    }


    protected abstract void ChargePayment();
    protected abstract void FulfillOrder();


    protected virtual void SendConfirmation()
    {
        Console.WriteLine("Sending confirmation");
    }
}


public class PhysicalOrderProcessor : OrderProcessor
{
    protected override void ChargePayment()
    {
        Console.WriteLine("Charging payment for physical order");
    }


    protected override void FulfillOrder()
    {
        Console.WriteLine("Shipping physical order");
    }
}


public class DigitalOrderProcessor : OrderProcessor
{
    protected override void ChargePayment()
    {
        Console.WriteLine("Charging payment for digital order");
    }


    protected override void FulfillOrder()
    {
        Console.WriteLine("Delivering digital product");
    }
}


var physical = new PhysicalOrderProcessor();
physical.Process();


var digital = new DigitalOrderProcessor();
digital.Process();`,
    explanation:
      "The C# template method keeps the algorithm skeleton in the base class and leaves specific steps to derived classes.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public abstract class OrderProcessor
{
    public void Process()
    {
        ValidateOrder();
        ChargePayment();
        FulfillOrder();
        SendConfirmation();
    }


    protected virtual void ValidateOrder()
    {
        Console.WriteLine("Validating order");
    }


    protected abstract void ChargePayment();
    protected abstract void FulfillOrder();


    protected virtual void SendConfirmation()
    {
        Console.WriteLine("Sending confirmation");
    }
}


public class PhysicalOrderProcessor : OrderProcessor
{
    protected override void ChargePayment()
    {
        Console.WriteLine("Charging payment for physical order");
    }


    protected override void FulfillOrder()
    {
        Console.WriteLine("Shipping physical order");
    }
}


public class DigitalOrderProcessor : OrderProcessor
{
    protected override void ChargePayment()
    {
        Console.WriteLine("Charging payment for digital order");
    }


    protected override void FulfillOrder()
    {
        Console.WriteLine("Delivering digital product");
    }
}


var services = new ServiceCollection();
services.AddSingleton<PhysicalOrderProcessor>();
services.AddSingleton<DigitalOrderProcessor>();

var provider = services.BuildServiceProvider();
var physical = provider.GetRequiredService<PhysicalOrderProcessor>();
physical.Process();`,
    explanation:
      "The .NET example resolves a concrete processor through dependency injection while the common workflow stays in the base class.",
  },
];
